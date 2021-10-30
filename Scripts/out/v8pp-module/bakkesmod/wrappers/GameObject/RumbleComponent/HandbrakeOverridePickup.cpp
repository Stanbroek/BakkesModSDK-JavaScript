void bind_HandbrakeOverridePickup([[maybe_unused]] v8::Isolate* isolate, v8pp::module& module)
{

	v8pp::class_<HandbrakeOverridePickup> cl_HandbrakeOverridePickup(isolate);
	cl_HandbrakeOverridePickup.inherit<TargetedPickup>();
	cl_HandbrakeOverridePickup.ctor<uintptr_t>();
	cl_HandbrakeOverridePickup.set<CarWrapper(HandbrakeOverridePickup::*)()>("GetOtherCar", &HandbrakeOverridePickup::GetOtherCar);
	cl_HandbrakeOverridePickup.set<void(HandbrakeOverridePickup::*)(CarWrapper)>("SetOtherCar", &HandbrakeOverridePickup::SetOtherCar);
	cl_HandbrakeOverridePickup.set<void(HandbrakeOverridePickup::*)()>("PickupEnd", &HandbrakeOverridePickup::PickupEnd);
	cl_HandbrakeOverridePickup.set<void(HandbrakeOverridePickup::*)()>("PickupStart", &HandbrakeOverridePickup::PickupStart);

	module.set("HandbrakeOverridePickup", cl_HandbrakeOverridePickup);
}
