void bind_SaveDataWrapper([[maybe_unused]] v8::Isolate* isolate, v8pp::module& module)
{

	v8pp::class_<SaveDataWrapper> cl_SaveDataWrapper(isolate);
	cl_SaveDataWrapper.inherit<ObjectWrapper>();
	cl_SaveDataWrapper.ctor<uintptr_t>();
	cl_SaveDataWrapper.set<bool(SaveDataWrapper::*)() const>("IsNull", &SaveDataWrapper::IsNull);
	cl_SaveDataWrapper.set<UnrealStringWrapper(SaveDataWrapper::*)()>("GetDirectoryPath", &SaveDataWrapper::GetDirectoryPath);
	cl_SaveDataWrapper.set<UnrealStringWrapper(SaveDataWrapper::*)()>("GetSaveType", &SaveDataWrapper::GetSaveType);
	cl_SaveDataWrapper.set<UnrealStringWrapper(SaveDataWrapper::*)()>("GetSaveExt", &SaveDataWrapper::GetSaveExt);
	cl_SaveDataWrapper.set<long unsigned int(SaveDataWrapper::*)()>("GetbExactFileMatch", &SaveDataWrapper::GetbExactFileMatch);
	cl_SaveDataWrapper.set<void(SaveDataWrapper::*)(long unsigned int)>("SetbExactFileMatch", &SaveDataWrapper::SetbExactFileMatch);
	cl_SaveDataWrapper.set<void(SaveDataWrapper::*)()>("Init", &SaveDataWrapper::Init);

	module.set("SaveDataWrapper", cl_SaveDataWrapper);
}
