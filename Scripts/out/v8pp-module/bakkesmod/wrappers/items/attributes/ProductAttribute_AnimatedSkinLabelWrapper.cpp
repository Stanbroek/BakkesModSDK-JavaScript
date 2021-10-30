void bind_ProductAttribute_AnimatedSkinLabelWrapper([[maybe_unused]] v8::Isolate* isolate, v8pp::module& module)
{

	v8pp::class_<ProductAttribute_AnimatedSkinLabelWrapper> cl_ProductAttribute_AnimatedSkinLabelWrapper(isolate);
	cl_ProductAttribute_AnimatedSkinLabelWrapper.inherit<ProductAttributeWrapper>();
	cl_ProductAttribute_AnimatedSkinLabelWrapper.ctor<uintptr_t>();
	cl_ProductAttribute_AnimatedSkinLabelWrapper.set<UnrealStringWrapper(ProductAttribute_AnimatedSkinLabelWrapper::*)()>("GetAnimatedLabel", &ProductAttribute_AnimatedSkinLabelWrapper::GetAnimatedLabel);

	module.set("ProductAttribute_AnimatedSkinLabelWrapper", cl_ProductAttribute_AnimatedSkinLabelWrapper);
}
