void bind_SampleRecordSettingsWrapper([[maybe_unused]] v8::Isolate* isolate, v8pp::module& module)
{

	v8pp::class_<SampleRecordSettingsWrapper> cl_SampleRecordSettingsWrapper(isolate);
	cl_SampleRecordSettingsWrapper.inherit<ObjectWrapper>();
	cl_SampleRecordSettingsWrapper.ctor<uintptr_t>();
	cl_SampleRecordSettingsWrapper.set<bool(SampleRecordSettingsWrapper::*)() const>("IsNull", &SampleRecordSettingsWrapper::IsNull);
	cl_SampleRecordSettingsWrapper.set<float(SampleRecordSettingsWrapper::*)()>("GetMaxSampleAge", &SampleRecordSettingsWrapper::GetMaxSampleAge);
	cl_SampleRecordSettingsWrapper.set<void(SampleRecordSettingsWrapper::*)(float)>("SetMaxSampleAge", &SampleRecordSettingsWrapper::SetMaxSampleAge);
	cl_SampleRecordSettingsWrapper.set<float(SampleRecordSettingsWrapper::*)()>("GetRecordRate", &SampleRecordSettingsWrapper::GetRecordRate);
	cl_SampleRecordSettingsWrapper.set<void(SampleRecordSettingsWrapper::*)(float)>("SetRecordRate", &SampleRecordSettingsWrapper::SetRecordRate);

	module.set("SampleRecordSettingsWrapper", cl_SampleRecordSettingsWrapper);
}
