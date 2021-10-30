void bind_PhysicalMaterialPropertyWrapper([[maybe_unused]] v8::Isolate* isolate, v8pp::module& module)
{

	v8pp::class_<PhysicalMaterialPropertyWrapper> cl_PhysicalMaterialPropertyWrapper(isolate);
	cl_PhysicalMaterialPropertyWrapper.inherit<ObjectWrapper>();
	cl_PhysicalMaterialPropertyWrapper.ctor<uintptr_t>();
	cl_PhysicalMaterialPropertyWrapper.set<bool(PhysicalMaterialPropertyWrapper::*)() const>("IsNull", &PhysicalMaterialPropertyWrapper::IsNull);
	cl_PhysicalMaterialPropertyWrapper.set<float(PhysicalMaterialPropertyWrapper::*)()>("GetTireFrictionScale", &PhysicalMaterialPropertyWrapper::GetTireFrictionScale);
	cl_PhysicalMaterialPropertyWrapper.set<void(PhysicalMaterialPropertyWrapper::*)(float)>("SetTireFrictionScale", &PhysicalMaterialPropertyWrapper::SetTireFrictionScale);
	cl_PhysicalMaterialPropertyWrapper.set<long unsigned int(PhysicalMaterialPropertyWrapper::*)()>("GetbStickyWheels", &PhysicalMaterialPropertyWrapper::GetbStickyWheels);
	cl_PhysicalMaterialPropertyWrapper.set<void(PhysicalMaterialPropertyWrapper::*)(long unsigned int)>("SetbStickyWheels", &PhysicalMaterialPropertyWrapper::SetbStickyWheels);
	cl_PhysicalMaterialPropertyWrapper.set<long unsigned int(PhysicalMaterialPropertyWrapper::*)()>("GetbConsiderForGround", &PhysicalMaterialPropertyWrapper::GetbConsiderForGround);
	cl_PhysicalMaterialPropertyWrapper.set<void(PhysicalMaterialPropertyWrapper::*)(long unsigned int)>("SetbConsiderForGround", &PhysicalMaterialPropertyWrapper::SetbConsiderForGround);

	module.set("PhysicalMaterialPropertyWrapper", cl_PhysicalMaterialPropertyWrapper);
}
