void bind_ReplayServerWrapper([[maybe_unused]] v8::Isolate* isolate, v8pp::module& module)
{

	v8pp::class_<ReplayServerWrapper> cl_ReplayServerWrapper(isolate);
	cl_ReplayServerWrapper.inherit<ServerWrapper>();
	cl_ReplayServerWrapper.ctor<uintptr_t, uintptr_t, uintptr_t>();
	cl_ReplayServerWrapper.set<ActorWrapper(ReplayServerWrapper::*)()>("GetViewTarget", &ReplayServerWrapper::GetViewTarget);
	cl_ReplayServerWrapper.set<ReplayWrapper(ReplayServerWrapper::*)()>("GetReplay", &ReplayServerWrapper::GetReplay);
	cl_ReplayServerWrapper.set<float(ReplayServerWrapper::*)()>("GetReplayTimeElapsed", &ReplayServerWrapper::GetReplayTimeElapsed);
	cl_ReplayServerWrapper.set<int(ReplayServerWrapper::*)()>("GetReplayFPS", &ReplayServerWrapper::GetReplayFPS);
	cl_ReplayServerWrapper.set<int(ReplayServerWrapper::*)()>("GetCurrentReplayFrame", &ReplayServerWrapper::GetCurrentReplayFrame);
	cl_ReplayServerWrapper.set<void(ReplayServerWrapper::*)(int, std::string)>("AddKeyFrame", &ReplayServerWrapper::AddKeyFrame);
	cl_ReplayServerWrapper.set<void(ReplayServerWrapper::*)(int)>("RemoveKeyFrame", &ReplayServerWrapper::RemoveKeyFrame);
	cl_ReplayServerWrapper.set<void(ReplayServerWrapper::*)(int)>("SkipToFrame", &ReplayServerWrapper::SkipToFrame);
	cl_ReplayServerWrapper.set<void(ReplayServerWrapper::*)(float)>("SkipToTime", &ReplayServerWrapper::SkipToTime);
	cl_ReplayServerWrapper.set<void(ReplayServerWrapper::*)(int)>("StartPlaybackAtFrame", &ReplayServerWrapper::StartPlaybackAtFrame);
	cl_ReplayServerWrapper.set<void(ReplayServerWrapper::*)(float)>("StartPlaybackAtTime", &ReplayServerWrapper::StartPlaybackAtTime);

	module.set("ReplayServerWrapper", cl_ReplayServerWrapper);
}
