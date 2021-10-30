/// Disabled https://github.com/nodejs/node/blob/master/deps/uv/src/win/tty.c#L166
#include "JavaScriptPlugin.h"

#include "NodeUtils.h"

BAKKESMOD_PLUGIN(JavaScriptPlugin,
                 "JavaScriptPlugin",
                 PLUGIN_VERSION,
                 PLUGINTYPE_ALL)

std::filesystem::path BakkesModCrashesFolder;

std::thread::id GameThreadId;
std::thread::id RenderThreadId;

std::shared_ptr<int> LogLevel;
std::shared_ptr<CVarManagerWrapperDebug> GlobalCVarManager;

CVarManagerWrapper* GlobalCVarManager_ptr;
GameWrapper* GlobalGameWrapper_ptr;

// v8pp hacks.
std::unordered_map<node::Environment*, v8pp::detail::classes> v8pp::detail::instances;
std::vector<std::pair<v8::Global<v8::Context>, v8::Global<v8::Function>>> v8pp::lambdaCache;

std::vector<std::filesystem::path> getJavaScriptFilesFromPath(
    const std::filesystem::path& path) {
  std::vector<std::filesystem::path> files;
  if (!std::filesystem::exists(path)) {
    std::filesystem::create_directories(path);
  }

  for (const std::filesystem::directory_entry& file :
       std::filesystem::directory_iterator(path)) {
    const std::filesystem::path& filePath = file.path();
    if (file.is_regular_file() && filePath.extension() == L".js") {
      files.push_back(filePath);
    }
  }

  return files;
}

void JavaScriptPlugin::UnloadAll() {
  BM_TRACE_LOG("Unload all");
  if (loadedPlugins.empty()) {
    BM_TRACE_LOG("No plugins loaded");
    return;
  }

  for (const auto& [loadedPlugin, _] : loadedPlugins) {
    UnloadPlugin(loadedPlugin);
  }
}

void JavaScriptPlugin::ReloadAll() {
  BM_TRACE_LOG("Reload all");
  if (loadedPlugins.empty()) {
    BM_TRACE_LOG("No plugins loaded");
    return;
  }

  for (const auto& [loadedPlugin, _] : loadedPlugins) {
    ReloadPlugin(loadedPlugin);
  }
}

void JavaScriptPlugin::ListPlugins() const {
  BM_TRACE_LOG("List all");
  const std::vector<std::filesystem::path>& files =
      getJavaScriptFilesFromPath(*javaScriptPluginFolder);
  if (files.empty()) {
    BM_ERROR_LOG("Could not find any plugins");
    return;
  }

  for (const std::filesystem::path& file : files) {
    BM_LOG(file.filename().string());
  }
}

std::vector<std::string> parseArgs(
    const std::initializer_list<std::string>& default_args,
    const std::string& args_str) {
  const char delimiter = ' ';
  size_t initialPos = 0;
  size_t pos = args_str.find(delimiter);
  std::vector<std::string> args(default_args);

  // Decompose statement
  while (pos != std::string::npos) {
    args.push_back(args_str.substr(initialPos, pos - initialPos));
    initialPos = pos + 1;

    pos = args_str.find(delimiter, initialPos);
  }

  // Add the last one
  args.push_back(args_str.substr(
      initialPos, std::min(pos, args_str.size()) - initialPos));

  return args;
}

void JavaScriptPlugin::LoadPlugin(const std::string& plugin) {
  BM_TRACE_LOG("loading {:s}", plugin);

  if (loadedPlugins.find(to_lower(plugin)) != loadedPlugins.end()) {
    BM_ERROR_LOG("{:s} is already loaded", plugin);
    return;
  }

  std::shared_ptr<LoadedPlugin> loadedPlugin;
  try {
    const std::vector<std::string> args = parseArgs({plugin}, *nodeEnvArguments);
    std::vector<std::string> execArgs;
    loadedPlugin = std::make_shared<LoadedPlugin>(
        plugin, platform.get(), allocator, isolate, &loop, args, execArgs);
  } catch (const std::runtime_error& e) {
    BM_ERROR_LOG(e.what());
    return;
  }

  loadedPlugins.emplace(to_lower(plugin), loadedPlugin);
  loadedPlugin->OnLoad();
}

