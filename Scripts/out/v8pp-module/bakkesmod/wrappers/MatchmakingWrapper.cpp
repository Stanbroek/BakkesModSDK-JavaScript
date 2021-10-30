void bind_MatchmakingWrapper([[maybe_unused]] v8::Isolate* isolate, v8pp::module& module)
{

	v8pp::class_<MatchmakingWrapper> cl_MatchmakingWrapper(isolate);
	cl_MatchmakingWrapper.inherit<ObjectWrapper>();
	cl_MatchmakingWrapper.ctor<uintptr_t>();
	cl_MatchmakingWrapper.set<bool(MatchmakingWrapper::*)() const>("IsNull", &MatchmakingWrapper::IsNull);
	cl_MatchmakingWrapper.set<bool(MatchmakingWrapper::*)()>("IsSearching", &MatchmakingWrapper::IsSearching);
	cl_MatchmakingWrapper.set<int(MatchmakingWrapper::*)()>("GetActiveViewTab", &MatchmakingWrapper::GetActiveViewTab);
	cl_MatchmakingWrapper.set<void(MatchmakingWrapper::*)(Region, bool)>("SetRegionSelection", &MatchmakingWrapper::SetRegionSelection);
	cl_MatchmakingWrapper.set<void(MatchmakingWrapper::*)(Playlist, bool)>("SetPlaylistSelection", &MatchmakingWrapper::SetPlaylistSelection);
	cl_MatchmakingWrapper.set<void(MatchmakingWrapper::*)(PlaylistCategory)>("StartMatchmaking", &MatchmakingWrapper::StartMatchmaking);
	cl_MatchmakingWrapper.set<void(MatchmakingWrapper::*)()>("CancelMatchmaking", &MatchmakingWrapper::CancelMatchmaking);
	cl_MatchmakingWrapper.set<void(MatchmakingWrapper::*)(Region, CustomMatchSettings const &)>("CreatePrivateMatch", &MatchmakingWrapper::CreatePrivateMatch);
	cl_MatchmakingWrapper.set<void(MatchmakingWrapper::*)(std::string const &, std::string const &)>("JoinPrivateMatch", &MatchmakingWrapper::JoinPrivateMatch);
	cl_MatchmakingWrapper.set<int(MatchmakingWrapper::*)()>("SeasonEndDays", &MatchmakingWrapper::SeasonEndDays);
	cl_MatchmakingWrapper.set<int(MatchmakingWrapper::*)()>("SeasonEndHours", &MatchmakingWrapper::SeasonEndHours);
	cl_MatchmakingWrapper.set<int(MatchmakingWrapper::*)()>("SeasonEndMinutes", &MatchmakingWrapper::SeasonEndMinutes);
	cl_MatchmakingWrapper.set<int(MatchmakingWrapper::*)()>("GetSeasonTimeRemaining", &MatchmakingWrapper::GetSeasonTimeRemaining);
	cl_MatchmakingWrapper.set<int(MatchmakingWrapper::*)()>("GetSeasonEndTimeSeconds", &MatchmakingWrapper::GetSeasonEndTimeSeconds);
	cl_MatchmakingWrapper.set<bool(MatchmakingWrapper::*)()>("HasSeasonEnded", &MatchmakingWrapper::HasSeasonEnded);
	cl_MatchmakingWrapper.set<int(MatchmakingWrapper::*)()>("GetTotalPopulation", &MatchmakingWrapper::GetTotalPopulation);
	cl_MatchmakingWrapper.set<std::string(*)(Region)>("GetRegionID", &MatchmakingWrapper::GetRegionID);
	cl_MatchmakingWrapper.set<std::string(*)(Region)>("GetRegionLabel", &MatchmakingWrapper::GetRegionLabel);

	module.set("MatchmakingWrapper", cl_MatchmakingWrapper);
	module.set_const("USE", Region::USE);
	module.set_const("EU", Region::EU);
	module.set_const("USW", Region::USW);
	module.set_const("ASC", Region::ASC);
	module.set_const("ASM", Region::ASM);
	module.set_const("JPN", Region::JPN);
	module.set_const("ME", Region::ME);
	module.set_const("OCE", Region::OCE);
	module.set_const("SAF", Region::SAF);
	module.set_const("SAM", Region::SAM);
	module.set_const("CASUAL_STANDARD", Playlist::CASUAL_STANDARD);
	module.set_const("CASUAL_DOUBLES", Playlist::CASUAL_DOUBLES);
	module.set_const("CASUAL_DUELS", Playlist::CASUAL_DUELS);
	module.set_const("CASUAL_CHAOS", Playlist::CASUAL_CHAOS);
	module.set_const("RANKED_STANDARD", Playlist::RANKED_STANDARD);
	module.set_const("RANKED_DOUBLES", Playlist::RANKED_DOUBLES);
	module.set_const("RANKED_DUELS", Playlist::RANKED_DUELS);
	module.set_const("EXTRAS_RUMBLE", Playlist::EXTRAS_RUMBLE);
	module.set_const("EXTRAS_DROPSHOT", Playlist::EXTRAS_DROPSHOT);
	module.set_const("EXTRAS_HOOPS", Playlist::EXTRAS_HOOPS);
	module.set_const("EXTRAS_SNOWDAY", Playlist::EXTRAS_SNOWDAY);
	module.set_const("CASUAL", PlaylistCategory::CASUAL);
	module.set_const("RANKED", PlaylistCategory::RANKED);
	module.set_const("EXTRAS", PlaylistCategory::EXTRAS);

	v8pp::class_<ClubColorSet> cl_ClubColorSet(isolate);
	cl_ClubColorSet.set("TeamColorID", &ClubColorSet::TeamColorID);
	cl_ClubColorSet.set("CustomColorID", &ClubColorSet::CustomColorID);
	cl_ClubColorSet.set("bTeamColorSet", &ClubColorSet::bTeamColorSet);
	cl_ClubColorSet.set("bCustomColorSet", &ClubColorSet::bCustomColorSet);
	cl_ClubColorSet.ctor<>();

	module.set("ClubColorSet", cl_ClubColorSet);

	v8pp::class_<CustomMatchTeamSettings> cl_CustomMatchTeamSettings(isolate);
	cl_CustomMatchTeamSettings.set("Name", &CustomMatchTeamSettings::Name);
	cl_CustomMatchTeamSettings.set("Colors", &CustomMatchTeamSettings::Colors);
	cl_CustomMatchTeamSettings.set("GameScore", &CustomMatchTeamSettings::GameScore);
	cl_CustomMatchTeamSettings.ctor<>();

	module.set("CustomMatchTeamSettings", cl_CustomMatchTeamSettings);

	v8pp::class_<CustomMatchSettings> cl_CustomMatchSettings(isolate);
	cl_CustomMatchSettings.set("GameTags", &CustomMatchSettings::GameTags);
	cl_CustomMatchSettings.set("MapName", &CustomMatchSettings::MapName);
	cl_CustomMatchSettings.set("ServerName", &CustomMatchSettings::ServerName);
	cl_CustomMatchSettings.set("Password", &CustomMatchSettings::Password);
	cl_CustomMatchSettings.set("BlueTeamSettings", &CustomMatchSettings::BlueTeamSettings);
	cl_CustomMatchSettings.set("OrangeTeamSettings", &CustomMatchSettings::OrangeTeamSettings);
	cl_CustomMatchSettings.set("GameMode", &CustomMatchSettings::GameMode);
	cl_CustomMatchSettings.set("MaxPlayerCount", &CustomMatchSettings::MaxPlayerCount);
	cl_CustomMatchSettings.set("bPartyMembersOnly", &CustomMatchSettings::bPartyMembersOnly);
	cl_CustomMatchSettings.set("bClubServer", &CustomMatchSettings::bClubServer);
	cl_CustomMatchSettings.ctor<>();

	module.set("CustomMatchSettings", cl_CustomMatchSettings);
}
