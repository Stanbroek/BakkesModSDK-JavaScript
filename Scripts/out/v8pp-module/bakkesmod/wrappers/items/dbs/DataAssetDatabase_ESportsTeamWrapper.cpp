void bind_DataAssetDatabase_ESportsTeamWrapper([[maybe_unused]] v8::Isolate* isolate, v8pp::module& module)
{

	v8pp::class_<DataAssetDatabase_ESportsTeamWrapper> cl_DataAssetDatabase_ESportsTeamWrapper(isolate);
	cl_DataAssetDatabase_ESportsTeamWrapper.inherit<DataAssetDatabaseWrapper>();
	cl_DataAssetDatabase_ESportsTeamWrapper.ctor<uintptr_t>();

	module.set("DataAssetDatabase_ESportsTeamWrapper", cl_DataAssetDatabase_ESportsTeamWrapper);
}
