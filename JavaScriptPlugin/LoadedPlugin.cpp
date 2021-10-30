/// https://gist.github.com/surusek/4c05e4dcac6b82d18a1a28e6742fc23e
/// https://github.com/nodejs/node/blob/master/src/module_wrap.cc
#include "JavaScriptPlugin.h"

#include "NodeUtils.h"

void Print(const v8::FunctionCallbackInfo<v8::Value>& args) {
  v8::Isolate* isolate = args.GetIsolate();

  v8::HandleScope handleScope(isolate);
  const std::string resourceName = to_string(isolate, args.Data());
  std::string out = fmt::format("[{:s}]: \x1b[90mstdout\x1b[0m:", resourceName);

  for (int i = 0; i < args.Length(); i++) {
    out += " " + to_string(isolate, args[i]);
  }
  BM_LOG("{:s}", out);
}

/// https://github.com/nodejs/node/blob/v16.4.1/test/embedding/embedtest.cc#L47
LoadedPlugin::LoadedPlugin(
    const std::string& resourceName,
    node::MultiIsolatePlatform* platform,
    std::shared_ptr<node::ArrayBufferAllocator> allocator,
    v8::Isolate* isolate,
    uv_loop_t* loop,
    const std::vector<std::string>& args,
    const std::vector<std::string>& execArgs)
    : Name(resourceName),
      platform(platform),
      allocator(std::move(allocator)),
      isolate(isolate),
      loop(loop) {
  BM_TRACE_LOG("creating environment");
  Timer envTimer1;

  initialize(args, execArgs);

  v8::Locker locker(isolate);
  v8::Isolate::Scope isolateScope(isolate);
  v8::HandleScope handleScope(isolate);

  v8::Local<v8::Context> context = gContext.Get(isolate);
  v8::Context::Scope contextScope(context);

  const v8::TryCatch tryCatch(isolate);

  const v8::Local<v8::String> resource = to_v8_string(isolate, Name);
  const v8::Local<v8::Function> function =
      v8::Function::New(context, Print, resource).ToLocalChecked();
  context->Global()
      ->Set(context, to_v8_string(isolate, "print"), function)
      .Check();

  BM_TRACE_LOG("created environment in {:s}", envTimer1.Str());

  const std::string nodeEnvDebugRegex =
      GlobalCVarManager->getCvar("node_env_debug_regex").getStringValue();

  std::string jsPluginPathStr =
      GlobalCVarManager->getCvar("jsp_plugin_dir").getStringValue();
  std::ranges::replace(jsPluginPathStr, '\\', '/');

  BM_TRACE_LOG("loading environment");
  Timer envTimer2;

  // Setup environment.
  const v8::MaybeLocal<v8::Value> loadEnvRet = node::LoadEnvironment(
      env.get(), fmt::format(R"(
process.env.NODE_DEBUG = '{:s}';
const pluginPath = '{:s}';
print('plugin folder:', pluginPath);
const publicRequire = require('module').createRequire(pluginPath + '/');
globalThis.require = publicRequire;

// Setup BakkesMod.
print('loading BakkesMod');
const BakkesMod = process._linkedBinding('bakkesmod');
globalThis.BakkesMod = BakkesMod;
print('loaded BakkesMod');

// Redirect stdout and stderr.
// from https://gist.github.com/pguillory/729616/32aa9dd5b5881f6f2719db835424a7cb96dfdfd6
const old_stdout_write = process.stdout.write;
const old_stderr_write = process.stderr.write;
process.stdout.write = (str, encoding, fd) => {{
    for (const line of str.trim().split(/\r?\n/)) {{
        print('\x1b[90mstdout\x1b[0m:', line);
    }}
}};
process.stderr.write = (str, encoding, fd) => {{
    for (const line of str.trim().split(/\r?\n/)) {{
        print('\x1b[91mstderr\x1b[0m:', line);
    }}
}};
// Reset stdout and stderr.
//process.stdout.write = old_stdout_write;
//process.stderr.write = old_stderr_write;)",
      nodeEnvDebugRegex, jsPluginPathStr).c_str());

  if (loadEnvRet.IsEmpty()) {  // There has been a compilation error.
    // ReportException(isolate, tryCatch);
    BM_ERROR_LOG("{:s}", GetCaughtException(isolate, context, tryCatch));
    this->~LoadedPlugin();
    throw std::runtime_error("Failed to load environment");
  }

  BM_TRACE_LOG("loaded environment in {:s}", envTimer2.Str());

  BM_TRACE_LOG("loading plugin");
  Timer pluginTimer;

  const std::string source = "const plugin = require('" + jsPluginPathStr +
                             "/" + resourceName +
                             ".js');\n"
                             "console.log('plugin exports:', plugin);\n"
                             "plugin\n";
  const v8::Local<v8::Value> plugin = RunScript(isolate, source, resourceName);
  if (plugin.IsEmpty()) {  // There has been a JS exception.
    // ReportException(isolate, tryCatch);
    BM_ERROR_LOG("{:s}", GetCaughtException(isolate, context, tryCatch));
    this->~LoadedPlugin();
    throw std::runtime_error("Failed to create plugin");
  }

  gPlugin.Reset(isolate, plugin);

  BM_TRACE_LOG("plugin: {:s}", to_string(isolate, plugin));
  BM_TRACE_LOG("loaded plugin in {:s}", pluginTimer.Str());
}

