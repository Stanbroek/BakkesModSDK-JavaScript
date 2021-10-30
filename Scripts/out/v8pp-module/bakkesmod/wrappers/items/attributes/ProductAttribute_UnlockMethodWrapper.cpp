void bind_ProductAttribute_UnlockMethodWrapper([[maybe_unused]] v8::Isolate* isolate, v8pp::module& module)
{

	v8pp::class_<ProductAttribute_UnlockMethodWrapper> cl_ProductAttribute_UnlockMethodWrapper(isolate);
	cl_ProductAttribute_UnlockMethodWrapper.inherit<ProductAttributeWrapper>();
	cl_ProductAttribute_UnlockMethodWrapper.ctor<uintptr_t>();
	cl_ProductAttribute_UnlockMethodWrapper.set<unsigned char(ProductAttribute_UnlockMethodWrapper::*)()>("GetUnlockMethod", &ProductAttribute_UnlockMethodWrapper::GetUnlockMethod);

	module.set("ProductAttribute_UnlockMethodWrapper", cl_ProductAttribute_UnlockMethodWrapper);
}
