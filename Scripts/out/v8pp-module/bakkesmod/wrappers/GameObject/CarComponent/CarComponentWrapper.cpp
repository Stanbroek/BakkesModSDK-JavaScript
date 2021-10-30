void bind_CarComponentWrapper([[maybe_unused]] v8::Isolate* isolate, v8pp::module& module)
{

	v8pp::class_<CarComponentWrapper> cl_CarComponentWrapper(isolate);
	cl_CarComponentWrapper.inherit<ActorWrapper>();
	cl_CarComponentWrapper.ctor<uintptr_t>();
	cl_CarComponentWrapper.set<FXActorWrapper(CarComponentWrapper::*)()>("GetFXActorArchetype", &CarComponentWrapper::GetFXActorArchetype);
	cl_CarComponentWrapper.set<void(CarComponentWrapper::*)(FXActorWrapper)>("SetFXActorArchetype", &CarComponentWrapper::SetFXActorArchetype);
	cl_CarComponentWrapper.set<long unsigned int(CarComponentWrapper::*)()>("GetbDisabled", &CarComponentWrapper::GetbDisabled);
	cl_CarComponentWrapper.set<void(CarComponentWrapper::*)(long unsigned int)>("SetbDisabled", &CarComponentWrapper::SetbDisabled);
	cl_CarComponentWrapper.set<long unsigned int(CarComponentWrapper::*)()>("GetbAutoActivate", &CarComponentWrapper::GetbAutoActivate);
	cl_CarComponentWrapper.set<void(CarComponentWrapper::*)(long unsigned int)>("SetbAutoActivate", &CarComponentWrapper::SetbAutoActivate);
	cl_CarComponentWrapper.set<long unsigned int(CarComponentWrapper::*)()>("GetbSimulateComponent", &CarComponentWrapper::GetbSimulateComponent);
	cl_CarComponentWrapper.set<void(CarComponentWrapper::*)(long unsigned int)>("SetbSimulateComponent", &CarComponentWrapper::SetbSimulateComponent);
	cl_CarComponentWrapper.set<long unsigned int(CarComponentWrapper::*)()>("GetbCreated", &CarComponentWrapper::GetbCreated);
	cl_CarComponentWrapper.set<void(CarComponentWrapper::*)(long unsigned int)>("SetbCreated", &CarComponentWrapper::SetbCreated);
	cl_CarComponentWrapper.set<long unsigned int(CarComponentWrapper::*)()>("GetbActive", &CarComponentWrapper::GetbActive);
	cl_CarComponentWrapper.set<void(CarComponentWrapper::*)(long unsigned int)>("SetbActive", &CarComponentWrapper::SetbActive);
	cl_CarComponentWrapper.set<long unsigned int(CarComponentWrapper::*)()>("GetbRemovedFromCar", &CarComponentWrapper::GetbRemovedFromCar);
	cl_CarComponentWrapper.set<void(CarComponentWrapper::*)(long unsigned int)>("SetbRemovedFromCar", &CarComponentWrapper::SetbRemovedFromCar);
	cl_CarComponentWrapper.set<unsigned char(CarComponentWrapper::*)()>("GetComponentData", &CarComponentWrapper::GetComponentData);
	cl_CarComponentWrapper.set<void(CarComponentWrapper::*)(unsigned char)>("SetComponentData", &CarComponentWrapper::SetComponentData);
	cl_CarComponentWrapper.set<unsigned char(CarComponentWrapper::*)()>("GetReplicatedActive", &CarComponentWrapper::GetReplicatedActive);
	cl_CarComponentWrapper.set<void(CarComponentWrapper::*)(unsigned char)>("SetReplicatedActive", &CarComponentWrapper::SetReplicatedActive);
	cl_CarComponentWrapper.set<PriWrapper(CarComponentWrapper::*)()>("GetActivator", &CarComponentWrapper::GetActivator);
	cl_CarComponentWrapper.set<void(CarComponentWrapper::*)(PriWrapper)>("SetActivator", &CarComponentWrapper::SetActivator);
	cl_CarComponentWrapper.set<VehicleWrapper(CarComponentWrapper::*)()>("GetVehicle", &CarComponentWrapper::GetVehicle);
	cl_CarComponentWrapper.set<void(CarComponentWrapper::*)(VehicleWrapper)>("SetVehicle", &CarComponentWrapper::SetVehicle);
	cl_CarComponentWrapper.set<CarWrapper(CarComponentWrapper::*)()>("GetCar", &CarComponentWrapper::GetCar);
	cl_CarComponentWrapper.set<void(CarComponentWrapper::*)(CarWrapper)>("SetCar", &CarComponentWrapper::SetCar);
	cl_CarComponentWrapper.set<float(CarComponentWrapper::*)()>("GetActivityTime", &CarComponentWrapper::GetActivityTime);
	cl_CarComponentWrapper.set<void(CarComponentWrapper::*)(float)>("SetActivityTime", &CarComponentWrapper::SetActivityTime);
	cl_CarComponentWrapper.set<float(CarComponentWrapper::*)()>("GetReplicatedActivityTime", &CarComponentWrapper::GetReplicatedActivityTime);
	cl_CarComponentWrapper.set<void(CarComponentWrapper::*)(float)>("SetReplicatedActivityTime", &CarComponentWrapper::SetReplicatedActivityTime);
	cl_CarComponentWrapper.set<FXActorWrapper(CarComponentWrapper::*)()>("GetFXActor", &CarComponentWrapper::GetFXActor);
	cl_CarComponentWrapper.set<void(CarComponentWrapper::*)(FXActorWrapper)>("SetFXActor", &CarComponentWrapper::SetFXActor);
	cl_CarComponentWrapper.set<void(CarComponentWrapper::*)()>("eventFellOutOfWorld", &CarComponentWrapper::eventFellOutOfWorld);
	cl_CarComponentWrapper.set<float(CarComponentWrapper::*)()>("GetInactiveTime", &CarComponentWrapper::GetInactiveTime);
	cl_CarComponentWrapper.set<float(CarComponentWrapper::*)()>("GetActiveTime", &CarComponentWrapper::GetActiveTime);
	cl_CarComponentWrapper.set<void(CarComponentWrapper::*)(float)>("ApplyForces", &CarComponentWrapper::ApplyForces);
	cl_CarComponentWrapper.set<void(CarComponentWrapper::*)(float)>("PrePhysicsStep", &CarComponentWrapper::PrePhysicsStep);
	cl_CarComponentWrapper.set<void(CarComponentWrapper::*)()>("RemoveFromCar", &CarComponentWrapper::RemoveFromCar);
	cl_CarComponentWrapper.set<bool(CarComponentWrapper::*)()>("CanDeactivate", &CarComponentWrapper::CanDeactivate);
	cl_CarComponentWrapper.set<bool(CarComponentWrapper::*)()>("ConditionalDeactivate", &CarComponentWrapper::ConditionalDeactivate);
	cl_CarComponentWrapper.set<bool(CarComponentWrapper::*)()>("CanActivate", &CarComponentWrapper::CanActivate);
	cl_CarComponentWrapper.set<bool(CarComponentWrapper::*)()>("ConditionalActivate", &CarComponentWrapper::ConditionalActivate);
	cl_CarComponentWrapper.set<void(CarComponentWrapper::*)(long unsigned int)>("SetActive", &CarComponentWrapper::SetActive);
	cl_CarComponentWrapper.set<void(CarComponentWrapper::*)()>("Deactivate2", &CarComponentWrapper::Deactivate2);
	cl_CarComponentWrapper.set<void(CarComponentWrapper::*)()>("Activate2", &CarComponentWrapper::Activate2);
	cl_CarComponentWrapper.set<void(CarComponentWrapper::*)()>("UnregisterCarEvents", &CarComponentWrapper::UnregisterCarEvents);
	cl_CarComponentWrapper.set<void(CarComponentWrapper::*)()>("RegisterCarEvents", &CarComponentWrapper::RegisterCarEvents);
	cl_CarComponentWrapper.set<void(CarComponentWrapper::*)(CarWrapper)>("HandleVehicleSetup", &CarComponentWrapper::HandleVehicleSetup);
	cl_CarComponentWrapper.set<void(CarComponentWrapper::*)()>("OnVehicleSetupComplete", &CarComponentWrapper::OnVehicleSetupComplete);
	cl_CarComponentWrapper.set<void(CarComponentWrapper::*)(CarWrapper, PriWrapper)>("Create2", &CarComponentWrapper::Create2);
	cl_CarComponentWrapper.set<void(CarComponentWrapper::*)()>("ClientUpdateActive", &CarComponentWrapper::ClientUpdateActive);
	cl_CarComponentWrapper.set<void(CarComponentWrapper::*)(CarComponentWrapper)>("EventActivationChanged", &CarComponentWrapper::EventActivationChanged);

	module.set("CarComponentWrapper", cl_CarComponentWrapper);
}
