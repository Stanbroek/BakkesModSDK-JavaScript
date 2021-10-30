void bind_CameraWrapper([[maybe_unused]] v8::Isolate* isolate, v8pp::module& module)
{

	v8pp::class_<CameraWrapper> cl_CameraWrapper(isolate);
	cl_CameraWrapper.inherit<CameraXWrapper>();
	cl_CameraWrapper.ctor<uintptr_t>();
	cl_CameraWrapper.set<Vector(CameraWrapper::*)()>("GetLocation", &CameraWrapper::GetLocation);
	cl_CameraWrapper.set<void(CameraWrapper::*)(Vector)>("SetLocation", &CameraWrapper::SetLocation);
	cl_CameraWrapper.set<Rotator(CameraWrapper::*)()>("GetRotation", &CameraWrapper::GetRotation);
	cl_CameraWrapper.set<void(CameraWrapper::*)(Rotator)>("SetRotation", &CameraWrapper::SetRotation);
	cl_CameraWrapper.set<ProfileCameraSettings(CameraWrapper::*)()>("GetCameraSettings", &CameraWrapper::GetCameraSettings);
	cl_CameraWrapper.set<void(CameraWrapper::*)(ProfileCameraSettings)>("SetCameraSettings", &CameraWrapper::SetCameraSettings);
	cl_CameraWrapper.set<bool(CameraWrapper::*)()>("IsCameraShakeOn", &CameraWrapper::IsCameraShakeOn);
	cl_CameraWrapper.set<POV(CameraWrapper::*)()>("GetPOV", &CameraWrapper::GetPOV);
	cl_CameraWrapper.set<void(CameraWrapper::*)(POV)>("SetPOV", &CameraWrapper::SetPOV);
	cl_CameraWrapper.set<void(CameraWrapper::*)(float)>("SetFOV", &CameraWrapper::SetFOV);
	cl_CameraWrapper.set<float(CameraWrapper::*)()>("GetFOV", &CameraWrapper::GetFOV);
	cl_CameraWrapper.set<void(CameraWrapper::*)(bool)>("SetLockedFOV", &CameraWrapper::SetLockedFOV);
	cl_CameraWrapper.set<ActorWrapper(CameraWrapper::*)()>("GetCameraAsActor", &CameraWrapper::GetCameraAsActor);
	cl_CameraWrapper.set<std::string(CameraWrapper::*)()>("GetCameraState", &CameraWrapper::GetCameraState);
	cl_CameraWrapper.set<void(CameraWrapper::*)(std::string)>("SetCameraState", &CameraWrapper::SetCameraState);
	cl_CameraWrapper.set<Vector(CameraWrapper::*)(Vector, Vector, float, float)>("linterp", &CameraWrapper::linterp);
	cl_CameraWrapper.set<std::string(CameraWrapper::*)()>("GetFocusActor", &CameraWrapper::GetFocusActor);
	cl_CameraWrapper.set<bool(CameraWrapper::*)(std::string)>("SetFocusActor", &CameraWrapper::SetFocusActor);
	cl_CameraWrapper.set<bool(CameraWrapper::*)()>("SetFlyCamBallTargetMode", &CameraWrapper::SetFlyCamBallTargetMode);
	cl_CameraWrapper.set<float(CameraWrapper::*)()>("GetSwivelFastSpeed", &CameraWrapper::GetSwivelFastSpeed);
	cl_CameraWrapper.set<void(CameraWrapper::*)(float)>("SetSwivelFastSpeed", &CameraWrapper::SetSwivelFastSpeed);
	cl_CameraWrapper.set<float(CameraWrapper::*)()>("GetSwivelDieRate", &CameraWrapper::GetSwivelDieRate);
	cl_CameraWrapper.set<void(CameraWrapper::*)(float)>("SetSwivelDieRate", &CameraWrapper::SetSwivelDieRate);
	cl_CameraWrapper.set<StructArrayWrapper<ProfileCameraSettings>(CameraWrapper::*)()>("GetCameraPresetSettings", &CameraWrapper::GetCameraPresetSettings);
	cl_CameraWrapper.set<float(CameraWrapper::*)()>("GetHorizontalSplitscreenHeightOffset", &CameraWrapper::GetHorizontalSplitscreenHeightOffset);
	cl_CameraWrapper.set<void(CameraWrapper::*)(float)>("SetHorizontalSplitscreenHeightOffset", &CameraWrapper::SetHorizontalSplitscreenHeightOffset);
	cl_CameraWrapper.set<float(CameraWrapper::*)()>("GetHorizontalSplitscreenFOVOffset", &CameraWrapper::GetHorizontalSplitscreenFOVOffset);
	cl_CameraWrapper.set<void(CameraWrapper::*)(float)>("SetHorizontalSplitscreenFOVOffset", &CameraWrapper::SetHorizontalSplitscreenFOVOffset);
	cl_CameraWrapper.set<float(CameraWrapper::*)()>("GetVerticalSplitscreenFOVOffset", &CameraWrapper::GetVerticalSplitscreenFOVOffset);
	cl_CameraWrapper.set<void(CameraWrapper::*)(float)>("SetVerticalSplitscreenFOVOffset", &CameraWrapper::SetVerticalSplitscreenFOVOffset);
	cl_CameraWrapper.set<float(CameraWrapper::*)()>("GetClipRate", &CameraWrapper::GetClipRate);
	cl_CameraWrapper.set<void(CameraWrapper::*)(float)>("SetClipRate", &CameraWrapper::SetClipRate);
	cl_CameraWrapper.set<Rotator(CameraWrapper::*)()>("GetCurrentSwivel", &CameraWrapper::GetCurrentSwivel);
	cl_CameraWrapper.set<void(CameraWrapper::*)(Rotator)>("SetCurrentSwivel", &CameraWrapper::SetCurrentSwivel);
	cl_CameraWrapper.set<RBActorWrapper(CameraWrapper::*)()>("GetDemolisher", &CameraWrapper::GetDemolisher);
	cl_CameraWrapper.set<void(CameraWrapper::*)(RBActorWrapper)>("SetDemolisher", &CameraWrapper::SetDemolisher);
	cl_CameraWrapper.set<long unsigned int(CameraWrapper::*)()>("GetbDemolished", &CameraWrapper::GetbDemolished);
	cl_CameraWrapper.set<void(CameraWrapper::*)(long unsigned int)>("SetbDemolished", &CameraWrapper::SetbDemolished);
	cl_CameraWrapper.set<float(CameraWrapper::*)(float)>("ClipToField", &CameraWrapper::ClipToField);
	cl_CameraWrapper.set<void(CameraWrapper::*)(RBActorWrapper)>("Demolished2", &CameraWrapper::Demolished2);
	cl_CameraWrapper.set<Rotator(CameraWrapper::*)(float, float)>("GetDesiredSwivel", &CameraWrapper::GetDesiredSwivel);
	cl_CameraWrapper.set<void(CameraWrapper::*)(float)>("UpdateSwivel", &CameraWrapper::UpdateSwivel);
	cl_CameraWrapper.set<float(CameraWrapper::*)()>("GetDefaultFOVOffset", &CameraWrapper::GetDefaultFOVOffset);
	cl_CameraWrapper.set<float(CameraWrapper::*)()>("GetDefaultViewHeightOffset", &CameraWrapper::GetDefaultViewHeightOffset);
	cl_CameraWrapper.set<void(CameraWrapper::*)()>("UpdateFOV", &CameraWrapper::UpdateFOV);
	cl_CameraWrapper.set<void(CameraWrapper::*)(CameraWrapper, ActorWrapper)>("EventCameraTargetChanged", &CameraWrapper::EventCameraTargetChanged);

	module.set("CameraWrapper", cl_CameraWrapper);
}
