void bind_ModalWrapper([[maybe_unused]] v8::Isolate* isolate, v8pp::module& module)
{

	v8pp::class_<ModalWrapper> cl_ModalWrapper(isolate);
	cl_ModalWrapper.inherit<ObjectWrapper>();
	cl_ModalWrapper.ctor<uintptr_t>();
	cl_ModalWrapper.set<void(ModalWrapper::*)() const>("ShowModal", &ModalWrapper::ShowModal);
	cl_ModalWrapper.set<void(ModalWrapper::*)()>("CloseModal", &ModalWrapper::CloseModal);
	cl_ModalWrapper.set<void(ModalWrapper::*)(float, float, float)>("SetColor", &ModalWrapper::SetColor);
	cl_ModalWrapper.set<void(ModalWrapper::*)(std::string const &)>("SetIcon", &ModalWrapper::SetIcon);
	cl_ModalWrapper.set<void(ModalWrapper::*)(std::string const &)>("SetBody", &ModalWrapper::SetBody);
	cl_ModalWrapper.set<void(ModalWrapper::*)(std::string const &, bool, std::function<void ()>)>("AddButton", &ModalWrapper::AddButton);

	module.set("ModalWrapper", cl_ModalWrapper);
}
