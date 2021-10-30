void bind_PriXWrapper([[maybe_unused]] v8::Isolate* isolate, v8pp::module& module)
{

	v8pp::class_<PriXWrapper> cl_PriXWrapper(isolate);
	cl_PriXWrapper.inherit<PlayerReplicationInfoWrapper>();
	cl_PriXWrapper.ctor<uintptr_t>();
	cl_PriXWrapper.set<void(PriXWrapper::*)()>("eventDestroyed", &PriXWrapper::eventDestroyed);
	cl_PriXWrapper.set<void(PriXWrapper::*)()>("OnUniqueIdChanged", &PriXWrapper::OnUniqueIdChanged);
	// [deprecated] cl_PriXWrapper.set<void(PriXWrapper::*)(SteamID &)>("SetUniqueId", &PriXWrapper::SetUniqueId);
	cl_PriXWrapper.set<void(PriXWrapper::*)()>("UnregisterPlayerFromSession", &PriXWrapper::UnregisterPlayerFromSession);
	cl_PriXWrapper.set<void(PriXWrapper::*)()>("RegisterPlayerWithSession", &PriXWrapper::RegisterPlayerWithSession);
	cl_PriXWrapper.set<void(PriXWrapper::*)()>("OnTeamChanged", &PriXWrapper::OnTeamChanged);
	cl_PriXWrapper.set<void(PriXWrapper::*)(TeamInfoWrapper)>("SetPlayerTeam", &PriXWrapper::SetPlayerTeam);
	cl_PriXWrapper.set<void(PriXWrapper::*)()>("eventOnOwnerChanged", &PriXWrapper::eventOnOwnerChanged);
	cl_PriXWrapper.set<void(PriXWrapper::*)(std::string)>("eventSetPlayerName", &PriXWrapper::eventSetPlayerName);
	cl_PriXWrapper.set<void(PriXWrapper::*)(PriXWrapper)>("EventDestroyed", &PriXWrapper::EventDestroyed);
	cl_PriXWrapper.set<void(PriXWrapper::*)(PriXWrapper)>("EventTeamChanged", &PriXWrapper::EventTeamChanged);
	cl_PriXWrapper.set<void(PriXWrapper::*)(PriXWrapper)>("EventUniqueIdChanged", &PriXWrapper::EventUniqueIdChanged);
	cl_PriXWrapper.set<void(PriXWrapper::*)(PriXWrapper)>("EventPlayerNameChanged", &PriXWrapper::EventPlayerNameChanged);

	module.set("PriXWrapper", cl_PriXWrapper);
}
