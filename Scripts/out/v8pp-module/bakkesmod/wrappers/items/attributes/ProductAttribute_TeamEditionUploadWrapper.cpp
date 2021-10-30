void bind_ProductAttribute_TeamEditionUploadWrapper([[maybe_unused]] v8::Isolate* isolate, v8pp::module& module)
{

	v8pp::class_<ProductAttribute_TeamEditionUploadWrapper> cl_ProductAttribute_TeamEditionUploadWrapper(isolate);
	cl_ProductAttribute_TeamEditionUploadWrapper.inherit<ProductAttributeWrapper>();
	cl_ProductAttribute_TeamEditionUploadWrapper.ctor<uintptr_t>();
	cl_ProductAttribute_TeamEditionUploadWrapper.set<ArrayWrapper<int>(ProductAttribute_TeamEditionUploadWrapper::*)()>("GetSupportedTeamEditions", &ProductAttribute_TeamEditionUploadWrapper::GetSupportedTeamEditions);

	module.set("ProductAttribute_TeamEditionUploadWrapper", cl_ProductAttribute_TeamEditionUploadWrapper);
}
