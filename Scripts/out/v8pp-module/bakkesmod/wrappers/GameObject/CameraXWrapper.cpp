void bind_CameraXWrapper([[maybe_unused]] v8::Isolate* isolate, v8pp::module& module)
{

	v8pp::class_<CameraXWrapper> cl_CameraXWrapper(isolate);
	cl_CameraXWrapper.inherit<BaseCameraWrapper>();
	cl_CameraXWrapper.ctor<uintptr_t>();
	cl_CameraXWrapper.set<Rotator(CameraXWrapper::*)()>("GetPCDeltaRotation", &CameraXWrapper::GetPCDeltaRotation);
	cl_CameraXWrapper.set<void(CameraXWrapper::*)(Rotator)>("SetPCDeltaRotation", &CameraXWrapper::SetPCDeltaRotation);
	cl_CameraXWrapper.set<Rotator(CameraXWrapper::*)()>("GetOldControllerRotation", &CameraXWrapper::GetOldControllerRotation);
	cl_CameraXWrapper.set<void(CameraXWrapper::*)(Rotator)>("SetOldControllerRotation", &CameraXWrapper::SetOldControllerRotation);
	cl_CameraXWrapper.set<Vector(CameraXWrapper::*)()>("GetPCDeltaLocation", &CameraXWrapper::GetPCDeltaLocation);
	cl_CameraXWrapper.set<void(CameraXWrapper::*)(Vector)>("SetPCDeltaLocation", &CameraXWrapper::SetPCDeltaLocation);
	cl_CameraXWrapper.set<Vector(CameraXWrapper::*)()>("GetOldControllerLocation", &CameraXWrapper::GetOldControllerLocation);
	cl_CameraXWrapper.set<void(CameraXWrapper::*)(Vector)>("SetOldControllerLocation", &CameraXWrapper::SetOldControllerLocation);
	cl_CameraXWrapper.set<Vector(CameraXWrapper::*)()>("GetShakeLocationOffset", &CameraXWrapper::GetShakeLocationOffset);
	cl_CameraXWrapper.set<void(CameraXWrapper::*)(Vector)>("SetShakeLocationOffset", &CameraXWrapper::SetShakeLocationOffset);
	cl_CameraXWrapper.set<Rotator(CameraXWrapper::*)()>("GetShakeRotationOffset", &CameraXWrapper::GetShakeRotationOffset);
	cl_CameraXWrapper.set<void(CameraXWrapper::*)(Rotator)>("SetShakeRotationOffset", &CameraXWrapper::SetShakeRotationOffset);
	cl_CameraXWrapper.set<float(CameraXWrapper::*)()>("GetShakeFOVOffset", &CameraXWrapper::GetShakeFOVOffset);
	cl_CameraXWrapper.set<void(CameraXWrapper::*)(float)>("SetShakeFOVOffset", &CameraXWrapper::SetShakeFOVOffset);
	cl_CameraXWrapper.set<UnrealColor(CameraXWrapper::*)()>("GetStartFadeColor", &CameraXWrapper::GetStartFadeColor);
	cl_CameraXWrapper.set<void(CameraXWrapper::*)(UnrealColor)>("SetStartFadeColor", &CameraXWrapper::SetStartFadeColor);
	cl_CameraXWrapper.set<UnrealColor(CameraXWrapper::*)()>("GetEndFadeColor", &CameraXWrapper::GetEndFadeColor);
	cl_CameraXWrapper.set<void(CameraXWrapper::*)(UnrealColor)>("SetEndFadeColor", &CameraXWrapper::SetEndFadeColor);
	cl_CameraXWrapper.set<Vector(CameraXWrapper::*)()>("GetClipOffset", &CameraXWrapper::GetClipOffset);
	cl_CameraXWrapper.set<void(CameraXWrapper::*)(Vector)>("SetClipOffset", &CameraXWrapper::SetClipOffset);
	cl_CameraXWrapper.set<long unsigned int(CameraXWrapper::*)()>("GetbDisableCameraShake", &CameraXWrapper::GetbDisableCameraShake);
	cl_CameraXWrapper.set<void(CameraXWrapper::*)(long unsigned int)>("SetbDisableCameraShake", &CameraXWrapper::SetbDisableCameraShake);
	cl_CameraXWrapper.set<long unsigned int(CameraXWrapper::*)()>("GetbSnapNextTransition", &CameraXWrapper::GetbSnapNextTransition);
	cl_CameraXWrapper.set<void(CameraXWrapper::*)(long unsigned int)>("SetbSnapNextTransition", &CameraXWrapper::SetbSnapNextTransition);
	cl_CameraXWrapper.set<void(CameraXWrapper::*)()>("eventOnViewTargetChanged", &CameraXWrapper::eventOnViewTargetChanged);
	cl_CameraXWrapper.set<bool(CameraXWrapper::*)()>("IsTransitioning", &CameraXWrapper::IsTransitioning);
	cl_CameraXWrapper.set<void(CameraXWrapper::*)()>("SnapTransition", &CameraXWrapper::SnapTransition);
	cl_CameraXWrapper.set<void(CameraXWrapper::*)(CameraXWrapper)>("CopyFade", &CameraXWrapper::CopyFade);
	cl_CameraXWrapper.set<void(CameraXWrapper::*)(float)>("UpdateFade", &CameraXWrapper::UpdateFade);
	cl_CameraXWrapper.set<void(CameraXWrapper::*)(float)>("eventUpdateCamera", &CameraXWrapper::eventUpdateCamera);
	cl_CameraXWrapper.set<Rotator(CameraXWrapper::*)(Rotator &)>("RemoveRoll", &CameraXWrapper::RemoveRoll);
	cl_CameraXWrapper.set<void(CameraXWrapper::*)()>("UpdateCameraState", &CameraXWrapper::UpdateCameraState);
	cl_CameraXWrapper.set<void(CameraXWrapper::*)()>("InstanceCameraStates", &CameraXWrapper::InstanceCameraStates);
	cl_CameraXWrapper.set<void(CameraXWrapper::*)()>("OnLoadingMovieClosesd", &CameraXWrapper::OnLoadingMovieClosesd);
	cl_CameraXWrapper.set<void(CameraXWrapper::*)()>("eventPostBeginPlay", &CameraXWrapper::eventPostBeginPlay);

	module.set("CameraXWrapper", cl_CameraXWrapper);
}
