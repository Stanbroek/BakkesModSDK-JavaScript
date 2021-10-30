void bind_BallFreezePickup([[maybe_unused]] v8::Isolate* isolate, v8pp::module& module)
{

	v8pp::class_<BallFreezePickup> cl_BallFreezePickup(isolate);
	cl_BallFreezePickup.inherit<TargetedPickup>();
	cl_BallFreezePickup.ctor<uintptr_t>();
	cl_BallFreezePickup.set<FXActorWrapper(BallFreezePickup::*)()>("GetFreezeBreakFXArchetype", &BallFreezePickup::GetFreezeBreakFXArchetype);
	cl_BallFreezePickup.set<void(BallFreezePickup::*)(FXActorWrapper)>("SetFreezeBreakFXArchetype", &BallFreezePickup::SetFreezeBreakFXArchetype);
	cl_BallFreezePickup.set<FXActorWrapper(BallFreezePickup::*)()>("GetFreezeFXArchetype", &BallFreezePickup::GetFreezeFXArchetype);
	cl_BallFreezePickup.set<void(BallFreezePickup::*)(FXActorWrapper)>("SetFreezeFXArchetype", &BallFreezePickup::SetFreezeFXArchetype);
	cl_BallFreezePickup.set<long unsigned int(BallFreezePickup::*)()>("GetbMaintainMomentum", &BallFreezePickup::GetbMaintainMomentum);
	cl_BallFreezePickup.set<void(BallFreezePickup::*)(long unsigned int)>("SetbMaintainMomentum", &BallFreezePickup::SetbMaintainMomentum);
	cl_BallFreezePickup.set<long unsigned int(BallFreezePickup::*)()>("GetbTouched", &BallFreezePickup::GetbTouched);
	cl_BallFreezePickup.set<void(BallFreezePickup::*)(long unsigned int)>("SetbTouched", &BallFreezePickup::SetbTouched);
	cl_BallFreezePickup.set<float(BallFreezePickup::*)()>("GetTimeToStop", &BallFreezePickup::GetTimeToStop);
	cl_BallFreezePickup.set<void(BallFreezePickup::*)(float)>("SetTimeToStop", &BallFreezePickup::SetTimeToStop);
	cl_BallFreezePickup.set<float(BallFreezePickup::*)()>("GetStopMomentumPercentage", &BallFreezePickup::GetStopMomentumPercentage);
	cl_BallFreezePickup.set<void(BallFreezePickup::*)(float)>("SetStopMomentumPercentage", &BallFreezePickup::SetStopMomentumPercentage);
	cl_BallFreezePickup.set<BallWrapper(BallFreezePickup::*)()>("GetBall", &BallFreezePickup::GetBall);
	cl_BallFreezePickup.set<void(BallFreezePickup::*)(BallWrapper)>("SetBall", &BallFreezePickup::SetBall);
	cl_BallFreezePickup.set<Vector(BallFreezePickup::*)()>("GetOrigLinearVelocity", &BallFreezePickup::GetOrigLinearVelocity);
	cl_BallFreezePickup.set<void(BallFreezePickup::*)(Vector)>("SetOrigLinearVelocity", &BallFreezePickup::SetOrigLinearVelocity);
	cl_BallFreezePickup.set<Vector(BallFreezePickup::*)()>("GetOrigAngularVelocity", &BallFreezePickup::GetOrigAngularVelocity);
	cl_BallFreezePickup.set<void(BallFreezePickup::*)(Vector)>("SetOrigAngularVelocity", &BallFreezePickup::SetOrigAngularVelocity);
	cl_BallFreezePickup.set<float(BallFreezePickup::*)()>("GetOrigSpeed", &BallFreezePickup::GetOrigSpeed);
	cl_BallFreezePickup.set<void(BallFreezePickup::*)(float)>("SetOrigSpeed", &BallFreezePickup::SetOrigSpeed);
	cl_BallFreezePickup.set<float(BallFreezePickup::*)()>("GetRepOrigSpeed", &BallFreezePickup::GetRepOrigSpeed);
	cl_BallFreezePickup.set<void(BallFreezePickup::*)(float)>("SetRepOrigSpeed", &BallFreezePickup::SetRepOrigSpeed);
	cl_BallFreezePickup.set<FXActorWrapper(BallFreezePickup::*)()>("GetFreezeFX", &BallFreezePickup::GetFreezeFX);
	cl_BallFreezePickup.set<void(BallFreezePickup::*)(FXActorWrapper)>("SetFreezeFX", &BallFreezePickup::SetFreezeFX);
	cl_BallFreezePickup.set<void(BallFreezePickup::*)()>("PickupEnd", &BallFreezePickup::PickupEnd);
	cl_BallFreezePickup.set<void(BallFreezePickup::*)(BallWrapper)>("HandleBallExploded", &BallFreezePickup::HandleBallExploded);
	cl_BallFreezePickup.set<void(BallFreezePickup::*)(BallWrapper, CarWrapper, unsigned char)>("HandleBallHit", &BallFreezePickup::HandleBallHit);
	cl_BallFreezePickup.set<void(BallFreezePickup::*)(float)>("ApplyForces", &BallFreezePickup::ApplyForces);
	cl_BallFreezePickup.set<void(BallFreezePickup::*)()>("OnTargetChanged", &BallFreezePickup::OnTargetChanged);
	cl_BallFreezePickup.set<void(BallFreezePickup::*)()>("PickupStart", &BallFreezePickup::PickupStart);

	module.set("BallFreezePickup", cl_BallFreezePickup);
}
