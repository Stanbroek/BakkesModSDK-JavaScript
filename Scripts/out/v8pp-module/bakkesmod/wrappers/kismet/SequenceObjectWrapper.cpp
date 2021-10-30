void bind_SequenceObjectWrapper([[maybe_unused]] v8::Isolate* isolate, v8pp::module& module)
{

	v8pp::class_<SequenceObjectWrapper> cl_SequenceObjectWrapper(isolate);
	cl_SequenceObjectWrapper.inherit<ObjectWrapper>();
	cl_SequenceObjectWrapper.ctor<uintptr_t>();
	cl_SequenceObjectWrapper.set<bool(SequenceObjectWrapper::*)() const>("IsNull", &SequenceObjectWrapper::IsNull);
	cl_SequenceObjectWrapper.set<SequenceWrapper(SequenceObjectWrapper::*)()>("GetParentSequence", &SequenceObjectWrapper::GetParentSequence);
	cl_SequenceObjectWrapper.set<UnrealStringWrapper(SequenceObjectWrapper::*)()>("GetObjName", &SequenceObjectWrapper::GetObjName);
	cl_SequenceObjectWrapper.set<UnrealStringWrapper(SequenceObjectWrapper::*)()>("GetObjCategory", &SequenceObjectWrapper::GetObjCategory);
	cl_SequenceObjectWrapper.set<UnrealStringWrapper(SequenceObjectWrapper::*)()>("GetObjComment", &SequenceObjectWrapper::GetObjComment);

	module.set("SequenceObjectWrapper", cl_SequenceObjectWrapper);
}
