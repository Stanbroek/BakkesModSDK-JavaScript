void bind_ActorWrapper([[maybe_unused]] v8::Isolate* isolate, v8pp::module& module)
{

	v8pp::class_<ActorWrapper> cl_ActorWrapper(isolate);
	cl_ActorWrapper.inherit<ObjectWrapper>();
	cl_ActorWrapper.ctor<uintptr_t>();
	cl_ActorWrapper.set<Vector(ActorWrapper::*)()>("GetLocation", &ActorWrapper::GetLocation);
	cl_ActorWrapper.set<void(ActorWrapper::*)(Vector const)>("SetLocation", &ActorWrapper::SetLocation);
	cl_ActorWrapper.set<Vector(ActorWrapper::*)()>("GetVelocity", &ActorWrapper::GetVelocity);
	cl_ActorWrapper.set<void(ActorWrapper::*)(Vector const)>("SetVelocity", &ActorWrapper::SetVelocity);
	cl_ActorWrapper.set<void(ActorWrapper::*)(Vector const)>("AddVelocity", &ActorWrapper::AddVelocity);
	cl_ActorWrapper.set<Rotator(ActorWrapper::*)()>("GetRotation", &ActorWrapper::GetRotation);
	cl_ActorWrapper.set<void(ActorWrapper::*)(Rotator const)>("SetRotation", &ActorWrapper::SetRotation);
	cl_ActorWrapper.set<void(ActorWrapper::*)(Vector const)>("SetTorque", &ActorWrapper::SetTorque);
	cl_ActorWrapper.set<void(ActorWrapper::*)()>("Stop", &ActorWrapper::Stop);
	cl_ActorWrapper.set<Vector(ActorWrapper::*)()>("GetAngularVelocity", &ActorWrapper::GetAngularVelocity);
	cl_ActorWrapper.set<void(ActorWrapper::*)(Vector const, bool)>("SetAngularVelocity", &ActorWrapper::SetAngularVelocity);
	cl_ActorWrapper.set<bool(ActorWrapper::*)()>("IsNull", &ActorWrapper::IsNull);
	cl_ActorWrapper.set<WorldInfoWrapper(ActorWrapper::*)()>("GetWorldInfo", &ActorWrapper::GetWorldInfo);
	cl_ActorWrapper.set<float(ActorWrapper::*)()>("GetDrawScale", &ActorWrapper::GetDrawScale);
	cl_ActorWrapper.set<void(ActorWrapper::*)(float)>("SetDrawScale", &ActorWrapper::SetDrawScale);
	cl_ActorWrapper.set<Vector(ActorWrapper::*)()>("GetDrawScale3D", &ActorWrapper::GetDrawScale3D);
	cl_ActorWrapper.set<void(ActorWrapper::*)(Vector)>("SetDrawScale3D", &ActorWrapper::SetDrawScale3D);
	cl_ActorWrapper.set<Vector(ActorWrapper::*)()>("GetPrePivot", &ActorWrapper::GetPrePivot);
	cl_ActorWrapper.set<void(ActorWrapper::*)(Vector)>("SetPrePivot", &ActorWrapper::SetPrePivot);
	cl_ActorWrapper.set<UnrealColor(ActorWrapper::*)()>("GetEditorIconColor", &ActorWrapper::GetEditorIconColor);
	cl_ActorWrapper.set<void(ActorWrapper::*)(UnrealColor)>("SetEditorIconColor", &ActorWrapper::SetEditorIconColor);
	cl_ActorWrapper.set<float(ActorWrapper::*)()>("GetCustomTimeDilation", &ActorWrapper::GetCustomTimeDilation);
	cl_ActorWrapper.set<void(ActorWrapper::*)(float)>("SetCustomTimeDilation", &ActorWrapper::SetCustomTimeDilation);
	cl_ActorWrapper.set<unsigned char(ActorWrapper::*)()>("GetPhysics", &ActorWrapper::GetPhysics);
	cl_ActorWrapper.set<void(ActorWrapper::*)(unsigned char)>("SetPhysics", &ActorWrapper::SetPhysics);
	cl_ActorWrapper.set<unsigned char(ActorWrapper::*)()>("GetRemoteRole", &ActorWrapper::GetRemoteRole);
	cl_ActorWrapper.set<void(ActorWrapper::*)(unsigned char)>("SetRemoteRole", &ActorWrapper::SetRemoteRole);
	cl_ActorWrapper.set<unsigned char(ActorWrapper::*)()>("GetRole", &ActorWrapper::GetRole);
	cl_ActorWrapper.set<void(ActorWrapper::*)(unsigned char)>("SetRole", &ActorWrapper::SetRole);
	cl_ActorWrapper.set<unsigned char(ActorWrapper::*)()>("GetCollisionType", &ActorWrapper::GetCollisionType);
	cl_ActorWrapper.set<void(ActorWrapper::*)(unsigned char)>("SetCollisionType", &ActorWrapper::SetCollisionType);
	cl_ActorWrapper.set<unsigned char(ActorWrapper::*)()>("GetReplicatedCollisionType", &ActorWrapper::GetReplicatedCollisionType);
	cl_ActorWrapper.set<void(ActorWrapper::*)(unsigned char)>("SetReplicatedCollisionType", &ActorWrapper::SetReplicatedCollisionType);
	cl_ActorWrapper.set<ActorWrapper(ActorWrapper::*)()>("GetOwner", &ActorWrapper::GetOwner);
	cl_ActorWrapper.set<ActorWrapper(ActorWrapper::*)()>("GetBase", &ActorWrapper::GetBase);
	cl_ActorWrapper.set<long unsigned int(ActorWrapper::*)()>("GetbStatic", &ActorWrapper::GetbStatic);
	cl_ActorWrapper.set<long unsigned int(ActorWrapper::*)()>("GetbHidden", &ActorWrapper::GetbHidden);
	cl_ActorWrapper.set<long unsigned int(ActorWrapper::*)()>("GetbHiddenSelf", &ActorWrapper::GetbHiddenSelf);
	cl_ActorWrapper.set<void(ActorWrapper::*)(long unsigned int)>("SetbHiddenSelf", &ActorWrapper::SetbHiddenSelf);
	cl_ActorWrapper.set<long unsigned int(ActorWrapper::*)()>("GetbNoDelete", &ActorWrapper::GetbNoDelete);
	cl_ActorWrapper.set<void(ActorWrapper::*)(long unsigned int)>("SetbNoDelete", &ActorWrapper::SetbNoDelete);
	cl_ActorWrapper.set<long unsigned int(ActorWrapper::*)()>("GetbDeleteMe", &ActorWrapper::GetbDeleteMe);
	cl_ActorWrapper.set<void(ActorWrapper::*)(long unsigned int)>("SetbDeleteMe", &ActorWrapper::SetbDeleteMe);
	cl_ActorWrapper.set<long unsigned int(ActorWrapper::*)()>("GetbTicked", &ActorWrapper::GetbTicked);
	cl_ActorWrapper.set<void(ActorWrapper::*)(long unsigned int)>("SetbTicked", &ActorWrapper::SetbTicked);
	cl_ActorWrapper.set<long unsigned int(ActorWrapper::*)()>("GetbOnlyOwnerSee", &ActorWrapper::GetbOnlyOwnerSee);
	cl_ActorWrapper.set<void(ActorWrapper::*)(long unsigned int)>("SetbOnlyOwnerSee", &ActorWrapper::SetbOnlyOwnerSee);
	cl_ActorWrapper.set<long unsigned int(ActorWrapper::*)()>("GetbTickIsDisabled", &ActorWrapper::GetbTickIsDisabled);
	cl_ActorWrapper.set<void(ActorWrapper::*)(long unsigned int)>("SetbTickIsDisabled", &ActorWrapper::SetbTickIsDisabled);
	cl_ActorWrapper.set<long unsigned int(ActorWrapper::*)()>("GetbWorldGeometry", &ActorWrapper::GetbWorldGeometry);
	cl_ActorWrapper.set<void(ActorWrapper::*)(long unsigned int)>("SetbWorldGeometry", &ActorWrapper::SetbWorldGeometry);
	cl_ActorWrapper.set<long unsigned int(ActorWrapper::*)()>("GetbIgnoreRigidBodyPawns", &ActorWrapper::GetbIgnoreRigidBodyPawns);
	cl_ActorWrapper.set<void(ActorWrapper::*)(long unsigned int)>("SetbIgnoreRigidBodyPawns", &ActorWrapper::SetbIgnoreRigidBodyPawns);
	cl_ActorWrapper.set<long unsigned int(ActorWrapper::*)()>("GetbOrientOnSlope", &ActorWrapper::GetbOrientOnSlope);
	cl_ActorWrapper.set<void(ActorWrapper::*)(long unsigned int)>("SetbOrientOnSlope", &ActorWrapper::SetbOrientOnSlope);
	cl_ActorWrapper.set<long unsigned int(ActorWrapper::*)()>("GetbIsMoving", &ActorWrapper::GetbIsMoving);
	cl_ActorWrapper.set<long unsigned int(ActorWrapper::*)()>("GetbAlwaysEncroachCheck", &ActorWrapper::GetbAlwaysEncroachCheck);
	cl_ActorWrapper.set<void(ActorWrapper::*)(long unsigned int)>("SetbAlwaysEncroachCheck", &ActorWrapper::SetbAlwaysEncroachCheck);
	cl_ActorWrapper.set<long unsigned int(ActorWrapper::*)()>("GetbHasAlternateTargetLocation", &ActorWrapper::GetbHasAlternateTargetLocation);
	cl_ActorWrapper.set<long unsigned int(ActorWrapper::*)()>("GetbAlwaysRelevant", &ActorWrapper::GetbAlwaysRelevant);
	cl_ActorWrapper.set<long unsigned int(ActorWrapper::*)()>("GetbReplicateInstigator", &ActorWrapper::GetbReplicateInstigator);
	cl_ActorWrapper.set<long unsigned int(ActorWrapper::*)()>("GetbReplicateMovement", &ActorWrapper::GetbReplicateMovement);
	cl_ActorWrapper.set<long unsigned int(ActorWrapper::*)()>("GetbUpdateSimulatedPosition", &ActorWrapper::GetbUpdateSimulatedPosition);
	cl_ActorWrapper.set<void(ActorWrapper::*)(long unsigned int)>("SetbUpdateSimulatedPosition", &ActorWrapper::SetbUpdateSimulatedPosition);
	cl_ActorWrapper.set<long unsigned int(ActorWrapper::*)()>("GetbDemoRecording", &ActorWrapper::GetbDemoRecording);
	cl_ActorWrapper.set<void(ActorWrapper::*)(long unsigned int)>("SetbDemoRecording", &ActorWrapper::SetbDemoRecording);
	cl_ActorWrapper.set<long unsigned int(ActorWrapper::*)()>("GetbDemoOwner", &ActorWrapper::GetbDemoOwner);
	cl_ActorWrapper.set<void(ActorWrapper::*)(long unsigned int)>("SetbDemoOwner", &ActorWrapper::SetbDemoOwner);
	cl_ActorWrapper.set<long unsigned int(ActorWrapper::*)()>("GetbForceDemoRelevant", &ActorWrapper::GetbForceDemoRelevant);
	cl_ActorWrapper.set<void(ActorWrapper::*)(long unsigned int)>("SetbForceDemoRelevant", &ActorWrapper::SetbForceDemoRelevant);
	cl_ActorWrapper.set<long unsigned int(ActorWrapper::*)()>("GetbNetInitialRotation", &ActorWrapper::GetbNetInitialRotation);
	cl_ActorWrapper.set<void(ActorWrapper::*)(long unsigned int)>("SetbNetInitialRotation", &ActorWrapper::SetbNetInitialRotation);
	cl_ActorWrapper.set<long unsigned int(ActorWrapper::*)()>("GetbReplicateRigidBodyLocation", &ActorWrapper::GetbReplicateRigidBodyLocation);
	cl_ActorWrapper.set<void(ActorWrapper::*)(long unsigned int)>("SetbReplicateRigidBodyLocation", &ActorWrapper::SetbReplicateRigidBodyLocation);
	cl_ActorWrapper.set<long unsigned int(ActorWrapper::*)()>("GetbKillDuringLevelTransition", &ActorWrapper::GetbKillDuringLevelTransition);
	cl_ActorWrapper.set<void(ActorWrapper::*)(long unsigned int)>("SetbKillDuringLevelTransition", &ActorWrapper::SetbKillDuringLevelTransition);
	cl_ActorWrapper.set<long unsigned int(ActorWrapper::*)()>("GetbPostRenderIfNotVisible", &ActorWrapper::GetbPostRenderIfNotVisible);
	cl_ActorWrapper.set<void(ActorWrapper::*)(long unsigned int)>("SetbPostRenderIfNotVisible", &ActorWrapper::SetbPostRenderIfNotVisible);
	cl_ActorWrapper.set<long unsigned int(ActorWrapper::*)()>("GetbForceNetUpdate", &ActorWrapper::GetbForceNetUpdate);
	cl_ActorWrapper.set<void(ActorWrapper::*)(long unsigned int)>("SetbForceNetUpdate", &ActorWrapper::SetbForceNetUpdate);
	cl_ActorWrapper.set<long unsigned int(ActorWrapper::*)()>("GetbForcePacketUpdate", &ActorWrapper::GetbForcePacketUpdate);
	cl_ActorWrapper.set<void(ActorWrapper::*)(long unsigned int)>("SetbForcePacketUpdate", &ActorWrapper::SetbForcePacketUpdate);
	cl_ActorWrapper.set<long unsigned int(ActorWrapper::*)()>("GetbPendingNetUpdate", &ActorWrapper::GetbPendingNetUpdate);
	cl_ActorWrapper.set<void(ActorWrapper::*)(long unsigned int)>("SetbPendingNetUpdate", &ActorWrapper::SetbPendingNetUpdate);
	cl_ActorWrapper.set<long unsigned int(ActorWrapper::*)()>("GetbGameRelevant", &ActorWrapper::GetbGameRelevant);
	cl_ActorWrapper.set<void(ActorWrapper::*)(long unsigned int)>("SetbGameRelevant", &ActorWrapper::SetbGameRelevant);
	cl_ActorWrapper.set<long unsigned int(ActorWrapper::*)()>("GetbMovable", &ActorWrapper::GetbMovable);
	cl_ActorWrapper.set<void(ActorWrapper::*)(long unsigned int)>("SetbMovable", &ActorWrapper::SetbMovable);
	cl_ActorWrapper.set<long unsigned int(ActorWrapper::*)()>("GetbCanTeleport", &ActorWrapper::GetbCanTeleport);
	cl_ActorWrapper.set<void(ActorWrapper::*)(long unsigned int)>("SetbCanTeleport", &ActorWrapper::SetbCanTeleport);
	cl_ActorWrapper.set<long unsigned int(ActorWrapper::*)()>("GetbAlwaysTick", &ActorWrapper::GetbAlwaysTick);
	cl_ActorWrapper.set<void(ActorWrapper::*)(long unsigned int)>("SetbAlwaysTick", &ActorWrapper::SetbAlwaysTick);
	cl_ActorWrapper.set<long unsigned int(ActorWrapper::*)()>("GetbBlocksNavigation", &ActorWrapper::GetbBlocksNavigation);
	cl_ActorWrapper.set<void(ActorWrapper::*)(long unsigned int)>("SetbBlocksNavigation", &ActorWrapper::SetbBlocksNavigation);
	cl_ActorWrapper.set<long unsigned int(ActorWrapper::*)()>("GetBlockRigidBody", &ActorWrapper::GetBlockRigidBody);
	cl_ActorWrapper.set<void(ActorWrapper::*)(long unsigned int)>("SetBlockRigidBody", &ActorWrapper::SetBlockRigidBody);
	cl_ActorWrapper.set<long unsigned int(ActorWrapper::*)()>("GetbCollideWhenPlacing", &ActorWrapper::GetbCollideWhenPlacing);
	cl_ActorWrapper.set<void(ActorWrapper::*)(long unsigned int)>("SetbCollideWhenPlacing", &ActorWrapper::SetbCollideWhenPlacing);
	cl_ActorWrapper.set<long unsigned int(ActorWrapper::*)()>("GetbCollideActors", &ActorWrapper::GetbCollideActors);
	cl_ActorWrapper.set<void(ActorWrapper::*)(long unsigned int)>("SetbCollideActors", &ActorWrapper::SetbCollideActors);
	cl_ActorWrapper.set<long unsigned int(ActorWrapper::*)()>("GetbCollideWorld", &ActorWrapper::GetbCollideWorld);
	cl_ActorWrapper.set<void(ActorWrapper::*)(long unsigned int)>("SetbCollideWorld", &ActorWrapper::SetbCollideWorld);
	cl_ActorWrapper.set<long unsigned int(ActorWrapper::*)()>("GetbCollideComplex", &ActorWrapper::GetbCollideComplex);
	cl_ActorWrapper.set<void(ActorWrapper::*)(long unsigned int)>("SetbCollideComplex", &ActorWrapper::SetbCollideComplex);
	cl_ActorWrapper.set<long unsigned int(ActorWrapper::*)()>("GetbBlockActors", &ActorWrapper::GetbBlockActors);
	cl_ActorWrapper.set<void(ActorWrapper::*)(long unsigned int)>("SetbBlockActors", &ActorWrapper::SetbBlockActors);
	cl_ActorWrapper.set<long unsigned int(ActorWrapper::*)()>("GetbBlocksTeleport", &ActorWrapper::GetbBlocksTeleport);
	cl_ActorWrapper.set<void(ActorWrapper::*)(long unsigned int)>("SetbBlocksTeleport", &ActorWrapper::SetbBlocksTeleport);
	cl_ActorWrapper.set<long unsigned int(ActorWrapper::*)()>("GetbPhysRigidBodyOutOfWorldCheck", &ActorWrapper::GetbPhysRigidBodyOutOfWorldCheck);
	cl_ActorWrapper.set<void(ActorWrapper::*)(long unsigned int)>("SetbPhysRigidBodyOutOfWorldCheck", &ActorWrapper::SetbPhysRigidBodyOutOfWorldCheck);
	cl_ActorWrapper.set<long unsigned int(ActorWrapper::*)()>("GetbComponentOutsideWorld", &ActorWrapper::GetbComponentOutsideWorld);
	cl_ActorWrapper.set<long unsigned int(ActorWrapper::*)()>("GetbRigidBodyWasAwake", &ActorWrapper::GetbRigidBodyWasAwake);
	cl_ActorWrapper.set<void(ActorWrapper::*)(long unsigned int)>("SetbRigidBodyWasAwake", &ActorWrapper::SetbRigidBodyWasAwake);
	cl_ActorWrapper.set<long unsigned int(ActorWrapper::*)()>("GetbCallRigidBodyWakeEvents", &ActorWrapper::GetbCallRigidBodyWakeEvents);
	cl_ActorWrapper.set<void(ActorWrapper::*)(long unsigned int)>("SetbCallRigidBodyWakeEvents", &ActorWrapper::SetbCallRigidBodyWakeEvents);
	cl_ActorWrapper.set<long unsigned int(ActorWrapper::*)()>("GetbBounce", &ActorWrapper::GetbBounce);
	cl_ActorWrapper.set<void(ActorWrapper::*)(long unsigned int)>("SetbBounce", &ActorWrapper::SetbBounce);
	cl_ActorWrapper.set<long unsigned int(ActorWrapper::*)()>("GetbEditable", &ActorWrapper::GetbEditable);
	cl_ActorWrapper.set<void(ActorWrapper::*)(long unsigned int)>("SetbEditable", &ActorWrapper::SetbEditable);
	cl_ActorWrapper.set<long unsigned int(ActorWrapper::*)()>("GetbLockLocation", &ActorWrapper::GetbLockLocation);
	cl_ActorWrapper.set<void(ActorWrapper::*)(long unsigned int)>("SetbLockLocation", &ActorWrapper::SetbLockLocation);
	cl_ActorWrapper.set<float(ActorWrapper::*)()>("GetNetUpdateTime", &ActorWrapper::GetNetUpdateTime);
	cl_ActorWrapper.set<void(ActorWrapper::*)(float)>("SetNetUpdateTime", &ActorWrapper::SetNetUpdateTime);
	cl_ActorWrapper.set<float(ActorWrapper::*)()>("GetNetUpdateFrequency", &ActorWrapper::GetNetUpdateFrequency);
	cl_ActorWrapper.set<void(ActorWrapper::*)(float)>("SetNetUpdateFrequency", &ActorWrapper::SetNetUpdateFrequency);
	cl_ActorWrapper.set<float(ActorWrapper::*)()>("GetNetPriority", &ActorWrapper::GetNetPriority);
	cl_ActorWrapper.set<void(ActorWrapper::*)(float)>("SetNetPriority", &ActorWrapper::SetNetPriority);
	cl_ActorWrapper.set<float(ActorWrapper::*)()>("GetLastNetUpdateTime", &ActorWrapper::GetLastNetUpdateTime);
	cl_ActorWrapper.set<float(ActorWrapper::*)()>("GetLastForcePacketUpdateTime", &ActorWrapper::GetLastForcePacketUpdateTime);
	cl_ActorWrapper.set<void(ActorWrapper::*)(float)>("SetLastForcePacketUpdateTime", &ActorWrapper::SetLastForcePacketUpdateTime);
	cl_ActorWrapper.set<float(ActorWrapper::*)()>("GetTimeSinceLastTick", &ActorWrapper::GetTimeSinceLastTick);
	cl_ActorWrapper.set<float(ActorWrapper::*)()>("GetLifeSpan", &ActorWrapper::GetLifeSpan);
	cl_ActorWrapper.set<float(ActorWrapper::*)()>("GetCreationTime", &ActorWrapper::GetCreationTime);
	cl_ActorWrapper.set<float(ActorWrapper::*)()>("GetLastRenderTime", &ActorWrapper::GetLastRenderTime);
	cl_ActorWrapper.set<long long unsigned int(ActorWrapper::*)()>("GetHiddenEditorViews", &ActorWrapper::GetHiddenEditorViews);
	cl_ActorWrapper.set<void(ActorWrapper::*)(long long unsigned int)>("SetHiddenEditorViews", &ActorWrapper::SetHiddenEditorViews);
	cl_ActorWrapper.set<ArrayWrapper<ActorWrapper>(ActorWrapper::*)()>("GetAttached", &ActorWrapper::GetAttached);
	cl_ActorWrapper.set<Vector(ActorWrapper::*)()>("GetRelativeLocation", &ActorWrapper::GetRelativeLocation);
	cl_ActorWrapper.set<void(ActorWrapper::*)(Vector)>("SetRelativeLocation", &ActorWrapper::SetRelativeLocation);
	cl_ActorWrapper.set<Rotator(ActorWrapper::*)()>("GetRelativeRotation", &ActorWrapper::GetRelativeRotation);
	cl_ActorWrapper.set<void(ActorWrapper::*)(Rotator)>("SetRelativeRotation", &ActorWrapper::SetRelativeRotation);
	cl_ActorWrapper.set<PrimitiveComponentWrapper(ActorWrapper::*)()>("GetCollisionComponent", &ActorWrapper::GetCollisionComponent);
	cl_ActorWrapper.set<void(ActorWrapper::*)()>("ForceNetUpdatePacket", &ActorWrapper::ForceNetUpdatePacket);
	cl_ActorWrapper.set<void(ActorWrapper::*)()>("ForceNetUpdate2", &ActorWrapper::ForceNetUpdate2);
	cl_ActorWrapper.set<bool(ActorWrapper::*)(Vector &, Vector &, Vector &, Vector &, float, float, float *)>("WillOverlap", &ActorWrapper::WillOverlap);
	cl_ActorWrapper.set<void(ActorWrapper::*)()>("eventReplicationEnded", &ActorWrapper::eventReplicationEnded);
	cl_ActorWrapper.set<void(ActorWrapper::*)()>("eventPostDemoRewind", &ActorWrapper::eventPostDemoRewind);
	cl_ActorWrapper.set<bool(ActorWrapper::*)(long unsigned int)>("IsInPersistentLevel", &ActorWrapper::IsInPersistentLevel);
	cl_ActorWrapper.set<void(ActorWrapper::*)(Vector &)>("SetHUDLocation", &ActorWrapper::SetHUDLocation);
	cl_ActorWrapper.set<void(ActorWrapper::*)()>("eventSpawnedByKismet", &ActorWrapper::eventSpawnedByKismet);
	cl_ActorWrapper.set<Vector(ActorWrapper::*)(ActorWrapper, long unsigned int)>("GetTargetLocation", &ActorWrapper::GetTargetLocation);
	cl_ActorWrapper.set<unsigned char(ActorWrapper::*)()>("eventScriptGetTeamNum", &ActorWrapper::eventScriptGetTeamNum);
	cl_ActorWrapper.set<unsigned char(ActorWrapper::*)()>("GetTeamNum2", &ActorWrapper::GetTeamNum2);
	cl_ActorWrapper.set<bool(ActorWrapper::*)()>("IsPlayerOwned", &ActorWrapper::IsPlayerOwned);
	cl_ActorWrapper.set<bool(ActorWrapper::*)()>("IsStationary", &ActorWrapper::IsStationary);
	cl_ActorWrapper.set<void(ActorWrapper::*)(std::string)>("eventDebugMessagePlayer", &ActorWrapper::eventDebugMessagePlayer);
	cl_ActorWrapper.set<Vector(ActorWrapper::*)()>("GetGravityAcceleration", &ActorWrapper::GetGravityAcceleration);
	cl_ActorWrapper.set<Vector(ActorWrapper::*)()>("GetGravityDirection", &ActorWrapper::GetGravityDirection);
	cl_ActorWrapper.set<float(ActorWrapper::*)()>("GetGravityZ", &ActorWrapper::GetGravityZ);
	cl_ActorWrapper.set<bool(ActorWrapper::*)(ActorWrapper)>("IsOverlapping", &ActorWrapper::IsOverlapping);
	cl_ActorWrapper.set<bool(ActorWrapper::*)(Vector &)>("ContainsPoint", &ActorWrapper::ContainsPoint);
	cl_ActorWrapper.set<void(ActorWrapper::*)()>("eventFellOutOfWorld", &ActorWrapper::eventFellOutOfWorld);
	cl_ActorWrapper.set<void(ActorWrapper::*)(long unsigned int)>("SetTickIsDisabled", &ActorWrapper::SetTickIsDisabled);
	cl_ActorWrapper.set<void(ActorWrapper::*)(unsigned char)>("SetPhysics2", &ActorWrapper::SetPhysics2);
	cl_ActorWrapper.set<void(ActorWrapper::*)(long unsigned int)>("SetHidden2", &ActorWrapper::SetHidden2);
	cl_ActorWrapper.set<void(ActorWrapper::*)(std::string, float)>("ChartData", &ActorWrapper::ChartData);
	cl_ActorWrapper.set<void(ActorWrapper::*)(Vector &, std::string, ActorWrapper, UnrealColor &, float)>("DrawDebugString", &ActorWrapper::DrawDebugString);
	cl_ActorWrapper.set<void(ActorWrapper::*)(Vector &, Vector &, float, float, float, int, UnrealColor &, long unsigned int)>("DrawDebugCone", &ActorWrapper::DrawDebugCone);
	cl_ActorWrapper.set<Vector(ActorWrapper::*)(ActorWrapper)>("GetAggregateBaseVelocity", &ActorWrapper::GetAggregateBaseVelocity);
	cl_ActorWrapper.set<bool(ActorWrapper::*)(ActorWrapper)>("IsOwnedBy", &ActorWrapper::IsOwnedBy);
	cl_ActorWrapper.set<bool(ActorWrapper::*)(ActorWrapper)>("IsBasedOn", &ActorWrapper::IsBasedOn);
	cl_ActorWrapper.set<float(ActorWrapper::*)()>("GetTerminalVelocity", &ActorWrapper::GetTerminalVelocity);

	module.set("ActorWrapper", cl_ActorWrapper);
}
