void bind_PaintDatabaseWrapper([[maybe_unused]] v8::Isolate* isolate, v8pp::module& module)
{

	v8pp::class_<PaintDatabaseWrapper> cl_PaintDatabaseWrapper(isolate);
	cl_PaintDatabaseWrapper.inherit<ObjectWrapper>();
	cl_PaintDatabaseWrapper.ctor<uintptr_t>();
	cl_PaintDatabaseWrapper.set<bool(PaintDatabaseWrapper::*)() const>("IsNull", &PaintDatabaseWrapper::IsNull);
	cl_PaintDatabaseWrapper.set<std::string(PaintDatabaseWrapper::*)(int)>("GetPaintName", &PaintDatabaseWrapper::GetPaintName);
	//cl_PaintDatabaseWrapper.set<int(PaintDatabaseWrapper::*)(std::string &)>("GetPaintID", &PaintDatabaseWrapper::GetPaintID);

	module.set("PaintDatabaseWrapper", cl_PaintDatabaseWrapper);
}
