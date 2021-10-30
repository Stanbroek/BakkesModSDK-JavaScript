void bind_ProductAttribute_CurrencyWrapper([[maybe_unused]] v8::Isolate* isolate, v8pp::module& module)
{

	v8pp::class_<ProductAttribute_CurrencyWrapper> cl_ProductAttribute_CurrencyWrapper(isolate);
	cl_ProductAttribute_CurrencyWrapper.inherit<ProductAttributeWrapper>();
	cl_ProductAttribute_CurrencyWrapper.ctor<uintptr_t>();
	cl_ProductAttribute_CurrencyWrapper.set<int(ProductAttribute_CurrencyWrapper::*)()>("GetCurrencyID", &ProductAttribute_CurrencyWrapper::GetCurrencyID);
	cl_ProductAttribute_CurrencyWrapper.set<UnrealStringWrapper(ProductAttribute_CurrencyWrapper::*)()>("GetSortLabel", &ProductAttribute_CurrencyWrapper::GetSortLabel);

	module.set("ProductAttribute_CurrencyWrapper", cl_ProductAttribute_CurrencyWrapper);
}
