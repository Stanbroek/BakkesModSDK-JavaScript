void bind_GoalWrapper([[maybe_unused]] v8::Isolate* isolate, v8pp::module& module)
{

	v8pp::class_<GoalWrapper> cl_GoalWrapper(isolate);
	cl_GoalWrapper.inherit<ObjectWrapper>();
	cl_GoalWrapper.ctor<uintptr_t>();
	cl_GoalWrapper.set<bool(GoalWrapper::*)() const>("IsNull", &GoalWrapper::IsNull);
	cl_GoalWrapper.set<ActorWrapper(GoalWrapper::*)()>("GetGoalOrientation", &GoalWrapper::GetGoalOrientation);
	cl_GoalWrapper.set<void(GoalWrapper::*)(ActorWrapper)>("SetGoalOrientation", &GoalWrapper::SetGoalOrientation);
	cl_GoalWrapper.set<ArrayWrapper<ActorWrapper>(GoalWrapper::*)()>("GetOverrideGoalIndicatorOrientations", &GoalWrapper::GetOverrideGoalIndicatorOrientations);
	cl_GoalWrapper.set<unsigned char(GoalWrapper::*)()>("GetTeamNum", &GoalWrapper::GetTeamNum);
	cl_GoalWrapper.set<void(GoalWrapper::*)(unsigned char)>("SetTeamNum", &GoalWrapper::SetTeamNum);
	cl_GoalWrapper.set<FXActorWrapper(GoalWrapper::*)()>("GetScoreFX", &GoalWrapper::GetScoreFX);
	cl_GoalWrapper.set<void(GoalWrapper::*)(FXActorWrapper)>("SetScoreFX", &GoalWrapper::SetScoreFX);
	cl_GoalWrapper.set<UnrealStringWrapper(GoalWrapper::*)()>("GetGoalIndicatorArchetype", &GoalWrapper::GetGoalIndicatorArchetype);
	cl_GoalWrapper.set<long unsigned int(GoalWrapper::*)()>("GetbNoGoalIndicator", &GoalWrapper::GetbNoGoalIndicator);
	cl_GoalWrapper.set<void(GoalWrapper::*)(long unsigned int)>("SetbNoGoalIndicator", &GoalWrapper::SetbNoGoalIndicator);
	cl_GoalWrapper.set<long unsigned int(GoalWrapper::*)()>("GetbOnlyGoalsFromDirection", &GoalWrapper::GetbOnlyGoalsFromDirection);
	cl_GoalWrapper.set<void(GoalWrapper::*)(long unsigned int)>("SetbOnlyGoalsFromDirection", &GoalWrapper::SetbOnlyGoalsFromDirection);
	cl_GoalWrapper.set<long unsigned int(GoalWrapper::*)()>("GetbShowFocusExtent", &GoalWrapper::GetbShowFocusExtent);
	cl_GoalWrapper.set<void(GoalWrapper::*)(long unsigned int)>("SetbShowFocusExtent", &GoalWrapper::SetbShowFocusExtent);
	cl_GoalWrapper.set<ActorWrapper(GoalWrapper::*)()>("GetGoalDirection", &GoalWrapper::GetGoalDirection);
	cl_GoalWrapper.set<void(GoalWrapper::*)(ActorWrapper)>("SetGoalDirection", &GoalWrapper::SetGoalDirection);
	cl_GoalWrapper.set<int(GoalWrapper::*)()>("GetPointsToAward", &GoalWrapper::GetPointsToAward);
	cl_GoalWrapper.set<void(GoalWrapper::*)(int)>("SetPointsToAward", &GoalWrapper::SetPointsToAward);
	cl_GoalWrapper.set<Vector(GoalWrapper::*)()>("GetAutoCamFocusExtent", &GoalWrapper::GetAutoCamFocusExtent);
	cl_GoalWrapper.set<void(GoalWrapper::*)(Vector)>("SetAutoCamFocusExtent", &GoalWrapper::SetAutoCamFocusExtent);
	cl_GoalWrapper.set<Vector(GoalWrapper::*)()>("GetGoalFocusLocationOffset", &GoalWrapper::GetGoalFocusLocationOffset);
	cl_GoalWrapper.set<void(GoalWrapper::*)(Vector)>("SetGoalFocusLocationOffset", &GoalWrapper::SetGoalFocusLocationOffset);
	cl_GoalWrapper.set<float(GoalWrapper::*)()>("GetMaxGoalScorerAttachRadius", &GoalWrapper::GetMaxGoalScorerAttachRadius);
	cl_GoalWrapper.set<void(GoalWrapper::*)(float)>("SetMaxGoalScorerAttachRadius", &GoalWrapper::SetMaxGoalScorerAttachRadius);
	cl_GoalWrapper.set<Vector(GoalWrapper::*)()>("GetGoalScoredDotDirection", &GoalWrapper::GetGoalScoredDotDirection);
	cl_GoalWrapper.set<void(GoalWrapper::*)(Vector)>("SetGoalScoredDotDirection", &GoalWrapper::SetGoalScoredDotDirection);
	cl_GoalWrapper.set<float(GoalWrapper::*)()>("GetMinAttachGoalToScorerDot", &GoalWrapper::GetMinAttachGoalToScorerDot);
	cl_GoalWrapper.set<void(GoalWrapper::*)(float)>("SetMinAttachGoalToScorerDot", &GoalWrapper::SetMinAttachGoalToScorerDot);
	cl_GoalWrapper.set<Vector(GoalWrapper::*)()>("GetLocation", &GoalWrapper::GetLocation);
	cl_GoalWrapper.set<void(GoalWrapper::*)(Vector)>("SetLocation", &GoalWrapper::SetLocation);
	cl_GoalWrapper.set<Vector(GoalWrapper::*)()>("GetDirection", &GoalWrapper::GetDirection);
	cl_GoalWrapper.set<void(GoalWrapper::*)(Vector)>("SetDirection", &GoalWrapper::SetDirection);
	cl_GoalWrapper.set<Vector(GoalWrapper::*)()>("GetRight", &GoalWrapper::GetRight);
	cl_GoalWrapper.set<void(GoalWrapper::*)(Vector)>("SetRight", &GoalWrapper::SetRight);
	cl_GoalWrapper.set<Vector(GoalWrapper::*)()>("GetUp", &GoalWrapper::GetUp);
	cl_GoalWrapper.set<void(GoalWrapper::*)(Vector)>("SetUp", &GoalWrapper::SetUp);
	cl_GoalWrapper.set<Rotator(GoalWrapper::*)()>("GetRotation", &GoalWrapper::GetRotation);
	cl_GoalWrapper.set<void(GoalWrapper::*)(Rotator)>("SetRotation", &GoalWrapper::SetRotation);
	cl_GoalWrapper.set<Vector(GoalWrapper::*)()>("GetLocalExtent", &GoalWrapper::GetLocalExtent);
	cl_GoalWrapper.set<void(GoalWrapper::*)(Vector)>("SetLocalExtent", &GoalWrapper::SetLocalExtent);
	cl_GoalWrapper.set<Vector(GoalWrapper::*)()>("GetWorldCenter", &GoalWrapper::GetWorldCenter);
	cl_GoalWrapper.set<void(GoalWrapper::*)(Vector)>("SetWorldCenter", &GoalWrapper::SetWorldCenter);
	cl_GoalWrapper.set<Vector(GoalWrapper::*)()>("GetWorldExtent", &GoalWrapper::GetWorldExtent);
	cl_GoalWrapper.set<void(GoalWrapper::*)(Vector)>("SetWorldExtent", &GoalWrapper::SetWorldExtent);
	cl_GoalWrapper.set<Vector(GoalWrapper::*)()>("GetWorldFrontCenter", &GoalWrapper::GetWorldFrontCenter);
	cl_GoalWrapper.set<void(GoalWrapper::*)(Vector)>("SetWorldFrontCenter", &GoalWrapper::SetWorldFrontCenter);
	cl_GoalWrapper.set<Vector(GoalWrapper::*)()>("GetGoalFocusExtentCenter", &GoalWrapper::GetGoalFocusExtentCenter);
	cl_GoalWrapper.set<void(GoalWrapper::*)()>("Init", &GoalWrapper::Init);
	cl_GoalWrapper.set<void(GoalWrapper::*)()>("eventBeginPlay", &GoalWrapper::eventBeginPlay);

	module.set("GoalWrapper", cl_GoalWrapper);
}
