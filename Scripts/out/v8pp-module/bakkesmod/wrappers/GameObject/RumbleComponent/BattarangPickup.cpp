void bind_BattarangPickup([[maybe_unused]] v8::Isolate* isolate, v8pp::module& module)
{

	v8pp::class_<BattarangPickup> cl_BattarangPickup(isolate);
	cl_BattarangPickup.inherit<BallLassoPickup>();
	cl_BattarangPickup.ctor<uintptr_t>();
	cl_BattarangPickup.set<float(BattarangPickup::*)()>("GetSpinSpeed", &BattarangPickup::GetSpinSpeed);
	cl_BattarangPickup.set<void(BattarangPickup::*)(float)>("SetSpinSpeed", &BattarangPickup::SetSpinSpeed);
	cl_BattarangPickup.set<float(BattarangPickup::*)()>("GetCurRotation", &BattarangPickup::GetCurRotation);
	cl_BattarangPickup.set<void(BattarangPickup::*)(float)>("SetCurRotation", &BattarangPickup::SetCurRotation);

	module.set("BattarangPickup", cl_BattarangPickup);
}
