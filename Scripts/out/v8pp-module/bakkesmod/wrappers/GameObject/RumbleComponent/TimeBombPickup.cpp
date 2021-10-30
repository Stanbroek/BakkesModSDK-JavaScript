void bind_TimeBombPickup([[maybe_unused]] v8::Isolate* isolate, v8pp::module& module)
{

	v8pp::class_<TimeBombPickup> cl_TimeBombPickup(isolate);
	cl_TimeBombPickup.inherit<RumblePickupComponentWrapper>();
	cl_TimeBombPickup.ctor<uintptr_t>();
	cl_TimeBombPickup.set<float(TimeBombPickup::*)()>("GetRadius", &TimeBombPickup::GetRadius);
	cl_TimeBombPickup.set<void(TimeBombPickup::*)(float)>("SetRadius", &TimeBombPickup::SetRadius);
	cl_TimeBombPickup.set<float(TimeBombPickup::*)()>("GetAlmostReadyDuration", &TimeBombPickup::GetAlmostReadyDuration);
	cl_TimeBombPickup.set<void(TimeBombPickup::*)(float)>("SetAlmostReadyDuration", &TimeBombPickup::SetAlmostReadyDuration);
	cl_TimeBombPickup.set<float(TimeBombPickup::*)()>("GetStartMatSpeed", &TimeBombPickup::GetStartMatSpeed);
	cl_TimeBombPickup.set<void(TimeBombPickup::*)(float)>("SetStartMatSpeed", &TimeBombPickup::SetStartMatSpeed);
	cl_TimeBombPickup.set<float(TimeBombPickup::*)()>("GetAlmostReadyMatSpeed", &TimeBombPickup::GetAlmostReadyMatSpeed);
	cl_TimeBombPickup.set<void(TimeBombPickup::*)(float)>("SetAlmostReadyMatSpeed", &TimeBombPickup::SetAlmostReadyMatSpeed);
	cl_TimeBombPickup.set<float(TimeBombPickup::*)()>("GetImpulseForce", &TimeBombPickup::GetImpulseForce);
	cl_TimeBombPickup.set<void(TimeBombPickup::*)(float)>("SetImpulseForce", &TimeBombPickup::SetImpulseForce);
	cl_TimeBombPickup.set<float(TimeBombPickup::*)()>("GetCarVerticalForce", &TimeBombPickup::GetCarVerticalForce);
	cl_TimeBombPickup.set<void(TimeBombPickup::*)(float)>("SetCarVerticalForce", &TimeBombPickup::SetCarVerticalForce);
	cl_TimeBombPickup.set<float(TimeBombPickup::*)()>("GetCarTorque", &TimeBombPickup::GetCarTorque);
	cl_TimeBombPickup.set<void(TimeBombPickup::*)(float)>("SetCarTorque", &TimeBombPickup::SetCarTorque);
	cl_TimeBombPickup.set<long unsigned int(TimeBombPickup::*)()>("GetbDemolish", &TimeBombPickup::GetbDemolish);
	cl_TimeBombPickup.set<void(TimeBombPickup::*)(long unsigned int)>("SetbDemolish", &TimeBombPickup::SetbDemolish);
	cl_TimeBombPickup.set<long unsigned int(TimeBombPickup::*)()>("GetbImpulse", &TimeBombPickup::GetbImpulse);
	cl_TimeBombPickup.set<void(TimeBombPickup::*)(long unsigned int)>("SetbImpulse", &TimeBombPickup::SetbImpulse);
	cl_TimeBombPickup.set<void(TimeBombPickup::*)()>("PickupEnd", &TimeBombPickup::PickupEnd);
	cl_TimeBombPickup.set<void(TimeBombPickup::*)()>("AlmostReady2", &TimeBombPickup::AlmostReady2);
	cl_TimeBombPickup.set<void(TimeBombPickup::*)()>("PickupStart", &TimeBombPickup::PickupStart);

	module.set("TimeBombPickup", cl_TimeBombPickup);
}
