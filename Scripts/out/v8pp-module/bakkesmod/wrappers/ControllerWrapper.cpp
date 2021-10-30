void bind_ControllerWrapper([[maybe_unused]] v8::Isolate* isolate, v8pp::module& module)
{

	v8pp::class_<ControllerWrapper> cl_ControllerWrapper(isolate);
	cl_ControllerWrapper.inherit<ActorWrapper>();
	cl_ControllerWrapper.ctor<uintptr_t>();
	cl_ControllerWrapper.set<PlayerReplicationInfoWrapper(ControllerWrapper::*)()>("GetPlayerReplicationInfo", &ControllerWrapper::GetPlayerReplicationInfo);

	module.set("ControllerWrapper", cl_ControllerWrapper);
}
