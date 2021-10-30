void bind_bot_loadout_structs([[maybe_unused]] v8::Isolate* isolate, v8pp::module& module)
{

	v8pp::class_<BotLoadoutData> cl_BotLoadoutData(isolate);
	cl_BotLoadoutData.set("products", &BotLoadoutData::products);
	cl_BotLoadoutData.set("product_attributes", &BotLoadoutData::product_attributes);
	cl_BotLoadoutData.set("team", &BotLoadoutData::team);
	cl_BotLoadoutData.set("team_finish_id", &BotLoadoutData::team_finish_id);
	cl_BotLoadoutData.set("custom_finish_id", &BotLoadoutData::custom_finish_id);
	cl_BotLoadoutData.set("team_color_id", &BotLoadoutData::team_color_id);
	cl_BotLoadoutData.set("custom_color_id", &BotLoadoutData::custom_color_id);
	cl_BotLoadoutData.ctor<>();

	module.set("BotLoadoutData", cl_BotLoadoutData);

	v8pp::class_<BotLoadoutData::Attribute> cl_BotLoadoutData_Attribute(isolate);
	cl_BotLoadoutData_Attribute.set("type", &BotLoadoutData::Attribute::type);
	cl_BotLoadoutData_Attribute.set("value", &BotLoadoutData::Attribute::value);
	cl_BotLoadoutData_Attribute.ctor<>();

	module.set("BotLoadoutData::Attribute", cl_BotLoadoutData_Attribute);
	cl_BotLoadoutData_Attribute.set_const("PAINT", BotLoadoutData::Attribute::Type::PAINT);
	cl_BotLoadoutData_Attribute.set_const("ESPORTWHEEL", BotLoadoutData::Attribute::Type::ESPORTWHEEL);
	cl_BotLoadoutData_Attribute.set_const("SPECIALEDITION", BotLoadoutData::Attribute::Type::SPECIALEDITION);
}
