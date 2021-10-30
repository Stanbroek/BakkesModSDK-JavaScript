void bind_TextInputModalWrapper([[maybe_unused]] v8::Isolate* isolate, v8pp::module& module)
{

	v8pp::class_<TextInputModalWrapper> cl_TextInputModalWrapper(isolate);
	cl_TextInputModalWrapper.inherit<ModalWrapper>();
	cl_TextInputModalWrapper.ctor<uintptr_t>();
	cl_TextInputModalWrapper.set<void(TextInputModalWrapper::*)(std::string const &, int32_t, bool, std::function<void (std::basic_string<char>, bool)>)>("SetTextInput", &TextInputModalWrapper::SetTextInput);

	module.set("TextInputModalWrapper", cl_TextInputModalWrapper);
}
