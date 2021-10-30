void bind_ClubSettingsWrapper([[maybe_unused]] v8::Isolate* isolate, v8pp::module& module)
{

	v8pp::class_<ClubSettingsWrapper> cl_ClubSettingsWrapper(isolate);
	cl_ClubSettingsWrapper.inherit<ObjectWrapper>();
	cl_ClubSettingsWrapper.ctor<uintptr_t>();
	cl_ClubSettingsWrapper.set<bool(ClubSettingsWrapper::*)() const>("IsNull", &ClubSettingsWrapper::IsNull);
	cl_ClubSettingsWrapper.set<UnrealStringWrapper(ClubSettingsWrapper::*)()>("GetClubName", &ClubSettingsWrapper::GetClubName);
	cl_ClubSettingsWrapper.set<UnrealStringWrapper(ClubSettingsWrapper::*)()>("GetClubTag", &ClubSettingsWrapper::GetClubTag);
	cl_ClubSettingsWrapper.set<int(ClubSettingsWrapper::*)()>("GetPrimaryColor", &ClubSettingsWrapper::GetPrimaryColor);
	cl_ClubSettingsWrapper.set<int(ClubSettingsWrapper::*)()>("GetAccentColor", &ClubSettingsWrapper::GetAccentColor);

	module.set("ClubSettingsWrapper", cl_ClubSettingsWrapper);
}
