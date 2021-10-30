void bind_TradeWrapper([[maybe_unused]] v8::Isolate* isolate, v8pp::module& module)
{

	v8pp::class_<TradeWrapper> cl_TradeWrapper(isolate);
	cl_TradeWrapper.inherit<ObjectWrapper>();
	cl_TradeWrapper.ctor<uintptr_t>();
	cl_TradeWrapper.set<std::vector<TradeWrapper::Currency, std::allocator<TradeWrapper::Currency> >(TradeWrapper::*)() const>("GetReceivingCurrency", &TradeWrapper::GetReceivingCurrency);
	cl_TradeWrapper.set<std::vector<TradeWrapper::Currency, std::allocator<TradeWrapper::Currency> >(TradeWrapper::*)() const>("GetSendingCurrency", &TradeWrapper::GetSendingCurrency);
	cl_TradeWrapper.set<ArrayWrapper<OnlineProductWrapper>(TradeWrapper::*)()>("GetReceivingProducts", &TradeWrapper::GetReceivingProducts);
	cl_TradeWrapper.set<ArrayWrapper<OnlineProductWrapper>(TradeWrapper::*)()>("GetSendingProducts", &TradeWrapper::GetSendingProducts);
	cl_TradeWrapper.set<UniqueIDWrapper(TradeWrapper::*)() const>("GetTradingPlayer", &TradeWrapper::GetTradingPlayer);
	cl_TradeWrapper.set<GUIDWrapper(TradeWrapper::*)() const>("GetTradeGuid", &TradeWrapper::GetTradeGuid);
	cl_TradeWrapper.set<bool(TradeWrapper::*)()>("IsNull", &TradeWrapper::IsNull);

	module.set("TradeWrapper", cl_TradeWrapper);

	v8pp::class_<TradeWrapper::Currency> cl_TradeWrapper_Currency(isolate);
	cl_TradeWrapper_Currency.set("currency_id", &TradeWrapper::Currency::currency_id);
	cl_TradeWrapper_Currency.set("quantity", &TradeWrapper::Currency::quantity);
	cl_TradeWrapper_Currency.ctor<>();

	module.set("TradeWrapper::Currency", cl_TradeWrapper_Currency);
}
