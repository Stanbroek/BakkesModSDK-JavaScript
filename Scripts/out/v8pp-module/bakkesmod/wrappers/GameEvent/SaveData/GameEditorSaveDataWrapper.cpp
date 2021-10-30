void bind_GameEditorSaveDataWrapper([[maybe_unused]] v8::Isolate* isolate, v8pp::module& module)
{

	v8pp::class_<GameEditorSaveDataWrapper> cl_GameEditorSaveDataWrapper(isolate);
	cl_GameEditorSaveDataWrapper.inherit<SaveDataWrapper>();
	cl_GameEditorSaveDataWrapper.ctor<uintptr_t>();
	cl_GameEditorSaveDataWrapper.set<UnrealStringWrapper(GameEditorSaveDataWrapper::*)()>("GetLoadedSaveName", &GameEditorSaveDataWrapper::GetLoadedSaveName);
	cl_GameEditorSaveDataWrapper.set<TrainingEditorSaveDataWrapper(GameEditorSaveDataWrapper::*)()>("GetTrainingData", &GameEditorSaveDataWrapper::GetTrainingData);
	cl_GameEditorSaveDataWrapper.set<void(GameEditorSaveDataWrapper::*)(TrainingEditorSaveDataWrapper)>("SetTrainingData", &GameEditorSaveDataWrapper::SetTrainingData);
	cl_GameEditorSaveDataWrapper.set<int(GameEditorSaveDataWrapper::*)()>("GetPlayerTeamNumber", &GameEditorSaveDataWrapper::GetPlayerTeamNumber);
	cl_GameEditorSaveDataWrapper.set<void(GameEditorSaveDataWrapper::*)(int)>("SetPlayerTeamNumber", &GameEditorSaveDataWrapper::SetPlayerTeamNumber);
	cl_GameEditorSaveDataWrapper.set<long unsigned int(GameEditorSaveDataWrapper::*)()>("GetbUnowned", &GameEditorSaveDataWrapper::GetbUnowned);
	cl_GameEditorSaveDataWrapper.set<void(GameEditorSaveDataWrapper::*)(long unsigned int)>("SetbUnowned", &GameEditorSaveDataWrapper::SetbUnowned);
	cl_GameEditorSaveDataWrapper.set<int(GameEditorSaveDataWrapper::*)()>("GetShotsCompleted", &GameEditorSaveDataWrapper::GetShotsCompleted);
	cl_GameEditorSaveDataWrapper.set<void(GameEditorSaveDataWrapper::*)(int)>("SetShotsCompleted", &GameEditorSaveDataWrapper::SetShotsCompleted);
	cl_GameEditorSaveDataWrapper.set<UnrealStringWrapper(GameEditorSaveDataWrapper::*)()>("GetFavoritesFolderPath", &GameEditorSaveDataWrapper::GetFavoritesFolderPath);
	cl_GameEditorSaveDataWrapper.set<UnrealStringWrapper(GameEditorSaveDataWrapper::*)()>("GetMyTrainingFolderPath", &GameEditorSaveDataWrapper::GetMyTrainingFolderPath);
	cl_GameEditorSaveDataWrapper.set<UnrealStringWrapper(GameEditorSaveDataWrapper::*)()>("GetDownloadedFolderPath", &GameEditorSaveDataWrapper::GetDownloadedFolderPath);
	cl_GameEditorSaveDataWrapper.set<unsigned char(GameEditorSaveDataWrapper::*)(long unsigned int, long unsigned int)>("GetTrainingSaveType", &GameEditorSaveDataWrapper::GetTrainingSaveType);
	cl_GameEditorSaveDataWrapper.set<void(GameEditorSaveDataWrapper::*)()>("Init", &GameEditorSaveDataWrapper::Init);

	module.set("GameEditorSaveDataWrapper", cl_GameEditorSaveDataWrapper);
}
