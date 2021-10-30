void bind_NetStatGraphWrapper([[maybe_unused]] v8::Isolate* isolate, v8pp::module& module)
{

	v8pp::class_<NetStatGraphWrapper> cl_NetStatGraphWrapper(isolate);
	cl_NetStatGraphWrapper.inherit<StatGraphWrapper>();
	cl_NetStatGraphWrapper.ctor<uintptr_t>();
	cl_NetStatGraphWrapper.set<SampleHistoryWrapper(NetStatGraphWrapper::*)()>("GetPacketsOut", &NetStatGraphWrapper::GetPacketsOut);
	cl_NetStatGraphWrapper.set<void(NetStatGraphWrapper::*)(SampleHistoryWrapper)>("SetPacketsOut", &NetStatGraphWrapper::SetPacketsOut);
	cl_NetStatGraphWrapper.set<SampleHistoryWrapper(NetStatGraphWrapper::*)()>("GetPacketsIn", &NetStatGraphWrapper::GetPacketsIn);
	cl_NetStatGraphWrapper.set<void(NetStatGraphWrapper::*)(SampleHistoryWrapper)>("SetPacketsIn", &NetStatGraphWrapper::SetPacketsIn);
	cl_NetStatGraphWrapper.set<SampleHistoryWrapper(NetStatGraphWrapper::*)()>("GetLostPacketsOut", &NetStatGraphWrapper::GetLostPacketsOut);
	cl_NetStatGraphWrapper.set<void(NetStatGraphWrapper::*)(SampleHistoryWrapper)>("SetLostPacketsOut", &NetStatGraphWrapper::SetLostPacketsOut);
	cl_NetStatGraphWrapper.set<SampleHistoryWrapper(NetStatGraphWrapper::*)()>("GetLostPacketsIn", &NetStatGraphWrapper::GetLostPacketsIn);
	cl_NetStatGraphWrapper.set<void(NetStatGraphWrapper::*)(SampleHistoryWrapper)>("SetLostPacketsIn", &NetStatGraphWrapper::SetLostPacketsIn);
	cl_NetStatGraphWrapper.set<SampleHistoryWrapper(NetStatGraphWrapper::*)()>("GetBytesOut", &NetStatGraphWrapper::GetBytesOut);
	cl_NetStatGraphWrapper.set<void(NetStatGraphWrapper::*)(SampleHistoryWrapper)>("SetBytesOut", &NetStatGraphWrapper::SetBytesOut);
	cl_NetStatGraphWrapper.set<SampleHistoryWrapper(NetStatGraphWrapper::*)()>("GetBytesIn", &NetStatGraphWrapper::GetBytesIn);
	cl_NetStatGraphWrapper.set<void(NetStatGraphWrapper::*)(SampleHistoryWrapper)>("SetBytesIn", &NetStatGraphWrapper::SetBytesIn);
	cl_NetStatGraphWrapper.set<SampleHistoryWrapper(NetStatGraphWrapper::*)()>("GetLatency", &NetStatGraphWrapper::GetLatency);
	cl_NetStatGraphWrapper.set<void(NetStatGraphWrapper::*)(SampleHistoryWrapper)>("SetLatency", &NetStatGraphWrapper::SetLatency);
	cl_NetStatGraphWrapper.set<float(NetStatGraphWrapper::*)()>("GetExpectedOutPacketRate", &NetStatGraphWrapper::GetExpectedOutPacketRate);
	cl_NetStatGraphWrapper.set<void(NetStatGraphWrapper::*)(float)>("SetExpectedOutPacketRate", &NetStatGraphWrapper::SetExpectedOutPacketRate);
	cl_NetStatGraphWrapper.set<float(NetStatGraphWrapper::*)()>("GetExpectedInPacketRate", &NetStatGraphWrapper::GetExpectedInPacketRate);
	cl_NetStatGraphWrapper.set<void(NetStatGraphWrapper::*)(float)>("SetExpectedInPacketRate", &NetStatGraphWrapper::SetExpectedInPacketRate);
	cl_NetStatGraphWrapper.set<float(NetStatGraphWrapper::*)()>("GetMaxBytesRate", &NetStatGraphWrapper::GetMaxBytesRate);
	cl_NetStatGraphWrapper.set<void(NetStatGraphWrapper::*)(float)>("SetMaxBytesRate", &NetStatGraphWrapper::SetMaxBytesRate);
	cl_NetStatGraphWrapper.set<void(NetStatGraphWrapper::*)()>("eventUpdateGraphRanges", &NetStatGraphWrapper::eventUpdateGraphRanges);
	cl_NetStatGraphWrapper.set<SampleHistoryWrapper(NetStatGraphWrapper::*)(std::string)>("CreateBytesSummary", &NetStatGraphWrapper::CreateBytesSummary);
	cl_NetStatGraphWrapper.set<SampleHistoryWrapper(NetStatGraphWrapper::*)(std::string)>("CreateLossSummary", &NetStatGraphWrapper::CreateLossSummary);
	cl_NetStatGraphWrapper.set<SampleHistoryWrapper(NetStatGraphWrapper::*)(std::string)>("CreatePktSummary", &NetStatGraphWrapper::CreatePktSummary);
	cl_NetStatGraphWrapper.set<void(NetStatGraphWrapper::*)()>("eventConstruct", &NetStatGraphWrapper::eventConstruct);

	module.set("NetStatGraphWrapper", cl_NetStatGraphWrapper);
}
