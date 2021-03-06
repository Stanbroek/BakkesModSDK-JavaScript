void bind_RBActorWrapper([[maybe_unused]] v8::Isolate* isolate, v8pp::module& module)
{

	v8pp::class_<RBActorWrapper> cl_RBActorWrapper(isolate);
	cl_RBActorWrapper.inherit<ActorWrapper>();
	cl_RBActorWrapper.ctor<uintptr_t>();
	cl_RBActorWrapper.set<float(RBActorWrapper::*)()>("GetMaxLinearSpeed", &RBActorWrapper::GetMaxLinearSpeed);
	cl_RBActorWrapper.set<void(RBActorWrapper::*)(float)>("SetMaxLinearSpeed", &RBActorWrapper::SetMaxLinearSpeed);
	cl_RBActorWrapper.set<float(RBActorWrapper::*)()>("GetMaxAngularSpeed", &RBActorWrapper::GetMaxAngularSpeed);
	cl_RBActorWrapper.set<void(RBActorWrapper::*)(float)>("SetMaxAngularSpeed", &RBActorWrapper::SetMaxAngularSpeed);
	cl_RBActorWrapper.set<long unsigned int(RBActorWrapper::*)()>("GetbDisableSleeping", &RBActorWrapper::GetbDisableSleeping);
	cl_RBActorWrapper.set<void(RBActorWrapper::*)(long unsigned int)>("SetbDisableSleeping", &RBActorWrapper::SetbDisableSleeping);
	cl_RBActorWrapper.set<long unsigned int(RBActorWrapper::*)()>("GetbReplayActor", &RBActorWrapper::GetbReplayActor);
	cl_RBActorWrapper.set<void(RBActorWrapper::*)(long unsigned int)>("SetbReplayActor", &RBActorWrapper::SetbReplayActor);
	cl_RBActorWrapper.set<long unsigned int(RBActorWrapper::*)()>("GetbFrozen", &RBActorWrapper::GetbFrozen);
	cl_RBActorWrapper.set<void(RBActorWrapper::*)(long unsigned int)>("SetbFrozen", &RBActorWrapper::SetbFrozen);
	cl_RBActorWrapper.set<long unsigned int(RBActorWrapper::*)()>("GetbIgnoreSyncing", &RBActorWrapper::GetbIgnoreSyncing);
	cl_RBActorWrapper.set<void(RBActorWrapper::*)(long unsigned int)>("SetbIgnoreSyncing", &RBActorWrapper::SetbIgnoreSyncing);
	cl_RBActorWrapper.set<long unsigned int(RBActorWrapper::*)()>("GetbPhysInitialized", &RBActorWrapper::GetbPhysInitialized);
	cl_RBActorWrapper.set<RBState(RBActorWrapper::*)()>("GetOldRBState", &RBActorWrapper::GetOldRBState);
	cl_RBActorWrapper.set<void(RBActorWrapper::*)(RBState)>("SetOldRBState", &RBActorWrapper::SetOldRBState);
	cl_RBActorWrapper.set<RBState(RBActorWrapper::*)()>("GetRBState", &RBActorWrapper::GetRBState);
	cl_RBActorWrapper.set<void(RBActorWrapper::*)(RBState)>("SetRBState", &RBActorWrapper::SetRBState);
	cl_RBActorWrapper.set<RBState(RBActorWrapper::*)()>("GetReplicatedRBState", &RBActorWrapper::GetReplicatedRBState);
	cl_RBActorWrapper.set<void(RBActorWrapper::*)(RBState)>("SetReplicatedRBState", &RBActorWrapper::SetReplicatedRBState);
	cl_RBActorWrapper.set<RBState(RBActorWrapper::*)()>("GetClientCorrectionRBState", &RBActorWrapper::GetClientCorrectionRBState);
	cl_RBActorWrapper.set<void(RBActorWrapper::*)(RBState)>("SetClientCorrectionRBState", &RBActorWrapper::SetClientCorrectionRBState);
	cl_RBActorWrapper.set<WorldContactData(RBActorWrapper::*)()>("GetWorldContact", &RBActorWrapper::GetWorldContact);
	cl_RBActorWrapper.set<void(RBActorWrapper::*)(WorldContactData)>("SetWorldContact", &RBActorWrapper::SetWorldContact);
	cl_RBActorWrapper.set<Vector(RBActorWrapper::*)()>("GetSyncErrorLocation", &RBActorWrapper::GetSyncErrorLocation);
	cl_RBActorWrapper.set<float(RBActorWrapper::*)()>("GetSyncErrorAngle", &RBActorWrapper::GetSyncErrorAngle);
	cl_RBActorWrapper.set<Vector(RBActorWrapper::*)()>("GetSyncErrorAxis", &RBActorWrapper::GetSyncErrorAxis);
	cl_RBActorWrapper.set<FXActorWrapper(RBActorWrapper::*)()>("GetFXActorArchetype", &RBActorWrapper::GetFXActorArchetype);
	cl_RBActorWrapper.set<void(RBActorWrapper::*)(FXActorWrapper)>("SetFXActorArchetype", &RBActorWrapper::SetFXActorArchetype);
	cl_RBActorWrapper.set<FXActorWrapper(RBActorWrapper::*)()>("GetFXActor", &RBActorWrapper::GetFXActor);
	cl_RBActorWrapper.set<void(RBActorWrapper::*)(FXActorWrapper)>("SetFXActor", &RBActorWrapper::SetFXActor);
	cl_RBActorWrapper.set<int(RBActorWrapper::*)()>("GetLastRBCollisionsFrame", &RBActorWrapper::GetLastRBCollisionsFrame);
	cl_RBActorWrapper.set<RBActorWrapper(RBActorWrapper::*)()>("GetWeldedActor", &RBActorWrapper::GetWeldedActor);
	cl_RBActorWrapper.set<RBActorWrapper(RBActorWrapper::*)()>("GetWeldedTo", &RBActorWrapper::GetWeldedTo);
	cl_RBActorWrapper.set<float(RBActorWrapper::*)()>("GetPreWeldMass", &RBActorWrapper::GetPreWeldMass);
	cl_RBActorWrapper.set<void(RBActorWrapper::*)(float)>("SetMass", &RBActorWrapper::SetMass);
	cl_RBActorWrapper.set<void(RBActorWrapper::*)(Vector &, Vector &, Vector &, Vector &)>("SetConstrained3D", &RBActorWrapper::SetConstrained3D);
	cl_RBActorWrapper.set<void(RBActorWrapper::*)(long unsigned int)>("SetConstrained2D", &RBActorWrapper::SetConstrained2D);
	cl_RBActorWrapper.set<void(RBActorWrapper::*)(RBState &)>("SetPhysicsState", &RBActorWrapper::SetPhysicsState);
	cl_RBActorWrapper.set<void(RBActorWrapper::*)(long unsigned int)>("SetFrozen", &RBActorWrapper::SetFrozen);
	cl_RBActorWrapper.set<void(RBActorWrapper::*)(float)>("SetMaxAngularSpeed2", &RBActorWrapper::SetMaxAngularSpeed2);
	cl_RBActorWrapper.set<void(RBActorWrapper::*)(float)>("SetMaxLinearSpeed2", &RBActorWrapper::SetMaxLinearSpeed2);
	cl_RBActorWrapper.set<void(RBActorWrapper::*)(Vector &, unsigned char)>("AddTorque", &RBActorWrapper::AddTorque);
	cl_RBActorWrapper.set<void(RBActorWrapper::*)(Vector &, unsigned char)>("AddForce", &RBActorWrapper::AddForce);
	cl_RBActorWrapper.set<void(RBActorWrapper::*)(RBActorWrapper)>("UnWeldRBActor", &RBActorWrapper::UnWeldRBActor);
	cl_RBActorWrapper.set<void(RBActorWrapper::*)(RBActorWrapper, Vector &, Rotator &)>("WeldRBActor2", &RBActorWrapper::WeldRBActor2);
	cl_RBActorWrapper.set<void(RBActorWrapper::*)()>("ReInitRBPhys", &RBActorWrapper::ReInitRBPhys);
	cl_RBActorWrapper.set<void(RBActorWrapper::*)()>("TerminateRBPhys", &RBActorWrapper::TerminateRBPhys);
	cl_RBActorWrapper.set<Vector(RBActorWrapper::*)()>("GetCurrentRBLocation", &RBActorWrapper::GetCurrentRBLocation);
	cl_RBActorWrapper.set<RBState(RBActorWrapper::*)()>("GetCurrentRBState", &RBActorWrapper::GetCurrentRBState);
	cl_RBActorWrapper.set<int(RBActorWrapper::*)()>("GetPhysicsFrame", &RBActorWrapper::GetPhysicsFrame);
	cl_RBActorWrapper.set<float(RBActorWrapper::*)()>("GetPhysicsTime", &RBActorWrapper::GetPhysicsTime);
	cl_RBActorWrapper.set<void(RBActorWrapper::*)()>("InitAk", &RBActorWrapper::InitAk);
	cl_RBActorWrapper.set<void(RBActorWrapper::*)()>("eventPreBeginPlay", &RBActorWrapper::eventPreBeginPlay);

	module.set("RBActorWrapper", cl_RBActorWrapper);
}
