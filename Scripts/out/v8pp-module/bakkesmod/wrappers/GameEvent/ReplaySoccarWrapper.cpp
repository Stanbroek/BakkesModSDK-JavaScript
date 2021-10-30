void bind_ReplaySoccarWrapper([[maybe_unused]] v8::Isolate* isolate, v8pp::module& module)
{

	v8pp::class_<ReplaySoccarWrapper> cl_ReplaySoccarWrapper(isolate);
	cl_ReplaySoccarWrapper.inherit<ReplayWrapper>();
	cl_ReplaySoccarWrapper.ctor<uintptr_t>();
	cl_ReplaySoccarWrapper.set<int(ReplaySoccarWrapper::*)()>("GetTeamSize", &ReplaySoccarWrapper::GetTeamSize);
	cl_ReplaySoccarWrapper.set<void(ReplaySoccarWrapper::*)(int)>("SetTeamSize", &ReplaySoccarWrapper::SetTeamSize);
	cl_ReplaySoccarWrapper.set<int(ReplaySoccarWrapper::*)()>("GetUnfairTeamSize", &ReplaySoccarWrapper::GetUnfairTeamSize);
	cl_ReplaySoccarWrapper.set<void(ReplaySoccarWrapper::*)(int)>("SetUnfairTeamSize", &ReplaySoccarWrapper::SetUnfairTeamSize);
	cl_ReplaySoccarWrapper.set<long unsigned int(ReplaySoccarWrapper::*)()>("GetbUnfairBots", &ReplaySoccarWrapper::GetbUnfairBots);
	cl_ReplaySoccarWrapper.set<void(ReplaySoccarWrapper::*)(long unsigned int)>("SetbUnfairBots", &ReplaySoccarWrapper::SetbUnfairBots);
	cl_ReplaySoccarWrapper.set<int(ReplaySoccarWrapper::*)()>("GetPrimaryPlayerTeam", &ReplaySoccarWrapper::GetPrimaryPlayerTeam);
	cl_ReplaySoccarWrapper.set<void(ReplaySoccarWrapper::*)(int)>("SetPrimaryPlayerTeam", &ReplaySoccarWrapper::SetPrimaryPlayerTeam);
	cl_ReplaySoccarWrapper.set<int(ReplaySoccarWrapper::*)()>("GetTeam0Score", &ReplaySoccarWrapper::GetTeam0Score);
	cl_ReplaySoccarWrapper.set<void(ReplaySoccarWrapper::*)(int)>("SetTeam0Score", &ReplaySoccarWrapper::SetTeam0Score);
	cl_ReplaySoccarWrapper.set<int(ReplaySoccarWrapper::*)()>("GetTeam1Score", &ReplaySoccarWrapper::GetTeam1Score);
	cl_ReplaySoccarWrapper.set<void(ReplaySoccarWrapper::*)(int)>("SetTeam1Score", &ReplaySoccarWrapper::SetTeam1Score);
	cl_ReplaySoccarWrapper.set<void(ReplaySoccarWrapper::*)()>("eventPreExport", &ReplaySoccarWrapper::eventPreExport);
	cl_ReplaySoccarWrapper.set<void(ReplaySoccarWrapper::*)(int)>("RemoveTimelineKeyframe", &ReplaySoccarWrapper::RemoveTimelineKeyframe);
	cl_ReplaySoccarWrapper.set<void(ReplaySoccarWrapper::*)()>("RecordUserEvent", &ReplaySoccarWrapper::RecordUserEvent);
	cl_ReplaySoccarWrapper.set<void(ReplaySoccarWrapper::*)(PriWrapper)>("AddPlayer", &ReplaySoccarWrapper::AddPlayer);

	module.set("ReplaySoccarWrapper", cl_ReplaySoccarWrapper);
}
