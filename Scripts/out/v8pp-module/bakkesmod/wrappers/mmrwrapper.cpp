void bind_mmrwrapper([[maybe_unused]] v8::Isolate* isolate, v8pp::module& module)
{

	v8pp::class_<MMRWrapper> cl_MMRWrapper(isolate);
	cl_MMRWrapper.inherit<ObjectWrapper>();
	cl_MMRWrapper.ctor<uintptr_t>();
	cl_MMRWrapper.set<bool(MMRWrapper::*)(UniqueIDWrapper)>("IsSyncing", &MMRWrapper::IsSyncing);
	cl_MMRWrapper.set<bool(MMRWrapper::*)(SteamID)>("IsSyncing", &MMRWrapper::IsSyncing);
	cl_MMRWrapper.set<bool(MMRWrapper::*)(UniqueIDWrapper, int)>("IsSynced", &MMRWrapper::IsSynced);
	cl_MMRWrapper.set<bool(MMRWrapper::*)(SteamID, int)>("IsSynced", &MMRWrapper::IsSynced);
	cl_MMRWrapper.set<bool(MMRWrapper::*)(int)>("IsRanked", &MMRWrapper::IsRanked);
	cl_MMRWrapper.set<SkillRating(MMRWrapper::*)(UniqueIDWrapper, int)>("GetPlayerSkillRating", &MMRWrapper::GetPlayerSkillRating);
	cl_MMRWrapper.set<SkillRank(MMRWrapper::*)(UniqueIDWrapper, int)>("GetPlayerRank", &MMRWrapper::GetPlayerRank);
	cl_MMRWrapper.set<float(MMRWrapper::*)(UniqueIDWrapper, int)>("GetPlayerMMR", &MMRWrapper::GetPlayerMMR);
	cl_MMRWrapper.set<SkillRating(MMRWrapper::*)(SteamID, int)>("GetPlayerSkillRating", &MMRWrapper::GetPlayerSkillRating);
	cl_MMRWrapper.set<SkillRank(MMRWrapper::*)(SteamID, int)>("GetPlayerRank", &MMRWrapper::GetPlayerRank);
	cl_MMRWrapper.set<float(MMRWrapper::*)(SteamID, int)>("GetPlayerMMR", &MMRWrapper::GetPlayerMMR);
	cl_MMRWrapper.set<float(MMRWrapper::*)(SkillRating, bool)>("CalculateMMR", &MMRWrapper::CalculateMMR);
	cl_MMRWrapper.set<int(MMRWrapper::*)()>("GetCurrentPlaylist", &MMRWrapper::GetCurrentPlaylist);
	//cl_MMRWrapper.set<std::unique_ptr<MMRNotifierToken, std::default_delete<MMRNotifierToken> >(MMRWrapper::*)(std::function<void (UniqueIDWrapper)>)>("RegisterMMRNotifier", &MMRWrapper::RegisterMMRNotifier);

	module.set("MMRWrapper", cl_MMRWrapper);

	v8pp::class_<MMRNotifierToken> cl_MMRNotifierToken(isolate);

	module.set("MMRNotifierToken", cl_MMRNotifierToken);
}
