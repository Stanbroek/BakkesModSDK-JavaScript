// JavaScript BakkesMod v8pp bindings edits:
//  - removed ClubMember::paddingForReasons, padding array. (ClubDetailsWrapper.cpp)
//  - removed GameWrapper::GetGUIManager, ImGui not supported. (GameWrapper.cpp)
//  - removed GameWrapper::pimpl non copyable. (GameWrapper.cpp)
//  * removed Vector::init<FVector>, incomplete type. (WrapperStructs.cpp)
//  * removed Rotator::init<FRotator>, incomplete type. (WrapperStructs.cpp)
//  - removed first CVarManagerWrapper::registerNotifier function, typedefed arg. (CVarManagerWrapper.cpp)
//  - removed all CVarWrapper::bindTo functions. (cvarwrapper.cpp)
//  - removed all mat4x4 functions, typedef stuff. (linmath.cpp)
//  * exposed export_values. (wrapperstructs.cpp)
//  - edited stuff. (bakkesmodplugin.cpp)
//	  - removed all typedef functions.
//  * added exception catchers to lambda functions. (CVarManagerWrapper.cpp and GameWrapper.cpp)
//  * removed ArrayWrapper<BoostPickupWrapper>. (arraywrapper.cpp)
// New edits:
//  - removed function with pointer argument. (OverrideParams in GameWrapper.cpp)
//  - removed function with unique_ptr return type. (RegisterMMRNotifier in MMRWrapper.cpp)
//  - removed function with shared_ptr return type. (GetLoadedPlugins in PluginManagerWrapper.cpp)

// Ugly stuff:
//  - changed functions with non const reference arguments. (CertifiedStatDatabaseWrapper.cpp)
//  - changed functions with non const reference arguments. (DataAssetDatabaseWrapper.cpp)
//  - changed functions with non const reference arguments. (PaintDatabaseWrapper.cpp)
//  - changed functions with non const reference arguments. (SpecialEditionDatabaseWrapper.cpp)
//  - Enums do not work nicely.

// Broken stuff:
//  - Add class constructor.
//  ! Cannot take address from bitfield. (WrapperStructs.cpp)

// Unresolved external symbols:
//  - ArrayWrapper<BoostPickupWrapper>::*;
//  - GameEventWrapper::GetGameMode(void);
//  - GameEventWrapper::SetGameMode(void);
//  - GameEventWrapper::GetIdleKickTime(void);
//  - GameEventWrapper::SetIdleKickTime(float);
//  - GameEventWrapper::GetIdleKickWarningTime(void);
//  - GameEventWrapper::SetIdleKickWarningTime(float);
//  - GameEventWrapper::KickSplitscreenIdlers(void);
//  - GameEventWrapper::KickIdlers(void);
//  - GameEventWrapper::StopIdleKickTimer(void);
//  - GameEventWrapper::StartIdleKickTimer(float);
//  - ServerWrapper::GetLastTrialTime(void);
//  - ServerWrapper::SetLastTrialTime(int);
//  - ServerWrapper::GetbKickOnTrialEnd(void);
//  - ServerWrapper::SetbKickOnTrialEnd(unsigned long);
//  - ServerWrapper::GetKickIdleReplayOffset(void);
//  - ServerWrapper::SetKickIdleReplayOffset(float);
//  - ServerWrapper::WaitForBallOnGround(void);
//  - ServerWrapper::BallHitGround(struct Vector&);
//  - ServerWrapper::HandleBallHitGround(class BallWrapper, struct Vector&, struct Vector&);
//  - ServerWrapper::HandleBallHitGroundTimeout(void);
//  - BoostWrapper::GetbUnlimitedBoost(void);
//  - BoostWrapper::SetbUnlimitedBoost(unsigned long);
//  - PriWrapper::GetbDeveloper(void);
//  - PriWrapper::SetbDeveloper(unsigned long);
//  - PriWrapper::GetbPlayedWithGamepad(void);
//  - PriWrapper::SetbPlayedWithGamepad(unsigned long);
//  - PriWrapper::GetTotalXP(void);
//  - PriWrapper::SetTotalXP(int);
//  - PriWrapper::GetXpLevel(void);
//  - PriWrapper::SetXpLevel(int);
//  - PriWrapper::SetXPInfo(int, int);
//  - PriWrapper::SetTotalXP2(int);
//  - BasketballPickup::*;
//  - GravityPickup::HandleHitBall(class CarWrapper, class BallWrapper);
//  - VelcroPickup::HandleHitBall(class CarWrapper, class BallWrapper);
//  - PlayerControllerWrapper::GetbPendingIdleKick(void);
//  - PlayerControllerWrapper::SetbPendingIdleKick(unsigned long);
//  - PlayerControllerWrapper::OnPendingIdleKickChanged(void);
//  - PlayerControllerWrapper::SetPendingIdleKick(unsigned long);
//  - PlayerControllerWrapper::KickTrialPlayer(void);
//  - PlayerControllerWrapper::RemoveChatBan(void);
//  - PlayerControllerWrapper::ApplyChatBan(unsigned __int64);
//  - PlayerControllerWrapper::EventPendingIdleKickChanged(class PlayerControllerWrapper);

#include "JavaScriptPlugin.h"

#include "../Scripts/out/v8pp-module/bindings.h"


void init_bakkesmod(v8::Local<v8::Object> exports, [[maybe_unused]] v8::Local<v8::Value> module, v8::Local<v8::Context> context, [[maybe_unused]] void* priv)
{
    BM_TRACE_LOG("~~LOADING BAKKESMOD~~");

    v8::Isolate* isolate = v8::Isolate::GetCurrent();
    v8pp::module bakkesmod(isolate);

    node::Environment* env = node::GetCurrentEnvironment(context);
    BM_TRACE_LOG("{:p}", static_cast<void*>(env));

    bind_bakkesmod(isolate, bakkesmod);
    BM_TRACE_LOG("{:d}", v8pp::detail::instances.size());

    v8pp::class_<CVarManagerWrapper, v8pp::raw_ptr_traits>::reference_external(isolate, GlobalCVarManager_ptr);
    bakkesmod.set("cvarManager", GlobalCVarManager_ptr, true);
    v8pp::class_<GameWrapper, v8pp::raw_ptr_traits>::reference_external(isolate, GlobalGameWrapper_ptr);
    bakkesmod.set("gameWrapper", GlobalGameWrapper_ptr, true);

    bakkesmod.set_const("__version__", "1.51");

    exports->SetPrototype(context, bakkesmod.new_instance()).Check();

    node::AtExit(env, [](void* param) {
        BM_TRACE_LOG("~~UNLOADING BAKKESMOD~~");
        BM_TRACE_LOG("{:p}", param);
        v8pp::cleanup(static_cast<node::Environment*>(param));
        BM_TRACE_LOG("{:d}", v8pp::detail::instances.size());
    }, env);
}

NODE_MODULE_LINKED(bakkesmod, init_bakkesmod);
//NODE_MODULE_CONTEXT_AWARE_INTERNAL(bakkesmod, init_bakkesmod);
