void bind_PerfStatGraphWrapper([[maybe_unused]] v8::Isolate* isolate, v8pp::module& module)
{

	v8pp::class_<PerfStatGraphWrapper> cl_PerfStatGraphWrapper(isolate);
	cl_PerfStatGraphWrapper.inherit<StatGraphWrapper>();
	cl_PerfStatGraphWrapper.ctor<uintptr_t>();
	cl_PerfStatGraphWrapper.set<SampleHistoryWrapper(PerfStatGraphWrapper::*)()>("GetFPS", &PerfStatGraphWrapper::GetFPS);
	cl_PerfStatGraphWrapper.set<void(PerfStatGraphWrapper::*)(SampleHistoryWrapper)>("SetFPS", &PerfStatGraphWrapper::SetFPS);
	cl_PerfStatGraphWrapper.set<SampleHistoryWrapper(PerfStatGraphWrapper::*)()>("GetFrameTime", &PerfStatGraphWrapper::GetFrameTime);
	cl_PerfStatGraphWrapper.set<void(PerfStatGraphWrapper::*)(SampleHistoryWrapper)>("SetFrameTime", &PerfStatGraphWrapper::SetFrameTime);
	cl_PerfStatGraphWrapper.set<SampleHistoryWrapper(PerfStatGraphWrapper::*)()>("GetGameThreadTime", &PerfStatGraphWrapper::GetGameThreadTime);
	cl_PerfStatGraphWrapper.set<void(PerfStatGraphWrapper::*)(SampleHistoryWrapper)>("SetGameThreadTime", &PerfStatGraphWrapper::SetGameThreadTime);
	cl_PerfStatGraphWrapper.set<SampleHistoryWrapper(PerfStatGraphWrapper::*)()>("GetRenderThreadTime", &PerfStatGraphWrapper::GetRenderThreadTime);
	cl_PerfStatGraphWrapper.set<void(PerfStatGraphWrapper::*)(SampleHistoryWrapper)>("SetRenderThreadTime", &PerfStatGraphWrapper::SetRenderThreadTime);
	cl_PerfStatGraphWrapper.set<SampleHistoryWrapper(PerfStatGraphWrapper::*)()>("GetGPUFrameTime", &PerfStatGraphWrapper::GetGPUFrameTime);
	cl_PerfStatGraphWrapper.set<void(PerfStatGraphWrapper::*)(SampleHistoryWrapper)>("SetGPUFrameTime", &PerfStatGraphWrapper::SetGPUFrameTime);
	cl_PerfStatGraphWrapper.set<ArrayWrapper<SampleHistoryWrapper>(PerfStatGraphWrapper::*)()>("GetFrameTimeHistories", &PerfStatGraphWrapper::GetFrameTimeHistories);
	cl_PerfStatGraphWrapper.set<float(PerfStatGraphWrapper::*)()>("GetMaxFPS", &PerfStatGraphWrapper::GetMaxFPS);
	cl_PerfStatGraphWrapper.set<void(PerfStatGraphWrapper::*)(float)>("SetMaxFPS", &PerfStatGraphWrapper::SetMaxFPS);
	cl_PerfStatGraphWrapper.set<float(PerfStatGraphWrapper::*)()>("GetTargetFPS", &PerfStatGraphWrapper::GetTargetFPS);
	cl_PerfStatGraphWrapper.set<void(PerfStatGraphWrapper::*)(float)>("SetTargetFPS", &PerfStatGraphWrapper::SetTargetFPS);
	cl_PerfStatGraphWrapper.set<void(PerfStatGraphWrapper::*)()>("eventUpdateGraphRanges", &PerfStatGraphWrapper::eventUpdateGraphRanges);
	cl_PerfStatGraphWrapper.set<SampleHistoryWrapper(PerfStatGraphWrapper::*)(std::string)>("CreateFrameTimeHistory", &PerfStatGraphWrapper::CreateFrameTimeHistory);
	cl_PerfStatGraphWrapper.set<SampleHistoryWrapper(PerfStatGraphWrapper::*)(std::string)>("CreateFpsHistory", &PerfStatGraphWrapper::CreateFpsHistory);
	cl_PerfStatGraphWrapper.set<void(PerfStatGraphWrapper::*)()>("eventConstruct", &PerfStatGraphWrapper::eventConstruct);

	module.set("PerfStatGraphWrapper", cl_PerfStatGraphWrapper);
}
