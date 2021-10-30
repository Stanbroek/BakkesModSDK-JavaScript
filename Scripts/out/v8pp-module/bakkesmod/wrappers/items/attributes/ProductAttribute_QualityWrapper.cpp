void bind_ProductAttribute_QualityWrapper([[maybe_unused]] v8::Isolate* isolate, v8pp::module& module)
{

	v8pp::class_<ProductAttribute_QualityWrapper> cl_ProductAttribute_QualityWrapper(isolate);
	cl_ProductAttribute_QualityWrapper.inherit<ProductAttributeWrapper>();
	cl_ProductAttribute_QualityWrapper.ctor<uintptr_t>();
	cl_ProductAttribute_QualityWrapper.set<unsigned char(ProductAttribute_QualityWrapper::*)()>("GetQuality", &ProductAttribute_QualityWrapper::GetQuality);
	cl_ProductAttribute_QualityWrapper.set<UnrealStringWrapper(ProductAttribute_QualityWrapper::*)(unsigned char)>("ProductQualityToString", &ProductAttribute_QualityWrapper::ProductQualityToString);

	module.set("ProductAttribute_QualityWrapper", cl_ProductAttribute_QualityWrapper);
}
