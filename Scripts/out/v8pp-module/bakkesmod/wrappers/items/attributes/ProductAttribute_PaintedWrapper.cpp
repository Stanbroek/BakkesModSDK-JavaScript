void bind_ProductAttribute_PaintedWrapper([[maybe_unused]] v8::Isolate* isolate, v8pp::module& module)
{

	v8pp::class_<ProductAttribute_PaintedWrapper> cl_ProductAttribute_PaintedWrapper(isolate);
	cl_ProductAttribute_PaintedWrapper.inherit<ProductAttributeWrapper>();
	cl_ProductAttribute_PaintedWrapper.ctor<uintptr_t>();
	cl_ProductAttribute_PaintedWrapper.set<int(ProductAttribute_PaintedWrapper::*)()>("GetPaintID", &ProductAttribute_PaintedWrapper::GetPaintID);
	cl_ProductAttribute_PaintedWrapper.set<UnrealStringWrapper(ProductAttribute_PaintedWrapper::*)()>("GetSortLabel", &ProductAttribute_PaintedWrapper::GetSortLabel);

	module.set("ProductAttribute_PaintedWrapper", cl_ProductAttribute_PaintedWrapper);
}
