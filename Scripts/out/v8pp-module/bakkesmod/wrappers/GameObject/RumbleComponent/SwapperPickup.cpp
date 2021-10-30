void bind_SwapperPickup([[maybe_unused]] v8::Isolate* isolate, v8pp::module& module)
{

	v8pp::class_<SwapperPickup> cl_SwapperPickup(isolate);
	cl_SwapperPickup.inherit<TargetedPickup>();
	cl_SwapperPickup.ctor<uintptr_t>();
	cl_SwapperPickup.set<CarWrapper(SwapperPickup::*)()>("GetOtherCar", &SwapperPickup::GetOtherCar);
	cl_SwapperPickup.set<void(SwapperPickup::*)(CarWrapper)>("SetOtherCar", &SwapperPickup::SetOtherCar);
	cl_SwapperPickup.set<void(SwapperPickup::*)()>("PickupEnd", &SwapperPickup::PickupEnd);
	cl_SwapperPickup.set<void(SwapperPickup::*)()>("OnTargetChanged", &SwapperPickup::OnTargetChanged);
	cl_SwapperPickup.set<void(SwapperPickup::*)()>("PickupStart", &SwapperPickup::PickupStart);

	module.set("SwapperPickup", cl_SwapperPickup);
}
