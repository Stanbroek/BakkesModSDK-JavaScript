void bind_TrainingEditorSaveDataWrapper([[maybe_unused]] v8::Isolate* isolate, v8pp::module& module)
{

	v8pp::class_<TrainingEditorSaveDataWrapper> cl_TrainingEditorSaveDataWrapper(isolate);
	cl_TrainingEditorSaveDataWrapper.inherit<ObjectWrapper>();
	cl_TrainingEditorSaveDataWrapper.ctor<uintptr_t>();
	cl_TrainingEditorSaveDataWrapper.set<bool(TrainingEditorSaveDataWrapper::*)() const>("IsNull", &TrainingEditorSaveDataWrapper::IsNull);
	cl_TrainingEditorSaveDataWrapper.set<UnrealStringWrapper(TrainingEditorSaveDataWrapper::*)()>("GetCode", &TrainingEditorSaveDataWrapper::GetCode);
	cl_TrainingEditorSaveDataWrapper.set<UnrealStringWrapper(TrainingEditorSaveDataWrapper::*)()>("GetTM_Name", &TrainingEditorSaveDataWrapper::GetTM_Name);
	cl_TrainingEditorSaveDataWrapper.set<unsigned char(TrainingEditorSaveDataWrapper::*)()>("GetType", &TrainingEditorSaveDataWrapper::GetType);
	cl_TrainingEditorSaveDataWrapper.set<void(TrainingEditorSaveDataWrapper::*)(unsigned char)>("SetType", &TrainingEditorSaveDataWrapper::SetType);
	cl_TrainingEditorSaveDataWrapper.set<unsigned char(TrainingEditorSaveDataWrapper::*)()>("GetDifficulty", &TrainingEditorSaveDataWrapper::GetDifficulty);
	cl_TrainingEditorSaveDataWrapper.set<void(TrainingEditorSaveDataWrapper::*)(unsigned char)>("SetDifficulty", &TrainingEditorSaveDataWrapper::SetDifficulty);
	cl_TrainingEditorSaveDataWrapper.set<UnrealStringWrapper(TrainingEditorSaveDataWrapper::*)()>("GetCreatorName", &TrainingEditorSaveDataWrapper::GetCreatorName);
	cl_TrainingEditorSaveDataWrapper.set<UnrealStringWrapper(TrainingEditorSaveDataWrapper::*)()>("GetDescription", &TrainingEditorSaveDataWrapper::GetDescription);
	cl_TrainingEditorSaveDataWrapper.set<int(TrainingEditorSaveDataWrapper::*)()>("GetNumRounds", &TrainingEditorSaveDataWrapper::GetNumRounds);
	cl_TrainingEditorSaveDataWrapper.set<void(TrainingEditorSaveDataWrapper::*)(int)>("SetNumRounds", &TrainingEditorSaveDataWrapper::SetNumRounds);
	cl_TrainingEditorSaveDataWrapper.set<long long unsigned int(TrainingEditorSaveDataWrapper::*)()>("GetCreatedAt", &TrainingEditorSaveDataWrapper::GetCreatedAt);
	cl_TrainingEditorSaveDataWrapper.set<void(TrainingEditorSaveDataWrapper::*)(long long unsigned int)>("SetCreatedAt", &TrainingEditorSaveDataWrapper::SetCreatedAt);
	cl_TrainingEditorSaveDataWrapper.set<long long unsigned int(TrainingEditorSaveDataWrapper::*)()>("GetUpdatedAt", &TrainingEditorSaveDataWrapper::GetUpdatedAt);
	cl_TrainingEditorSaveDataWrapper.set<void(TrainingEditorSaveDataWrapper::*)(long long unsigned int)>("SetUpdatedAt", &TrainingEditorSaveDataWrapper::SetUpdatedAt);
	// [deprecated] cl_TrainingEditorSaveDataWrapper.set<SteamID(TrainingEditorSaveDataWrapper::*)()>("GetCreatorPlayerID", &TrainingEditorSaveDataWrapper::GetCreatorPlayerID);
	cl_TrainingEditorSaveDataWrapper.set<void(TrainingEditorSaveDataWrapper::*)(SteamID)>("SetCreatorPlayerID", &TrainingEditorSaveDataWrapper::SetCreatorPlayerID);
	cl_TrainingEditorSaveDataWrapper.set<void(TrainingEditorSaveDataWrapper::*)()>("Init", &TrainingEditorSaveDataWrapper::Init);
	cl_TrainingEditorSaveDataWrapper.set<UniqueIDWrapper(TrainingEditorSaveDataWrapper::*)()>("GetCreatorPlayerUniqueID", &TrainingEditorSaveDataWrapper::GetCreatorPlayerUniqueID);

	module.set("TrainingEditorSaveDataWrapper", cl_TrainingEditorSaveDataWrapper);
}
