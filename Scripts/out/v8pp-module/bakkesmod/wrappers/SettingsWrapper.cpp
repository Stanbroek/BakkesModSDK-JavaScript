void bind_SettingsWrapper([[maybe_unused]] v8::Isolate* isolate, v8pp::module& module)
{

	v8pp::class_<SettingsWrapper> cl_SettingsWrapper(isolate);
	cl_SettingsWrapper.ctor<>();
	cl_SettingsWrapper.set<ProfileCameraSettings(SettingsWrapper::*)()>("GetCameraSettings", &SettingsWrapper::GetCameraSettings);
	cl_SettingsWrapper.set<CameraSave(SettingsWrapper::*)()>("GetCameraSaveSettings", &SettingsWrapper::GetCameraSaveSettings);
	// [deprecated] cl_SettingsWrapper.set<std::map<std::basic_string<char>, std::basic_string<char>, std::less<std::basic_string<char> >, std::allocator<std::pair<const std::basic_string<char>, std::basic_string<char> > > >(SettingsWrapper::*)()>("GetPCBindings", &SettingsWrapper::GetPCBindings);
	// [deprecated] cl_SettingsWrapper.set<std::map<std::basic_string<char>, std::basic_string<char>, std::less<std::basic_string<char> >, std::allocator<std::pair<const std::basic_string<char>, std::basic_string<char> > > >(SettingsWrapper::*)()>("GetGamepadBindings", &SettingsWrapper::GetGamepadBindings);
	cl_SettingsWrapper.set<std::vector<std::pair<std::basic_string<char>, std::basic_string<char> >, std::allocator<std::pair<std::basic_string<char>, std::basic_string<char> > > >(SettingsWrapper::*)()>("GetAllPCBindings", &SettingsWrapper::GetAllPCBindings);
	cl_SettingsWrapper.set<std::vector<std::pair<std::basic_string<char>, std::basic_string<char> >, std::allocator<std::pair<std::basic_string<char>, std::basic_string<char> > > >(SettingsWrapper::*)()>("GetAllGamepadBindings", &SettingsWrapper::GetAllGamepadBindings);
	cl_SettingsWrapper.set<GamepadSettings(SettingsWrapper::*)()>("GetGamepadSettings", &SettingsWrapper::GetGamepadSettings);
	cl_SettingsWrapper.set<VideoSettings(SettingsWrapper::*)()>("GetVideoSettings", &SettingsWrapper::GetVideoSettings);

	module.set("SettingsWrapper", cl_SettingsWrapper);
}
