void bind_HttpWrapper([[maybe_unused]] v8::Isolate* isolate, v8pp::module& module)
{

	v8pp::class_<HttpWrapper> cl_HttpWrapper(isolate);
	cl_HttpWrapper.set<void(*)(CurlRequest, CurlRequestDoneStringReturn)>("SendCurlRequest", &HttpWrapper::SendCurlRequest);
	cl_HttpWrapper.set<void(*)(CurlRequest, CurlRequestDoneBinaryReturn)>("SendCurlRequest", &HttpWrapper::SendCurlRequest);
	cl_HttpWrapper.set<void(*)(CurlRequest, std::wstring const &, CurlRequestDoneFileReturn)>("SendCurlRequest", &HttpWrapper::SendCurlRequest);
	cl_HttpWrapper.set<void(*)(CurlRequest, CurlRequestDoneStringReturn)>("SendCurlJsonRequest", &HttpWrapper::SendCurlJsonRequest);
	cl_HttpWrapper.ctor<>();

	module.set("HttpWrapper", cl_HttpWrapper);
}
