void bind_PluginManagerWrapper([[maybe_unused]] v8::Isolate* isolate, v8pp::module& module)
{

	v8pp::class_<PluginManagerWrapper> cl_PluginManagerWrapper(isolate);
	cl_PluginManagerWrapper.inherit<ObjectWrapper>();
	cl_PluginManagerWrapper.ctor<uintptr_t>();
	//cl_PluginManagerWrapper.set<std::vector<std::shared_ptr<BakkesMod::Plugin::LoadedPlugin>, std::allocator<std::shared_ptr<BakkesMod::Plugin::LoadedPlugin> > > *(PluginManagerWrapper::*)()>("GetLoadedPlugins", &PluginManagerWrapper::GetLoadedPlugins);

	module.set("PluginManagerWrapper", cl_PluginManagerWrapper);
}
