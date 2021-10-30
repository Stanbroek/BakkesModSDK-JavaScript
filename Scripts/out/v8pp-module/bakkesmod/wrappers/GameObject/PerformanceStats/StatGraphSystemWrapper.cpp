void bind_StatGraphSystemWrapper([[maybe_unused]] v8::Isolate* isolate, v8pp::module& module)
{

	v8pp::class_<StatGraphSystemWrapper> cl_StatGraphSystemWrapper(isolate);
	cl_StatGraphSystemWrapper.inherit<ObjectWrapper>();
	cl_StatGraphSystemWrapper.ctor<uintptr_t>();
	cl_StatGraphSystemWrapper.set<bool(StatGraphSystemWrapper::*)() const>("IsNull", &StatGraphSystemWrapper::IsNull);
	cl_StatGraphSystemWrapper.set<float(StatGraphSystemWrapper::*)()>("GetGraphSampleTime", &StatGraphSystemWrapper::GetGraphSampleTime);
	cl_StatGraphSystemWrapper.set<void(StatGraphSystemWrapper::*)(float)>("SetGraphSampleTime", &StatGraphSystemWrapper::SetGraphSampleTime);
	cl_StatGraphSystemWrapper.set<unsigned char(StatGraphSystemWrapper::*)()>("GetGraphLevel", &StatGraphSystemWrapper::GetGraphLevel);
	cl_StatGraphSystemWrapper.set<void(StatGraphSystemWrapper::*)(unsigned char)>("SetGraphLevel", &StatGraphSystemWrapper::SetGraphLevel);
	cl_StatGraphSystemWrapper.set<PerfStatGraphWrapper(StatGraphSystemWrapper::*)()>("GetPerfStatGraph", &StatGraphSystemWrapper::GetPerfStatGraph);
	cl_StatGraphSystemWrapper.set<void(StatGraphSystemWrapper::*)(PerfStatGraphWrapper)>("SetPerfStatGraph", &StatGraphSystemWrapper::SetPerfStatGraph);
	cl_StatGraphSystemWrapper.set<NetStatGraphWrapper(StatGraphSystemWrapper::*)()>("GetNetStatGraph", &StatGraphSystemWrapper::GetNetStatGraph);
	cl_StatGraphSystemWrapper.set<void(StatGraphSystemWrapper::*)(NetStatGraphWrapper)>("SetNetStatGraph", &StatGraphSystemWrapper::SetNetStatGraph);
	cl_StatGraphSystemWrapper.set<InputBufferGraphWrapper(StatGraphSystemWrapper::*)()>("GetInputBufferGraph", &StatGraphSystemWrapper::GetInputBufferGraph);
	cl_StatGraphSystemWrapper.set<void(StatGraphSystemWrapper::*)(InputBufferGraphWrapper)>("SetInputBufferGraph", &StatGraphSystemWrapper::SetInputBufferGraph);
	cl_StatGraphSystemWrapper.set<ArrayWrapper<StatGraphWrapper>(StatGraphSystemWrapper::*)()>("GetStatGraphs", &StatGraphSystemWrapper::GetStatGraphs);
	cl_StatGraphSystemWrapper.set<ArrayWrapper<StatGraphWrapper>(StatGraphSystemWrapper::*)()>("GetVisibleStatGraphs", &StatGraphSystemWrapper::GetVisibleStatGraphs);
	cl_StatGraphSystemWrapper.set<int(StatGraphSystemWrapper::*)()>("GetPreallocGraphLines", &StatGraphSystemWrapper::GetPreallocGraphLines);
	cl_StatGraphSystemWrapper.set<void(StatGraphSystemWrapper::*)(int)>("SetPreallocGraphLines", &StatGraphSystemWrapper::SetPreallocGraphLines);
	cl_StatGraphSystemWrapper.set<void(StatGraphSystemWrapper::*)(StatGraphWrapper)>("__StatGraphSystem_TA__SetGraphLevel", &StatGraphSystemWrapper::__StatGraphSystem_TA__SetGraphLevel);
	cl_StatGraphSystemWrapper.set<void(StatGraphSystemWrapper::*)(float)>("PacketReceived", &StatGraphSystemWrapper::PacketReceived);
	cl_StatGraphSystemWrapper.set<void(StatGraphSystemWrapper::*)(float)>("Graphtime", &StatGraphSystemWrapper::Graphtime);
	cl_StatGraphSystemWrapper.set<void(StatGraphSystemWrapper::*)()>("StatGraphNext", &StatGraphSystemWrapper::StatGraphNext);
	cl_StatGraphSystemWrapper.set<float(StatGraphSystemWrapper::*)(unsigned char)>("GetGraphSampleTime2", &StatGraphSystemWrapper::GetGraphSampleTime2);
	cl_StatGraphSystemWrapper.set<void(StatGraphSystemWrapper::*)(unsigned char)>("SetGraphLevel2", &StatGraphSystemWrapper::SetGraphLevel2);

	module.set("StatGraphSystemWrapper", cl_StatGraphSystemWrapper);
}
