void bind_SequenceOpWrapper([[maybe_unused]] v8::Isolate* isolate, v8pp::module& module)
{

	v8pp::class_<SequenceOpWrapper> cl_SequenceOpWrapper(isolate);
	cl_SequenceOpWrapper.inherit<SequenceObjectWrapper>();
	cl_SequenceOpWrapper.ctor<uintptr_t>();

	module.set("SequenceOpWrapper", cl_SequenceOpWrapper);
}
