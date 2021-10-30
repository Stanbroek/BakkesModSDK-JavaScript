void bind_BoostOverridePickup([[maybe_unused]] v8::Isolate* isolate, v8pp::module& module)
{

	v8pp::class_<BoostOverridePickup> cl_BoostOverridePickup(isolate);
	cl_BoostOverridePickup.inherit<TargetedPickup>();
	cl_BoostOverridePickup.ctor<uintptr_t>();
	cl_BoostOverridePickup.set<CarWrapper(BoostOverridePickup::*)()>("GetOtherCar", &BoostOverridePickup::GetOtherCar);
	cl_BoostOverridePickup.set<void(BoostOverridePickup::*)(CarWrapper)>("SetOtherCar", &BoostOverridePickup::SetOtherCar);
	cl_BoostOverridePickup.set<void(BoostOverridePickup::*)()>("PickupEnd", &BoostOverridePickup::PickupEnd);
	cl_BoostOverridePickup.set<void(BoostOverridePickup::*)()>("OnTargetChanged", &BoostOverridePickup::OnTargetChanged);
	cl_BoostOverridePickup.set<void(BoostOverridePickup::*)()>("PickupStart", &BoostOverridePickup::PickupStart);

	module.set("BoostOverridePickup", cl_BoostOverridePickup);
}
