void bind_GravityPickup([[maybe_unused]] v8::Isolate* isolate, v8pp::module& module)
{

	v8pp::class_<GravityPickup> cl_GravityPickup(isolate);
	cl_GravityPickup.inherit<RumblePickupComponentWrapper>();
	cl_GravityPickup.ctor<uintptr_t>();
	cl_GravityPickup.set<float(GravityPickup::*)()>("GetBallGravity", &GravityPickup::GetBallGravity);
	cl_GravityPickup.set<void(GravityPickup::*)(float)>("SetBallGravity", &GravityPickup::SetBallGravity);
	cl_GravityPickup.set<float(GravityPickup::*)()>("GetRange", &GravityPickup::GetRange);
	cl_GravityPickup.set<void(GravityPickup::*)(float)>("SetRange", &GravityPickup::SetRange);
	cl_GravityPickup.set<Vector(GravityPickup::*)()>("GetOffset", &GravityPickup::GetOffset);
	cl_GravityPickup.set<void(GravityPickup::*)(Vector)>("SetOffset", &GravityPickup::SetOffset);
	cl_GravityPickup.set<long unsigned int(GravityPickup::*)()>("GetbDeactivateOnTouch", &GravityPickup::GetbDeactivateOnTouch);
	cl_GravityPickup.set<void(GravityPickup::*)(long unsigned int)>("SetbDeactivateOnTouch", &GravityPickup::SetbDeactivateOnTouch);
	cl_GravityPickup.set<float(GravityPickup::*)()>("GetRecordBallHitRate", &GravityPickup::GetRecordBallHitRate);
	cl_GravityPickup.set<void(GravityPickup::*)(float)>("SetRecordBallHitRate", &GravityPickup::SetRecordBallHitRate);
	cl_GravityPickup.set<float(GravityPickup::*)()>("GetLastRecordedBallHitTime", &GravityPickup::GetLastRecordedBallHitTime);
	cl_GravityPickup.set<void(GravityPickup::*)(float)>("SetLastRecordedBallHitTime", &GravityPickup::SetLastRecordedBallHitTime);
	cl_GravityPickup.set<BallWrapper(GravityPickup::*)()>("GetPrevBall", &GravityPickup::GetPrevBall);
	cl_GravityPickup.set<void(GravityPickup::*)(BallWrapper)>("SetPrevBall", &GravityPickup::SetPrevBall);
	cl_GravityPickup.set<void(GravityPickup::*)()>("UpdateVisual", &GravityPickup::UpdateVisual);
	cl_GravityPickup.set<void(GravityPickup::*)(float)>("ApplyForces", &GravityPickup::ApplyForces);
	cl_GravityPickup.set<void(GravityPickup::*)()>("PickupEnd", &GravityPickup::PickupEnd);
	cl_GravityPickup.set<void(GravityPickup::*)()>("PickupStart", &GravityPickup::PickupStart);

	module.set("GravityPickup", cl_GravityPickup);
}
