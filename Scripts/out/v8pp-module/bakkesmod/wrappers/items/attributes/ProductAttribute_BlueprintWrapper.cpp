void bind_ProductAttribute_BlueprintWrapper([[maybe_unused]] v8::Isolate* isolate, v8pp::module& module)
{

	v8pp::class_<ProductAttribute_BlueprintWrapper> cl_ProductAttribute_BlueprintWrapper(isolate);
	cl_ProductAttribute_BlueprintWrapper.inherit<ProductAttributeWrapper>();
	cl_ProductAttribute_BlueprintWrapper.ctor<uintptr_t>();
	cl_ProductAttribute_BlueprintWrapper.set<int(ProductAttribute_BlueprintWrapper::*)()>("GetProductID", &ProductAttribute_BlueprintWrapper::GetProductID);
	cl_ProductAttribute_BlueprintWrapper.set<int(ProductAttribute_BlueprintWrapper::*)()>("GetCachedBlueprintSeriesID", &ProductAttribute_BlueprintWrapper::GetCachedBlueprintSeriesID);
	cl_ProductAttribute_BlueprintWrapper.set<UnrealStringWrapper(ProductAttribute_BlueprintWrapper::*)()>("GetSortLabel", &ProductAttribute_BlueprintWrapper::GetSortLabel);

	module.set("ProductAttribute_BlueprintWrapper", cl_ProductAttribute_BlueprintWrapper);
}
