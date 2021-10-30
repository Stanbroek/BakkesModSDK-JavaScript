void bind_ProductAttributeWrapper([[maybe_unused]] v8::Isolate* isolate, v8pp::module& module)
{

	v8pp::class_<ProductAttributeWrapper> cl_ProductAttributeWrapper(isolate);
	cl_ProductAttributeWrapper.inherit<ObjectWrapper>();
	cl_ProductAttributeWrapper.ctor<uintptr_t>();
	cl_ProductAttributeWrapper.set<bool(ProductAttributeWrapper::*)() const>("IsNull", &ProductAttributeWrapper::IsNull);
	cl_ProductAttributeWrapper.set<std::string(ProductAttributeWrapper::*)()>("GetAttributeType", &ProductAttributeWrapper::GetAttributeType);
	cl_ProductAttributeWrapper.set<std::string(ProductAttributeWrapper::*)()>("GetTypename", &ProductAttributeWrapper::GetTypename);
	cl_ProductAttributeWrapper.set<UnrealStringWrapper(ProductAttributeWrapper::*)()>("GetLabel", &ProductAttributeWrapper::GetLabel);

	module.set("ProductAttributeWrapper", cl_ProductAttributeWrapper);
}