void JavaScriptPlugin::UnloadPlugin(const std::string& plugin) {
  BM_TRACE_LOG("unloading {:s}", plugin);
  if (loadedPlugins.find(to_lower(plugin)) == loadedPlugins.end()) {
    BM_ERROR_LOG("{:s} is not loaded", plugin);
    return;
  }

  const std::shared_ptr<LoadedPlugin>& loadedPlugin =
      loadedPlugins[to_lower(plugin)];
  loadedPlugin->OnUnload();
  loadedPlugins.erase(to_lower(plugin));
}

void JavaScriptPlugin::ReloadPlugin(const std::string& plugin) {
  BM_TRACE_LOG("reload {:s}", plugin);
  const auto it = loadedPlugins.find(to_lower(plugin));
  if (it == loadedPlugins.end()) {
    BM_ERROR_LOG("{:s} is not loaded", plugin);
    return;
  }

  UnloadPlugin(plugin);
  LoadPlugin(plugin);
}

void JavaScriptPlugin::EnsurePlugin(const std::string& plugin) {
  BM_TRACE_LOG("ensure {:s}", plugin);
  if (loadedPlugins.find(to_lower(plugin)) != loadedPlugins.end()) {
    UnloadPlugin(plugin);
  }

  LoadPlugin(plugin);
}

/// https://github.com/citizenfx/fivem/blob/v1.0.0.4193/code/components/citizen-scripting-v8/src/V8ScriptRuntime.cpp#L2476
void hookIsolateCallbacks(v8::Isolate* isolate) {
  isolate->AddGCPrologueCallback(
      []([[maybe_unused]] v8::Isolate* isolate_,
         [[maybe_unused]] v8::GCType type,
         [[maybe_unused]] v8::GCCallbackFlags flags) {
        BM_TRACE_LOG("enter garbage collection");
      });
  isolate->AddGCEpilogueCallback(
      []([[maybe_unused]] v8::Isolate* isolate_,
         [[maybe_unused]] v8::GCType type,
         [[maybe_unused]] v8::GCCallbackFlags flags) {
        BM_TRACE_LOG("exit garbage collection");
      });

  isolate->AddMessageListener([](const v8::Local<v8::Message> message,
                                 const v8::Local<v8::Value> data) {
    v8::Isolate* isolate = v8::Isolate::GetCurrent();
    const std::string messageStr = to_string(isolate, message->Get());
    const std::string errorStr = to_string(isolate, data);

    std::stringstream stack;
    const v8::Local<v8::StackTrace> stackTrace = message->GetStackTrace();

    for (int i = 0; i < stackTrace->GetFrameCount(); i++) {
      const v8::Local<v8::StackFrame> frame = stackTrace->GetFrame(isolate, i);

      v8::String::Utf8Value sourceStr(isolate,
                                      frame->GetScriptNameOrSourceURL());
      v8::String::Utf8Value functionStr(isolate, frame->GetFunctionName());

      stack << *sourceStr << "(" << frame->GetLineNumber() << ","
            << frame->GetColumn() << "): " << (*functionStr ? *functionStr : "")
            << "\n";
    }

    BM_TRACE_LOG("{:s}\n{:s}\n{:s}", messageStr, stack.str(), errorStr);
  });
}

