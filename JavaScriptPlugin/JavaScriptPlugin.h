#pragma once
#include "bmplugin_version.h"

constexpr const char* PLUGIN_VERSION = VER_FILE_VERSION_STR;

extern CVarManagerWrapper* GlobalCVarManager_ptr;
extern GameWrapper* GlobalGameWrapper_ptr;


struct LoadedPlugin;

class JavaScriptPlugin final : public BakkesMod::Plugin::BakkesModPlugin {
 public:
  void UnloadAll();
  void ReloadAll();
  void ListPlugins() const;

  void LoadPlugin(const std::string& plugin);
  void UnloadPlugin(const std::string& plugin);
  void ReloadPlugin(const std::string& plugin);
  void EnsurePlugin(const std::string& plugin);

 private:
  void initialize(const std::vector<std::string>& args,
                  std::vector<std::string>& execArgs);
  void tickEventLoop();

  std::map<std::string, std::shared_ptr<LoadedPlugin>> loadedPlugins;

  std::unique_ptr<node::MultiIsolatePlatform> platform;
  std::shared_ptr<node::ArrayBufferAllocator> allocator;
  v8::Isolate* isolate = nullptr;
  uv_loop_t loop;

  /* BakkesMod Plugin Overrides */
 public:
  CATCH_DEFAULT_BM_FUNCTIONS;

 private:
  std::shared_ptr<std::string> javaScriptPluginFolder;

  std::unique_ptr<PersistentStorage> persistent;
  std::shared_ptr<std::string> nodeArguments;
  std::shared_ptr<std::string> nodeEnvArguments;
  std::shared_ptr<std::string> nodeEnvDebugRegex;
};

/// https://github.com/nodejs/node/blob/v16.4.1/src/util.h#L641
template <typename T, void (*function)(T*)>
struct FunctionDeleter {
  void operator()(T* pointer) const { function(pointer); }
  typedef std::unique_ptr<T, FunctionDeleter> Pointer;
};

template <typename T, void (*function)(T*)>
using DeleteFnPtr = typename FunctionDeleter<T, function>::Pointer;

struct LoadedPlugin {
  std::string Name;

  LoadedPlugin(const std::string& resourceName,
               node::MultiIsolatePlatform* platform,
               std::shared_ptr<node::ArrayBufferAllocator> allocator,
               v8::Isolate* isolate,
               uv_loop_t* loop,
               const std::vector<std::string>& args,
               const std::vector<std::string>& execArgs);
  ~LoadedPlugin();

  LoadedPlugin(const LoadedPlugin&) = delete;
  LoadedPlugin(LoadedPlugin&&) = delete;
  LoadedPlugin& operator=(const LoadedPlugin&) = delete;
  LoadedPlugin& operator=(LoadedPlugin&&) = delete;

  void OnLoad() const;
  void OnUnload() const;

 private:
  void initialize(const std::vector<std::string>& args,
                  const std::vector<std::string>& execArgs);

  node::MultiIsolatePlatform* platform;
  std::shared_ptr<node::ArrayBufferAllocator> allocator;
  v8::Isolate* isolate = nullptr;
  uv_loop_t* loop = nullptr;

  DeleteFnPtr<node::IsolateData, node::FreeIsolateData> isolateData;
  DeleteFnPtr<node::Environment, node::FreeEnvironment> env;
  v8::Global<v8::Context> gContext;

  v8::Global<v8::Value> gPlugin;
};
