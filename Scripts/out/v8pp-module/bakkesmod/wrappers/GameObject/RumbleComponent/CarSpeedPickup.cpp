void bind_CarSpeedPickup([[maybe_unused]] v8::Isolate* isolate, v8pp::module& module)
{

	v8pp::class_<CarSpeedPickup> cl_CarSpeedPickup(isolate);
	cl_CarSpeedPickup.inherit<RumblePickupComponentWrapper>();
	cl_CarSpeedPickup.ctor<uintptr_t>();
	cl_CarSpeedPickup.set<float(CarSpeedPickup::*)()>("GetGravityScale", &CarSpeedPickup::GetGravityScale);
	cl_CarSpeedPickup.set<void(CarSpeedPickup::*)(float)>("SetGravityScale", &CarSpeedPickup::SetGravityScale);
	cl_CarSpeedPickup.set<Vector(CarSpeedPickup::*)()>("GetAddedForce", &CarSpeedPickup::GetAddedForce);
	cl_CarSpeedPickup.set<void(CarSpeedPickup::*)(Vector)>("SetAddedForce", &CarSpeedPickup::SetAddedForce);
	cl_CarSpeedPickup.set<float(CarSpeedPickup::*)()>("GetOrigGravityScale", &CarSpeedPickup::GetOrigGravityScale);
	cl_CarSpeedPickup.set<void(CarSpeedPickup::*)(float)>("SetOrigGravityScale", &CarSpeedPickup::SetOrigGravityScale);
	cl_CarSpeedPickup.set<void(CarSpeedPickup::*)()>("PickupEnd", &CarSpeedPickup::PickupEnd);
	cl_CarSpeedPickup.set<void(CarSpeedPickup::*)()>("PickupStart", &CarSpeedPickup::PickupStart);

	module.set("CarSpeedPickup", cl_CarSpeedPickup);
}
