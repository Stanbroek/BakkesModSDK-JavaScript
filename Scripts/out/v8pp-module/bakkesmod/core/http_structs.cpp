void bind_http_structs([[maybe_unused]] v8::Isolate* isolate, v8pp::module& module)
{

	v8pp::class_<FormField> cl_FormField(isolate);
	cl_FormField.set("field_type", &FormField::field_type);
	cl_FormField.set("data", &FormField::data);
	cl_FormField.set("name", &FormField::name);
	cl_FormField.ctor<>();

	module.set("FormField", cl_FormField);
	cl_FormField.set_const("kString", FormField::Type::kString);
	cl_FormField.set_const("kFile", FormField::Type::kFile);

	v8pp::class_<CurlRequest> cl_CurlRequest(isolate);
	cl_CurlRequest.set("url", &CurlRequest::url);
	cl_CurlRequest.set("verb", &CurlRequest::verb);
	cl_CurlRequest.set("headers", &CurlRequest::headers);
	cl_CurlRequest.set("body", &CurlRequest::body);
	cl_CurlRequest.set("form_data", &CurlRequest::form_data);
	cl_CurlRequest.set("progress_function", &CurlRequest::progress_function);
	cl_CurlRequest.ctor<>();

	module.set("CurlRequest", cl_CurlRequest);
}
