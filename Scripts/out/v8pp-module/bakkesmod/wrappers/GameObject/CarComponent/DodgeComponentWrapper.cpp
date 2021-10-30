void bind_DodgeComponentWrapper([[maybe_unused]] v8::Isolate* isolate, v8pp::module& module)
{

	v8pp::class_<DodgeComponentWrapper> cl_DodgeComponentWrapper(isolate);
	cl_DodgeComponentWrapper.inherit<CarComponentWrapper>();
	cl_DodgeComponentWrapper.ctor<uintptr_t>();
	cl_DodgeComponentWrapper.set<float(DodgeComponentWrapper::*)()>("GetDodgeInputThreshold", &DodgeComponentWrapper::GetDodgeInputThreshold);
	cl_DodgeComponentWrapper.set<void(DodgeComponentWrapper::*)(float)>("SetDodgeInputThreshold", &DodgeComponentWrapper::SetDodgeInputThreshold);
	cl_DodgeComponentWrapper.set<float(DodgeComponentWrapper::*)()>("GetSideDodgeImpulse", &DodgeComponentWrapper::GetSideDodgeImpulse);
	cl_DodgeComponentWrapper.set<void(DodgeComponentWrapper::*)(float)>("SetSideDodgeImpulse", &DodgeComponentWrapper::SetSideDodgeImpulse);
	cl_DodgeComponentWrapper.set<float(DodgeComponentWrapper::*)()>("GetSideDodgeImpulseMaxSpeedScale", &DodgeComponentWrapper::GetSideDodgeImpulseMaxSpeedScale);
	cl_DodgeComponentWrapper.set<void(DodgeComponentWrapper::*)(float)>("SetSideDodgeImpulseMaxSpeedScale", &DodgeComponentWrapper::SetSideDodgeImpulseMaxSpeedScale);
	cl_DodgeComponentWrapper.set<float(DodgeComponentWrapper::*)()>("GetForwardDodgeImpulse", &DodgeComponentWrapper::GetForwardDodgeImpulse);
	cl_DodgeComponentWrapper.set<void(DodgeComponentWrapper::*)(float)>("SetForwardDodgeImpulse", &DodgeComponentWrapper::SetForwardDodgeImpulse);
	cl_DodgeComponentWrapper.set<float(DodgeComponentWrapper::*)()>("GetForwardDodgeImpulseMaxSpeedScale", &DodgeComponentWrapper::GetForwardDodgeImpulseMaxSpeedScale);
	cl_DodgeComponentWrapper.set<void(DodgeComponentWrapper::*)(float)>("SetForwardDodgeImpulseMaxSpeedScale", &DodgeComponentWrapper::SetForwardDodgeImpulseMaxSpeedScale);
	cl_DodgeComponentWrapper.set<float(DodgeComponentWrapper::*)()>("GetBackwardDodgeImpulse", &DodgeComponentWrapper::GetBackwardDodgeImpulse);
	cl_DodgeComponentWrapper.set<void(DodgeComponentWrapper::*)(float)>("SetBackwardDodgeImpulse", &DodgeComponentWrapper::SetBackwardDodgeImpulse);
	cl_DodgeComponentWrapper.set<float(DodgeComponentWrapper::*)()>("GetBackwardDodgeImpulseMaxSpeedScale", &DodgeComponentWrapper::GetBackwardDodgeImpulseMaxSpeedScale);
	cl_DodgeComponentWrapper.set<void(DodgeComponentWrapper::*)(float)>("SetBackwardDodgeImpulseMaxSpeedScale", &DodgeComponentWrapper::SetBackwardDodgeImpulseMaxSpeedScale);
	cl_DodgeComponentWrapper.set<float(DodgeComponentWrapper::*)()>("GetSideDodgeTorque", &DodgeComponentWrapper::GetSideDodgeTorque);
	cl_DodgeComponentWrapper.set<void(DodgeComponentWrapper::*)(float)>("SetSideDodgeTorque", &DodgeComponentWrapper::SetSideDodgeTorque);
	cl_DodgeComponentWrapper.set<float(DodgeComponentWrapper::*)()>("GetForwardDodgeTorque", &DodgeComponentWrapper::GetForwardDodgeTorque);
	cl_DodgeComponentWrapper.set<void(DodgeComponentWrapper::*)(float)>("SetForwardDodgeTorque", &DodgeComponentWrapper::SetForwardDodgeTorque);
	cl_DodgeComponentWrapper.set<float(DodgeComponentWrapper::*)()>("GetDodgeTorqueTime", &DodgeComponentWrapper::GetDodgeTorqueTime);
	cl_DodgeComponentWrapper.set<void(DodgeComponentWrapper::*)(float)>("SetDodgeTorqueTime", &DodgeComponentWrapper::SetDodgeTorqueTime);
	cl_DodgeComponentWrapper.set<float(DodgeComponentWrapper::*)()>("GetMinDodgeTorqueTime", &DodgeComponentWrapper::GetMinDodgeTorqueTime);
	cl_DodgeComponentWrapper.set<void(DodgeComponentWrapper::*)(float)>("SetMinDodgeTorqueTime", &DodgeComponentWrapper::SetMinDodgeTorqueTime);
	cl_DodgeComponentWrapper.set<float(DodgeComponentWrapper::*)()>("GetDodgeZDamping", &DodgeComponentWrapper::GetDodgeZDamping);
	cl_DodgeComponentWrapper.set<void(DodgeComponentWrapper::*)(float)>("SetDodgeZDamping", &DodgeComponentWrapper::SetDodgeZDamping);
	cl_DodgeComponentWrapper.set<float(DodgeComponentWrapper::*)()>("GetDodgeZDampingDelay", &DodgeComponentWrapper::GetDodgeZDampingDelay);
	cl_DodgeComponentWrapper.set<void(DodgeComponentWrapper::*)(float)>("SetDodgeZDampingDelay", &DodgeComponentWrapper::SetDodgeZDampingDelay);
	cl_DodgeComponentWrapper.set<float(DodgeComponentWrapper::*)()>("GetDodgeZDampingUpTime", &DodgeComponentWrapper::GetDodgeZDampingUpTime);
	cl_DodgeComponentWrapper.set<void(DodgeComponentWrapper::*)(float)>("SetDodgeZDampingUpTime", &DodgeComponentWrapper::SetDodgeZDampingUpTime);
	cl_DodgeComponentWrapper.set<float(DodgeComponentWrapper::*)()>("GetDodgeImpulseScale", &DodgeComponentWrapper::GetDodgeImpulseScale);
	cl_DodgeComponentWrapper.set<void(DodgeComponentWrapper::*)(float)>("SetDodgeImpulseScale", &DodgeComponentWrapper::SetDodgeImpulseScale);
	cl_DodgeComponentWrapper.set<float(DodgeComponentWrapper::*)()>("GetDodgeTorqueScale", &DodgeComponentWrapper::GetDodgeTorqueScale);
	cl_DodgeComponentWrapper.set<void(DodgeComponentWrapper::*)(float)>("SetDodgeTorqueScale", &DodgeComponentWrapper::SetDodgeTorqueScale);
	cl_DodgeComponentWrapper.set<Vector(DodgeComponentWrapper::*)()>("GetDodgeTorque", &DodgeComponentWrapper::GetDodgeTorque);
	cl_DodgeComponentWrapper.set<void(DodgeComponentWrapper::*)(Vector)>("SetDodgeTorque", &DodgeComponentWrapper::SetDodgeTorque);
	cl_DodgeComponentWrapper.set<Vector(DodgeComponentWrapper::*)()>("GetDodgeDirection", &DodgeComponentWrapper::GetDodgeDirection);
	cl_DodgeComponentWrapper.set<void(DodgeComponentWrapper::*)(Vector)>("SetDodgeDirection", &DodgeComponentWrapper::SetDodgeDirection);
	cl_DodgeComponentWrapper.set<void(DodgeComponentWrapper::*)()>("SetDodgeSettings", &DodgeComponentWrapper::SetDodgeSettings);
	cl_DodgeComponentWrapper.set<void(DodgeComponentWrapper::*)(float)>("ApplyTorqueForces", &DodgeComponentWrapper::ApplyTorqueForces);
	cl_DodgeComponentWrapper.set<void(DodgeComponentWrapper::*)()>("ApplyDodgeImpulse", &DodgeComponentWrapper::ApplyDodgeImpulse);
	cl_DodgeComponentWrapper.set<Vector(DodgeComponentWrapper::*)(Vector &)>("GetDodgeImpulse2", &DodgeComponentWrapper::GetDodgeImpulse2);
	cl_DodgeComponentWrapper.set<void(DodgeComponentWrapper::*)(float)>("ApplyForces", &DodgeComponentWrapper::ApplyForces);
	cl_DodgeComponentWrapper.set<bool(DodgeComponentWrapper::*)()>("CanActivate", &DodgeComponentWrapper::CanActivate);
	cl_DodgeComponentWrapper.set<void(DodgeComponentWrapper::*)()>("OnCreated", &DodgeComponentWrapper::OnCreated);

	module.set("DodgeComponentWrapper", cl_DodgeComponentWrapper);
}
