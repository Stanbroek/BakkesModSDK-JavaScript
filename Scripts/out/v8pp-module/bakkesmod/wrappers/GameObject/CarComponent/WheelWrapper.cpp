void bind_WheelWrapper([[maybe_unused]] v8::Isolate* isolate, v8pp::module& module)
{

	v8pp::class_<WheelWrapper> cl_WheelWrapper(isolate);
	cl_WheelWrapper.inherit<ObjectWrapper>();
	cl_WheelWrapper.ctor<uintptr_t>();
	cl_WheelWrapper.set<bool(WheelWrapper::*)() const>("IsNull", &WheelWrapper::IsNull);
	cl_WheelWrapper.set<float(WheelWrapper::*)()>("GetSteerFactor", &WheelWrapper::GetSteerFactor);
	cl_WheelWrapper.set<void(WheelWrapper::*)(float)>("SetSteerFactor", &WheelWrapper::SetSteerFactor);
	cl_WheelWrapper.set<float(WheelWrapper::*)()>("GetWheelRadius", &WheelWrapper::GetWheelRadius);
	cl_WheelWrapper.set<void(WheelWrapper::*)(float)>("SetWheelRadius", &WheelWrapper::SetWheelRadius);
	cl_WheelWrapper.set<float(WheelWrapper::*)()>("GetSuspensionStiffness", &WheelWrapper::GetSuspensionStiffness);
	cl_WheelWrapper.set<void(WheelWrapper::*)(float)>("SetSuspensionStiffness", &WheelWrapper::SetSuspensionStiffness);
	cl_WheelWrapper.set<float(WheelWrapper::*)()>("GetSuspensionDampingCompression", &WheelWrapper::GetSuspensionDampingCompression);
	cl_WheelWrapper.set<void(WheelWrapper::*)(float)>("SetSuspensionDampingCompression", &WheelWrapper::SetSuspensionDampingCompression);
	cl_WheelWrapper.set<float(WheelWrapper::*)()>("GetSuspensionDampingRelaxation", &WheelWrapper::GetSuspensionDampingRelaxation);
	cl_WheelWrapper.set<void(WheelWrapper::*)(float)>("SetSuspensionDampingRelaxation", &WheelWrapper::SetSuspensionDampingRelaxation);
	cl_WheelWrapper.set<float(WheelWrapper::*)()>("GetSuspensionTravel", &WheelWrapper::GetSuspensionTravel);
	cl_WheelWrapper.set<void(WheelWrapper::*)(float)>("SetSuspensionTravel", &WheelWrapper::SetSuspensionTravel);
	cl_WheelWrapper.set<float(WheelWrapper::*)()>("GetSuspensionMaxRaise", &WheelWrapper::GetSuspensionMaxRaise);
	cl_WheelWrapper.set<void(WheelWrapper::*)(float)>("SetSuspensionMaxRaise", &WheelWrapper::SetSuspensionMaxRaise);
	cl_WheelWrapper.set<float(WheelWrapper::*)()>("GetContactForceDistance", &WheelWrapper::GetContactForceDistance);
	cl_WheelWrapper.set<void(WheelWrapper::*)(float)>("SetContactForceDistance", &WheelWrapper::SetContactForceDistance);
	cl_WheelWrapper.set<float(WheelWrapper::*)()>("GetSpinSpeedDecayRate", &WheelWrapper::GetSpinSpeedDecayRate);
	cl_WheelWrapper.set<void(WheelWrapper::*)(float)>("SetSpinSpeedDecayRate", &WheelWrapper::SetSpinSpeedDecayRate);
	cl_WheelWrapper.set<Vector(WheelWrapper::*)()>("GetBoneOffset", &WheelWrapper::GetBoneOffset);
	cl_WheelWrapper.set<void(WheelWrapper::*)(Vector)>("SetBoneOffset", &WheelWrapper::SetBoneOffset);
	cl_WheelWrapper.set<Vector(WheelWrapper::*)()>("GetPresetRestPosition", &WheelWrapper::GetPresetRestPosition);
	cl_WheelWrapper.set<void(WheelWrapper::*)(Vector)>("SetPresetRestPosition", &WheelWrapper::SetPresetRestPosition);
	cl_WheelWrapper.set<Vector(WheelWrapper::*)()>("GetLocalSuspensionRayStart", &WheelWrapper::GetLocalSuspensionRayStart);
	cl_WheelWrapper.set<void(WheelWrapper::*)(Vector)>("SetLocalSuspensionRayStart", &WheelWrapper::SetLocalSuspensionRayStart);
	cl_WheelWrapper.set<Vector(WheelWrapper::*)()>("GetLocalRestPosition", &WheelWrapper::GetLocalRestPosition);
	cl_WheelWrapper.set<void(WheelWrapper::*)(Vector)>("SetLocalRestPosition", &WheelWrapper::SetLocalRestPosition);
	cl_WheelWrapper.set<VehicleSimWrapper(WheelWrapper::*)()>("GetVehicleSim", &WheelWrapper::GetVehicleSim);
	cl_WheelWrapper.set<void(WheelWrapper::*)(VehicleSimWrapper)>("SetVehicleSim", &WheelWrapper::SetVehicleSim);
	cl_WheelWrapper.set<int(WheelWrapper::*)()>("GetWheelIndex", &WheelWrapper::GetWheelIndex);
	cl_WheelWrapper.set<void(WheelWrapper::*)(int)>("SetWheelIndex", &WheelWrapper::SetWheelIndex);
	cl_WheelWrapper.set<WheelContactData(WheelWrapper::*)()>("GetContact", &WheelWrapper::GetContact);
	cl_WheelWrapper.set<void(WheelWrapper::*)(WheelContactData)>("SetContact", &WheelWrapper::SetContact);
	cl_WheelWrapper.set<long unsigned int(WheelWrapper::*)()>("GetbDrawDebug", &WheelWrapper::GetbDrawDebug);
	cl_WheelWrapper.set<void(WheelWrapper::*)(long unsigned int)>("SetbDrawDebug", &WheelWrapper::SetbDrawDebug);
	cl_WheelWrapper.set<long unsigned int(WheelWrapper::*)()>("GetbHadContact", &WheelWrapper::GetbHadContact);
	cl_WheelWrapper.set<void(WheelWrapper::*)(long unsigned int)>("SetbHadContact", &WheelWrapper::SetbHadContact);
	cl_WheelWrapper.set<float(WheelWrapper::*)()>("GetFrictionCurveInput", &WheelWrapper::GetFrictionCurveInput);
	cl_WheelWrapper.set<void(WheelWrapper::*)(float)>("SetFrictionCurveInput", &WheelWrapper::SetFrictionCurveInput);
	cl_WheelWrapper.set<float(WheelWrapper::*)()>("GetAerialThrottleToVelocityFactor", &WheelWrapper::GetAerialThrottleToVelocityFactor);
	cl_WheelWrapper.set<void(WheelWrapper::*)(float)>("SetAerialThrottleToVelocityFactor", &WheelWrapper::SetAerialThrottleToVelocityFactor);
	cl_WheelWrapper.set<float(WheelWrapper::*)()>("GetAerialAccelerationFactor", &WheelWrapper::GetAerialAccelerationFactor);
	cl_WheelWrapper.set<void(WheelWrapper::*)(float)>("SetAerialAccelerationFactor", &WheelWrapper::SetAerialAccelerationFactor);
	cl_WheelWrapper.set<float(WheelWrapper::*)()>("GetSpinSpeed", &WheelWrapper::GetSpinSpeed);
	cl_WheelWrapper.set<void(WheelWrapper::*)(float)>("SetSpinSpeed", &WheelWrapper::SetSpinSpeed);
	cl_WheelWrapper.set<Vector(WheelWrapper::*)()>("GetRefWheelLocation", &WheelWrapper::GetRefWheelLocation);
	cl_WheelWrapper.set<float(WheelWrapper::*)()>("GetSuspensionDistance", &WheelWrapper::GetSuspensionDistance);
	cl_WheelWrapper.set<float(WheelWrapper::*)()>("GetSteer2", &WheelWrapper::GetSteer2);
	cl_WheelWrapper.set<Vector(WheelWrapper::*)()>("GetLinearVelocity", &WheelWrapper::GetLinearVelocity);
	cl_WheelWrapper.set<void(WheelWrapper::*)(WheelWrapper)>("EventContactChanged", &WheelWrapper::EventContactChanged);

	module.set("WheelWrapper", cl_WheelWrapper);
}
