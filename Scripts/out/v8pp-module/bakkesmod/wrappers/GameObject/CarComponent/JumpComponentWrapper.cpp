void bind_JumpComponentWrapper([[maybe_unused]] v8::Isolate* isolate, v8pp::module& module)
{

	v8pp::class_<JumpComponentWrapper> cl_JumpComponentWrapper(isolate);
	cl_JumpComponentWrapper.inherit<CarComponentWrapper>();
	cl_JumpComponentWrapper.ctor<uintptr_t>();
	cl_JumpComponentWrapper.set<float(JumpComponentWrapper::*)()>("GetMinJumpTime", &JumpComponentWrapper::GetMinJumpTime);
	cl_JumpComponentWrapper.set<void(JumpComponentWrapper::*)(float)>("SetMinJumpTime", &JumpComponentWrapper::SetMinJumpTime);
	cl_JumpComponentWrapper.set<float(JumpComponentWrapper::*)()>("GetJumpImpulse", &JumpComponentWrapper::GetJumpImpulse);
	cl_JumpComponentWrapper.set<void(JumpComponentWrapper::*)(float)>("SetJumpImpulse", &JumpComponentWrapper::SetJumpImpulse);
	cl_JumpComponentWrapper.set<float(JumpComponentWrapper::*)()>("GetJumpForce", &JumpComponentWrapper::GetJumpForce);
	cl_JumpComponentWrapper.set<void(JumpComponentWrapper::*)(float)>("SetJumpForce", &JumpComponentWrapper::SetJumpForce);
	cl_JumpComponentWrapper.set<float(JumpComponentWrapper::*)()>("GetJumpForceTime", &JumpComponentWrapper::GetJumpForceTime);
	cl_JumpComponentWrapper.set<void(JumpComponentWrapper::*)(float)>("SetJumpForceTime", &JumpComponentWrapper::SetJumpForceTime);
	cl_JumpComponentWrapper.set<float(JumpComponentWrapper::*)()>("GetPodiumJumpForceTime", &JumpComponentWrapper::GetPodiumJumpForceTime);
	cl_JumpComponentWrapper.set<void(JumpComponentWrapper::*)(float)>("SetPodiumJumpForceTime", &JumpComponentWrapper::SetPodiumJumpForceTime);
	cl_JumpComponentWrapper.set<float(JumpComponentWrapper::*)()>("GetJumpImpulseSpeed", &JumpComponentWrapper::GetJumpImpulseSpeed);
	cl_JumpComponentWrapper.set<void(JumpComponentWrapper::*)(float)>("SetJumpImpulseSpeed", &JumpComponentWrapper::SetJumpImpulseSpeed);
	cl_JumpComponentWrapper.set<float(JumpComponentWrapper::*)()>("GetJumpAccel", &JumpComponentWrapper::GetJumpAccel);
	cl_JumpComponentWrapper.set<void(JumpComponentWrapper::*)(float)>("SetJumpAccel", &JumpComponentWrapper::SetJumpAccel);
	cl_JumpComponentWrapper.set<float(JumpComponentWrapper::*)()>("GetMaxJumpHeight", &JumpComponentWrapper::GetMaxJumpHeight);
	cl_JumpComponentWrapper.set<void(JumpComponentWrapper::*)(float)>("SetMaxJumpHeight", &JumpComponentWrapper::SetMaxJumpHeight);
	cl_JumpComponentWrapper.set<float(JumpComponentWrapper::*)()>("GetMaxJumpHeightTime", &JumpComponentWrapper::GetMaxJumpHeightTime);
	cl_JumpComponentWrapper.set<void(JumpComponentWrapper::*)(float)>("SetMaxJumpHeightTime", &JumpComponentWrapper::SetMaxJumpHeightTime);
	cl_JumpComponentWrapper.set<long unsigned int(JumpComponentWrapper::*)()>("GetbDeactivate", &JumpComponentWrapper::GetbDeactivate);
	cl_JumpComponentWrapper.set<void(JumpComponentWrapper::*)(long unsigned int)>("SetbDeactivate", &JumpComponentWrapper::SetbDeactivate);
	cl_JumpComponentWrapper.set<void(JumpComponentWrapper::*)(float)>("ApplyForces", &JumpComponentWrapper::ApplyForces);
	cl_JumpComponentWrapper.set<void(JumpComponentWrapper::*)()>("CacheJumpData", &JumpComponentWrapper::CacheJumpData);
	cl_JumpComponentWrapper.set<void(JumpComponentWrapper::*)()>("OnCreated", &JumpComponentWrapper::OnCreated);

	module.set("JumpComponentWrapper", cl_JumpComponentWrapper);
}
