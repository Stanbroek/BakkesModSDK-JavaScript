void bind_cvarwrapper([[maybe_unused]] v8::Isolate* isolate, v8pp::module& module)
{

	v8pp::class_<CVarWrapper> cl_CVarWrapper(isolate);
	cl_CVarWrapper.ctor<uintptr_t, std::type_index>();
	cl_CVarWrapper.set<std::string(CVarWrapper::*)()>("getCVarName", &CVarWrapper::getCVarName);
	cl_CVarWrapper.set<int(CVarWrapper::*)()>("getIntValue", &CVarWrapper::getIntValue);
	cl_CVarWrapper.set<float(CVarWrapper::*)()>("getFloatValue", &CVarWrapper::getFloatValue);
	cl_CVarWrapper.set<bool(CVarWrapper::*)()>("getBoolValue", &CVarWrapper::getBoolValue);
	cl_CVarWrapper.set<LinearColor(CVarWrapper::*)()>("getColorValue", &CVarWrapper::getColorValue);
	cl_CVarWrapper.set<std::string(CVarWrapper::*)()>("getStringValue", &CVarWrapper::getStringValue);
	cl_CVarWrapper.set<std::string(CVarWrapper::*)()>("getDescription", &CVarWrapper::getDescription);
	cl_CVarWrapper.set<std::string const(CVarWrapper::*)()>("GetDefaultValue", &CVarWrapper::GetDefaultValue);
	cl_CVarWrapper.set<bool(CVarWrapper::*)()>("HasMinimum", &CVarWrapper::HasMinimum);
	cl_CVarWrapper.set<bool(CVarWrapper::*)()>("HasMaximum", &CVarWrapper::HasMaximum);
	cl_CVarWrapper.set<float(CVarWrapper::*)()>("GetMinimum", &CVarWrapper::GetMinimum);
	cl_CVarWrapper.set<float(CVarWrapper::*)()>("GetMaximum", &CVarWrapper::GetMaximum);
	cl_CVarWrapper.set<bool(CVarWrapper::*)()>("IsHidden", &CVarWrapper::IsHidden);
	cl_CVarWrapper.set<bool(CVarWrapper::*)()>("ShouldSaveToCfg", &CVarWrapper::ShouldSaveToCfg);
	cl_CVarWrapper.set<void(CVarWrapper::*)()>("ResetToDefault", &CVarWrapper::ResetToDefault);
	cl_CVarWrapper.set<void(CVarWrapper::*)()>("notify", &CVarWrapper::notify);
	cl_CVarWrapper.set<void(CVarWrapper::*)(std::string)>("setValue", &CVarWrapper::setValue);
	cl_CVarWrapper.set<void(CVarWrapper::*)(int)>("setValue", &CVarWrapper::setValue);
	cl_CVarWrapper.set<void(CVarWrapper::*)(float)>("setValue", &CVarWrapper::setValue);
	cl_CVarWrapper.set<void(CVarWrapper::*)(LinearColor)>("setValue", &CVarWrapper::setValue);
	cl_CVarWrapper.set<void(CVarWrapper::*)(std::function<void (std::basic_string<char>, CVarWrapper)>)>("addOnValueChanged", &CVarWrapper::addOnValueChanged);
	cl_CVarWrapper.set<void(CVarWrapper::*)()>("removeOnValueChanged", &CVarWrapper::removeOnValueChanged);
	//cl_CVarWrapper.set<void(CVarWrapper::*)(std::shared_ptr<int>)>("bindTo", &CVarWrapper::bindTo);
	//cl_CVarWrapper.set<void(CVarWrapper::*)(std::shared_ptr<float>)>("bindTo", &CVarWrapper::bindTo);
	//cl_CVarWrapper.set<void(CVarWrapper::*)(std::shared_ptr<std::basic_string<char> >)>("bindTo", &CVarWrapper::bindTo);
	//cl_CVarWrapper.set<void(CVarWrapper::*)(std::shared_ptr<bool>)>("bindTo", &CVarWrapper::bindTo);
	//cl_CVarWrapper.set<void(CVarWrapper::*)(std::shared_ptr<LinearColor>)>("bindTo", &CVarWrapper::bindTo);
	cl_CVarWrapper.set<bool(CVarWrapper::*)()>("IsNull", &CVarWrapper::IsNull);

	module.set("CVarWrapper", cl_CVarWrapper);
}
