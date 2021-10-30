void bind_SpecialEditionDatabaseWrapper([[maybe_unused]] v8::Isolate* isolate, v8pp::module& module)
{

	v8pp::class_<SpecialEditionDatabaseWrapper> cl_SpecialEditionDatabaseWrapper(isolate);
	cl_SpecialEditionDatabaseWrapper.inherit<ObjectWrapper>();
	cl_SpecialEditionDatabaseWrapper.ctor<uintptr_t>();
	cl_SpecialEditionDatabaseWrapper.set<bool(SpecialEditionDatabaseWrapper::*)() const>("IsNull", &SpecialEditionDatabaseWrapper::IsNull);
	cl_SpecialEditionDatabaseWrapper.set<std::string(SpecialEditionDatabaseWrapper::*)(int)>("GetSpecialEditionName", &SpecialEditionDatabaseWrapper::GetSpecialEditionName);
	//cl_SpecialEditionDatabaseWrapper.set<int(SpecialEditionDatabaseWrapper::*)(std::string &)>("GetSpecialEditionId", &SpecialEditionDatabaseWrapper::GetSpecialEditionId);

	module.set("SpecialEditionDatabaseWrapper", cl_SpecialEditionDatabaseWrapper);
}