/// https://github.com/nodejs/node/blob/v16.4.1/src/api/embed_helpers.cc#L72
void JavaScriptPlugin::initialize(const std::vector<std::string>& args,
                                  std::vector<std::string>& execArgs) {
  BM_TRACE_LOG("initiazising Node");
  Timer nodeTimer;

  // uv_setup_args doesn't do anything on windows.
  //const int argc = static_cast<int>(args.size());
  //char** argv = const_cast<char**>(args.data());
  //argv = uv_setup_args(argc, argv);
  //std::vector<std::string> nodeArgs(argv, argv + argc);
  std::vector<std::string> nodeArgs = args;
  std::vector<std::string> errors;
  const int exitCode =
      node::InitializeNodeWithArgs(&nodeArgs, &execArgs, &errors);
  for (const std::string& error : errors) {
    BM_ERROR_LOG("{:s}: {:s}", args[0], error);
  }
  if (exitCode != 0) {
    BM_ERROR_LOG("InitializeNodeWithArgs failed: 0x{:X}", exitCode);
    return;
  }

  BM_TRACE_LOG("initiazised Node in {:s}", nodeTimer.Str());

  BM_TRACE_LOG("initiazising V8");
  Timer v8Timer;

  platform = node::MultiIsolatePlatform::Create(4);
  v8::V8::InitializePlatform(platform.get());
  v8::V8::Initialize();

  BM_TRACE_LOG("initiazised V8 in {:s}", v8Timer.Str());

  BM_TRACE_LOG("initiazising uv");
  Timer uvTimer;

  // Use `data` to tell the destructor whether the loop was initialized or not.
  loop.data = nullptr;
  const int ret = uv_loop_init(&loop);
  if (ret != 0) {
    throw std::runtime_error(
        fmt::format("Failed to initialize loop: {:s}", uv_err_name(ret)));
  }
  loop.data = this;

  BM_TRACE_LOG("initiazised uv in {:s}", uvTimer.Str());

  BM_TRACE_LOG("creating isolate");
  Timer isolateTimer;

  allocator = node::ArrayBufferAllocator::Create();
  isolate = node::NewIsolate(allocator, &loop, platform.get());

  BM_TRACE_LOG("created isolate in {:s}", isolateTimer.Str());

  hookIsolateCallbacks(isolate);
}

/// https://github.com/nodejs/node/blob/v16.4.1/src/api/embed_helpers.cc#L17
/// https://github.com/nodejs/node/blob/v14.17.1/test/embedding/embedtest.cc#L104
/// http://docs.libuv.org/en/v1.x/loop.html#c.uv_run
void JavaScriptPlugin::tickEventLoop() {
  Timer timer;
  v8::Locker locker(isolate);
  v8::Isolate::Scope isolateScope(isolate);
  v8::HandleScope handleScope(isolate);

  {
    static bool idle = false;
    v8::SealHandleScope seal(isolate);
    
    uv_run(&loop, UV_RUN_NOWAIT);
    // platform->DrainTasks(isolate);

    if (uv_loop_alive(&loop)) {
      if (idle) {
        idle = false;
        BM_TRACE_LOG("event loop tick");
      }
      gameWrapper->SetTimeout([this](GameWrapper*) { tickEventLoop(); }, 0);
    } else {
      platform->DrainTasks(isolate);
      if (!idle) {
        idle = true;
        BM_TRACE_LOG("event loop is idle");
      }
      gameWrapper->SetTimeout([this](GameWrapper*) { tickEventLoop(); }, 1);
    }
  }

  const auto duration = timer.Duration();
  if (duration > std::chrono::milliseconds(100)) {
    BM_WARNING_LOG("javascript tick took {:s}", timer.Str());
  }
  else if (duration > std::chrono::milliseconds(1)) {
    BM_TRACE_LOG("javascript tick took {:s}", timer.Str());
  }
}

