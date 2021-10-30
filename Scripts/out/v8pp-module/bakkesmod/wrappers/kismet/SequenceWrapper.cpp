void bind_SequenceWrapper([[maybe_unused]] v8::Isolate* isolate, v8pp::module& module)
{

	v8pp::class_<SequenceWrapper> cl_SequenceWrapper(isolate);
	cl_SequenceWrapper.inherit<SequenceOpWrapper>();
	cl_SequenceWrapper.ctor<uintptr_t>();
	cl_SequenceWrapper.set<ArrayWrapper<SequenceObjectWrapper>(SequenceWrapper::*)()>("GetSequenceObjects", &SequenceWrapper::GetSequenceObjects);
	cl_SequenceWrapper.set<ArrayWrapper<SequenceWrapper>(SequenceWrapper::*)()>("GetNestedSequences", &SequenceWrapper::GetNestedSequences);
	cl_SequenceWrapper.set<int(SequenceWrapper::*)(std::string const &) const>("ActivateRemoteEvents", &SequenceWrapper::ActivateRemoteEvents);
	cl_SequenceWrapper.set<std::map<std::basic_string<char>, SequenceVariableWrapper, std::less<std::basic_string<char> >, std::allocator<std::pair<const std::basic_string<char>, SequenceVariableWrapper> > >(SequenceWrapper::*)(bool)>("GetAllSequenceVariables", &SequenceWrapper::GetAllSequenceVariables);

	module.set("SequenceWrapper", cl_SequenceWrapper);
}
