void bind_AIControllerWrapper([[maybe_unused]] v8::Isolate* isolate, v8pp::module& module)
{

	v8pp::class_<AIControllerWrapper> cl_AIControllerWrapper(isolate);
	cl_AIControllerWrapper.inherit<ControllerWrapper>();
	cl_AIControllerWrapper.ctor<uintptr_t>();
	cl_AIControllerWrapper.set<void(AIControllerWrapper::*)()>("DoNothing", &AIControllerWrapper::DoNothing);

	module.set("AIControllerWrapper", cl_AIControllerWrapper);
}