/// <summary>Registers notifiers and variables to interact with the plugin on
/// load.</summary>
void JavaScriptPlugin::OnLoad() {
  BakkesModCrashesFolder = gameWrapper->GetBakkesModPath() / L"crashes";
  if (!exists(BakkesModCrashesFolder)) {
    std::filesystem::create_directory(BakkesModCrashesFolder);
  }

  set_game_thread();

  // Copy the original cvarManager so we can use it everywhere.
  GlobalCVarManager =
      std::reinterpret_pointer_cast<CVarManagerWrapperDebug>(cvarManager);
  GlobalCVarManager_ptr = cvarManager.get();
  GlobalGameWrapper_ptr = gameWrapper.get();

  /* Register CVars */
  javaScriptPluginFolder = std::make_shared<std::string>();
  const std::string pluginDir =
      std::filesystem::absolute(gameWrapper->GetBakkesModPath() / "plugins_js")
          .string();
  cvarManager
      ->registerCvar("jsp_plugin_dir", pluginDir, "JavaScript plugins path")
      .bindTo(javaScriptPluginFolder);

  LogLevel = std::make_shared<int>();
  cvarManager
      ->registerCvar(
          "jsp_log_level",
          std::to_string(CVarManagerWrapperDebug::level_enum::normal),
          "Log level",
          true,
          false,
          0,
          false,
          0,
          false)
      .bindTo(LogLevel);
#ifdef BMDEBUG
  cvarManager->getCvar("jsp_log_level")
      .setValue(CVarManagerWrapperDebug::level_enum::all);
#endif

  /* Load Persistent CVars */
  persistent = std::make_unique<PersistentStorage>(
      gameWrapper->GetBakkesModPath() / "cfg" / "node.cfg", true);
  nodeArguments = std::make_shared<std::string>();
  persistent->RegisterCvar("node_arguments", "--inspect", "Node arguments")
      .bindTo(nodeArguments);
  nodeEnvArguments = std::make_shared<std::string>();
  persistent
      ->RegisterCvar("node_env_arguments",
                     "--trace-exit --trace-uncaught",
                     "Node environment arguments")
      .bindTo(nodeEnvArguments);
  nodeEnvDebugRegex = std::make_shared<std::string>();
  persistent
      ->RegisterCvar(
          "node_env_debug_regex", "*", "Node environment debug regex")
      .bindTo(nodeEnvDebugRegex);
  persistent->Load();

  /* Register Notifiers */
  RegisterNotifier(
      "jsplugin",
      [this](const std::vector<std::string>& arguments) {
        if (arguments.size() < 2) {
          BM_LOG("Usage: jsplugin "
                 "reloadall|unloadall|list|load|unload|reload|ensure "
                 "[pluginname]");
          return;
        }

        const std::string command = arguments[1];
        if (command == "unloadall") {
          UnloadAll();
          return;
        }
        if (command == "reloadall") {
          ReloadAll();
          return;
        }
        if (command == "list") {
          ListPlugins();
          return;
        }

        if (arguments.size() > 2) {
          const std::string pluginName = arguments[2];
          if (command == "load") {
            LoadPlugin(pluginName);
            return;
          }
          if (command == "unload") {
            UnloadPlugin(pluginName);
            return;
          }
          if (command == "reload") {
            ReloadPlugin(pluginName);
            return;
          }
          if (command == "ensure") {
            EnsurePlugin(pluginName);
            return;
          }
        }

        BM_LOG(
            "Usage: jsplugin "
            "reloadall|unloadall|list|load|unload|reload|ensure [pluginname]");
      },
      "load/unload/reload/list java script plugins, usage: jsplugin "
      "reloadall|unloadall|list|load|unload|reload|ensure [pluginname]",
      PERMISSION_ALL);

  RegisterNotifier(
      "jsp_list_loaded_plugins",
      [this](const std::vector<std::string>&) {
        if (loadedPlugins.empty()) {
          BM_LOG("No plugins are loaded");
        }
        for (const auto& [name, loadedPlugin] : loadedPlugins) {
          BM_LOG(name);
        }
      },
      "Lists loaded java script plugins",
      PERMISSION_ALL);

  // Initialize Node.
  const std::vector<std::string> args =
      parseArgs({"JavaScriptPlugin"}, *nodeArguments);
  std::vector<std::string> execArgs;
  initialize(args, execArgs);

  tickEventLoop();
}

/// <summary>Unload the plugin properly.</summary>
/// <remarks>https://github.com/nodejs/node/blob/v16.4.1/src/api/embed_helpers.cc#L115</remarks>
void JavaScriptPlugin::OnUnload() {
  UnloadAll();

  BM_TRACE_LOG("Shutting down Node");
  const Timer timer;

  if (isolate != nullptr) {
    bool platformFinished = false;
    platform->AddIsolateFinishedCallback(
        isolate,
        [](void* data) { *static_cast<bool*>(data) = true; },
        &platformFinished);
    platform->UnregisterIsolate(isolate);
    isolate->Dispose();

    // Wait until the platform has cleaned up all relevant resources.
    while (!platformFinished) uv_run(&loop, UV_RUN_ONCE);
  }

  if (isolate != nullptr || loop.data != nullptr)
    node::CheckedUvLoopClose(&loop);

  if (platform != nullptr) {
    v8::V8::Dispose();
    v8::V8::ShutdownPlatform();
  }

  BM_TRACE_LOG("Shut down Node {:s}", timer.Str());
}
