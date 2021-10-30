void bind_ProductTemplateWrapper([[maybe_unused]] v8::Isolate* isolate, v8pp::module& module)
{

	v8pp::class_<ProductTemplateWrapper> cl_ProductTemplateWrapper(isolate);
	cl_ProductTemplateWrapper.inherit<ObjectWrapper>();
	cl_ProductTemplateWrapper.ctor<uintptr_t>();
	cl_ProductTemplateWrapper.set<bool(ProductTemplateWrapper::*)() const>("IsNull", &ProductTemplateWrapper::IsNull);
	cl_ProductTemplateWrapper.set<ProductSlotWrapper(ProductTemplateWrapper::*)()>("GetSlot", &ProductTemplateWrapper::GetSlot);
	cl_ProductTemplateWrapper.set<unsigned char(ProductTemplateWrapper::*)()>("GetUnlockMethod", &ProductTemplateWrapper::GetUnlockMethod);
	cl_ProductTemplateWrapper.set<unsigned char(ProductTemplateWrapper::*)()>("GetQuality", &ProductTemplateWrapper::GetQuality);
	cl_ProductTemplateWrapper.set<ProductWrapper(ProductTemplateWrapper::*)()>("GetRequiredProduct", &ProductTemplateWrapper::GetRequiredProduct);
	cl_ProductTemplateWrapper.set<long unsigned int(ProductTemplateWrapper::*)()>("GetbLicensed", &ProductTemplateWrapper::GetbLicensed);

	module.set("ProductTemplateWrapper", cl_ProductTemplateWrapper);
}
