void bind_StatEventWrapper([[maybe_unused]] v8::Isolate* isolate, v8pp::module& module)
{

	v8pp::class_<StatEventWrapper> cl_StatEventWrapper(isolate);
	cl_StatEventWrapper.inherit<ObjectWrapper>();
	cl_StatEventWrapper.ctor<uintptr_t>();
	cl_StatEventWrapper.set<bool(StatEventWrapper::*)() const>("IsNull", &StatEventWrapper::IsNull);
	cl_StatEventWrapper.set<int(StatEventWrapper::*)()>("GetPoints", &StatEventWrapper::GetPoints);
	cl_StatEventWrapper.set<float(StatEventWrapper::*)()>("GetCooldownSeconds", &StatEventWrapper::GetCooldownSeconds);
	cl_StatEventWrapper.set<long unsigned int(StatEventWrapper::*)()>("GetbAddToScore", &StatEventWrapper::GetbAddToScore);
	cl_StatEventWrapper.set<long unsigned int(StatEventWrapper::*)()>("GetbIsLeaderboardStat", &StatEventWrapper::GetbIsLeaderboardStat);
	cl_StatEventWrapper.set<long unsigned int(StatEventWrapper::*)()>("GetbNotifyTicker", &StatEventWrapper::GetbNotifyTicker);
	cl_StatEventWrapper.set<long unsigned int(StatEventWrapper::*)()>("GetbShowOnHUD", &StatEventWrapper::GetbShowOnHUD);
	cl_StatEventWrapper.set<long unsigned int(StatEventWrapper::*)()>("GetbPrimaryStat", &StatEventWrapper::GetbPrimaryStat);
	cl_StatEventWrapper.set<long unsigned int(StatEventWrapper::*)()>("GetbSkipReplication", &StatEventWrapper::GetbSkipReplication);
	cl_StatEventWrapper.set<long unsigned int(StatEventWrapper::*)()>("GetbCanMute", &StatEventWrapper::GetbCanMute);
	cl_StatEventWrapper.set<long unsigned int(StatEventWrapper::*)()>("GetbCountMultiplied", &StatEventWrapper::GetbCountMultiplied);
	cl_StatEventWrapper.set<UnrealStringWrapper(StatEventWrapper::*)()>("GetLabel", &StatEventWrapper::GetLabel);
	cl_StatEventWrapper.set<UnrealStringWrapper(StatEventWrapper::*)()>("GetPluralLabel", &StatEventWrapper::GetPluralLabel);
	cl_StatEventWrapper.set<UnrealStringWrapper(StatEventWrapper::*)()>("GetDescription", &StatEventWrapper::GetDescription);
	cl_StatEventWrapper.set<float(StatEventWrapper::*)()>("GetNextCooldownTime", &StatEventWrapper::GetNextCooldownTime);
	cl_StatEventWrapper.set<std::string(StatEventWrapper::*)()>("GetGroupName", &StatEventWrapper::GetGroupName);
	cl_StatEventWrapper.set<std::string(StatEventWrapper::*)()>("GetEventName", &StatEventWrapper::GetEventName);

	module.set("StatEventWrapper", cl_StatEventWrapper);
}
