void bind_CertifiedStatDatabaseWrapper([[maybe_unused]] v8::Isolate* isolate, v8pp::module& module)
{

	v8pp::class_<CertifiedStatDatabaseWrapper> cl_CertifiedStatDatabaseWrapper(isolate);
	cl_CertifiedStatDatabaseWrapper.inherit<ObjectWrapper>();
	cl_CertifiedStatDatabaseWrapper.ctor<uintptr_t>();
	cl_CertifiedStatDatabaseWrapper.set<bool(CertifiedStatDatabaseWrapper::*)() const>("IsNull", &CertifiedStatDatabaseWrapper::IsNull);
	cl_CertifiedStatDatabaseWrapper.set<std::string(CertifiedStatDatabaseWrapper::*)(int)>("GetStatName", &CertifiedStatDatabaseWrapper::GetStatName);
	//cl_CertifiedStatDatabaseWrapper.set<int(CertifiedStatDatabaseWrapper::*)(std::string &)>("GetStatId", &CertifiedStatDatabaseWrapper::GetStatId);

	module.set("CertifiedStatDatabaseWrapper", cl_CertifiedStatDatabaseWrapper);
}
