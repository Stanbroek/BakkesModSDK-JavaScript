void bind_BoostModPickup([[maybe_unused]] v8::Isolate* isolate, v8pp::module& module)
{

	v8pp::class_<BoostModPickup> cl_BoostModPickup(isolate);
	cl_BoostModPickup.inherit<RumblePickupComponentWrapper>();
	cl_BoostModPickup.ctor<uintptr_t>();
	cl_BoostModPickup.set<long unsigned int(BoostModPickup::*)()>("GetbUnlimitedBoost", &BoostModPickup::GetbUnlimitedBoost);
	cl_BoostModPickup.set<void(BoostModPickup::*)(long unsigned int)>("SetbUnlimitedBoost", &BoostModPickup::SetbUnlimitedBoost);
	cl_BoostModPickup.set<float(BoostModPickup::*)()>("GetBoostStrength", &BoostModPickup::GetBoostStrength);
	cl_BoostModPickup.set<void(BoostModPickup::*)(float)>("SetBoostStrength", &BoostModPickup::SetBoostStrength);
	cl_BoostModPickup.set<float(BoostModPickup::*)()>("GetOldBoostStrength", &BoostModPickup::GetOldBoostStrength);
	cl_BoostModPickup.set<void(BoostModPickup::*)(float)>("SetOldBoostStrength", &BoostModPickup::SetOldBoostStrength);
	cl_BoostModPickup.set<void(BoostModPickup::*)()>("PickupEnd", &BoostModPickup::PickupEnd);
	cl_BoostModPickup.set<void(BoostModPickup::*)()>("PickupStart", &BoostModPickup::PickupStart);

	module.set("BoostModPickup", cl_BoostModPickup);
}
