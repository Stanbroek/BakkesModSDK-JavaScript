void bind_RumblePickupComponentWrapper([[maybe_unused]] v8::Isolate* isolate, v8pp::module& module)
{

	v8pp::class_<RumblePickupComponentWrapper> cl_RumblePickupComponentWrapper(isolate);
	cl_RumblePickupComponentWrapper.inherit<CarComponentWrapper>();
	cl_RumblePickupComponentWrapper.ctor<uintptr_t>();
	cl_RumblePickupComponentWrapper.set<UnrealStringWrapper(RumblePickupComponentWrapper::*)()>("GetPickupName", &RumblePickupComponentWrapper::GetPickupName);
	cl_RumblePickupComponentWrapper.set<long unsigned int(RumblePickupComponentWrapper::*)()>("GetbHudIgnoreUseTime", &RumblePickupComponentWrapper::GetbHudIgnoreUseTime);
	cl_RumblePickupComponentWrapper.set<void(RumblePickupComponentWrapper::*)(long unsigned int)>("SetbHudIgnoreUseTime", &RumblePickupComponentWrapper::SetbHudIgnoreUseTime);
	cl_RumblePickupComponentWrapper.set<long unsigned int(RumblePickupComponentWrapper::*)()>("GetbHasActivated", &RumblePickupComponentWrapper::GetbHasActivated);
	cl_RumblePickupComponentWrapper.set<void(RumblePickupComponentWrapper::*)(long unsigned int)>("SetbHasActivated", &RumblePickupComponentWrapper::SetbHasActivated);
	cl_RumblePickupComponentWrapper.set<long unsigned int(RumblePickupComponentWrapper::*)()>("GetbIsActive", &RumblePickupComponentWrapper::GetbIsActive);
	cl_RumblePickupComponentWrapper.set<void(RumblePickupComponentWrapper::*)(long unsigned int)>("SetbIsActive", &RumblePickupComponentWrapper::SetbIsActive);
	cl_RumblePickupComponentWrapper.set<float(RumblePickupComponentWrapper::*)()>("GetActivationDuration", &RumblePickupComponentWrapper::GetActivationDuration);
	cl_RumblePickupComponentWrapper.set<void(RumblePickupComponentWrapper::*)(float)>("SetActivationDuration", &RumblePickupComponentWrapper::SetActivationDuration);
	cl_RumblePickupComponentWrapper.set<FXActorWrapper(RumblePickupComponentWrapper::*)()>("GetPickupFXArchetype", &RumblePickupComponentWrapper::GetPickupFXArchetype);
	cl_RumblePickupComponentWrapper.set<void(RumblePickupComponentWrapper::*)(FXActorWrapper)>("SetPickupFXArchetype", &RumblePickupComponentWrapper::SetPickupFXArchetype);
	cl_RumblePickupComponentWrapper.set<FXActorWrapper(RumblePickupComponentWrapper::*)()>("GetPickupFX", &RumblePickupComponentWrapper::GetPickupFX);
	cl_RumblePickupComponentWrapper.set<void(RumblePickupComponentWrapper::*)(FXActorWrapper)>("SetPickupFX", &RumblePickupComponentWrapper::SetPickupFX);
	cl_RumblePickupComponentWrapper.set<bool(RumblePickupComponentWrapper::*)()>("HasActivated2", &RumblePickupComponentWrapper::HasActivated2);
	cl_RumblePickupComponentWrapper.set<RBActorWrapper(RumblePickupComponentWrapper::*)()>("GetClientTarget", &RumblePickupComponentWrapper::GetClientTarget);
	cl_RumblePickupComponentWrapper.set<void(RumblePickupComponentWrapper::*)()>("OnVehicleSetupComplete", &RumblePickupComponentWrapper::OnVehicleSetupComplete);
	cl_RumblePickupComponentWrapper.set<float(RumblePickupComponentWrapper::*)()>("GetActiveTimePercent", &RumblePickupComponentWrapper::GetActiveTimePercent);
	cl_RumblePickupComponentWrapper.set<void(RumblePickupComponentWrapper::*)()>("PickupEnd", &RumblePickupComponentWrapper::PickupEnd);
	cl_RumblePickupComponentWrapper.set<void(RumblePickupComponentWrapper::*)()>("PickupStart", &RumblePickupComponentWrapper::PickupStart);
	cl_RumblePickupComponentWrapper.set<BoostWrapper(RumblePickupComponentWrapper::*)()>("GetBoostComponent", &RumblePickupComponentWrapper::GetBoostComponent);
	cl_RumblePickupComponentWrapper.set<void(RumblePickupComponentWrapper::*)()>("DeactivatePickup", &RumblePickupComponentWrapper::DeactivatePickup);
	cl_RumblePickupComponentWrapper.set<bool(RumblePickupComponentWrapper::*)(RBActorWrapper)>("TryActivate", &RumblePickupComponentWrapper::TryActivate);
	cl_RumblePickupComponentWrapper.set<void(RumblePickupComponentWrapper::*)()>("OnCreated", &RumblePickupComponentWrapper::OnCreated);
	cl_RumblePickupComponentWrapper.set<bool(RumblePickupComponentWrapper::*)(CarWrapper)>("CanPickup", &RumblePickupComponentWrapper::CanPickup);
	cl_RumblePickupComponentWrapper.set<void(RumblePickupComponentWrapper::*)(CarWrapper)>("ApplyPickup", &RumblePickupComponentWrapper::ApplyPickup);

	module.set("RumblePickupComponentWrapper", cl_RumblePickupComponentWrapper);
}
