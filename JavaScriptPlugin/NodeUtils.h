#pragma once
#include "v8.h"

inline std::string to_string(const v8::String::Utf8Value& value) {
  return *value ? *value : "";
}

inline std::string to_string(v8::Isolate* isolate,
                             const v8::Local<v8::Value>& value) {
  const v8::String::Utf8Value str(isolate, value);
  return to_string(str);
}

inline std::string maybe_to_string(v8::Isolate* isolate,
                                   const v8::MaybeLocal<v8::String>& value) {
  v8::Local<v8::Value> localValue;
  if (!value.ToLocal(&localValue)) {
    return "";
  }
  const v8::String::Utf8Value str(isolate, localValue);
  return to_string(str);
}

template <int N>
v8::Local<v8::String> to_v8_string(v8::Isolate* isolate,
                                   const char (&literal)[N]) {
  return v8::String::NewFromUtf8Literal(isolate, literal);
}

inline v8::Local<v8::String> to_v8_string(v8::Isolate* isolate) {
  return v8::String::NewFromUtf8Literal(isolate, "");
}

inline v8::Local<v8::String> to_v8_string(v8::Isolate* isolate,
                                          const std::string& str) {
  return v8::String::NewFromUtf8(isolate, str.c_str())
      .FromMaybe(to_v8_string(isolate));
}

/// https://github.com/pmed/v8pp/blob/v1.7.0/v8pp/context.cpp#L255
inline v8::Local<v8::Value> RunScript(v8::Isolate* isolate,
                                      std::string const& source,
                                      std::string const& filename) {
  v8::EscapableHandleScope scope(isolate);
  const v8::Local<v8::Context> context = isolate->GetCurrentContext();

  v8::Local<v8::Script> script;
  v8::ScriptOrigin origin(isolate, to_v8_string(isolate, filename));
  bool const isValid =
      v8::Script::Compile(context, v8pp::to_v8(isolate, source), &origin)
          .ToLocal(&script);
  (void)isValid;

  v8::Local<v8::Value> result;
  if (!script.IsEmpty()) {
    bool const isSuccessful = script->Run(context).ToLocal(&result);
    (void)isSuccessful;
  }
  return scope.Escape(result);
}

/// https://github.com/nodejs/node/blob/v16.4.1/src/node_errors.cc#L52
static std::string GetErrorSource(v8::Isolate* isolate,
                                  const v8::Local<v8::Context> context,
                                  const v8::Local<v8::Message> message,
                                  bool* addedExceptionLine) {
  v8::MaybeLocal<v8::String> sourceLineMaybe = message->GetSourceLine(context);
  std::string sourceLine = to_string(isolate, sourceLineMaybe.ToLocalChecked());
  *addedExceptionLine = false;

  // If source maps have been enabled, the exception line will instead be
  // added in the JavaScript context:
  // node::Environment* env = node::Environment::GetCurrent(isolate);
  node::Environment* env =
      node::GetCurrentEnvironment(isolate->GetCurrentContext());
  const bool hasSourceMapUrl =
      !message->GetScriptOrigin().SourceMapUrl().IsEmpty();
  if (hasSourceMapUrl && env != nullptr && env->source_maps_enabled()) {
    return sourceLine;
  }

  if (sourceLine.find("node-do-not-add-exception-line") != std::string::npos) {
    return sourceLine;
  }

  // Because of how node modules work, all scripts are wrapped with a
  // "function (module, exports, __filename, ...) {"
  // to provide script local variables.
  //
  // When reporting errors on the first line of a script, this wrapper
  // function is leaked to the user. There used to be a hack here to
  // truncate off the first 62 characters, but it caused numerous other
  // problems when vm.runIn*Context() methods were used for non-module
  // code.
  //
  // If we ever decide to re-instate such a hack, the following steps
  // must be taken:
  //
  // 1. Pass a flag around to say "this code was wrapped"
  // 2. Update the stack frame output so that it is also correct.
  //
  // It would probably be simpler to add a line rather than add some
  // number of characters to the first line, since V8 truncates the
  // sourceline to 78 characters, and we end up not providing very much
  // useful debugging info to the user if we remove 62 characters.

  // Print (filename):(line number): (message).
  const v8::ScriptOrigin origin = message->GetScriptOrigin();
  const std::string filenameString =
      to_string(isolate, message->GetScriptResourceName());
  int lineNum = message->GetLineNumber(context).FromJust();

  const int scriptStart =
      (lineNum - origin.LineOffset()) == 1 ? origin.ColumnOffset() : 0;
  int start = message->GetStartColumn(context).FromMaybe(0);
  int end = message->GetEndColumn(context).FromMaybe(0);
  if (start >= scriptStart) {
    CHECK_GE(end, start);
    start -= scriptStart;
    end -= scriptStart;
  }

  std::string buf =
      fmt::format("{:s}:{:d}\n{:s}\n", filenameString, lineNum, sourceLine);
  CHECK_GT(buf.size(), 0);
  *addedExceptionLine = true;

  if (start > end || start < 0 ||
      static_cast<size_t>(end) > sourceLine.size()) {
    return buf;
  }

  constexpr int kUnderlineBufSize = 1020;
  char underlineBuf[kUnderlineBufSize + 4];
  int off = 0;
  // Print wavy underline (GetUnderline is deprecated).
  for (int i = 0; i < start; i++) {
    if (sourceLine[i] == '\0' || off >= kUnderlineBufSize) {
      break;
    }
    CHECK_LT(off, kUnderlineBufSize);
    underlineBuf[off++] = (sourceLine[i] == '\t') ? '\t' : ' ';
  }
  for (int i = start; i < end; i++) {
    if (sourceLine[i] == '\0' || off >= kUnderlineBufSize) {
      break;
    }
    CHECK_LT(off, kUnderlineBufSize);
    underlineBuf[off++] = '^';
  }
  CHECK_LE(off, kUnderlineBufSize);
  underlineBuf[off++] = '\n';

  return buf + std::string(underlineBuf, off);
}

