void bind_bakkesmodplugin([[maybe_unused]] v8::Isolate* isolate, v8pp::module& module)
{

	v8pp::class_<BakkesMod::Plugin::BakkesModPlugin> cl_BakkesMod_Plugin_BakkesModPlugin(isolate);
	cl_BakkesMod_Plugin_BakkesModPlugin.set("cvarManager", &BakkesMod::Plugin::BakkesModPlugin::cvarManager);
	cl_BakkesMod_Plugin_BakkesModPlugin.set("gameWrapper", &BakkesMod::Plugin::BakkesModPlugin::gameWrapper);
	cl_BakkesMod_Plugin_BakkesModPlugin.set<void(BakkesMod::Plugin::BakkesModPlugin::*)()>("onLoad", &BakkesMod::Plugin::BakkesModPlugin::onLoad);
	cl_BakkesMod_Plugin_BakkesModPlugin.set<void(BakkesMod::Plugin::BakkesModPlugin::*)()>("onUnload", &BakkesMod::Plugin::BakkesModPlugin::onUnload);
	cl_BakkesMod_Plugin_BakkesModPlugin.ctor<>();

	module.set("BakkesModPlugin", cl_BakkesMod_Plugin_BakkesModPlugin);

	v8pp::class_<BakkesMod::Plugin::PluginInfo> cl_BakkesMod_Plugin_PluginInfo(isolate);
	cl_BakkesMod_Plugin_PluginInfo.set("apiBuildVersion", &BakkesMod::Plugin::PluginInfo::apiBuildVersion);
	cl_BakkesMod_Plugin_PluginInfo.set("fileName", &BakkesMod::Plugin::PluginInfo::fileName);
	cl_BakkesMod_Plugin_PluginInfo.set("className", &BakkesMod::Plugin::PluginInfo::className);
	cl_BakkesMod_Plugin_PluginInfo.set("pluginName", &BakkesMod::Plugin::PluginInfo::pluginName);
	cl_BakkesMod_Plugin_PluginInfo.set("pluginVersion", &BakkesMod::Plugin::PluginInfo::pluginVersion);
	cl_BakkesMod_Plugin_PluginInfo.set("pluginType", &BakkesMod::Plugin::PluginInfo::pluginType);
	//cl_BakkesMod_Plugin_PluginInfo.set("initializeFunc", &BakkesMod::Plugin::PluginInfo::initializeFunc);
	//cl_BakkesMod_Plugin_PluginInfo.set("delFunc", &BakkesMod::Plugin::PluginInfo::delFunc);

	module.set("PluginInfo", cl_BakkesMod_Plugin_PluginInfo);

	v8pp::class_<BakkesMod::Plugin::LoadedPlugin> cl_BakkesMod_Plugin_LoadedPlugin(isolate);
	cl_BakkesMod_Plugin_LoadedPlugin.set("_details", &BakkesMod::Plugin::LoadedPlugin::_details);
	cl_BakkesMod_Plugin_LoadedPlugin.set("_plugin", &BakkesMod::Plugin::LoadedPlugin::_plugin);
	cl_BakkesMod_Plugin_LoadedPlugin.set("_instance", &BakkesMod::Plugin::LoadedPlugin::_instance);
	cl_BakkesMod_Plugin_LoadedPlugin.set("_filename", &BakkesMod::Plugin::LoadedPlugin::_filename);
	cl_BakkesMod_Plugin_LoadedPlugin.set("_typeid", &BakkesMod::Plugin::LoadedPlugin::_typeid);
	//cl_BakkesMod_Plugin_LoadedPlugin.ctor<std::shared_ptr<BakkesMod::Plugin::PluginInfo>, std::shared_ptr<BakkesMod::Plugin::BakkesModPlugin>, void *, std::string>();

	module.set("LoadedPlugin", cl_BakkesMod_Plugin_LoadedPlugin);
}
