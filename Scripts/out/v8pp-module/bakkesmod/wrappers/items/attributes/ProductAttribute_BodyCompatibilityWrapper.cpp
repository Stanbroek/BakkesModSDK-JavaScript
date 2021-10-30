void bind_ProductAttribute_BodyCompatibilityWrapper([[maybe_unused]] v8::Isolate* isolate, v8pp::module& module)
{

	v8pp::class_<ProductAttribute_BodyCompatibilityWrapper> cl_ProductAttribute_BodyCompatibilityWrapper(isolate);
	cl_ProductAttribute_BodyCompatibilityWrapper.inherit<ProductAttributeWrapper>();
	cl_ProductAttribute_BodyCompatibilityWrapper.ctor<uintptr_t>();
	cl_ProductAttribute_BodyCompatibilityWrapper.set<ArrayWrapper<ProductWrapper>(ProductAttribute_BodyCompatibilityWrapper::*)()>("GetCompatibleBodies", &ProductAttribute_BodyCompatibilityWrapper::GetCompatibleBodies);

	module.set("ProductAttribute_BodyCompatibilityWrapper", cl_ProductAttribute_BodyCompatibilityWrapper);
}
