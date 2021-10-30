void bind_TeamInfoWrapper([[maybe_unused]] v8::Isolate* isolate, v8pp::module& module)
{

	v8pp::class_<TeamInfoWrapper> cl_TeamInfoWrapper(isolate);
	cl_TeamInfoWrapper.inherit<ActorWrapper>();
	cl_TeamInfoWrapper.ctor<uintptr_t>();
	cl_TeamInfoWrapper.set<UnrealStringWrapper(TeamInfoWrapper::*)()>("GetTeamName", &TeamInfoWrapper::GetTeamName);
	cl_TeamInfoWrapper.set<int(TeamInfoWrapper::*)()>("GetSize", &TeamInfoWrapper::GetSize);
	cl_TeamInfoWrapper.set<void(TeamInfoWrapper::*)(int)>("SetSize", &TeamInfoWrapper::SetSize);
	cl_TeamInfoWrapper.set<int(TeamInfoWrapper::*)()>("GetScore", &TeamInfoWrapper::GetScore);
	cl_TeamInfoWrapper.set<void(TeamInfoWrapper::*)(int)>("SetScore", &TeamInfoWrapper::SetScore);
	cl_TeamInfoWrapper.set<int(TeamInfoWrapper::*)()>("GetTeamIndex", &TeamInfoWrapper::GetTeamIndex);
	cl_TeamInfoWrapper.set<void(TeamInfoWrapper::*)(int)>("SetTeamIndex", &TeamInfoWrapper::SetTeamIndex);
	cl_TeamInfoWrapper.set<UnrealColor(TeamInfoWrapper::*)()>("GetTeamColor", &TeamInfoWrapper::GetTeamColor);
	cl_TeamInfoWrapper.set<void(TeamInfoWrapper::*)(UnrealColor)>("SetTeamColor", &TeamInfoWrapper::SetTeamColor);
	cl_TeamInfoWrapper.set<unsigned char(TeamInfoWrapper::*)()>("GetTeamNum", &TeamInfoWrapper::GetTeamNum);
	cl_TeamInfoWrapper.set<void(TeamInfoWrapper::*)()>("eventDestroyed", &TeamInfoWrapper::eventDestroyed);

	module.set("TeamInfoWrapper", cl_TeamInfoWrapper);
}
