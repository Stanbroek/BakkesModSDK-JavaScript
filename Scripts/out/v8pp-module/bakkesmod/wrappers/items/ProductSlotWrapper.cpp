void bind_ProductSlotWrapper([[maybe_unused]] v8::Isolate* isolate, v8pp::module& module)
{

	v8pp::class_<ProductSlotWrapper> cl_ProductSlotWrapper(isolate);
	cl_ProductSlotWrapper.inherit<ObjectWrapper>();
	cl_ProductSlotWrapper.ctor<uintptr_t>();
	cl_ProductSlotWrapper.set<bool(ProductSlotWrapper::*)() const>("IsNull", &ProductSlotWrapper::IsNull);
	cl_ProductSlotWrapper.set<UnrealStringWrapper(ProductSlotWrapper::*)()>("GetLabel", &ProductSlotWrapper::GetLabel);
	cl_ProductSlotWrapper.set<UnrealStringWrapper(ProductSlotWrapper::*)()>("GetPluralLabel", &ProductSlotWrapper::GetPluralLabel);
	cl_ProductSlotWrapper.set<UnrealStringWrapper(ProductSlotWrapper::*)()>("GetDescription", &ProductSlotWrapper::GetDescription);
	cl_ProductSlotWrapper.set<UnrealStringWrapper(ProductSlotWrapper::*)()>("GetOnlineLabel", &ProductSlotWrapper::GetOnlineLabel);
	cl_ProductSlotWrapper.set<int(ProductSlotWrapper::*)()>("GetSlotIndex", &ProductSlotWrapper::GetSlotIndex);

	module.set("ProductSlotWrapper", cl_ProductSlotWrapper);
}
