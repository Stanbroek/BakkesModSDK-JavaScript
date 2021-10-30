void bind_GameSettingPlaylistWrapper([[maybe_unused]] v8::Isolate* isolate, v8pp::module& module)
{

	v8pp::class_<GameSettingPlaylistWrapper> cl_GameSettingPlaylistWrapper(isolate);
	cl_GameSettingPlaylistWrapper.inherit<ObjectWrapper>();
	cl_GameSettingPlaylistWrapper.ctor<uintptr_t>();
	cl_GameSettingPlaylistWrapper.set<bool(GameSettingPlaylistWrapper::*)() const>("IsNull", &GameSettingPlaylistWrapper::IsNull);
	cl_GameSettingPlaylistWrapper.set<UnrealStringWrapper(GameSettingPlaylistWrapper::*)()>("GetTitle", &GameSettingPlaylistWrapper::GetTitle);
	cl_GameSettingPlaylistWrapper.set<UnrealStringWrapper(GameSettingPlaylistWrapper::*)()>("GetDescription", &GameSettingPlaylistWrapper::GetDescription);
	cl_GameSettingPlaylistWrapper.set<int(GameSettingPlaylistWrapper::*)()>("GetPlayerCount", &GameSettingPlaylistWrapper::GetPlayerCount);
	cl_GameSettingPlaylistWrapper.set<void(GameSettingPlaylistWrapper::*)(int)>("SetPlayerCount", &GameSettingPlaylistWrapper::SetPlayerCount);
	cl_GameSettingPlaylistWrapper.set<long unsigned int(GameSettingPlaylistWrapper::*)()>("GetbStandard", &GameSettingPlaylistWrapper::GetbStandard);
	cl_GameSettingPlaylistWrapper.set<void(GameSettingPlaylistWrapper::*)(long unsigned int)>("SetbStandard", &GameSettingPlaylistWrapper::SetbStandard);
	cl_GameSettingPlaylistWrapper.set<long unsigned int(GameSettingPlaylistWrapper::*)()>("GetbRanked", &GameSettingPlaylistWrapper::GetbRanked);
	cl_GameSettingPlaylistWrapper.set<void(GameSettingPlaylistWrapper::*)(long unsigned int)>("SetbRanked", &GameSettingPlaylistWrapper::SetbRanked);
	cl_GameSettingPlaylistWrapper.set<long unsigned int(GameSettingPlaylistWrapper::*)()>("GetbSolo", &GameSettingPlaylistWrapper::GetbSolo);
	cl_GameSettingPlaylistWrapper.set<void(GameSettingPlaylistWrapper::*)(long unsigned int)>("SetbSolo", &GameSettingPlaylistWrapper::SetbSolo);
	cl_GameSettingPlaylistWrapper.set<long unsigned int(GameSettingPlaylistWrapper::*)()>("GetbNew", &GameSettingPlaylistWrapper::GetbNew);
	cl_GameSettingPlaylistWrapper.set<void(GameSettingPlaylistWrapper::*)(long unsigned int)>("SetbNew", &GameSettingPlaylistWrapper::SetbNew);
	cl_GameSettingPlaylistWrapper.set<long unsigned int(GameSettingPlaylistWrapper::*)()>("GetbApplyQuitPenalty", &GameSettingPlaylistWrapper::GetbApplyQuitPenalty);
	cl_GameSettingPlaylistWrapper.set<void(GameSettingPlaylistWrapper::*)(long unsigned int)>("SetbApplyQuitPenalty", &GameSettingPlaylistWrapper::SetbApplyQuitPenalty);
	cl_GameSettingPlaylistWrapper.set<long unsigned int(GameSettingPlaylistWrapper::*)()>("GetbAllowForfeit", &GameSettingPlaylistWrapper::GetbAllowForfeit);
	cl_GameSettingPlaylistWrapper.set<void(GameSettingPlaylistWrapper::*)(long unsigned int)>("SetbAllowForfeit", &GameSettingPlaylistWrapper::SetbAllowForfeit);
	cl_GameSettingPlaylistWrapper.set<long unsigned int(GameSettingPlaylistWrapper::*)()>("GetbDisableRankedReconnect", &GameSettingPlaylistWrapper::GetbDisableRankedReconnect);
	cl_GameSettingPlaylistWrapper.set<void(GameSettingPlaylistWrapper::*)(long unsigned int)>("SetbDisableRankedReconnect", &GameSettingPlaylistWrapper::SetbDisableRankedReconnect);
	cl_GameSettingPlaylistWrapper.set<long unsigned int(GameSettingPlaylistWrapper::*)()>("GetbIgnoreAssignTeams", &GameSettingPlaylistWrapper::GetbIgnoreAssignTeams);
	cl_GameSettingPlaylistWrapper.set<void(GameSettingPlaylistWrapper::*)(long unsigned int)>("SetbIgnoreAssignTeams", &GameSettingPlaylistWrapper::SetbIgnoreAssignTeams);
	cl_GameSettingPlaylistWrapper.set<long unsigned int(GameSettingPlaylistWrapper::*)()>("GetbKickOnMigrate", &GameSettingPlaylistWrapper::GetbKickOnMigrate);
	cl_GameSettingPlaylistWrapper.set<void(GameSettingPlaylistWrapper::*)(long unsigned int)>("SetbKickOnMigrate", &GameSettingPlaylistWrapper::SetbKickOnMigrate);
	cl_GameSettingPlaylistWrapper.set<long unsigned int(GameSettingPlaylistWrapper::*)()>("GetbAllowClubs", &GameSettingPlaylistWrapper::GetbAllowClubs);
	cl_GameSettingPlaylistWrapper.set<void(GameSettingPlaylistWrapper::*)(long unsigned int)>("SetbAllowClubs", &GameSettingPlaylistWrapper::SetbAllowClubs);
	cl_GameSettingPlaylistWrapper.set<long unsigned int(GameSettingPlaylistWrapper::*)()>("GetbPlayersVSBots", &GameSettingPlaylistWrapper::GetbPlayersVSBots);
	cl_GameSettingPlaylistWrapper.set<void(GameSettingPlaylistWrapper::*)(long unsigned int)>("SetbPlayersVSBots", &GameSettingPlaylistWrapper::SetbPlayersVSBots);
	cl_GameSettingPlaylistWrapper.set<int(GameSettingPlaylistWrapper::*)()>("GetPlaylistId", &GameSettingPlaylistWrapper::GetPlaylistId);
	cl_GameSettingPlaylistWrapper.set<void(GameSettingPlaylistWrapper::*)(int)>("SetPlaylistId", &GameSettingPlaylistWrapper::SetPlaylistId);
	cl_GameSettingPlaylistWrapper.set<UnrealStringWrapper(GameSettingPlaylistWrapper::*)()>("GetServerCommand", &GameSettingPlaylistWrapper::GetServerCommand);
	cl_GameSettingPlaylistWrapper.set<bool(GameSettingPlaylistWrapper::*)()>("IsLanMatch", &GameSettingPlaylistWrapper::IsLanMatch);
	cl_GameSettingPlaylistWrapper.set<bool(GameSettingPlaylistWrapper::*)()>("IsPrivateMatch", &GameSettingPlaylistWrapper::IsPrivateMatch);
	cl_GameSettingPlaylistWrapper.set<bool(GameSettingPlaylistWrapper::*)()>("ShouldUpdateSkills", &GameSettingPlaylistWrapper::ShouldUpdateSkills);
	cl_GameSettingPlaylistWrapper.set<bool(GameSettingPlaylistWrapper::*)(int)>("IsValidID", &GameSettingPlaylistWrapper::IsValidID);
	cl_GameSettingPlaylistWrapper.set<bool(GameSettingPlaylistWrapper::*)()>("IsValid2", &GameSettingPlaylistWrapper::IsValid2);

	module.set("GameSettingPlaylistWrapper", cl_GameSettingPlaylistWrapper);
}
