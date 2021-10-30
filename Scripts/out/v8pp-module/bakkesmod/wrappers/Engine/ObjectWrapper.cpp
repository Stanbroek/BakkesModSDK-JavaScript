void bind_ObjectWrapper([[maybe_unused]] v8::Isolate* isolate, v8pp::module& module)
{

	v8pp::class_<ObjectWrapper> cl_ObjectWrapper(isolate);
	cl_ObjectWrapper.set("memory_address", &ObjectWrapper::memory_address);
	cl_ObjectWrapper.ctor<uintptr_t>();

	module.set("ObjectWrapper", cl_ObjectWrapper);
}
