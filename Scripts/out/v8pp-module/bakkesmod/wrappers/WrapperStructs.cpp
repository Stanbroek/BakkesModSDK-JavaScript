#define bitfield_property(cls, var) \
	[](cls* c) { return c->var; }, \
	[](cls* c, const unsigned long v) { c->var = v; } \

void bind_WrapperStructs([[maybe_unused]] v8::Isolate* isolate, v8pp::module& module)
{
	module.set_const("ToastType_Info", ToastType::ToastType_Info);
	module.set_const("ToastType_OK", ToastType::ToastType_OK);
	module.set_const("ToastType_Warning", ToastType::ToastType_Warning);
	module.set_const("ToastType_Error", ToastType::ToastType_Error);

	v8pp::class_<Vector> cl_Vector(isolate);
	cl_Vector.set("X", &Vector::X);
	cl_Vector.set("Y", &Vector::Y);
	cl_Vector.set("Z", &Vector::Z);
	cl_Vector.ctor<float, float, float>();
	//cl_Vector.ctor<float>();
	//cl_Vector.ctor<>();
	cl_Vector.set<float(Vector::*)() const>("magnitude", &Vector::magnitude);
	cl_Vector.set<void(Vector::*)()>("normalize", &Vector::normalize);
	cl_Vector.set<Vector(Vector::*)()>("getNormalized", &Vector::getNormalized);
	cl_Vector.set<Vector(Vector::*)() const>("clone", &Vector::clone);
	cl_Vector.set<float(*)(Vector const, Vector const)>("dot", &Vector::dot);
	cl_Vector.set<Vector(*)(Vector const, Vector const)>("cross", &Vector::cross);
	cl_Vector.set<Vector(*)(Vector const, Vector const, float const)>("lerp", &Vector::lerp);
	cl_Vector.set<Vector(*)(Vector const, Vector const, float const)>("slerp", &Vector::slerp);

	module.set("Vector", cl_Vector);

	v8pp::class_<Rotator> cl_Rotator(isolate);
	cl_Rotator.set("Pitch", &Rotator::Pitch);
	cl_Rotator.set("Yaw", &Rotator::Yaw);
	cl_Rotator.set("Roll", &Rotator::Roll);
	cl_Rotator.ctor<int, int, int>();
	//cl_Rotator.ctor<int>();
	//cl_Rotator.ctor<>();

	module.set("Rotator", cl_Rotator);
	module.set<int(*)(int)>("fixRotator", &fixRotator);
	module.set<int(*)(int)>("fixPitch", &fixPitch);
	module.set<Rotator(*)(Vector const)>("VectorToRotator", &VectorToRotator);
	module.set<Vector(*)(Rotator const)>("RotatorToVector", &RotatorToVector);

	v8pp::class_<Quat> cl_Quat(isolate);
	cl_Quat.set("X", &Quat::X);
	cl_Quat.set("Y", &Quat::Y);
	cl_Quat.set("Z", &Quat::Z);
	cl_Quat.set("W", &Quat::W);
	cl_Quat.ctor<float, float, float, float>();
	//cl_Quat.ctor<>();
	cl_Quat.set<Quat(Quat::*)() const>("conjugate", &Quat::conjugate);
	cl_Quat.set<Quat(Quat::*)()>("normalize", &Quat::normalize);

	module.set("Quat", cl_Quat);
	module.set<Quat(*)(Quat const, Quat const, float)>("QuatSlerp", &QuatSlerp);
	module.set<Vector(*)(Vector const, Quat const)>("RotateVectorWithQuat", &RotateVectorWithQuat);
	module.set<Quat(*)(Rotator const)>("RotatorToQuat", &RotatorToQuat);
	module.set<Rotator(*)(Quat const)>("QuatToRotator", &QuatToRotator);

	v8pp::class_<Vector2> cl_Vector2(isolate);
	cl_Vector2.set("X", &Vector2::X);
	cl_Vector2.set("Y", &Vector2::Y);
	cl_Vector2.set<Vector2(Vector2::*)(Vector2 const) const>("minus", &Vector2::minus);
	cl_Vector2.ctor<>();

	module.set("Vector2", cl_Vector2);

	v8pp::class_<Vector2F> cl_Vector2F(isolate);
	cl_Vector2F.set("X", &Vector2F::X);
	cl_Vector2F.set("Y", &Vector2F::Y);
	cl_Vector2F.set<Vector2F(Vector2F::*)(Vector2 const) const>("minus", &Vector2F::minus);
	cl_Vector2F.set<Vector2F(Vector2F::*)(Vector2F const) const>("minus", &Vector2F::minus);
	cl_Vector2F.ctor<>();

	module.set("Vector2F", cl_Vector2F);

	v8pp::class_<LinearColor> cl_LinearColor(isolate);
	cl_LinearColor.set("R", &LinearColor::R);
	cl_LinearColor.set("G", &LinearColor::G);
	cl_LinearColor.set("B", &LinearColor::B);
	cl_LinearColor.set("A", &LinearColor::A);
	cl_LinearColor.ctor<>();

	module.set("LinearColor", cl_LinearColor);

	v8pp::class_<PredictionInfo> cl_PredictionInfo(isolate);
	cl_PredictionInfo.set("Time", &PredictionInfo::Time);
	cl_PredictionInfo.set("ArchTopTime", &PredictionInfo::ArchTopTime);
	cl_PredictionInfo.set("Location", &PredictionInfo::Location);
	cl_PredictionInfo.set("Velocity", &PredictionInfo::Velocity);
	cl_PredictionInfo.set("ArchTop", &PredictionInfo::ArchTop);
	cl_PredictionInfo.set("ArchTopVelocity", &PredictionInfo::ArchTopVelocity);
	cl_PredictionInfo.set_bitfield("bHitWall", bitfield_property(PredictionInfo, bHitWall));
	cl_PredictionInfo.set_bitfield("bHitGround", bitfield_property(PredictionInfo, bHitGround));
	cl_PredictionInfo.ctor<>();

	module.set("PredictionInfo", cl_PredictionInfo);

	v8pp::class_<SteamID> cl_SteamID(isolate);
	cl_SteamID.set("ID", &SteamID::ID);
	cl_SteamID.ctor<>();

	module.set("SteamID", cl_SteamID);

	v8pp::class_<SkillRating> cl_SkillRating(isolate);
	cl_SkillRating.set("Mu", &SkillRating::Mu);
	cl_SkillRating.set("Sigma", &SkillRating::Sigma);
	cl_SkillRating.ctor<>();

	module.set("SkillRating", cl_SkillRating);

	v8pp::class_<SkillRank> cl_SkillRank(isolate);
	cl_SkillRank.set("Tier", &SkillRank::Tier);
	cl_SkillRank.set("Division", &SkillRank::Division);
	cl_SkillRank.set("MatchesPlayed", &SkillRank::MatchesPlayed);
	cl_SkillRank.ctor<>();

	module.set("SkillRank", cl_SkillRank);

	v8pp::class_<UnrealColor> cl_UnrealColor(isolate);
	cl_UnrealColor.set("B", &UnrealColor::B);
	cl_UnrealColor.set("G", &UnrealColor::G);
	cl_UnrealColor.set("R", &UnrealColor::R);
	cl_UnrealColor.set("A", &UnrealColor::A);
	cl_UnrealColor.ctor<>();

	module.set("UnrealColor", cl_UnrealColor);

	v8pp::class_<ControllerInput> cl_ControllerInput(isolate);
	cl_ControllerInput.set("Throttle", &ControllerInput::Throttle);
	cl_ControllerInput.set("Steer", &ControllerInput::Steer);
	cl_ControllerInput.set("Pitch", &ControllerInput::Pitch);
	cl_ControllerInput.set("Yaw", &ControllerInput::Yaw);
	cl_ControllerInput.set("Roll", &ControllerInput::Roll);
	cl_ControllerInput.set("DodgeForward", &ControllerInput::DodgeForward);
	cl_ControllerInput.set("DodgeStrafe", &ControllerInput::DodgeStrafe);
	cl_ControllerInput.set_bitfield("Handbrake", bitfield_property(ControllerInput, Handbrake));
	cl_ControllerInput.set_bitfield("Jump", bitfield_property(ControllerInput, Jump));
	cl_ControllerInput.set_bitfield("ActivateBoost", bitfield_property(ControllerInput, ActivateBoost));
	cl_ControllerInput.set_bitfield("HoldingBoost", bitfield_property(ControllerInput, HoldingBoost));
	cl_ControllerInput.set_bitfield("Jumped", bitfield_property(ControllerInput, Jumped));
	cl_ControllerInput.ctor<>();

	module.set("ControllerInput", cl_ControllerInput);

	v8pp::class_<RecordedSample> cl_RecordedSample(isolate);
	cl_RecordedSample.set("Low", &RecordedSample::Low);
	cl_RecordedSample.set("High", &RecordedSample::High);
	cl_RecordedSample.ctor<>();

	module.set("RecordedSample", cl_RecordedSample);

	v8pp::class_<POV> cl_POV(isolate);
	cl_POV.set("location", &POV::location);
	cl_POV.set("rotation", &POV::rotation);
	cl_POV.set("FOV", &POV::FOV);
	cl_POV.ctor<>();

	module.set("POV", cl_POV);

	v8pp::class_<ViewTarget> cl_ViewTarget(isolate);
	cl_ViewTarget.set("Target", &ViewTarget::Target);
	cl_ViewTarget.set("Controller", &ViewTarget::Controller);
	cl_ViewTarget.set("POV", &ViewTarget::POV);
	cl_ViewTarget.set("AspectRatio", &ViewTarget::AspectRatio);
	cl_ViewTarget.set("PRI", &ViewTarget::PRI);
	cl_ViewTarget.ctor<>();

	module.set("ViewTarget", cl_ViewTarget);

	v8pp::class_<CameraSave> cl_CameraSave(isolate);
	cl_CameraSave.set("InvertSwivelPitch", &CameraSave::InvertSwivelPitch);
	cl_CameraSave.set("CameraShake", &CameraSave::CameraShake);
	cl_CameraSave.ctor<>();

	module.set("CameraSave", cl_CameraSave);

	v8pp::class_<ProfileCameraSettings> cl_ProfileCameraSettings(isolate);
	cl_ProfileCameraSettings.set("FOV", &ProfileCameraSettings::FOV);
	cl_ProfileCameraSettings.set("Height", &ProfileCameraSettings::Height);
	cl_ProfileCameraSettings.set("Pitch", &ProfileCameraSettings::Pitch);
	cl_ProfileCameraSettings.set("Distance", &ProfileCameraSettings::Distance);
	cl_ProfileCameraSettings.set("Stiffness", &ProfileCameraSettings::Stiffness);
	cl_ProfileCameraSettings.set("SwivelSpeed", &ProfileCameraSettings::SwivelSpeed);
	cl_ProfileCameraSettings.set("TransitionSpeed", &ProfileCameraSettings::TransitionSpeed);
	cl_ProfileCameraSettings.ctor<>();

	module.set("ProfileCameraSettings", cl_ProfileCameraSettings);

	v8pp::class_<GamepadSettings> cl_GamepadSettings(isolate);
	cl_GamepadSettings.set("ControllerDeadzone", &GamepadSettings::ControllerDeadzone);
	cl_GamepadSettings.set("DodgeInputThreshold", &GamepadSettings::DodgeInputThreshold);
	cl_GamepadSettings.set("SteeringSensitivity", &GamepadSettings::SteeringSensitivity);
	cl_GamepadSettings.set("AirControlSensitivity", &GamepadSettings::AirControlSensitivity);
	cl_GamepadSettings.ctor<>();

	module.set("GamepadSettings", cl_GamepadSettings);

	v8pp::class_<RBState> cl_RBState(isolate);
	cl_RBState.set("Quaternion", &RBState::Quaternion);
	cl_RBState.set("Location", &RBState::Location);
	cl_RBState.set("LinearVelocity", &RBState::LinearVelocity);
	cl_RBState.set("AngularVelocity", &RBState::AngularVelocity);
	cl_RBState.set("Time", &RBState::Time);
	cl_RBState.set_bitfield("bSleeping", bitfield_property(RBState, bSleeping));
	cl_RBState.set_bitfield("bNewData", bitfield_property(RBState, bNewData));
	cl_RBState.ctor<>();

	module.set("RBState", cl_RBState);

	v8pp::class_<WorldContactData> cl_WorldContactData(isolate);
	cl_WorldContactData.set_bitfield("bHasContact", bitfield_property(WorldContactData, bHasContact));
	cl_WorldContactData.set("Location", &WorldContactData::Location);
	cl_WorldContactData.set("Velocity", &WorldContactData::Velocity);
	cl_WorldContactData.set("Normal", &WorldContactData::Normal);
	cl_WorldContactData.ctor<>();

	module.set("WorldContactData", cl_WorldContactData);

	v8pp::class_<StickyForceData> cl_StickyForceData(isolate);
	cl_StickyForceData.set("Ground", &StickyForceData::Ground);
	cl_StickyForceData.set("Wall", &StickyForceData::Wall);
	cl_StickyForceData.ctor<>();

	module.set("StickyForceData", cl_StickyForceData);

	v8pp::class_<WheelContactData> cl_WheelContactData(isolate);
	cl_WheelContactData.set_bitfield("bHasContact", bitfield_property(WheelContactData, bHasContact));
	cl_WheelContactData.set_bitfield("bHasContactWithWorldGeometry", bitfield_property(WheelContactData, bHasContactWithWorldGeometry));
	cl_WheelContactData.set("HasContactChangeTime", &WheelContactData::HasContactChangeTime);
	cl_WheelContactData.set("Actor", &WheelContactData::Actor);
	cl_WheelContactData.set("Component", &WheelContactData::Component);
	cl_WheelContactData.set("Location", &WheelContactData::Location);
	cl_WheelContactData.set("Normal", &WheelContactData::Normal);
	cl_WheelContactData.set("LatDirection", &WheelContactData::LatDirection);
	cl_WheelContactData.set("LongDirection", &WheelContactData::LongDirection);
	cl_WheelContactData.set("PhysMatProp", &WheelContactData::PhysMatProp);
	cl_WheelContactData.ctor<>();

	module.set("WheelContactData", cl_WheelContactData);

	v8pp::class_<ReplayScoreData> cl_ReplayScoreData(isolate);
	cl_ReplayScoreData.set("ScoredBy", &ReplayScoreData::ScoredBy);
	cl_ReplayScoreData.set("AssistedBy", &ReplayScoreData::AssistedBy);
	cl_ReplayScoreData.set("Speed", &ReplayScoreData::Speed);
	cl_ReplayScoreData.set("Time", &ReplayScoreData::Time);
	cl_ReplayScoreData.set("ScoreTeam", &ReplayScoreData::ScoreTeam);
	cl_ReplayScoreData.ctor<>();

	module.set("ReplayScoreData", cl_ReplayScoreData);

	v8pp::class_<VideoSettings> cl_VideoSettings(isolate);
	cl_VideoSettings.set("bVsync", &VideoSettings::bVsync);
	cl_VideoSettings.set("bShowWeatherFX", &VideoSettings::bShowWeatherFX);
	cl_VideoSettings.set("bShowLightShafts", &VideoSettings::bShowLightShafts);
	cl_VideoSettings.set("bTranslucentArenaShaders", &VideoSettings::bTranslucentArenaShaders);
	cl_VideoSettings.set("bShowLensFlares", &VideoSettings::bShowLensFlares);
	cl_VideoSettings.set("bEnableHDRSideBySideVisualizer", &VideoSettings::bEnableHDRSideBySideVisualizer);
	cl_VideoSettings.set("bUncappedFramerate", &VideoSettings::bUncappedFramerate);
	cl_VideoSettings.set("HDRBrightnessScale", &VideoSettings::HDRBrightnessScale);
	cl_VideoSettings.set("HDRPaperWhiteScale", &VideoSettings::HDRPaperWhiteScale);
	cl_VideoSettings.set("HDRGammaScale", &VideoSettings::HDRGammaScale);
	cl_VideoSettings.set("WindowMode", &VideoSettings::WindowMode);
	cl_VideoSettings.set("Resolution", &VideoSettings::Resolution);
	cl_VideoSettings.set("MaxFPS", &VideoSettings::MaxFPS);
	cl_VideoSettings.set("VideoOptions", &VideoSettings::VideoOptions);
	cl_VideoSettings.ctor<>();

	module.set("VideoSettings", cl_VideoSettings);

	v8pp::class_<GUIDWrapper> cl_GUIDWrapper(isolate);
	cl_GUIDWrapper.ctor<int32_t, int32_t, int32_t, int32_t>();
	//cl_GUIDWrapper.ctor<FGuid const &>();
	cl_GUIDWrapper.set("A", &GUIDWrapper::A);
	cl_GUIDWrapper.set("B", &GUIDWrapper::B);
	cl_GUIDWrapper.set("C", &GUIDWrapper::C);
	cl_GUIDWrapper.set("D", &GUIDWrapper::D);
	cl_GUIDWrapper.set<std::string(GUIDWrapper::*)(GUIDWrapper::EGuidFormats) const>("ToString", &GUIDWrapper::ToString);

	module.set("GUIDWrapper", cl_GUIDWrapper);
	cl_GUIDWrapper.set_const("Digits", GUIDWrapper::EGuidFormats::Digits);
	cl_GUIDWrapper.set_const("DigitsWithHyphens", GUIDWrapper::EGuidFormats::DigitsWithHyphens);
	cl_GUIDWrapper.set_const("DigitsWithHyphensInBraces", GUIDWrapper::EGuidFormats::DigitsWithHyphensInBraces);
	cl_GUIDWrapper.set_const("DigitsWithHyphensInParentheses", GUIDWrapper::EGuidFormats::DigitsWithHyphensInParentheses);
	cl_GUIDWrapper.set_const("HexValuesInBraces", GUIDWrapper::EGuidFormats::HexValuesInBraces);
	cl_GUIDWrapper.set_const("UniqueObjectGuid", GUIDWrapper::EGuidFormats::UniqueObjectGuid);
	module.set_const("TRADEHOLD_P2P", TRADEHOLD::TRADEHOLD_P2P);
	module.set_const("TRADEHOLD_ALL", TRADEHOLD::TRADEHOLD_ALL);
	module.set_const("TRADEHOLD_NONE", TRADEHOLD::TRADEHOLD_NONE);
	module.set_const("Common", PRODUCTQUALITY::Common);
	module.set_const("Uncommon", PRODUCTQUALITY::Uncommon);
	module.set_const("Rare", PRODUCTQUALITY::Rare);
	module.set_const("VeryRare", PRODUCTQUALITY::VeryRare);
	module.set_const("Import", PRODUCTQUALITY::Import);
	module.set_const("Exotic", PRODUCTQUALITY::Exotic);
	module.set_const("BlackMarket", PRODUCTQUALITY::BlackMarket);
	module.set_const("Premium", PRODUCTQUALITY::Premium);
	module.set_const("Limited", PRODUCTQUALITY::Limited);
	module.set_const("MAX", PRODUCTQUALITY::MAX);
	module.set_const("Default", UNLOCKMETHOD::Default);
	module.set_const("Drop", UNLOCKMETHOD::Drop);
	module.set_const("Special", UNLOCKMETHOD::Special);
	module.set_const("Reward", UNLOCKMETHOD::Reward);
	module.set_const("DLC", UNLOCKMETHOD::DLC);
	module.set_const("Never", UNLOCKMETHOD::Never);
	module.set_const("MAX_", UNLOCKMETHOD::MAX_);
	module.set_const("CAR_BACKFIRE", CARBODY::CAR_BACKFIRE);
	module.set_const("CAR_BREAKOUT", CARBODY::CAR_BREAKOUT);
	module.set_const("CAR_BREAKOUTTYPES", CARBODY::CAR_BREAKOUTTYPES);
	module.set_const("CAR_OCTANE", CARBODY::CAR_OCTANE);
	module.set_const("CAR_OCTANEZSR", CARBODY::CAR_OCTANEZSR);
	module.set_const("CAR_PALADIN", CARBODY::CAR_PALADIN);
	module.set_const("CAR_ROADHOG", CARBODY::CAR_ROADHOG);
	module.set_const("CAR_ROADHOGXL", CARBODY::CAR_ROADHOGXL);
	module.set_const("CAR_GIZMO", CARBODY::CAR_GIZMO);
	module.set_const("CAR_SWEETTOOTH", CARBODY::CAR_SWEETTOOTH);
	module.set_const("CAR_XDEVIL", CARBODY::CAR_XDEVIL);
	module.set_const("CAR_XDEVILMK2", CARBODY::CAR_XDEVILMK2);
	module.set_const("CAR_HOTSHOT", CARBODY::CAR_HOTSHOT);
	module.set_const("CAR_MERC", CARBODY::CAR_MERC);
	module.set_const("CAR_VENOM", CARBODY::CAR_VENOM);
	module.set_const("CAR_TAKUMI", CARBODY::CAR_TAKUMI);
	module.set_const("CAR_TAKUMIRXT", CARBODY::CAR_TAKUMIRXT);
	module.set_const("CAR_DOMINUS", CARBODY::CAR_DOMINUS);
	module.set_const("CAR_DOMINUSGT", CARBODY::CAR_DOMINUSGT);
	module.set_const("CAR_SCARAB", CARBODY::CAR_SCARAB);
	module.set_const("CAR_ZIPPY", CARBODY::CAR_ZIPPY);
	module.set_const("CAR_DELOREAN", CARBODY::CAR_DELOREAN);
	module.set_const("CAR_RIPPER", CARBODY::CAR_RIPPER);
	module.set_const("CAR_GROG", CARBODY::CAR_GROG);
	module.set_const("CAR_ARMADILLO", CARBODY::CAR_ARMADILLO);
	module.set_const("CAR_WARTHOG", CARBODY::CAR_WARTHOG);
	module.set_const("CAR_BATMOBILE", CARBODY::CAR_BATMOBILE);
	module.set_const("CAR_MASAMUNE", CARBODY::CAR_MASAMUNE);
	module.set_const("CAR_MARAUDER", CARBODY::CAR_MARAUDER);
	module.set_const("CAR_AFTERSHOCK", CARBODY::CAR_AFTERSHOCK);
	module.set_const("CAR_ESPER", CARBODY::CAR_ESPER);
	module.set_const("CAR_PROTEUS", CARBODY::CAR_PROTEUS);
	module.set_const("CAR_TRITON", CARBODY::CAR_TRITON);
	module.set_const("CAR_VULCAN", CARBODY::CAR_VULCAN);
	module.set_const("CAR_TWINMILL", CARBODY::CAR_TWINMILL);
	module.set_const("CAR_BONESHAKER", CARBODY::CAR_BONESHAKER);
	module.set_const("CAR_ENDO", CARBODY::CAR_ENDO);
	module.set_const("CAR_ICECHARGER", CARBODY::CAR_ICECHARGER);
	module.set_const("CAR_MANTIS", CARBODY::CAR_MANTIS);
	module.set_const("CAR_JOGER619RS", CARBODY::CAR_JOGER619RS);
	module.set_const("CAR_CENTIO", CARBODY::CAR_CENTIO);
	module.set_const("CAR_ANIMUSGP", CARBODY::CAR_ANIMUSGP);
	module.set_const("OnlinePlatform_Unknown", OnlinePlatform::OnlinePlatform_Unknown);
	module.set_const("OnlinePlatform_Steam", OnlinePlatform::OnlinePlatform_Steam);
	module.set_const("OnlinePlatform_PS4", OnlinePlatform::OnlinePlatform_PS4);
	module.set_const("OnlinePlatform_PS3", OnlinePlatform::OnlinePlatform_PS3);
	module.set_const("OnlinePlatform_Dingo", OnlinePlatform::OnlinePlatform_Dingo);
	module.set_const("OnlinePlatform_QQ", OnlinePlatform::OnlinePlatform_QQ);
	module.set_const("OnlinePlatform_OldNNX", OnlinePlatform::OnlinePlatform_OldNNX);
	module.set_const("OnlinePlatform_NNX", OnlinePlatform::OnlinePlatform_NNX);
	module.set_const("OnlinePlatform_PsyNet", OnlinePlatform::OnlinePlatform_PsyNet);
	module.set_const("OnlinePlatform_Deleted", OnlinePlatform::OnlinePlatform_Deleted);
	module.set_const("OnlinePlatform_WeGame", OnlinePlatform::OnlinePlatform_WeGame);
	module.set_const("OnlinePlatform_Epic", OnlinePlatform::OnlinePlatform_Epic);
	module.set_const("OnlinePlatform_MAX", OnlinePlatform::OnlinePlatform_MAX);
}
