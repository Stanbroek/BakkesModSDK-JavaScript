void bind_ClubDetailsWrapper([[maybe_unused]] v8::Isolate* isolate, v8pp::module& module)
{

	v8pp::class_<ClubDetailsWrapper> cl_ClubDetailsWrapper(isolate);
	cl_ClubDetailsWrapper.inherit<ClubSettingsWrapper>();
	cl_ClubDetailsWrapper.ctor<uintptr_t>();
	cl_ClubDetailsWrapper.set<long long unsigned int(ClubDetailsWrapper::*)()>("GetClubID", &ClubDetailsWrapper::GetClubID);
	// [deprecated] cl_ClubDetailsWrapper.set<SteamID(ClubDetailsWrapper::*)()>("GetOwnerPlayerID", &ClubDetailsWrapper::GetOwnerPlayerID);
	cl_ClubDetailsWrapper.set<UniqueIDWrapper(ClubDetailsWrapper::*)()>("GetOwnerPlayerUniqueID", &ClubDetailsWrapper::GetOwnerPlayerUniqueID);
	cl_ClubDetailsWrapper.set<UnrealStringWrapper(ClubDetailsWrapper::*)()>("GetMotD", &ClubDetailsWrapper::GetMotD);
	cl_ClubDetailsWrapper.set<long unsigned int(ClubDetailsWrapper::*)()>("GetbVerified", &ClubDetailsWrapper::GetbVerified);
	cl_ClubDetailsWrapper.set<long long unsigned int(ClubDetailsWrapper::*)()>("GetLastUpdatedTime", &ClubDetailsWrapper::GetLastUpdatedTime);
	cl_ClubDetailsWrapper.set<StructArrayWrapper<ClubMember>(ClubDetailsWrapper::*)()>("GetMembers", &ClubDetailsWrapper::GetMembers);

	module.set("ClubDetailsWrapper", cl_ClubDetailsWrapper);

	v8pp::class_<ClubMember> cl_ClubMember(isolate);
	//cl_ClubMember.set("paddingForReasons", &ClubMember::paddingForReasons);
	// [deprecated] cl_ClubMember.set<SteamID(ClubMember::*)()>("GetSteamId", &ClubMember::GetSteamId);
	cl_ClubMember.set<UniqueIDWrapper(ClubMember::*)()>("GetUniqueID", &ClubMember::GetUniqueID);
	cl_ClubMember.set<UnrealStringWrapper(ClubMember::*)()>("GetName", &ClubMember::GetName);
	cl_ClubMember.ctor<>();

	module.set("ClubMember", cl_ClubMember);
}
