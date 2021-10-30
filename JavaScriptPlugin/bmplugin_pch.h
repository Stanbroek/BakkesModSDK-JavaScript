/// pch.h: This is a precompiled header file.
/// Files listed below are compiled only once, improving build performance for
/// future builds. This also affects IntelliSense performance, including code
/// completion and many code browsing features. However, files listed here are
/// ALL re-compiled if any one of them is updated between builds. Do not add
/// files here that you will be updating frequently as this negates the
/// performance advantage.

#ifndef BMPLUGIN_PCH_H
#define BMPLUGIN_PCH_H

/// add headers that you want to pre-compile here
#define WIN32_LEAN_AND_MEAN  // Exclude rarely-used stuff from Windows headers
#define BMDEBUG

// Windows Headers
#include <Windows.h>
#include <list>
#include <memory>
#include <string>
#include <vector>
#include <utility>
#include <iostream>
#include <filesystem>

// Node
#include "aliased_buffer.h"
#include "base_object-inl.h"
#include "env-inl.h"
#include "node_internals.h"
#include "util-inl.h"
#include "uv.h"
#include "v8.h"

// FMT
#define FMT_HEADER_ONLY
#include "fmt/format.h"
#include "fmt/chrono.h"
#include "fmt/os.h"
#include "fmt/ostream.h"
#include "fmt/ranges.h"
#include "fmt/xchar.h"

// v8pp
#pragma warning(push, 0)
#include "v8pp/class.hpp"
#include "v8pp/module.hpp"
#pragma warning(pop)

// BakkesMod SDK
#pragma comment(lib, "pluginsdk.lib")
#pragma warning(push, 0)
#include "bakkesmod/plugin/bakkesmodplugin.h"

// Include everything
#include "bakkesmod/wrappers/includes.h"
// and even more
#include "bakkesmod/wrappers/Engine/WorldInfoWrapper.h"
//#include "bakkesmod/wrappers/GameObject/RumbleComponent/BasketballPickup.h"
#include "bakkesmod/wrappers/GameObject/PerformanceStats/StartGraphSystemWrapper.h"
#include "bakkesmod/wrappers/GameObject/Stats/StatEventWrapper.h"
#include "bakkesmod/wrappers/PluginManagerWrapper.h"
#include "bakkesmod/wrappers/kismet/SequenceVariableWrapper.h"
#include "bakkesmod/wrappers/kismet/SequenceWrapper.h"
//#include "bakkesmod/wrappers/replaywrapper.h"

#include "utils/parser.h"
#pragma warning(pop)

// BakkesMod SDK Additions
#include "utils/cvarmanagerwrapperdebug.h"
#include "utils/exception_safety.h"

enum { PLUGINTYPE_ALL = 0x00 };

// General Utils
#include "utils/persistent_storage.h"
#include "utils/stringify.h"
#include "utils/threading.h"
#include "utils/timer.h"

#endif  // BMPLUGIN_PCH_H
