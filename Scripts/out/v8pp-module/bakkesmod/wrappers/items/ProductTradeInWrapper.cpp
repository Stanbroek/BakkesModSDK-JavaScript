void bind_ProductTradeInWrapper([[maybe_unused]] v8::Isolate* isolate, v8pp::module& module)
{

	v8pp::class_<ProductTradeInWrapper> cl_ProductTradeInWrapper(isolate);
	cl_ProductTradeInWrapper.inherit<ObjectWrapper>();
	cl_ProductTradeInWrapper.ctor<uintptr_t>();
	cl_ProductTradeInWrapper.set<ArrayWrapper<OnlineProductWrapper>(ProductTradeInWrapper::*)() const>("GetProducts", &ProductTradeInWrapper::GetProducts);
	cl_ProductTradeInWrapper.set<bool(ProductTradeInWrapper::*)() const>("IsNull", &ProductTradeInWrapper::IsNull);

	module.set("ProductTradeInWrapper", cl_ProductTradeInWrapper);
}
