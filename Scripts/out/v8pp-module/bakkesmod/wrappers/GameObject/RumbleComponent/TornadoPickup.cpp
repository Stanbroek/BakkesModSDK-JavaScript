void bind_TornadoPickup([[maybe_unused]] v8::Isolate* isolate, v8pp::module& module)
{

	v8pp::class_<TornadoPickup> cl_TornadoPickup(isolate);
	cl_TornadoPickup.inherit<RumblePickupComponentWrapper>();
	cl_TornadoPickup.ctor<uintptr_t>();
	cl_TornadoPickup.set<float(TornadoPickup::*)()>("GetHeight", &TornadoPickup::GetHeight);
	cl_TornadoPickup.set<void(TornadoPickup::*)(float)>("SetHeight", &TornadoPickup::SetHeight);
	cl_TornadoPickup.set<float(TornadoPickup::*)()>("GetRadius", &TornadoPickup::GetRadius);
	cl_TornadoPickup.set<void(TornadoPickup::*)(float)>("SetRadius", &TornadoPickup::SetRadius);
	cl_TornadoPickup.set<Vector(TornadoPickup::*)()>("GetOffset", &TornadoPickup::GetOffset);
	cl_TornadoPickup.set<void(TornadoPickup::*)(Vector)>("SetOffset", &TornadoPickup::SetOffset);
	cl_TornadoPickup.set<float(TornadoPickup::*)()>("GetRotationalForce", &TornadoPickup::GetRotationalForce);
	cl_TornadoPickup.set<void(TornadoPickup::*)(float)>("SetRotationalForce", &TornadoPickup::SetRotationalForce);
	cl_TornadoPickup.set<float(TornadoPickup::*)()>("GetTorque", &TornadoPickup::GetTorque);
	cl_TornadoPickup.set<void(TornadoPickup::*)(float)>("SetTorque", &TornadoPickup::SetTorque);
	cl_TornadoPickup.set<Vector(TornadoPickup::*)()>("GetFXScale", &TornadoPickup::GetFXScale);
	cl_TornadoPickup.set<void(TornadoPickup::*)(Vector)>("SetFXScale", &TornadoPickup::SetFXScale);
	cl_TornadoPickup.set<Vector(TornadoPickup::*)()>("GetFXOffset", &TornadoPickup::GetFXOffset);
	cl_TornadoPickup.set<void(TornadoPickup::*)(Vector)>("SetFXOffset", &TornadoPickup::SetFXOffset);
	cl_TornadoPickup.set<Vector(TornadoPickup::*)()>("GetMeshOffset", &TornadoPickup::GetMeshOffset);
	cl_TornadoPickup.set<void(TornadoPickup::*)(Vector)>("SetMeshOffset", &TornadoPickup::SetMeshOffset);
	cl_TornadoPickup.set<Vector(TornadoPickup::*)()>("GetMeshScale", &TornadoPickup::GetMeshScale);
	cl_TornadoPickup.set<void(TornadoPickup::*)(Vector)>("SetMeshScale", &TornadoPickup::SetMeshScale);
	cl_TornadoPickup.set<float(TornadoPickup::*)()>("GetMaxVelocityOffset", &TornadoPickup::GetMaxVelocityOffset);
	cl_TornadoPickup.set<void(TornadoPickup::*)(float)>("SetMaxVelocityOffset", &TornadoPickup::SetMaxVelocityOffset);
	cl_TornadoPickup.set<float(TornadoPickup::*)()>("GetBallMultiplier", &TornadoPickup::GetBallMultiplier);
	cl_TornadoPickup.set<void(TornadoPickup::*)(float)>("SetBallMultiplier", &TornadoPickup::SetBallMultiplier);
	cl_TornadoPickup.set<long unsigned int(TornadoPickup::*)()>("GetbDebugVis", &TornadoPickup::GetbDebugVis);
	cl_TornadoPickup.set<void(TornadoPickup::*)(long unsigned int)>("SetbDebugVis", &TornadoPickup::SetbDebugVis);
	cl_TornadoPickup.set<float(TornadoPickup::*)()>("GetVelocityEase", &TornadoPickup::GetVelocityEase);
	cl_TornadoPickup.set<void(TornadoPickup::*)(float)>("SetVelocityEase", &TornadoPickup::SetVelocityEase);
	cl_TornadoPickup.set<Vector(TornadoPickup::*)()>("GetVel", &TornadoPickup::GetVel);
	cl_TornadoPickup.set<void(TornadoPickup::*)(Vector)>("SetVel", &TornadoPickup::SetVel);
	cl_TornadoPickup.set<ArrayWrapper<RBActorWrapper>(TornadoPickup::*)()>("GetAffecting", &TornadoPickup::GetAffecting);
	cl_TornadoPickup.set<void(TornadoPickup::*)(float)>("ApplyForces", &TornadoPickup::ApplyForces);
	cl_TornadoPickup.set<void(TornadoPickup::*)(RBActorWrapper)>("PlayCarSFX", &TornadoPickup::PlayCarSFX);
	cl_TornadoPickup.set<void(TornadoPickup::*)(RBActorWrapper)>("PlayBallSFX", &TornadoPickup::PlayBallSFX);

	module.set("TornadoPickup", cl_TornadoPickup);
}
