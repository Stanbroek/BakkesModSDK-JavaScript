void bind_DataAssetDatabaseWrapper([[maybe_unused]] v8::Isolate* isolate, v8pp::module& module)
{

	v8pp::class_<DataAssetDatabaseWrapper> cl_DataAssetDatabaseWrapper(isolate);
	cl_DataAssetDatabaseWrapper.inherit<ObjectWrapper>();
	cl_DataAssetDatabaseWrapper.ctor<uintptr_t>();
	cl_DataAssetDatabaseWrapper.set<bool(DataAssetDatabaseWrapper::*)() const>("IsNull", &DataAssetDatabaseWrapper::IsNull);
	cl_DataAssetDatabaseWrapper.set<std::string(DataAssetDatabaseWrapper::*)(int)>("GetName", &DataAssetDatabaseWrapper::GetName);
	//cl_DataAssetDatabaseWrapper.set<int(DataAssetDatabaseWrapper::*)(std::string &)>("GetID", &DataAssetDatabaseWrapper::GetID);

	module.set("DataAssetDatabaseWrapper", cl_DataAssetDatabaseWrapper);
}
