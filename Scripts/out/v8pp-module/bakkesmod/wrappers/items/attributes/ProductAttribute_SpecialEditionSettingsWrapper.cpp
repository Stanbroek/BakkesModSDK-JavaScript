void bind_ProductAttribute_SpecialEditionSettingsWrapper([[maybe_unused]] v8::Isolate* isolate, v8pp::module& module)
{

	v8pp::class_<SpecialEdition> cl_SpecialEdition(isolate);
	cl_SpecialEdition.set("productId", &SpecialEdition::productId);
	cl_SpecialEdition.set("editionId", &SpecialEdition::editionId);
	cl_SpecialEdition.set("label", &SpecialEdition::label);
	cl_SpecialEdition.ctor<>();

	module.set("SpecialEdition", cl_SpecialEdition);

	v8pp::class_<ProductAttribute_SpecialEditionSettingsWrapper> cl_ProductAttribute_SpecialEditionSettingsWrapper(isolate);
	cl_ProductAttribute_SpecialEditionSettingsWrapper.inherit<ProductAttributeWrapper>();
	cl_ProductAttribute_SpecialEditionSettingsWrapper.ctor<uintptr_t>();
	cl_ProductAttribute_SpecialEditionSettingsWrapper.set<std::vector<SpecialEdition, std::allocator<SpecialEdition> >(ProductAttribute_SpecialEditionSettingsWrapper::*)()>("GetEditions", &ProductAttribute_SpecialEditionSettingsWrapper::GetEditions);

	module.set("ProductAttribute_SpecialEditionSettingsWrapper", cl_ProductAttribute_SpecialEditionSettingsWrapper);
}
