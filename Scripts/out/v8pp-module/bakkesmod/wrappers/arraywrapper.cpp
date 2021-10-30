void bind_arraywrapper([[maybe_unused]] v8::Isolate* isolate, v8pp::module& module)
{

	v8pp::class_<ArrayWrapper<ActorWrapper>> cl_ArrayWrapper_ActorWrapper(isolate);
	cl_ArrayWrapper_ActorWrapper.ctor<uintptr_t>();
	cl_ArrayWrapper_ActorWrapper.set<int(ArrayWrapper<ActorWrapper>::*)()>("Count", &ArrayWrapper<ActorWrapper>::Count);
	cl_ArrayWrapper_ActorWrapper.set<ActorWrapper(ArrayWrapper<ActorWrapper>::*)(int)>("Get", &ArrayWrapper<ActorWrapper>::Get);
	cl_ArrayWrapper_ActorWrapper.set<bool(ArrayWrapper<ActorWrapper>::*)()>("IsNull", &ArrayWrapper<ActorWrapper>::IsNull);

	module.set("ArrayWrapper<ActorWrapper>", cl_ArrayWrapper_ActorWrapper);

	v8pp::class_<ArrayWrapper<CarComponentWrapper>> cl_ArrayWrapper_CarComponentWrapper(isolate);
	cl_ArrayWrapper_CarComponentWrapper.ctor<uintptr_t>();
	cl_ArrayWrapper_CarComponentWrapper.set<int(ArrayWrapper<CarComponentWrapper>::*)()>("Count", &ArrayWrapper<CarComponentWrapper>::Count);
	cl_ArrayWrapper_CarComponentWrapper.set<CarComponentWrapper(ArrayWrapper<CarComponentWrapper>::*)(int)>("Get", &ArrayWrapper<CarComponentWrapper>::Get);
	cl_ArrayWrapper_CarComponentWrapper.set<bool(ArrayWrapper<CarComponentWrapper>::*)()>("IsNull", &ArrayWrapper<CarComponentWrapper>::IsNull);

	module.set("ArrayWrapper<CarComponentWrapper>", cl_ArrayWrapper_CarComponentWrapper);

	v8pp::class_<ArrayWrapper<PriWrapper>> cl_ArrayWrapper_PriWrapper(isolate);
	cl_ArrayWrapper_PriWrapper.ctor<uintptr_t>();
	cl_ArrayWrapper_PriWrapper.set<int(ArrayWrapper<PriWrapper>::*)()>("Count", &ArrayWrapper<PriWrapper>::Count);
	cl_ArrayWrapper_PriWrapper.set<PriWrapper(ArrayWrapper<PriWrapper>::*)(int)>("Get", &ArrayWrapper<PriWrapper>::Get);
	cl_ArrayWrapper_PriWrapper.set<bool(ArrayWrapper<PriWrapper>::*)()>("IsNull", &ArrayWrapper<PriWrapper>::IsNull);

	module.set("ArrayWrapper<PriWrapper>", cl_ArrayWrapper_PriWrapper);

	v8pp::class_<ArrayWrapper<TeamWrapper>> cl_ArrayWrapper_TeamWrapper(isolate);
	cl_ArrayWrapper_TeamWrapper.ctor<uintptr_t>();
	cl_ArrayWrapper_TeamWrapper.set<int(ArrayWrapper<TeamWrapper>::*)()>("Count", &ArrayWrapper<TeamWrapper>::Count);
	cl_ArrayWrapper_TeamWrapper.set<TeamWrapper(ArrayWrapper<TeamWrapper>::*)(int)>("Get", &ArrayWrapper<TeamWrapper>::Get);
	cl_ArrayWrapper_TeamWrapper.set<bool(ArrayWrapper<TeamWrapper>::*)()>("IsNull", &ArrayWrapper<TeamWrapper>::IsNull);

	module.set("ArrayWrapper<TeamWrapper>", cl_ArrayWrapper_TeamWrapper);

	v8pp::class_<ArrayWrapper<CarWrapper>> cl_ArrayWrapper_CarWrapper(isolate);
	cl_ArrayWrapper_CarWrapper.ctor<uintptr_t>();
	cl_ArrayWrapper_CarWrapper.set<int(ArrayWrapper<CarWrapper>::*)()>("Count", &ArrayWrapper<CarWrapper>::Count);
	cl_ArrayWrapper_CarWrapper.set<CarWrapper(ArrayWrapper<CarWrapper>::*)(int)>("Get", &ArrayWrapper<CarWrapper>::Get);
	cl_ArrayWrapper_CarWrapper.set<bool(ArrayWrapper<CarWrapper>::*)()>("IsNull", &ArrayWrapper<CarWrapper>::IsNull);

	module.set("ArrayWrapper<CarWrapper>", cl_ArrayWrapper_CarWrapper);

	v8pp::class_<ArrayWrapper<BallWrapper>> cl_ArrayWrapper_BallWrapper(isolate);
	cl_ArrayWrapper_BallWrapper.ctor<uintptr_t>();
	cl_ArrayWrapper_BallWrapper.set<int(ArrayWrapper<BallWrapper>::*)()>("Count", &ArrayWrapper<BallWrapper>::Count);
	cl_ArrayWrapper_BallWrapper.set<BallWrapper(ArrayWrapper<BallWrapper>::*)(int)>("Get", &ArrayWrapper<BallWrapper>::Get);
	cl_ArrayWrapper_BallWrapper.set<bool(ArrayWrapper<BallWrapper>::*)()>("IsNull", &ArrayWrapper<BallWrapper>::IsNull);

	module.set("ArrayWrapper<BallWrapper>", cl_ArrayWrapper_BallWrapper);

	v8pp::class_<ArrayWrapper<WheelWrapper>> cl_ArrayWrapper_WheelWrapper(isolate);
	cl_ArrayWrapper_WheelWrapper.ctor<uintptr_t>();
	cl_ArrayWrapper_WheelWrapper.set<int(ArrayWrapper<WheelWrapper>::*)()>("Count", &ArrayWrapper<WheelWrapper>::Count);
	cl_ArrayWrapper_WheelWrapper.set<WheelWrapper(ArrayWrapper<WheelWrapper>::*)(int)>("Get", &ArrayWrapper<WheelWrapper>::Get);
	cl_ArrayWrapper_WheelWrapper.set<bool(ArrayWrapper<WheelWrapper>::*)()>("IsNull", &ArrayWrapper<WheelWrapper>::IsNull);

	module.set("ArrayWrapper<WheelWrapper>", cl_ArrayWrapper_WheelWrapper);

	v8pp::class_<ArrayWrapper<RBActorWrapper>> cl_ArrayWrapper_RBActorWrapper(isolate);
	cl_ArrayWrapper_RBActorWrapper.ctor<uintptr_t>();
	cl_ArrayWrapper_RBActorWrapper.set<int(ArrayWrapper<RBActorWrapper>::*)()>("Count", &ArrayWrapper<RBActorWrapper>::Count);
	cl_ArrayWrapper_RBActorWrapper.set<RBActorWrapper(ArrayWrapper<RBActorWrapper>::*)(int)>("Get", &ArrayWrapper<RBActorWrapper>::Get);
	cl_ArrayWrapper_RBActorWrapper.set<bool(ArrayWrapper<RBActorWrapper>::*)()>("IsNull", &ArrayWrapper<RBActorWrapper>::IsNull);

	module.set("ArrayWrapper<RBActorWrapper>", cl_ArrayWrapper_RBActorWrapper);

	v8pp::class_<ArrayWrapper<GoalWrapper>> cl_ArrayWrapper_GoalWrapper(isolate);
	cl_ArrayWrapper_GoalWrapper.ctor<uintptr_t>();
	cl_ArrayWrapper_GoalWrapper.set<int(ArrayWrapper<GoalWrapper>::*)()>("Count", &ArrayWrapper<GoalWrapper>::Count);
	cl_ArrayWrapper_GoalWrapper.set<GoalWrapper(ArrayWrapper<GoalWrapper>::*)(int)>("Get", &ArrayWrapper<GoalWrapper>::Get);
	cl_ArrayWrapper_GoalWrapper.set<bool(ArrayWrapper<GoalWrapper>::*)()>("IsNull", &ArrayWrapper<GoalWrapper>::IsNull);

	module.set("ArrayWrapper<GoalWrapper>", cl_ArrayWrapper_GoalWrapper);

	v8pp::class_<ArrayWrapper<SampleHistoryWrapper>> cl_ArrayWrapper_SampleHistoryWrapper(isolate);
	cl_ArrayWrapper_SampleHistoryWrapper.ctor<uintptr_t>();
	cl_ArrayWrapper_SampleHistoryWrapper.set<int(ArrayWrapper<SampleHistoryWrapper>::*)()>("Count", &ArrayWrapper<SampleHistoryWrapper>::Count);
	cl_ArrayWrapper_SampleHistoryWrapper.set<SampleHistoryWrapper(ArrayWrapper<SampleHistoryWrapper>::*)(int)>("Get", &ArrayWrapper<SampleHistoryWrapper>::Get);
	cl_ArrayWrapper_SampleHistoryWrapper.set<bool(ArrayWrapper<SampleHistoryWrapper>::*)()>("IsNull", &ArrayWrapper<SampleHistoryWrapper>::IsNull);

	module.set("ArrayWrapper<SampleHistoryWrapper>", cl_ArrayWrapper_SampleHistoryWrapper);

	v8pp::class_<ArrayWrapper<StatGraphWrapper>> cl_ArrayWrapper_StatGraphWrapper(isolate);
	cl_ArrayWrapper_StatGraphWrapper.ctor<uintptr_t>();
	cl_ArrayWrapper_StatGraphWrapper.set<int(ArrayWrapper<StatGraphWrapper>::*)()>("Count", &ArrayWrapper<StatGraphWrapper>::Count);
	cl_ArrayWrapper_StatGraphWrapper.set<StatGraphWrapper(ArrayWrapper<StatGraphWrapper>::*)(int)>("Get", &ArrayWrapper<StatGraphWrapper>::Get);
	cl_ArrayWrapper_StatGraphWrapper.set<bool(ArrayWrapper<StatGraphWrapper>::*)()>("IsNull", &ArrayWrapper<StatGraphWrapper>::IsNull);

	module.set("ArrayWrapper<StatGraphWrapper>", cl_ArrayWrapper_StatGraphWrapper);

	v8pp::class_<ArrayWrapper<ControllerWrapper>> cl_ArrayWrapper_ControllerWrapper(isolate);
	cl_ArrayWrapper_ControllerWrapper.ctor<uintptr_t>();
	cl_ArrayWrapper_ControllerWrapper.set<int(ArrayWrapper<ControllerWrapper>::*)()>("Count", &ArrayWrapper<ControllerWrapper>::Count);
	cl_ArrayWrapper_ControllerWrapper.set<ControllerWrapper(ArrayWrapper<ControllerWrapper>::*)(int)>("Get", &ArrayWrapper<ControllerWrapper>::Get);
	cl_ArrayWrapper_ControllerWrapper.set<bool(ArrayWrapper<ControllerWrapper>::*)()>("IsNull", &ArrayWrapper<ControllerWrapper>::IsNull);

	module.set("ArrayWrapper<ControllerWrapper>", cl_ArrayWrapper_ControllerWrapper);

	v8pp::class_<ArrayWrapper<PlayerControllerWrapper>> cl_ArrayWrapper_PlayerControllerWrapper(isolate);
	cl_ArrayWrapper_PlayerControllerWrapper.ctor<uintptr_t>();
	cl_ArrayWrapper_PlayerControllerWrapper.set<int(ArrayWrapper<PlayerControllerWrapper>::*)()>("Count", &ArrayWrapper<PlayerControllerWrapper>::Count);
	cl_ArrayWrapper_PlayerControllerWrapper.set<PlayerControllerWrapper(ArrayWrapper<PlayerControllerWrapper>::*)(int)>("Get", &ArrayWrapper<PlayerControllerWrapper>::Get);
	cl_ArrayWrapper_PlayerControllerWrapper.set<bool(ArrayWrapper<PlayerControllerWrapper>::*)()>("IsNull", &ArrayWrapper<PlayerControllerWrapper>::IsNull);

	module.set("ArrayWrapper<PlayerControllerWrapper>", cl_ArrayWrapper_PlayerControllerWrapper);

	v8pp::class_<ArrayWrapper<SequenceWrapper>> cl_ArrayWrapper_SequenceWrapper(isolate);
	cl_ArrayWrapper_SequenceWrapper.ctor<uintptr_t>();
	cl_ArrayWrapper_SequenceWrapper.set<int(ArrayWrapper<SequenceWrapper>::*)()>("Count", &ArrayWrapper<SequenceWrapper>::Count);
	cl_ArrayWrapper_SequenceWrapper.set<SequenceWrapper(ArrayWrapper<SequenceWrapper>::*)(int)>("Get", &ArrayWrapper<SequenceWrapper>::Get);
	cl_ArrayWrapper_SequenceWrapper.set<bool(ArrayWrapper<SequenceWrapper>::*)()>("IsNull", &ArrayWrapper<SequenceWrapper>::IsNull);

	module.set("ArrayWrapper<SequenceWrapper>", cl_ArrayWrapper_SequenceWrapper);

	v8pp::class_<ArrayWrapper<SequenceObjectWrapper>> cl_ArrayWrapper_SequenceObjectWrapper(isolate);
	cl_ArrayWrapper_SequenceObjectWrapper.ctor<uintptr_t>();
	cl_ArrayWrapper_SequenceObjectWrapper.set<int(ArrayWrapper<SequenceObjectWrapper>::*)()>("Count", &ArrayWrapper<SequenceObjectWrapper>::Count);
	cl_ArrayWrapper_SequenceObjectWrapper.set<SequenceObjectWrapper(ArrayWrapper<SequenceObjectWrapper>::*)(int)>("Get", &ArrayWrapper<SequenceObjectWrapper>::Get);
	cl_ArrayWrapper_SequenceObjectWrapper.set<bool(ArrayWrapper<SequenceObjectWrapper>::*)()>("IsNull", &ArrayWrapper<SequenceObjectWrapper>::IsNull);

	module.set("ArrayWrapper<SequenceObjectWrapper>", cl_ArrayWrapper_SequenceObjectWrapper);

	v8pp::class_<ArrayWrapper<SequenceVariableWrapper>> cl_ArrayWrapper_SequenceVariableWrapper(isolate);
	cl_ArrayWrapper_SequenceVariableWrapper.ctor<uintptr_t>();
	cl_ArrayWrapper_SequenceVariableWrapper.set<int(ArrayWrapper<SequenceVariableWrapper>::*)()>("Count", &ArrayWrapper<SequenceVariableWrapper>::Count);
	cl_ArrayWrapper_SequenceVariableWrapper.set<SequenceVariableWrapper(ArrayWrapper<SequenceVariableWrapper>::*)(int)>("Get", &ArrayWrapper<SequenceVariableWrapper>::Get);
	cl_ArrayWrapper_SequenceVariableWrapper.set<bool(ArrayWrapper<SequenceVariableWrapper>::*)()>("IsNull", &ArrayWrapper<SequenceVariableWrapper>::IsNull);

	module.set("ArrayWrapper<SequenceVariableWrapper>", cl_ArrayWrapper_SequenceVariableWrapper);

	v8pp::class_<ArrayWrapper<ProductWrapper>> cl_ArrayWrapper_ProductWrapper(isolate);
	cl_ArrayWrapper_ProductWrapper.ctor<uintptr_t>();
	cl_ArrayWrapper_ProductWrapper.set<int(ArrayWrapper<ProductWrapper>::*)()>("Count", &ArrayWrapper<ProductWrapper>::Count);
	cl_ArrayWrapper_ProductWrapper.set<ProductWrapper(ArrayWrapper<ProductWrapper>::*)(int)>("Get", &ArrayWrapper<ProductWrapper>::Get);
	cl_ArrayWrapper_ProductWrapper.set<bool(ArrayWrapper<ProductWrapper>::*)()>("IsNull", &ArrayWrapper<ProductWrapper>::IsNull);

	module.set("ArrayWrapper<ProductWrapper>", cl_ArrayWrapper_ProductWrapper);

	v8pp::class_<ArrayWrapper<OnlineProductWrapper>> cl_ArrayWrapper_OnlineProductWrapper(isolate);
	cl_ArrayWrapper_OnlineProductWrapper.ctor<uintptr_t>();
	cl_ArrayWrapper_OnlineProductWrapper.set<int(ArrayWrapper<OnlineProductWrapper>::*)()>("Count", &ArrayWrapper<OnlineProductWrapper>::Count);
	cl_ArrayWrapper_OnlineProductWrapper.set<OnlineProductWrapper(ArrayWrapper<OnlineProductWrapper>::*)(int)>("Get", &ArrayWrapper<OnlineProductWrapper>::Get);
	cl_ArrayWrapper_OnlineProductWrapper.set<bool(ArrayWrapper<OnlineProductWrapper>::*)()>("IsNull", &ArrayWrapper<OnlineProductWrapper>::IsNull);

	module.set("ArrayWrapper<OnlineProductWrapper>", cl_ArrayWrapper_OnlineProductWrapper);

	v8pp::class_<ArrayWrapper<ProductAttributeWrapper>> cl_ArrayWrapper_ProductAttributeWrapper(isolate);
	cl_ArrayWrapper_ProductAttributeWrapper.ctor<uintptr_t>();
	cl_ArrayWrapper_ProductAttributeWrapper.set<int(ArrayWrapper<ProductAttributeWrapper>::*)()>("Count", &ArrayWrapper<ProductAttributeWrapper>::Count);
	cl_ArrayWrapper_ProductAttributeWrapper.set<ProductAttributeWrapper(ArrayWrapper<ProductAttributeWrapper>::*)(int)>("Get", &ArrayWrapper<ProductAttributeWrapper>::Get);
	cl_ArrayWrapper_ProductAttributeWrapper.set<bool(ArrayWrapper<ProductAttributeWrapper>::*)()>("IsNull", &ArrayWrapper<ProductAttributeWrapper>::IsNull);

	module.set("ArrayWrapper<ProductAttributeWrapper>", cl_ArrayWrapper_ProductAttributeWrapper);

	v8pp::class_<ArrayWrapper<int>> cl_ArrayWrapper_int(isolate);
	cl_ArrayWrapper_int.ctor<uintptr_t>();
	cl_ArrayWrapper_int.set<int(ArrayWrapper<int>::*)()>("Count", &ArrayWrapper<int>::Count);
	cl_ArrayWrapper_int.set<int(ArrayWrapper<int>::*)(int)>("Get", &ArrayWrapper<int>::Get);
	cl_ArrayWrapper_int.set<bool(ArrayWrapper<int>::*)()>("IsNull", &ArrayWrapper<int>::IsNull);

	module.set("ArrayWrapper<int>", cl_ArrayWrapper_int);

	v8pp::class_<ArrayWrapper<unsigned long long>> cl_ArrayWrapper_unsigned_long_long(isolate);
	cl_ArrayWrapper_unsigned_long_long.ctor<uintptr_t>();
	cl_ArrayWrapper_unsigned_long_long.set<int(ArrayWrapper<unsigned long long>::*)()>("Count", &ArrayWrapper<unsigned long long>::Count);
	cl_ArrayWrapper_unsigned_long_long.set<long long unsigned int(ArrayWrapper<unsigned long long>::*)(int)>("Get", &ArrayWrapper<unsigned long long>::Get);
	cl_ArrayWrapper_unsigned_long_long.set<bool(ArrayWrapper<unsigned long long>::*)()>("IsNull", &ArrayWrapper<unsigned long long>::IsNull);

	module.set("ArrayWrapper<unsigned long long>", cl_ArrayWrapper_unsigned_long_long);
}
