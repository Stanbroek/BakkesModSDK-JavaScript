void bind_VehicleSimWrapper([[maybe_unused]] v8::Isolate* isolate, v8pp::module& module)
{

	v8pp::class_<VehicleSimWrapper> cl_VehicleSimWrapper(isolate);
	cl_VehicleSimWrapper.inherit<ObjectWrapper>();
	cl_VehicleSimWrapper.ctor<uintptr_t>();
	cl_VehicleSimWrapper.set<bool(VehicleSimWrapper::*)() const>("IsNull", &VehicleSimWrapper::IsNull);
	cl_VehicleSimWrapper.set<ArrayWrapper<WheelWrapper>(VehicleSimWrapper::*)()>("GetWheels", &VehicleSimWrapper::GetWheels);
	cl_VehicleSimWrapper.set<float(VehicleSimWrapper::*)()>("GetDriveTorque", &VehicleSimWrapper::GetDriveTorque);
	cl_VehicleSimWrapper.set<void(VehicleSimWrapper::*)(float)>("SetDriveTorque", &VehicleSimWrapper::SetDriveTorque);
	cl_VehicleSimWrapper.set<float(VehicleSimWrapper::*)()>("GetBrakeTorque", &VehicleSimWrapper::GetBrakeTorque);
	cl_VehicleSimWrapper.set<void(VehicleSimWrapper::*)(float)>("SetBrakeTorque", &VehicleSimWrapper::SetBrakeTorque);
	cl_VehicleSimWrapper.set<float(VehicleSimWrapper::*)()>("GetStopThreshold", &VehicleSimWrapper::GetStopThreshold);
	cl_VehicleSimWrapper.set<void(VehicleSimWrapper::*)(float)>("SetStopThreshold", &VehicleSimWrapper::SetStopThreshold);
	cl_VehicleSimWrapper.set<float(VehicleSimWrapper::*)()>("GetIdleBrakeFactor", &VehicleSimWrapper::GetIdleBrakeFactor);
	cl_VehicleSimWrapper.set<void(VehicleSimWrapper::*)(float)>("SetIdleBrakeFactor", &VehicleSimWrapper::SetIdleBrakeFactor);
	cl_VehicleSimWrapper.set<float(VehicleSimWrapper::*)()>("GetOppositeBrakeFactor", &VehicleSimWrapper::GetOppositeBrakeFactor);
	cl_VehicleSimWrapper.set<void(VehicleSimWrapper::*)(float)>("SetOppositeBrakeFactor", &VehicleSimWrapper::SetOppositeBrakeFactor);
	cl_VehicleSimWrapper.set<long unsigned int(VehicleSimWrapper::*)()>("GetbUseAckermannSteering", &VehicleSimWrapper::GetbUseAckermannSteering);
	cl_VehicleSimWrapper.set<void(VehicleSimWrapper::*)(long unsigned int)>("SetbUseAckermannSteering", &VehicleSimWrapper::SetbUseAckermannSteering);
	cl_VehicleSimWrapper.set<long unsigned int(VehicleSimWrapper::*)()>("GetbWasAttached", &VehicleSimWrapper::GetbWasAttached);
	cl_VehicleSimWrapper.set<void(VehicleSimWrapper::*)(long unsigned int)>("SetbWasAttached", &VehicleSimWrapper::SetbWasAttached);
	cl_VehicleSimWrapper.set<float(VehicleSimWrapper::*)()>("GetOutputThrottle", &VehicleSimWrapper::GetOutputThrottle);
	cl_VehicleSimWrapper.set<void(VehicleSimWrapper::*)(float)>("SetOutputThrottle", &VehicleSimWrapper::SetOutputThrottle);
	cl_VehicleSimWrapper.set<float(VehicleSimWrapper::*)()>("GetOutputSteer", &VehicleSimWrapper::GetOutputSteer);
	cl_VehicleSimWrapper.set<void(VehicleSimWrapper::*)(float)>("SetOutputSteer", &VehicleSimWrapper::SetOutputSteer);
	cl_VehicleSimWrapper.set<float(VehicleSimWrapper::*)()>("GetOutputBrake", &VehicleSimWrapper::GetOutputBrake);
	cl_VehicleSimWrapper.set<void(VehicleSimWrapper::*)(float)>("SetOutputBrake", &VehicleSimWrapper::SetOutputBrake);
	cl_VehicleSimWrapper.set<float(VehicleSimWrapper::*)()>("GetOutputHandbrake", &VehicleSimWrapper::GetOutputHandbrake);
	cl_VehicleSimWrapper.set<void(VehicleSimWrapper::*)(float)>("SetOutputHandbrake", &VehicleSimWrapper::SetOutputHandbrake);
	cl_VehicleSimWrapper.set<VehicleWrapper(VehicleSimWrapper::*)()>("GetVehicle", &VehicleSimWrapper::GetVehicle);
	cl_VehicleSimWrapper.set<void(VehicleSimWrapper::*)(VehicleWrapper)>("SetVehicle", &VehicleSimWrapper::SetVehicle);
	cl_VehicleSimWrapper.set<CarWrapper(VehicleSimWrapper::*)()>("GetCar", &VehicleSimWrapper::GetCar);
	cl_VehicleSimWrapper.set<void(VehicleSimWrapper::*)(CarWrapper)>("SetCar", &VehicleSimWrapper::SetCar);
	cl_VehicleSimWrapper.set<float(VehicleSimWrapper::*)()>("GetSteeringSensitivity", &VehicleSimWrapper::GetSteeringSensitivity);
	cl_VehicleSimWrapper.set<void(VehicleSimWrapper::*)(float)>("SetSteeringSensitivity", &VehicleSimWrapper::SetSteeringSensitivity);

	module.set("VehicleSimWrapper", cl_VehicleSimWrapper);
}
