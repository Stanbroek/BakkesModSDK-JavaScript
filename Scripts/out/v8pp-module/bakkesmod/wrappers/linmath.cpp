void bind_linmath([[maybe_unused]] v8::Isolate* isolate, v8pp::module& module)
{
	module.set("vec2_add", &vec2_add);
	module.set("vec2_sub", &vec2_sub);
	module.set("vec2_scale", &vec2_scale);
	module.set("vec2_mul_inner", &vec2_mul_inner);
	module.set("vec2_len", &vec2_len);
	module.set("vec2_norm", &vec2_norm);
	module.set("vec2_min", &vec2_min);
	module.set("vec2_max", &vec2_max);
	module.set("vec3_add", &vec3_add);
	module.set("vec3_sub", &vec3_sub);
	module.set("vec3_scale", &vec3_scale);
	module.set("vec3_mul_inner", &vec3_mul_inner);
	module.set("vec3_len", &vec3_len);
	module.set("vec3_norm", &vec3_norm);
	module.set("vec3_min", &vec3_min);
	module.set("vec3_max", &vec3_max);
	module.set("vec4_add", &vec4_add);
	module.set("vec4_sub", &vec4_sub);
	module.set("vec4_scale", &vec4_scale);
	module.set("vec4_mul_inner", &vec4_mul_inner);
	module.set("vec4_len", &vec4_len);
	module.set("vec4_norm", &vec4_norm);
	module.set("vec4_min", &vec4_min);
	module.set("vec4_max", &vec4_max);
	module.set("vec3_dot", &vec3_dot);
	module.set("vec3_mul_cross", &vec3_mul_cross);
	module.set("vec3_reflect", &vec3_reflect);
	module.set("vec4_mul_cross", &vec4_mul_cross);
	module.set("vec4_reflect", &vec4_reflect);
	//module.set("mat4x4_identity", &mat4x4_identity);
	//module.set("mat4x4_dup", &mat4x4_dup);
	//module.set("mat4x4_row", &mat4x4_row);
	//module.set("mat4x4_col", &mat4x4_col);
	//module.set("mat4x4_transpose", &mat4x4_transpose);
	//module.set("mat4x4_add", &mat4x4_add);
	//module.set("mat4x4_sub", &mat4x4_sub);
	//module.set("mat4x4_scale", &mat4x4_scale);
	//module.set("mat4x4_scale_aniso", &mat4x4_scale_aniso);
	//module.set("mat4x4_mul", &mat4x4_mul);
	//module.set("mat4x4_mul_vec4", &mat4x4_mul_vec4);
	//module.set("mat4x4_translate", &mat4x4_translate);
	//module.set("mat4x4_translate_in_place", &mat4x4_translate_in_place);
	//module.set("mat4x4_from_vec3_mul_outer", &mat4x4_from_vec3_mul_outer);
	//module.set("mat4x4_rotate", &mat4x4_rotate);
	//module.set("mat4x4_rotate_X", &mat4x4_rotate_X);
	//module.set("mat4x4_rotate_Y", &mat4x4_rotate_Y);
	//module.set("mat4x4_rotate_Z", &mat4x4_rotate_Z);
	//module.set("mat4x4_invert", &mat4x4_invert);
	//module.set("mat4x4_orthonormalize", &mat4x4_orthonormalize);
	//module.set("mat4x4_frustum", &mat4x4_frustum);
	//module.set("mat4x4_ortho", &mat4x4_ortho);
	//module.set("mat4x4_perspective", &mat4x4_perspective);
	//module.set("mat4x4_look_at", &mat4x4_look_at);
	module.set("quat_identity", &quat_identity);
	module.set("quat_add", &quat_add);
	module.set("quat_sub", &quat_sub);
	module.set("quat_mul", &quat_mul);
	module.set("quat_scale", &quat_scale);
	module.set("quat_inner_product", &quat_inner_product);
	module.set("quat_conj", &quat_conj);
	module.set("quat_rotate", &quat_rotate);
	module.set("quat_mul_vec3", &quat_mul_vec3);
	//module.set("mat4x4_from_quat", &mat4x4_from_quat);
	//module.set("mat4x4o_mul_quat", &mat4x4o_mul_quat);
	//module.set("quat_from_mat4x4", &quat_from_mat4x4);
}
