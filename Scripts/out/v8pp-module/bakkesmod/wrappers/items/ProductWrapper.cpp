void bind_ProductWrapper([[maybe_unused]] v8::Isolate* isolate, v8pp::module& module)
{

	v8pp::class_<ProductWrapper> cl_ProductWrapper(isolate);
	cl_ProductWrapper.inherit<ProductTemplateWrapper>();
	cl_ProductWrapper.ctor<uintptr_t>();
	cl_ProductWrapper.set<bool(ProductWrapper::*)()>("IsNull", &ProductWrapper::IsNull);
	cl_ProductWrapper.set<std::string(ProductWrapper::*)()>("GetAssetPackageName", &ProductWrapper::GetAssetPackageName);
	cl_ProductWrapper.set<UnrealStringWrapper(ProductWrapper::*)()>("GetAssetPath", &ProductWrapper::GetAssetPath);
	cl_ProductWrapper.set<UnrealStringWrapper(ProductWrapper::*)()>("GetLabel", &ProductWrapper::GetLabel);
	cl_ProductWrapper.set<UnrealStringWrapper(ProductWrapper::*)()>("GetAsciiLabel", &ProductWrapper::GetAsciiLabel);
	cl_ProductWrapper.set<UnrealStringWrapper(ProductWrapper::*)()>("GetLongLabel", &ProductWrapper::GetLongLabel);
	cl_ProductWrapper.set<bool(ProductWrapper::*)()>("IsPaintable", &ProductWrapper::IsPaintable);
	cl_ProductWrapper.set<UnrealStringWrapper(ProductWrapper::*)()>("GetDisplayLabelSlot", &ProductWrapper::GetDisplayLabelSlot);
	cl_ProductWrapper.set<unsigned char(ProductWrapper::*)()>("GetQuality", &ProductWrapper::GetQuality);
	cl_ProductWrapper.set<bool(ProductWrapper::*)()>("IsContainerKey", &ProductWrapper::IsContainerKey);
	cl_ProductWrapper.set<bool(ProductWrapper::*)()>("IsCurrency", &ProductWrapper::IsCurrency);
	cl_ProductWrapper.set<bool(ProductWrapper::*)()>("IsBlueprint", &ProductWrapper::IsBlueprint);
	cl_ProductWrapper.set<bool(ProductWrapper::*)()>("IsContainerUnlocked", &ProductWrapper::IsContainerUnlocked);
	cl_ProductWrapper.set<bool(ProductWrapper::*)()>("IsContainer", &ProductWrapper::IsContainer);
	cl_ProductWrapper.set<bool(ProductWrapper::*)()>("IsSchematic", &ProductWrapper::IsSchematic);
	cl_ProductWrapper.set<bool(ProductWrapper::*)()>("IsPlatformExclusive", &ProductWrapper::IsPlatformExclusive);
	cl_ProductWrapper.set<bool(ProductWrapper::*)()>("IsLicensed", &ProductWrapper::IsLicensed);
	cl_ProductWrapper.set<ArrayWrapper<ProductAttributeWrapper>(ProductWrapper::*)()>("GetAttributes", &ProductWrapper::GetAttributes);
	cl_ProductWrapper.set<UnrealStringWrapper(ProductWrapper::*)()>("GetSortLabel", &ProductWrapper::GetSortLabel);
	cl_ProductWrapper.set<UnrealStringWrapper(ProductWrapper::*)()>("GetThumbnailAssetPath", &ProductWrapper::GetThumbnailAssetPath);
	cl_ProductWrapper.set<UnrealStringWrapper(ProductWrapper::*)()>("GetThumbnailPackageNameForLoad", &ProductWrapper::GetThumbnailPackageNameForLoad);
	cl_ProductWrapper.set<std::string(ProductWrapper::*)()>("GetThumbnailPackageName", &ProductWrapper::GetThumbnailPackageName);
	cl_ProductWrapper.set<std::string(ProductWrapper::*)()>("GetThumbnailAssetName", &ProductWrapper::GetThumbnailAssetName);
	cl_ProductWrapper.set<UnrealStringWrapper(ProductWrapper::*)()>("GetTrademarkLabel", &ProductWrapper::GetTrademarkLabel);
	cl_ProductWrapper.set<int(ProductWrapper::*)()>("GetID", &ProductWrapper::GetID);

	module.set("ProductWrapper", cl_ProductWrapper);
}
