void bind_ProductAttribute_TeamEditionWrapper([[maybe_unused]] v8::Isolate* isolate, v8pp::module& module)
{

	v8pp::class_<ProductAttribute_TeamEditionWrapper> cl_ProductAttribute_TeamEditionWrapper(isolate);
	cl_ProductAttribute_TeamEditionWrapper.inherit<ProductAttributeWrapper>();
	cl_ProductAttribute_TeamEditionWrapper.ctor<uintptr_t>();
	cl_ProductAttribute_TeamEditionWrapper.set<int(ProductAttribute_TeamEditionWrapper::*)()>("GetId", &ProductAttribute_TeamEditionWrapper::GetId);
	cl_ProductAttribute_TeamEditionWrapper.set<UnrealStringWrapper(ProductAttribute_TeamEditionWrapper::*)()>("GetSortLabel", &ProductAttribute_TeamEditionWrapper::GetSortLabel);

	module.set("ProductAttribute_TeamEditionWrapper", cl_ProductAttribute_TeamEditionWrapper);
}
