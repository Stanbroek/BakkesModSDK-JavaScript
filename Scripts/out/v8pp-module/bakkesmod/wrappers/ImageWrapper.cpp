void bind_ImageWrapper([[maybe_unused]] v8::Isolate* isolate, v8pp::module& module)
{

	v8pp::class_<ImageWrapper> cl_ImageWrapper(isolate);
	cl_ImageWrapper.ctor<std::string, bool, bool>();
	//cl_ImageWrapper.ctor<std::wstring, bool, bool>();
	cl_ImageWrapper.set<bool(ImageWrapper::*)()>("LoadForCanvas", &ImageWrapper::LoadForCanvas);
	cl_ImageWrapper.set<bool(ImageWrapper::*)()>("IsLoadedForCanvas", &ImageWrapper::IsLoadedForCanvas);
	cl_ImageWrapper.set<void *(ImageWrapper::*)()>("GetCanvasTex", &ImageWrapper::GetCanvasTex);
	cl_ImageWrapper.set<void(ImageWrapper::*)(std::function<void (bool)>)>("LoadForImGui", &ImageWrapper::LoadForImGui);
	cl_ImageWrapper.set<bool(ImageWrapper::*)()>("IsLoadedForImGui", &ImageWrapper::IsLoadedForImGui);
	cl_ImageWrapper.set<void *(ImageWrapper::*)()>("GetImGuiTex", &ImageWrapper::GetImGuiTex);
	cl_ImageWrapper.set<std::string(ImageWrapper::*)()>("GetPath", &ImageWrapper::GetPath);
	cl_ImageWrapper.set<std::wstring(ImageWrapper::*)()>("GetPathW", &ImageWrapper::GetPathW);
	cl_ImageWrapper.set<Vector2(ImageWrapper::*)()>("GetSize", &ImageWrapper::GetSize);
	cl_ImageWrapper.set<Vector2F(ImageWrapper::*)()>("GetSizeF", &ImageWrapper::GetSizeF);

	module.set("ImageWrapper", cl_ImageWrapper);
}