/// https://github.com/nodejs/node/blob/v16.4.1/src/api/embed_helpers.cc#L17
/// https://github.com/nodejs/node/blob/v16.4.1/src/api/embed_helpers.cc#L115
LoadedPlugin::~LoadedPlugin() {
  {
    v8::Locker locker(isolate);
    v8::Isolate::Scope isolateScope(isolate);
    // Waits until everything is done.
    const int exitCode = node::SpinEventLoop(env.get()).FromMaybe(1);
    if (exitCode) {
      BM_ERROR_LOG("{:s} returned 0x{:X}", quote(Name), exitCode);
    }
  }

  if (env->can_call_into_js()) {
    // Stop environment.
    node::Stop(env.get());
  }

  if (isolate != nullptr) {
    v8::Locker locker(isolate);
    v8::Isolate::Scope isolateScope(isolate);

    gContext.Reset();
    env.reset();
    isolateData.reset();
  }
}

/// https://github.com/nodejs/node/blob/v16.4.1/src/node_native_module.cc#L231
/// https://github.com/nodejs/node/blob/v16.4.1/src/node.cc#L172
void LoadedPlugin::OnLoad() const {
  BM_TRACE_LOG("OnLoad");

  v8::Locker locker(isolate);
  v8::Isolate::Scope isolateScope(isolate);
  v8::HandleScope handleScope(isolate);

  const v8::Local<v8::Context> context = gContext.Get(isolate);
  v8::Context::Scope contextScope(context);

  const v8::TryCatch tryCatch(isolate);

  constexpr char source[] = "if (typeof plugin.onLoad === 'function') {\n"
                            "   plugin.onLoad();\n"
                            "} else {\n"
                            "   console.warn('plugin has no onLoad function')\n"
                            "}\n";
  const v8::ScriptOrigin origin(
      isolate, to_v8_string(isolate, Name + "::onLoad"), 0, 0, true);
  v8::ScriptCompiler::Source scriptSource(to_v8_string(isolate, source),
                                          origin);
  v8::Local<v8::String> parameters[] = {to_v8_string(isolate, "plugin")};

  const v8::MaybeLocal<v8::Function> maybeFun =
      v8::ScriptCompiler::CompileFunctionInContext(context,
                                                   &scriptSource,
                                                   node::arraysize(parameters),
                                                   parameters,
                                                   0,
                                                   nullptr);

  v8::Local<v8::Function> fun;
  if (!maybeFun.ToLocal(&fun)) {
    BM_ERROR_LOG("Failed to compile onLoad function");
    BM_ERROR_LOG("{:s}", GetCaughtException(isolate, context, tryCatch));
    return;
  }

  v8::Local<v8::Value> arguments[] = {gPlugin.Get(isolate)};
  const v8::MaybeLocal<v8::Value> result =
      fun->Call(context,
                v8::Undefined(isolate),
                static_cast<int>(node::arraysize(arguments)),
                arguments);
  if (result.IsEmpty()) {
    BM_ERROR_LOG("Failed to load plugin");
    BM_ERROR_LOG("{:s}", GetCaughtException(isolate, context, tryCatch));
    return;
  }
}

/// https://github.com/nodejs/node/blob/v16.4.1/src/node_native_module.cc#L231
void LoadedPlugin::OnUnload() const {
  BM_TRACE_LOG("OnUnload");

  v8::Locker locker(isolate);
  v8::Isolate::Scope isolateScope(isolate);
  v8::HandleScope handleScope(isolate);

  const v8::Local<v8::Context> context = gContext.Get(isolate);
  v8::Context::Scope contextScope(context);

  const v8::TryCatch tryCatch(isolate);

  constexpr char source[] =
      "if (typeof plugin.onUnload === 'function') {\n"
      "   plugin.onUnload();\n"
      "} else {\n"
      "   console.warn('plugin has no onUnload function')\n"
      "}\n";
  const v8::ScriptOrigin origin(
      isolate, to_v8_string(isolate, Name + "::onUnload"), 0, 0, true);
  v8::ScriptCompiler::Source scriptSource(to_v8_string(isolate, source),
                                          origin);
  std::vector<v8::Local<v8::String>> parameters{
      to_v8_string(isolate, "plugin")};

  const v8::MaybeLocal<v8::Function> maybeFun =
      v8::ScriptCompiler::CompileFunctionInContext(
          context,
          &scriptSource,
          parameters.size(),
          parameters.data(),
          0,
          nullptr,
          v8::ScriptCompiler::kEagerCompile);

  v8::Local<v8::Function> fun;
  if (!maybeFun.ToLocal(&fun)) {
    BM_ERROR_LOG("Failed to compile onUnload function");
    BM_ERROR_LOG("{:s}", GetCaughtException(isolate, context, tryCatch));
    return;
  }

  v8::Local<v8::Value> arguments[]{gPlugin.Get(isolate)};
  const v8::MaybeLocal<v8::Value> result =
      fun->Call(context,
                Undefined(isolate),
                static_cast<int>(node::arraysize(arguments)),
                arguments);

  if (result.IsEmpty()) {
    BM_ERROR_LOG("Failed to unload plugin");
    BM_ERROR_LOG("{:s}", GetCaughtException(isolate, context, tryCatch));
    return;
  }
}

/// https://github.com/nodejs/node/blob/v16.4.1/src/api/embed_helpers.cc#L72
void LoadedPlugin::initialize(const std::vector<std::string>& args,
                              const std::vector<std::string>& execArgs) {
  v8::Locker locker(isolate);
  v8::Isolate::Scope isolateScope(isolate);
  isolateData.reset(
      CreateIsolateData(isolate, loop, platform, allocator.get()));

  v8::HandleScope handleScope(isolate);
  const v8::Local<v8::Context> context = node::NewContext(isolate);
  gContext.Reset(isolate, context);
  if (gContext.IsEmpty()) {
    throw std::runtime_error("Failed to initialize V8 Context");
  }

  v8::Context::Scope contextScope(context);
  env.reset(node::CreateEnvironment(isolateData.get(),
                                    context,
                                    args,
                                    execArgs,
                                    node::EnvironmentFlags::kNoFlags));
}
