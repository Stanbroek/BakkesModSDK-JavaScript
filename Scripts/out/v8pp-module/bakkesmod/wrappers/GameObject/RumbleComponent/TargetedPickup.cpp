void bind_TargetedPickup([[maybe_unused]] v8::Isolate* isolate, v8pp::module& module)
{

	v8pp::class_<TargetedPickup> cl_TargetedPickup(isolate);
	cl_TargetedPickup.inherit<RumblePickupComponentWrapper>();
	cl_TargetedPickup.ctor<uintptr_t>();
	cl_TargetedPickup.set<long unsigned int(TargetedPickup::*)()>("GetbCanTargetBall", &TargetedPickup::GetbCanTargetBall);
	cl_TargetedPickup.set<void(TargetedPickup::*)(long unsigned int)>("SetbCanTargetBall", &TargetedPickup::SetbCanTargetBall);
	cl_TargetedPickup.set<long unsigned int(TargetedPickup::*)()>("GetbCanTargetCars", &TargetedPickup::GetbCanTargetCars);
	cl_TargetedPickup.set<void(TargetedPickup::*)(long unsigned int)>("SetbCanTargetCars", &TargetedPickup::SetbCanTargetCars);
	cl_TargetedPickup.set<long unsigned int(TargetedPickup::*)()>("GetbCanTargetEnemyCars", &TargetedPickup::GetbCanTargetEnemyCars);
	cl_TargetedPickup.set<void(TargetedPickup::*)(long unsigned int)>("SetbCanTargetEnemyCars", &TargetedPickup::SetbCanTargetEnemyCars);
	cl_TargetedPickup.set<long unsigned int(TargetedPickup::*)()>("GetbCanTargetTeamCars", &TargetedPickup::GetbCanTargetTeamCars);
	cl_TargetedPickup.set<void(TargetedPickup::*)(long unsigned int)>("SetbCanTargetTeamCars", &TargetedPickup::SetbCanTargetTeamCars);
	cl_TargetedPickup.set<long unsigned int(TargetedPickup::*)()>("GetbUseDirectionalTargeting", &TargetedPickup::GetbUseDirectionalTargeting);
	cl_TargetedPickup.set<void(TargetedPickup::*)(long unsigned int)>("SetbUseDirectionalTargeting", &TargetedPickup::SetbUseDirectionalTargeting);
	cl_TargetedPickup.set<long unsigned int(TargetedPickup::*)()>("GetbRequireTrace", &TargetedPickup::GetbRequireTrace);
	cl_TargetedPickup.set<void(TargetedPickup::*)(long unsigned int)>("SetbRequireTrace", &TargetedPickup::SetbRequireTrace);
	cl_TargetedPickup.set<float(TargetedPickup::*)()>("GetRange", &TargetedPickup::GetRange);
	cl_TargetedPickup.set<void(TargetedPickup::*)(float)>("SetRange", &TargetedPickup::SetRange);
	cl_TargetedPickup.set<float(TargetedPickup::*)()>("GetDirectionalTargetingAccuracy", &TargetedPickup::GetDirectionalTargetingAccuracy);
	cl_TargetedPickup.set<void(TargetedPickup::*)(float)>("SetDirectionalTargetingAccuracy", &TargetedPickup::SetDirectionalTargetingAccuracy);
	cl_TargetedPickup.set<RBActorWrapper(TargetedPickup::*)()>("GetClientTarget", &TargetedPickup::GetClientTarget);
	cl_TargetedPickup.set<void(TargetedPickup::*)(RBActorWrapper)>("SetClientTarget", &TargetedPickup::SetClientTarget);
	cl_TargetedPickup.set<RBActorWrapper(TargetedPickup::*)()>("GetTargeted", &TargetedPickup::GetTargeted);
	cl_TargetedPickup.set<void(TargetedPickup::*)(RBActorWrapper)>("SetTargeted", &TargetedPickup::SetTargeted);
	cl_TargetedPickup.set<RBActorWrapper(TargetedPickup::*)()>("GetClientTarget2", &TargetedPickup::GetClientTarget2);
	cl_TargetedPickup.set<void(TargetedPickup::*)()>("TargetChanged", &TargetedPickup::TargetChanged);
	cl_TargetedPickup.set<void(TargetedPickup::*)()>("OnTargetChanged", &TargetedPickup::OnTargetChanged);
	cl_TargetedPickup.set<bool(TargetedPickup::*)(RBActorWrapper)>("TryActivate", &TargetedPickup::TryActivate);
	cl_TargetedPickup.set<bool(TargetedPickup::*)(RBActorWrapper)>("ValidateTargetTrace", &TargetedPickup::ValidateTargetTrace);
	cl_TargetedPickup.set<bool(TargetedPickup::*)(RBActorWrapper)>("ValidateTarget2", &TargetedPickup::ValidateTarget2);
	cl_TargetedPickup.set<RBActorWrapper(TargetedPickup::*)()>("GetTarget2", &TargetedPickup::GetTarget2);

	module.set("TargetedPickup", cl_TargetedPickup);
}