/// https://github.com/nodejs/node/blob/v16.4.1/src/node_errors.cc#L149
static std::string GetStackTrace(v8::Isolate* isolate,
                                 const v8::Local<v8::StackTrace> stack) {
  std::string stackTrace;
  for (int i = 0; i < stack->GetFrameCount(); i++) {
    const v8::Local<v8::StackFrame> stackFrame = stack->GetFrame(isolate, i);
    std::string fnNameS = to_string(isolate, stackFrame->GetFunctionName());
    std::string scriptName = to_string(isolate, stackFrame->GetScriptName());
    const int lineNumber = stackFrame->GetLineNumber();
    const int column = stackFrame->GetColumn();

    if (stackFrame->IsEval()) {
      if (stackFrame->GetScriptId() == v8::Message::kNoScriptIdInfo) {
        scriptName = "<anonymous>";
      }
      stackTrace += fmt::format(
          "    at [eval] "
          "(\x1b[36m{:s}:\x1b[36;1m{:d}\x1b[36m:\x1b[36;1m{:d}\x1b[39m)\n",
          scriptName,
          lineNumber,
          column);
      break;
    }

    if (fnNameS.empty()) {
      fnNameS = "<anonymous>";
    }
    stackTrace += fmt::format(
        "    at {:s} "
        "(\x1b[36m{:s}:\x1b[36;1m{:d}\x1b[36m:\x1b[36;1m{:d}\x1b[39m)\n",
        fnNameS,
        scriptName,
        lineNumber,
        column);
  }

  return stackTrace;
}

/// https://github.com/nodejs/node/blob/v16.4.1/src/node_errors.cc#L184
static std::string GetException(v8::Isolate* isolate,
                                const v8::Local<v8::Context> context,
                                const v8::Local<v8::Value> err,
                                const v8::Local<v8::Message> message) {
  std::string exception;
  bool addedExceptionLine = false;
  const std::string source =
      GetErrorSource(isolate, context, message, &addedExceptionLine);
  exception += fmt::format("{:s}\n", source);
  const std::string reason = to_string(
      isolate, err->ToDetailString(context).FromMaybe(v8::Local<v8::String>()));
  exception += fmt::format("\x1b[31m{:s}\x1b[39m\n", reason);

  const v8::Local<v8::StackTrace> stack = message->GetStackTrace();
  if (!stack.IsEmpty()) {
    exception += GetStackTrace(isolate, stack);
  }

  return exception;
}

/// From https://github.com/nodejs/node/blob/v16.4.1/src/node_errors.cc#L201
inline std::string GetCaughtException(v8::Isolate* isolate,
                                      const v8::Local<v8::Context> context,
                                      const v8::TryCatch& tryCatch) {
  CHECK(tryCatch.HasCaught());
  return GetException(
      isolate, context, tryCatch.Exception(), tryCatch.Message());
}
