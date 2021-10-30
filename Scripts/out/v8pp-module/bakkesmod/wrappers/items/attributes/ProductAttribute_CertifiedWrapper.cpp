void bind_ProductAttribute_CertifiedWrapper([[maybe_unused]] v8::Isolate* isolate, v8pp::module& module)
{

	v8pp::class_<ProductAttribute_CertifiedWrapper> cl_ProductAttribute_CertifiedWrapper(isolate);
	cl_ProductAttribute_CertifiedWrapper.inherit<ProductAttributeWrapper>();
	cl_ProductAttribute_CertifiedWrapper.ctor<uintptr_t>();
	cl_ProductAttribute_CertifiedWrapper.set<std::string(ProductAttribute_CertifiedWrapper::*)()>("GetValueKeyName", &ProductAttribute_CertifiedWrapper::GetValueKeyName);
	cl_ProductAttribute_CertifiedWrapper.set<int(ProductAttribute_CertifiedWrapper::*)()>("GetStatId", &ProductAttribute_CertifiedWrapper::GetStatId);
	cl_ProductAttribute_CertifiedWrapper.set<int(ProductAttribute_CertifiedWrapper::*)()>("GetStatValue", &ProductAttribute_CertifiedWrapper::GetStatValue);
	cl_ProductAttribute_CertifiedWrapper.set<UnrealStringWrapper(ProductAttribute_CertifiedWrapper::*)()>("GetSortLabel", &ProductAttribute_CertifiedWrapper::GetSortLabel);
	cl_ProductAttribute_CertifiedWrapper.set<UnrealStringWrapper(ProductAttribute_CertifiedWrapper::*)()>("GetDescription", &ProductAttribute_CertifiedWrapper::GetDescription);
	cl_ProductAttribute_CertifiedWrapper.set<UnrealStringWrapper(ProductAttribute_CertifiedWrapper::*)()>("GetRankLabel", &ProductAttribute_CertifiedWrapper::GetRankLabel);
	cl_ProductAttribute_CertifiedWrapper.set<int(ProductAttribute_CertifiedWrapper::*)()>("GetRank", &ProductAttribute_CertifiedWrapper::GetRank);

	module.set("ProductAttribute_CertifiedWrapper", cl_ProductAttribute_CertifiedWrapper);
}
