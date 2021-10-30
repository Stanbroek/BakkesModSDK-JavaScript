void bind_UniqueIDWrapper([[maybe_unused]] v8::Isolate* isolate, v8pp::module& module)
{

	v8pp::class_<UniqueIDWrapper> cl_UniqueIDWrapper(isolate);
	//cl_UniqueIDWrapper.ctor<>();
	cl_UniqueIDWrapper.ctor<uintptr_t>();
	cl_UniqueIDWrapper.set<OnlinePlatform(UniqueIDWrapper::*)() const>("GetPlatform", &UniqueIDWrapper::GetPlatform);
	cl_UniqueIDWrapper.set<std::string(UniqueIDWrapper::*)() const>("GetEpicAccountID", &UniqueIDWrapper::GetEpicAccountID);
	cl_UniqueIDWrapper.set<long long unsigned int(UniqueIDWrapper::*)() const>("GetUID", &UniqueIDWrapper::GetUID);
	cl_UniqueIDWrapper.set<unsigned char(UniqueIDWrapper::*)() const>("GetSplitscreenID", &UniqueIDWrapper::GetSplitscreenID);
	cl_UniqueIDWrapper.set<std::string(UniqueIDWrapper::*)() const>("str", &UniqueIDWrapper::str);
	cl_UniqueIDWrapper.set<std::string(UniqueIDWrapper::*)() const>("GetIdString", &UniqueIDWrapper::GetIdString);
	cl_UniqueIDWrapper.set<UniqueIDWrapper(*)(std::string, long long unsigned int, OnlinePlatform, unsigned char)>("FromEpicAccountID", &UniqueIDWrapper::FromEpicAccountID);

	module.set("UniqueIDWrapper", cl_UniqueIDWrapper);
}
