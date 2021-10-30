import os
import re
import shutil
import warnings
from pygccxml import declarations
from typing import Dict, IO, List, Set, Type, TypeVar

from ParserHelper import ParserHelper

T = TypeVar('T', bound='DTsParser')

base_indent = 1


class DTsParser(ParserHelper):
    """
    Parses pygccxml declarations into TypeScript declarations.

    TODO's:
        - Add '@Note renamed because it is not assignable to the same property in parent.'
          to 'TutorialWrapper::SpawnBall', 'CameraWrapper::SetLockedFOV',
          'PriXWrapper::SetUniqueId', and 'TornadoPickup::SetTorque'.
        - Fix all linmatch argument types.
        - Remove empty constructors.
    """
    # https://www.w3schools.com/js/js_reserved.asp
    reserved_keywords = [
        'abstract', 'arguments',    'await',        'boolean',
        'break',    'byte',         'case',         'catch',
        'char',     'class',        'const',        'continue',
        'debugger', 'default',      'delete',       'do',
        'double',   'else',         'enum',         'eval',
        'export',   'extends',      'false'         'final',
        'finally',  'float',        'for',          'function',
        'goto',     'if',           'implements',   'import',
        'in',       'instanceof',   'int',          'interface',
        'let',      'long',         'native',       'new',
        'null',     'package',      'private',      'protected',
        'public',   'return',       'short',        'static',
        'super',    'switch',       'synchronized', 'this',
        'throw',    'throws',       'transient',    'true',
        'try',      'typeof',       'var',          'void',
        'volatile', 'while',        'with',         'yield',
    ]

    type_tranlation_table: Dict[str, str] = {
        'bool': 'boolean',
        'char': 'number',
        'char unsigned': 'number',
        'unsigned char': 'number',
        'short': 'number',
        'short unsigned': 'number',
        'unsigned short': 'number',
        'int': 'number',
        'int unsigned': 'number',
        'unsigned int': 'number',
        'long': 'number',
        'long unsigned': 'number',
        'unsigned long': 'number',
        'long long': 'number',
        'long long unsigned': 'number',
        'unsigned long long': 'number',
        'long int': 'number',
        'short int': 'number',
        'long unsigned int': 'boolean',  # Looks like its bit fields.
        'long long unsigned int': 'number',
        'uint8_t': 'number',
        'int32_t': 'number',
        'size_t': 'number',
        'float': 'number',
        'double': 'number',
        'void': 'void',
        'char *': 'string',
        'unsigned char *': 'string',
        'string': 'string',
        'std::string': 'string',
        'wchar_t': 'string',
        'wchar_t *': 'string',
        'wstring': 'string',
        'std::wstring': 'string',
        'uintptr_t': 'bigint',
        'void *': 'any',
        'uintptr_t (*)()': '() => bigint',
        'void (*)()': '() => void'
    }

    value_tranlation_table: Dict[str, str] = {
        'true': 'true',
        'false': 'false',
        'nullptr': 'undefined'
    }

    custom_types: List[str] = [
        'unsigned char [72]',
        'Impl'
    ]

    def __init__(self: Type[T], sdk_dir: str) -> None:
        """Initialises member variables."""
        self.sdk_dir = sdk_dir
        self.typedefs: Dict[str, str] = dict()
        self.declarations: Dict[str, List[declarations.declaration_t]] = dict()
        self.definitions: Dict[str, Set[str]] = dict()
        self.dependencies: Dict[str, Set[str]] = dict()
        self.unimplemented_declarations: Set[str] = set()

        self.current_location = ''
        self.current_access_modifier: Tuple[str, str] = ("", "")

    def get_javascript_function_type_name(self: Type[T], decl_str: str) -> str:
        """
        Gets javascript typing type for function.

        Args:
            decl_str: String representation of the cpp function, expected to look like `std::function<foo(bar, bar)>`.

        Returns:
            Javascript typing type for function.
        """
        ret = decl_str[decl_str.find('<') + 1:decl_str.find('(')].strip()
        # BUG, recursive stuff breaks.
        params = decl_str[decl_str.find('(') + 1: decl_str.rfind(')')].split(',')
        function_arguments = ', '.join([f"unk{i}: {self.get_javascript_type_name(param.strip())}" for i, param in enumerate(params) if len(param) > 0])
        return f"({function_arguments}) => {self.get_javascript_type_name(ret)}"

    def get_javascript_templated_type_name(self: Type[T], decl_str: str) -> str:
        """
        Gets javascript typing type for templated type.

        Args:
            decl_str: String representation of a templated type, expected to look like `foo<bar, bar>`.

        Returns:
            Javascript typing type for templated type.
        """
        # HACK, recursive stuff breaks atm.
        if decl_str == "std::vector<std::pair<std::basic_string<char>, std::basic_string<char> >, std::allocator<std::pair<std::basic_string<char>, std::basic_string<char> > > >":
            return "[string, string][]"
        if decl_str == "std::function<void (std::vector<std::basic_string<char>, std::allocator<std::basic_string<char> > >)>":
            return "(arguments: string[]) => void"
        if decl_str == "void (*)( ::std::vector<std::basic_string<char>, std::allocator<std::basic_string<char> > > )":
            return "(arguments: string[]) => void"
        template = decl_str[:decl_str.find('<')].strip()
        # BUG, recursive stuff breaks.
        types = decl_str[decl_str.find('<') + 1: decl_str.rfind('>')].split(',')
        if template == "std::function":
            return self.get_javascript_function_type_name(decl_str)
        elif template == "std::unique_ptr":
            return self.get_javascript_type_name(types[0].strip())
        elif template == "std::shared_ptr":
            return self.get_javascript_type_name(types[0].strip())
        elif template == "std::vector" or template == "std::initializer_list":
            return f"{self.get_javascript_type_name(types[0].strip())}[]"
        elif template == "std::pair":
            return f"[{self.get_javascript_type_name(types[0].strip())}, {self.get_javascript_type_name(types[1].strip())}]"
        elif template == "std::map":
            return f"{{[key: {self.get_javascript_type_name(types[0].strip())}]: {self.get_javascript_type_name(types[1].strip())}}}"
        elif template == "std::basic_string":
            return "string"
        elif template == "ArrayWrapper":
            return decl_str.replace('<', '_').replace('>', '').replace(' ', '_')
        elif template == "StructArrayWrapper":
            return decl_str.replace('<', '_').replace('>', '').replace(' ', '_')
        else:
            raise RuntimeError(f"Could not parse {repr(decl_str)}")

    def get_javascript_type_name(self: Type[T], decl: declarations.cpptypes.type_t) -> str:
        """
        Gets javascript name of cpp type.

        Args:
            decl: pygccxml cpp type.

        Returns:
            Javascript name of cpp type.
        """
        decl_str = str(decl)
        # Trim whitespaces and stuff.
        decl_str = re.sub(r"(\s\s+|\s?\&|\s?const)", "", decl_str)

        if self.is_templated(decl_str):
            return self.get_javascript_templated_type_name(decl_str)
        if decl_str in self.typedefs:
            return self.get_javascript_type_name(self.typedefs[decl_str])
        if decl_str in self.type_tranlation_table:
            return self.type_tranlation_table[decl_str]

        decl_str = re.sub(r"(\s?\*)", "", decl_str)

        # Remove namespace.
        namespace_idx = decl_str.rfind('::')
        if namespace_idx != -1:
            decl_str = decl_str[namespace_idx + 2:]

        # Set custom structs to any.
        if decl_str in self.custom_types:
            return "undefined"
        if decl_str in self.type_tranlation_table:
            return self.type_tranlation_table[decl_str]

        if self.current_location not in self.dependencies:
            self.dependencies[self.current_location] = set()
        self.dependencies[self.current_location].add(decl_str)

        return decl_str

    def get_javascript_default_value(self: Type[T], default_value: str) -> str:
        """
        Gets javascript name of default cpp value.

        Args:
            decl: Default cpp value.

        Returns:
            Javascript name of default cpp value.
        """
        if default_value in self.value_tranlation_table:
            return self.value_tranlation_table[default_value]

        # Convert floats.
        if default_value.lower().endswith('f'):
            default_value = default_value[:-1]

        return default_value

    def get_javascript_argument_name(self: Type[T], decl: declarations.calldef.argument_t) -> str:
        """
        Gets javascript name of cpp arguments.

        Args:
            decl: pygccxml arguments.

        Returns:
            Javascript name of cpp arguments.
        """
        argument_name = decl.name
        if argument_name in self.reserved_keywords:
            argument_name += '_'
        if decl.default_value:
            return f"{argument_name}?: {self.get_javascript_type_name(decl.decl_type)}"
        return f"{argument_name}: {self.get_javascript_type_name(decl.decl_type)}"

    def parse_dummy(self: Type[T], decl: declarations.declaration_t, output_file: IO, indent: int = 0) -> None:
        """
        Parses declaration.

        Args:
            decl: pygccxml declaration.
            output_file: file to write to.
            indent: Optional; indentation to use.
        """
        output_file.write("    " * indent + f"/** {decl} */\n")

    def parse_function(self: Type[T], decl: declarations.calldef.calldef_t, output_file: IO, indent: int = 0) -> None:
        """
        Parses function declaration.

        Args:
            decl: pygccxml calldef.
            output_file: file to write to.
            indent: Optional; indentation to use.
        """
        output_file.write("    " * indent + f"/** {decl} */\n")
        output_file.write("    " * indent + f"function {decl.name}({', '.join([self.get_javascript_argument_name(a) for a in decl.arguments])}): {self.get_javascript_type_name(decl.return_type)};\n\n")

    def parse_member_function(self: Type[T], decl: declarations.calldef.calldef_t, output_file: IO, indent: int = 0) -> None:
        """
        Parses member function declaration.

        Args:
            decl: pygccxml calldef.
            output_file: file to write to.
            indent: Optional; indentation to use.
        """
        output_file.write("    " * indent + f"/** {decl} */\n")
        output_file.write("    " * indent + f"{self.current_access_modifier[0]}{decl.name}({', '.join([self.get_javascript_argument_name(a) for a in decl.arguments])}): {self.get_javascript_type_name(decl.return_type)};\n\n")

    def parse_variable(self: Type[T], decl: declarations.variable.variable_t, output_file: IO, indent: int = 0) -> None:
        """
        Parses variable declaration.

        Args:
            decl: pygccxml variable.
            output_file: file to write to.
            indent: Optional; indentation to use.
        """
        output_file.write("    " * indent + f"/** {decl} */\n")
        output_file.write("    " * indent + f"{self.current_access_modifier[1]}{decl.name}: {self.get_javascript_type_name(decl.decl_type)};\n\n")

    def parse_class(self: Type[T], decl: declarations.class_declaration.class_t, output_file: IO, indent: int = 0) -> None:
        """
        Parses class declaration.

        Args:
            decl: pygccxml class.
            output_file: file to write to.
            indent: Optional; indentation to use.
        """
        if not decl.public_members and not decl.private_members and not decl.protected_members:
            return
        class_name = decl.name
        if self.is_templated(class_name):
            class_name = class_name.replace('<', '_').replace('>', '').replace(' ', '_')
        parent_class_name = ""
        if decl.bases:
            parent_class_name = " extends " + " ,".join([self.get_javascript_type_name(base.related_class.name) for base in decl.bases])
        # Don't add member classes.
        if indent == base_indent:
            if self.current_location not in self.definitions:
                self.definitions[self.current_location] = set()
            self.definitions[self.current_location].add(class_name)
        output_file.write("    " * indent + f"/** {decl} */\n")
        output_file.write("    " * indent + f"class {class_name}{parent_class_name} {{\n")

        child_declarations = list()
        if decl.public_members:
            self.current_access_modifier = ("public ", "")
            output_file.write("    " * (indent + 1) + "// Public:\n")
            for public_member in decl.public_members:
                child_declarations += self.parse_class_declaration(public_member, output_file, indent + 1)
        # if decl.private_members:
        #     self.current_access_modifier = ("private ", "#")
        #     output_file.write("    " * (indent + 1) + "// Private:\n")
        #     for private_member in decl.private_members:
        #         child_declarations += self.parse_class_declaration(private_member, output_file, indent + 1)
        # if decl.protected_members:
        #     self.current_access_modifier = ("protected ", "#")
        #     output_file.write("    " * (indent + 1) + "// Protected:\n")
        #     for protected_member in decl.protected_members:
        #         child_declarations += self.parse_class_declaration(protected_member, output_file, indent + 1)
        self.current_access_modifier = ("", "")
        output_file.write("    " * indent + "}\n")
        output_file.write("\n")

        for child_declaration in child_declarations:
            self.parse_declaration(child_declaration, output_file, indent)

    def parse_class_declaration(self: Type[T], decl: declarations.declaration_t, output_file: IO, indent: int = base_indent) -> List[declarations.declaration_t]:
        """
        Parses declaration.

        Args:
            decl: pygccxml declaration
            output_file: file to write to.
            indent: Optional; indentation to use.

        Returns:
            Child classes to be parsed later.
        """
        if self.is_class(decl):
            return [decl]
        elif self.is_enumeration(decl):
            return [decl]
        elif self.is_member_function(decl):
            self.parse_member_function(decl, output_file, indent)
        elif self.is_constructor(decl):
            self.parse_constructor(decl, output_file, indent)
        elif self.is_variable(decl):
            self.parse_variable(decl, output_file, indent)
        else:
            # declarations.free_calldef.free_operator_t
            # declarations.calldef_members.casting_operator_t
            # declarations.calldef_members.member_operator_t
            # declarations.calldef_members.destructor_t
            self.unimplemented_declarations.add(type(decl))
            #self.parse_dummy(decl, output_file, indent)
        
        return list()

    def parse_enumeration(self: Type[T], decl: declarations.enumeration.enumeration_t, output_file: IO, indent: int = 0) -> None:
        """
        Parses enumeration declaration.

        Args:
            decl: pygccxml enumeration.
            output_file: file to write to.
            indent: Optional; indentation to use.
        """
        if not decl.values:
            return
        if self.current_location not in self.definitions:
            self.definitions[self.current_location] = set()
        if decl.name:
            # Don't add member classes.
            if indent == base_indent:
                self.definitions[self.current_location].add(decl.name)
            output_file.write("    " * indent + f"/** {decl} */\n")
            output_file.write("    " * indent + f"enum {decl.name} {{\n")
            indent += 1
        for value in decl.values:
            if indent == base_indent:
                output_file.write("    " * indent + f"const {value[0]}: {value[1]};\n")
            else:
                output_file.write("    " * indent + f"{value[0]} = {value[1]},\n")
            # Don't add member classes.
            if not decl.name and indent == base_indent:
                self.definitions[self.current_location].add(value[0])
        if decl.name:
            output_file.write("    " * (indent - 1) + "}\n")
        output_file.write("\n")

    def parse_constructor(self: Type[T], decl: declarations.calldef_members.constructor_t, output_file: IO, indent: int = 0) -> None:
        """
        Parses constructor declaration.

        Args:
            decl: pygccxml constructor.
            output_file: file to write to.
            indent: Optional; indentation to use.
        """
        # Disable move constructor.
        if decl.arguments and self.get_javascript_type_name(decl.parent.name) == self.get_javascript_type_name(decl.arguments[0].decl_type):
            return
        output_file.write("    " * indent + f"/** {decl} */\n")
        output_file.write("    " * indent + f"{self.current_access_modifier[0]}constructor({', '.join([self.get_javascript_argument_name(a) for a in decl.arguments])});\n\n")

    def parse_declaration(self: Type[T], decl: declarations.declaration_t, output_file: IO, indent: int = base_indent) -> None:
        """
        Parses declaration.

        Args:
            decl: pygccxml declaration
            output_file: file to write to.
            indent: Optional; indentation to use.
        """
        if self.is_class(decl):
            self.parse_class(decl, output_file, indent)
        elif self.is_enumeration(decl):
            self.parse_enumeration(decl, output_file, indent)
        elif self.is_free_function(decl):
            self.parse_function(decl, output_file, indent)
        elif self.is_variable(decl):
            self.parse_variable(decl, output_file, indent)
        else:
            # declarations.class_declaration.class_declaration_t
            self.unimplemented_declarations.add(type(decl))
            #self.parse_dummy(decl, output_file, indent)

    def get_dependencies(self: Type[T]) -> Set[str]:
        """
        Gets dependencies

        Returns:
            Set of dependencies.
        """
        deps = set()
        for dependency in self.dependencies:
            deps |= self.dependencies[dependency]
        defs = set()
        for definition in self.definitions:
            defs |= self.definitions[definition]

        return deps - defs

    def add_declarations(self: Type[T], decls: declarations.scopedef_t) -> None:
        """
        Groups any free operators inside there class and add scoped declarations to the global scope.

        Args:
            decl: pygccxml scope declaration
        """
        for decl in decls.declarations:
            if self.is_namespace(decl):
                self.add_declarations(decl)
            elif self.is_bm_declaration(decl):
                file_name = decl.location.file_name
                if file_name not in self.declarations:
                    self.declarations[file_name] = list()
                # Declare free operators inside there class.
                if self.is_free_operator(decl):
                    # HACK, this should work for now.
                    type_name = str(decl.argument_types[0])
                    type_name = re.sub(
                        r'(\s\s+|\s?\&|\s?const)', '', type_name)
                    type_name = type_name.strip()
                    for decl_ in self.declarations[file_name]:
                        if self.is_class(decl_) and decl_.name == type_name:
                            decl_._public_members.append(decl)
                            break
                    else:
                        raise RuntimeError(str(decl), decl)
                # Load all typedefs before parsing declarations.
                elif self.is_typedef(decl):
                    self.typedefs[str(decl)[:-10]] = decl.decl_type
                else:
                    self.declarations[file_name].append(decl)

    def parse_declarations(self: Type[T], decls: declarations.scopedef_t, output: str) -> None:
        """
        Parses scope declarations.

        Args:
            decl: pygccxml scope declaration
            output: file to write to.
        """
        # Removes any excisting files.
        if os.path.exists(os.path.dirname(output)):
            shutil.rmtree(output)
        os.makedirs(output)

        # Group all BM declarations and any free operators inside there class.
        self.add_declarations(decls)

        # Write declarations to file.
        output_file_name = "bakkesmod.d.ts"
        with open(output + output_file_name, "a") as output_file:
            output_file.write("declare namespace BakkesMod {\n")
            output_file.write("    const cvarManager: CVarManagerWrapper;\n")
            output_file.write("    const gameWrapper: GameWrapper;\n\n")
            for file_path in self.declarations:
                dirname = os.path.abspath(os.path.dirname(file_path))[len(os.path.abspath(self.sdk_dir)) + 1:]
                filename = output + dirname + "/" + os.path.splitext(os.path.basename(file_path))[0] + ".d.ts"
                self.current_location = filename
                for decl in self.declarations[file_path]:
                    self.parse_declaration(decl, output_file)
            output_file.write("}\n")

        # Add external dependencies at the top of the file.
        dependencies = self.get_dependencies()
        if dependencies:
            file = ""
            with open(output + output_file_name, "r") as output_file:
                file = output_file.read()
            with open(output + output_file_name, "w") as output_file:
                output_file.write("// Undefined dependencies\n")
                for dependency in dependencies:
                    output_file.write(f"declare class {dependency} {{}}\n")
                output_file.write("\n")
                output_file.write(file)

        if self.unimplemented_declarations:
            print(f"Warning {self.unimplemented_declarations=}")
