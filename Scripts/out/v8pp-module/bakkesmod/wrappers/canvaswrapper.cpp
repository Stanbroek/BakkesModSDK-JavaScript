void bind_canvaswrapper([[maybe_unused]] v8::Isolate* isolate, v8pp::module& module)
{

	v8pp::class_<CanvasWrapper> cl_CanvasWrapper(isolate);
	cl_CanvasWrapper.ctor<uintptr_t>();
	cl_CanvasWrapper.set<void(CanvasWrapper::*)(Vector2F)>("SetPosition", &CanvasWrapper::SetPosition);
	cl_CanvasWrapper.set<Vector2F(CanvasWrapper::*)()>("GetPositionFloat", &CanvasWrapper::GetPositionFloat);
	cl_CanvasWrapper.set<void(CanvasWrapper::*)(char, char, char, char)>("SetColor", &CanvasWrapper::SetColor);
	cl_CanvasWrapper.set<void(CanvasWrapper::*)(LinearColor)>("SetColor", &CanvasWrapper::SetColor);
	cl_CanvasWrapper.set<LinearColor(CanvasWrapper::*)()>("GetColor", &CanvasWrapper::GetColor);
	cl_CanvasWrapper.set<void(CanvasWrapper::*)(Vector2F)>("DrawBox", &CanvasWrapper::DrawBox);
	cl_CanvasWrapper.set<void(CanvasWrapper::*)(Vector2F)>("FillBox", &CanvasWrapper::FillBox);
	cl_CanvasWrapper.set<void(CanvasWrapper::*)(Vector2F, Vector2F, Vector2F)>("FillTriangle", &CanvasWrapper::FillTriangle);
	cl_CanvasWrapper.set<void(CanvasWrapper::*)(Vector2F, Vector2F, Vector2F, LinearColor)>("FillTriangle", &CanvasWrapper::FillTriangle);
	cl_CanvasWrapper.set<void(CanvasWrapper::*)(std::string)>("DrawString", &CanvasWrapper::DrawString);
	cl_CanvasWrapper.set<void(CanvasWrapper::*)(std::string, float, float)>("DrawString", &CanvasWrapper::DrawString);
	cl_CanvasWrapper.set<void(CanvasWrapper::*)(std::string, float, float, bool, bool)>("DrawString", &CanvasWrapper::DrawString);
	cl_CanvasWrapper.set<Vector2F(CanvasWrapper::*)(std::string, float, float)>("GetStringSize", &CanvasWrapper::GetStringSize);
	cl_CanvasWrapper.set<void(CanvasWrapper::*)(Vector2F, Vector2F)>("DrawLine", &CanvasWrapper::DrawLine);
	cl_CanvasWrapper.set<void(CanvasWrapper::*)(Vector2F, Vector2F, float)>("DrawLine", &CanvasWrapper::DrawLine);
	cl_CanvasWrapper.set<void(CanvasWrapper::*)(Vector2F, Vector2F)>("DrawRect", &CanvasWrapper::DrawRect);
	cl_CanvasWrapper.set<void(CanvasWrapper::*)(ImageWrapper *, float)>("DrawTexture", &CanvasWrapper::DrawTexture);
	cl_CanvasWrapper.set<void(CanvasWrapper::*)(float, float, ImageWrapper *)>("DrawRect", &CanvasWrapper::DrawRect);
	cl_CanvasWrapper.set<void(CanvasWrapper::*)(ImageWrapper *, float, float, float, float, float, float, LinearColor, unsigned int, unsigned char)>("DrawTile", &CanvasWrapper::DrawTile);
	cl_CanvasWrapper.set<void(CanvasWrapper::*)(ImageWrapper *, Rotator &, float, float, float, float, float, float, float, float)>("DrawRotatedTile", &CanvasWrapper::DrawRotatedTile);
	cl_CanvasWrapper.set<void(CanvasWrapper::*)(Vector2)>("SetPosition", &CanvasWrapper::SetPosition);
	cl_CanvasWrapper.set<Vector2(CanvasWrapper::*)()>("GetPosition", &CanvasWrapper::GetPosition);
	cl_CanvasWrapper.set<void(CanvasWrapper::*)(Vector2)>("DrawBox", &CanvasWrapper::DrawBox);
	cl_CanvasWrapper.set<void(CanvasWrapper::*)(Vector2)>("FillBox", &CanvasWrapper::FillBox);
	cl_CanvasWrapper.set<void(CanvasWrapper::*)(Vector2, Vector2, Vector2)>("FillTriangle", &CanvasWrapper::FillTriangle);
	cl_CanvasWrapper.set<void(CanvasWrapper::*)(Vector2, Vector2, Vector2, LinearColor)>("FillTriangle", &CanvasWrapper::FillTriangle);
	cl_CanvasWrapper.set<void(CanvasWrapper::*)(Vector2, Vector2)>("DrawLine", &CanvasWrapper::DrawLine);
	cl_CanvasWrapper.set<void(CanvasWrapper::*)(Vector2, Vector2, float)>("DrawLine", &CanvasWrapper::DrawLine);
	cl_CanvasWrapper.set<void(CanvasWrapper::*)(Vector2, Vector2)>("DrawRect", &CanvasWrapper::DrawRect);
	cl_CanvasWrapper.set<Vector2(CanvasWrapper::*)(Vector)>("Project", &CanvasWrapper::Project);
	cl_CanvasWrapper.set<Vector2F(CanvasWrapper::*)(Vector)>("ProjectF", &CanvasWrapper::ProjectF);
	cl_CanvasWrapper.set<Vector2(CanvasWrapper::*)()>("GetSize", &CanvasWrapper::GetSize);

	module.set("CanvasWrapper", cl_CanvasWrapper);
}
