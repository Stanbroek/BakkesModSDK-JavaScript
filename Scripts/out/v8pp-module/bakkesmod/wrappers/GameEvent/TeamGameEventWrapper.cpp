void bind_TeamGameEventWrapper([[maybe_unused]] v8::Isolate* isolate, v8pp::module& module)
{

	v8pp::class_<TeamGameEventWrapper> cl_TeamGameEventWrapper(isolate);
	cl_TeamGameEventWrapper.inherit<GameEventWrapper>();
	cl_TeamGameEventWrapper.ctor<uintptr_t>();
	cl_TeamGameEventWrapper.set<ArrayWrapper<TeamWrapper>(TeamGameEventWrapper::*)()>("GetTeamArchetypes", &TeamGameEventWrapper::GetTeamArchetypes);
	cl_TeamGameEventWrapper.set<ArrayWrapper<TeamWrapper>(TeamGameEventWrapper::*)()>("GetTeams", &TeamGameEventWrapper::GetTeams);
	cl_TeamGameEventWrapper.set<int(TeamGameEventWrapper::*)()>("GetMaxTeamSize", &TeamGameEventWrapper::GetMaxTeamSize);
	cl_TeamGameEventWrapper.set<void(TeamGameEventWrapper::*)(int)>("SetMaxTeamSize", &TeamGameEventWrapper::SetMaxTeamSize);
	cl_TeamGameEventWrapper.set<int(TeamGameEventWrapper::*)()>("GetNumBots", &TeamGameEventWrapper::GetNumBots);
	cl_TeamGameEventWrapper.set<void(TeamGameEventWrapper::*)(int)>("SetNumBots", &TeamGameEventWrapper::SetNumBots);
	cl_TeamGameEventWrapper.set<long unsigned int(TeamGameEventWrapper::*)()>("GetbMuteOppositeTeams", &TeamGameEventWrapper::GetbMuteOppositeTeams);
	cl_TeamGameEventWrapper.set<void(TeamGameEventWrapper::*)(long unsigned int)>("SetbMuteOppositeTeams", &TeamGameEventWrapper::SetbMuteOppositeTeams);
	cl_TeamGameEventWrapper.set<long unsigned int(TeamGameEventWrapper::*)()>("GetbDisableMutingOtherTeam", &TeamGameEventWrapper::GetbDisableMutingOtherTeam);
	cl_TeamGameEventWrapper.set<void(TeamGameEventWrapper::*)(long unsigned int)>("SetbDisableMutingOtherTeam", &TeamGameEventWrapper::SetbDisableMutingOtherTeam);
	cl_TeamGameEventWrapper.set<long unsigned int(TeamGameEventWrapper::*)()>("GetbForfeit", &TeamGameEventWrapper::GetbForfeit);
	cl_TeamGameEventWrapper.set<void(TeamGameEventWrapper::*)(long unsigned int)>("SetbForfeit", &TeamGameEventWrapper::SetbForfeit);
	cl_TeamGameEventWrapper.set<long unsigned int(TeamGameEventWrapper::*)()>("GetbUnfairTeams", &TeamGameEventWrapper::GetbUnfairTeams);
	cl_TeamGameEventWrapper.set<void(TeamGameEventWrapper::*)(long unsigned int)>("SetbUnfairTeams", &TeamGameEventWrapper::SetbUnfairTeams);
	cl_TeamGameEventWrapper.set<long unsigned int(TeamGameEventWrapper::*)()>("GetbAlwaysAutoSelectTeam", &TeamGameEventWrapper::GetbAlwaysAutoSelectTeam);
	cl_TeamGameEventWrapper.set<void(TeamGameEventWrapper::*)(long unsigned int)>("SetbAlwaysAutoSelectTeam", &TeamGameEventWrapper::SetbAlwaysAutoSelectTeam);
	cl_TeamGameEventWrapper.set<void(TeamGameEventWrapper::*)()>("StartRematchVote", &TeamGameEventWrapper::StartRematchVote);
	cl_TeamGameEventWrapper.set<void(TeamGameEventWrapper::*)()>("CheckRematchVote", &TeamGameEventWrapper::CheckRematchVote);
	cl_TeamGameEventWrapper.set<bool(TeamGameEventWrapper::*)(TeamWrapper)>("__GameEvent_Team_TA__AllTeamsHaveHumans", &TeamGameEventWrapper::__GameEvent_Team_TA__AllTeamsHaveHumans);
	cl_TeamGameEventWrapper.set<void(TeamGameEventWrapper::*)()>("UpdatePlayerShortcuts", &TeamGameEventWrapper::UpdatePlayerShortcuts);
	cl_TeamGameEventWrapper.set<void(TeamGameEventWrapper::*)()>("ClearTemporarySpawnSpots", &TeamGameEventWrapper::ClearTemporarySpawnSpots);
	cl_TeamGameEventWrapper.set<bool(TeamGameEventWrapper::*)(int, PlayerControllerWrapper)>("ChooseTeam", &TeamGameEventWrapper::ChooseTeam);
	// [deprecated] cl_TeamGameEventWrapper.set<bool(TeamGameEventWrapper::*)()>("CanChangeTeam", &TeamGameEventWrapper::CanChangeTeam);
	cl_TeamGameEventWrapper.set<void(TeamGameEventWrapper::*)()>("OnPenaltyChanged", &TeamGameEventWrapper::OnPenaltyChanged);
	cl_TeamGameEventWrapper.set<void(TeamGameEventWrapper::*)(TeamWrapper)>("OnTeamForfeited", &TeamGameEventWrapper::OnTeamForfeited);
	cl_TeamGameEventWrapper.set<void(TeamGameEventWrapper::*)(TeamWrapper)>("HandleTeamForfeit", &TeamGameEventWrapper::HandleTeamForfeit);
	cl_TeamGameEventWrapper.set<void(TeamGameEventWrapper::*)(long unsigned int)>("MuteOppositeTeams2", &TeamGameEventWrapper::MuteOppositeTeams2);
	cl_TeamGameEventWrapper.set<void(TeamGameEventWrapper::*)()>("UpdateBotCount", &TeamGameEventWrapper::UpdateBotCount);
	cl_TeamGameEventWrapper.set<bool(TeamGameEventWrapper::*)(PriWrapper)>("FindBotReplacement", &TeamGameEventWrapper::FindBotReplacement);
	cl_TeamGameEventWrapper.set<void(TeamGameEventWrapper::*)()>("EndGame", &TeamGameEventWrapper::EndGame);
	cl_TeamGameEventWrapper.set<void(TeamGameEventWrapper::*)()>("ForceNoContest", &TeamGameEventWrapper::ForceNoContest);
	cl_TeamGameEventWrapper.set<void(TeamGameEventWrapper::*)(TeamWrapper, CarWrapper)>("AddTemporarySpawnSpot", &TeamGameEventWrapper::AddTemporarySpawnSpot);
	cl_TeamGameEventWrapper.set<void(TeamGameEventWrapper::*)(PriWrapper)>("HandleSelectedLoadout", &TeamGameEventWrapper::HandleSelectedLoadout);
	cl_TeamGameEventWrapper.set<void(TeamGameEventWrapper::*)()>("DestroyTeams", &TeamGameEventWrapper::DestroyTeams);
	cl_TeamGameEventWrapper.set<void(TeamGameEventWrapper::*)()>("OnAllTeamsCreated", &TeamGameEventWrapper::OnAllTeamsCreated);
	cl_TeamGameEventWrapper.set<void(TeamGameEventWrapper::*)()>("AssignCustomTeamSettings", &TeamGameEventWrapper::AssignCustomTeamSettings);
	cl_TeamGameEventWrapper.set<void(TeamGameEventWrapper::*)()>("OnMatchSettingsChanged", &TeamGameEventWrapper::OnMatchSettingsChanged);
	cl_TeamGameEventWrapper.set<bool(TeamGameEventWrapper::*)()>("AllTeamsHaveHumans2", &TeamGameEventWrapper::AllTeamsHaveHumans2);
	cl_TeamGameEventWrapper.set<bool(TeamGameEventWrapper::*)()>("AllTeamsCreated2", &TeamGameEventWrapper::AllTeamsCreated2);
	cl_TeamGameEventWrapper.set<void(TeamGameEventWrapper::*)(int, TeamWrapper)>("SetTeam", &TeamGameEventWrapper::SetTeam);
	cl_TeamGameEventWrapper.set<void(TeamGameEventWrapper::*)()>("CreateTeams", &TeamGameEventWrapper::CreateTeams);
	cl_TeamGameEventWrapper.set<void(TeamGameEventWrapper::*)()>("PreloadBots", &TeamGameEventWrapper::PreloadBots);
	cl_TeamGameEventWrapper.set<void(TeamGameEventWrapper::*)()>("OnInit", &TeamGameEventWrapper::OnInit);
	cl_TeamGameEventWrapper.set<void(TeamGameEventWrapper::*)(int)>("SetMaxTeamSize2", &TeamGameEventWrapper::SetMaxTeamSize2);
	cl_TeamGameEventWrapper.set<void(TeamGameEventWrapper::*)()>("UpdateMaxTeamSize", &TeamGameEventWrapper::UpdateMaxTeamSize);
	cl_TeamGameEventWrapper.set<void(TeamGameEventWrapper::*)(long unsigned int)>("SetUnfairTeams", &TeamGameEventWrapper::SetUnfairTeams);
	cl_TeamGameEventWrapper.set<void(TeamGameEventWrapper::*)()>("InitBotSkill", &TeamGameEventWrapper::InitBotSkill);
	cl_TeamGameEventWrapper.set<void(TeamGameEventWrapper::*)(std::string)>("eventInitGame", &TeamGameEventWrapper::eventInitGame);

	module.set("TeamGameEventWrapper", cl_TeamGameEventWrapper);
}
