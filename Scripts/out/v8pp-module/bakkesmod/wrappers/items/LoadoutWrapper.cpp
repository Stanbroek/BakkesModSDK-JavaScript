void bind_LoadoutWrapper([[maybe_unused]] v8::Isolate* isolate, v8pp::module& module)
{

	v8pp::class_<LoadoutWrapper> cl_LoadoutWrapper(isolate);
	cl_LoadoutWrapper.inherit<ObjectWrapper>();
	cl_LoadoutWrapper.ctor<uintptr_t>();
	cl_LoadoutWrapper.set<bool(LoadoutWrapper::*)() const>("IsNull", &LoadoutWrapper::IsNull);
	cl_LoadoutWrapper.set<ArrayWrapper<int>(LoadoutWrapper::*)()>("GetLoadout", &LoadoutWrapper::GetLoadout);
	cl_LoadoutWrapper.set<ArrayWrapper<unsigned long long>(LoadoutWrapper::*)()>("GetOnlineLoadout", &LoadoutWrapper::GetOnlineLoadout);
	cl_LoadoutWrapper.set<unsigned char(LoadoutWrapper::*)()>("GetPrimaryPaintColorId", &LoadoutWrapper::GetPrimaryPaintColorId);
	cl_LoadoutWrapper.set<unsigned char(LoadoutWrapper::*)()>("GetAccentPaintColorId", &LoadoutWrapper::GetAccentPaintColorId);
	cl_LoadoutWrapper.set<int(LoadoutWrapper::*)()>("GetPrimaryFinishId", &LoadoutWrapper::GetPrimaryFinishId);
	cl_LoadoutWrapper.set<int(LoadoutWrapper::*)()>("GetAccentFinishId", &LoadoutWrapper::GetAccentFinishId);

	module.set("LoadoutWrapper", cl_LoadoutWrapper);
}
