void bind_OnlineProductWrapper([[maybe_unused]] v8::Isolate* isolate, v8pp::module& module)
{

	v8pp::class_<OnlineProductWrapper> cl_OnlineProductWrapper(isolate);
	cl_OnlineProductWrapper.inherit<ObjectWrapper>();
	cl_OnlineProductWrapper.ctor<uintptr_t>();
	cl_OnlineProductWrapper.set<bool(OnlineProductWrapper::*)() const>("IsNull", &OnlineProductWrapper::IsNull);
	cl_OnlineProductWrapper.set<std::string(OnlineProductWrapper::*)(int)>("SeriesIdToSeriesName", &OnlineProductWrapper::SeriesIdToSeriesName);
	cl_OnlineProductWrapper.set<int(OnlineProductWrapper::*)()>("GetProductID", &OnlineProductWrapper::GetProductID);
	cl_OnlineProductWrapper.set<int(OnlineProductWrapper::*)()>("GetSeriesID", &OnlineProductWrapper::GetSeriesID);
	cl_OnlineProductWrapper.set<int(OnlineProductWrapper::*)()>("GetTradeHold", &OnlineProductWrapper::GetTradeHold);
	cl_OnlineProductWrapper.set<std::string(OnlineProductWrapper::*)()>("GetProductSeries", &OnlineProductWrapper::GetProductSeries);
	cl_OnlineProductWrapper.set<unsigned char(OnlineProductWrapper::*)()>("GetQuality", &OnlineProductWrapper::GetQuality);
	cl_OnlineProductWrapper.set<ArrayWrapper<ProductAttributeWrapper>(OnlineProductWrapper::*)()>("GetAttributes", &OnlineProductWrapper::GetAttributes);
	cl_OnlineProductWrapper.set<UnrealStringWrapper(OnlineProductWrapper::*)()>("GetLongLabel", &OnlineProductWrapper::GetLongLabel);
	cl_OnlineProductWrapper.set<int(OnlineProductWrapper::*)()>("GetBlueprintSeriesID", &OnlineProductWrapper::GetBlueprintSeriesID);
	cl_OnlineProductWrapper.set<unsigned char(OnlineProductWrapper::*)()>("GetBlueprintType", &OnlineProductWrapper::GetBlueprintType);
	cl_OnlineProductWrapper.set<bool(OnlineProductWrapper::*)()>("IsBlueprint", &OnlineProductWrapper::IsBlueprint);
	cl_OnlineProductWrapper.set<ProductWrapper(OnlineProductWrapper::*)()>("GetProduct", &OnlineProductWrapper::GetProduct);
	cl_OnlineProductWrapper.set<bool(OnlineProductWrapper::*)()>("GetIsUntradable", &OnlineProductWrapper::GetIsUntradable);
	cl_OnlineProductWrapper.set<long long unsigned int(OnlineProductWrapper::*)()>("GetInstanceID", &OnlineProductWrapper::GetInstanceID);

	module.set("OnlineProductWrapper", cl_OnlineProductWrapper);
}
