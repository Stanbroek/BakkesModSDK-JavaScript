void bind_CVarManagerWrapper([[maybe_unused]] v8::Isolate* isolate, v8pp::module& module)
{

	v8pp::class_<CVarManagerWrapper> cl_CVarManagerWrapper(isolate);
	cl_CVarManagerWrapper.ctor<uintptr_t, std::type_index>();
	cl_CVarManagerWrapper.set<void(CVarManagerWrapper::*)(std::string, bool)>("executeCommand", &CVarManagerWrapper::executeCommand);
	//cl_CVarManagerWrapper.set<void(CVarManagerWrapper::*)(std::string, commandNotifier, std::string, unsigned char)>("registerNotifier", &CVarManagerWrapper::registerNotifier);
	cl_CVarManagerWrapper.set<void(CVarManagerWrapper::*)(std::string, std::function<void (std::vector<std::basic_string<char>, std::allocator<std::basic_string<char> > >)>, std::string, unsigned char)>("registerNotifier", &CVarManagerWrapper::registerNotifier);
	cl_CVarManagerWrapper.set<bool(CVarManagerWrapper::*)(std::string)>("removeNotifier", &CVarManagerWrapper::removeNotifier);
	cl_CVarManagerWrapper.set<CVarWrapper(CVarManagerWrapper::*)(std::string, std::string, std::string, bool, bool, float, bool, float, bool)>("registerCvar", &CVarManagerWrapper::registerCvar);
	cl_CVarManagerWrapper.set<bool(CVarManagerWrapper::*)(std::string)>("removeCvar", &CVarManagerWrapper::removeCvar);
	cl_CVarManagerWrapper.set<void(CVarManagerWrapper::*)(std::string)>("log", &CVarManagerWrapper::log);
	cl_CVarManagerWrapper.set<void(CVarManagerWrapper::*)(std::wstring)>("log", &CVarManagerWrapper::log);
	cl_CVarManagerWrapper.set<CVarWrapper(CVarManagerWrapper::*)(std::string)>("getCvar", &CVarManagerWrapper::getCvar);
	cl_CVarManagerWrapper.set<std::string(CVarManagerWrapper::*)(std::string)>("getBindStringForKey", &CVarManagerWrapper::getBindStringForKey);
	cl_CVarManagerWrapper.set<void(CVarManagerWrapper::*)(std::string, std::string)>("setBind", &CVarManagerWrapper::setBind);
	cl_CVarManagerWrapper.set<void(CVarManagerWrapper::*)(std::string)>("removeBind", &CVarManagerWrapper::removeBind);
	cl_CVarManagerWrapper.set<std::string(CVarManagerWrapper::*)(std::string)>("getAlias", &CVarManagerWrapper::getAlias);
	cl_CVarManagerWrapper.set<void(CVarManagerWrapper::*)(std::string, std::string)>("setAlias", &CVarManagerWrapper::setAlias);
	cl_CVarManagerWrapper.set<void(CVarManagerWrapper::*)(std::string)>("backupCfg", &CVarManagerWrapper::backupCfg);
	cl_CVarManagerWrapper.set<void(CVarManagerWrapper::*)(std::string)>("backupBinds", &CVarManagerWrapper::backupBinds);
	cl_CVarManagerWrapper.set<void(CVarManagerWrapper::*)(std::string)>("loadCfg", &CVarManagerWrapper::loadCfg);

	module.set("CVarManagerWrapper", cl_CVarManagerWrapper);
}
