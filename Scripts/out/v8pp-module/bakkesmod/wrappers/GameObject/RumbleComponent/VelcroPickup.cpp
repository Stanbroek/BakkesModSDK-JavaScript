void bind_VelcroPickup([[maybe_unused]] v8::Isolate* isolate, v8pp::module& module)
{

	v8pp::class_<VelcroPickup> cl_VelcroPickup(isolate);
	cl_VelcroPickup.inherit<RumblePickupComponentWrapper>();
	cl_VelcroPickup.ctor<uintptr_t>();
	cl_VelcroPickup.set<Vector(VelcroPickup::*)()>("GetBallOffset", &VelcroPickup::GetBallOffset);
	cl_VelcroPickup.set<void(VelcroPickup::*)(Vector)>("SetBallOffset", &VelcroPickup::SetBallOffset);
	cl_VelcroPickup.set<long unsigned int(VelcroPickup::*)()>("GetbUseRealOffset", &VelcroPickup::GetbUseRealOffset);
	cl_VelcroPickup.set<void(VelcroPickup::*)(long unsigned int)>("SetbUseRealOffset", &VelcroPickup::SetbUseRealOffset);
	cl_VelcroPickup.set<long unsigned int(VelcroPickup::*)()>("GetbHit", &VelcroPickup::GetbHit);
	cl_VelcroPickup.set<void(VelcroPickup::*)(long unsigned int)>("SetbHit", &VelcroPickup::SetbHit);
	cl_VelcroPickup.set<long unsigned int(VelcroPickup::*)()>("GetbBroken", &VelcroPickup::GetbBroken);
	cl_VelcroPickup.set<void(VelcroPickup::*)(long unsigned int)>("SetbBroken", &VelcroPickup::SetbBroken);
	cl_VelcroPickup.set<float(VelcroPickup::*)()>("GetAfterHitDuration", &VelcroPickup::GetAfterHitDuration);
	cl_VelcroPickup.set<void(VelcroPickup::*)(float)>("SetAfterHitDuration", &VelcroPickup::SetAfterHitDuration);
	cl_VelcroPickup.set<float(VelcroPickup::*)()>("GetPostBreakDuration", &VelcroPickup::GetPostBreakDuration);
	cl_VelcroPickup.set<void(VelcroPickup::*)(float)>("SetPostBreakDuration", &VelcroPickup::SetPostBreakDuration);
	cl_VelcroPickup.set<float(VelcroPickup::*)()>("GetMinBreakForce", &VelcroPickup::GetMinBreakForce);
	cl_VelcroPickup.set<void(VelcroPickup::*)(float)>("SetMinBreakForce", &VelcroPickup::SetMinBreakForce);
	cl_VelcroPickup.set<float(VelcroPickup::*)()>("GetMinBreakTime", &VelcroPickup::GetMinBreakTime);
	cl_VelcroPickup.set<void(VelcroPickup::*)(float)>("SetMinBreakTime", &VelcroPickup::SetMinBreakTime);
	cl_VelcroPickup.set<float(VelcroPickup::*)()>("GetCheckLastTouchRate", &VelcroPickup::GetCheckLastTouchRate);
	cl_VelcroPickup.set<void(VelcroPickup::*)(float)>("SetCheckLastTouchRate", &VelcroPickup::SetCheckLastTouchRate);
	cl_VelcroPickup.set<BallWrapper(VelcroPickup::*)()>("GetWeldedBall", &VelcroPickup::GetWeldedBall);
	cl_VelcroPickup.set<void(VelcroPickup::*)(BallWrapper)>("SetWeldedBall", &VelcroPickup::SetWeldedBall);
	cl_VelcroPickup.set<float(VelcroPickup::*)()>("GetOldBallMass", &VelcroPickup::GetOldBallMass);
	cl_VelcroPickup.set<void(VelcroPickup::*)(float)>("SetOldBallMass", &VelcroPickup::SetOldBallMass);
	cl_VelcroPickup.set<float(VelcroPickup::*)()>("GetAttachTime", &VelcroPickup::GetAttachTime);
	cl_VelcroPickup.set<void(VelcroPickup::*)(float)>("SetAttachTime", &VelcroPickup::SetAttachTime);
	cl_VelcroPickup.set<float(VelcroPickup::*)()>("GetLastTouchCheckTime", &VelcroPickup::GetLastTouchCheckTime);
	cl_VelcroPickup.set<void(VelcroPickup::*)(float)>("SetLastTouchCheckTime", &VelcroPickup::SetLastTouchCheckTime);
	cl_VelcroPickup.set<float(VelcroPickup::*)()>("GetBreakTime", &VelcroPickup::GetBreakTime);
	cl_VelcroPickup.set<void(VelcroPickup::*)(float)>("SetBreakTime", &VelcroPickup::SetBreakTime);
	cl_VelcroPickup.set<void(VelcroPickup::*)()>("DoBreak", &VelcroPickup::DoBreak);
	cl_VelcroPickup.set<void(VelcroPickup::*)(BallWrapper, CarWrapper, unsigned char)>("HandleCarTouch", &VelcroPickup::HandleCarTouch);
	cl_VelcroPickup.set<void(VelcroPickup::*)()>("PickupEnd", &VelcroPickup::PickupEnd);
	cl_VelcroPickup.set<void(VelcroPickup::*)()>("OnBallHit", &VelcroPickup::OnBallHit);
	cl_VelcroPickup.set<void(VelcroPickup::*)()>("PickupStart", &VelcroPickup::PickupStart);

	module.set("VelcroPickup", cl_VelcroPickup);
}
