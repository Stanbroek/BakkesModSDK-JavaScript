void bind_InputBufferGraphWrapper([[maybe_unused]] v8::Isolate* isolate, v8pp::module& module)
{

	v8pp::class_<InputBufferGraphWrapper> cl_InputBufferGraphWrapper(isolate);
	cl_InputBufferGraphWrapper.inherit<StatGraphWrapper>();
	cl_InputBufferGraphWrapper.ctor<uintptr_t>();
	cl_InputBufferGraphWrapper.set<SampleHistoryWrapper(InputBufferGraphWrapper::*)()>("GetBuffer", &InputBufferGraphWrapper::GetBuffer);
	cl_InputBufferGraphWrapper.set<void(InputBufferGraphWrapper::*)(SampleHistoryWrapper)>("SetBuffer", &InputBufferGraphWrapper::SetBuffer);
	cl_InputBufferGraphWrapper.set<SampleHistoryWrapper(InputBufferGraphWrapper::*)()>("GetBufferTarget", &InputBufferGraphWrapper::GetBufferTarget);
	cl_InputBufferGraphWrapper.set<void(InputBufferGraphWrapper::*)(SampleHistoryWrapper)>("SetBufferTarget", &InputBufferGraphWrapper::SetBufferTarget);
	cl_InputBufferGraphWrapper.set<SampleHistoryWrapper(InputBufferGraphWrapper::*)()>("GetOverUnderFrames", &InputBufferGraphWrapper::GetOverUnderFrames);
	cl_InputBufferGraphWrapper.set<void(InputBufferGraphWrapper::*)(SampleHistoryWrapper)>("SetOverUnderFrames", &InputBufferGraphWrapper::SetOverUnderFrames);
	cl_InputBufferGraphWrapper.set<SampleHistoryWrapper(InputBufferGraphWrapper::*)()>("GetPhysicsRate", &InputBufferGraphWrapper::GetPhysicsRate);
	cl_InputBufferGraphWrapper.set<void(InputBufferGraphWrapper::*)(SampleHistoryWrapper)>("SetPhysicsRate", &InputBufferGraphWrapper::SetPhysicsRate);
	cl_InputBufferGraphWrapper.set<float(InputBufferGraphWrapper::*)()>("GetMaxPhysicsRate", &InputBufferGraphWrapper::GetMaxPhysicsRate);
	cl_InputBufferGraphWrapper.set<void(InputBufferGraphWrapper::*)(float)>("SetMaxPhysicsRate", &InputBufferGraphWrapper::SetMaxPhysicsRate);
	cl_InputBufferGraphWrapper.set<float(InputBufferGraphWrapper::*)()>("GetMinPhysicsRate", &InputBufferGraphWrapper::GetMinPhysicsRate);
	cl_InputBufferGraphWrapper.set<void(InputBufferGraphWrapper::*)(float)>("SetMinPhysicsRate", &InputBufferGraphWrapper::SetMinPhysicsRate);
	cl_InputBufferGraphWrapper.set<SampleHistoryWrapper(InputBufferGraphWrapper::*)(std::string)>("CreateBufferHistory", &InputBufferGraphWrapper::CreateBufferHistory);
	cl_InputBufferGraphWrapper.set<void(InputBufferGraphWrapper::*)()>("eventConstruct", &InputBufferGraphWrapper::eventConstruct);

	module.set("InputBufferGraphWrapper", cl_InputBufferGraphWrapper);
}
