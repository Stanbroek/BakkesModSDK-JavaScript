void bind_UnrealStringWrapper([[maybe_unused]] v8::Isolate* isolate, v8pp::module& module)
{

	v8pp::class_<ArrayWrapper<wchar_t>> cl_ArrayWrapper_wchar_t(isolate);
	cl_ArrayWrapper_wchar_t.ctor<uintptr_t>();
	cl_ArrayWrapper_wchar_t.set<int(ArrayWrapper<wchar_t>::*)()>("Count", &ArrayWrapper<wchar_t>::Count);
	cl_ArrayWrapper_wchar_t.set<wchar_t(ArrayWrapper<wchar_t>::*)(int)>("Get", &ArrayWrapper<wchar_t>::Get);
	cl_ArrayWrapper_wchar_t.set<bool(ArrayWrapper<wchar_t>::*)()>("IsNull", &ArrayWrapper<wchar_t>::IsNull);

	module.set("ArrayWrapper<wchar_t>", cl_ArrayWrapper_wchar_t);

	v8pp::class_<UnrealStringWrapper> cl_UnrealStringWrapper(isolate);
	cl_UnrealStringWrapper.inherit<ArrayWrapper<wchar_t>>();
	cl_UnrealStringWrapper.ctor<uintptr_t>();
	cl_UnrealStringWrapper.set<std::string(UnrealStringWrapper::*)()>("ToString", &UnrealStringWrapper::ToString);
	cl_UnrealStringWrapper.set<std::wstring(UnrealStringWrapper::*)()>("ToWideString", &UnrealStringWrapper::ToWideString);
	cl_UnrealStringWrapper.set<bool(UnrealStringWrapper::*)()>("IsNull", &UnrealStringWrapper::IsNull);

	module.set("UnrealStringWrapper", cl_UnrealStringWrapper);
}
