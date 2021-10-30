void bind_DemolishPickup([[maybe_unused]] v8::Isolate* isolate, v8pp::module& module)
{

	v8pp::class_<DemolishPickup> cl_DemolishPickup(isolate);
	cl_DemolishPickup.inherit<RumblePickupComponentWrapper>();
	cl_DemolishPickup.ctor<uintptr_t>();
	cl_DemolishPickup.set<unsigned char(DemolishPickup::*)()>("GetDemolishTarget", &DemolishPickup::GetDemolishTarget);
	cl_DemolishPickup.set<void(DemolishPickup::*)(unsigned char)>("SetDemolishTarget", &DemolishPickup::SetDemolishTarget);
	cl_DemolishPickup.set<unsigned char(DemolishPickup::*)()>("GetDemolishSpeed", &DemolishPickup::GetDemolishSpeed);
	cl_DemolishPickup.set<void(DemolishPickup::*)(unsigned char)>("SetDemolishSpeed", &DemolishPickup::SetDemolishSpeed);
	cl_DemolishPickup.set<unsigned char(DemolishPickup::*)()>("GetOldTarget", &DemolishPickup::GetOldTarget);
	cl_DemolishPickup.set<void(DemolishPickup::*)(unsigned char)>("SetOldTarget", &DemolishPickup::SetOldTarget);
	cl_DemolishPickup.set<unsigned char(DemolishPickup::*)()>("GetOldSpeed", &DemolishPickup::GetOldSpeed);
	cl_DemolishPickup.set<void(DemolishPickup::*)(unsigned char)>("SetOldSpeed", &DemolishPickup::SetOldSpeed);
	cl_DemolishPickup.set<void(DemolishPickup::*)()>("PickupEnd", &DemolishPickup::PickupEnd);
	cl_DemolishPickup.set<void(DemolishPickup::*)()>("PickupStart", &DemolishPickup::PickupStart);

	module.set("DemolishPickup", cl_DemolishPickup);
}
