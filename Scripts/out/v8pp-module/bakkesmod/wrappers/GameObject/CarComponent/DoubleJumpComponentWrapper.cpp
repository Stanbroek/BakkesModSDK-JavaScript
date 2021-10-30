void bind_DoubleJumpComponentWrapper([[maybe_unused]] v8::Isolate* isolate, v8pp::module& module)
{

	v8pp::class_<DoubleJumpComponentWrapper> cl_DoubleJumpComponentWrapper(isolate);
	cl_DoubleJumpComponentWrapper.inherit<CarComponentWrapper>();
	cl_DoubleJumpComponentWrapper.ctor<uintptr_t>();
	cl_DoubleJumpComponentWrapper.set<void(DoubleJumpComponentWrapper::*)(float)>("SetJumpImpulse", &DoubleJumpComponentWrapper::SetJumpImpulse);
	cl_DoubleJumpComponentWrapper.set<float(DoubleJumpComponentWrapper::*)()>("GetImpulseScale", &DoubleJumpComponentWrapper::GetImpulseScale);
	cl_DoubleJumpComponentWrapper.set<void(DoubleJumpComponentWrapper::*)(float)>("SetImpulseScale", &DoubleJumpComponentWrapper::SetImpulseScale);
	cl_DoubleJumpComponentWrapper.set<void(DoubleJumpComponentWrapper::*)(float)>("ApplyForces", &DoubleJumpComponentWrapper::ApplyForces);
	cl_DoubleJumpComponentWrapper.set<void(DoubleJumpComponentWrapper::*)()>("OnCreated", &DoubleJumpComponentWrapper::OnCreated);

	module.set("DoubleJumpComponentWrapper", cl_DoubleJumpComponentWrapper);
}
