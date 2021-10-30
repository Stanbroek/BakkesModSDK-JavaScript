void bind_HitForcePickup([[maybe_unused]] v8::Isolate* isolate, v8pp::module& module)
{

	v8pp::class_<HitForcePickup> cl_HitForcePickup(isolate);
	cl_HitForcePickup.inherit<RumblePickupComponentWrapper>();
	cl_HitForcePickup.ctor<uintptr_t>();
	cl_HitForcePickup.set<long unsigned int(HitForcePickup::*)()>("GetbBallForce", &HitForcePickup::GetbBallForce);
	cl_HitForcePickup.set<void(HitForcePickup::*)(long unsigned int)>("SetbBallForce", &HitForcePickup::SetbBallForce);
	cl_HitForcePickup.set<long unsigned int(HitForcePickup::*)()>("GetbCarForce", &HitForcePickup::GetbCarForce);
	cl_HitForcePickup.set<void(HitForcePickup::*)(long unsigned int)>("SetbCarForce", &HitForcePickup::SetbCarForce);
	cl_HitForcePickup.set<long unsigned int(HitForcePickup::*)()>("GetbDemolishCars", &HitForcePickup::GetbDemolishCars);
	cl_HitForcePickup.set<void(HitForcePickup::*)(long unsigned int)>("SetbDemolishCars", &HitForcePickup::SetbDemolishCars);
	cl_HitForcePickup.set<float(HitForcePickup::*)()>("GetBallHitForce", &HitForcePickup::GetBallHitForce);
	cl_HitForcePickup.set<void(HitForcePickup::*)(float)>("SetBallHitForce", &HitForcePickup::SetBallHitForce);
	cl_HitForcePickup.set<float(HitForcePickup::*)()>("GetCarHitForce", &HitForcePickup::GetCarHitForce);
	cl_HitForcePickup.set<void(HitForcePickup::*)(float)>("SetCarHitForce", &HitForcePickup::SetCarHitForce);
	cl_HitForcePickup.set<float(HitForcePickup::*)()>("GetMinFXTime", &HitForcePickup::GetMinFXTime);
	cl_HitForcePickup.set<void(HitForcePickup::*)(float)>("SetMinFXTime", &HitForcePickup::SetMinFXTime);
	cl_HitForcePickup.set<float(HitForcePickup::*)()>("GetOrigBallHitForce", &HitForcePickup::GetOrigBallHitForce);
	cl_HitForcePickup.set<void(HitForcePickup::*)(float)>("SetOrigBallHitForce", &HitForcePickup::SetOrigBallHitForce);
	cl_HitForcePickup.set<float(HitForcePickup::*)()>("GetOrigCarHitForce", &HitForcePickup::GetOrigCarHitForce);
	cl_HitForcePickup.set<void(HitForcePickup::*)(float)>("SetOrigCarHitForce", &HitForcePickup::SetOrigCarHitForce);
	cl_HitForcePickup.set<float(HitForcePickup::*)()>("GetLastFXTime", &HitForcePickup::GetLastFXTime);
	cl_HitForcePickup.set<void(HitForcePickup::*)(float)>("SetLastFXTime", &HitForcePickup::SetLastFXTime);
	cl_HitForcePickup.set<void(HitForcePickup::*)()>("PickupEnd", &HitForcePickup::PickupEnd);
	cl_HitForcePickup.set<void(HitForcePickup::*)()>("PickupStart", &HitForcePickup::PickupStart);

	module.set("HitForcePickup", cl_HitForcePickup);
}
