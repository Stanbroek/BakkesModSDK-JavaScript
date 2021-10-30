void bind_AttachmentPickup([[maybe_unused]] v8::Isolate* isolate, v8pp::module& module)
{

	v8pp::class_<AttachmentPickup> cl_AttachmentPickup(isolate);
	cl_AttachmentPickup.inherit<RumblePickupComponentWrapper>();
	cl_AttachmentPickup.ctor<uintptr_t>();
	cl_AttachmentPickup.set<void(AttachmentPickup::*)()>("PickupEnd", &AttachmentPickup::PickupEnd);
	cl_AttachmentPickup.set<void(AttachmentPickup::*)()>("PickupStart", &AttachmentPickup::PickupStart);

	module.set("AttachmentPickup", cl_AttachmentPickup);
}
