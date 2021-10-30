void bind_ProductAttribute_SpecialEditionWrapper([[maybe_unused]] v8::Isolate* isolate, v8pp::module& module)
{

	v8pp::class_<ProductAttribute_SpecialEditionWrapper> cl_ProductAttribute_SpecialEditionWrapper(isolate);
	cl_ProductAttribute_SpecialEditionWrapper.inherit<ProductAttributeWrapper>();
	cl_ProductAttribute_SpecialEditionWrapper.ctor<uintptr_t>();
	cl_ProductAttribute_SpecialEditionWrapper.set<int(ProductAttribute_SpecialEditionWrapper::*)()>("GetEditionID", &ProductAttribute_SpecialEditionWrapper::GetEditionID);
	cl_ProductAttribute_SpecialEditionWrapper.set<UnrealStringWrapper(ProductAttribute_SpecialEditionWrapper::*)()>("GetSortLabel", &ProductAttribute_SpecialEditionWrapper::GetSortLabel);
	cl_ProductAttribute_SpecialEditionWrapper.set<int(ProductAttribute_SpecialEditionWrapper::*)(int)>("GetOverrideProductID", &ProductAttribute_SpecialEditionWrapper::GetOverrideProductID);

	module.set("ProductAttribute_SpecialEditionWrapper", cl_ProductAttribute_SpecialEditionWrapper);
}
