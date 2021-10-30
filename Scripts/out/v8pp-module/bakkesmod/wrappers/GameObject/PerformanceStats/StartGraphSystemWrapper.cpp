void bind_StartGraphSystemWrapper([[maybe_unused]] v8::Isolate* isolate, v8pp::module& module)
{

	v8pp::class_<StartGraphSystemWrapper> cl_StartGraphSystemWrapper(isolate);
	cl_StartGraphSystemWrapper.inherit<ObjectWrapper>();
	cl_StartGraphSystemWrapper.ctor<uintptr_t>();
	cl_StartGraphSystemWrapper.set<bool(StartGraphSystemWrapper::*)() const>("IsNull", &StartGraphSystemWrapper::IsNull);
	cl_StartGraphSystemWrapper.set<float(StartGraphSystemWrapper::*)()>("GetGraphSampleTime", &StartGraphSystemWrapper::GetGraphSampleTime);
	cl_StartGraphSystemWrapper.set<void(StartGraphSystemWrapper::*)(float)>("SetGraphSampleTime", &StartGraphSystemWrapper::SetGraphSampleTime);
	cl_StartGraphSystemWrapper.set<unsigned char(StartGraphSystemWrapper::*)()>("GetGraphLevel", &StartGraphSystemWrapper::GetGraphLevel);
	cl_StartGraphSystemWrapper.set<void(StartGraphSystemWrapper::*)(unsigned char)>("SetGraphLevel", &StartGraphSystemWrapper::SetGraphLevel);
	cl_StartGraphSystemWrapper.set<PerfStatGraphWrapper(StartGraphSystemWrapper::*)()>("GetPerfStatGraph", &StartGraphSystemWrapper::GetPerfStatGraph);
	cl_StartGraphSystemWrapper.set<void(StartGraphSystemWrapper::*)(PerfStatGraphWrapper)>("SetPerfStatGraph", &StartGraphSystemWrapper::SetPerfStatGraph);
	cl_StartGraphSystemWrapper.set<NetStatGraphWrapper(StartGraphSystemWrapper::*)()>("GetNetStatGraph", &StartGraphSystemWrapper::GetNetStatGraph);
	cl_StartGraphSystemWrapper.set<void(StartGraphSystemWrapper::*)(NetStatGraphWrapper)>("SetNetStatGraph", &StartGraphSystemWrapper::SetNetStatGraph);
	cl_StartGraphSystemWrapper.set<InputBufferGraphWrapper(StartGraphSystemWrapper::*)()>("GetInputBufferGraph", &StartGraphSystemWrapper::GetInputBufferGraph);
	cl_StartGraphSystemWrapper.set<void(StartGraphSystemWrapper::*)(InputBufferGraphWrapper)>("SetInputBufferGraph", &StartGraphSystemWrapper::SetInputBufferGraph);
	cl_StartGraphSystemWrapper.set<ArrayWrapper<StatGraphWrapper>(StartGraphSystemWrapper::*)()>("GetStatGraphs", &StartGraphSystemWrapper::GetStatGraphs);
	cl_StartGraphSystemWrapper.set<ArrayWrapper<StatGraphWrapper>(StartGraphSystemWrapper::*)()>("GetVisibleStatGraphs", &StartGraphSystemWrapper::GetVisibleStatGraphs);
	cl_StartGraphSystemWrapper.set<void(StartGraphSystemWrapper::*)(float)>("Graphtime", &StartGraphSystemWrapper::Graphtime);
	cl_StartGraphSystemWrapper.set<void(StartGraphSystemWrapper::*)()>("StatGraphNext", &StartGraphSystemWrapper::StatGraphNext);
	cl_StartGraphSystemWrapper.set<float(StartGraphSystemWrapper::*)(unsigned char)>("GetGraphSampleTime2", &StartGraphSystemWrapper::GetGraphSampleTime2);
	cl_StartGraphSystemWrapper.set<void(StartGraphSystemWrapper::*)(unsigned char)>("SetGraphLevel2", &StartGraphSystemWrapper::SetGraphLevel2);

	module.set("StartGraphSystemWrapper", cl_StartGraphSystemWrapper);
}
