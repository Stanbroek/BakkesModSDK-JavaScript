void bind_SequenceVariableWrapper([[maybe_unused]] v8::Isolate* isolate, v8pp::module& module)
{

	v8pp::class_<SequenceVariableWrapper> cl_SequenceVariableWrapper(isolate);
	cl_SequenceVariableWrapper.inherit<SequenceObjectWrapper>();
	cl_SequenceVariableWrapper.ctor<uintptr_t>();
	cl_SequenceVariableWrapper.set<std::string(SequenceVariableWrapper::*)()>("GetVarName", &SequenceVariableWrapper::GetVarName);
	cl_SequenceVariableWrapper.set<bool(SequenceVariableWrapper::*)()>("IsInt", &SequenceVariableWrapper::IsInt);
	cl_SequenceVariableWrapper.set<bool(SequenceVariableWrapper::*)()>("IsFloat", &SequenceVariableWrapper::IsFloat);
	cl_SequenceVariableWrapper.set<bool(SequenceVariableWrapper::*)()>("IsString", &SequenceVariableWrapper::IsString);
	cl_SequenceVariableWrapper.set<bool(SequenceVariableWrapper::*)()>("IsVector", &SequenceVariableWrapper::IsVector);
	cl_SequenceVariableWrapper.set<bool(SequenceVariableWrapper::*)()>("IsBool", &SequenceVariableWrapper::IsBool);
	cl_SequenceVariableWrapper.set<bool(SequenceVariableWrapper::*)()>("IsObjectList", &SequenceVariableWrapper::IsObjectList);
	cl_SequenceVariableWrapper.set<bool(SequenceVariableWrapper::*)()>("IsActor", &SequenceVariableWrapper::IsActor);
	cl_SequenceVariableWrapper.set<float(SequenceVariableWrapper::*)()>("GetFloat", &SequenceVariableWrapper::GetFloat);
	cl_SequenceVariableWrapper.set<int(SequenceVariableWrapper::*)()>("GetInt", &SequenceVariableWrapper::GetInt);
	cl_SequenceVariableWrapper.set<std::string(SequenceVariableWrapper::*)()>("GetString", &SequenceVariableWrapper::GetString);
	cl_SequenceVariableWrapper.set<Vector(SequenceVariableWrapper::*)()>("GetVector", &SequenceVariableWrapper::GetVector);
	cl_SequenceVariableWrapper.set<bool(SequenceVariableWrapper::*)()>("GetBool", &SequenceVariableWrapper::GetBool);
	cl_SequenceVariableWrapper.set<ArrayWrapper<SequenceVariableWrapper>(SequenceVariableWrapper::*)()>("GetObjectList", &SequenceVariableWrapper::GetObjectList);
	cl_SequenceVariableWrapper.set<void(SequenceVariableWrapper::*)(float)>("SetFloat", &SequenceVariableWrapper::SetFloat);
	cl_SequenceVariableWrapper.set<void(SequenceVariableWrapper::*)(int)>("SetInt", &SequenceVariableWrapper::SetInt);
	cl_SequenceVariableWrapper.set<void(SequenceVariableWrapper::*)(std::string const &)>("SetString", &SequenceVariableWrapper::SetString);
	cl_SequenceVariableWrapper.set<void(SequenceVariableWrapper::*)(Vector)>("SetVector", &SequenceVariableWrapper::SetVector);
	cl_SequenceVariableWrapper.set<void(SequenceVariableWrapper::*)(bool)>("SetBool", &SequenceVariableWrapper::SetBool);
	cl_SequenceVariableWrapper.set<ActorWrapper(SequenceVariableWrapper::*)()>("GetActor", &SequenceVariableWrapper::GetActor);

	module.set("SequenceVariableWrapper", cl_SequenceVariableWrapper);
}
