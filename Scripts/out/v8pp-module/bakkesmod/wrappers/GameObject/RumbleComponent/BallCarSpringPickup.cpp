void bind_BallCarSpringPickup([[maybe_unused]] v8::Isolate* isolate, v8pp::module& module)
{

	v8pp::class_<BallCarSpringPickup> cl_BallCarSpringPickup(isolate);
	cl_BallCarSpringPickup.inherit<SpringPickup>();
	cl_BallCarSpringPickup.ctor<uintptr_t>();
	cl_BallCarSpringPickup.set<void(BallCarSpringPickup::*)(Vector &, Vector &)>("ScaleSpringMeshToLocation", &BallCarSpringPickup::ScaleSpringMeshToLocation);

	module.set("BallCarSpringPickup", cl_BallCarSpringPickup);
}
