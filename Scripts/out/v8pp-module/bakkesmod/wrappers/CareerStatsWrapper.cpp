void bind_CareerStatsWrapper([[maybe_unused]] v8::Isolate* isolate, v8pp::module& module)
{

	v8pp::class_<CareerStatsWrapper> cl_CareerStatsWrapper(isolate);
	cl_CareerStatsWrapper.set<std::vector<CareerStatsWrapper::StatValue, std::allocator<CareerStatsWrapper::StatValue> >(*)()>("GetStatValues", &CareerStatsWrapper::GetStatValues);
	cl_CareerStatsWrapper.ctor<>();

	module.set("CareerStatsWrapper", cl_CareerStatsWrapper);

	v8pp::class_<CareerStatsWrapper::StatValue> cl_CareerStatsWrapper_StatValue(isolate);
	cl_CareerStatsWrapper_StatValue.set("stat_name", &CareerStatsWrapper::StatValue::stat_name);
	cl_CareerStatsWrapper_StatValue.set("private_", &CareerStatsWrapper::StatValue::private_);
	cl_CareerStatsWrapper_StatValue.set("unranked", &CareerStatsWrapper::StatValue::unranked);
	cl_CareerStatsWrapper_StatValue.set("ranked", &CareerStatsWrapper::StatValue::ranked);
	cl_CareerStatsWrapper_StatValue.ctor<>();

	module.set("CareerStatsWrapper::StatValue", cl_CareerStatsWrapper_StatValue);
}
