void bind_VehiclePickupWrapper([[maybe_unused]] v8::Isolate* isolate, v8pp::module& module)
{

	v8pp::class_<VehiclePickupWrapper> cl_VehiclePickupWrapper(isolate);
	cl_VehiclePickupWrapper.inherit<ActorWrapper>();
	cl_VehiclePickupWrapper.ctor<uintptr_t>();
	cl_VehiclePickupWrapper.set<float(VehiclePickupWrapper::*)()>("GetRespawnDelay", &VehiclePickupWrapper::GetRespawnDelay);
	cl_VehiclePickupWrapper.set<void(VehiclePickupWrapper::*)(float)>("SetRespawnDelay", &VehiclePickupWrapper::SetRespawnDelay);
	cl_VehiclePickupWrapper.set<FXActorWrapper(VehiclePickupWrapper::*)()>("GetFXActorArchetype", &VehiclePickupWrapper::GetFXActorArchetype);
	cl_VehiclePickupWrapper.set<void(VehiclePickupWrapper::*)(FXActorWrapper)>("SetFXActorArchetype", &VehiclePickupWrapper::SetFXActorArchetype);
	cl_VehiclePickupWrapper.set<FXActorWrapper(VehiclePickupWrapper::*)()>("GetFXActor", &VehiclePickupWrapper::GetFXActor);
	cl_VehiclePickupWrapper.set<void(VehiclePickupWrapper::*)(FXActorWrapper)>("SetFXActor", &VehiclePickupWrapper::SetFXActor);
	cl_VehiclePickupWrapper.set<long unsigned int(VehiclePickupWrapper::*)()>("GetbPickedUp", &VehiclePickupWrapper::GetbPickedUp);
	cl_VehiclePickupWrapper.set<void(VehiclePickupWrapper::*)(long unsigned int)>("SetbPickedUp", &VehiclePickupWrapper::SetbPickedUp);
	cl_VehiclePickupWrapper.set<long unsigned int(VehiclePickupWrapper::*)()>("GetbNetRelevant", &VehiclePickupWrapper::GetbNetRelevant);
	cl_VehiclePickupWrapper.set<void(VehiclePickupWrapper::*)(long unsigned int)>("SetbNetRelevant", &VehiclePickupWrapper::SetbNetRelevant);
	cl_VehiclePickupWrapper.set<long unsigned int(VehiclePickupWrapper::*)()>("GetbNoPickup", &VehiclePickupWrapper::GetbNoPickup);
	cl_VehiclePickupWrapper.set<void(VehiclePickupWrapper::*)(long unsigned int)>("SetbNoPickup", &VehiclePickupWrapper::SetbNoPickup);
	cl_VehiclePickupWrapper.set<void(VehiclePickupWrapper::*)()>("PlayPickedUpFX", &VehiclePickupWrapper::PlayPickedUpFX);
	cl_VehiclePickupWrapper.set<bool(VehiclePickupWrapper::*)()>("IsTouchingAVehicle", &VehiclePickupWrapper::IsTouchingAVehicle);
	cl_VehiclePickupWrapper.set<void(VehiclePickupWrapper::*)()>("UpdateTickDisabled", &VehiclePickupWrapper::UpdateTickDisabled);
	cl_VehiclePickupWrapper.set<void(VehiclePickupWrapper::*)(long unsigned int)>("SetNetRelevant", &VehiclePickupWrapper::SetNetRelevant);
	cl_VehiclePickupWrapper.set<void(VehiclePickupWrapper::*)()>("Respawn2", &VehiclePickupWrapper::Respawn2);
	cl_VehiclePickupWrapper.set<void(VehiclePickupWrapper::*)(long unsigned int, CarWrapper)>("SetPickedUp", &VehiclePickupWrapper::SetPickedUp);
	cl_VehiclePickupWrapper.set<void(VehiclePickupWrapper::*)(CarWrapper)>("Pickup2", &VehiclePickupWrapper::Pickup2);
	cl_VehiclePickupWrapper.set<bool(VehiclePickupWrapper::*)(CarWrapper)>("CanPickup", &VehiclePickupWrapper::CanPickup);
	cl_VehiclePickupWrapper.set<void(VehiclePickupWrapper::*)(CarWrapper)>("OnTouch", &VehiclePickupWrapper::OnTouch);
	cl_VehiclePickupWrapper.set<void(VehiclePickupWrapper::*)(ActorWrapper, PrimitiveComponentWrapper, Vector &, Vector &)>("eventTouch", &VehiclePickupWrapper::eventTouch);
	cl_VehiclePickupWrapper.set<void(VehiclePickupWrapper::*)()>("OnPickUp", &VehiclePickupWrapper::OnPickUp);
	cl_VehiclePickupWrapper.set<void(VehiclePickupWrapper::*)()>("OnSpawn", &VehiclePickupWrapper::OnSpawn);
	cl_VehiclePickupWrapper.set<void(VehiclePickupWrapper::*)()>("SetNoPickup", &VehiclePickupWrapper::SetNoPickup);
	cl_VehiclePickupWrapper.set<void(VehiclePickupWrapper::*)()>("SetupReplicateNoPickup", &VehiclePickupWrapper::SetupReplicateNoPickup);
	cl_VehiclePickupWrapper.set<void(VehiclePickupWrapper::*)()>("InitFX", &VehiclePickupWrapper::InitFX);
	cl_VehiclePickupWrapper.set<void(VehiclePickupWrapper::*)()>("eventPostBeginPlay", &VehiclePickupWrapper::eventPostBeginPlay);
	cl_VehiclePickupWrapper.set<void(VehiclePickupWrapper::*)()>("eventPreBeginPlay", &VehiclePickupWrapper::eventPreBeginPlay);
	cl_VehiclePickupWrapper.set<void(VehiclePickupWrapper::*)(VehiclePickupWrapper)>("EventPickedUp", &VehiclePickupWrapper::EventPickedUp);
	cl_VehiclePickupWrapper.set<void(VehiclePickupWrapper::*)(VehiclePickupWrapper)>("EventSpawned", &VehiclePickupWrapper::EventSpawned);

	module.set("VehiclePickupWrapper", cl_VehiclePickupWrapper);
}
