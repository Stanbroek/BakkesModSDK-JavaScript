void bind_FXActorWrapper([[maybe_unused]] v8::Isolate* isolate, v8pp::module& module)
{

	v8pp::class_<FXActorWrapper> cl_FXActorWrapper(isolate);
	cl_FXActorWrapper.inherit<ActorWrapper>();
	cl_FXActorWrapper.ctor<uintptr_t>();
	cl_FXActorWrapper.set<long unsigned int(FXActorWrapper::*)()>("GetbDeactivateWhenOwnerDestroyed", &FXActorWrapper::GetbDeactivateWhenOwnerDestroyed);
	cl_FXActorWrapper.set<void(FXActorWrapper::*)(long unsigned int)>("SetbDeactivateWhenOwnerDestroyed", &FXActorWrapper::SetbDeactivateWhenOwnerDestroyed);
	cl_FXActorWrapper.set<long unsigned int(FXActorWrapper::*)()>("GetbAllowShadowCasting", &FXActorWrapper::GetbAllowShadowCasting);
	cl_FXActorWrapper.set<void(FXActorWrapper::*)(long unsigned int)>("SetbAllowShadowCasting", &FXActorWrapper::SetbAllowShadowCasting);
	cl_FXActorWrapper.set<long unsigned int(FXActorWrapper::*)()>("GetbAutoActivate", &FXActorWrapper::GetbAutoActivate);
	cl_FXActorWrapper.set<void(FXActorWrapper::*)(long unsigned int)>("SetbAutoActivate", &FXActorWrapper::SetbAutoActivate);
	cl_FXActorWrapper.set<long unsigned int(FXActorWrapper::*)()>("GetbRenderInactive", &FXActorWrapper::GetbRenderInactive);
	cl_FXActorWrapper.set<void(FXActorWrapper::*)(long unsigned int)>("SetbRenderInactive", &FXActorWrapper::SetbRenderInactive);
	cl_FXActorWrapper.set<long unsigned int(FXActorWrapper::*)()>("GetbActive", &FXActorWrapper::GetbActive);
	cl_FXActorWrapper.set<void(FXActorWrapper::*)(long unsigned int)>("SetbActive", &FXActorWrapper::SetbActive);
	cl_FXActorWrapper.set<long unsigned int(FXActorWrapper::*)()>("GetbHadOwner", &FXActorWrapper::GetbHadOwner);
	cl_FXActorWrapper.set<void(FXActorWrapper::*)(long unsigned int)>("SetbHadOwner", &FXActorWrapper::SetbHadOwner);
	cl_FXActorWrapper.set<FXActorWrapper(FXActorWrapper::*)()>("GetParent", &FXActorWrapper::GetParent);
	cl_FXActorWrapper.set<void(FXActorWrapper::*)(FXActorWrapper)>("SetParent", &FXActorWrapper::SetParent);
	cl_FXActorWrapper.set<ActorWrapper(FXActorWrapper::*)()>("GetAttachmentActor", &FXActorWrapper::GetAttachmentActor);
	cl_FXActorWrapper.set<void(FXActorWrapper::*)(ActorWrapper)>("SetAttachmentActor", &FXActorWrapper::SetAttachmentActor);
	cl_FXActorWrapper.set<float(FXActorWrapper::*)()>("GetDestroyWaitTime", &FXActorWrapper::GetDestroyWaitTime);
	cl_FXActorWrapper.set<void(FXActorWrapper::*)(float)>("SetDestroyWaitTime", &FXActorWrapper::SetDestroyWaitTime);
	cl_FXActorWrapper.set<float(FXActorWrapper::*)()>("GetDestroyTime", &FXActorWrapper::GetDestroyTime);
	cl_FXActorWrapper.set<void(FXActorWrapper::*)(float)>("SetDestroyTime", &FXActorWrapper::SetDestroyTime);
	cl_FXActorWrapper.set<int(FXActorWrapper::*)()>("GetEditID", &FXActorWrapper::GetEditID);
	cl_FXActorWrapper.set<void(FXActorWrapper::*)(int)>("SetEditID", &FXActorWrapper::SetEditID);
	cl_FXActorWrapper.set<void(FXActorWrapper::*)()>("eventDumpDebugInfo", &FXActorWrapper::eventDumpDebugInfo);
	cl_FXActorWrapper.set<void(FXActorWrapper::*)()>("eventDestroyed", &FXActorWrapper::eventDestroyed);
	cl_FXActorWrapper.set<void(FXActorWrapper::*)(FXActorWrapper)>("Inherit", &FXActorWrapper::Inherit);
	cl_FXActorWrapper.set<void(FXActorWrapper::*)()>("ResetParticles", &FXActorWrapper::ResetParticles);
	cl_FXActorWrapper.set<void(FXActorWrapper::*)()>("StopAllEffects", &FXActorWrapper::StopAllEffects);
	cl_FXActorWrapper.set<void(FXActorWrapper::*)()>("eventDeactivateAndDestroy", &FXActorWrapper::eventDeactivateAndDestroy);
	cl_FXActorWrapper.set<void(FXActorWrapper::*)()>("UpdateFXStates", &FXActorWrapper::UpdateFXStates);
	cl_FXActorWrapper.set<bool(FXActorWrapper::*)()>("IsLocallyControlled", &FXActorWrapper::IsLocallyControlled);
	cl_FXActorWrapper.set<void(FXActorWrapper::*)()>("Deactivate2", &FXActorWrapper::Deactivate2);
	cl_FXActorWrapper.set<void(FXActorWrapper::*)()>("Activate2", &FXActorWrapper::Activate2);
	cl_FXActorWrapper.set<void(FXActorWrapper::*)(FXActorWrapper)>("BindTo", &FXActorWrapper::BindTo);
	cl_FXActorWrapper.set<void(FXActorWrapper::*)(ActorWrapper)>("SetAttachmentActor2", &FXActorWrapper::SetAttachmentActor2);
	cl_FXActorWrapper.set<void(FXActorWrapper::*)()>("PostBeginPlay", &FXActorWrapper::PostBeginPlay);

	module.set("FXActorWrapper", cl_FXActorWrapper);
}
