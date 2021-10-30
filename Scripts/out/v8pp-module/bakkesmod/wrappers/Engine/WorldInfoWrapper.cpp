void bind_WorldInfoWrapper([[maybe_unused]] v8::Isolate* isolate, v8pp::module& module)
{

	v8pp::class_<WorldInfoWrapper> cl_WorldInfoWrapper(isolate);
	cl_WorldInfoWrapper.inherit<ActorWrapper>();
	cl_WorldInfoWrapper.ctor<uintptr_t>();
	cl_WorldInfoWrapper.set<float(WorldInfoWrapper::*)()>("GetTimeDilation", &WorldInfoWrapper::GetTimeDilation);
	cl_WorldInfoWrapper.set<float(WorldInfoWrapper::*)()>("GetDemoPlayTimeDilation", &WorldInfoWrapper::GetDemoPlayTimeDilation);
	cl_WorldInfoWrapper.set<float(WorldInfoWrapper::*)()>("GetTimeSeconds", &WorldInfoWrapper::GetTimeSeconds);
	cl_WorldInfoWrapper.set<float(WorldInfoWrapper::*)()>("GetRealTimeSeconds", &WorldInfoWrapper::GetRealTimeSeconds);
	cl_WorldInfoWrapper.set<float(WorldInfoWrapper::*)()>("GetRealDeltaSeconds", &WorldInfoWrapper::GetRealDeltaSeconds);
	cl_WorldInfoWrapper.set<float(WorldInfoWrapper::*)()>("GetAudioTimeSeconds", &WorldInfoWrapper::GetAudioTimeSeconds);
	cl_WorldInfoWrapper.set<float(WorldInfoWrapper::*)()>("GetDeltaSeconds", &WorldInfoWrapper::GetDeltaSeconds);
	cl_WorldInfoWrapper.set<float(WorldInfoWrapper::*)()>("GetPauseDelay", &WorldInfoWrapper::GetPauseDelay);
	cl_WorldInfoWrapper.set<float(WorldInfoWrapper::*)()>("GetRealTimeToUnPause", &WorldInfoWrapper::GetRealTimeToUnPause);
	cl_WorldInfoWrapper.set<float(WorldInfoWrapper::*)()>("GetStallZ", &WorldInfoWrapper::GetStallZ);
	cl_WorldInfoWrapper.set<float(WorldInfoWrapper::*)()>("GetWorldGravityZ", &WorldInfoWrapper::GetWorldGravityZ);
	cl_WorldInfoWrapper.set<float(WorldInfoWrapper::*)()>("GetDefaultGravityZ", &WorldInfoWrapper::GetDefaultGravityZ);
	cl_WorldInfoWrapper.set<float(WorldInfoWrapper::*)()>("GetGlobalGravityZ", &WorldInfoWrapper::GetGlobalGravityZ);
	cl_WorldInfoWrapper.set<float(WorldInfoWrapper::*)()>("GetRBPhysicsGravityScaling", &WorldInfoWrapper::GetRBPhysicsGravityScaling);

	module.set("WorldInfoWrapper", cl_WorldInfoWrapper);
}
