import os
import re
import shutil
from functools import cmp_to_key
from pygccxml import declarations
from typing import IO, List, Type, TypeVar

from ParserHelper import ParserHelper

T = TypeVar('T', bound='V8ppParser')


class V8ppParser(ParserHelper):
    """Parses pygccxml declarations into v8pp modules."""

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

    def __init__(self: Type[T], sdk_dir: str):
        """Initialises member variables."""
        self.sdk_dir = sdk_dir
        self.member_classes = set()
        # Dict with path as key and list of declarations/dependencies as value.
        self.declarations = dict()
        self.dependencies = dict()  # For now only base classes.

    @staticmethod
    def set_if_deprecated(decl: declarations.declaration_t) -> str:
        """
        Sets seprecated tag if declaration is deprecated.

        Args:
            decl: pygccxml declaration.

        Returns:
            Deprecated tag if declaration is deprecated.
        """
        return '// [deprecated] ' if ParserHelper.is_deprecated(decl) else ''

    @staticmethod
    def get_full_name(decl: declarations.declaration_t) -> str:
        """
        Gets full name of declaration.

        Args:
            decl: pygccxml declaration.

        Returns:
            Full name of declaration.
        """
        full_name = declarations.declaration_utils.full_name(decl)
        if full_name.startswith('::'):
            return full_name[2:]
        return full_name

    @staticmethod
    def get_full_bind_name(decl: declarations.declaration_t) -> str:
        """
        Gets full name of declaration for binding file.

        Args:
            decl: pygccxml declaration.

        Returns:
            Full name of declaration for binding file.
        """
        full_name = V8ppParser.get_full_name(decl)
        full_name = full_name.replace('::', '_').replace('<', '_').replace('>', '_').replace(' ', '_').strip('_')
        return full_name

    def parse_argument(self: Type[T], arg: str) -> str:
        if arg in self.reserved_keywords:
            return arg + '_'
        return arg

    def parse_member_function(self: Type[T], decl: declarations.calldef_members.member_function_t, output_file: IO) -> None:
        """
        Parses member function declaration.

        Args:
            decl: pygccxml member function.
            output_file: file to write to.
            indent: Optional; indentation to use.
        """
        parent_class_name = self.get_full_name(decl.parent)
        parent_class_name_bind = self.get_full_bind_name(decl.parent)
        function_signature = arg_types = ""
        ret_type = str(decl.return_type)
        if decl.arguments:
            arg_types = ", ".join([str(a) for a in decl.argument_types])
        if decl.has_static:
            function_signature = f"{ret_type}(*)({arg_types})"
        elif decl.has_const:
            function_signature = f"{ret_type}({parent_class_name}::*)({arg_types}) const"
        else:
            function_signature = f"{ret_type}({parent_class_name}::*)({arg_types})"
        function = f"&{parent_class_name}::{decl.name}"
        output_file.write(f"\t{self.set_if_deprecated(decl)}cl_{parent_class_name_bind}.set<{function_signature}>(\"{decl.name}\", {function});\n")

    def parse_member_constructor(self: Type[T], decl: declarations.calldef_members.constructor_t, output_file: IO) -> None:
        """
        Parses constructor declaration.

        Args:
            decl: pygccxml constructor.
            output_file: file to write to.
            indent: Optional; indentation to use.

        Todo: There can only be one constructor.
        """
        # Disable move constructor.
        if decl.arguments and str(decl.parent.name) in str(decl.arguments[0].decl_type):
            return
        arg_types = ""
        parent_class_name_bind = self.get_full_bind_name(decl.parent)
        if decl.arguments:
            arg_types = ", ".join([str(a) for a in decl.argument_types])
        output_file.write(f"\t{self.set_if_deprecated(decl)}cl_{parent_class_name_bind}.ctor<{arg_types}>();\n")

    def parse_member_variable(self: Type[T], decl: declarations.variable.variable_t, output_file: IO) -> None:
        """
        Parses member variable declaration.

        Args:
            decl: pygccxml variable.
            output_file: file to write to.
            indent: Optional; indentation to use.
        """
        parent_class_name = self.get_full_name(decl.parent)
        parent_class_name_bind = self.get_full_bind_name(decl.parent)
        if decl.bits:
            output_file.write(f"\t{self.set_if_deprecated(decl)}cl_{parent_class_name_bind}.set_bitfield(\"{decl.name}\", bitfield_property({parent_class_name}, {decl.name}));\n")
        elif decl.type_qualifiers.has_static:
            variable = f"{parent_class_name}::{decl.name}"
            output_file.write(f"\t{self.set_if_deprecated(decl)}cl_{parent_class_name_bind}.set_static(\"{decl.name}\", {variable});\n")
        # elif decl.type_qualifiers.has_const:
        #     variable = f"&{parent_class_name}::{decl.name}"
        #     output_file.write(f"\t{self.set_if_deprecated(decl)}cl_{parent_class_name_bind}.set(\"{decl.name}\", {variable}, true);\n")
        else:
            variable = f"&{parent_class_name}::{decl.name}"
            output_file.write(f"\t{self.set_if_deprecated(decl)}cl_{parent_class_name_bind}.set(\"{decl.name}\", {variable});\n")

    def parse_member_declaration(self: Type[T], decl: declarations.declaration_t, parent: declarations.class_declaration.class_t, output_file: IO) -> None:
        """
        Parses member declaration.

        Args:
            decl: pygccxml declaration
            output_file: file to write to.
            indent: Optional; indentation to use.
        """
        if self.is_constructor(decl):
            self.parse_member_constructor(decl, output_file)
        elif self.is_destructor(decl):
            pass
        elif self.is_free_operator(decl):
            pass
        elif self.is_member_operator(decl):
            pass
        elif self.is_casting_operator(decl):
            pass
        elif self.is_function(decl):
            self.parse_member_function(decl, output_file)
        elif self.is_variable(decl):
            self.parse_member_variable(decl, output_file)
        elif self.is_enumeration(decl):
            if not decl.name:
                self.parse_enumeration(decl, output_file)
            else:
                self.member_classes.add(decl)
        elif self.is_class(decl):
            self.member_classes.add(decl)

        elif self.is_class_declaration(decl):
            pass
        else:
            raise NotImplementedError(decl.location.file_name, str(decl), decl)

    def parse_class(self: Type[T], decl: declarations.class_declaration.class_t, output_file: IO) -> None:
        """
        Parses class declaration.

        Args:
            decl: pygccxml class.
            output_file: file to write to.
            indent: Optional; indentation to use.
        """
        class_name = self.get_full_name(decl)
        class_name_bind = self.get_full_bind_name(decl)
        parent_class_name = ""
        if decl.bases:
            if decl.location.file_name not in self.dependencies:
                self.dependencies[decl.location.file_name] = list()
            self.dependencies[decl.location.file_name] += [
                base.related_class for base in decl.bases]
            parent_class_name = " ,".join([self.get_full_name(base.related_class) for base in decl.bases])
        output_file.write(f"\n\tv8pp::class_<{class_name}> cl_{class_name_bind}(isolate);\n")
        if parent_class_name:
            output_file.write(f"\tcl_{class_name_bind}.inherit<{parent_class_name}>();\n")
        for public_member in decl.public_members:
            self.parse_member_declaration(public_member, decl, output_file)
        output_file.write("\n")
        output_file.write(f"\tmodule.set(\"{class_name}\", cl_{class_name_bind});\n")

    def parse_free_function(self: Type[T], decl: declarations.free_calldef.free_function_t, output_file: IO) -> None:
        """
        Parses free function declaration.

        Args:
            decl: pygccxml free function.
            output_file: file to write to.
            indent: Optional; indentation to use.
        """
        function = f"&{decl.name}"
        ret_type = str(decl.return_type)
        arg_types = ""
        if decl.arguments:
            arg_types = ", ".join([str(a) for a in decl.argument_types])
        function_signature = f"{ret_type}(*)({arg_types})"
        output_file.write(f"\t{self.set_if_deprecated(decl)}module.set<{function_signature}>(\"{decl.name}\", {function});\n")

    def parse_enumeration(self: Type[T], decl: declarations.enumeration.enumeration_t, output_file: IO) -> None:
        """
        Parses enumeration declaration.

        Args:
            decl: pygccxml enumeration.
            output_file: file to write to.
            indent: Optional; indentation to use.

        Todo: Check if emun class as pygccxml does not expose this.
        Todo: Enums do not work.
        """
        if not decl.name:
            for value in decl.values:
                output_file.write(f"\tmodule.set_const(\"{value[0]}\", {value[0]});\n")
        else:
            class_name = self.get_full_name(decl)
            parent_class_name = "module"
            if isinstance(decl.parent, declarations.class_declaration.class_t):
                parent_class_name = f"cl_{self.get_full_bind_name(decl.parent)}"
            for value in decl.values:
                output_file.write(f"\t{parent_class_name}.set_const(\"{value[0]}\", {class_name}::{value[0]});\n")
            return

            class_name = self.get_full_name(decl)
            class_name_bind = self.get_full_bind_name(decl)
            output_file.write(f"\n\tv8pp::class_<{class_name}> cl_{class_name_bind}(isolate);\n")
            for value in decl.values:
                output_file.write(f"\tcl_{class_name_bind}.set_const(\"{value[0]}\", {class_name}::{value[0]});\n")
                # output_file.write(f"\tcl_{class_name_bind}.set_static(\"{value[0]}\", {class_name}::{value[0]}, true);\n")
            output_file.write("\n")
            output_file.write(f"\tmodule.set(\"{class_name}\", cl_{class_name_bind});\n")

    def parse_declaration(self: Type[T], decl: declarations.declaration_t, output_file: IO) -> None:
        """
        Parses declaration.

        Args:
            decl: pygccxml declaration
            output_file: file to write to.
            indent: Optional; indentation to use.
        """
        if self.is_class(decl):
            self.parse_class(decl, output_file)
        elif self.is_free_function(decl):
            self.parse_free_function(decl, output_file)
        elif self.is_enumeration(decl):
            self.parse_enumeration(decl, output_file)

        elif self.is_typedef(decl):
            pass  # NOTE, can't get the definitions.
        elif self.is_class_declaration(decl):
            pass
            declarations.namespace.namespace_t
        else:
            raise NotImplementedError(decl.location.file_name, str(decl), decl)

        # Parse sub classes.
        while self.member_classes:
            decl_ = self.member_classes.pop()
            if self.is_class(decl_):
                self.parse_class(decl_, output_file)
            elif self.is_enumeration(decl_):
                self.parse_enumeration(decl_, output_file)
            else:
                raise NotImplementedError(decl.location.file_name, str(decl), decl)

    def get_sorted_declarations(self: Type[T]) -> List[str]:
        """
        Sorts the dependencies.

        Returns:
            Sorted list of dependencies.
        """
        def is_dependant(lhs, rhs) -> bool:
            """Is lhs dependant on rhs"""  # class lhs(rhs)
            if lhs == rhs:
                return False
            if (lhs not in self.declarations) or (rhs not in self.dependencies):
                return False
            if set(self.declarations[lhs]) & set(self.dependencies[rhs]):
                return True
            for dep in self.dependencies[rhs]:
                if not self.is_class(dep):
                    continue
                try:
                    if is_dependant(lhs, dep.location.file_name):
                        return True
                except RecursionError:
                    pass
            return False

        # Insertion sort.
        sorted_declarations = list()
        for decl in self.declarations:
            for i in range(len(sorted_declarations)):
                if is_dependant(decl, sorted_declarations[i]):
                    sorted_declarations.insert(i, decl)
                    break
            else:
                sorted_declarations.append(decl)

        return sorted_declarations

    def _get_sorted_declarations(self: Type[T]) -> List[str]:
        """
        Sorts the dependencies.

        Returns:
            Sorted list of dependencies.
        """
        def compare(item1, item2):
            if (item1 in self.declarations) and (item2 in self.dependencies) and (set(self.declarations[item1]) & set(self.dependencies[item2])):
                return -1
            if (item2 in self.declarations) and (item1 in self.dependencies) and (set(self.declarations[item2]) & set(self.dependencies[item1])):
                return 1
            return 0

        return sorted(self.declarations.keys(), key=cmp_to_key(compare))

    def parse_includes(self: Type[T], folder: str) -> None:
        """
        Parses includes for binding files.

        Args:
            folder: to create include bindings files in.
        """
        with open(folder + "/bindings.h", 'w') as output_file:
            output_file.write("#pragma once\n")
            declarations = self.get_sorted_declarations()
            # Add forward declarations.
            for decl_path in declarations:
                output_file.write(f"void bind_{os.path.splitext(os.path.basename(decl_path))[0]}(v8::Isolate*, v8pp::module&);\n")
            if declarations:
                output_file.write("\n")
            # Add forward declarations.
            output_file.write("inline void bind_bakkesmod([[maybe_unused]] v8::Isolate* isolate, v8pp::module& module)\n")
            output_file.write("{\n")
            for decl_path in declarations:
                output_file.write(f"\tbind_{os.path.splitext(os.path.basename(decl_path))[0]}(isolate, module);\n")
            output_file.write("}\n")

    def _parse_includes(self: Type[T], folder: str) -> None:
        """
        Parses includes for binding files.

        Args:
            folder: to create include bindings files in.
        """
        for subdir, dirs, files in os.walk(folder):
            with open(subdir + "/bindings.h", "w") as output_file:
                output_file.write("#pragma once\n")
                # Add includes.
                for dir_path in dirs:
                    output_file.write(f"#include \"./{os.path.basename(dir_path)}/bindings.h\"\n")
                if dirs:
                    output_file.write("\n")
                # Add forward declarations.
                for file_path in files:
                    output_file.write(f"void bind_{os.path.splitext(os.path.basename(file_path))[0]}(v8::Isolate*, v8pp::module&);\n")
                if files:
                    output_file.write("\n")

                dir_name = re.sub(r'(-)', '_', os.path.basename(subdir))
                output_file.write(f"inline void bind_{dir_name}([[maybe_unused]] v8::Isolate* isolate, v8pp::module& module)\n")
                output_file.write("{\n")
                for dir_path in dirs:
                    output_file.write(f"\tbind_{os.path.basename(dir_path)}(isolate, bakkesmod);\n")
                for file_path in files:
                    output_file.write(f"\tbind_{os.path.splitext(os.path.basename(file_path))[0]}(isolate, bakkesmod);\n")
                output_file.write("}\n")

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
                    type_name = re.sub(r'(\s\s+|\s?\&|\s?const)', '', type_name)
                    type_name = type_name.strip()
                    for decl_ in self.declarations[file_name]:
                        if self.is_class(decl_) and decl_.name == type_name:
                            decl_._public_members.append(decl)
                            break
                    else:
                        raise RuntimeError(str(decl), decl)
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
        for file_path in self.declarations:
            filename = os.path.splitext(os.path.basename(file_path))[0]
            dirname = output + os.path.abspath(os.path.dirname(file_path))[len(os.path.abspath(self.sdk_dir)) + 1:]
            file_name = dirname + "/" + filename + ".cpp"
            if not os.path.exists(dirname):
                os.makedirs(dirname)

            with open(file_name, "w") as output_file:
                output_file.write(f"void bind_{os.path.splitext(os.path.basename(file_name))[0]}([[maybe_unused]] v8::Isolate* isolate, v8pp::module& module)\n")
                output_file.write("{\n")
                for decl in self.declarations[file_path]:
                    self.parse_declaration(decl, output_file)
                output_file.write("}\n")

        # Add binding file that includes all the binds in that folder.
        self.parse_includes(os.path.abspath(output))
