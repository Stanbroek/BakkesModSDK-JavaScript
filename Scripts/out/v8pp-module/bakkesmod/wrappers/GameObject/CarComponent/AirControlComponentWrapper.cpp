void bind_AirControlComponentWrapper([[maybe_unused]] v8::Isolate* isolate, v8pp::module& module)
{

	v8pp::class_<AirControlComponentWrapper> cl_AirControlComponentWrapper(isolate);
	cl_AirControlComponentWrapper.inherit<CarComponentWrapper>();
	cl_AirControlComponentWrapper.ctor<uintptr_t>();
	cl_AirControlComponentWrapper.set<Rotator(AirControlComponentWrapper::*)()>("GetAirTorque", &AirControlComponentWrapper::GetAirTorque);
	cl_AirControlComponentWrapper.set<void(AirControlComponentWrapper::*)(Rotator)>("SetAirTorque", &AirControlComponentWrapper::SetAirTorque);
	cl_AirControlComponentWrapper.set<Rotator(AirControlComponentWrapper::*)()>("GetAirDamping", &AirControlComponentWrapper::GetAirDamping);
	cl_AirControlComponentWrapper.set<void(AirControlComponentWrapper::*)(Rotator)>("SetAirDamping", &AirControlComponentWrapper::SetAirDamping);
	cl_AirControlComponentWrapper.set<float(AirControlComponentWrapper::*)()>("GetThrottleForce", &AirControlComponentWrapper::GetThrottleForce);
	cl_AirControlComponentWrapper.set<void(AirControlComponentWrapper::*)(float)>("SetThrottleForce", &AirControlComponentWrapper::SetThrottleForce);
	cl_AirControlComponentWrapper.set<float(AirControlComponentWrapper::*)()>("GetDodgeDisableTimeRemaining", &AirControlComponentWrapper::GetDodgeDisableTimeRemaining);
	cl_AirControlComponentWrapper.set<void(AirControlComponentWrapper::*)(float)>("SetDodgeDisableTimeRemaining", &AirControlComponentWrapper::SetDodgeDisableTimeRemaining);
	cl_AirControlComponentWrapper.set<float(AirControlComponentWrapper::*)()>("GetControlScale", &AirControlComponentWrapper::GetControlScale);
	cl_AirControlComponentWrapper.set<void(AirControlComponentWrapper::*)(float)>("SetControlScale", &AirControlComponentWrapper::SetControlScale);
	cl_AirControlComponentWrapper.set<float(AirControlComponentWrapper::*)()>("GetAirControlSensitivity", &AirControlComponentWrapper::GetAirControlSensitivity);
	cl_AirControlComponentWrapper.set<void(AirControlComponentWrapper::*)(float)>("SetAirControlSensitivity", &AirControlComponentWrapper::SetAirControlSensitivity);
	cl_AirControlComponentWrapper.set<void(AirControlComponentWrapper::*)(float)>("ApplyForces", &AirControlComponentWrapper::ApplyForces);
	cl_AirControlComponentWrapper.set<void(AirControlComponentWrapper::*)()>("OnCreated", &AirControlComponentWrapper::OnCreated);

	module.set("AirControlComponentWrapper", cl_AirControlComponentWrapper);
}
