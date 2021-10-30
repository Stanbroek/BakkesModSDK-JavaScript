void bind_StatGraphWrapper([[maybe_unused]] v8::Isolate* isolate, v8pp::module& module)
{

	v8pp::class_<StatGraphWrapper> cl_StatGraphWrapper(isolate);
	cl_StatGraphWrapper.inherit<ObjectWrapper>();
	cl_StatGraphWrapper.ctor<uintptr_t>();
	cl_StatGraphWrapper.set<bool(StatGraphWrapper::*)() const>("IsNull", &StatGraphWrapper::IsNull);
	cl_StatGraphWrapper.set<SampleRecordSettingsWrapper(StatGraphWrapper::*)()>("GetRecordSettings", &StatGraphWrapper::GetRecordSettings);
	cl_StatGraphWrapper.set<void(StatGraphWrapper::*)(SampleRecordSettingsWrapper)>("SetRecordSettings", &StatGraphWrapper::SetRecordSettings);
	cl_StatGraphWrapper.set<double(StatGraphWrapper::*)()>("GetLastTickTime", &StatGraphWrapper::GetLastTickTime);
	cl_StatGraphWrapper.set<void(StatGraphWrapper::*)(double)>("SetLastTickTime", &StatGraphWrapper::SetLastTickTime);
	cl_StatGraphWrapper.set<ArrayWrapper<SampleHistoryWrapper>(StatGraphWrapper::*)()>("GetSampleHistories", &StatGraphWrapper::GetSampleHistories);
	cl_StatGraphWrapper.set<void(StatGraphWrapper::*)()>("StopDrawing", &StatGraphWrapper::StopDrawing);
	cl_StatGraphWrapper.set<SampleHistoryWrapper(StatGraphWrapper::*)(std::string)>("CreateSampleHistory", &StatGraphWrapper::CreateSampleHistory);
	cl_StatGraphWrapper.set<SampleHistoryWrapper(StatGraphWrapper::*)(SampleHistoryWrapper)>("AddSampleHistory", &StatGraphWrapper::AddSampleHistory);
	cl_StatGraphWrapper.set<void(StatGraphWrapper::*)()>("eventConstruct", &StatGraphWrapper::eventConstruct);

	module.set("StatGraphWrapper", cl_StatGraphWrapper);
}
