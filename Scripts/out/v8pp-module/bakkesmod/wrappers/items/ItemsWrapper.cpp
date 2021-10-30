void bind_ItemsWrapper([[maybe_unused]] v8::Isolate* isolate, v8pp::module& module)
{

	v8pp::class_<ItemsWrapper> cl_ItemsWrapper(isolate);
	cl_ItemsWrapper.inherit<ObjectWrapper>();
	cl_ItemsWrapper.ctor<uintptr_t, uintptr_t>();
	cl_ItemsWrapper.set<bool(ItemsWrapper::*)()>("IsNull", &ItemsWrapper::IsNull);
	cl_ItemsWrapper.set<ArrayWrapper<ProductWrapper>(ItemsWrapper::*)()>("GetAllProducts", &ItemsWrapper::GetAllProducts);
	cl_ItemsWrapper.set<ProductWrapper(ItemsWrapper::*)(int)>("GetProduct", &ItemsWrapper::GetProduct);
	cl_ItemsWrapper.set<OnlineProductWrapper(ItemsWrapper::*)(long long unsigned int)>("GetOnlineProduct", &ItemsWrapper::GetOnlineProduct);
	// [deprecated] cl_ItemsWrapper.set<ArrayWrapper<OnlineProductWrapper>(ItemsWrapper::*)()>("GetUnlockedProducts", &ItemsWrapper::GetUnlockedProducts);
	cl_ItemsWrapper.set<ArrayWrapper<ProductWrapper>(ItemsWrapper::*)()>("GetCachedUnlockedProducts", &ItemsWrapper::GetCachedUnlockedProducts);
	cl_ItemsWrapper.set<ArrayWrapper<OnlineProductWrapper>(ItemsWrapper::*)()>("GetOwnedProducts", &ItemsWrapper::GetOwnedProducts);
	cl_ItemsWrapper.set<CertifiedStatDatabaseWrapper(ItemsWrapper::*)()>("GetCertifiedStatDB", &ItemsWrapper::GetCertifiedStatDB);
	cl_ItemsWrapper.set<DataAssetDatabase_ESportsTeamWrapper(ItemsWrapper::*)()>("GetEsportTeamDB", &ItemsWrapper::GetEsportTeamDB);
	cl_ItemsWrapper.set<PaintDatabaseWrapper(ItemsWrapper::*)()>("GetPaintDB", &ItemsWrapper::GetPaintDB);
	cl_ItemsWrapper.set<SpecialEditionDatabaseWrapper(ItemsWrapper::*)()>("GetSpecialEditionDB", &ItemsWrapper::GetSpecialEditionDB);
	cl_ItemsWrapper.set<UnrealStringWrapper(ItemsWrapper::*)()>("GetCurrentLoadoutName", &ItemsWrapper::GetCurrentLoadoutName);
	cl_ItemsWrapper.set<LoadoutWrapper(ItemsWrapper::*)(int)>("GetCurrentLoadout", &ItemsWrapper::GetCurrentLoadout);
	cl_ItemsWrapper.set<TradeWrapper(ItemsWrapper::*)()>("GetTradeWrapper", &ItemsWrapper::GetTradeWrapper);
	cl_ItemsWrapper.set<ProductTradeInWrapper(ItemsWrapper::*)()>("GetProductTradeInWrapper", &ItemsWrapper::GetProductTradeInWrapper);

	module.set("ItemsWrapper", cl_ItemsWrapper);
}
