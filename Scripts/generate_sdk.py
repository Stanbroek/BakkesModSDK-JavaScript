import os
import time
import pickle
import argparse
from pygccxml import utils
from pygccxml import declarations
from pygccxml import parser

from DTsParser import DTsParser
from V8ppParser import V8ppParser
from DebugParser import DebugParser

FILE_DIR = os.path.dirname(__file__)
if len(FILE_DIR) == 0:
    FILE_DIR = "."
PICKLE_CACHE_DIR = FILE_DIR + "/cache/"

BAKKESMODSDK_DIR = FILE_DIR + "/../External/BakkesModSDK/include"
# BAKKESMODSDK_DIR = "%appdata%/bakkesmod/bakkesmod/bakkesmodsdk/include"
# import winreg
# regKey = winreg.OpenKey(winreg.HKEY_CURRENT_USER, 'SOFTWARE\\BakkesMod\\AppPath')
# BAKKESMODSDK_DIR = winreg.QueryValueEx(aKey, 'BakkesModPath')[0] + "\\bakkesmodsdk\\include"


def parse_cpp_file(filename: str, use_cache: bool = True) -> declarations.scopedef_t:
    """
    Parses the cpp file.

    Args:
        filename: Cpp file to parse.
        use_cache: Optional; Whether to use the previous cached output or generate a new one.

    Returns:
        Global scope of the parsed file.
    """
    cache_filename = PICKLE_CACHE_DIR + os.path.splitext(os.path.basename(filename))[0] + ".pickle"
    if use_cache and os.path.exists(cache_filename):
        print(f"INFO Loading cache file {repr(cache_filename)}")
        with open(cache_filename, 'rb') as cache_file:
            start = time.time()
            decls = pickle.load(cache_file)
            end = time.time()
            print("INFO Loaded cache file in %.2fs" % (end - start))
            return decls

    # Find the location of the xml generator (castxml or gccxml).
    generator_path, generator_name = utils.find_xml_generator()
    print(f"INFO Generator {generator_name} {generator_path}")

    # Configure the xml generator.
    xml_generator_config = parser.xml_generator_configuration_t(
        xml_generator_path=generator_path,
        xml_generator=generator_name,
        working_directory=BAKKESMODSDK_DIR,
        cflags="-w -I \"{BAKKESMODSDK_DIR}\"")
        # cflags="-w -D_NODISCARD=[[nodiscard]] -DHINSTANCE=void* -I \"{BAKKESMODSDK_DIR}\""
    )

    # Parse the c++ file.
    start = time.time()
    decls = parser.parse([filename], xml_generator_config)
    end = time.time()
    print("INFO Parsed source file in %.2fs" % (end - start))

    with open(cache_filename, 'wb') as cache_file:
        pickle.dump(declarations.get_global_namespace(decls), cache_file)

    return declarations.get_global_namespace(decls)


def main():
    """
    Generates a new sdk by parsing the cpp sdk.

    Available options:
        - Python interface, -python-interface
        - Pybind11 module, -pybind11-module
        - Raw, -debug
    """
    parser = argparse.ArgumentParser()
    parser.add_argument('file')
    parser.add_argument('-o', dest='output', type=str, default=FILE_DIR + "/out/")
    parser.add_argument('-typescript-declarations', default=False, action='store_true')
    parser.add_argument('-v8pp-module', default=False, action='store_true')
    parser.add_argument('-debug', default=False, action='store_true')
    parser.add_argument('--use-cache', default=False, action='store_true')
    args = parser.parse_args()

    if not (args.typescript_declarations or args.v8pp_module or args.debug):
        parser.error("Must supply what sdk to generate.")
    else:
        decls = parse_cpp_file(args.file, args.use_cache)
        if args.typescript_declarations:
            print(f"INFO Writing typescript declarations to: {args.output}")
            DTsParser(BAKKESMODSDK_DIR).parse_declarations(decls, args.output + '/typescript-declarations/')
        if args.v8pp_module:
            print(f"INFO Writing v8pp module declarations to: {args.output}")
            V8ppParser(BAKKESMODSDK_DIR).parse_declarations(decls, args.output + '/v8pp-module/')
        if args.debug:
            print(f"INFO Writing debug declarations to: {args.output}")
            DebugParser(BAKKESMODSDK_DIR).parse_declarations(decls, args.output + '/xml-debug/')


# When called from the command line.
if __name__ == '__main__':
    main()

# When imported.
elif __name__ == 'generate_sdk':
    use_cache = True
    input_file = "./bakkesmodplugin.cpp"
    decls = parse_cpp_file(input_file, use_cache)

    output = FILE_DIR + "/out/typescript-declarations/"
    print(f"INFO Writing typescript declarations to: {output}")
    parser = DTsParser(BAKKESMODSDK_DIR)
    parser.parse_declarations(decls, output)

    output = FILE_DIR + "/out/v8pp-module/"
    print(f"INFO Writing v8pp module declarations to: {output}")
    parser = V8ppParser(BAKKESMODSDK_DIR)
    parser.parse_declarations(decls, output)

    output = FILE_DIR + "/out/xml-debug/"
    print(f"INFO Writing debug declarations to: {output}")
    parser = DebugParser(BAKKESMODSDK_DIR)
    parser.parse_declarations(decls, output)
