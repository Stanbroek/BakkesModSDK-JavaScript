void bind_BallLassoPickup([[maybe_unused]] v8::Isolate* isolate, v8pp::module& module)
{

	v8pp::class_<BallLassoPickup> cl_BallLassoPickup(isolate);
	cl_BallLassoPickup.inherit<SpringPickup>();
	cl_BallLassoPickup.ctor<uintptr_t>();
	cl_BallLassoPickup.set<void(BallLassoPickup::*)(Vector &, Vector &)>("ScaleSpringMeshToLocation", &BallLassoPickup::ScaleSpringMeshToLocation);
	cl_BallLassoPickup.set<void(BallLassoPickup::*)(long unsigned int)>("DoSpring", &BallLassoPickup::DoSpring);

	module.set("BallLassoPickup", cl_BallLassoPickup);
}
