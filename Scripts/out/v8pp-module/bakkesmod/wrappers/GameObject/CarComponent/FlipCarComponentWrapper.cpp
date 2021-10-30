void bind_FlipCarComponentWrapper([[maybe_unused]] v8::Isolate* isolate, v8pp::module& module)
{

	v8pp::class_<FlipCarComponentWrapper> cl_FlipCarComponentWrapper(isolate);
	cl_FlipCarComponentWrapper.inherit<CarComponentWrapper>();
	cl_FlipCarComponentWrapper.ctor<uintptr_t>();
	cl_FlipCarComponentWrapper.set<float(FlipCarComponentWrapper::*)()>("GetFlipCarImpulse", &FlipCarComponentWrapper::GetFlipCarImpulse);
	cl_FlipCarComponentWrapper.set<void(FlipCarComponentWrapper::*)(float)>("SetFlipCarImpulse", &FlipCarComponentWrapper::SetFlipCarImpulse);
	cl_FlipCarComponentWrapper.set<float(FlipCarComponentWrapper::*)()>("GetFlipCarTorque", &FlipCarComponentWrapper::GetFlipCarTorque);
	cl_FlipCarComponentWrapper.set<void(FlipCarComponentWrapper::*)(float)>("SetFlipCarTorque", &FlipCarComponentWrapper::SetFlipCarTorque);
	cl_FlipCarComponentWrapper.set<float(FlipCarComponentWrapper::*)()>("GetFlipCarTime", &FlipCarComponentWrapper::GetFlipCarTime);
	cl_FlipCarComponentWrapper.set<void(FlipCarComponentWrapper::*)(float)>("SetFlipCarTime", &FlipCarComponentWrapper::SetFlipCarTime);
	cl_FlipCarComponentWrapper.set<long unsigned int(FlipCarComponentWrapper::*)()>("GetbFlipRight", &FlipCarComponentWrapper::GetbFlipRight);
	cl_FlipCarComponentWrapper.set<void(FlipCarComponentWrapper::*)(long unsigned int)>("SetbFlipRight", &FlipCarComponentWrapper::SetbFlipRight);
	cl_FlipCarComponentWrapper.set<void(FlipCarComponentWrapper::*)()>("InitFlip", &FlipCarComponentWrapper::InitFlip);
	cl_FlipCarComponentWrapper.set<void(FlipCarComponentWrapper::*)(float)>("ApplyForces", &FlipCarComponentWrapper::ApplyForces);
	cl_FlipCarComponentWrapper.set<bool(FlipCarComponentWrapper::*)()>("CanActivate", &FlipCarComponentWrapper::CanActivate);
	cl_FlipCarComponentWrapper.set<void(FlipCarComponentWrapper::*)()>("OnCreated", &FlipCarComponentWrapper::OnCreated);

	module.set("FlipCarComponentWrapper", cl_FlipCarComponentWrapper);
}
