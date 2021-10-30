void bind_StructArrayWrapper([[maybe_unused]] v8::Isolate* isolate, v8pp::module& module)
{

	v8pp::class_<StructArrayWrapper<LinearColor>> cl_StructArrayWrapper_LinearColor(isolate);
	cl_StructArrayWrapper_LinearColor.ctor<uintptr_t>();
	cl_StructArrayWrapper_LinearColor.set<int(StructArrayWrapper<LinearColor>::*)()>("Count", &StructArrayWrapper<LinearColor>::Count);
	cl_StructArrayWrapper_LinearColor.set<LinearColor(StructArrayWrapper<LinearColor>::*)(int)>("Get", &StructArrayWrapper<LinearColor>::Get);

	module.set("StructArrayWrapper<LinearColor>", cl_StructArrayWrapper_LinearColor);

	v8pp::class_<StructArrayWrapper<SteamID>> cl_StructArrayWrapper_SteamID(isolate);
	cl_StructArrayWrapper_SteamID.ctor<uintptr_t>();
	cl_StructArrayWrapper_SteamID.set<int(StructArrayWrapper<SteamID>::*)()>("Count", &StructArrayWrapper<SteamID>::Count);
	cl_StructArrayWrapper_SteamID.set<SteamID(StructArrayWrapper<SteamID>::*)(int)>("Get", &StructArrayWrapper<SteamID>::Get);

	module.set("StructArrayWrapper<SteamID>", cl_StructArrayWrapper_SteamID);

	v8pp::class_<StructArrayWrapper<ProfileCameraSettings>> cl_StructArrayWrapper_ProfileCameraSettings(isolate);
	cl_StructArrayWrapper_ProfileCameraSettings.ctor<uintptr_t>();
	cl_StructArrayWrapper_ProfileCameraSettings.set<int(StructArrayWrapper<ProfileCameraSettings>::*)()>("Count", &StructArrayWrapper<ProfileCameraSettings>::Count);
	cl_StructArrayWrapper_ProfileCameraSettings.set<ProfileCameraSettings(StructArrayWrapper<ProfileCameraSettings>::*)(int)>("Get", &StructArrayWrapper<ProfileCameraSettings>::Get);

	module.set("StructArrayWrapper<ProfileCameraSettings>", cl_StructArrayWrapper_ProfileCameraSettings);

	v8pp::class_<StructArrayWrapper<RecordedSample>> cl_StructArrayWrapper_RecordedSample(isolate);
	cl_StructArrayWrapper_RecordedSample.ctor<uintptr_t>();
	cl_StructArrayWrapper_RecordedSample.set<int(StructArrayWrapper<RecordedSample>::*)()>("Count", &StructArrayWrapper<RecordedSample>::Count);
	cl_StructArrayWrapper_RecordedSample.set<RecordedSample(StructArrayWrapper<RecordedSample>::*)(int)>("Get", &StructArrayWrapper<RecordedSample>::Get);

	module.set("StructArrayWrapper<RecordedSample>", cl_StructArrayWrapper_RecordedSample);

	v8pp::class_<StructArrayWrapper<ClubMember>> cl_StructArrayWrapper_ClubMember(isolate);
	cl_StructArrayWrapper_ClubMember.ctor<uintptr_t>();
	cl_StructArrayWrapper_ClubMember.set<int(StructArrayWrapper<ClubMember>::*)()>("Count", &StructArrayWrapper<ClubMember>::Count);
	cl_StructArrayWrapper_ClubMember.set<ClubMember(StructArrayWrapper<ClubMember>::*)(int)>("Get", &StructArrayWrapper<ClubMember>::Get);

	module.set("StructArrayWrapper<ClubMember>", cl_StructArrayWrapper_ClubMember);
}
