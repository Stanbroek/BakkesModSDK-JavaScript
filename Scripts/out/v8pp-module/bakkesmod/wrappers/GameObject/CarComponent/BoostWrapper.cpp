void bind_BoostWrapper([[maybe_unused]] v8::Isolate* isolate, v8pp::module& module)
{

	v8pp::class_<BoostWrapper> cl_BoostWrapper(isolate);
	cl_BoostWrapper.inherit<CarComponentWrapper>();
	cl_BoostWrapper.ctor<uintptr_t>();
	cl_BoostWrapper.set<float(BoostWrapper::*)()>("GetBoostConsumptionRate", &BoostWrapper::GetBoostConsumptionRate);
	cl_BoostWrapper.set<void(BoostWrapper::*)(float)>("SetBoostConsumptionRate", &BoostWrapper::SetBoostConsumptionRate);
	cl_BoostWrapper.set<float(BoostWrapper::*)()>("GetMaxBoostAmount", &BoostWrapper::GetMaxBoostAmount);
	cl_BoostWrapper.set<void(BoostWrapper::*)(float)>("SetMaxBoostAmount", &BoostWrapper::SetMaxBoostAmount);
	cl_BoostWrapper.set<float(BoostWrapper::*)()>("GetStartBoostAmount", &BoostWrapper::GetStartBoostAmount);
	cl_BoostWrapper.set<void(BoostWrapper::*)(float)>("SetStartBoostAmount", &BoostWrapper::SetStartBoostAmount);
	cl_BoostWrapper.set<float(BoostWrapper::*)()>("GetCurrentBoostAmount", &BoostWrapper::GetCurrentBoostAmount);
	cl_BoostWrapper.set<void(BoostWrapper::*)(float)>("SetCurrentBoostAmount", &BoostWrapper::SetCurrentBoostAmount);
	cl_BoostWrapper.set<float(BoostWrapper::*)()>("GetBoostModifier", &BoostWrapper::GetBoostModifier);
	cl_BoostWrapper.set<void(BoostWrapper::*)(float)>("SetBoostModifier", &BoostWrapper::SetBoostModifier);
	cl_BoostWrapper.set<float(BoostWrapper::*)()>("GetLastBoostAmountRequestTime", &BoostWrapper::GetLastBoostAmountRequestTime);
	cl_BoostWrapper.set<void(BoostWrapper::*)(float)>("SetLastBoostAmountRequestTime", &BoostWrapper::SetLastBoostAmountRequestTime);
	cl_BoostWrapper.set<float(BoostWrapper::*)()>("GetLastBoostAmount", &BoostWrapper::GetLastBoostAmount);
	cl_BoostWrapper.set<void(BoostWrapper::*)(float)>("SetLastBoostAmount", &BoostWrapper::SetLastBoostAmount);
	cl_BoostWrapper.set<long unsigned int(BoostWrapper::*)()>("GetbPendingConfirmBoostAmount", &BoostWrapper::GetbPendingConfirmBoostAmount);
	cl_BoostWrapper.set<void(BoostWrapper::*)(long unsigned int)>("SetbPendingConfirmBoostAmount", &BoostWrapper::SetbPendingConfirmBoostAmount);
	cl_BoostWrapper.set<long unsigned int(BoostWrapper::*)()>("GetbNoBoost", &BoostWrapper::GetbNoBoost);
	cl_BoostWrapper.set<void(BoostWrapper::*)(long unsigned int)>("SetbNoBoost", &BoostWrapper::SetbNoBoost);
	cl_BoostWrapper.set<float(BoostWrapper::*)()>("GetBoostForce", &BoostWrapper::GetBoostForce);
	cl_BoostWrapper.set<void(BoostWrapper::*)(float)>("SetBoostForce", &BoostWrapper::SetBoostForce);
	cl_BoostWrapper.set<float(BoostWrapper::*)()>("GetMinBoostTime", &BoostWrapper::GetMinBoostTime);
	cl_BoostWrapper.set<void(BoostWrapper::*)(float)>("SetMinBoostTime", &BoostWrapper::SetMinBoostTime);
	cl_BoostWrapper.set<float(BoostWrapper::*)()>("GetRechargeRate", &BoostWrapper::GetRechargeRate);
	cl_BoostWrapper.set<void(BoostWrapper::*)(float)>("SetRechargeRate", &BoostWrapper::SetRechargeRate);
	cl_BoostWrapper.set<float(BoostWrapper::*)()>("GetRechargeDelay", &BoostWrapper::GetRechargeDelay);
	cl_BoostWrapper.set<void(BoostWrapper::*)(float)>("SetRechargeDelay", &BoostWrapper::SetRechargeDelay);
	cl_BoostWrapper.set<int(BoostWrapper::*)()>("GetUnlimitedBoostRefCount", &BoostWrapper::GetUnlimitedBoostRefCount);
	cl_BoostWrapper.set<void(BoostWrapper::*)(int)>("SetUnlimitedBoostRefCount", &BoostWrapper::SetUnlimitedBoostRefCount);
	cl_BoostWrapper.set<unsigned char(BoostWrapper::*)()>("GetReplicatedBoostAmount", &BoostWrapper::GetReplicatedBoostAmount);
	cl_BoostWrapper.set<void(BoostWrapper::*)(unsigned char)>("SetReplicatedBoostAmount", &BoostWrapper::SetReplicatedBoostAmount);
	cl_BoostWrapper.set<bool(BoostWrapper::*)()>("ShouldPredictBoostConsumption", &BoostWrapper::ShouldPredictBoostConsumption);
	cl_BoostWrapper.set<void(BoostWrapper::*)()>("ReadReplicatedBoostAmount", &BoostWrapper::ReadReplicatedBoostAmount);
	cl_BoostWrapper.set<void(BoostWrapper::*)()>("eventSetReplicatedBoostAmount", &BoostWrapper::eventSetReplicatedBoostAmount);
	cl_BoostWrapper.set<void(BoostWrapper::*)(float)>("ApplyForces", &BoostWrapper::ApplyForces);
	cl_BoostWrapper.set<void(BoostWrapper::*)(float)>("ClientGiveBoost", &BoostWrapper::ClientGiveBoost);
	cl_BoostWrapper.set<void(BoostWrapper::*)()>("ConfirmBoostAmount2", &BoostWrapper::ConfirmBoostAmount2);
	cl_BoostWrapper.set<void(BoostWrapper::*)()>("SendConfirmBoostAmount", &BoostWrapper::SendConfirmBoostAmount);
	cl_BoostWrapper.set<void(BoostWrapper::*)(float, float)>("ClientFixBoostAmount", &BoostWrapper::ClientFixBoostAmount);
	cl_BoostWrapper.set<void(BoostWrapper::*)(float, float)>("ServerConfirmBoostAmount", &BoostWrapper::ServerConfirmBoostAmount);
	cl_BoostWrapper.set<void(BoostWrapper::*)(float)>("SetRechargeDelay2", &BoostWrapper::SetRechargeDelay2);
	cl_BoostWrapper.set<void(BoostWrapper::*)(float)>("SetRechargeRate2", &BoostWrapper::SetRechargeRate2);
	cl_BoostWrapper.set<void(BoostWrapper::*)(long unsigned int)>("SetNoBoost", &BoostWrapper::SetNoBoost);
	cl_BoostWrapper.set<void(BoostWrapper::*)(long unsigned int)>("SetUnlimitedBoost2", &BoostWrapper::SetUnlimitedBoost2);
	cl_BoostWrapper.set<void(BoostWrapper::*)(long unsigned int)>("SetUnlimitedBoostDelayed", &BoostWrapper::SetUnlimitedBoostDelayed);
	cl_BoostWrapper.set<void(BoostWrapper::*)(float)>("SetBoostModifier2", &BoostWrapper::SetBoostModifier2);
	cl_BoostWrapper.set<void(BoostWrapper::*)(float)>("SetBoostAmount", &BoostWrapper::SetBoostAmount);
	cl_BoostWrapper.set<void(BoostWrapper::*)(float)>("GiveBoost2", &BoostWrapper::GiveBoost2);
	cl_BoostWrapper.set<void(BoostWrapper::*)()>("GiveStartingBoost", &BoostWrapper::GiveStartingBoost);
	cl_BoostWrapper.set<void(BoostWrapper::*)()>("GiveFullBoost", &BoostWrapper::GiveFullBoost);
	cl_BoostWrapper.set<float(BoostWrapper::*)()>("GetPercentBoostFull", &BoostWrapper::GetPercentBoostFull);
	cl_BoostWrapper.set<bool(BoostWrapper::*)()>("IsFull", &BoostWrapper::IsFull);
	cl_BoostWrapper.set<void(BoostWrapper::*)()>("RemoveFromCar", &BoostWrapper::RemoveFromCar);
	cl_BoostWrapper.set<bool(BoostWrapper::*)()>("CanDeactivate", &BoostWrapper::CanDeactivate);
	cl_BoostWrapper.set<bool(BoostWrapper::*)()>("CanActivate", &BoostWrapper::CanActivate);

	module.set("BoostWrapper", cl_BoostWrapper);
}
