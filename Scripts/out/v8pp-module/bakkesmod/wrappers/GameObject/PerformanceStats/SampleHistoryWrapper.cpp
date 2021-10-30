void bind_SampleHistoryWrapper([[maybe_unused]] v8::Isolate* isolate, v8pp::module& module)
{

	v8pp::class_<SampleHistoryWrapper> cl_SampleHistoryWrapper(isolate);
	cl_SampleHistoryWrapper.inherit<ObjectWrapper>();
	cl_SampleHistoryWrapper.ctor<uintptr_t>();
	cl_SampleHistoryWrapper.set<bool(SampleHistoryWrapper::*)() const>("IsNull", &SampleHistoryWrapper::IsNull);
	cl_SampleHistoryWrapper.set<SampleRecordSettingsWrapper(SampleHistoryWrapper::*)()>("GetRecordSettings", &SampleHistoryWrapper::GetRecordSettings);
	cl_SampleHistoryWrapper.set<void(SampleHistoryWrapper::*)(SampleRecordSettingsWrapper)>("SetRecordSettings", &SampleHistoryWrapper::SetRecordSettings);
	cl_SampleHistoryWrapper.set<UnrealStringWrapper(SampleHistoryWrapper::*)()>("GetTitle", &SampleHistoryWrapper::GetTitle);
	cl_SampleHistoryWrapper.set<float(SampleHistoryWrapper::*)()>("GetYMin", &SampleHistoryWrapper::GetYMin);
	cl_SampleHistoryWrapper.set<void(SampleHistoryWrapper::*)(float)>("SetYMin", &SampleHistoryWrapper::SetYMin);
	cl_SampleHistoryWrapper.set<float(SampleHistoryWrapper::*)()>("GetYMax", &SampleHistoryWrapper::GetYMax);
	cl_SampleHistoryWrapper.set<void(SampleHistoryWrapper::*)(float)>("SetYMax", &SampleHistoryWrapper::SetYMax);
	cl_SampleHistoryWrapper.set<float(SampleHistoryWrapper::*)()>("GetGoodValue", &SampleHistoryWrapper::GetGoodValue);
	cl_SampleHistoryWrapper.set<void(SampleHistoryWrapper::*)(float)>("SetGoodValue", &SampleHistoryWrapper::SetGoodValue);
	cl_SampleHistoryWrapper.set<float(SampleHistoryWrapper::*)()>("GetBadValue", &SampleHistoryWrapper::GetBadValue);
	cl_SampleHistoryWrapper.set<void(SampleHistoryWrapper::*)(float)>("SetBadValue", &SampleHistoryWrapper::SetBadValue);
	cl_SampleHistoryWrapper.set<float(SampleHistoryWrapper::*)()>("GetBaseValue", &SampleHistoryWrapper::GetBaseValue);
	cl_SampleHistoryWrapper.set<void(SampleHistoryWrapper::*)(float)>("SetBaseValue", &SampleHistoryWrapper::SetBaseValue);
	cl_SampleHistoryWrapper.set<StructArrayWrapper<RecordedSample>(SampleHistoryWrapper::*)()>("GetSamples", &SampleHistoryWrapper::GetSamples);
	cl_SampleHistoryWrapper.set<int(SampleHistoryWrapper::*)()>("GetSampleIndex", &SampleHistoryWrapper::GetSampleIndex);
	cl_SampleHistoryWrapper.set<void(SampleHistoryWrapper::*)(int)>("SetSampleIndex", &SampleHistoryWrapper::SetSampleIndex);
	cl_SampleHistoryWrapper.set<float(SampleHistoryWrapper::*)()>("GetAccumTime", &SampleHistoryWrapper::GetAccumTime);
	cl_SampleHistoryWrapper.set<void(SampleHistoryWrapper::*)(float)>("SetAccumTime", &SampleHistoryWrapper::SetAccumTime);
	cl_SampleHistoryWrapper.set<RecordedSample(SampleHistoryWrapper::*)()>("GetPendingSample", &SampleHistoryWrapper::GetPendingSample);
	cl_SampleHistoryWrapper.set<void(SampleHistoryWrapper::*)(RecordedSample)>("SetPendingSample", &SampleHistoryWrapper::SetPendingSample);
	cl_SampleHistoryWrapper.set<long unsigned int(SampleHistoryWrapper::*)()>("GetbHasPendingSample", &SampleHistoryWrapper::GetbHasPendingSample);
	cl_SampleHistoryWrapper.set<void(SampleHistoryWrapper::*)(long unsigned int)>("SetbHasPendingSample", &SampleHistoryWrapper::SetbHasPendingSample);
	cl_SampleHistoryWrapper.set<void(SampleHistoryWrapper::*)(float)>("Tick", &SampleHistoryWrapper::Tick);
	cl_SampleHistoryWrapper.set<void(SampleHistoryWrapper::*)(float)>("AddSample", &SampleHistoryWrapper::AddSample);
	cl_SampleHistoryWrapper.set<float(SampleHistoryWrapper::*)(unsigned char, float, long unsigned int)>("GetSummaryValue", &SampleHistoryWrapper::GetSummaryValue);
	cl_SampleHistoryWrapper.set<SampleHistoryWrapper(SampleHistoryWrapper::*)(float)>("SetBaseValue2", &SampleHistoryWrapper::SetBaseValue2);
	cl_SampleHistoryWrapper.set<SampleHistoryWrapper(SampleHistoryWrapper::*)(float, float)>("SetGoodBadValues", &SampleHistoryWrapper::SetGoodBadValues);
	cl_SampleHistoryWrapper.set<SampleHistoryWrapper(SampleHistoryWrapper::*)(float, float)>("SetGraphMaxMin", &SampleHistoryWrapper::SetGraphMaxMin);
	cl_SampleHistoryWrapper.set<SampleHistoryWrapper(SampleHistoryWrapper::*)(std::string)>("SetTitle", &SampleHistoryWrapper::SetTitle);

	module.set("SampleHistoryWrapper", cl_SampleHistoryWrapper);
}
