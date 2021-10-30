void bind_ProductAttribute_BlueprintCostWrapper([[maybe_unused]] v8::Isolate* isolate, v8pp::module& module)
{

	v8pp::class_<ProductAttribute_BlueprintCostWrapper> cl_ProductAttribute_BlueprintCostWrapper(isolate);
	cl_ProductAttribute_BlueprintCostWrapper.inherit<ProductAttributeWrapper>();
	cl_ProductAttribute_BlueprintCostWrapper.ctor<uintptr_t>();
	cl_ProductAttribute_BlueprintCostWrapper.set<int(ProductAttribute_BlueprintCostWrapper::*)()>("GetCost", &ProductAttribute_BlueprintCostWrapper::GetCost);

	module.set("ProductAttribute_BlueprintCostWrapper", cl_ProductAttribute_BlueprintCostWrapper);
}
