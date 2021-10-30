***Warning***: *compiling the plugin yourself is atm not possible as it requires a modified version of v8pp.*

# BakkesModSDK - JavaScriptPlugin
This plugin adds JavaScript bindings to the bakkesmod sdk through [node.js](https://github.com/nodejs/node/) and [v8pp](https://github.com/pmed/v8pp).

## Generate bindings (*optional*):
- Make sure the `BAKKESMODSDK_DIR` value in [generate_sdk.py](/Scripts/generate_sdk.py) is set to the correct folder.
- Generate the bindings with for example `generate_sdk.py bakkesmodplugin.cpp -v8pp-module`
- Fix all the errors, most of them should be detailed in [bindings.cpp](/JavaScriptPlugin/bindings.cpp).

## Compile plugin:
- Generate node.js project files with `vcbuild.bat -vs2019 -projgen -nobuild -static`.
- Add the BakkesMod plugin code and the generated binding files to the node project.

## Usage:
- Change the plugin directory by changing `jsp_plugin_dir`, default is `${BakkesModFolder}/plugins_js`.
- Load plugins with `jsplugin load ${plugin_name}`.

## Debugging:
- You can change the log level throught the `jsp_log_level` cvar.
- Change the `node_env_debug_regex` cvar to show node envenvironment debug logs.
- Attach a debugger by adding `--inspect` to the `node_arguments` cvar.

![Debugger](https://i.imgur.com/8Jw2qoa.png)

*BakkesMod logs may look different in the release build.*

## Examples:
- see [Examples](/Examples)