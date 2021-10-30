// Undefined dependencies
declare class type_index {}

type vec2 = [number, number]
type vec3 = [number, number, number]
type vec4 = [number, number, number, number]
type mat4x4 = [vec4, vec4, vec4, vec4]
type quat = [number, number, number, number]

//declare module "bakkesmod" {
declare namespace BakkesMod {
    const cvarManager: CVarManagerWrapper;
    const gameWrapper: GameWrapper;
    const __version__: string;

    /** PLUGINTYPE [enumeration] */
    enum PLUGINTYPE {
        PLUGINTYPE_FREEPLAY = 1,
        PLUGINTYPE_CUSTOM_TRAINING = 2,
        PLUGINTYPE_SPECTATOR = 4,
        PLUGINTYPE_BOTAI = 8,
        PLUGINTYPE_REPLAY = 16,
        PLUGINTYPE_THREADED = 32,
        PLUGINTYPE_THREADEDUNLOAD = 64,
    }

    /** NOTIFIER_PERMISSION [enumeration] */
    enum NOTIFIER_PERMISSION {
        PERMISSION_ALL = 0,
        PERMISSION_MENU = 1,
        PERMISSION_SOCCAR = 2,
        PERMISSION_FREEPLAY = 4,
        PERMISSION_CUSTOM_TRAINING = 8,
        PERMISSION_ONLINE = 16,
        PERMISSION_PAUSEMENU_CLOSED = 32,
        PERMISSION_REPLAY = 64,
        PERMISSION_OFFLINE = 128,
    }

    /** void vec2_add(vec2 r, vec2 const a, vec2 const b) [free function] */
    function vec2_add(r: vec2, a: vec2, b: vec2): void;

    /** void vec2_sub(vec2 r, vec2 const a, vec2 const b) [free function] */
    function vec2_sub(r: vec2, a: vec2, b: vec2): void;

    /** void vec2_scale(vec2 r, vec2 const v, float const s) [free function] */
    function vec2_scale(r: vec2, v: vec2, s: number): void;

    /** float vec2_mul_inner(vec2 const a, vec2 const b) [free function] */
    function vec2_mul_inner(a: vec2, b: vec2): number;

    /** float vec2_len(vec2 const v) [free function] */
    function vec2_len(v: vec2): number;

    /** void vec2_norm(vec2 r, vec2 const v) [free function] */
    function vec2_norm(r: vec2, v: vec2): void;

    /** void vec2_min(vec2 r, vec2 a, vec2 b) [free function] */
    function vec2_min(r: vec2, a: vec2, b: vec2): void;

    /** void vec2_max(vec2 r, vec2 a, vec2 b) [free function] */
    function vec2_max(r: vec2, a: vec2, b: vec2): void;

    /** void vec3_add(vec3 r, vec3 const a, vec3 const b) [free function] */
    function vec3_add(r: vec3, a: vec3, b: vec3): void;

    /** void vec3_sub(vec3 r, vec3 const a, vec3 const b) [free function] */
    function vec3_sub(r: vec3, a: vec3, b: vec3): void;

    /** void vec3_scale(vec3 r, vec3 const v, float const s) [free function] */
    function vec3_scale(r: vec3, v: vec3, s: number): void;

    /** float vec3_mul_inner(vec3 const a, vec3 const b) [free function] */
    function vec3_mul_inner(a: vec3, b: vec3): number;

    /** float vec3_len(vec3 const v) [free function] */
    function vec3_len(v: vec3): number;

    /** void vec3_norm(vec3 r, vec3 const v) [free function] */
    function vec3_norm(r: vec3, v: vec3): void;

    /** void vec3_min(vec3 r, vec3 a, vec3 b) [free function] */
    function vec3_min(r: vec3, a: vec3, b: vec3): void;

    /** void vec3_max(vec3 r, vec3 a, vec3 b) [free function] */
    function vec3_max(r: vec3, a: vec3, b: vec3): void;

    /** void vec4_add(vec4 r, vec4 const a, vec4 const b) [free function] */
    function vec4_add(r: vec4, a: vec4, b: vec4): void;

    /** void vec4_sub(vec4 r, vec4 const a, vec4 const b) [free function] */
    function vec4_sub(r: vec4, a: vec4, b: vec4): void;

    /** void vec4_scale(vec4 r, vec4 const v, float const s) [free function] */
    function vec4_scale(r: vec4, v: vec4, s: number): void;

    /** float vec4_mul_inner(vec4 const a, vec4 const b) [free function] */
    function vec4_mul_inner(a: vec4, b: vec4): number;

    /** float vec4_len(vec4 const v) [free function] */
    function vec4_len(v: vec4): number;

    /** void vec4_norm(vec4 r, vec4 const v) [free function] */
    function vec4_norm(r: vec4, v: vec4): void;

    /** void vec4_min(vec4 r, vec4 a, vec4 b) [free function] */
    function vec4_min(r: vec4, a: vec4, b: vec4): void;

    /** void vec4_max(vec4 r, vec4 a, vec4 b) [free function] */
    function vec4_max(r: vec4, a: vec4, b: vec4): void;

    /** float vec3_dot(vec3 const a, vec3 const b) [free function] */
    function vec3_dot(a: vec3, b: vec3): number;

    /** void vec3_mul_cross(vec3 r, vec3 const a, vec3 const b) [free function] */
    function vec3_mul_cross(r: vec3, a: vec3, b: vec3): void;

    /** void vec3_reflect(vec3 r, vec3 const v, vec3 const n) [free function] */
    function vec3_reflect(r: vec3, v: vec3, n: vec3): void;

    /** void vec4_mul_cross(vec4 r, vec4 a, vec4 b) [free function] */
    function vec4_mul_cross(r: vec4, a: vec4, b: vec4): void;

    /** void vec4_reflect(vec4 r, vec4 v, vec4 n) [free function] */
    function vec4_reflect(r: vec4, v: vec4, n: vec4): void;

    /** void mat4x4_identity(mat4x4 M) [free function] */
    function mat4x4_identity(M: mat4x4): void;

    /** void mat4x4_dup(mat4x4 M, mat4x4 N) [free function] */
    function mat4x4_dup(M: mat4x4, N: mat4x4): void;

    /** void mat4x4_row(vec4 r, mat4x4 M, int i) [free function] */
    function mat4x4_row(r: vec4, M: mat4x4, i: number): void;

    /** void mat4x4_col(vec4 r, mat4x4 M, int i) [free function] */
    function mat4x4_col(r: vec4, M: mat4x4, i: number): void;

    /** void mat4x4_transpose(mat4x4 M, mat4x4 N) [free function] */
    function mat4x4_transpose(M: mat4x4, N: mat4x4): void;

    /** void mat4x4_add(mat4x4 M, mat4x4 a, mat4x4 b) [free function] */
    function mat4x4_add(M: mat4x4, a: mat4x4, b: mat4x4): void;

    /** void mat4x4_sub(mat4x4 M, mat4x4 a, mat4x4 b) [free function] */
    function mat4x4_sub(M: mat4x4, a: mat4x4, b: mat4x4): void;

    /** void mat4x4_scale(mat4x4 M, mat4x4 a, float k) [free function] */
    function mat4x4_scale(M: mat4x4, a: mat4x4, k: number): void;

    /** void mat4x4_scale_aniso(mat4x4 M, mat4x4 a, float x, float y, float z) [free function] */
    function mat4x4_scale_aniso(M: mat4x4, a: mat4x4, x: number, y: number, z: number): void;

    /** void mat4x4_mul(mat4x4 M, mat4x4 a, mat4x4 b) [free function] */
    function mat4x4_mul(M: mat4x4, a: mat4x4, b: mat4x4): void;

    /** void mat4x4_mul_vec4(vec4 r, mat4x4 M, vec4 v) [free function] */
    function mat4x4_mul_vec4(r: vec4, M: mat4x4, v: vec4): void;

    /** void mat4x4_translate(mat4x4 T, float x, float y, float z) [free function] */
    function mat4x4_translate(T: mat4x4, x: number, y: number, z: number): void;

    /** void mat4x4_translate_in_place(mat4x4 M, float x, float y, float z) [free function] */
    function mat4x4_translate_in_place(M: mat4x4, x: number, y: number, z: number): void;

    /** void mat4x4_from_vec3_mul_outer(mat4x4 M, vec3 a, vec3 b) [free function] */
    function mat4x4_from_vec3_mul_outer(M: mat4x4, a: vec3, b: vec3): void;

    /** void mat4x4_rotate(mat4x4 R, mat4x4 M, float x, float y, float z, float angle) [free function] */
    function mat4x4_rotate(R: mat4x4, M: mat4x4, x: number, y: number, z: number, angle: number): void;

    /** void mat4x4_rotate_X(mat4x4 Q, mat4x4 M, float angle) [free function] */
    function mat4x4_rotate_X(Q: mat4x4, M: mat4x4, angle: number): void;

    /** void mat4x4_rotate_Y(mat4x4 Q, mat4x4 M, float angle) [free function] */
    function mat4x4_rotate_Y(Q: mat4x4, M: mat4x4, angle: number): void;

    /** void mat4x4_rotate_Z(mat4x4 Q, mat4x4 M, float angle) [free function] */
    function mat4x4_rotate_Z(Q: mat4x4, M: mat4x4, angle: number): void;

    /** void mat4x4_invert(mat4x4 T, mat4x4 M) [free function] */
    function mat4x4_invert(T: mat4x4, M: mat4x4): void;

    /** void mat4x4_orthonormalize(mat4x4 R, mat4x4 M) [free function] */
    function mat4x4_orthonormalize(R: mat4x4, M: mat4x4): void;

    /** void mat4x4_frustum(mat4x4 M, float l, float r, float b, float t, float n, float f) [free function] */
    function mat4x4_frustum(M: mat4x4, l: number, r: number, b: number, t: number, n: number, f: number): void;

    /** void mat4x4_ortho(mat4x4 M, float l, float r, float b, float t, float n, float f) [free function] */
    function mat4x4_ortho(M: mat4x4, l: number, r: number, b: number, t: number, n: number, f: number): void;

    /** void mat4x4_perspective(mat4x4 m, float y_fov, float aspect, float n, float f) [free function] */
    function mat4x4_perspective(m: mat4x4, y_fov: number, aspect: number, n: number, f: number): void;

    /** void mat4x4_look_at(mat4x4 m, vec3 eye, vec3 center, vec3 up) [free function] */
    function mat4x4_look_at(m: mat4x4, eye: vec3, center: vec3, up: vec3): void;

    /** void quat_identity(quat q) [free function] */
    function quat_identity(q: quat): void;

    /** void quat_add(quat r, quat a, quat b) [free function] */
    function quat_add(r: quat, a: quat, b: quat): void;

    /** void quat_sub(quat r, quat a, quat b) [free function] */
    function quat_sub(r: quat, a: quat, b: quat): void;

    /** void quat_mul(quat r, quat p, quat q) [free function] */
    function quat_mul(r: quat, p: quat, q: quat): void;

    /** void quat_scale(quat r, quat v, float s) [free function] */
    function quat_scale(r: quat, v: quat, s: number): void;

    /** float quat_inner_product(quat a, quat b) [free function] */
    function quat_inner_product(a: quat, b: quat): number;

    /** void quat_conj(quat r, quat q) [free function] */
    function quat_conj(r: quat, q: quat): void;

    /** void quat_rotate(quat r, float angle, vec3 axis) [free function] */
    function quat_rotate(r: quat, angle: number, axis: vec3): void;

    /** void quat_mul_vec3(vec3 r, quat q, vec3 v) [free function] */
    function quat_mul_vec3(r: vec3, q: quat, v: vec3): void;

    /** void mat4x4_from_quat(mat4x4 M, quat q) [free function] */
    function mat4x4_from_quat(M: mat4x4, q: quat): void;

    /** void mat4x4o_mul_quat(mat4x4 R, mat4x4 M, quat q) [free function] */
    function mat4x4o_mul_quat(R: mat4x4, M: mat4x4, q: quat): void;

    /** void quat_from_mat4x4(quat q, mat4x4 M) [free function] */
    function quat_from_mat4x4(q: quat, M: mat4x4): void;

    /** ToastType [enumeration] */
    enum ToastType {
        ToastType_Info = 0,
        ToastType_OK = 1,
        ToastType_Warning = 2,
        ToastType_Error = 3,
    }

    /** Vector [struct] */
    class Vector {
        // Public:
        /** Vector::X [variable] */
        X: number;

        /** Vector::Y [variable] */
        Y: number;

        /** Vector::Z [variable] */
        Z: number;

        /** Vector::Vector(FVector v) [constructor] */
        //public constructor(v: FVector);

        /** Vector::Vector(float x, float y, float z) [constructor] */
        public constructor(x: number, y: number, z: number);

        /** Vector::Vector(float def) [constructor] */
        //public constructor(def: number);

        /** Vector::Vector() [constructor] */
        //public constructor();

        /** float Vector::magnitude() const [member function] */
        public magnitude(): number;

        /** void Vector::normalize() [member function] */
        public normalize(): void;

        /** Vector Vector::getNormalized() [member function] */
        public getNormalized(): Vector;

        /** Vector Vector::clone() const [member function] */
        public clone(): Vector;

        /** static float Vector::dot(Vector const v1, Vector const v2) [member function] */
        public dot(v1: Vector, v2: Vector): number;

        /** static Vector Vector::cross(Vector const v1, Vector const v2) [member function] */
        public cross(v1: Vector, v2: Vector): Vector;

        /** static Vector Vector::lerp(Vector const v1, Vector const v2, float const t) [member function] */
        public lerp(v1: Vector, v2: Vector, t: number): Vector;

        /** static Vector Vector::slerp(Vector const v1, Vector const v2, float const t) [member function] */
        public slerp(v1: Vector, v2: Vector, t: number): Vector;

    }

    /** Rotator [struct] */
    class Rotator {
        // Public:
        /** Rotator::Pitch [variable] */
        Pitch: number;

        /** Rotator::Yaw [variable] */
        Yaw: number;

        /** Rotator::Roll [variable] */
        Roll: number;

        /** Rotator::Rotator(FRotator r) [constructor] */
        //public constructor(r: FRotator);

        /** Rotator::Rotator(int pitch, int yaw, int roll) [constructor] */
        public constructor(pitch: number, yaw: number, roll: number);

        /** Rotator::Rotator(int def) [constructor] */
        //public constructor(def: number);

        /** Rotator::Rotator() [constructor] */
        //public constructor();

    }

    /** int fixRotator(int newRotation) [free function] */
    function fixRotator(newRotation: number): number;

    /** int fixPitch(int newRotation) [free function] */
    function fixPitch(newRotation: number): number;

    /** Rotator VectorToRotator(Vector const vVector) [free function] */
    function VectorToRotator(vVector: Vector): Rotator;

    /** Vector RotatorToVector(Rotator const R) [free function] */
    function RotatorToVector(R: Rotator): Vector;

    /** Quat [struct] */
    class Quat {
        // Public:
        /** Quat::X [variable] */
        X: number;

        /** Quat::Y [variable] */
        Y: number;

        /** Quat::Z [variable] */
        Z: number;

        /** Quat::W [variable] */
        W: number;

        /** Quat::Quat(float w, float x, float y, float z) [constructor] */
        public constructor(w: number, x: number, y: number, z: number);

        /** Quat::Quat() [constructor] */
        //public constructor();

        /** Quat Quat::conjugate() const [member function] */
        public conjugate(): Quat;

        /** Quat Quat::normalize() [member function] */
        public normalize(): Quat;

    }

    /** Quat QuatSlerp(Quat const q1, Quat const q2, float percent) [free function] */
    function QuatSlerp(q1: Quat, q2: Quat, percent: number): Quat;

    /** Vector RotateVectorWithQuat(Vector const v, Quat const q) [free function] */
    function RotateVectorWithQuat(v: Vector, q: Quat): Vector;

    /** Quat RotatorToQuat(Rotator const rot) [free function] */
    function RotatorToQuat(rot: Rotator): Quat;

    /** Rotator QuatToRotator(Quat const q) [free function] */
    function QuatToRotator(q: Quat): Rotator;

    /** Vector2 [struct] */
    class Vector2 {
        // Public:
        /** Vector2::X [variable] */
        X: number;

        /** Vector2::Y [variable] */
        Y: number;

        /** Vector2 Vector2::minus(Vector2 const other) const [member function] */
        public minus(other: Vector2): Vector2;

        /** Vector2::Vector2() [constructor] */
        public constructor();

    }

    /** Vector2F [struct] */
    class Vector2F {
        // Public:
        /** Vector2F::X [variable] */
        X: number;

        /** Vector2F::Y [variable] */
        Y: number;

        /** Vector2F Vector2F::minus(Vector2 const other) const [member function] */
        public minus(other: Vector2): Vector2F;

        /** Vector2F Vector2F::minus(Vector2F const other) const [member function] */
        public minus(other: Vector2F): Vector2F;

        /** Vector2F::Vector2F() [constructor] */
        public constructor();

    }

    /** LinearColor [struct] */
    class LinearColor {
        // Public:
        /** LinearColor::R [variable] */
        R: number;

        /** LinearColor::G [variable] */
        G: number;

        /** LinearColor::B [variable] */
        B: number;

        /** LinearColor::A [variable] */
        A: number;

        /** LinearColor::LinearColor() [constructor] */
        public constructor();

    }

    /** PredictionInfo [struct] */
    class PredictionInfo {
        // Public:
        /** PredictionInfo::Time [variable] */
        Time: number;

        /** PredictionInfo::ArchTopTime [variable] */
        ArchTopTime: number;

        /** PredictionInfo::Location [variable] */
        Location: Vector;

        /** PredictionInfo::Velocity [variable] */
        Velocity: Vector;

        /** PredictionInfo::ArchTop [variable] */
        ArchTop: Vector;

        /** PredictionInfo::ArchTopVelocity [variable] */
        ArchTopVelocity: Vector;

        /** PredictionInfo::bHitWall [variable] */
        bHitWall: boolean;

        /** PredictionInfo::bHitGround [variable] */
        bHitGround: boolean;

        /** PredictionInfo::PredictionInfo() [constructor] */
        public constructor();

    }

    /** SteamID [struct] */
    class SteamID {
        // Public:
        /** SteamID::ID [variable] */
        ID: number;

        /** SteamID::SteamID() [constructor] */
        public constructor();

    }

    /** SkillRating [struct] */
    class SkillRating {
        // Public:
        /** SkillRating::Mu [variable] */
        Mu: number;

        /** SkillRating::Sigma [variable] */
        Sigma: number;

        /** SkillRating::SkillRating() [constructor] */
        public constructor();

    }

    /** SkillRank [struct] */
    class SkillRank {
        // Public:
        /** SkillRank::Tier [variable] */
        Tier: number;

        /** SkillRank::Division [variable] */
        Division: number;

        /** SkillRank::MatchesPlayed [variable] */
        MatchesPlayed: number;

        /** SkillRank::SkillRank() [constructor] */
        public constructor();

    }

    /** UnrealColor [struct] */
    class UnrealColor {
        // Public:
        /** UnrealColor::B [variable] */
        B: number;

        /** UnrealColor::G [variable] */
        G: number;

        /** UnrealColor::R [variable] */
        R: number;

        /** UnrealColor::A [variable] */
        A: number;

        /** UnrealColor::UnrealColor() [constructor] */
        public constructor();

    }

    /** ControllerInput [struct] */
    class ControllerInput {
        // Public:
        /** ControllerInput::Throttle [variable] */
        Throttle: number;

        /** ControllerInput::Steer [variable] */
        Steer: number;

        /** ControllerInput::Pitch [variable] */
        Pitch: number;

        /** ControllerInput::Yaw [variable] */
        Yaw: number;

        /** ControllerInput::Roll [variable] */
        Roll: number;

        /** ControllerInput::DodgeForward [variable] */
        DodgeForward: number;

        /** ControllerInput::DodgeStrafe [variable] */
        DodgeStrafe: number;

        /** ControllerInput::Handbrake [variable] */
        Handbrake: boolean;

        /** ControllerInput::Jump [variable] */
        Jump: boolean;

        /** ControllerInput::ActivateBoost [variable] */
        ActivateBoost: boolean;

        /** ControllerInput::HoldingBoost [variable] */
        HoldingBoost: boolean;

        /** ControllerInput::Jumped [variable] */
        Jumped: boolean;

        /** ControllerInput::ControllerInput() [constructor] */
        public constructor();

    }

    /** RecordedSample [struct] */
    class RecordedSample {
        // Public:
        /** RecordedSample::Low [variable] */
        Low: number;

        /** RecordedSample::High [variable] */
        High: number;

        /** RecordedSample::RecordedSample() [constructor] */
        public constructor();

    }

    /** POV [struct] */
    class POV {
        // Public:
        /** POV::location [variable] */
        location: Vector;

        /** POV::rotation [variable] */
        rotation: Rotator;

        /** POV::FOV [variable] */
        FOV: number;

        /** POV::POV() [constructor] */
        public constructor();

    }

    /** ViewTarget [struct] */
    class ViewTarget {
        // Public:
        /** ViewTarget::Target [variable] */
        Target: any;

        /** ViewTarget::Controller [variable] */
        Controller: any;

        /** ViewTarget::POV [variable] */
        POV: POV;

        /** ViewTarget::AspectRatio [variable] */
        AspectRatio: number;

        /** ViewTarget::PRI [variable] */
        PRI: any;

        /** ViewTarget::ViewTarget() [constructor] */
        public constructor();

    }

    /** CameraSave [struct] */
    class CameraSave {
        // Public:
        /** CameraSave::InvertSwivelPitch [variable] */
        InvertSwivelPitch: boolean;

        /** CameraSave::CameraShake [variable] */
        CameraShake: boolean;

        /** CameraSave::CameraSave() [constructor] */
        public constructor();

    }

    /** ProfileCameraSettings [struct] */
    class ProfileCameraSettings {
        // Public:
        /** ProfileCameraSettings::FOV [variable] */
        FOV: number;

        /** ProfileCameraSettings::Height [variable] */
        Height: number;

        /** ProfileCameraSettings::Pitch [variable] */
        Pitch: number;

        /** ProfileCameraSettings::Distance [variable] */
        Distance: number;

        /** ProfileCameraSettings::Stiffness [variable] */
        Stiffness: number;

        /** ProfileCameraSettings::SwivelSpeed [variable] */
        SwivelSpeed: number;

        /** ProfileCameraSettings::TransitionSpeed [variable] */
        TransitionSpeed: number;

        /** ProfileCameraSettings::ProfileCameraSettings() [constructor] */
        public constructor();

    }

    /** GamepadSettings [struct] */
    class GamepadSettings {
        // Public:
        /** GamepadSettings::ControllerDeadzone [variable] */
        ControllerDeadzone: number;

        /** GamepadSettings::DodgeInputThreshold [variable] */
        DodgeInputThreshold: number;

        /** GamepadSettings::SteeringSensitivity [variable] */
        SteeringSensitivity: number;

        /** GamepadSettings::AirControlSensitivity [variable] */
        AirControlSensitivity: number;

        /** GamepadSettings::GamepadSettings() [constructor] */
        public constructor();

    }

    /** RBState [struct] */
    class RBState {
        // Public:
        /** RBState::Quaternion [variable] */
        Quaternion: Quat;

        /** RBState::Location [variable] */
        Location: Vector;

        /** RBState::LinearVelocity [variable] */
        LinearVelocity: Vector;

        /** RBState::AngularVelocity [variable] */
        AngularVelocity: Vector;

        /** RBState::Time [variable] */
        Time: number;

        /** RBState::bSleeping [variable] */
        bSleeping: boolean;

        /** RBState::bNewData [variable] */
        bNewData: boolean;

        /** RBState::RBState() [constructor] */
        public constructor();

    }

    /** WorldContactData [struct] */
    class WorldContactData {
        // Public:
        /** WorldContactData::bHasContact [variable] */
        bHasContact: boolean;

        /** WorldContactData::Location [variable] */
        Location: Vector;

        /** WorldContactData::Velocity [variable] */
        Velocity: Vector;

        /** WorldContactData::Normal [variable] */
        Normal: Vector;

        /** WorldContactData::WorldContactData() [constructor] */
        public constructor();

    }

    /** StickyForceData [struct] */
    class StickyForceData {
        // Public:
        /** StickyForceData::Ground [variable] */
        Ground: number;

        /** StickyForceData::Wall [variable] */
        Wall: number;

        /** StickyForceData::StickyForceData() [constructor] */
        public constructor();

    }

    /** WheelContactData [struct] */
    class WheelContactData {
        // Public:
        /** WheelContactData::bHasContact [variable] */
        bHasContact: boolean;

        /** WheelContactData::bHasContactWithWorldGeometry [variable] */
        bHasContactWithWorldGeometry: boolean;

        /** WheelContactData::HasContactChangeTime [variable] */
        HasContactChangeTime: number;

        /** WheelContactData::Actor [variable] */
        Actor: any;

        /** WheelContactData::Component [variable] */
        Component: any;

        /** WheelContactData::Location [variable] */
        Location: Vector;

        /** WheelContactData::Normal [variable] */
        Normal: Vector;

        /** WheelContactData::LatDirection [variable] */
        LatDirection: Vector;

        /** WheelContactData::LongDirection [variable] */
        LongDirection: Vector;

        /** WheelContactData::PhysMatProp [variable] */
        PhysMatProp: any;

        /** WheelContactData::WheelContactData() [constructor] */
        public constructor();

    }

    /** ReplayScoreData [struct] */
    class ReplayScoreData {
        // Public:
        /** ReplayScoreData::ScoredBy [variable] */
        ScoredBy: bigint;

        /** ReplayScoreData::AssistedBy [variable] */
        AssistedBy: bigint;

        /** ReplayScoreData::Speed [variable] */
        Speed: number;

        /** ReplayScoreData::Time [variable] */
        Time: number;

        /** ReplayScoreData::ScoreTeam [variable] */
        ScoreTeam: number;

        /** ReplayScoreData::ReplayScoreData() [constructor] */
        public constructor();

    }

    /** VideoSettings [struct] */
    class VideoSettings {
        // Public:
        /** VideoSettings::bVsync [variable] */
        bVsync: boolean;

        /** VideoSettings::bShowWeatherFX [variable] */
        bShowWeatherFX: boolean;

        /** VideoSettings::bShowLightShafts [variable] */
        bShowLightShafts: boolean;

        /** VideoSettings::bTranslucentArenaShaders [variable] */
        bTranslucentArenaShaders: boolean;

        /** VideoSettings::bShowLensFlares [variable] */
        bShowLensFlares: boolean;

        /** VideoSettings::bEnableHDRSideBySideVisualizer [variable] */
        bEnableHDRSideBySideVisualizer: boolean;

        /** VideoSettings::bUncappedFramerate [variable] */
        bUncappedFramerate: boolean;

        /** VideoSettings::HDRBrightnessScale [variable] */
        HDRBrightnessScale: number;

        /** VideoSettings::HDRPaperWhiteScale [variable] */
        HDRPaperWhiteScale: number;

        /** VideoSettings::HDRGammaScale [variable] */
        HDRGammaScale: number;

        /** VideoSettings::WindowMode [variable] */
        WindowMode: number;

        /** VideoSettings::Resolution [variable] */
        Resolution: string;

        /** VideoSettings::MaxFPS [variable] */
        MaxFPS: number;

        /** VideoSettings::VideoOptions [variable] */
        VideoOptions: {[key: string]: string};

        /** VideoSettings::VideoSettings() [constructor] */
        public constructor();

    }

    /** GUIDWrapper [struct] */
    class GUIDWrapper {
        // Public:
        /** GUIDWrapper::GUIDWrapper(int32_t a, int32_t b, int32_t c, int32_t d) [constructor] */
        public constructor(a: number, b: number, c: number, d: number);

        /** GUIDWrapper::GUIDWrapper(FGuid const & guid) [constructor] */
        //public constructor(guid: FGuid);

        /** GUIDWrapper::A [variable] */
        A: number;

        /** GUIDWrapper::B [variable] */
        B: number;

        /** GUIDWrapper::C [variable] */
        C: number;

        /** GUIDWrapper::D [variable] */
        D: number;

        /** std::string GUIDWrapper::ToString(GUIDWrapper::EGuidFormats format=::GUIDWrapper::UniqueObjectGuid) const [member function] */
        public ToString(format?: EGuidFormats): string;

    }

    /** GUIDWrapper::EGuidFormats [enumeration] */
    enum EGuidFormats {
        Digits = 0,
        DigitsWithHyphens = 1,
        DigitsWithHyphensInBraces = 2,
        DigitsWithHyphensInParentheses = 3,
        HexValuesInBraces = 4,
        UniqueObjectGuid = 5,
    }

    /** TRADEHOLD [enumeration] */
    enum TRADEHOLD {
        TRADEHOLD_P2P = -2,
        TRADEHOLD_ALL = -1,
        TRADEHOLD_NONE = 0,
    }

    /** PRODUCTQUALITY [enumeration] */
    enum PRODUCTQUALITY {
        Common = 0,
        Uncommon = 1,
        Rare = 2,
        VeryRare = 3,
        Import = 4,
        Exotic = 5,
        BlackMarket = 6,
        Premium = 7,
        Limited = 8,
        MAX = 9,
    }

    /** UNLOCKMETHOD [enumeration] */
    enum UNLOCKMETHOD {
        Default = 0,
        Drop = 1,
        Special = 2,
        Reward = 3,
        DLC = 4,
        Never = 5,
        MAX_ = 6,
    }

    /** CARBODY [enumeration] */
    enum CARBODY {
        CAR_BACKFIRE = 21,
        CAR_BREAKOUT = 22,
        CAR_BREAKOUTTYPES = 1416,
        CAR_OCTANE = 23,
        CAR_OCTANEZSR = 1568,
        CAR_PALADIN = 24,
        CAR_ROADHOG = 25,
        CAR_ROADHOGXL = 1300,
        CAR_GIZMO = 26,
        CAR_SWEETTOOTH = 27,
        CAR_XDEVIL = 28,
        CAR_XDEVILMK2 = 1159,
        CAR_HOTSHOT = 29,
        CAR_MERC = 30,
        CAR_VENOM = 31,
        CAR_TAKUMI = 402,
        CAR_TAKUMIRXT = 1295,
        CAR_DOMINUS = 403,
        CAR_DOMINUSGT = 1018,
        CAR_SCARAB = 404,
        CAR_ZIPPY = 523,
        CAR_DELOREAN = 597,
        CAR_RIPPER = 600,
        CAR_GROG = 607,
        CAR_ARMADILLO = 625,
        CAR_WARTHOG = 723,
        CAR_BATMOBILE = 803,
        CAR_MASAMUNE = 1171,
        CAR_MARAUDER = 1172,
        CAR_AFTERSHOCK = 1286,
        CAR_ESPER = 1317,
        CAR_PROTEUS = 1475,
        CAR_TRITON = 1478,
        CAR_VULCAN = 1533,
        CAR_TWINMILL = 1603,
        CAR_BONESHAKER = 1623,
        CAR_ENDO = 1624,
        CAR_ICECHARGER = 1675,
        CAR_MANTIS = 1691,
        CAR_JOGER619RS = 1856,
        CAR_CENTIO = 1919,
        CAR_ANIMUSGP = 1932,
    }

    /** OnlinePlatform [enumeration] */
    enum OnlinePlatform {
        OnlinePlatform_Unknown = 0,
        OnlinePlatform_Steam = 1,
        OnlinePlatform_PS4 = 2,
        OnlinePlatform_PS3 = 3,
        OnlinePlatform_Dingo = 4,
        OnlinePlatform_QQ = 5,
        OnlinePlatform_OldNNX = 6,
        OnlinePlatform_NNX = 7,
        OnlinePlatform_PsyNet = 8,
        OnlinePlatform_Deleted = 9,
        OnlinePlatform_WeGame = 10,
        OnlinePlatform_Epic = 11,
        OnlinePlatform_MAX = 12,
    }

    /** CVarWrapper [class] */
    class CVarWrapper {
        // Public:
        /** CVarWrapper::CVarWrapper(uintptr_t mem, std::type_index pluginIdx) [constructor] */
        public constructor(mem: bigint, pluginIdx: type_index);

        /** std::string CVarWrapper::getCVarName() [member function] */
        public getCVarName(): string;

        /** int CVarWrapper::getIntValue() [member function] */
        public getIntValue(): number;

        /** float CVarWrapper::getFloatValue() [member function] */
        public getFloatValue(): number;

        /** bool CVarWrapper::getBoolValue() [member function] */
        public getBoolValue(): boolean;

        /** LinearColor CVarWrapper::getColorValue() [member function] */
        public getColorValue(): LinearColor;

        /** std::string CVarWrapper::getStringValue() [member function] */
        public getStringValue(): string;

        /** std::string CVarWrapper::getDescription() [member function] */
        public getDescription(): string;

        /** std::string const CVarWrapper::GetDefaultValue() [member function] */
        public GetDefaultValue(): string;

        /** bool CVarWrapper::HasMinimum() [member function] */
        public HasMinimum(): boolean;

        /** bool CVarWrapper::HasMaximum() [member function] */
        public HasMaximum(): boolean;

        /** float CVarWrapper::GetMinimum() [member function] */
        public GetMinimum(): number;

        /** float CVarWrapper::GetMaximum() [member function] */
        public GetMaximum(): number;

        /** bool CVarWrapper::IsHidden() [member function] */
        public IsHidden(): boolean;

        /** bool CVarWrapper::ShouldSaveToCfg() [member function] */
        public ShouldSaveToCfg(): boolean;

        /** void CVarWrapper::ResetToDefault() [member function] */
        public ResetToDefault(): void;

        /** void CVarWrapper::notify() [member function] */
        public notify(): void;

        /** void CVarWrapper::setValue(std::string value) [member function] */
        public setValue(value: string): void;

        /** void CVarWrapper::setValue(int value) [member function] */
        public setValue(value: number): void;

        /** void CVarWrapper::setValue(float value) [member function] */
        public setValue(value: number): void;

        /** void CVarWrapper::setValue(LinearColor value) [member function] */
        public setValue(value: LinearColor): void;

        /** void CVarWrapper::addOnValueChanged(std::function<void (std::basic_string<char>, CVarWrapper)> changeFunc) [member function] */
        public addOnValueChanged(changeFunc: (unk0: string, unk1: CVarWrapper) => void): void;

        /** void CVarWrapper::removeOnValueChanged() [member function] */
        public removeOnValueChanged(): void;

        /** void CVarWrapper::bindTo(std::shared_ptr<int> var) [member function] */
        //public bindTo(var_: number): void;

        /** void CVarWrapper::bindTo(std::shared_ptr<float> var) [member function] */
        //public bindTo(var_: number): void;

        /** void CVarWrapper::bindTo(std::shared_ptr<std::basic_string<char> > var) [member function] */
        //public bindTo(var_: string): void;

        /** void CVarWrapper::bindTo(std::shared_ptr<bool> var) [member function] */
        //public bindTo(var_: boolean): void;

        /** void CVarWrapper::bindTo(std::shared_ptr<LinearColor> var) [member function] */
        //public bindTo(var_: LinearColor): void;

        /** bool CVarWrapper::IsNull() [member function] */
        public IsNull(): boolean;

    }

    /** CVarManagerWrapper [class] */
    class CVarManagerWrapper {
        // Public:
        /** CVarManagerWrapper::CVarManagerWrapper(uintptr_t mem, std::type_index pluginIdx) [constructor] */
        public constructor(mem: bigint, pluginIdx: type_index);

        /** void CVarManagerWrapper::executeCommand(std::string command, bool log=true) [member function] */
        public executeCommand(command: string, log?: boolean): void;

        /** void CVarManagerWrapper::registerNotifier(std::string cvar, commandNotifier notifier, std::string description, unsigned char permissions) [member function] */
        //public registerNotifier(cvar: string, notifier: (arguments: string[]) => void, description: string, permissions: number): void;

        /** void CVarManagerWrapper::registerNotifier(std::string cvar, std::function<void (std::vector<std::basic_string<char>, std::allocator<std::basic_string<char> > >)> notifier, std::string description, unsigned char permissions) [member function] */
        public registerNotifier(cvar: string, notifier: (arguments: string[]) => void, description: string, permissions: number): void;

        /** bool CVarManagerWrapper::removeNotifier(std::string cvar) [member function] */
        public removeNotifier(cvar: string): boolean;

        /** CVarWrapper CVarManagerWrapper::registerCvar(std::string cvar, std::string defaultValue, std::string desc="", bool searchAble=true, bool hasMin=false, float min=0, bool hasMax=false, float max=0, bool saveToCfg=true) [member function] */
        public registerCvar(cvar: string, defaultValue: string, desc?: string, searchAble?: boolean, hasMin?: boolean, min?: number, hasMax?: boolean, max?: number, saveToCfg?: boolean): CVarWrapper;

        /** bool CVarManagerWrapper::removeCvar(std::string cvar) [member function] */
        public removeCvar(cvar: string): boolean;

        /** void CVarManagerWrapper::log(std::string text) [member function] */
        public log(text: string): void;

        /** void CVarManagerWrapper::log(std::wstring text) [member function] */
        public log(text: string): void;

        /** CVarWrapper CVarManagerWrapper::getCvar(std::string cvar) [member function] */
        public getCvar(cvar: string): CVarWrapper;

        /** std::string CVarManagerWrapper::getBindStringForKey(std::string key) [member function] */
        public getBindStringForKey(key: string): string;

        /** void CVarManagerWrapper::setBind(std::string key, std::string command) [member function] */
        public setBind(key: string, command: string): void;

        /** void CVarManagerWrapper::removeBind(std::string key) [member function] */
        public removeBind(key: string): void;

        /** std::string CVarManagerWrapper::getAlias(std::string alias) [member function] */
        public getAlias(alias: string): string;

        /** void CVarManagerWrapper::setAlias(std::string key, std::string script) [member function] */
        public setAlias(key: string, script: string): void;

        /** void CVarManagerWrapper::backupCfg(std::string path) [member function] */
        public backupCfg(path: string): void;

        /** void CVarManagerWrapper::backupBinds(std::string path) [member function] */
        public backupBinds(path: string): void;

        /** void CVarManagerWrapper::loadCfg(std::string path) [member function] */
        public loadCfg(path: string): void;

    }

    /** ArrayWrapper<ActorWrapper> [class] */
    class ArrayWrapper_ActorWrapper {
        // Public:
        /** ArrayWrapper<ActorWrapper>::ArrayWrapper(uintptr_t mem) [constructor] */
        public constructor(mem: bigint);

        /** int ArrayWrapper<ActorWrapper>::Count() [member function] */
        public Count(): number;

        /** ActorWrapper ArrayWrapper<ActorWrapper>::Get(int index) [member function] */
        public Get(index: number): ActorWrapper;

        /** bool ArrayWrapper<ActorWrapper>::IsNull() [member function] */
        public IsNull(): boolean;

    }

    /** ArrayWrapper<CarComponentWrapper> [class] */
    class ArrayWrapper_CarComponentWrapper {
        // Public:
        /** ArrayWrapper<CarComponentWrapper>::ArrayWrapper(uintptr_t mem) [constructor] */
        public constructor(mem: bigint);

        /** int ArrayWrapper<CarComponentWrapper>::Count() [member function] */
        public Count(): number;

        /** CarComponentWrapper ArrayWrapper<CarComponentWrapper>::Get(int index) [member function] */
        public Get(index: number): CarComponentWrapper;

        /** bool ArrayWrapper<CarComponentWrapper>::IsNull() [member function] */
        public IsNull(): boolean;

    }

    /** ArrayWrapper<PriWrapper> [class] */
    class ArrayWrapper_PriWrapper {
        // Public:
        /** ArrayWrapper<PriWrapper>::ArrayWrapper(uintptr_t mem) [constructor] */
        public constructor(mem: bigint);

        /** int ArrayWrapper<PriWrapper>::Count() [member function] */
        public Count(): number;

        /** PriWrapper ArrayWrapper<PriWrapper>::Get(int index) [member function] */
        public Get(index: number): PriWrapper;

        /** bool ArrayWrapper<PriWrapper>::IsNull() [member function] */
        public IsNull(): boolean;

    }

    /** ArrayWrapper<TeamWrapper> [class] */
    class ArrayWrapper_TeamWrapper {
        // Public:
        /** ArrayWrapper<TeamWrapper>::ArrayWrapper(uintptr_t mem) [constructor] */
        public constructor(mem: bigint);

        /** int ArrayWrapper<TeamWrapper>::Count() [member function] */
        public Count(): number;

        /** TeamWrapper ArrayWrapper<TeamWrapper>::Get(int index) [member function] */
        public Get(index: number): TeamWrapper;

        /** bool ArrayWrapper<TeamWrapper>::IsNull() [member function] */
        public IsNull(): boolean;

    }

    /** ArrayWrapper<CarWrapper> [class] */
    class ArrayWrapper_CarWrapper {
        // Public:
        /** ArrayWrapper<CarWrapper>::ArrayWrapper(uintptr_t mem) [constructor] */
        public constructor(mem: bigint);

        /** int ArrayWrapper<CarWrapper>::Count() [member function] */
        public Count(): number;

        /** CarWrapper ArrayWrapper<CarWrapper>::Get(int index) [member function] */
        public Get(index: number): CarWrapper;

        /** bool ArrayWrapper<CarWrapper>::IsNull() [member function] */
        public IsNull(): boolean;

    }

    /** ArrayWrapper<BallWrapper> [class] */
    class ArrayWrapper_BallWrapper {
        // Public:
        /** ArrayWrapper<BallWrapper>::ArrayWrapper(uintptr_t mem) [constructor] */
        public constructor(mem: bigint);

        /** int ArrayWrapper<BallWrapper>::Count() [member function] */
        public Count(): number;

        /** BallWrapper ArrayWrapper<BallWrapper>::Get(int index) [member function] */
        public Get(index: number): BallWrapper;

        /** bool ArrayWrapper<BallWrapper>::IsNull() [member function] */
        public IsNull(): boolean;

    }

    /** ArrayWrapper<WheelWrapper> [class] */
    class ArrayWrapper_WheelWrapper {
        // Public:
        /** ArrayWrapper<WheelWrapper>::ArrayWrapper(uintptr_t mem) [constructor] */
        public constructor(mem: bigint);

        /** int ArrayWrapper<WheelWrapper>::Count() [member function] */
        public Count(): number;

        /** WheelWrapper ArrayWrapper<WheelWrapper>::Get(int index) [member function] */
        public Get(index: number): WheelWrapper;

        /** bool ArrayWrapper<WheelWrapper>::IsNull() [member function] */
        public IsNull(): boolean;

    }

    /** ArrayWrapper<RBActorWrapper> [class] */
    class ArrayWrapper_RBActorWrapper {
        // Public:
        /** ArrayWrapper<RBActorWrapper>::ArrayWrapper(uintptr_t mem) [constructor] */
        public constructor(mem: bigint);

        /** int ArrayWrapper<RBActorWrapper>::Count() [member function] */
        public Count(): number;

        /** RBActorWrapper ArrayWrapper<RBActorWrapper>::Get(int index) [member function] */
        public Get(index: number): RBActorWrapper;

        /** bool ArrayWrapper<RBActorWrapper>::IsNull() [member function] */
        public IsNull(): boolean;

    }

    /** ArrayWrapper<GoalWrapper> [class] */
    class ArrayWrapper_GoalWrapper {
        // Public:
        /** ArrayWrapper<GoalWrapper>::ArrayWrapper(uintptr_t mem) [constructor] */
        public constructor(mem: bigint);

        /** int ArrayWrapper<GoalWrapper>::Count() [member function] */
        public Count(): number;

        /** GoalWrapper ArrayWrapper<GoalWrapper>::Get(int index) [member function] */
        public Get(index: number): GoalWrapper;

        /** bool ArrayWrapper<GoalWrapper>::IsNull() [member function] */
        public IsNull(): boolean;

    }

    /** ArrayWrapper<SampleHistoryWrapper> [class] */
    class ArrayWrapper_SampleHistoryWrapper {
        // Public:
        /** ArrayWrapper<SampleHistoryWrapper>::ArrayWrapper(uintptr_t mem) [constructor] */
        public constructor(mem: bigint);

        /** int ArrayWrapper<SampleHistoryWrapper>::Count() [member function] */
        public Count(): number;

        /** SampleHistoryWrapper ArrayWrapper<SampleHistoryWrapper>::Get(int index) [member function] */
        public Get(index: number): SampleHistoryWrapper;

        /** bool ArrayWrapper<SampleHistoryWrapper>::IsNull() [member function] */
        public IsNull(): boolean;

    }

    /** ArrayWrapper<StatGraphWrapper> [class] */
    class ArrayWrapper_StatGraphWrapper {
        // Public:
        /** ArrayWrapper<StatGraphWrapper>::ArrayWrapper(uintptr_t mem) [constructor] */
        public constructor(mem: bigint);

        /** int ArrayWrapper<StatGraphWrapper>::Count() [member function] */
        public Count(): number;

        /** StatGraphWrapper ArrayWrapper<StatGraphWrapper>::Get(int index) [member function] */
        public Get(index: number): StatGraphWrapper;

        /** bool ArrayWrapper<StatGraphWrapper>::IsNull() [member function] */
        public IsNull(): boolean;

    }

    /** ArrayWrapper<ControllerWrapper> [class] */
    class ArrayWrapper_ControllerWrapper {
        // Public:
        /** ArrayWrapper<ControllerWrapper>::ArrayWrapper(uintptr_t mem) [constructor] */
        public constructor(mem: bigint);

        /** int ArrayWrapper<ControllerWrapper>::Count() [member function] */
        public Count(): number;

        /** ControllerWrapper ArrayWrapper<ControllerWrapper>::Get(int index) [member function] */
        public Get(index: number): ControllerWrapper;

        /** bool ArrayWrapper<ControllerWrapper>::IsNull() [member function] */
        public IsNull(): boolean;

    }

    /** ArrayWrapper<PlayerControllerWrapper> [class] */
    class ArrayWrapper_PlayerControllerWrapper {
        // Public:
        /** ArrayWrapper<PlayerControllerWrapper>::ArrayWrapper(uintptr_t mem) [constructor] */
        public constructor(mem: bigint);

        /** int ArrayWrapper<PlayerControllerWrapper>::Count() [member function] */
        public Count(): number;

        /** PlayerControllerWrapper ArrayWrapper<PlayerControllerWrapper>::Get(int index) [member function] */
        public Get(index: number): PlayerControllerWrapper;

        /** bool ArrayWrapper<PlayerControllerWrapper>::IsNull() [member function] */
        public IsNull(): boolean;

    }

    /** ArrayWrapper<SequenceWrapper> [class] */
    class ArrayWrapper_SequenceWrapper {
        // Public:
        /** ArrayWrapper<SequenceWrapper>::ArrayWrapper(uintptr_t mem) [constructor] */
        public constructor(mem: bigint);

        /** int ArrayWrapper<SequenceWrapper>::Count() [member function] */
        public Count(): number;

        /** SequenceWrapper ArrayWrapper<SequenceWrapper>::Get(int index) [member function] */
        public Get(index: number): SequenceWrapper;

        /** bool ArrayWrapper<SequenceWrapper>::IsNull() [member function] */
        public IsNull(): boolean;

    }

    /** ArrayWrapper<SequenceObjectWrapper> [class] */
    class ArrayWrapper_SequenceObjectWrapper {
        // Public:
        /** ArrayWrapper<SequenceObjectWrapper>::ArrayWrapper(uintptr_t mem) [constructor] */
        public constructor(mem: bigint);

        /** int ArrayWrapper<SequenceObjectWrapper>::Count() [member function] */
        public Count(): number;

        /** SequenceObjectWrapper ArrayWrapper<SequenceObjectWrapper>::Get(int index) [member function] */
        public Get(index: number): SequenceObjectWrapper;

        /** bool ArrayWrapper<SequenceObjectWrapper>::IsNull() [member function] */
        public IsNull(): boolean;

    }

    /** ArrayWrapper<SequenceVariableWrapper> [class] */
    class ArrayWrapper_SequenceVariableWrapper {
        // Public:
        /** ArrayWrapper<SequenceVariableWrapper>::ArrayWrapper(uintptr_t mem) [constructor] */
        public constructor(mem: bigint);

        /** int ArrayWrapper<SequenceVariableWrapper>::Count() [member function] */
        public Count(): number;

        /** SequenceVariableWrapper ArrayWrapper<SequenceVariableWrapper>::Get(int index) [member function] */
        public Get(index: number): SequenceVariableWrapper;

        /** bool ArrayWrapper<SequenceVariableWrapper>::IsNull() [member function] */
        public IsNull(): boolean;

    }

    /** ArrayWrapper<ProductWrapper> [class] */
    class ArrayWrapper_ProductWrapper {
        // Public:
        /** ArrayWrapper<ProductWrapper>::ArrayWrapper(uintptr_t mem) [constructor] */
        public constructor(mem: bigint);

        /** int ArrayWrapper<ProductWrapper>::Count() [member function] */
        public Count(): number;

        /** ProductWrapper ArrayWrapper<ProductWrapper>::Get(int index) [member function] */
        public Get(index: number): ProductWrapper;

        /** bool ArrayWrapper<ProductWrapper>::IsNull() [member function] */
        public IsNull(): boolean;

    }

    /** ArrayWrapper<OnlineProductWrapper> [class] */
    class ArrayWrapper_OnlineProductWrapper {
        // Public:
        /** ArrayWrapper<OnlineProductWrapper>::ArrayWrapper(uintptr_t mem) [constructor] */
        public constructor(mem: bigint);

        /** int ArrayWrapper<OnlineProductWrapper>::Count() [member function] */
        public Count(): number;

        /** OnlineProductWrapper ArrayWrapper<OnlineProductWrapper>::Get(int index) [member function] */
        public Get(index: number): OnlineProductWrapper;

        /** bool ArrayWrapper<OnlineProductWrapper>::IsNull() [member function] */
        public IsNull(): boolean;

    }

    /** ArrayWrapper<ProductAttributeWrapper> [class] */
    class ArrayWrapper_ProductAttributeWrapper {
        // Public:
        /** ArrayWrapper<ProductAttributeWrapper>::ArrayWrapper(uintptr_t mem) [constructor] */
        public constructor(mem: bigint);

        /** int ArrayWrapper<ProductAttributeWrapper>::Count() [member function] */
        public Count(): number;

        /** ProductAttributeWrapper ArrayWrapper<ProductAttributeWrapper>::Get(int index) [member function] */
        public Get(index: number): ProductAttributeWrapper;

        /** bool ArrayWrapper<ProductAttributeWrapper>::IsNull() [member function] */
        public IsNull(): boolean;

    }

    /** ArrayWrapper<int> [class] */
    class ArrayWrapper_int {
        // Public:
        /** ArrayWrapper<int>::ArrayWrapper(uintptr_t mem) [constructor] */
        public constructor(mem: bigint);

        /** int ArrayWrapper<int>::Count() [member function] */
        public Count(): number;

        /** int ArrayWrapper<int>::Get(int index) [member function] */
        public Get(index: number): number;

        /** bool ArrayWrapper<int>::IsNull() [member function] */
        public IsNull(): boolean;

    }

    /** ArrayWrapper<unsigned long long> [class] */
    class ArrayWrapper_unsigned_long_long {
        // Public:
        /** ArrayWrapper<unsigned long long>::ArrayWrapper(uintptr_t mem) [constructor] */
        public constructor(mem: bigint);

        /** int ArrayWrapper<unsigned long long>::Count() [member function] */
        public Count(): number;

        /** long long unsigned int ArrayWrapper<unsigned long long>::Get(int index) [member function] */
        public Get(index: number): number;

        /** bool ArrayWrapper<unsigned long long>::IsNull() [member function] */
        public IsNull(): boolean;

    }

    /** ArrayWrapper<wchar_t> [class] */
    class ArrayWrapper_wchar_t {
        // Public:
        /** ArrayWrapper<wchar_t>::ArrayWrapper(uintptr_t mem) [constructor] */
        public constructor(mem: bigint);

        /** int ArrayWrapper<wchar_t>::Count() [member function] */
        public Count(): number;

        /** wchar_t ArrayWrapper<wchar_t>::Get(int index) [member function] */
        public Get(index: number): string;

        /** bool ArrayWrapper<wchar_t>::IsNull() [member function] */
        public IsNull(): boolean;

    }

    /** UnrealStringWrapper [class] */
    class UnrealStringWrapper extends ArrayWrapper_wchar_t {
        // Public:
        /** UnrealStringWrapper::UnrealStringWrapper(uintptr_t mem) [constructor] */
        public constructor(mem: bigint);

        /** std::string UnrealStringWrapper::ToString() [member function] */
        public ToString(): string;

        /** std::wstring UnrealStringWrapper::ToWideString() [member function] */
        public ToWideString(): string;

        /** bool UnrealStringWrapper::IsNull() [member function] */
        public IsNull(): boolean;

    }

    /** StructArrayWrapper<LinearColor> [class] */
    class StructArrayWrapper_LinearColor {
        // Public:
        /** StructArrayWrapper<LinearColor>::StructArrayWrapper(uintptr_t mem) [constructor] */
        public constructor(mem: bigint);

        /** int StructArrayWrapper<LinearColor>::Count() [member function] */
        public Count(): number;

        /** LinearColor StructArrayWrapper<LinearColor>::Get(int index) [member function] */
        public Get(index: number): LinearColor;

    }

    /** StructArrayWrapper<SteamID> [class] */
    class StructArrayWrapper_SteamID {
        // Public:
        /** StructArrayWrapper<SteamID>::StructArrayWrapper(uintptr_t mem) [constructor] */
        public constructor(mem: bigint);

        /** int StructArrayWrapper<SteamID>::Count() [member function] */
        public Count(): number;

        /** SteamID StructArrayWrapper<SteamID>::Get(int index) [member function] */
        public Get(index: number): SteamID;

    }

    /** StructArrayWrapper<ProfileCameraSettings> [class] */
    class StructArrayWrapper_ProfileCameraSettings {
        // Public:
        /** StructArrayWrapper<ProfileCameraSettings>::StructArrayWrapper(uintptr_t mem) [constructor] */
        public constructor(mem: bigint);

        /** int StructArrayWrapper<ProfileCameraSettings>::Count() [member function] */
        public Count(): number;

        /** ProfileCameraSettings StructArrayWrapper<ProfileCameraSettings>::Get(int index) [member function] */
        public Get(index: number): ProfileCameraSettings;

    }

    /** StructArrayWrapper<RecordedSample> [class] */
    class StructArrayWrapper_RecordedSample {
        // Public:
        /** StructArrayWrapper<RecordedSample>::StructArrayWrapper(uintptr_t mem) [constructor] */
        public constructor(mem: bigint);

        /** int StructArrayWrapper<RecordedSample>::Count() [member function] */
        public Count(): number;

        /** RecordedSample StructArrayWrapper<RecordedSample>::Get(int index) [member function] */
        public Get(index: number): RecordedSample;

    }

    /** StructArrayWrapper<ClubMember> [class] */
    class StructArrayWrapper_ClubMember {
        // Public:
        /** StructArrayWrapper<ClubMember>::StructArrayWrapper(uintptr_t mem) [constructor] */
        public constructor(mem: bigint);

        /** int StructArrayWrapper<ClubMember>::Count() [member function] */
        public Count(): number;

        /** ClubMember StructArrayWrapper<ClubMember>::Get(int index) [member function] */
        public Get(index: number): ClubMember;

    }

    /** ObjectWrapper [class] */
    class ObjectWrapper {
        // Public:
        /** ObjectWrapper::memory_address [variable] */
        memory_address: bigint;

        /** ObjectWrapper::ObjectWrapper(uintptr_t mem) [constructor] */
        public constructor(mem: bigint);

    }

    /** PrimitiveComponentWrapper [class] */
    class PrimitiveComponentWrapper extends ObjectWrapper {
        // Public:
        /** PrimitiveComponentWrapper::PrimitiveComponentWrapper(uintptr_t mem) [constructor] */
        public constructor(mem: bigint);

        /** bool PrimitiveComponentWrapper::IsNull() const [member function] */
        public IsNull(): boolean;

        /** unsigned char PrimitiveComponentWrapper::GetRBChannel() [member function] */
        public GetRBChannel(): number;

        /** void PrimitiveComponentWrapper::SetRBChannel(unsigned char newRBChannel) [member function] */
        public SetRBChannel(newRBChannel: number): void;

        /** unsigned char PrimitiveComponentWrapper::GetRBDominanceGroup() [member function] */
        public GetRBDominanceGroup(): number;

        /** void PrimitiveComponentWrapper::SetRBDominanceGroup(unsigned char newRBDominanceGroup) [member function] */
        public SetRBDominanceGroup(newRBDominanceGroup: number): void;

        /** long unsigned int PrimitiveComponentWrapper::GetbOnlyBlockActorMovement() [member function] */
        public GetbOnlyBlockActorMovement(): boolean;

        /** void PrimitiveComponentWrapper::SetbOnlyBlockActorMovement(long unsigned int newbOnlyBlockActorMovement) [member function] */
        public SetbOnlyBlockActorMovement(newbOnlyBlockActorMovement: boolean): void;

        /** long unsigned int PrimitiveComponentWrapper::GetHiddenGame() [member function] */
        public GetHiddenGame(): boolean;

        /** void PrimitiveComponentWrapper::SetHiddenGame(long unsigned int newHiddenGame) [member function] */
        public SetHiddenGame(newHiddenGame: boolean): void;

        /** long unsigned int PrimitiveComponentWrapper::GetbOwnerNoSee() [member function] */
        public GetbOwnerNoSee(): boolean;

        /** void PrimitiveComponentWrapper::SetbOwnerNoSee(long unsigned int newbOwnerNoSee) [member function] */
        public SetbOwnerNoSee(newbOwnerNoSee: boolean): void;

        /** long unsigned int PrimitiveComponentWrapper::GetbOnlyOwnerSee() [member function] */
        public GetbOnlyOwnerSee(): boolean;

        /** void PrimitiveComponentWrapper::SetbOnlyOwnerSee(long unsigned int newbOnlyOwnerSee) [member function] */
        public SetbOnlyOwnerSee(newbOnlyOwnerSee: boolean): void;

        /** long unsigned int PrimitiveComponentWrapper::GetbIgnoreOwnerHidden() [member function] */
        public GetbIgnoreOwnerHidden(): boolean;

        /** void PrimitiveComponentWrapper::SetbIgnoreOwnerHidden(long unsigned int newbIgnoreOwnerHidden) [member function] */
        public SetbIgnoreOwnerHidden(newbIgnoreOwnerHidden: boolean): void;

        /** long unsigned int PrimitiveComponentWrapper::GetbUseAsOccluder() [member function] */
        public GetbUseAsOccluder(): boolean;

        /** void PrimitiveComponentWrapper::SetbUseAsOccluder(long unsigned int newbUseAsOccluder) [member function] */
        public SetbUseAsOccluder(newbUseAsOccluder: boolean): void;

        /** long unsigned int PrimitiveComponentWrapper::GetbAllowApproximateOcclusion() [member function] */
        public GetbAllowApproximateOcclusion(): boolean;

        /** void PrimitiveComponentWrapper::SetbAllowApproximateOcclusion(long unsigned int newbAllowApproximateOcclusion) [member function] */
        public SetbAllowApproximateOcclusion(newbAllowApproximateOcclusion: boolean): void;

        /** long unsigned int PrimitiveComponentWrapper::GetbFirstFrameOcclusion() [member function] */
        public GetbFirstFrameOcclusion(): boolean;

        /** void PrimitiveComponentWrapper::SetbFirstFrameOcclusion(long unsigned int newbFirstFrameOcclusion) [member function] */
        public SetbFirstFrameOcclusion(newbFirstFrameOcclusion: boolean): void;

        /** long unsigned int PrimitiveComponentWrapper::GetbIgnoreNearPlaneIntersection() [member function] */
        public GetbIgnoreNearPlaneIntersection(): boolean;

        /** void PrimitiveComponentWrapper::SetbIgnoreNearPlaneIntersection(long unsigned int newbIgnoreNearPlaneIntersection) [member function] */
        public SetbIgnoreNearPlaneIntersection(newbIgnoreNearPlaneIntersection: boolean): void;

        /** long unsigned int PrimitiveComponentWrapper::GetbAcceptsStaticDecals() [member function] */
        public GetbAcceptsStaticDecals(): boolean;

        /** long unsigned int PrimitiveComponentWrapper::GetbAcceptsDynamicDecals() [member function] */
        public GetbAcceptsDynamicDecals(): boolean;

        /** long unsigned int PrimitiveComponentWrapper::GetbIsRefreshingDecals() [member function] */
        public GetbIsRefreshingDecals(): boolean;

        /** long unsigned int PrimitiveComponentWrapper::GetCastShadow() [member function] */
        public GetCastShadow(): boolean;

        /** void PrimitiveComponentWrapper::SetCastShadow(long unsigned int newCastShadow) [member function] */
        public SetCastShadow(newCastShadow: boolean): void;

        /** long unsigned int PrimitiveComponentWrapper::GetbForceDirectLightMap() [member function] */
        public GetbForceDirectLightMap(): boolean;

        /** void PrimitiveComponentWrapper::SetbForceDirectLightMap(long unsigned int newbForceDirectLightMap) [member function] */
        public SetbForceDirectLightMap(newbForceDirectLightMap: boolean): void;

        /** long unsigned int PrimitiveComponentWrapper::GetbCastDynamicShadow() [member function] */
        public GetbCastDynamicShadow(): boolean;

        /** void PrimitiveComponentWrapper::SetbCastDynamicShadow(long unsigned int newbCastDynamicShadow) [member function] */
        public SetbCastDynamicShadow(newbCastDynamicShadow: boolean): void;

        /** long unsigned int PrimitiveComponentWrapper::GetbCastStaticShadow() [member function] */
        public GetbCastStaticShadow(): boolean;

        /** void PrimitiveComponentWrapper::SetbCastStaticShadow(long unsigned int newbCastStaticShadow) [member function] */
        public SetbCastStaticShadow(newbCastStaticShadow: boolean): void;

        /** long unsigned int PrimitiveComponentWrapper::GetbSelfShadowOnly() [member function] */
        public GetbSelfShadowOnly(): boolean;

        /** void PrimitiveComponentWrapper::SetbSelfShadowOnly(long unsigned int newbSelfShadowOnly) [member function] */
        public SetbSelfShadowOnly(newbSelfShadowOnly: boolean): void;

        /** long unsigned int PrimitiveComponentWrapper::GetbNoModSelfShadow() [member function] */
        public GetbNoModSelfShadow(): boolean;

        /** void PrimitiveComponentWrapper::SetbNoModSelfShadow(long unsigned int newbNoModSelfShadow) [member function] */
        public SetbNoModSelfShadow(newbNoModSelfShadow: boolean): void;

        /** long unsigned int PrimitiveComponentWrapper::GetbAcceptsDynamicDominantLightShadows() [member function] */
        public GetbAcceptsDynamicDominantLightShadows(): boolean;

        /** void PrimitiveComponentWrapper::SetbAcceptsDynamicDominantLightShadows(long unsigned int newbAcceptsDynamicDominantLightShadows) [member function] */
        public SetbAcceptsDynamicDominantLightShadows(newbAcceptsDynamicDominantLightShadows: boolean): void;

        /** long unsigned int PrimitiveComponentWrapper::GetbCastHiddenShadow() [member function] */
        public GetbCastHiddenShadow(): boolean;

        /** void PrimitiveComponentWrapper::SetbCastHiddenShadow(long unsigned int newbCastHiddenShadow) [member function] */
        public SetbCastHiddenShadow(newbCastHiddenShadow: boolean): void;

        /** long unsigned int PrimitiveComponentWrapper::GetbCastShadowAsTwoSided() [member function] */
        public GetbCastShadowAsTwoSided(): boolean;

        /** void PrimitiveComponentWrapper::SetbCastShadowAsTwoSided(long unsigned int newbCastShadowAsTwoSided) [member function] */
        public SetbCastShadowAsTwoSided(newbCastShadowAsTwoSided: boolean): void;

        /** long unsigned int PrimitiveComponentWrapper::GetbAcceptsLights() [member function] */
        public GetbAcceptsLights(): boolean;

        /** void PrimitiveComponentWrapper::SetbAcceptsLights(long unsigned int newbAcceptsLights) [member function] */
        public SetbAcceptsLights(newbAcceptsLights: boolean): void;

        /** long unsigned int PrimitiveComponentWrapper::GetbAcceptsDynamicLights() [member function] */
        public GetbAcceptsDynamicLights(): boolean;

        /** void PrimitiveComponentWrapper::SetbAcceptsDynamicLights(long unsigned int newbAcceptsDynamicLights) [member function] */
        public SetbAcceptsDynamicLights(newbAcceptsDynamicLights: boolean): void;

        /** long unsigned int PrimitiveComponentWrapper::GetbUseOnePassLightingOnTranslucency() [member function] */
        public GetbUseOnePassLightingOnTranslucency(): boolean;

        /** void PrimitiveComponentWrapper::SetbUseOnePassLightingOnTranslucency(long unsigned int newbUseOnePassLightingOnTranslucency) [member function] */
        public SetbUseOnePassLightingOnTranslucency(newbUseOnePassLightingOnTranslucency: boolean): void;

        /** long unsigned int PrimitiveComponentWrapper::GetbUsePrecomputedShadows() [member function] */
        public GetbUsePrecomputedShadows(): boolean;

        /** long unsigned int PrimitiveComponentWrapper::GetbHasExplicitShadowParent() [member function] */
        public GetbHasExplicitShadowParent(): boolean;

        /** long unsigned int PrimitiveComponentWrapper::GetCollideActors() [member function] */
        public GetCollideActors(): boolean;

        /** void PrimitiveComponentWrapper::SetCollideActors(long unsigned int newCollideActors) [member function] */
        public SetCollideActors(newCollideActors: boolean): void;

        /** long unsigned int PrimitiveComponentWrapper::GetAlwaysCheckCollision() [member function] */
        public GetAlwaysCheckCollision(): boolean;

        /** void PrimitiveComponentWrapper::SetAlwaysCheckCollision(long unsigned int newAlwaysCheckCollision) [member function] */
        public SetAlwaysCheckCollision(newAlwaysCheckCollision: boolean): void;

        /** long unsigned int PrimitiveComponentWrapper::GetBlockActors() [member function] */
        public GetBlockActors(): boolean;

        /** void PrimitiveComponentWrapper::SetBlockActors(long unsigned int newBlockActors) [member function] */
        public SetBlockActors(newBlockActors: boolean): void;

        /** long unsigned int PrimitiveComponentWrapper::GetBlockZeroExtent() [member function] */
        public GetBlockZeroExtent(): boolean;

        /** void PrimitiveComponentWrapper::SetBlockZeroExtent(long unsigned int newBlockZeroExtent) [member function] */
        public SetBlockZeroExtent(newBlockZeroExtent: boolean): void;

        /** long unsigned int PrimitiveComponentWrapper::GetBlockNonZeroExtent() [member function] */
        public GetBlockNonZeroExtent(): boolean;

        /** void PrimitiveComponentWrapper::SetBlockNonZeroExtent(long unsigned int newBlockNonZeroExtent) [member function] */
        public SetBlockNonZeroExtent(newBlockNonZeroExtent: boolean): void;

        /** long unsigned int PrimitiveComponentWrapper::GetCanBlockCamera() [member function] */
        public GetCanBlockCamera(): boolean;

        /** void PrimitiveComponentWrapper::SetCanBlockCamera(long unsigned int newCanBlockCamera) [member function] */
        public SetCanBlockCamera(newCanBlockCamera: boolean): void;

        /** long unsigned int PrimitiveComponentWrapper::GetBlockRigidBody() [member function] */
        public GetBlockRigidBody(): boolean;

        /** void PrimitiveComponentWrapper::SetBlockRigidBody(long unsigned int newBlockRigidBody) [member function] */
        public SetBlockRigidBody(newBlockRigidBody: boolean): void;

        /** long unsigned int PrimitiveComponentWrapper::GetbBlockFootPlacement() [member function] */
        public GetbBlockFootPlacement(): boolean;

        /** void PrimitiveComponentWrapper::SetbBlockFootPlacement(long unsigned int newbBlockFootPlacement) [member function] */
        public SetbBlockFootPlacement(newbBlockFootPlacement: boolean): void;

        /** long unsigned int PrimitiveComponentWrapper::GetbDisableAllRigidBody() [member function] */
        public GetbDisableAllRigidBody(): boolean;

        /** void PrimitiveComponentWrapper::SetbDisableAllRigidBody(long unsigned int newbDisableAllRigidBody) [member function] */
        public SetbDisableAllRigidBody(newbDisableAllRigidBody: boolean): void;

        /** long unsigned int PrimitiveComponentWrapper::GetbSkipRBGeomCreation() [member function] */
        public GetbSkipRBGeomCreation(): boolean;

        /** void PrimitiveComponentWrapper::SetbSkipRBGeomCreation(long unsigned int newbSkipRBGeomCreation) [member function] */
        public SetbSkipRBGeomCreation(newbSkipRBGeomCreation: boolean): void;

        /** long unsigned int PrimitiveComponentWrapper::GetbNotifyRigidBodyCollision() [member function] */
        public GetbNotifyRigidBodyCollision(): boolean;

        /** void PrimitiveComponentWrapper::SetbNotifyRigidBodyCollision(long unsigned int newbNotifyRigidBodyCollision) [member function] */
        public SetbNotifyRigidBodyCollision(newbNotifyRigidBodyCollision: boolean): void;

        /** long unsigned int PrimitiveComponentWrapper::GetbFluidDrain() [member function] */
        public GetbFluidDrain(): boolean;

        /** void PrimitiveComponentWrapper::SetbFluidDrain(long unsigned int newbFluidDrain) [member function] */
        public SetbFluidDrain(newbFluidDrain: boolean): void;

        /** long unsigned int PrimitiveComponentWrapper::GetbFluidTwoWay() [member function] */
        public GetbFluidTwoWay(): boolean;

        /** void PrimitiveComponentWrapper::SetbFluidTwoWay(long unsigned int newbFluidTwoWay) [member function] */
        public SetbFluidTwoWay(newbFluidTwoWay: boolean): void;

        /** long unsigned int PrimitiveComponentWrapper::GetbIgnoreRadialImpulse() [member function] */
        public GetbIgnoreRadialImpulse(): boolean;

        /** void PrimitiveComponentWrapper::SetbIgnoreRadialImpulse(long unsigned int newbIgnoreRadialImpulse) [member function] */
        public SetbIgnoreRadialImpulse(newbIgnoreRadialImpulse: boolean): void;

        /** long unsigned int PrimitiveComponentWrapper::GetbIgnoreRadialForce() [member function] */
        public GetbIgnoreRadialForce(): boolean;

        /** void PrimitiveComponentWrapper::SetbIgnoreRadialForce(long unsigned int newbIgnoreRadialForce) [member function] */
        public SetbIgnoreRadialForce(newbIgnoreRadialForce: boolean): void;

        /** long unsigned int PrimitiveComponentWrapper::GetbIgnoreForceField() [member function] */
        public GetbIgnoreForceField(): boolean;

        /** void PrimitiveComponentWrapper::SetbIgnoreForceField(long unsigned int newbIgnoreForceField) [member function] */
        public SetbIgnoreForceField(newbIgnoreForceField: boolean): void;

        /** long unsigned int PrimitiveComponentWrapper::GetbUseCompartment() [member function] */
        public GetbUseCompartment(): boolean;

        /** void PrimitiveComponentWrapper::SetbUseCompartment(long unsigned int newbUseCompartment) [member function] */
        public SetbUseCompartment(newbUseCompartment: boolean): void;

        /** long unsigned int PrimitiveComponentWrapper::GetAlwaysLoadOnClient() [member function] */
        public GetAlwaysLoadOnClient(): boolean;

        /** void PrimitiveComponentWrapper::SetAlwaysLoadOnClient(long unsigned int newAlwaysLoadOnClient) [member function] */
        public SetAlwaysLoadOnClient(newAlwaysLoadOnClient: boolean): void;

        /** long unsigned int PrimitiveComponentWrapper::GetAlwaysLoadOnServer() [member function] */
        public GetAlwaysLoadOnServer(): boolean;

        /** void PrimitiveComponentWrapper::SetAlwaysLoadOnServer(long unsigned int newAlwaysLoadOnServer) [member function] */
        public SetAlwaysLoadOnServer(newAlwaysLoadOnServer: boolean): void;

        /** long unsigned int PrimitiveComponentWrapper::GetbIgnoreHiddenActorsMembership() [member function] */
        public GetbIgnoreHiddenActorsMembership(): boolean;

        /** void PrimitiveComponentWrapper::SetbIgnoreHiddenActorsMembership(long unsigned int newbIgnoreHiddenActorsMembership) [member function] */
        public SetbIgnoreHiddenActorsMembership(newbIgnoreHiddenActorsMembership: boolean): void;

        /** long unsigned int PrimitiveComponentWrapper::GetAbsoluteTranslation() [member function] */
        public GetAbsoluteTranslation(): boolean;

        /** void PrimitiveComponentWrapper::SetAbsoluteTranslation(long unsigned int newAbsoluteTranslation) [member function] */
        public SetAbsoluteTranslation(newAbsoluteTranslation: boolean): void;

        /** long unsigned int PrimitiveComponentWrapper::GetAbsoluteRotation() [member function] */
        public GetAbsoluteRotation(): boolean;

        /** void PrimitiveComponentWrapper::SetAbsoluteRotation(long unsigned int newAbsoluteRotation) [member function] */
        public SetAbsoluteRotation(newAbsoluteRotation: boolean): void;

        /** long unsigned int PrimitiveComponentWrapper::GetAbsoluteScale() [member function] */
        public GetAbsoluteScale(): boolean;

        /** void PrimitiveComponentWrapper::SetAbsoluteScale(long unsigned int newAbsoluteScale) [member function] */
        public SetAbsoluteScale(newAbsoluteScale: boolean): void;

        /** int PrimitiveComponentWrapper::GetVisibilityId() [member function] */
        public GetVisibilityId(): number;

        /** void PrimitiveComponentWrapper::SetVisibilityId(int newVisibilityId) [member function] */
        public SetVisibilityId(newVisibilityId: number): void;

        /** Vector PrimitiveComponentWrapper::GetTranslation() [member function] */
        public GetTranslation(): Vector;

        /** void PrimitiveComponentWrapper::SetTranslation(Vector newTranslation) [member function] */
        public SetTranslation(newTranslation: Vector): void;

        /** Rotator PrimitiveComponentWrapper::GetRotation() [member function] */
        public GetRotation(): Rotator;

        /** void PrimitiveComponentWrapper::SetRotation(Rotator newRotation) [member function] */
        public SetRotation(newRotation: Rotator): void;

        /** float PrimitiveComponentWrapper::GetScale() [member function] */
        public GetScale(): number;

        /** void PrimitiveComponentWrapper::SetScale(float newScale) [member function] */
        public SetScale(newScale: number): void;

        /** Vector PrimitiveComponentWrapper::GetScale3D() [member function] */
        public GetScale3D(): Vector;

        /** void PrimitiveComponentWrapper::SetScale3D(Vector newScale3D) [member function] */
        public SetScale3D(newScale3D: Vector): void;

        /** float PrimitiveComponentWrapper::GetBoundsScale() [member function] */
        public GetBoundsScale(): number;

        /** void PrimitiveComponentWrapper::SetBoundsScale(float newBoundsScale) [member function] */
        public SetBoundsScale(newBoundsScale: number): void;

        /** void PrimitiveComponentWrapper::SetLastSubmitTime(float newLastSubmitTime) [member function] */
        public SetLastSubmitTime(newLastSubmitTime: number): void;

        /** float PrimitiveComponentWrapper::GetLastRenderTime() [member function] */
        public GetLastRenderTime(): number;

        /** float PrimitiveComponentWrapper::GetScriptRigidBodyCollisionThreshold() [member function] */
        public GetScriptRigidBodyCollisionThreshold(): number;

        /** void PrimitiveComponentWrapper::SetScriptRigidBodyCollisionThreshold(float newScriptRigidBodyCollisionThreshold) [member function] */
        public SetScriptRigidBodyCollisionThreshold(newScriptRigidBodyCollisionThreshold: number): void;

        /** void PrimitiveComponentWrapper::TermRBPhys() [member function] */
        public TermRBPhys(): void;

        /** void PrimitiveComponentWrapper::InitRBPhys() [member function] */
        public InitRBPhys(): void;

        /** void PrimitiveComponentWrapper::SetNotifyRigidBodyCollision(long unsigned int bNewNotifyRigidBodyCollision) [member function] */
        public SetNotifyRigidBodyCollision(bNewNotifyRigidBodyCollision: boolean): void;

        /** void PrimitiveComponentWrapper::SetRBChannel2(unsigned char Channel) [member function] */
        public SetRBChannel2(Channel: number): void;

        /** void PrimitiveComponentWrapper::SetRBCollidesWithChannel(unsigned char Channel, long unsigned int bNewCollides) [member function] */
        public SetRBCollidesWithChannel(Channel: number, bNewCollides: boolean): void;

        /** void PrimitiveComponentWrapper::SetBlockRigidBody2(long unsigned int bNewBlockRigidBody) [member function] */
        public SetBlockRigidBody2(bNewBlockRigidBody: boolean): void;

        /** void PrimitiveComponentWrapper::RetardRBLinearVelocity(Vector & RetardDir, float VelScale) [member function] */
        public RetardRBLinearVelocity(RetardDir: Vector, VelScale: number): void;

        /** void PrimitiveComponentWrapper::SetRBAngularVelocity(Vector & NewAngVel, long unsigned int bAddToCurrent) [member function] */
        public SetRBAngularVelocity(NewAngVel: Vector, bAddToCurrent: boolean): void;

        /** void PrimitiveComponentWrapper::SetRBLinearVelocity(Vector & NewVel, long unsigned int bAddToCurrent) [member function] */
        public SetRBLinearVelocity(NewVel: Vector, bAddToCurrent: boolean): void;

        /** void PrimitiveComponentWrapper::AddRadialForce(Vector & Origin, float Radius, float Strength, unsigned char Falloff) [member function] */
        public AddRadialForce(Origin: Vector, Radius: number, Strength: number, Falloff: number): void;

        /** void PrimitiveComponentWrapper::AddRadialImpulse(Vector & Origin, float Radius, float Strength, unsigned char Falloff, long unsigned int bVelChange) [member function] */
        public AddRadialImpulse(Origin: Vector, Radius: number, Strength: number, Falloff: number, bVelChange: boolean): void;

    }

    /** WorldInfoWrapper [class] */
    class WorldInfoWrapper extends ActorWrapper {
        // Public:
        /** WorldInfoWrapper::WorldInfoWrapper(uintptr_t mem) [constructor] */
        public constructor(mem: bigint);

        /** float WorldInfoWrapper::GetTimeDilation() [member function] */
        public GetTimeDilation(): number;

        /** float WorldInfoWrapper::GetDemoPlayTimeDilation() [member function] */
        public GetDemoPlayTimeDilation(): number;

        /** float WorldInfoWrapper::GetTimeSeconds() [member function] */
        public GetTimeSeconds(): number;

        /** float WorldInfoWrapper::GetRealTimeSeconds() [member function] */
        public GetRealTimeSeconds(): number;

        /** float WorldInfoWrapper::GetRealDeltaSeconds() [member function] */
        public GetRealDeltaSeconds(): number;

        /** float WorldInfoWrapper::GetAudioTimeSeconds() [member function] */
        public GetAudioTimeSeconds(): number;

        /** float WorldInfoWrapper::GetDeltaSeconds() [member function] */
        public GetDeltaSeconds(): number;

        /** float WorldInfoWrapper::GetPauseDelay() [member function] */
        public GetPauseDelay(): number;

        /** float WorldInfoWrapper::GetRealTimeToUnPause() [member function] */
        public GetRealTimeToUnPause(): number;

        /** float WorldInfoWrapper::GetStallZ() [member function] */
        public GetStallZ(): number;

        /** float WorldInfoWrapper::GetWorldGravityZ() [member function] */
        public GetWorldGravityZ(): number;

        /** float WorldInfoWrapper::GetDefaultGravityZ() [member function] */
        public GetDefaultGravityZ(): number;

        /** float WorldInfoWrapper::GetGlobalGravityZ() [member function] */
        public GetGlobalGravityZ(): number;

        /** float WorldInfoWrapper::GetRBPhysicsGravityScaling() [member function] */
        public GetRBPhysicsGravityScaling(): number;

    }

    /** ActorWrapper [class] */
    class ActorWrapper extends ObjectWrapper {
        // Public:
        /** ActorWrapper::ActorWrapper(uintptr_t mem) [constructor] */
        public constructor(mem: bigint);

        /** Vector ActorWrapper::GetLocation() [member function] */
        public GetLocation(): Vector;

        /** void ActorWrapper::SetLocation(Vector const location) [member function] */
        public SetLocation(location: Vector): void;

        /** Vector ActorWrapper::GetVelocity() [member function] */
        public GetVelocity(): Vector;

        /** void ActorWrapper::SetVelocity(Vector const velocity) [member function] */
        public SetVelocity(velocity: Vector): void;

        /** void ActorWrapper::AddVelocity(Vector const velocity) [member function] */
        public AddVelocity(velocity: Vector): void;

        /** Rotator ActorWrapper::GetRotation() [member function] */
        public GetRotation(): Rotator;

        /** void ActorWrapper::SetRotation(Rotator const rotation) [member function] */
        public SetRotation(rotation: Rotator): void;

        /** void ActorWrapper::SetTorque(Vector const torq) [member function] */
        public SetTorque(torq: Vector): void;

        /** void ActorWrapper::Stop() [member function] */
        public Stop(): void;

        /** Vector ActorWrapper::GetAngularVelocity() [member function] */
        public GetAngularVelocity(): Vector;

        /** void ActorWrapper::SetAngularVelocity(Vector const v, bool addToCurrent) [member function] */
        public SetAngularVelocity(v: Vector, addToCurrent: boolean): void;

        /** bool ActorWrapper::IsNull() [member function] */
        public IsNull(): boolean;

        /** WorldInfoWrapper ActorWrapper::GetWorldInfo() [member function] */
        public GetWorldInfo(): WorldInfoWrapper;

        /** float ActorWrapper::GetDrawScale() [member function] */
        public GetDrawScale(): number;

        /** void ActorWrapper::SetDrawScale(float newDrawScale) [member function] */
        public SetDrawScale(newDrawScale: number): void;

        /** Vector ActorWrapper::GetDrawScale3D() [member function] */
        public GetDrawScale3D(): Vector;

        /** void ActorWrapper::SetDrawScale3D(Vector newDrawScale3D) [member function] */
        public SetDrawScale3D(newDrawScale3D: Vector): void;

        /** Vector ActorWrapper::GetPrePivot() [member function] */
        public GetPrePivot(): Vector;

        /** void ActorWrapper::SetPrePivot(Vector newPrePivot) [member function] */
        public SetPrePivot(newPrePivot: Vector): void;

        /** UnrealColor ActorWrapper::GetEditorIconColor() [member function] */
        public GetEditorIconColor(): UnrealColor;

        /** void ActorWrapper::SetEditorIconColor(UnrealColor newEditorIconColor) [member function] */
        public SetEditorIconColor(newEditorIconColor: UnrealColor): void;

        /** float ActorWrapper::GetCustomTimeDilation() [member function] */
        public GetCustomTimeDilation(): number;

        /** void ActorWrapper::SetCustomTimeDilation(float newCustomTimeDilation) [member function] */
        public SetCustomTimeDilation(newCustomTimeDilation: number): void;

        /** unsigned char ActorWrapper::GetPhysics() [member function] */
        public GetPhysics(): number;

        /** void ActorWrapper::SetPhysics(unsigned char newPhysics) [member function] */
        public SetPhysics(newPhysics: number): void;

        /** unsigned char ActorWrapper::GetRemoteRole() [member function] */
        public GetRemoteRole(): number;

        /** void ActorWrapper::SetRemoteRole(unsigned char newRemoteRole) [member function] */
        public SetRemoteRole(newRemoteRole: number): void;

        /** unsigned char ActorWrapper::GetRole() [member function] */
        public GetRole(): number;

        /** void ActorWrapper::SetRole(unsigned char newRole) [member function] */
        public SetRole(newRole: number): void;

        /** unsigned char ActorWrapper::GetCollisionType() [member function] */
        public GetCollisionType(): number;

        /** void ActorWrapper::SetCollisionType(unsigned char newCollisionType) [member function] */
        public SetCollisionType(newCollisionType: number): void;

        /** unsigned char ActorWrapper::GetReplicatedCollisionType() [member function] */
        public GetReplicatedCollisionType(): number;

        /** void ActorWrapper::SetReplicatedCollisionType(unsigned char newReplicatedCollisionType) [member function] */
        public SetReplicatedCollisionType(newReplicatedCollisionType: number): void;

        /** ActorWrapper ActorWrapper::GetOwner() [member function] */
        public GetOwner(): ActorWrapper;

        /** ActorWrapper ActorWrapper::GetBase() [member function] */
        public GetBase(): ActorWrapper;

        /** long unsigned int ActorWrapper::GetbStatic() [member function] */
        public GetbStatic(): boolean;

        /** long unsigned int ActorWrapper::GetbHidden() [member function] */
        public GetbHidden(): boolean;

        /** long unsigned int ActorWrapper::GetbHiddenSelf() [member function] */
        public GetbHiddenSelf(): boolean;

        /** void ActorWrapper::SetbHiddenSelf(long unsigned int newbHiddenSelf) [member function] */
        public SetbHiddenSelf(newbHiddenSelf: boolean): void;

        /** long unsigned int ActorWrapper::GetbNoDelete() [member function] */
        public GetbNoDelete(): boolean;

        /** void ActorWrapper::SetbNoDelete(long unsigned int newbNoDelete) [member function] */
        public SetbNoDelete(newbNoDelete: boolean): void;

        /** long unsigned int ActorWrapper::GetbDeleteMe() [member function] */
        public GetbDeleteMe(): boolean;

        /** void ActorWrapper::SetbDeleteMe(long unsigned int newbDeleteMe) [member function] */
        public SetbDeleteMe(newbDeleteMe: boolean): void;

        /** long unsigned int ActorWrapper::GetbTicked() [member function] */
        public GetbTicked(): boolean;

        /** void ActorWrapper::SetbTicked(long unsigned int newbTicked) [member function] */
        public SetbTicked(newbTicked: boolean): void;

        /** long unsigned int ActorWrapper::GetbOnlyOwnerSee() [member function] */
        public GetbOnlyOwnerSee(): boolean;

        /** void ActorWrapper::SetbOnlyOwnerSee(long unsigned int newbOnlyOwnerSee) [member function] */
        public SetbOnlyOwnerSee(newbOnlyOwnerSee: boolean): void;

        /** long unsigned int ActorWrapper::GetbTickIsDisabled() [member function] */
        public GetbTickIsDisabled(): boolean;

        /** void ActorWrapper::SetbTickIsDisabled(long unsigned int newbTickIsDisabled) [member function] */
        public SetbTickIsDisabled(newbTickIsDisabled: boolean): void;

        /** long unsigned int ActorWrapper::GetbWorldGeometry() [member function] */
        public GetbWorldGeometry(): boolean;

        /** void ActorWrapper::SetbWorldGeometry(long unsigned int newbWorldGeometry) [member function] */
        public SetbWorldGeometry(newbWorldGeometry: boolean): void;

        /** long unsigned int ActorWrapper::GetbIgnoreRigidBodyPawns() [member function] */
        public GetbIgnoreRigidBodyPawns(): boolean;

        /** void ActorWrapper::SetbIgnoreRigidBodyPawns(long unsigned int newbIgnoreRigidBodyPawns) [member function] */
        public SetbIgnoreRigidBodyPawns(newbIgnoreRigidBodyPawns: boolean): void;

        /** long unsigned int ActorWrapper::GetbOrientOnSlope() [member function] */
        public GetbOrientOnSlope(): boolean;

        /** void ActorWrapper::SetbOrientOnSlope(long unsigned int newbOrientOnSlope) [member function] */
        public SetbOrientOnSlope(newbOrientOnSlope: boolean): void;

        /** long unsigned int ActorWrapper::GetbIsMoving() [member function] */
        public GetbIsMoving(): boolean;

        /** long unsigned int ActorWrapper::GetbAlwaysEncroachCheck() [member function] */
        public GetbAlwaysEncroachCheck(): boolean;

        /** void ActorWrapper::SetbAlwaysEncroachCheck(long unsigned int newbAlwaysEncroachCheck) [member function] */
        public SetbAlwaysEncroachCheck(newbAlwaysEncroachCheck: boolean): void;

        /** long unsigned int ActorWrapper::GetbHasAlternateTargetLocation() [member function] */
        public GetbHasAlternateTargetLocation(): boolean;

        /** long unsigned int ActorWrapper::GetbAlwaysRelevant() [member function] */
        public GetbAlwaysRelevant(): boolean;

        /** long unsigned int ActorWrapper::GetbReplicateInstigator() [member function] */
        public GetbReplicateInstigator(): boolean;

        /** long unsigned int ActorWrapper::GetbReplicateMovement() [member function] */
        public GetbReplicateMovement(): boolean;

        /** long unsigned int ActorWrapper::GetbUpdateSimulatedPosition() [member function] */
        public GetbUpdateSimulatedPosition(): boolean;

        /** void ActorWrapper::SetbUpdateSimulatedPosition(long unsigned int newbUpdateSimulatedPosition) [member function] */
        public SetbUpdateSimulatedPosition(newbUpdateSimulatedPosition: boolean): void;

        /** long unsigned int ActorWrapper::GetbDemoRecording() [member function] */
        public GetbDemoRecording(): boolean;

        /** void ActorWrapper::SetbDemoRecording(long unsigned int newbDemoRecording) [member function] */
        public SetbDemoRecording(newbDemoRecording: boolean): void;

        /** long unsigned int ActorWrapper::GetbDemoOwner() [member function] */
        public GetbDemoOwner(): boolean;

        /** void ActorWrapper::SetbDemoOwner(long unsigned int newbDemoOwner) [member function] */
        public SetbDemoOwner(newbDemoOwner: boolean): void;

        /** long unsigned int ActorWrapper::GetbForceDemoRelevant() [member function] */
        public GetbForceDemoRelevant(): boolean;

        /** void ActorWrapper::SetbForceDemoRelevant(long unsigned int newbForceDemoRelevant) [member function] */
        public SetbForceDemoRelevant(newbForceDemoRelevant: boolean): void;

        /** long unsigned int ActorWrapper::GetbNetInitialRotation() [member function] */
        public GetbNetInitialRotation(): boolean;

        /** void ActorWrapper::SetbNetInitialRotation(long unsigned int newbNetInitialRotation) [member function] */
        public SetbNetInitialRotation(newbNetInitialRotation: boolean): void;

        /** long unsigned int ActorWrapper::GetbReplicateRigidBodyLocation() [member function] */
        public GetbReplicateRigidBodyLocation(): boolean;

        /** void ActorWrapper::SetbReplicateRigidBodyLocation(long unsigned int newbReplicateRigidBodyLocation) [member function] */
        public SetbReplicateRigidBodyLocation(newbReplicateRigidBodyLocation: boolean): void;

        /** long unsigned int ActorWrapper::GetbKillDuringLevelTransition() [member function] */
        public GetbKillDuringLevelTransition(): boolean;

        /** void ActorWrapper::SetbKillDuringLevelTransition(long unsigned int newbKillDuringLevelTransition) [member function] */
        public SetbKillDuringLevelTransition(newbKillDuringLevelTransition: boolean): void;

        /** long unsigned int ActorWrapper::GetbPostRenderIfNotVisible() [member function] */
        public GetbPostRenderIfNotVisible(): boolean;

        /** void ActorWrapper::SetbPostRenderIfNotVisible(long unsigned int newbPostRenderIfNotVisible) [member function] */
        public SetbPostRenderIfNotVisible(newbPostRenderIfNotVisible: boolean): void;

        /** long unsigned int ActorWrapper::GetbForceNetUpdate() [member function] */
        public GetbForceNetUpdate(): boolean;

        /** void ActorWrapper::SetbForceNetUpdate(long unsigned int newbForceNetUpdate) [member function] */
        public SetbForceNetUpdate(newbForceNetUpdate: boolean): void;

        /** long unsigned int ActorWrapper::GetbForcePacketUpdate() [member function] */
        public GetbForcePacketUpdate(): boolean;

        /** void ActorWrapper::SetbForcePacketUpdate(long unsigned int newbForcePacketUpdate) [member function] */
        public SetbForcePacketUpdate(newbForcePacketUpdate: boolean): void;

        /** long unsigned int ActorWrapper::GetbPendingNetUpdate() [member function] */
        public GetbPendingNetUpdate(): boolean;

        /** void ActorWrapper::SetbPendingNetUpdate(long unsigned int newbPendingNetUpdate) [member function] */
        public SetbPendingNetUpdate(newbPendingNetUpdate: boolean): void;

        /** long unsigned int ActorWrapper::GetbGameRelevant() [member function] */
        public GetbGameRelevant(): boolean;

        /** void ActorWrapper::SetbGameRelevant(long unsigned int newbGameRelevant) [member function] */
        public SetbGameRelevant(newbGameRelevant: boolean): void;

        /** long unsigned int ActorWrapper::GetbMovable() [member function] */
        public GetbMovable(): boolean;

        /** void ActorWrapper::SetbMovable(long unsigned int newbMovable) [member function] */
        public SetbMovable(newbMovable: boolean): void;

        /** long unsigned int ActorWrapper::GetbCanTeleport() [member function] */
        public GetbCanTeleport(): boolean;

        /** void ActorWrapper::SetbCanTeleport(long unsigned int newbCanTeleport) [member function] */
        public SetbCanTeleport(newbCanTeleport: boolean): void;

        /** long unsigned int ActorWrapper::GetbAlwaysTick() [member function] */
        public GetbAlwaysTick(): boolean;

        /** void ActorWrapper::SetbAlwaysTick(long unsigned int newbAlwaysTick) [member function] */
        public SetbAlwaysTick(newbAlwaysTick: boolean): void;

        /** long unsigned int ActorWrapper::GetbBlocksNavigation() [member function] */
        public GetbBlocksNavigation(): boolean;

        /** void ActorWrapper::SetbBlocksNavigation(long unsigned int newbBlocksNavigation) [member function] */
        public SetbBlocksNavigation(newbBlocksNavigation: boolean): void;

        /** long unsigned int ActorWrapper::GetBlockRigidBody() [member function] */
        public GetBlockRigidBody(): boolean;

        /** void ActorWrapper::SetBlockRigidBody(long unsigned int newBlockRigidBody) [member function] */
        public SetBlockRigidBody(newBlockRigidBody: boolean): void;

        /** long unsigned int ActorWrapper::GetbCollideWhenPlacing() [member function] */
        public GetbCollideWhenPlacing(): boolean;

        /** void ActorWrapper::SetbCollideWhenPlacing(long unsigned int newbCollideWhenPlacing) [member function] */
        public SetbCollideWhenPlacing(newbCollideWhenPlacing: boolean): void;

        /** long unsigned int ActorWrapper::GetbCollideActors() [member function] */
        public GetbCollideActors(): boolean;

        /** void ActorWrapper::SetbCollideActors(long unsigned int newbCollideActors) [member function] */
        public SetbCollideActors(newbCollideActors: boolean): void;

        /** long unsigned int ActorWrapper::GetbCollideWorld() [member function] */
        public GetbCollideWorld(): boolean;

        /** void ActorWrapper::SetbCollideWorld(long unsigned int newbCollideWorld) [member function] */
        public SetbCollideWorld(newbCollideWorld: boolean): void;

        /** long unsigned int ActorWrapper::GetbCollideComplex() [member function] */
        public GetbCollideComplex(): boolean;

        /** void ActorWrapper::SetbCollideComplex(long unsigned int newbCollideComplex) [member function] */
        public SetbCollideComplex(newbCollideComplex: boolean): void;

        /** long unsigned int ActorWrapper::GetbBlockActors() [member function] */
        public GetbBlockActors(): boolean;

        /** void ActorWrapper::SetbBlockActors(long unsigned int newbBlockActors) [member function] */
        public SetbBlockActors(newbBlockActors: boolean): void;

        /** long unsigned int ActorWrapper::GetbBlocksTeleport() [member function] */
        public GetbBlocksTeleport(): boolean;

        /** void ActorWrapper::SetbBlocksTeleport(long unsigned int newbBlocksTeleport) [member function] */
        public SetbBlocksTeleport(newbBlocksTeleport: boolean): void;

        /** long unsigned int ActorWrapper::GetbPhysRigidBodyOutOfWorldCheck() [member function] */
        public GetbPhysRigidBodyOutOfWorldCheck(): boolean;

        /** void ActorWrapper::SetbPhysRigidBodyOutOfWorldCheck(long unsigned int newbPhysRigidBodyOutOfWorldCheck) [member function] */
        public SetbPhysRigidBodyOutOfWorldCheck(newbPhysRigidBodyOutOfWorldCheck: boolean): void;

        /** long unsigned int ActorWrapper::GetbComponentOutsideWorld() [member function] */
        public GetbComponentOutsideWorld(): boolean;

        /** long unsigned int ActorWrapper::GetbRigidBodyWasAwake() [member function] */
        public GetbRigidBodyWasAwake(): boolean;

        /** void ActorWrapper::SetbRigidBodyWasAwake(long unsigned int newbRigidBodyWasAwake) [member function] */
        public SetbRigidBodyWasAwake(newbRigidBodyWasAwake: boolean): void;

        /** long unsigned int ActorWrapper::GetbCallRigidBodyWakeEvents() [member function] */
        public GetbCallRigidBodyWakeEvents(): boolean;

        /** void ActorWrapper::SetbCallRigidBodyWakeEvents(long unsigned int newbCallRigidBodyWakeEvents) [member function] */
        public SetbCallRigidBodyWakeEvents(newbCallRigidBodyWakeEvents: boolean): void;

        /** long unsigned int ActorWrapper::GetbBounce() [member function] */
        public GetbBounce(): boolean;

        /** void ActorWrapper::SetbBounce(long unsigned int newbBounce) [member function] */
        public SetbBounce(newbBounce: boolean): void;

        /** long unsigned int ActorWrapper::GetbEditable() [member function] */
        public GetbEditable(): boolean;

        /** void ActorWrapper::SetbEditable(long unsigned int newbEditable) [member function] */
        public SetbEditable(newbEditable: boolean): void;

        /** long unsigned int ActorWrapper::GetbLockLocation() [member function] */
        public GetbLockLocation(): boolean;

        /** void ActorWrapper::SetbLockLocation(long unsigned int newbLockLocation) [member function] */
        public SetbLockLocation(newbLockLocation: boolean): void;

        /** float ActorWrapper::GetNetUpdateTime() [member function] */
        public GetNetUpdateTime(): number;

        /** void ActorWrapper::SetNetUpdateTime(float newNetUpdateTime) [member function] */
        public SetNetUpdateTime(newNetUpdateTime: number): void;

        /** float ActorWrapper::GetNetUpdateFrequency() [member function] */
        public GetNetUpdateFrequency(): number;

        /** void ActorWrapper::SetNetUpdateFrequency(float newNetUpdateFrequency) [member function] */
        public SetNetUpdateFrequency(newNetUpdateFrequency: number): void;

        /** float ActorWrapper::GetNetPriority() [member function] */
        public GetNetPriority(): number;

        /** void ActorWrapper::SetNetPriority(float newNetPriority) [member function] */
        public SetNetPriority(newNetPriority: number): void;

        /** float ActorWrapper::GetLastNetUpdateTime() [member function] */
        public GetLastNetUpdateTime(): number;

        /** float ActorWrapper::GetLastForcePacketUpdateTime() [member function] */
        public GetLastForcePacketUpdateTime(): number;

        /** void ActorWrapper::SetLastForcePacketUpdateTime(float newLastForcePacketUpdateTime) [member function] */
        public SetLastForcePacketUpdateTime(newLastForcePacketUpdateTime: number): void;

        /** float ActorWrapper::GetTimeSinceLastTick() [member function] */
        public GetTimeSinceLastTick(): number;

        /** float ActorWrapper::GetLifeSpan() [member function] */
        public GetLifeSpan(): number;

        /** float ActorWrapper::GetCreationTime() [member function] */
        public GetCreationTime(): number;

        /** float ActorWrapper::GetLastRenderTime() [member function] */
        public GetLastRenderTime(): number;

        /** long long unsigned int ActorWrapper::GetHiddenEditorViews() [member function] */
        public GetHiddenEditorViews(): number;

        /** void ActorWrapper::SetHiddenEditorViews(long long unsigned int newHiddenEditorViews) [member function] */
        public SetHiddenEditorViews(newHiddenEditorViews: number): void;

        /** ArrayWrapper<ActorWrapper> ActorWrapper::GetAttached() [member function] */
        public GetAttached(): ArrayWrapper_ActorWrapper;

        /** Vector ActorWrapper::GetRelativeLocation() [member function] */
        public GetRelativeLocation(): Vector;

        /** void ActorWrapper::SetRelativeLocation(Vector newRelativeLocation) [member function] */
        public SetRelativeLocation(newRelativeLocation: Vector): void;

        /** Rotator ActorWrapper::GetRelativeRotation() [member function] */
        public GetRelativeRotation(): Rotator;

        /** void ActorWrapper::SetRelativeRotation(Rotator newRelativeRotation) [member function] */
        public SetRelativeRotation(newRelativeRotation: Rotator): void;

        /** PrimitiveComponentWrapper ActorWrapper::GetCollisionComponent() [member function] */
        public GetCollisionComponent(): PrimitiveComponentWrapper;

        /** void ActorWrapper::ForceNetUpdatePacket() [member function] */
        public ForceNetUpdatePacket(): void;

        /** void ActorWrapper::ForceNetUpdate2() [member function] */
        public ForceNetUpdate2(): void;

        /** bool ActorWrapper::WillOverlap(Vector & PosA, Vector & VelA, Vector & PosB, Vector & VelB, float StepSize, float Radius, float * Time) [member function] */
        public WillOverlap(PosA: Vector, VelA: Vector, PosB: Vector, VelB: Vector, StepSize: number, Radius: number, Time: number): boolean;

        /** void ActorWrapper::eventReplicationEnded() [member function] */
        public eventReplicationEnded(): void;

        /** void ActorWrapper::eventPostDemoRewind() [member function] */
        public eventPostDemoRewind(): void;

        /** bool ActorWrapper::IsInPersistentLevel(long unsigned int bIncludeLevelStreamingPersistent) [member function] */
        public IsInPersistentLevel(bIncludeLevelStreamingPersistent: boolean): boolean;

        /** void ActorWrapper::SetHUDLocation(Vector & NewHUDLocation) [member function] */
        public SetHUDLocation(NewHUDLocation: Vector): void;

        /** void ActorWrapper::eventSpawnedByKismet() [member function] */
        public eventSpawnedByKismet(): void;

        /** Vector ActorWrapper::GetTargetLocation(ActorWrapper RequestedBy, long unsigned int bRequestAlternateLoc) [member function] */
        public GetTargetLocation(RequestedBy: ActorWrapper, bRequestAlternateLoc: boolean): Vector;

        /** unsigned char ActorWrapper::eventScriptGetTeamNum() [member function] */
        public eventScriptGetTeamNum(): number;

        /** unsigned char ActorWrapper::GetTeamNum2() [member function] */
        public GetTeamNum2(): number;

        /** bool ActorWrapper::IsPlayerOwned() [member function] */
        public IsPlayerOwned(): boolean;

        /** bool ActorWrapper::IsStationary() [member function] */
        public IsStationary(): boolean;

        /** void ActorWrapper::eventDebugMessagePlayer(std::string msg) [member function] */
        public eventDebugMessagePlayer(msg: string): void;

        /** Vector ActorWrapper::GetGravityAcceleration() [member function] */
        public GetGravityAcceleration(): Vector;

        /** Vector ActorWrapper::GetGravityDirection() [member function] */
        public GetGravityDirection(): Vector;

        /** float ActorWrapper::GetGravityZ() [member function] */
        public GetGravityZ(): number;

        /** bool ActorWrapper::IsOverlapping(ActorWrapper A) [member function] */
        public IsOverlapping(A: ActorWrapper): boolean;

        /** bool ActorWrapper::ContainsPoint(Vector & Spot) [member function] */
        public ContainsPoint(Spot: Vector): boolean;

        /** void ActorWrapper::eventFellOutOfWorld() [member function] */
        public eventFellOutOfWorld(): void;

        /** void ActorWrapper::SetTickIsDisabled(long unsigned int bInDisabled) [member function] */
        public SetTickIsDisabled(bInDisabled: boolean): void;

        /** void ActorWrapper::SetPhysics2(unsigned char newPhysics) [member function] */
        public SetPhysics2(newPhysics: number): void;

        /** void ActorWrapper::SetHidden2(long unsigned int bNewHidden) [member function] */
        public SetHidden2(bNewHidden: boolean): void;

        /** void ActorWrapper::ChartData(std::string DataName, float DataValue) [member function] */
        public ChartData(DataName: string, DataValue: number): void;

        /** void ActorWrapper::DrawDebugString(Vector & TextLocation, std::string Text, ActorWrapper TestBaseActor, UnrealColor & TextColor, float Duration) [member function] */
        public DrawDebugString(TextLocation: Vector, Text: string, TestBaseActor: ActorWrapper, TextColor: UnrealColor, Duration: number): void;

        /** void ActorWrapper::DrawDebugCone(Vector & Origin, Vector & Direction, float Length, float AngleWidth, float AngleHeight, int NumSides, UnrealColor & DrawColor, long unsigned int bPersistentLines) [member function] */
        public DrawDebugCone(Origin: Vector, Direction: Vector, Length: number, AngleWidth: number, AngleHeight: number, NumSides: number, DrawColor: UnrealColor, bPersistentLines: boolean): void;

        /** Vector ActorWrapper::GetAggregateBaseVelocity(ActorWrapper TestBase) [member function] */
        public GetAggregateBaseVelocity(TestBase: ActorWrapper): Vector;

        /** bool ActorWrapper::IsOwnedBy(ActorWrapper TestActor) [member function] */
        public IsOwnedBy(TestActor: ActorWrapper): boolean;

        /** bool ActorWrapper::IsBasedOn(ActorWrapper TestActor) [member function] */
        public IsBasedOn(TestActor: ActorWrapper): boolean;

        /** float ActorWrapper::GetTerminalVelocity() [member function] */
        public GetTerminalVelocity(): number;

    }

    /** ImageWrapper [class] */
    class ImageWrapper {
        // Public:
        /** ImageWrapper::ImageWrapper(std::string path, bool canvasLoad=false, bool ImGuiLoad=false) [constructor] */
        public constructor(path: string, canvasLoad?: boolean, ImGuiLoad?: boolean);

        /** ImageWrapper::ImageWrapper(std::wstring path, bool canvasLoad=false, bool ImGuiLoad=false) [constructor] */
        //public constructor(path: string, canvasLoad?: boolean, ImGuiLoad?: boolean);

        /** bool ImageWrapper::LoadForCanvas() [member function] */
        public LoadForCanvas(): boolean;

        /** bool ImageWrapper::IsLoadedForCanvas() [member function] */
        public IsLoadedForCanvas(): boolean;

        /** void * ImageWrapper::GetCanvasTex() [member function] */
        public GetCanvasTex(): any;

        /** void ImageWrapper::LoadForImGui(std::function<void (bool)> onLoaded) [member function] */
        public LoadForImGui(onLoaded: (unk0: boolean) => void): void;

        /** bool ImageWrapper::IsLoadedForImGui() [member function] */
        public IsLoadedForImGui(): boolean;

        /** void * ImageWrapper::GetImGuiTex() [member function] */
        public GetImGuiTex(): any;

        /** std::string ImageWrapper::GetPath() [member function] */
        public GetPath(): string;

        /** std::wstring ImageWrapper::GetPathW() [member function] */
        public GetPathW(): string;

        /** Vector2 ImageWrapper::GetSize() [member function] */
        public GetSize(): Vector2;

        /** Vector2F ImageWrapper::GetSizeF() [member function] */
        public GetSizeF(): Vector2F;

    }

    /** CanvasWrapper [class] */
    class CanvasWrapper {
        // Public:
        /** CanvasWrapper::CanvasWrapper(uintptr_t mem) [constructor] */
        public constructor(mem: bigint);

        /** void CanvasWrapper::SetPosition(Vector2F pos) [member function] */
        public SetPosition(pos: Vector2F): void;

        /** Vector2F CanvasWrapper::GetPositionFloat() [member function] */
        public GetPositionFloat(): Vector2F;

        /** void CanvasWrapper::SetColor(char Red, char Green, char Blue, char Alpha) [member function] */
        public SetColor(Red: number, Green: number, Blue: number, Alpha: number): void;

        /** void CanvasWrapper::SetColor(LinearColor color) [member function] */
        public SetColor(color: LinearColor): void;

        /** LinearColor CanvasWrapper::GetColor() [member function] */
        public GetColor(): LinearColor;

        /** void CanvasWrapper::DrawBox(Vector2F size) [member function] */
        public DrawBox(size: Vector2F): void;

        /** void CanvasWrapper::FillBox(Vector2F size) [member function] */
        public FillBox(size: Vector2F): void;

        /** void CanvasWrapper::FillTriangle(Vector2F p1, Vector2F p2, Vector2F p3) [member function] */
        public FillTriangle(p1: Vector2F, p2: Vector2F, p3: Vector2F): void;

        /** void CanvasWrapper::FillTriangle(Vector2F p1, Vector2F p2, Vector2F p3, LinearColor color) [member function] */
        public FillTriangle(p1: Vector2F, p2: Vector2F, p3: Vector2F, color: LinearColor): void;

        /** void CanvasWrapper::DrawString(std::string text) [member function] */
        public DrawString(text: string): void;

        /** void CanvasWrapper::DrawString(std::string text, float xScale, float yScale) [member function] */
        public DrawString(text: string, xScale: number, yScale: number): void;

        /** void CanvasWrapper::DrawString(std::string text, float xScale, float yScale, bool dropShadow, bool wrapText=false) [member function] */
        public DrawString(text: string, xScale: number, yScale: number, dropShadow: boolean, wrapText?: boolean): void;

        /** Vector2F CanvasWrapper::GetStringSize(std::string text, float xScale=1, float yScale=1) [member function] */
        public GetStringSize(text: string, xScale?: number, yScale?: number): Vector2F;

        /** void CanvasWrapper::DrawLine(Vector2F start, Vector2F end) [member function] */
        public DrawLine(start: Vector2F, end: Vector2F): void;

        /** void CanvasWrapper::DrawLine(Vector2F start, Vector2F end, float width) [member function] */
        public DrawLine(start: Vector2F, end: Vector2F, width: number): void;

        /** void CanvasWrapper::DrawRect(Vector2F start, Vector2F end) [member function] */
        public DrawRect(start: Vector2F, end: Vector2F): void;

        /** void CanvasWrapper::DrawTexture(ImageWrapper * img, float scale) [member function] */
        public DrawTexture(img: ImageWrapper, scale: number): void;

        /** void CanvasWrapper::DrawRect(float RectX, float RectY, ImageWrapper * img) [member function] */
        public DrawRect(RectX: number, RectY: number, img: ImageWrapper): void;

        /** void CanvasWrapper::DrawTile(ImageWrapper * img, float XL, float YL, float U, float V, float UL, float VL, LinearColor Color, unsigned int ClipTile, unsigned char Blend) [member function] */
        public DrawTile(img: ImageWrapper, XL: number, YL: number, U: number, V: number, UL: number, VL: number, Color: LinearColor, ClipTile: number, Blend: number): void;

        /** void CanvasWrapper::DrawRotatedTile(ImageWrapper * img, Rotator & Rotation, float XL, float YL, float U, float V, float UL, float VL, float AnchorX, float AnchorY) [member function] */
        public DrawRotatedTile(img: ImageWrapper, Rotation: Rotator, XL: number, YL: number, U: number, V: number, UL: number, VL: number, AnchorX: number, AnchorY: number): void;

        /** void CanvasWrapper::SetPosition(Vector2 pos) [member function] */
        public SetPosition(pos: Vector2): void;

        /** Vector2 CanvasWrapper::GetPosition() [member function] */
        public GetPosition(): Vector2;

        /** void CanvasWrapper::DrawBox(Vector2 size) [member function] */
        public DrawBox(size: Vector2): void;

        /** void CanvasWrapper::FillBox(Vector2 size) [member function] */
        public FillBox(size: Vector2): void;

        /** void CanvasWrapper::FillTriangle(Vector2 p1, Vector2 p2, Vector2 p3) [member function] */
        public FillTriangle(p1: Vector2, p2: Vector2, p3: Vector2): void;

        /** void CanvasWrapper::FillTriangle(Vector2 p1, Vector2 p2, Vector2 p3, LinearColor color) [member function] */
        public FillTriangle(p1: Vector2, p2: Vector2, p3: Vector2, color: LinearColor): void;

        /** void CanvasWrapper::DrawLine(Vector2 start, Vector2 end) [member function] */
        public DrawLine(start: Vector2, end: Vector2): void;

        /** void CanvasWrapper::DrawLine(Vector2 start, Vector2 end, float width) [member function] */
        public DrawLine(start: Vector2, end: Vector2, width: number): void;

        /** void CanvasWrapper::DrawRect(Vector2 start, Vector2 end) [member function] */
        public DrawRect(start: Vector2, end: Vector2): void;

        /** Vector2 CanvasWrapper::Project(Vector location) [member function] */
        public Project(location: Vector): Vector2;

        /** Vector2F CanvasWrapper::ProjectF(Vector location) [member function] */
        public ProjectF(location: Vector): Vector2F;

        /** Vector2 CanvasWrapper::GetSize() [member function] */
        public GetSize(): Vector2;

    }

    /** UniqueIDWrapper [class] */
    class UniqueIDWrapper {
        // Public:
        /** UniqueIDWrapper::UniqueIDWrapper() [constructor] */
        //public constructor();

        /** UniqueIDWrapper::UniqueIDWrapper(uintptr_t mem) [constructor] */
        public constructor(mem: bigint);

        /** OnlinePlatform UniqueIDWrapper::GetPlatform() const [member function] */
        public GetPlatform(): OnlinePlatform;

        /** std::string UniqueIDWrapper::GetEpicAccountID() const [member function] */
        public GetEpicAccountID(): string;

        /** long long unsigned int UniqueIDWrapper::GetUID() const [member function] */
        public GetUID(): number;

        /** unsigned char UniqueIDWrapper::GetSplitscreenID() const [member function] */
        public GetSplitscreenID(): number;

        /** std::string UniqueIDWrapper::str() const [member function] */
        public str(): string;

        /** std::string UniqueIDWrapper::GetIdString() const [member function] */
        public GetIdString(): string;

        /** static UniqueIDWrapper UniqueIDWrapper::FromEpicAccountID(std::string epicAccountID, long long unsigned int uid, OnlinePlatform platform, unsigned char splitscreenID=0) [member function] */
        public FromEpicAccountID(epicAccountID: string, uid: number, platform: OnlinePlatform, splitscreenID?: number): UniqueIDWrapper;

    }

    /** MMRWrapper [class] */
    class MMRWrapper extends ObjectWrapper {
        // Public:
        /** MMRWrapper::MMRWrapper(uintptr_t mem) [constructor] */
        public constructor(mem: bigint);

        /** bool MMRWrapper::IsSyncing(UniqueIDWrapper playerID) [member function] */
        public IsSyncing(playerID: UniqueIDWrapper): boolean;

        /** bool MMRWrapper::IsSyncing(SteamID playerID) [member function] */
        public IsSyncing(playerID: SteamID): boolean;

        /** bool MMRWrapper::IsSynced(UniqueIDWrapper playerID, int playlistID) [member function] */
        public IsSynced(playerID: UniqueIDWrapper, playlistID: number): boolean;

        /** bool MMRWrapper::IsSynced(SteamID playerID, int playlistID) [member function] */
        public IsSynced(playerID: SteamID, playlistID: number): boolean;

        /** bool MMRWrapper::IsRanked(int playlistID) [member function] */
        public IsRanked(playlistID: number): boolean;

        /** SkillRating MMRWrapper::GetPlayerSkillRating(UniqueIDWrapper playerID, int playlistID) [member function] */
        public GetPlayerSkillRating(playerID: UniqueIDWrapper, playlistID: number): SkillRating;

        /** SkillRank MMRWrapper::GetPlayerRank(UniqueIDWrapper playerID, int playlistID) [member function] */
        public GetPlayerRank(playerID: UniqueIDWrapper, playlistID: number): SkillRank;

        /** float MMRWrapper::GetPlayerMMR(UniqueIDWrapper playerID, int playlistID) [member function] */
        public GetPlayerMMR(playerID: UniqueIDWrapper, playlistID: number): number;

        /** SkillRating MMRWrapper::GetPlayerSkillRating(SteamID playerID, int playlistID) [member function] */
        public GetPlayerSkillRating(playerID: SteamID, playlistID: number): SkillRating;

        /** SkillRank MMRWrapper::GetPlayerRank(SteamID playerID, int playlistID) [member function] */
        public GetPlayerRank(playerID: SteamID, playlistID: number): SkillRank;

        /** float MMRWrapper::GetPlayerMMR(SteamID playerID, int playlistID) [member function] */
        public GetPlayerMMR(playerID: SteamID, playlistID: number): number;

        /** float MMRWrapper::CalculateMMR(SkillRating sr, bool disregardPlacements) [member function] */
        public CalculateMMR(sr: SkillRating, disregardPlacements: boolean): number;

        /** int MMRWrapper::GetCurrentPlaylist() [member function] */
        public GetCurrentPlaylist(): number;

        /** std::unique_ptr<MMRNotifierToken, std::default_delete<MMRNotifierToken> > MMRWrapper::RegisterMMRNotifier(std::function<void (UniqueIDWrapper)> arg0) [member function] */
        //public RegisterMMRNotifier(arg0: (unk0: UniqueIDWrapper) => void): MMRNotifierToken;

    }

    /** MMRNotifierToken [struct] */
    class MMRNotifierToken {
        // Public:
    }

    /** GameEventWrapper [class] */
    class GameEventWrapper extends ActorWrapper {
        // Public:
        /** GameEventWrapper::GameEventWrapper(uintptr_t mem) [constructor] */
        public constructor(mem: bigint);

        /** unsigned char GameEventWrapper::GetReplicatedStateIndex() [member function] */
        public GetReplicatedStateIndex(): number;

        /** void GameEventWrapper::SetReplicatedStateIndex(unsigned char newReplicatedStateIndex) [member function] */
        public SetReplicatedStateIndex(newReplicatedStateIndex: number): void;

        /** CarWrapper GameEventWrapper::GetCarArchetype() [member function] */
        public GetCarArchetype(): CarWrapper;

        /** void GameEventWrapper::SetCarArchetype(CarWrapper newCarArchetype) [member function] */
        public SetCarArchetype(newCarArchetype: CarWrapper): void;

        /** int GameEventWrapper::GetCountdownTime() [member function] */
        public GetCountdownTime(): number;

        /** void GameEventWrapper::SetCountdownTime(int newCountdownTime) [member function] */
        public SetCountdownTime(newCountdownTime: number): void;

        /** int GameEventWrapper::GetFinishTime() [member function] */
        public GetFinishTime(): number;

        /** void GameEventWrapper::SetFinishTime(int newFinishTime) [member function] */
        public SetFinishTime(newFinishTime: number): void;

        /** long unsigned int GameEventWrapper::GetbMultiplayer() [member function] */
        public GetbMultiplayer(): boolean;

        /** void GameEventWrapper::SetbMultiplayer(long unsigned int newbMultiplayer) [member function] */
        public SetbMultiplayer(newbMultiplayer: boolean): void;

        /** long unsigned int GameEventWrapper::GetbCountdownMessagesDisabled() [member function] */
        public GetbCountdownMessagesDisabled(): boolean;

        /** void GameEventWrapper::SetbCountdownMessagesDisabled(long unsigned int newbCountdownMessagesDisabled) [member function] */
        public SetbCountdownMessagesDisabled(newbCountdownMessagesDisabled: boolean): void;

        /** long unsigned int GameEventWrapper::GetbFillWithAI() [member function] */
        public GetbFillWithAI(): boolean;

        /** void GameEventWrapper::SetbFillWithAI(long unsigned int newbFillWithAI) [member function] */
        public SetbFillWithAI(newbFillWithAI: boolean): void;

        /** long unsigned int GameEventWrapper::GetbAllowQueueSaveReplay() [member function] */
        public GetbAllowQueueSaveReplay(): boolean;

        /** void GameEventWrapper::SetbAllowQueueSaveReplay(long unsigned int newbAllowQueueSaveReplay) [member function] */
        public SetbAllowQueueSaveReplay(newbAllowQueueSaveReplay: boolean): void;

        /** long unsigned int GameEventWrapper::GetbAllowReadyUp() [member function] */
        public GetbAllowReadyUp(): boolean;

        /** void GameEventWrapper::SetbAllowReadyUp(long unsigned int newbAllowReadyUp) [member function] */
        public SetbAllowReadyUp(newbAllowReadyUp: boolean): void;

        /** long unsigned int GameEventWrapper::GetbRestartingMatch() [member function] */
        public GetbRestartingMatch(): boolean;

        /** void GameEventWrapper::SetbRestartingMatch(long unsigned int newbRestartingMatch) [member function] */
        public SetbRestartingMatch(newbRestartingMatch: boolean): void;

        /** long unsigned int GameEventWrapper::GetbRandomizedBotLoadouts() [member function] */
        public GetbRandomizedBotLoadouts(): boolean;

        /** void GameEventWrapper::SetbRandomizedBotLoadouts(long unsigned int newbRandomizedBotLoadouts) [member function] */
        public SetbRandomizedBotLoadouts(newbRandomizedBotLoadouts: boolean): void;

        /** long unsigned int GameEventWrapper::GetbHasLeaveMatchPenalty() [member function] */
        public GetbHasLeaveMatchPenalty(): boolean;

        /** void GameEventWrapper::SetbHasLeaveMatchPenalty(long unsigned int newbHasLeaveMatchPenalty) [member function] */
        public SetbHasLeaveMatchPenalty(newbHasLeaveMatchPenalty: boolean): void;

        /** long unsigned int GameEventWrapper::GetbCanVoteToForfeit() [member function] */
        public GetbCanVoteToForfeit(): boolean;

        /** void GameEventWrapper::SetbCanVoteToForfeit(long unsigned int newbCanVoteToForfeit) [member function] */
        public SetbCanVoteToForfeit(newbCanVoteToForfeit: boolean): void;

        /** long unsigned int GameEventWrapper::GetbDisableAimAssist() [member function] */
        public GetbDisableAimAssist(): boolean;

        /** void GameEventWrapper::SetbDisableAimAssist(long unsigned int newbDisableAimAssist) [member function] */
        public SetbDisableAimAssist(newbDisableAimAssist: boolean): void;

        /** long unsigned int GameEventWrapper::GetbAwardAchievements() [member function] */
        public GetbAwardAchievements(): boolean;

        /** void GameEventWrapper::SetbAwardAchievements(long unsigned int newbAwardAchievements) [member function] */
        public SetbAwardAchievements(newbAwardAchievements: boolean): void;

        /** int GameEventWrapper::GetMinPlayers() [member function] */
        public GetMinPlayers(): number;

        /** void GameEventWrapper::SetMinPlayers(int newMinPlayers) [member function] */
        public SetMinPlayers(newMinPlayers: number): void;

        /** int GameEventWrapper::GetMaxPlayers() [member function] */
        public GetMaxPlayers(): number;

        /** void GameEventWrapper::SetMaxPlayers(int newMaxPlayers) [member function] */
        public SetMaxPlayers(newMaxPlayers: number): void;

        /** ArrayWrapper<ActorWrapper> GameEventWrapper::GetSpawnPoints() [member function] */
        public GetSpawnPoints(): ArrayWrapper_ActorWrapper;

        /** float GameEventWrapper::GetBotSkill() [member function] */
        public GetBotSkill(): number;

        /** void GameEventWrapper::SetBotSkill(float newBotSkill) [member function] */
        public SetBotSkill(newBotSkill: number): void;

        /** int GameEventWrapper::GetRespawnTime() [member function] */
        public GetRespawnTime(): number;

        /** void GameEventWrapper::SetRespawnTime(int newRespawnTime) [member function] */
        public SetRespawnTime(newRespawnTime: number): void;

        /** float GameEventWrapper::GetMatchTimeDilation() [member function] */
        public GetMatchTimeDilation(): number;

        /** void GameEventWrapper::SetMatchTimeDilation(float newMatchTimeDilation) [member function] */
        public SetMatchTimeDilation(newMatchTimeDilation: number): void;

        /** PlayerControllerWrapper GameEventWrapper::GetActivator() [member function] */
        public GetActivator(): PlayerControllerWrapper;

        /** void GameEventWrapper::SetActivator(PlayerControllerWrapper newActivator) [member function] */
        public SetActivator(newActivator: PlayerControllerWrapper): void;

        /** CarWrapper GameEventWrapper::GetActivatorCar() [member function] */
        public GetActivatorCar(): CarWrapper;

        /** void GameEventWrapper::SetActivatorCar(CarWrapper newActivatorCar) [member function] */
        public SetActivatorCar(newActivatorCar: CarWrapper): void;

        /** ArrayWrapper<ControllerWrapper> GameEventWrapper::GetPlayers() [member function] */
        public GetPlayers(): ArrayWrapper_ControllerWrapper;

        /** ArrayWrapper<PriWrapper> GameEventWrapper::GetPRIs() [member function] */
        public GetPRIs(): ArrayWrapper_PriWrapper;

        /** ArrayWrapper<CarWrapper> GameEventWrapper::GetCars() [member function] */
        public GetCars(): ArrayWrapper_CarWrapper;

        /** ArrayWrapper<PlayerControllerWrapper> GameEventWrapper::GetLocalPlayers() [member function] */
        public GetLocalPlayers(): ArrayWrapper_PlayerControllerWrapper;

        /** int GameEventWrapper::GetStartPointIndex() [member function] */
        public GetStartPointIndex(): number;

        /** void GameEventWrapper::SetStartPointIndex(int newStartPointIndex) [member function] */
        public SetStartPointIndex(newStartPointIndex: number): void;

        /** int GameEventWrapper::GetGameStateTimeRemaining() [member function] */
        public GetGameStateTimeRemaining(): number;

        /** void GameEventWrapper::SetGameStateTimeRemaining(int newGameStateTimeRemaining) [member function] */
        public SetGameStateTimeRemaining(newGameStateTimeRemaining: number): void;

        /** int GameEventWrapper::GetReplicatedGameStateTimeRemaining() [member function] */
        public GetReplicatedGameStateTimeRemaining(): number;

        /** void GameEventWrapper::SetReplicatedGameStateTimeRemaining(int newReplicatedGameStateTimeRemaining) [member function] */
        public SetReplicatedGameStateTimeRemaining(newReplicatedGameStateTimeRemaining: number): void;

        /** float GameEventWrapper::GetBotBoostThreshold_vsAI() [member function] */
        public GetBotBoostThreshold_vsAI(): number;

        /** void GameEventWrapper::SetBotBoostThreshold_vsAI(float newBotBoostThreshold_vsAI) [member function] */
        public SetBotBoostThreshold_vsAI(newBotBoostThreshold_vsAI: number): void;

        /** StructArrayWrapper<SteamID> GameEventWrapper::GetForfeitInitiatorIDs() [member function] */
        public GetForfeitInitiatorIDs(): StructArrayWrapper_SteamID;

        /** StructArrayWrapper<SteamID> GameEventWrapper::GetBannedPlayers() [member function] */
        public GetBannedPlayers(): StructArrayWrapper_SteamID;

        /** PriWrapper GameEventWrapper::GetGameOwner() [member function] */
        public GetGameOwner(): PriWrapper;

        /** void GameEventWrapper::SetGameOwner(PriWrapper newGameOwner) [member function] */
        public SetGameOwner(newGameOwner: PriWrapper): void;

        /** UnrealStringWrapper GameEventWrapper::GetRichPresenceString() [member function] */
        public GetRichPresenceString(): UnrealStringWrapper;

        /** int GameEventWrapper::GetReplicatedRoundCountDownNumber() [member function] */
        public GetReplicatedRoundCountDownNumber(): number;

        /** void GameEventWrapper::SetReplicatedRoundCountDownNumber(int newReplicatedRoundCountDownNumber) [member function] */
        public SetReplicatedRoundCountDownNumber(newReplicatedRoundCountDownNumber: number): void;

        /** void GameEventWrapper::InitCountDown() [member function] */
        public InitCountDown(): void;

        /** void GameEventWrapper::StartCountdownTimer() [member function] */
        public StartCountdownTimer(): void;

        /** void GameEventWrapper::AllowReadyUp2() [member function] */
        public AllowReadyUp2(): void;

        /** PriWrapper GameEventWrapper::FindPlayerPRI(SteamID & UniqueId) [member function] */
        public FindPlayerPRI(UniqueId: SteamID): PriWrapper;

        /** void GameEventWrapper::HandlePlayerRemoved(GameEventWrapper GameEvent, PriWrapper PRI) [member function] */
        public HandlePlayerRemoved(GameEvent: GameEventWrapper, PRI: PriWrapper): void;

        /** void GameEventWrapper::UpdateGameOwner() [member function] */
        public UpdateGameOwner(): void;

        /** void GameEventWrapper::SetGameOwner2(PriWrapper NewOwner) [member function] */
        public SetGameOwner2(NewOwner: PriWrapper): void;

        /** void GameEventWrapper::__GameEvent_TA__SetAllowReadyUp(PriWrapper P) [member function] */
        public __GameEvent_TA__SetAllowReadyUp(P: PriWrapper): void;

        /** bool GameEventWrapper::__GameEvent_TA__CheckPlayersReady(PriWrapper P) [member function] */
        public __GameEvent_TA__CheckPlayersReady(P: PriWrapper): boolean;

        /** SteamID GameEventWrapper::__GameEvent_TA__CheckForBannedPlayers(PriWrapper PRI) [member function] */
        public __GameEvent_TA__CheckForBannedPlayers(PRI: PriWrapper): SteamID;

        /** void GameEventWrapper::__Pylon__ChangeNotifyFunc() [member function] */
        public __Pylon__ChangeNotifyFunc(): void;

        /** void GameEventWrapper::PlayerResetTraining() [member function] */
        public PlayerResetTraining(): void;

        /** bool GameEventWrapper::SuppressModalDialogs() [member function] */
        public SuppressModalDialogs(): boolean;

        /** bool GameEventWrapper::ShouldShowBallIndicator() [member function] */
        public ShouldShowBallIndicator(): boolean;

        /** void GameEventWrapper::CheckInitiatedForfeit(PriWrapper PRI) [member function] */
        public CheckInitiatedForfeit(PRI: PriWrapper): void;

        /** void GameEventWrapper::CheckChatBanned(PlayerControllerWrapper PC) [member function] */
        public CheckChatBanned(PC: PlayerControllerWrapper): void;

        /** PlayerControllerWrapper GameEventWrapper::FindPCForUniqueID(SteamID & PlayerID) [member function] */
        public FindPCForUniqueID(PlayerID: SteamID): PlayerControllerWrapper;

        /** bool GameEventWrapper::AllowSplitScreenPlayer() [member function] */
        public AllowSplitScreenPlayer(): boolean;

        /** void GameEventWrapper::AddPlayerChatMessage(SteamID & PlayerID, unsigned char ChatChannel, TeamInfoWrapper Team, std::string Message) [member function] */
        public AddPlayerChatMessage(PlayerID: SteamID, ChatChannel: number, Team: TeamInfoWrapper, Message: string): void;

        /** void GameEventWrapper::ConditionalStartSpectatorMatch() [member function] */
        public ConditionalStartSpectatorMatch(): void;

        /** bool GameEventWrapper::IsPlayingTraining() [member function] */
        public IsPlayingTraining(): boolean;

        /** bool GameEventWrapper::IsPlayingLan() [member function] */
        public IsPlayingLan(): boolean;

        /** bool GameEventWrapper::IsPlayingOffline() [member function] */
        public IsPlayingOffline(): boolean;

        /** bool GameEventWrapper::IsPlayingPrivate() [member function] */
        public IsPlayingPrivate(): boolean;

        /** bool GameEventWrapper::IsPlayingPublic() [member function] */
        public IsPlayingPublic(): boolean;

        /** bool GameEventWrapper::IsOnlineMultiplayer() [member function] */
        public IsOnlineMultiplayer(): boolean;

        /** void GameEventWrapper::CreateMatchType(std::string Options) [member function] */
        public CreateMatchType(Options: string): void;

        /** bool GameEventWrapper::AllPlayersSelectedTeam() [member function] */
        public AllPlayersSelectedTeam(): boolean;

        /** bool GameEventWrapper::CanQueSaveReplay() [member function] */
        public CanQueSaveReplay(): boolean;

        /** void GameEventWrapper::ForceMatchStart() [member function] */
        public ForceMatchStart(): void;

        /** void GameEventWrapper::ConditionalStartMatch() [member function] */
        public ConditionalStartMatch(): void;

        /** void GameEventWrapper::SaveLocalPlayerStats() [member function] */
        public SaveLocalPlayerStats(): void;

        /** bool GameEventWrapper::CanUseBallCam() [member function] */
        public CanUseBallCam(): boolean;

        /** bool GameEventWrapper::HandleNextGame() [member function] */
        public HandleNextGame(): boolean;

        /** void GameEventWrapper::SetMaxPlayers2(int InMaxPlayers) [member function] */
        public SetMaxPlayers2(InMaxPlayers: number): void;

        /** void GameEventWrapper::SetRestartingMatch(long unsigned int bRestart) [member function] */
        public SetRestartingMatch(bRestart: boolean): void;

        /** bool GameEventWrapper::ShouldBeFullScreen() [member function] */
        public ShouldBeFullScreen(): boolean;

        /** bool GameEventWrapper::IsFinished() [member function] */
        public IsFinished(): boolean;

        /** void GameEventWrapper::OnAllPlayersReady() [member function] */
        public OnAllPlayersReady(): void;

        /** void GameEventWrapper::CheckPlayersReady2() [member function] */
        public CheckPlayersReady2(): void;

        /** void GameEventWrapper::SetAllowReadyUp2(long unsigned int bAllow) [member function] */
        public SetAllowReadyUp2(bAllow: boolean): void;

        /** void GameEventWrapper::AutoReadyPlayers() [member function] */
        public AutoReadyPlayers(): void;

        /** bool GameEventWrapper::ShouldAutoReadyUp(PriWrapper PRI) [member function] */
        public ShouldAutoReadyUp(PRI: PriWrapper): boolean;

        /** void GameEventWrapper::SendGoMessage(PlayerControllerWrapper Player) [member function] */
        public SendGoMessage(Player: PlayerControllerWrapper): void;

        /** void GameEventWrapper::SendCountdownMessage(int Seconds, PlayerControllerWrapper Player) [member function] */
        public SendCountdownMessage(Seconds: number, Player: PlayerControllerWrapper): void;

        /** void GameEventWrapper::BroadcastCountdownMessage(int Seconds) [member function] */
        public BroadcastCountdownMessage(Seconds: number): void;

        /** void GameEventWrapper::BroadcastGoMessage() [member function] */
        public BroadcastGoMessage(): void;

        /** bool GameEventWrapper::AllowShutdown() [member function] */
        public AllowShutdown(): boolean;

        /** float GameEventWrapper::GetRealDeltaTime(float ElapsedTime) [member function] */
        public GetRealDeltaTime(ElapsedTime: number): number;

        /** void GameEventWrapper::SetTimeDilation(float NewTimeDilation) [member function] */
        public SetTimeDilation(NewTimeDilation: number): void;

        /** void GameEventWrapper::ClearRespawnList() [member function] */
        public ClearRespawnList(): void;

        /** void GameEventWrapper::ReplaceBotsWithAwaitingPlayers() [member function] */
        public ReplaceBotsWithAwaitingPlayers(): void;

        /** int GameEventWrapper::GetRespawnTime2() [member function] */
        public GetRespawnTime2(): number;

        /** void GameEventWrapper::RemoveCar(CarWrapper Car) [member function] */
        public RemoveCar(Car: CarWrapper): void;

        /** void GameEventWrapper::AddCar(CarWrapper Car) [member function] */
        public AddCar(Car: CarWrapper): void;

        /** void GameEventWrapper::TickRespawnTime(float DeltaTime) [member function] */
        public TickRespawnTime(DeltaTime: number): void;

        /** void GameEventWrapper::SetBotSkill2(float NewSkill) [member function] */
        public SetBotSkill2(NewSkill: number): void;

        /** PlayerControllerWrapper GameEventWrapper::GetLocalPrimaryPlayer() [member function] */
        public GetLocalPrimaryPlayer(): PlayerControllerWrapper;

        /** bool GameEventWrapper::HasPlayerNamed(std::string PlayerName) [member function] */
        public HasPlayerNamed(PlayerName: string): boolean;

        /** void GameEventWrapper::RandomizeBots() [member function] */
        public RandomizeBots(): void;

        /** bool GameEventWrapper::MoveToGround(ActorWrapper Mover, float HeightCheck) [member function] */
        public MoveToGround(Mover: ActorWrapper, HeightCheck: number): boolean;

        /** void GameEventWrapper::SetAllDriving(long unsigned int bDriving) [member function] */
        public SetAllDriving(bDriving: boolean): void;

        /** void GameEventWrapper::OnFinished() [member function] */
        public OnFinished(): void;

        /** void GameEventWrapper::StartCountDown() [member function] */
        public StartCountDown(): void;

        /** void GameEventWrapper::StartInitialCountDown() [member function] */
        public StartInitialCountDown(): void;

        /** void GameEventWrapper::OnGameStateTimeLapsed() [member function] */
        public OnGameStateTimeLapsed(): void;

        /** void GameEventWrapper::OnGameStateTimeUpdated() [member function] */
        public OnGameStateTimeUpdated(): void;

        /** void GameEventWrapper::UpdateGameStateTime() [member function] */
        public UpdateGameStateTime(): void;

        /** void GameEventWrapper::SetGameStateTimeRemaining2(int StateTime, long unsigned int bFromReplication) [member function] */
        public SetGameStateTimeRemaining2(StateTime: number, bFromReplication: boolean): void;

        /** void GameEventWrapper::SetGameStateTime2(int StateTime) [member function] */
        public SetGameStateTime2(StateTime: number): void;

        /** void GameEventWrapper::OnPlayerRestarted(CarWrapper PlayerCar) [member function] */
        public OnPlayerRestarted(PlayerCar: CarWrapper): void;

        /** void GameEventWrapper::TeleportCar(CarWrapper PlayerCar) [member function] */
        public TeleportCar(PlayerCar: CarWrapper): void;

        /** void GameEventWrapper::OnCarSpawned(CarWrapper NewCar) [member function] */
        public OnCarSpawned(NewCar: CarWrapper): void;

        /** bool GameEventWrapper::SpotIsEncroached(Vector & Spot) [member function] */
        public SpotIsEncroached(Spot: Vector): boolean;

        /** void GameEventWrapper::RandomizeSpawnPoints() [member function] */
        public RandomizeSpawnPoints(): void;

        /** void GameEventWrapper::RestartPlayers() [member function] */
        public RestartPlayers(): void;

        /** void GameEventWrapper::RemoveLocalPlayer(PlayerControllerWrapper Player) [member function] */
        public RemoveLocalPlayer(Player: PlayerControllerWrapper): void;

        /** void GameEventWrapper::AddLocalPlayer(PlayerControllerWrapper Player) [member function] */
        public AddLocalPlayer(Player: PlayerControllerWrapper): void;

        /** void GameEventWrapper::RemovePRI(PriWrapper PRI) [member function] */
        public RemovePRI(PRI: PriWrapper): void;

        /** void GameEventWrapper::AddPRI(PriWrapper PRI) [member function] */
        public AddPRI(PRI: PriWrapper): void;

        /** void GameEventWrapper::AddForfeitInitiator(SteamID & PlayerID) [member function] */
        public AddForfeitInitiator(PlayerID: SteamID): void;

        /** void GameEventWrapper::BanPlayerID(SteamID & PlayerID) [member function] */
        public BanPlayerID(PlayerID: SteamID): void;

        /** int GameEventWrapper::GetMaxHumans() [member function] */
        public GetMaxHumans(): number;

        /** int GameEventWrapper::GetNumHumans() [member function] */
        public GetNumHumans(): number;

        /** bool GameEventWrapper::FindBotReplacement(PriWrapper PRI) [member function] */
        public FindBotReplacement(PRI: PriWrapper): boolean;

        /** void GameEventWrapper::UpdateBotCount() [member function] */
        public UpdateBotCount(): void;

        /** void GameEventWrapper::TimerUpdateBotCount() [member function] */
        public TimerUpdateBotCount(): void;

        /** void GameEventWrapper::InitBotSkill() [member function] */
        public InitBotSkill(): void;

        /** void GameEventWrapper::InitMutators() [member function] */
        public InitMutators(): void;

        /** void GameEventWrapper::HandleFinished(GameEventWrapper GameEvent) [member function] */
        public HandleFinished(GameEvent: GameEventWrapper): void;

        /** void GameEventWrapper::Init2(PlayerControllerWrapper InActivator) [member function] */
        public Init2(InActivator: PlayerControllerWrapper): void;

        /** void GameEventWrapper::eventInitGame(std::string Options) [member function] */
        public eventInitGame(Options: string): void;

        /** void GameEventWrapper::OnGameStateChanged() [member function] */
        public OnGameStateChanged(): void;

        /** void GameEventWrapper::OnCanVoteForfeitChanged() [member function] */
        public OnCanVoteForfeitChanged(): void;

        /** void GameEventWrapper::UpdateCanVoteToForfeit() [member function] */
        public UpdateCanVoteToForfeit(): void;

        /** bool GameEventWrapper::ShouldAllowVoteToForfeit() [member function] */
        public ShouldAllowVoteToForfeit(): boolean;

        /** void GameEventWrapper::OnPenaltyChanged() [member function] */
        public OnPenaltyChanged(): void;

        /** void GameEventWrapper::UpdateLeaveMatchPenalty() [member function] */
        public UpdateLeaveMatchPenalty(): void;

        /** GameSettingPlaylistWrapper GameEventWrapper::GetPlaylist() [member function] */
        public GetPlaylist(): GameSettingPlaylistWrapper;

        /** bool GameEventWrapper::ShouldHaveLeaveMatchPenalty() [member function] */
        public ShouldHaveLeaveMatchPenalty(): boolean;

        /** void GameEventWrapper::OnMatchSettingsChanged() [member function] */
        public OnMatchSettingsChanged(): void;

        /** void GameEventWrapper::ClearGameScoreFromCustomSettings() [member function] */
        public ClearGameScoreFromCustomSettings(): void;

        /** void GameEventWrapper::EventPlayerResetTraining(GameEventWrapper GameEvent) [member function] */
        public EventPlayerResetTraining(GameEvent: GameEventWrapper): void;

    }

    /** TutorialWrapper [class] */
    class TutorialWrapper extends ServerWrapper {
        // Public:
        /** TutorialWrapper::TutorialWrapper(uintptr_t mem) [constructor] */
        public constructor(mem: bigint);

        /** void TutorialWrapper::Redo() [member function] */
        public Redo(): void;

        /** Vector TutorialWrapper::GetCarSpawnLocation() [member function] */
        public GetCarSpawnLocation(): Vector;

        /** void TutorialWrapper::SetCarSpawnLocation(Vector v) [member function] */
        public SetCarSpawnLocation(v: Vector): void;

        /** Rotator TutorialWrapper::GetCarSpawnRotation() [member function] */
        public GetCarSpawnRotation(): Rotator;

        /** void TutorialWrapper::SetCarSpawnRotation(Rotator v) [member function] */
        public SetCarSpawnRotation(v: Rotator): void;

        /** CarWrapper TutorialWrapper::GetGameCar() [member function] */
        public GetGameCar(): CarWrapper;

        /** bool TutorialWrapper::IsBallMovingTowardsGoal(int goalNo, BallWrapper bw) [member function] */
        public IsBallMovingTowardsGoal(goalNo: number, bw: BallWrapper): boolean;

        /** bool TutorialWrapper::IsInGoal(Vector vec) [member function] */
        public IsInGoal(vec: Vector): boolean;

        /** void TutorialWrapper::DisableGoalReset() [member function] */
        public DisableGoalReset(): void;

        /** void TutorialWrapper::EnableGoalReset() [member function] */
        public EnableGoalReset(): void;

        /** Vector TutorialWrapper::GenerateShot(Vector startPos, Vector destination, float speed) [member function] */
        public GenerateShot(startPos: Vector, destination: Vector, speed: number): Vector;

        /** Vector TutorialWrapper::GenerateGoalAimLocation(int goalNumber, Vector currentBallLocation) [member function] */
        public GenerateGoalAimLocation(goalNumber: number, currentBallLocation: Vector): Vector;

        /** Vector TutorialWrapper::GetGoalExtent(int goalNumber=0) [member function] */
        public GetGoalExtent(goalNumber?: number): Vector;

        /** Vector TutorialWrapper::GetGoalLocation(int goalNumber=0) [member function] */
        public GetGoalLocation(goalNumber?: number): Vector;

        /** Vector TutorialWrapper::GetTotalFieldExtent() [member function] */
        public GetTotalFieldExtent(): Vector;

        /** void TutorialWrapper::SetTotalFieldExtent(Vector newTotalFieldExtent) [member function] */
        public SetTotalFieldExtent(newTotalFieldExtent: Vector): void;

        /** int TutorialWrapper::GetTeamNum() [member function] */
        public GetTeamNum(): number;

        /** void TutorialWrapper::SetTeamNum(int newTeamNum) [member function] */
        public SetTeamNum(newTeamNum: number): void;

        /** int TutorialWrapper::GetBallGoalNum() [member function] */
        public GetBallGoalNum(): number;

        /** void TutorialWrapper::SetBallGoalNum(int newBallGoalNum) [member function] */
        public SetBallGoalNum(newBallGoalNum: number): void;

        /** long unsigned int TutorialWrapper::GetbOnlyScoreInBallGoalNum() [member function] */
        public GetbOnlyScoreInBallGoalNum(): boolean;

        /** void TutorialWrapper::SetbOnlyScoreInBallGoalNum(long unsigned int newbOnlyScoreInBallGoalNum) [member function] */
        public SetbOnlyScoreInBallGoalNum(newbOnlyScoreInBallGoalNum: boolean): void;

        /** long unsigned int TutorialWrapper::GetbRedoRound() [member function] */
        public GetbRedoRound(): boolean;

        /** void TutorialWrapper::SetbRedoRound(long unsigned int newbRedoRound) [member function] */
        public SetbRedoRound(newbRedoRound: boolean): void;

        /** long unsigned int TutorialWrapper::GetbAllowSuperBoost() [member function] */
        public GetbAllowSuperBoost(): boolean;

        /** void TutorialWrapper::SetbAllowSuperBoost(long unsigned int newbAllowSuperBoost) [member function] */
        public SetbAllowSuperBoost(newbAllowSuperBoost: boolean): void;

        /** long unsigned int TutorialWrapper::GetbDisplayedRedoPenaltyMessage() [member function] */
        public GetbDisplayedRedoPenaltyMessage(): boolean;

        /** void TutorialWrapper::SetbDisplayedRedoPenaltyMessage(long unsigned int newbDisplayedRedoPenaltyMessage) [member function] */
        public SetbDisplayedRedoPenaltyMessage(newbDisplayedRedoPenaltyMessage: boolean): void;

        /** long unsigned int TutorialWrapper::GetbShowBoostMeter() [member function] */
        public GetbShowBoostMeter(): boolean;

        /** void TutorialWrapper::SetbShowBoostMeter(long unsigned int newbShowBoostMeter) [member function] */
        public SetbShowBoostMeter(newbShowBoostMeter: boolean): void;

        /** unsigned char TutorialWrapper::GetDifficulty() [member function] */
        public GetDifficulty(): number;

        /** void TutorialWrapper::SetDifficulty(unsigned char newDifficulty) [member function] */
        public SetDifficulty(newDifficulty: number): void;

        /** unsigned char TutorialWrapper::GetDebugRotationType() [member function] */
        public GetDebugRotationType(): number;

        /** void TutorialWrapper::SetDebugRotationType(unsigned char newDebugRotationType) [member function] */
        public SetDebugRotationType(newDebugRotationType: number): void;

        /** float TutorialWrapper::GetGoalDepth() [member function] */
        public GetGoalDepth(): number;

        /** void TutorialWrapper::SetGoalDepth(float newGoalDepth) [member function] */
        public SetGoalDepth(newGoalDepth: number): void;

        /** int TutorialWrapper::GetGameEventRounds() [member function] */
        public GetGameEventRounds(): number;

        /** void TutorialWrapper::SetGameEventRounds(int newGameEventRounds) [member function] */
        public SetGameEventRounds(newGameEventRounds: number): void;

        /** float TutorialWrapper::GetEventStartTime() [member function] */
        public GetEventStartTime(): number;

        /** void TutorialWrapper::SetEventStartTime(float newEventStartTime) [member function] */
        public SetEventStartTime(newEventStartTime: number): void;

        /** Vector TutorialWrapper::GetBallInitialVelocity() [member function] */
        public GetBallInitialVelocity(): Vector;

        /** void TutorialWrapper::SetBallInitialVelocity(Vector newBallInitialVelocity) [member function] */
        public SetBallInitialVelocity(newBallInitialVelocity: Vector): void;

        /** int TutorialWrapper::GetSpawnIndexTypeOverride() [member function] */
        public GetSpawnIndexTypeOverride(): number;

        /** void TutorialWrapper::SetSpawnIndexTypeOverride(int newSpawnIndexTypeOverride) [member function] */
        public SetSpawnIndexTypeOverride(newSpawnIndexTypeOverride: number): void;

        /** int TutorialWrapper::GetWaveIndex() [member function] */
        public GetWaveIndex(): number;

        /** void TutorialWrapper::SetWaveIndex(int newWaveIndex) [member function] */
        public SetWaveIndex(newWaveIndex: number): void;

        /** int TutorialWrapper::GetWaveSpawnCount() [member function] */
        public GetWaveSpawnCount(): number;

        /** void TutorialWrapper::SetWaveSpawnCount(int newWaveSpawnCount) [member function] */
        public SetWaveSpawnCount(newWaveSpawnCount: number): void;

        /** int TutorialWrapper::GetRandomSpawnIndex() [member function] */
        public GetRandomSpawnIndex(): number;

        /** void TutorialWrapper::SetRandomSpawnIndex(int newRandomSpawnIndex) [member function] */
        public SetRandomSpawnIndex(newRandomSpawnIndex: number): void;

        /** UnrealStringWrapper TutorialWrapper::GetStartMessageArchetype() [member function] */
        public GetStartMessageArchetype(): UnrealStringWrapper;

        /** Vector TutorialWrapper::GetBallSpawnLocation() [member function] */
        public GetBallSpawnLocation(): Vector;

        /** void TutorialWrapper::SetBallSpawnLocation(Vector newBallSpawnLocation) [member function] */
        public SetBallSpawnLocation(newBallSpawnLocation: Vector): void;

        /** int TutorialWrapper::GetPointsScoredThisRound() [member function] */
        public GetPointsScoredThisRound(): number;

        /** void TutorialWrapper::SetPointsScoredThisRound(int newPointsScoredThisRound) [member function] */
        public SetPointsScoredThisRound(newPointsScoredThisRound: number): void;

        /** int TutorialWrapper::GetBallSpawnCount() [member function] */
        public GetBallSpawnCount(): number;

        /** void TutorialWrapper::SetBallSpawnCount(int newBallSpawnCount) [member function] */
        public SetBallSpawnCount(newBallSpawnCount: number): void;

        /** float TutorialWrapper::GetBallBounceScale() [member function] */
        public GetBallBounceScale(): number;

        /** void TutorialWrapper::SetBallBounceScale(float newBallBounceScale) [member function] */
        public SetBallBounceScale(newBallBounceScale: number): void;

        /** int TutorialWrapper::GetCurrentDebugStepX() [member function] */
        public GetCurrentDebugStepX(): number;

        /** void TutorialWrapper::SetCurrentDebugStepX(int newCurrentDebugStepX) [member function] */
        public SetCurrentDebugStepX(newCurrentDebugStepX: number): void;

        /** int TutorialWrapper::GetCurrentDebugStepY() [member function] */
        public GetCurrentDebugStepY(): number;

        /** void TutorialWrapper::SetCurrentDebugStepY(int newCurrentDebugStepY) [member function] */
        public SetCurrentDebugStepY(newCurrentDebugStepY: number): void;

        /** int TutorialWrapper::GetCurrentDebugStepZ() [member function] */
        public GetCurrentDebugStepZ(): number;

        /** void TutorialWrapper::SetCurrentDebugStepZ(int newCurrentDebugStepZ) [member function] */
        public SetCurrentDebugStepZ(newCurrentDebugStepZ: number): void;

        /** int TutorialWrapper::GetRedoCount() [member function] */
        public GetRedoCount(): number;

        /** void TutorialWrapper::SetRedoCount(int newRedoCount) [member function] */
        public SetRedoCount(newRedoCount: number): void;

        /** int TutorialWrapper::GetRedoTotal() [member function] */
        public GetRedoTotal(): number;

        /** void TutorialWrapper::SetRedoTotal(int newRedoTotal) [member function] */
        public SetRedoTotal(newRedoTotal: number): void;

        /** void TutorialWrapper::InitIntro() [member function] */
        public InitIntro(): void;

        /** void TutorialWrapper::OnLoadingMovieClosed() [member function] */
        public OnLoadingMovieClosed(): void;

        /** void TutorialWrapper::StartTimers() [member function] */
        public StartTimers(): void;

        /** void TutorialWrapper::UpdateMVP() [member function] */
        public UpdateMVP(): void;

        /** bool TutorialWrapper::AllowDynamicCrowd() [member function] */
        public AllowDynamicCrowd(): boolean;

        /** void TutorialWrapper::SetTutorialTip(std::string NewTip) [member function] */
        public SetTutorialTip(NewTip: string): void;

        /** void TutorialWrapper::SetShowBoostMeter(long unsigned int bShow) [member function] */
        public SetShowBoostMeter(bShow: boolean): void;

        /** float TutorialWrapper::GetStepLoc(int Steps, float TotalDist, long unsigned int bIncrement, int * Out_CurrentStep) [member function] */
        public GetStepLoc(Steps: number, TotalDist: number, bIncrement: boolean, Out_CurrentStep: number): number;

        /** Vector TutorialWrapper::GetDebugLocationInExtent(Vector & Extent) [member function] */
        public GetDebugLocationInExtent(Extent: Vector): Vector;

        /** void TutorialWrapper::InitDebugSetup(CarWrapper Car) [member function] */
        public InitDebugSetup(Car: CarWrapper): void;

        /** void TutorialWrapper::SkipTutorial() [member function] */
        public SkipTutorial(): void;

        /** void TutorialWrapper::UpdateBotCount() [member function] */
        public UpdateBotCount(): void;

        /** void TutorialWrapper::InitMutators() [member function] */
        public InitMutators(): void;

        /** bool TutorialWrapper::IsPrimaryPlayer(CarWrapper Car) [member function] */
        public IsPrimaryPlayer(Car: CarWrapper): boolean;

        /** bool TutorialWrapper::CanAwardPoints() [member function] */
        public CanAwardPoints(): boolean;

        /** void TutorialWrapper::ShowResetRoundMessage() [member function] */
        public ShowResetRoundMessage(): void;

        /** void TutorialWrapper::Destroyed() [member function] */
        public Destroyed(): void;

        /** bool TutorialWrapper::EndTutorial() [member function] */
        public EndTutorial(): boolean;

        /** void TutorialWrapper::CommitRedoRound() [member function] */
        public CommitRedoRound(): void;

        /** void TutorialWrapper::RedoRound2() [member function] */
        public RedoRound2(): void;

        /** bool TutorialWrapper::CanRedoRound() [member function] */
        public CanRedoRound(): boolean;

        /** void TutorialWrapper::StartNewRound() [member function] */
        public StartNewRound(): void;

        /** void TutorialWrapper::SaveLocalPlayerStats() [member function] */
        public SaveLocalPlayerStats(): void;

        /** TeamWrapper TutorialWrapper::GetWinningTeam() [member function] */
        public GetWinningTeam(): TeamWrapper;

        /** void TutorialWrapper::CleanupRoundActors() [member function] */
        public CleanupRoundActors(): void;

        /** bool TutorialWrapper::CanQueSaveReplay() [member function] */
        public CanQueSaveReplay(): boolean;

        /** void TutorialWrapper::ResetBalls() [member function] */
        public ResetBalls(): void;

        /** int TutorialWrapper::GetScore() [member function] */
        public GetScore(): number;

        /** void TutorialWrapper::StartRound() [member function] */
        public StartRound(): void;

        /** int TutorialWrapper::GetGameEventRounds2() [member function] */
        public GetGameEventRounds2(): number;

        /** int TutorialWrapper::GetTotalRounds() [member function] */
        public GetTotalRounds(): number;

        /** void TutorialWrapper::ResetRoundTime() [member function] */
        public ResetRoundTime(): void;

        /** void TutorialWrapper::OnPlayerRestarted(CarWrapper PlayerCar) [member function] */
        public OnPlayerRestarted(PlayerCar: CarWrapper): void;

        /** unsigned char TutorialWrapper::GetTrainingType() [member function] */
        public GetTrainingType(): number;

        /** void TutorialWrapper::EndGame() [member function] */
        public EndGame(): void;

        /** Vector TutorialWrapper::GetRandomLocationInExtent(Vector & Extent) [member function] */
        public GetRandomLocationInExtent(Extent: Vector): Vector;

        /** bool TutorialWrapper::Chance(int Chances) [member function] */
        public Chance(Chances: number): boolean;

        /** int TutorialWrapper::GetOppositeTeamNum() [member function] */
        public GetOppositeTeamNum(): number;

        /** Vector TutorialWrapper::GetDirectionToGoal(int GoalNum) [member function] */
        public GetDirectionToGoal(GoalNum: number): Vector;

        /** bool TutorialWrapper::IsGameEventComplete() [member function] */
        public IsGameEventComplete(): boolean;

        /** Vector TutorialWrapper::ClampPointToExtent(Vector & ExtentCenter, Vector & Point, Vector & Extent) [member function] */
        public ClampPointToExtent(ExtentCenter: Vector, Point: Vector, Extent: Vector): Vector;

        /** Vector TutorialWrapper::PredictInitialVelocity(Vector & StartLoc, Vector & EndLoc, float Z) [member function] */
        public PredictInitialVelocity(StartLoc: Vector, EndLoc: Vector, Z: number): Vector;

        /** BallWrapper TutorialWrapper::GetGameBall() [member function] */
        public GetGameBall(): BallWrapper;

        /** CarWrapper TutorialWrapper::GetGamePawn() [member function] */
        public GetGamePawn(): CarWrapper;

        /** void TutorialWrapper::ResetGameEvent() [member function] */
        public ResetGameEvent(): void;

        /** void TutorialWrapper::CheckForReset() [member function] */
        public CheckForReset(): void;

        /** float TutorialWrapper::GetGoalViewWidth(GoalWrapper Goal, Vector & ViewerLoc) [member function] */
        public GetGoalViewWidth(Goal: GoalWrapper, ViewerLoc: Vector): number;

        /** bool TutorialWrapper::IsBallMovingTowardsGoal2(GoalWrapper Goal, BallWrapper Ball, float MinVelocityForDestroy, float InGoalDepth) [member function] */
        public IsBallMovingTowardsGoal2(Goal: GoalWrapper, Ball: BallWrapper, MinVelocityForDestroy: number, InGoalDepth: number): boolean;

        /** void TutorialWrapper::SetGoalDepth2() [member function] */
        public SetGoalDepth2(): void;

        /** int TutorialWrapper::GetShuffledSpawnIndex() [member function] */
        public GetShuffledSpawnIndex(): number;

        /** void TutorialWrapper::DestroyCannon() [member function] */
        public DestroyCannon(): void;

        /** void TutorialWrapper::SetCannonOrientation(Vector & NewLocation, Rotator & NewRotation) [member function] */
        public SetCannonOrientation(NewLocation: Vector, NewRotation: Rotator): void;

        /**
         * BallWrapper TutorialWrapper::SpawnBall(Vector & SpawnLoc, long unsigned int bWake, long unsigned int bSpawnCannon, std::string BallArch) [member function]
         * @Note renamed because it is not assignable to the same property in parent.
         */
        public SpawnBall2(SpawnLoc: Vector, bWake: boolean, bSpawnCannon: boolean, BallArch: string): BallWrapper;

        /** void TutorialWrapper::InitBallEffects() [member function] */
        public InitBallEffects(): void;

        /** void TutorialWrapper::InitBallVelocity() [member function] */
        public InitBallVelocity(): void;

        /** Vector TutorialWrapper::GetRandomGoalAimLocation(int InTeamNum, Vector & BallLoc) [member function] */
        public GetRandomGoalAimLocation(InTeamNum: number, BallLoc: Vector): Vector;

        /** Vector TutorialWrapper::GetGoalExtent2(GoalWrapper Goal) [member function] */
        public GetGoalExtent2(Goal: GoalWrapper): Vector;

        /** void TutorialWrapper::SetBallVelocity(Vector & InitialVelocity, BallWrapper Ball) [member function] */
        public SetBallVelocity(InitialVelocity: Vector, Ball: BallWrapper): void;

        /** void TutorialWrapper::InitGameSetup(CarWrapper Car) [member function] */
        public InitGameSetup(Car: CarWrapper): void;

        /** bool TutorialWrapper::ShouldAllowSuperBoost() [member function] */
        public ShouldAllowSuperBoost(): boolean;

        /** void TutorialWrapper::OnVehicleSetup(CarWrapper Car) [member function] */
        public OnVehicleSetup(Car: CarWrapper): void;

        /** void TutorialWrapper::HandleVehicleSetup(CarWrapper Car) [member function] */
        public HandleVehicleSetup(Car: CarWrapper): void;

        /** void TutorialWrapper::InitCrowdManager() [member function] */
        public InitCrowdManager(): void;

        /** void TutorialWrapper::HandleScoreUpdated(TeamWrapper Team) [member function] */
        public HandleScoreUpdated(Team: TeamWrapper): void;

        /** void TutorialWrapper::SetDifficulty2(int InDifficulty) [member function] */
        public SetDifficulty2(InDifficulty: number): void;

        /** void TutorialWrapper::UpdateStats() [member function] */
        public UpdateStats(): void;

        /** void TutorialWrapper::AddLocalPlayer(PlayerControllerWrapper Player) [member function] */
        public AddLocalPlayer(Player: PlayerControllerWrapper): void;

        /** void TutorialWrapper::HandlePlayerResetTraining(GameEventWrapper GameEvent) [member function] */
        public HandlePlayerResetTraining(GameEvent: GameEventWrapper): void;

        /** void TutorialWrapper::OnInit() [member function] */
        public OnInit(): void;

        /** void TutorialWrapper::EventTutorialTipChanged(TutorialWrapper GameEvent, std::string NewTip) [member function] */
        public EventTutorialTipChanged(GameEvent: TutorialWrapper, NewTip: string): void;

    }

    /** ServerWrapper [class] */
    class ServerWrapper extends TeamGameEventWrapper {
        // Public:
        /** ServerWrapper::ServerWrapper(uintptr_t mem) [constructor] */
        public constructor(mem: bigint);

        /** BallWrapper ServerWrapper::GetBall() [member function] */
        public GetBall(): BallWrapper;

        /** void ServerWrapper::SpawnCar(int carBody, std::string name) [member function] */
        public SpawnCar(carBody: number, name: string): void;

        /** void ServerWrapper::SpawnBot(int carBody, std::string name) [member function] */
        public SpawnBot(carBody: number, name: string): void;

        /** BallWrapper ServerWrapper::SpawnBall(Vector const position, bool wake, bool spawnCannon) [member function] */
        public SpawnBall(position: Vector, wake: boolean, spawnCannon: boolean): BallWrapper;

        /** bool ServerWrapper::HasAuthority() [member function] */
        public HasAuthority(): boolean;

        /** void ServerWrapper::SetGameSpeed(float GameSpeed) [member function] */
        public SetGameSpeed(GameSpeed: number): void;

        /** float ServerWrapper::GetGameSpeed() [member function] */
        public GetGameSpeed(): number;

        /** void ServerWrapper::SetSecondsElapsed(float SecondsElapsed) [member function] */
        public SetSecondsElapsed(SecondsElapsed: number): void;

        /** float ServerWrapper::GetSecondsElapsed() [member function] */
        public GetSecondsElapsed(): number;

        /** CarWrapper ServerWrapper::GetGameCar() [member function] */
        public GetGameCar(): CarWrapper;

        /** bool ServerWrapper::IsBallMovingTowardsGoal(int goalNo, BallWrapper bw) [member function] */
        public IsBallMovingTowardsGoal(goalNo: number, bw: BallWrapper): boolean;

        /** bool ServerWrapper::IsInGoal(Vector vec) [member function] */
        public IsInGoal(vec: Vector): boolean;

        /** void ServerWrapper::DisableGoalReset() [member function] */
        public DisableGoalReset(): void;

        /** void ServerWrapper::EnableGoalReset() [member function] */
        public EnableGoalReset(): void;

        /** Vector ServerWrapper::GenerateShot(Vector startPos, Vector destination, float speed) [member function] */
        public GenerateShot(startPos: Vector, destination: Vector, speed: number): Vector;

        /** Vector ServerWrapper::GenerateGoalAimLocation(int goalNumber, Vector currentBallLocation) [member function] */
        public GenerateGoalAimLocation(goalNumber: number, currentBallLocation: Vector): Vector;

        /** Vector ServerWrapper::GetGoalExtent(int goalNumber=0) [member function] */
        public GetGoalExtent(goalNumber?: number): Vector;

        /** Vector ServerWrapper::GetGoalLocation(int goalNumber=0) [member function] */
        public GetGoalLocation(goalNumber?: number): Vector;

        /** CarWrapper ServerWrapper::GetTestCarArchetype() [member function] */
        public GetTestCarArchetype(): CarWrapper;

        /** void ServerWrapper::SetTestCarArchetype(CarWrapper newTestCarArchetype) [member function] */
        public SetTestCarArchetype(newTestCarArchetype: CarWrapper): void;

        /** BallWrapper ServerWrapper::GetBallArchetype() [member function] */
        public GetBallArchetype(): BallWrapper;

        /** void ServerWrapper::SetBallArchetype(BallWrapper newBallArchetype) [member function] */
        public SetBallArchetype(newBallArchetype: BallWrapper): void;

        /** ActorWrapper ServerWrapper::GetBallSpawnPoint() [member function] */
        public GetBallSpawnPoint(): ActorWrapper;

        /** void ServerWrapper::SetBallSpawnPoint(ActorWrapper newBallSpawnPoint) [member function] */
        public SetBallSpawnPoint(newBallSpawnPoint: ActorWrapper): void;

        /** int ServerWrapper::GetSeriesLength() [member function] */
        public GetSeriesLength(): number;

        /** void ServerWrapper::SetSeriesLength(int newSeriesLength) [member function] */
        public SetSeriesLength(newSeriesLength: number): void;

        /** int ServerWrapper::GetGameTime() [member function] */
        public GetGameTime(): number;

        /** void ServerWrapper::SetGameTime(int newGameTime) [member function] */
        public SetGameTime(newGameTime: number): void;

        /** int ServerWrapper::GetWarmupTime() [member function] */
        public GetWarmupTime(): number;

        /** void ServerWrapper::SetWarmupTime(int newWarmupTime) [member function] */
        public SetWarmupTime(newWarmupTime: number): void;

        /** int ServerWrapper::GetMaxScore() [member function] */
        public GetMaxScore(): number;

        /** void ServerWrapper::SetMaxScore(int newMaxScore) [member function] */
        public SetMaxScore(newMaxScore: number): void;

        /** int ServerWrapper::GetAutoBalanceDifference() [member function] */
        public GetAutoBalanceDifference(): number;

        /** void ServerWrapper::SetAutoBalanceDifference(int newAutoBalanceDifference) [member function] */
        public SetAutoBalanceDifference(newAutoBalanceDifference: number): void;

        /** float ServerWrapper::GetScoreSlomoTime() [member function] */
        public GetScoreSlomoTime(): number;

        /** void ServerWrapper::SetScoreSlomoTime(float newScoreSlomoTime) [member function] */
        public SetScoreSlomoTime(newScoreSlomoTime: number): void;

        /** float ServerWrapper::GetGameTimeRemaining() [member function] */
        public GetGameTimeRemaining(): number;

        /** void ServerWrapper::SetGameTimeRemaining(float newGameTimeRemaining) [member function] */
        public SetGameTimeRemaining(newGameTimeRemaining: number): void;

        /** int ServerWrapper::GetSecondsRemaining() [member function] */
        public GetSecondsRemaining(): number;

        /** void ServerWrapper::SetSecondsRemaining(int newSecondsRemaining) [member function] */
        public SetSecondsRemaining(newSecondsRemaining: number): void;

        /** int ServerWrapper::GetWaitTimeRemaining() [member function] */
        public GetWaitTimeRemaining(): number;

        /** void ServerWrapper::SetWaitTimeRemaining(int newWaitTimeRemaining) [member function] */
        public SetWaitTimeRemaining(newWaitTimeRemaining: number): void;

        /** float ServerWrapper::GetTotalGameTimePlayed() [member function] */
        public GetTotalGameTimePlayed(): number;

        /** void ServerWrapper::SetTotalGameTimePlayed(float newTotalGameTimePlayed) [member function] */
        public SetTotalGameTimePlayed(newTotalGameTimePlayed: number): void;

        /** float ServerWrapper::GetOvertimeTimePlayed() [member function] */
        public GetOvertimeTimePlayed(): number;

        /** void ServerWrapper::SetOvertimeTimePlayed(float newOvertimeTimePlayed) [member function] */
        public SetOvertimeTimePlayed(newOvertimeTimePlayed: number): void;

        /** long unsigned int ServerWrapper::GetbRoundActive() [member function] */
        public GetbRoundActive(): boolean;

        /** void ServerWrapper::SetbRoundActive(long unsigned int newbRoundActive) [member function] */
        public SetbRoundActive(newbRoundActive: boolean): void;

        /** long unsigned int ServerWrapper::GetbPlayReplays() [member function] */
        public GetbPlayReplays(): boolean;

        /** void ServerWrapper::SetbPlayReplays(long unsigned int newbPlayReplays) [member function] */
        public SetbPlayReplays(newbPlayReplays: boolean): void;

        /** long unsigned int ServerWrapper::GetbBallHasBeenHit() [member function] */
        public GetbBallHasBeenHit(): boolean;

        /** void ServerWrapper::SetbBallHasBeenHit(long unsigned int newbBallHasBeenHit) [member function] */
        public SetbBallHasBeenHit(newbBallHasBeenHit: boolean): void;

        /** long unsigned int ServerWrapper::GetbOverTime() [member function] */
        public GetbOverTime(): boolean;

        /** void ServerWrapper::SetbOverTime(long unsigned int newbOverTime) [member function] */
        public SetbOverTime(newbOverTime: boolean): void;

        /** long unsigned int ServerWrapper::GetbUnlimitedTime() [member function] */
        public GetbUnlimitedTime(): boolean;

        /** void ServerWrapper::SetbUnlimitedTime(long unsigned int newbUnlimitedTime) [member function] */
        public SetbUnlimitedTime(newbUnlimitedTime: boolean): void;

        /** long unsigned int ServerWrapper::GetbNoContest() [member function] */
        public GetbNoContest(): boolean;

        /** void ServerWrapper::SetbNoContest(long unsigned int newbNoContest) [member function] */
        public SetbNoContest(newbNoContest: boolean): void;

        /** long unsigned int ServerWrapper::GetbDisableGoalDelay() [member function] */
        public GetbDisableGoalDelay(): boolean;

        /** void ServerWrapper::SetbDisableGoalDelay(long unsigned int newbDisableGoalDelay) [member function] */
        public SetbDisableGoalDelay(newbDisableGoalDelay: boolean): void;

        /** long unsigned int ServerWrapper::GetbShowNoScorerGoalMessage() [member function] */
        public GetbShowNoScorerGoalMessage(): boolean;

        /** void ServerWrapper::SetbShowNoScorerGoalMessage(long unsigned int newbShowNoScorerGoalMessage) [member function] */
        public SetbShowNoScorerGoalMessage(newbShowNoScorerGoalMessage: boolean): void;

        /** long unsigned int ServerWrapper::GetbMatchEnded() [member function] */
        public GetbMatchEnded(): boolean;

        /** void ServerWrapper::SetbMatchEnded(long unsigned int newbMatchEnded) [member function] */
        public SetbMatchEnded(newbMatchEnded: boolean): void;

        /** long unsigned int ServerWrapper::GetbShowIntroScene() [member function] */
        public GetbShowIntroScene(): boolean;

        /** void ServerWrapper::SetbShowIntroScene(long unsigned int newbShowIntroScene) [member function] */
        public SetbShowIntroScene(newbShowIntroScene: boolean): void;

        /** long unsigned int ServerWrapper::GetbClubMatch() [member function] */
        public GetbClubMatch(): boolean;

        /** void ServerWrapper::SetbClubMatch(long unsigned int newbClubMatch) [member function] */
        public SetbClubMatch(newbClubMatch: boolean): void;

        /** int ServerWrapper::GetNextSpawnIndex() [member function] */
        public GetNextSpawnIndex(): number;

        /** void ServerWrapper::SetNextSpawnIndex(int newNextSpawnIndex) [member function] */
        public SetNextSpawnIndex(newNextSpawnIndex: number): void;

        /** ReplayDirectorWrapper ServerWrapper::GetReplayDirectorArchetype() [member function] */
        public GetReplayDirectorArchetype(): ReplayDirectorWrapper;

        /** void ServerWrapper::SetReplayDirectorArchetype(ReplayDirectorWrapper newReplayDirectorArchetype) [member function] */
        public SetReplayDirectorArchetype(newReplayDirectorArchetype: ReplayDirectorWrapper): void;

        /** ReplayDirectorWrapper ServerWrapper::GetReplayDirector() [member function] */
        public GetReplayDirector(): ReplayDirectorWrapper;

        /** void ServerWrapper::SetReplayDirector(ReplayDirectorWrapper newReplayDirector) [member function] */
        public SetReplayDirector(newReplayDirector: ReplayDirectorWrapper): void;

        /** ArrayWrapper<BallWrapper> ServerWrapper::GetGameBalls() [member function] */
        public GetGameBalls(): ArrayWrapper_BallWrapper;

        /** int ServerWrapper::GetTotalGameBalls() [member function] */
        public GetTotalGameBalls(): number;

        /** void ServerWrapper::SetTotalGameBalls(int newTotalGameBalls) [member function] */
        public SetTotalGameBalls(newTotalGameBalls: number): void;

        /** float ServerWrapper::GetPostGoalTime() [member function] */
        public GetPostGoalTime(): number;

        /** void ServerWrapper::SetPostGoalTime(float newPostGoalTime) [member function] */
        public SetPostGoalTime(newPostGoalTime: number): void;

        /** ArrayWrapper<GoalWrapper> ServerWrapper::GetGoals() [member function] */
        public GetGoals(): ArrayWrapper_GoalWrapper;

        /** int ServerWrapper::GetSecondsRemainingCountdown() [member function] */
        public GetSecondsRemainingCountdown(): number;

        /** void ServerWrapper::SetSecondsRemainingCountdown(int newSecondsRemainingCountdown) [member function] */
        public SetSecondsRemainingCountdown(newSecondsRemainingCountdown: number): void;

        /** Vector ServerWrapper::GetFieldCenter() [member function] */
        public GetFieldCenter(): Vector;

        /** void ServerWrapper::SetFieldCenter(Vector newFieldCenter) [member function] */
        public SetFieldCenter(newFieldCenter: Vector): void;

        /** TeamWrapper ServerWrapper::GetGameWinner() [member function] */
        public GetGameWinner(): TeamWrapper;

        /** void ServerWrapper::SetGameWinner(TeamWrapper newGameWinner) [member function] */
        public SetGameWinner(newGameWinner: TeamWrapper): void;

        /** TeamWrapper ServerWrapper::GetMatchWinner() [member function] */
        public GetMatchWinner(): TeamWrapper;

        /** void ServerWrapper::SetMatchWinner(TeamWrapper newMatchWinner) [member function] */
        public SetMatchWinner(newMatchWinner: TeamWrapper): void;

        /** PriWrapper ServerWrapper::GetMVP() [member function] */
        public GetMVP(): PriWrapper;

        /** void ServerWrapper::SetMVP(PriWrapper newMVP) [member function] */
        public SetMVP(newMVP: PriWrapper): void;

        /** PriWrapper ServerWrapper::GetFastestGoalPlayer() [member function] */
        public GetFastestGoalPlayer(): PriWrapper;

        /** void ServerWrapper::SetFastestGoalPlayer(PriWrapper newFastestGoalPlayer) [member function] */
        public SetFastestGoalPlayer(newFastestGoalPlayer: PriWrapper): void;

        /** PriWrapper ServerWrapper::GetSlowestGoalPlayer() [member function] */
        public GetSlowestGoalPlayer(): PriWrapper;

        /** void ServerWrapper::SetSlowestGoalPlayer(PriWrapper newSlowestGoalPlayer) [member function] */
        public SetSlowestGoalPlayer(newSlowestGoalPlayer: PriWrapper): void;

        /** PriWrapper ServerWrapper::GetFurthestGoalPlayer() [member function] */
        public GetFurthestGoalPlayer(): PriWrapper;

        /** void ServerWrapper::SetFurthestGoalPlayer(PriWrapper newFurthestGoalPlayer) [member function] */
        public SetFurthestGoalPlayer(newFurthestGoalPlayer: PriWrapper): void;

        /** float ServerWrapper::GetFastestGoalSpeed() [member function] */
        public GetFastestGoalSpeed(): number;

        /** void ServerWrapper::SetFastestGoalSpeed(float newFastestGoalSpeed) [member function] */
        public SetFastestGoalSpeed(newFastestGoalSpeed: number): void;

        /** float ServerWrapper::GetSlowestGoalSpeed() [member function] */
        public GetSlowestGoalSpeed(): number;

        /** void ServerWrapper::SetSlowestGoalSpeed(float newSlowestGoalSpeed) [member function] */
        public SetSlowestGoalSpeed(newSlowestGoalSpeed: number): void;

        /** float ServerWrapper::GetFurthestGoal() [member function] */
        public GetFurthestGoal(): number;

        /** void ServerWrapper::SetFurthestGoal(float newFurthestGoal) [member function] */
        public SetFurthestGoal(newFurthestGoal: number): void;

        /** unsigned char ServerWrapper::GetReplicatedScoredOnTeam() [member function] */
        public GetReplicatedScoredOnTeam(): number;

        /** void ServerWrapper::SetReplicatedScoredOnTeam(unsigned char newReplicatedScoredOnTeam) [member function] */
        public SetReplicatedScoredOnTeam(newReplicatedScoredOnTeam: number): void;

        /** unsigned char ServerWrapper::GetReplicatedServerPerformanceState() [member function] */
        public GetReplicatedServerPerformanceState(): number;

        /** void ServerWrapper::SetReplicatedServerPerformanceState(unsigned char newReplicatedServerPerformanceState) [member function] */
        public SetReplicatedServerPerformanceState(newReplicatedServerPerformanceState: number): void;

        /** int ServerWrapper::GetRoundNum() [member function] */
        public GetRoundNum(): number;

        /** void ServerWrapper::SetRoundNum(int newRoundNum) [member function] */
        public SetRoundNum(newRoundNum: number): void;

        /** float ServerWrapper::GetAssistMaxTime() [member function] */
        public GetAssistMaxTime(): number;

        /** void ServerWrapper::SetAssistMaxTime(float newAssistMaxTime) [member function] */
        public SetAssistMaxTime(newAssistMaxTime: number): void;

        /** float ServerWrapper::GetBallHasBeenHitStartDelay() [member function] */
        public GetBallHasBeenHitStartDelay(): number;

        /** void ServerWrapper::SetBallHasBeenHitStartDelay(float newBallHasBeenHitStartDelay) [member function] */
        public SetBallHasBeenHitStartDelay(newBallHasBeenHitStartDelay: number): void;

        /** float ServerWrapper::GetPodiumDelay() [member function] */
        public GetPodiumDelay(): number;

        /** void ServerWrapper::SetPodiumDelay(float newPodiumDelay) [member function] */
        public SetPodiumDelay(newPodiumDelay: number): void;

        /** float ServerWrapper::GetPodiumTime() [member function] */
        public GetPodiumTime(): number;

        /** void ServerWrapper::SetPodiumTime(float newPodiumTime) [member function] */
        public SetPodiumTime(newPodiumTime: number): void;

        /** int ServerWrapper::GetLobbyEndCountdown() [member function] */
        public GetLobbyEndCountdown(): number;

        /** void ServerWrapper::SetLobbyEndCountdown(int newLobbyEndCountdown) [member function] */
        public SetLobbyEndCountdown(newLobbyEndCountdown: number): void;

        /** int ServerWrapper::GetLobbyCountdown() [member function] */
        public GetLobbyCountdown(): number;

        /** void ServerWrapper::SetLobbyCountdown(int newLobbyCountdown) [member function] */
        public SetLobbyCountdown(newLobbyCountdown: number): void;

        /** float ServerWrapper::GetLobbyTime() [member function] */
        public GetLobbyTime(): number;

        /** void ServerWrapper::SetLobbyTime(float newLobbyTime) [member function] */
        public SetLobbyTime(newLobbyTime: number): void;

        /** int ServerWrapper::GetLobbySpawnRestartTime() [member function] */
        public GetLobbySpawnRestartTime(): number;

        /** void ServerWrapper::SetLobbySpawnRestartTime(int newLobbySpawnRestartTime) [member function] */
        public SetLobbySpawnRestartTime(newLobbySpawnRestartTime: number): void;

        /** PlayerControllerWrapper ServerWrapper::GetPauser() [member function] */
        public GetPauser(): PlayerControllerWrapper;

        /** void ServerWrapper::SetPauser(PlayerControllerWrapper newPauser) [member function] */
        public SetPauser(newPauser: PlayerControllerWrapper): void;

        /** int ServerWrapper::GetPlayerCarCount() [member function] */
        public GetPlayerCarCount(): number;

        /** void ServerWrapper::ReplicateSkillTiers() [member function] */
        public ReplicateSkillTiers(): void;

        /** void ServerWrapper::RemoveTeamSelection() [member function] */
        public RemoveTeamSelection(): void;

        /** void ServerWrapper::CheckStart() [member function] */
        public CheckStart(): void;

        /** void ServerWrapper::StartLobbyTimer() [member function] */
        public StartLobbyTimer(): void;

        /** void ServerWrapper::HandleCountdownTick() [member function] */
        public HandleCountdownTick(): void;

        /** void ServerWrapper::CheckForCountdownAction() [member function] */
        public CheckForCountdownAction(): void;

        /** void ServerWrapper::LobbyCountdownTick() [member function] */
        public LobbyCountdownTick(): void;

        /** bool ServerWrapper::CanSpawnBots() [member function] */
        public CanSpawnBots(): boolean;

        /** void ServerWrapper::StartRound() [member function] */
        public StartRound(): void;

        /** void ServerWrapper::EndRound() [member function] */
        public EndRound(): void;

        /** void ServerWrapper::SetBallEventListeners(BallWrapper Ball, long unsigned int bListen) [member function] */
        public SetBallEventListeners(Ball: BallWrapper, bListen: boolean): void;

        /** bool ServerWrapper::CanAwardPoints() [member function] */
        public CanAwardPoints(): boolean;

        /** void ServerWrapper::HandleCarTouch(BallWrapper Ball, CarWrapper HitCar, unsigned char HitType) [member function] */
        public HandleCarTouch(Ball: BallWrapper, HitCar: CarWrapper, HitType: number): void;

        /** void ServerWrapper::SetBallHasBeenHit2() [member function] */
        public SetBallHasBeenHit2(): void;

        /** int ServerWrapper::DetermineScoreTouchIndex(BallWrapper Ball, GoalWrapper Goal) [member function] */
        public DetermineScoreTouchIndex(Ball: BallWrapper, Goal: GoalWrapper): number;

        /** int ServerWrapper::DetermineAssistTouchIndex(BallWrapper Ball, int ScoreIdx) [member function] */
        public DetermineAssistTouchIndex(Ball: BallWrapper, ScoreIdx: number): number;

        /** void ServerWrapper::UpdateTotalGameTimePlayed(float DeltaTime) [member function] */
        public UpdateTotalGameTimePlayed(DeltaTime: number): void;

        /** void ServerWrapper::UpdateGameTime(float DeltaTime) [member function] */
        public UpdateGameTime(DeltaTime: number): void;

        /** bool ServerWrapper::CanUpdateGameTime() [member function] */
        public CanUpdateGameTime(): boolean;

        /** void ServerWrapper::StartReplay() [member function] */
        public StartReplay(): void;

        /** void ServerWrapper::HandleReplayFinished(ReplayDirectorWrapper InReplay) [member function] */
        public HandleReplayFinished(InReplay: ReplayDirectorWrapper): void;

        /** void ServerWrapper::GotoPodiumSpotlight() [member function] */
        public GotoPodiumSpotlight(): void;

        /** void ServerWrapper::UpdateSpotlight() [member function] */
        public UpdateSpotlight(): void;

        /** void ServerWrapper::SpawnPodiumCars() [member function] */
        public SpawnPodiumCars(): void;

        /** bool ServerWrapper::CanEnableCarPodiumMovement() [member function] */
        public CanEnableCarPodiumMovement(): boolean;

        /** void ServerWrapper::FinishEvent() [member function] */
        public FinishEvent(): void;

        /** bool ServerWrapper::__GameEvent_Soccar_TA__UpdateTeamScores(TeamWrapper T) [member function] */
        public __GameEvent_Soccar_TA__UpdateTeamScores(T: TeamWrapper): boolean;

        /** void ServerWrapper::__GameEvent_Soccar_TA__SubmitMatchComplete(PriWrapper PRI) [member function] */
        public __GameEvent_Soccar_TA__SubmitMatchComplete(PRI: PriWrapper): void;

        /** void ServerWrapper::__GameEvent_Soccar_TA__CheckStart(TeamWrapper T) [member function] */
        public __GameEvent_Soccar_TA__CheckStart(T: TeamWrapper): void;

        /** void ServerWrapper::__GameEvent_Soccar_TA__EndState(TeamWrapper T) [member function] */
        public __GameEvent_Soccar_TA__EndState(T: TeamWrapper): void;

        /** void ServerWrapper::__ReplicatedServerPerformanceState__ChangeNotifyFunc() [member function] */
        public __ReplicatedServerPerformanceState__ChangeNotifyFunc(): void;

        /** void ServerWrapper::__bClubMatch__ChangeNotifyFunc() [member function] */
        public __bClubMatch__ChangeNotifyFunc(): void;

        /** void ServerWrapper::__bShowIntroScene__ChangeNotifyFunc() [member function] */
        public __bShowIntroScene__ChangeNotifyFunc(): void;

        /** void ServerWrapper::__WaitTimeRemaining__ChangeNotifyFunc() [member function] */
        public __WaitTimeRemaining__ChangeNotifyFunc(): void;

        /** void ServerWrapper::CheckJoinInProgress(PriWrapper PRI) [member function] */
        public CheckJoinInProgress(PRI: PriWrapper): void;

        /** bool ServerWrapper::AllowDynamicCrowd() [member function] */
        public AllowDynamicCrowd(): boolean;

        /** void ServerWrapper::AddBallTrajectory(BallWrapper InBall) [member function] */
        public AddBallTrajectory(InBall: BallWrapper): void;

        /** bool ServerWrapper::ShowScorerGoalMessage() [member function] */
        public ShowScorerGoalMessage(): boolean;

        /** bool ServerWrapper::CanUseBallCam() [member function] */
        public CanUseBallCam(): boolean;

        /** bool ServerWrapper::DisableStatXP() [member function] */
        public DisableStatXP(): boolean;

        /** void ServerWrapper::SetDisableGoalDelay(long unsigned int bInDisableGoalDelay) [member function] */
        public SetDisableGoalDelay(bInDisableGoalDelay: boolean): void;

        /** void ServerWrapper::ForceMatchStart() [member function] */
        public ForceMatchStart(): void;

        /** void ServerWrapper::RemoveLocalPlayer(PlayerControllerWrapper Player) [member function] */
        public RemoveLocalPlayer(Player: PlayerControllerWrapper): void;

        /** void ServerWrapper::AddLocalPlayer(PlayerControllerWrapper Player) [member function] */
        public AddLocalPlayer(Player: PlayerControllerWrapper): void;

        /** void ServerWrapper::DestroyGoalIndicators(PlayerControllerWrapper Player) [member function] */
        public DestroyGoalIndicators(Player: PlayerControllerWrapper): void;

        /** void ServerWrapper::CreateGoalIndicators(PlayerControllerWrapper Player) [member function] */
        public CreateGoalIndicators(Player: PlayerControllerWrapper): void;

        /** void ServerWrapper::BeginHighlightsReplay() [member function] */
        public BeginHighlightsReplay(): void;

        /** bool ServerWrapper::ShouldCountUp() [member function] */
        public ShouldCountUp(): boolean;

        /** bool ServerWrapper::ShouldAllowVoteToForfeit() [member function] */
        public ShouldAllowVoteToForfeit(): boolean;

        /** bool ServerWrapper::ShouldHaveLeaveMatchPenalty() [member function] */
        public ShouldHaveLeaveMatchPenalty(): boolean;

        /** void ServerWrapper::SetPaused(PlayerControllerWrapper InPauser, long unsigned int bInPaused) [member function] */
        public SetPaused(InPauser: PlayerControllerWrapper, bInPaused: boolean): void;

        /** bool ServerWrapper::ShouldCountdownResumeFromPause() [member function] */
        public ShouldCountdownResumeFromPause(): boolean;

        /** void ServerWrapper::SetScoreAndTime(PlayerControllerWrapper PC, int NewScoreTeam0, int NewScoreTeam1, int InGameTimeRemaining, long unsigned int bInOvertime, long unsigned int bRestartRound) [member function] */
        public SetScoreAndTime(PC: PlayerControllerWrapper, NewScoreTeam0: number, NewScoreTeam1: number, InGameTimeRemaining: number, bInOvertime: boolean, bRestartRound: boolean): void;

        /** void ServerWrapper::SaveLocalPlayerStats() [member function] */
        public SaveLocalPlayerStats(): void;

        /** bool ServerWrapper::ShouldPlayReplay() [member function] */
        public ShouldPlayReplay(): boolean;

        /** bool ServerWrapper::ShouldRecordReplay() [member function] */
        public ShouldRecordReplay(): boolean;

        /** void ServerWrapper::OnBallHasBeenHit() [member function] */
        public OnBallHasBeenHit(): void;

        /** BallWrapper ServerWrapper::SpawnBall2(Vector & SpawnLoc, long unsigned int bWake, long unsigned int bSpawnCannon, std::string BallArch) [member function] */
        public SpawnBall2(SpawnLoc: Vector, bWake: boolean, bSpawnCannon: boolean, BallArch: string): BallWrapper;

        /** int ServerWrapper::GetTotalScore() [member function] */
        public GetTotalScore(): number;

        /** void ServerWrapper::HandleCarSet(PriWrapper InPRI) [member function] */
        public HandleCarSet(InPRI: PriWrapper): void;

        /** void ServerWrapper::RemovePlayer(ControllerWrapper Player) [member function] */
        public RemovePlayer(Player: ControllerWrapper): void;

        /** void ServerWrapper::RemovePRI(PriWrapper PRI) [member function] */
        public RemovePRI(PRI: PriWrapper): void;

        /** void ServerWrapper::AddPRI(PriWrapper PRI) [member function] */
        public AddPRI(PRI: PriWrapper): void;

        /** void ServerWrapper::OnMatchWinnerSet() [member function] */
        public OnMatchWinnerSet(): void;

        /** void ServerWrapper::OnGameWinnerSet() [member function] */
        public OnGameWinnerSet(): void;

        /** int ServerWrapper::MVPSort(PriWrapper A, PriWrapper B) [member function] */
        public MVPSort(A: PriWrapper, B: PriWrapper): number;

        /** void ServerWrapper::HandleHitGoal(BallWrapper Ball, GoalWrapper Goal) [member function] */
        public HandleHitGoal(Ball: BallWrapper, Goal: GoalWrapper): void;

        /** void ServerWrapper::ClearReplicatedScoredOnTeam() [member function] */
        public ClearReplicatedScoredOnTeam(): void;

        /** void ServerWrapper::TriggerScoreChangedEvent() [member function] */
        public TriggerScoreChangedEvent(): void;

        /** void ServerWrapper::HandleScoreUpdated(TeamWrapper Team) [member function] */
        public HandleScoreUpdated(Team: TeamWrapper): void;

        /** void ServerWrapper::OnAllTeamsCreated() [member function] */
        public OnAllTeamsCreated(): void;

        /** void ServerWrapper::TriggerGoalScoreEvent(int TeamScoredOn, CarWrapper Scorer) [member function] */
        public TriggerGoalScoreEvent(TeamScoredOn: number, Scorer: CarWrapper): void;

        /** void ServerWrapper::SetTotalGameBalls2(int TotalBalls) [member function] */
        public SetTotalGameBalls2(TotalBalls: number): void;

        /** void ServerWrapper::RecordRecentPlayers() [member function] */
        public RecordRecentPlayers(): void;

        /** void ServerWrapper::UpdateStats() [member function] */
        public UpdateStats(): void;

        /** void ServerWrapper::NotifyKismetOfCurrentTime() [member function] */
        public NotifyKismetOfCurrentTime(): void;

        /** bool ServerWrapper::EnoughTimePassedToForfeit() [member function] */
        public EnoughTimePassedToForfeit(): boolean;

        /** void ServerWrapper::OnGameTimeUpdated() [member function] */
        public OnGameTimeUpdated(): void;

        /** void ServerWrapper::OnOvertimeUpdated() [member function] */
        public OnOvertimeUpdated(): void;

        /** void ServerWrapper::ForceOvertime() [member function] */
        public ForceOvertime(): void;

        /** void ServerWrapper::StartOvertime() [member function] */
        public StartOvertime(): void;

        /** bool ServerWrapper::OnMyHalf(Vector & TestLocation, unsigned char TeamNum) [member function] */
        public OnMyHalf(TestLocation: Vector, TeamNum: number): boolean;

        /** TeamWrapper ServerWrapper::GetWinningTeam() [member function] */
        public GetWinningTeam(): TeamWrapper;

        /** void ServerWrapper::ResetPickups() [member function] */
        public ResetPickups(): void;

        /** void ServerWrapper::ResetPlayers() [member function] */
        public ResetPlayers(): void;

        /** void ServerWrapper::OnBallSpawned(BallWrapper NewBall) [member function] */
        public OnBallSpawned(NewBall: BallWrapper): void;

        /** void ServerWrapper::ResetBalls() [member function] */
        public ResetBalls(): void;

        /** void ServerWrapper::DestroyCars() [member function] */
        public DestroyCars(): void;

        /** void ServerWrapper::FreezePawns() [member function] */
        public FreezePawns(): void;

        /** void ServerWrapper::DestroyBalls() [member function] */
        public DestroyBalls(): void;

        /** void ServerWrapper::RemoveGameBall(BallWrapper Ball) [member function] */
        public RemoveGameBall(Ball: BallWrapper): void;

        /** void ServerWrapper::AddGameBall(BallWrapper Ball) [member function] */
        public AddGameBall(Ball: BallWrapper): void;

        /** void ServerWrapper::StartNewRound() [member function] */
        public StartNewRound(): void;

        /** void ServerWrapper::CheckForAutoBalance() [member function] */
        public CheckForAutoBalance(): void;

        /** bool ServerWrapper::HasWinner() [member function] */
        public HasWinner(): boolean;

        /** void ServerWrapper::SubmitMatch2() [member function] */
        public SubmitMatch2(): void;

        /** void ServerWrapper::SubmitMatchComplete2() [member function] */
        public SubmitMatchComplete2(): void;

        /** void ServerWrapper::OnMatchEnded() [member function] */
        public OnMatchEnded(): void;

        /** bool ServerWrapper::ShouldDoPodiumSpotlight() [member function] */
        public ShouldDoPodiumSpotlight(): boolean;

        /** void ServerWrapper::EndGame() [member function] */
        public EndGame(): void;

        /** void ServerWrapper::UpdateTeamScores2() [member function] */
        public UpdateTeamScores2(): void;

        /** void ServerWrapper::StartNewGame() [member function] */
        public StartNewGame(): void;

        /** void ServerWrapper::ResetGame() [member function] */
        public ResetGame(): void;

        /** void ServerWrapper::ClearReplicatedStatEvent() [member function] */
        public ClearReplicatedStatEvent(): void;

        /** void ServerWrapper::eventDestroyed() [member function] */
        public eventDestroyed(): void;

        /** void ServerWrapper::InitBotDetection() [member function] */
        public InitBotDetection(): void;

        /** void ServerWrapper::InitCrowdManager() [member function] */
        public InitCrowdManager(): void;

        /** void ServerWrapper::InitField() [member function] */
        public InitField(): void;

        /** void ServerWrapper::InitGameObserver() [member function] */
        public InitGameObserver(): void;

        /** void ServerWrapper::OnInit() [member function] */
        public OnInit(): void;

        /** void ServerWrapper::InitMutators() [member function] */
        public InitMutators(): void;

        /** void ServerWrapper::OnClubMatch() [member function] */
        public OnClubMatch(): void;

        /** bool ServerWrapper::CanInitClubMatch() [member function] */
        public CanInitClubMatch(): boolean;

        /** void ServerWrapper::AssignCustomTeamSettings() [member function] */
        public AssignCustomTeamSettings(): void;

        /** void ServerWrapper::InitGame2(std::string Options) [member function] */
        public InitGame2(Options: string): void;

        /** std::string ServerWrapper::GetMatchGUID() [member function] */
        public GetMatchGUID(): string;

        /** void ServerWrapper::SetMatchGUID(std::string s) [member function] */
        public SetMatchGUID(s: string): void;

        /** void ServerWrapper::EventGameWinnerSet(ServerWrapper GameEvent) [member function] */
        public EventGameWinnerSet(GameEvent: ServerWrapper): void;

        /** void ServerWrapper::EventGoalScored(ServerWrapper GameEvent, BallWrapper Ball, GoalWrapper Goal, int ScoreIndex, int AssistIdx) [member function] */
        public EventGoalScored(GameEvent: ServerWrapper, Ball: BallWrapper, Goal: GoalWrapper, ScoreIndex: number, AssistIdx: number): void;

    }

    /** CameraWrapper [class] */
    class CameraWrapper extends CameraXWrapper {
        // Public:
        /** CameraWrapper::CameraWrapper(uintptr_t mem) [constructor] */
        public constructor(mem: bigint);

        /** Vector CameraWrapper::GetLocation() [member function] */
        public GetLocation(): Vector;

        /** void CameraWrapper::SetLocation(Vector location) [member function] */
        public SetLocation(location: Vector): void;

        /** Rotator CameraWrapper::GetRotation() [member function] */
        public GetRotation(): Rotator;

        /** void CameraWrapper::SetRotation(Rotator rotation) [member function] */
        public SetRotation(rotation: Rotator): void;

        /** ProfileCameraSettings CameraWrapper::GetCameraSettings() [member function] */
        public GetCameraSettings(): ProfileCameraSettings;

        /** void CameraWrapper::SetCameraSettings(ProfileCameraSettings settings) [member function] */
        public SetCameraSettings(settings: ProfileCameraSettings): void;

        /** bool CameraWrapper::IsCameraShakeOn() [member function] */
        public IsCameraShakeOn(): boolean;

        /** POV CameraWrapper::GetPOV() [member function] */
        public GetPOV(): POV;

        /** void CameraWrapper::SetPOV(POV pov) [member function] */
        public SetPOV(pov: POV): void;

        /** void CameraWrapper::SetFOV(float fov) [member function] */
        public SetFOV(fov: number): void;

        /** float CameraWrapper::GetFOV() [member function] */
        public GetFOV(): number;

        /**
         * void CameraWrapper::SetLockedFOV(bool lock) [member function]
         * @Note renamed because it is not assignable to the same property in parent.
         */
        public SetLockedFOV2(lock: boolean): void;

        /** ActorWrapper CameraWrapper::GetCameraAsActor() [member function] */
        public GetCameraAsActor(): ActorWrapper;

        /** std::string CameraWrapper::GetCameraState() [member function] */
        public GetCameraState(): string;

        /** void CameraWrapper::SetCameraState(std::string stateName) [member function] */
        public SetCameraState(stateName: string): void;

        /** Vector CameraWrapper::linterp(Vector start, Vector end, float elapsed, float speed) [member function] */
        public linterp(start: Vector, end: Vector, elapsed: number, speed: number): Vector;

        /** std::string CameraWrapper::GetFocusActor() [member function] */
        public GetFocusActor(): string;

        /** bool CameraWrapper::SetFocusActor(std::string actorName) [member function] */
        public SetFocusActor(actorName: string): boolean;

        /** bool CameraWrapper::SetFlyCamBallTargetMode() [member function] */
        public SetFlyCamBallTargetMode(): boolean;

        /** float CameraWrapper::GetSwivelFastSpeed() [member function] */
        public GetSwivelFastSpeed(): number;

        /** void CameraWrapper::SetSwivelFastSpeed(float newSwivelFastSpeed) [member function] */
        public SetSwivelFastSpeed(newSwivelFastSpeed: number): void;

        /** float CameraWrapper::GetSwivelDieRate() [member function] */
        public GetSwivelDieRate(): number;

        /** void CameraWrapper::SetSwivelDieRate(float newSwivelDieRate) [member function] */
        public SetSwivelDieRate(newSwivelDieRate: number): void;

        /** StructArrayWrapper<ProfileCameraSettings> CameraWrapper::GetCameraPresetSettings() [member function] */
        public GetCameraPresetSettings(): StructArrayWrapper_ProfileCameraSettings;

        /** float CameraWrapper::GetHorizontalSplitscreenHeightOffset() [member function] */
        public GetHorizontalSplitscreenHeightOffset(): number;

        /** void CameraWrapper::SetHorizontalSplitscreenHeightOffset(float newHorizontalSplitscreenHeightOffset) [member function] */
        public SetHorizontalSplitscreenHeightOffset(newHorizontalSplitscreenHeightOffset: number): void;

        /** float CameraWrapper::GetHorizontalSplitscreenFOVOffset() [member function] */
        public GetHorizontalSplitscreenFOVOffset(): number;

        /** void CameraWrapper::SetHorizontalSplitscreenFOVOffset(float newHorizontalSplitscreenFOVOffset) [member function] */
        public SetHorizontalSplitscreenFOVOffset(newHorizontalSplitscreenFOVOffset: number): void;

        /** float CameraWrapper::GetVerticalSplitscreenFOVOffset() [member function] */
        public GetVerticalSplitscreenFOVOffset(): number;

        /** void CameraWrapper::SetVerticalSplitscreenFOVOffset(float newVerticalSplitscreenFOVOffset) [member function] */
        public SetVerticalSplitscreenFOVOffset(newVerticalSplitscreenFOVOffset: number): void;

        /** float CameraWrapper::GetClipRate() [member function] */
        public GetClipRate(): number;

        /** void CameraWrapper::SetClipRate(float newClipRate) [member function] */
        public SetClipRate(newClipRate: number): void;

        /** Rotator CameraWrapper::GetCurrentSwivel() [member function] */
        public GetCurrentSwivel(): Rotator;

        /** void CameraWrapper::SetCurrentSwivel(Rotator newCurrentSwivel) [member function] */
        public SetCurrentSwivel(newCurrentSwivel: Rotator): void;

        /** RBActorWrapper CameraWrapper::GetDemolisher() [member function] */
        public GetDemolisher(): RBActorWrapper;

        /** void CameraWrapper::SetDemolisher(RBActorWrapper newDemolisher) [member function] */
        public SetDemolisher(newDemolisher: RBActorWrapper): void;

        /** long unsigned int CameraWrapper::GetbDemolished() [member function] */
        public GetbDemolished(): boolean;

        /** void CameraWrapper::SetbDemolished(long unsigned int newbDemolished) [member function] */
        public SetbDemolished(newbDemolished: boolean): void;

        /** float CameraWrapper::ClipToField(float CameraLocationZ) [member function] */
        public ClipToField(CameraLocationZ: number): number;

        /** void CameraWrapper::Demolished2(RBActorWrapper InDemolisher) [member function] */
        public Demolished2(InDemolisher: RBActorWrapper): void;

        /** Rotator CameraWrapper::GetDesiredSwivel(float LookUp, float LookRight) [member function] */
        public GetDesiredSwivel(LookUp: number, LookRight: number): Rotator;

        /** void CameraWrapper::UpdateSwivel(float DeltaTime) [member function] */
        public UpdateSwivel(DeltaTime: number): void;

        /** float CameraWrapper::GetDefaultFOVOffset() [member function] */
        public GetDefaultFOVOffset(): number;

        /** float CameraWrapper::GetDefaultViewHeightOffset() [member function] */
        public GetDefaultViewHeightOffset(): number;

        /** void CameraWrapper::UpdateFOV() [member function] */
        public UpdateFOV(): void;

        /** void CameraWrapper::EventCameraTargetChanged(CameraWrapper Camera, ActorWrapper Target) [member function] */
        public EventCameraTargetChanged(Camera: CameraWrapper, Target: ActorWrapper): void;

    }

    /** ReplayServerWrapper [class] */
    class ReplayServerWrapper extends ServerWrapper {
        // Public:
        /** ReplayServerWrapper::ReplayServerWrapper(uintptr_t server, uintptr_t gameinfo, uintptr_t replaydirector) [constructor] */
        public constructor(server: bigint, gameinfo: bigint, replaydirector: bigint);

        /** ActorWrapper ReplayServerWrapper::GetViewTarget() [member function] */
        public GetViewTarget(): ActorWrapper;

        /** ReplayWrapper ReplayServerWrapper::GetReplay() [member function] */
        public GetReplay(): ReplayWrapper;

        /** float ReplayServerWrapper::GetReplayTimeElapsed() [member function] */
        public GetReplayTimeElapsed(): number;

        /** int ReplayServerWrapper::GetReplayFPS() [member function] */
        public GetReplayFPS(): number;

        /** int ReplayServerWrapper::GetCurrentReplayFrame() [member function] */
        public GetCurrentReplayFrame(): number;

        /** void ReplayServerWrapper::AddKeyFrame(int frame, std::string name) [member function] */
        public AddKeyFrame(frame: number, name: string): void;

        /** void ReplayServerWrapper::RemoveKeyFrame(int frame) [member function] */
        public RemoveKeyFrame(frame: number): void;

        /** void ReplayServerWrapper::SkipToFrame(int frame) [member function] */
        public SkipToFrame(frame: number): void;

        /** void ReplayServerWrapper::SkipToTime(float time) [member function] */
        public SkipToTime(time: number): void;

        /** void ReplayServerWrapper::StartPlaybackAtFrame(int frame) [member function] */
        public StartPlaybackAtFrame(frame: number): void;

        /** void ReplayServerWrapper::StartPlaybackAtTime(float time) [member function] */
        public StartPlaybackAtTime(time: number): void;

    }

    /** CarWrapper [class] */
    class CarWrapper extends VehicleWrapper {
        // Public:
        /** CarWrapper::CarWrapper(uintptr_t mem) [constructor] */
        public constructor(mem: bigint);

        /** bool CarWrapper::IsBoostCheap() [member function] */
        public IsBoostCheap(): boolean;

        /** void CarWrapper::SetBoostCheap(bool b) [member function] */
        public SetBoostCheap(b: boolean): void;

        /** void CarWrapper::SetCarRotation(Rotator rotation) [member function] */
        public SetCarRotation(rotation: Rotator): void;

        /** void CarWrapper::ForceBoost(bool force) [member function] */
        public ForceBoost(force: boolean): void;

        /** std::string CarWrapper::GetOwnerName() [member function] */
        public GetOwnerName(): string;

        /** void CarWrapper::Unfreeze() [member function] */
        public Unfreeze(): void;

        /** ControllerInput CarWrapper::GetInput() [member function] */
        public GetInput(): ControllerInput;

        /** void CarWrapper::SetInput(ControllerInput input) [member function] */
        public SetInput(input: ControllerInput): void;

        /** void CarWrapper::Destroy() [member function] */
        public Destroy(): void;

        /** void CarWrapper::Demolish() [member function] */
        public Demolish(): void;

        /** long unsigned int CarWrapper::HasFlip() [member function] */
        public HasFlip(): boolean;

        /** int CarWrapper::GetLoadoutBody() [member function] */
        public GetLoadoutBody(): number;

        /** ArrayWrapper<CarComponentWrapper> CarWrapper::GetDefaultCarComponents() [member function] */
        public GetDefaultCarComponents(): ArrayWrapper_CarComponentWrapper;

        /** FlipCarComponentWrapper CarWrapper::GetFlipComponent() [member function] */
        public GetFlipComponent(): FlipCarComponentWrapper;

        /** unsigned char CarWrapper::GetDemolishTarget() [member function] */
        public GetDemolishTarget(): number;

        /** void CarWrapper::SetDemolishTarget(unsigned char newDemolishTarget) [member function] */
        public SetDemolishTarget(newDemolishTarget: number): void;

        /** unsigned char CarWrapper::GetDemolishSpeed() [member function] */
        public GetDemolishSpeed(): number;

        /** void CarWrapper::SetDemolishSpeed(unsigned char newDemolishSpeed) [member function] */
        public SetDemolishSpeed(newDemolishSpeed: number): void;

        /** long unsigned int CarWrapper::GetbLoadoutSet() [member function] */
        public GetbLoadoutSet(): boolean;

        /** void CarWrapper::SetbLoadoutSet(long unsigned int newbLoadoutSet) [member function] */
        public SetbLoadoutSet(newbLoadoutSet: boolean): void;

        /** long unsigned int CarWrapper::GetbDemolishOnOpposingGround() [member function] */
        public GetbDemolishOnOpposingGround(): boolean;

        /** void CarWrapper::SetbDemolishOnOpposingGround(long unsigned int newbDemolishOnOpposingGround) [member function] */
        public SetbDemolishOnOpposingGround(newbDemolishOnOpposingGround: boolean): void;

        /** long unsigned int CarWrapper::GetbWasOnOpposingGround() [member function] */
        public GetbWasOnOpposingGround(): boolean;

        /** void CarWrapper::SetbWasOnOpposingGround(long unsigned int newbWasOnOpposingGround) [member function] */
        public SetbWasOnOpposingGround(newbWasOnOpposingGround: boolean): void;

        /** long unsigned int CarWrapper::GetbDemolishOnGoalZone() [member function] */
        public GetbDemolishOnGoalZone(): boolean;

        /** void CarWrapper::SetbDemolishOnGoalZone(long unsigned int newbDemolishOnGoalZone) [member function] */
        public SetbDemolishOnGoalZone(newbDemolishOnGoalZone: boolean): void;

        /** long unsigned int CarWrapper::GetbWasInGoalZone() [member function] */
        public GetbWasInGoalZone(): boolean;

        /** void CarWrapper::SetbWasInGoalZone(long unsigned int newbWasInGoalZone) [member function] */
        public SetbWasInGoalZone(newbWasInGoalZone: boolean): void;

        /** long unsigned int CarWrapper::GetbOverrideHandbrakeOn() [member function] */
        public GetbOverrideHandbrakeOn(): boolean;

        /** void CarWrapper::SetbOverrideHandbrakeOn(long unsigned int newbOverrideHandbrakeOn) [member function] */
        public SetbOverrideHandbrakeOn(newbOverrideHandbrakeOn: boolean): void;

        /** long unsigned int CarWrapper::GetbCollidesWithVehicles() [member function] */
        public GetbCollidesWithVehicles(): boolean;

        /** void CarWrapper::SetbCollidesWithVehicles(long unsigned int newbCollidesWithVehicles) [member function] */
        public SetbCollidesWithVehicles(newbCollidesWithVehicles: boolean): void;

        /** long unsigned int CarWrapper::GetbOverrideBoostOn() [member function] */
        public GetbOverrideBoostOn(): boolean;

        /** void CarWrapper::SetbOverrideBoostOn(long unsigned int newbOverrideBoostOn) [member function] */
        public SetbOverrideBoostOn(newbOverrideBoostOn: boolean): void;

        /** FXActorWrapper CarWrapper::GetExitFXArchetype() [member function] */
        public GetExitFXArchetype(): FXActorWrapper;

        /** void CarWrapper::SetExitFXArchetype(FXActorWrapper newExitFXArchetype) [member function] */
        public SetExitFXArchetype(newExitFXArchetype: FXActorWrapper): void;

        /** float CarWrapper::GetMaxTimeForDodge() [member function] */
        public GetMaxTimeForDodge(): number;

        /** void CarWrapper::SetMaxTimeForDodge(float newMaxTimeForDodge) [member function] */
        public SetMaxTimeForDodge(newMaxTimeForDodge: number): void;

        /** float CarWrapper::GetLastWheelsHitBallTime() [member function] */
        public GetLastWheelsHitBallTime(): number;

        /** void CarWrapper::SetLastWheelsHitBallTime(float newLastWheelsHitBallTime) [member function] */
        public SetLastWheelsHitBallTime(newLastWheelsHitBallTime: number): void;

        /** float CarWrapper::GetReplicatedCarScale() [member function] */
        public GetReplicatedCarScale(): number;

        /** void CarWrapper::SetReplicatedCarScale(float newReplicatedCarScale) [member function] */
        public SetReplicatedCarScale(newReplicatedCarScale: number): void;

        /** FXActorWrapper CarWrapper::GetBodyFXActor() [member function] */
        public GetBodyFXActor(): FXActorWrapper;

        /** void CarWrapper::SetBodyFXActor(FXActorWrapper newBodyFXActor) [member function] */
        public SetBodyFXActor(newBodyFXActor: FXActorWrapper): void;

        /** PriWrapper CarWrapper::GetAttackerPRI() [member function] */
        public GetAttackerPRI(): PriWrapper;

        /** void CarWrapper::SetAttackerPRI(PriWrapper newAttackerPRI) [member function] */
        public SetAttackerPRI(newAttackerPRI: PriWrapper): void;

        /** Vector CarWrapper::GetMouseAccel() [member function] */
        public GetMouseAccel(): Vector;

        /** void CarWrapper::SetMouseAccel(Vector newMouseAccel) [member function] */
        public SetMouseAccel(newMouseAccel: Vector): void;

        /** Vector CarWrapper::GetMouseAirAccel() [member function] */
        public GetMouseAirAccel(): Vector;

        /** void CarWrapper::SetMouseAirAccel(Vector newMouseAirAccel) [member function] */
        public SetMouseAirAccel(newMouseAirAccel: Vector): void;

        /** RumblePickupComponentWrapper CarWrapper::GetAttachedPickup() [member function] */
        public GetAttachedPickup(): RumblePickupComponentWrapper;

        /** void CarWrapper::SetAttachedPickup(RumblePickupComponentWrapper newAttachedPickup) [member function] */
        public SetAttachedPickup(newAttachedPickup: RumblePickupComponentWrapper): void;

        /** Vector CarWrapper::GetReplayFocusOffset() [member function] */
        public GetReplayFocusOffset(): Vector;

        /** void CarWrapper::SetReplayFocusOffset(Vector newReplayFocusOffset) [member function] */
        public SetReplayFocusOffset(newReplayFocusOffset: Vector): void;

        /** float CarWrapper::GetAddedBallForceMultiplier() [member function] */
        public GetAddedBallForceMultiplier(): number;

        /** void CarWrapper::SetAddedBallForceMultiplier(float newAddedBallForceMultiplier) [member function] */
        public SetAddedBallForceMultiplier(newAddedBallForceMultiplier: number): void;

        /** float CarWrapper::GetAddedCarForceMultiplier() [member function] */
        public GetAddedCarForceMultiplier(): number;

        /** void CarWrapper::SetAddedCarForceMultiplier(float newAddedCarForceMultiplier) [member function] */
        public SetAddedCarForceMultiplier(newAddedCarForceMultiplier: number): void;

        /** GameEventWrapper CarWrapper::GetGameEvent() [member function] */
        public GetGameEvent(): GameEventWrapper;

        /** void CarWrapper::SetGameEvent(GameEventWrapper newGameEvent) [member function] */
        public SetGameEvent(newGameEvent: GameEventWrapper): void;

        /** float CarWrapper::GetMaxDriveBackwardsSpeed() [member function] */
        public GetMaxDriveBackwardsSpeed(): number;

        /** float CarWrapper::GetMaxDriveForwardSpeed() [member function] */
        public GetMaxDriveForwardSpeed(): number;

        /** Vector CarWrapper::GetReplayFocusLocation() [member function] */
        public GetReplayFocusLocation(): Vector;

        /** void CarWrapper::OnPickupChanged(RumblePickupComponentWrapper InPickup) [member function] */
        public OnPickupChanged(InPickup: RumblePickupComponentWrapper): void;

        /** void CarWrapper::SetAttachedPickup2(RumblePickupComponentWrapper InPickup) [member function] */
        public SetAttachedPickup2(InPickup: RumblePickupComponentWrapper): void;

        /** void CarWrapper::EnablePodiumMode() [member function] */
        public EnablePodiumMode(): void;

        /** void CarWrapper::CopyPushFactorCurve() [member function] */
        public CopyPushFactorCurve(): void;

        /** void CarWrapper::ClearAttacker() [member function] */
        public ClearAttacker(): void;

        /** void CarWrapper::NotifyNewAttacker(PriWrapper Attacker) [member function] */
        public NotifyNewAttacker(Attacker: PriWrapper): void;

        /** void CarWrapper::UpdateBallIndicator() [member function] */
        public UpdateBallIndicator(): void;

        /** void CarWrapper::eventOnSuperSonicChanged() [member function] */
        public eventOnSuperSonicChanged(): void;

        /** void CarWrapper::eventOnGroundChanged() [member function] */
        public eventOnGroundChanged(): void;

        /** void CarWrapper::FellOutOfWorld() [member function] */
        public FellOutOfWorld(): void;

        /** void CarWrapper::DemolishDestroyTimer() [member function] */
        public DemolishDestroyTimer(): void;

        /** void CarWrapper::Demolish2(RBActorWrapper Demolisher) [member function] */
        public Demolish2(Demolisher: RBActorWrapper): void;

        /** bool CarWrapper::Teleport(Vector & SpawnLocation, Rotator & SpawnRotation, long unsigned int bStopVelocity, long unsigned int bUpdateRotation, float ExtraForce) [member function] */
        public Teleport(SpawnLocation: Vector, SpawnRotation: Rotator, bStopVelocity: boolean, bUpdateRotation: boolean, ExtraForce: number): boolean;

        /** void CarWrapper::OnJumpReleased() [member function] */
        public OnJumpReleased(): void;

        /** void CarWrapper::OnJumpPressed() [member function] */
        public OnJumpPressed(): void;

        /** void CarWrapper::eventSetVehicleInput(ControllerInput & NewInput) [member function] */
        public eventSetVehicleInput(NewInput: ControllerInput): void;

        /** bool CarWrapper::CanDemolish(CarWrapper HitCar) [member function] */
        public CanDemolish(HitCar: CarWrapper): boolean;

        /** bool CarWrapper::ShouldDemolish(CarWrapper HitCar, Vector & HitLocation, Vector & HitNormal, unsigned char * Result) [member function] */
        public ShouldDemolish(HitCar: CarWrapper, HitLocation: Vector, HitNormal: Vector, Result: string): boolean;

        /** unsigned char CarWrapper::ApplyCarImpactForces(CarWrapper OtherCar, Vector & HitLocation, Vector & HitNormal) [member function] */
        public ApplyCarImpactForces(OtherCar: CarWrapper, HitLocation: Vector, HitNormal: Vector): number;

        /** bool CarWrapper::IsBumperHit(CarWrapper OtherCar) [member function] */
        public IsBumperHit(OtherCar: CarWrapper): boolean;

        /** void CarWrapper::ApplyBallImpactForces(BallWrapper Ball, Vector & HitLocation) [member function] */
        public ApplyBallImpactForces(Ball: BallWrapper, HitLocation: Vector): void;

        /** bool CarWrapper::IsDodging() [member function] */
        public IsDodging(): boolean;

        /** void CarWrapper::OnHitBall(BallWrapper Ball, Vector & HitLocation, Vector & HitNormal) [member function] */
        public OnHitBall(Ball: BallWrapper, HitLocation: Vector, HitNormal: Vector): void;

        /** bool CarWrapper::AnyWheelTouchingGround() [member function] */
        public AnyWheelTouchingGround(): boolean;

        /** CarComponentWrapper CarWrapper::GiveCarComponent(CarComponentWrapper ComponentArchetype, PriWrapper Activator) [member function] */
        public GiveCarComponent(ComponentArchetype: CarComponentWrapper, Activator: PriWrapper): CarComponentWrapper;

        /** void CarWrapper::AddDefaultCarComponents() [member function] */
        public AddDefaultCarComponents(): void;

        /** void CarWrapper::DetachPrimitiveComponent(PrimitiveComponentWrapper Component) [member function] */
        public DetachPrimitiveComponent(Component: PrimitiveComponentWrapper): void;

        /** void CarWrapper::HandleWheelBallHit(WheelWrapper Wheel) [member function] */
        public HandleWheelBallHit(Wheel: WheelWrapper): void;

        /** void CarWrapper::RespawnInPlace() [member function] */
        public RespawnInPlace(): void;

        /** void CarWrapper::SetCarScale(float NewScale) [member function] */
        public SetCarScale(NewScale: number): void;

        /** void CarWrapper::OnClubColorsChanged() [member function] */
        public OnClubColorsChanged(): void;

        /** void CarWrapper::HandleTeamChanged(PriXWrapper MyPRI) [member function] */
        public HandleTeamChanged(MyPRI: PriXWrapper): void;

        /** bool CarWrapper::UpdateTeamLoadout() [member function] */
        public UpdateTeamLoadout(): boolean;

        /** void CarWrapper::InitTeamPaint() [member function] */
        public InitTeamPaint(): void;

        /** int CarWrapper::GetLoadoutTeamIndex() [member function] */
        public GetLoadoutTeamIndex(): number;

        /** int CarWrapper::GetPreviewTeamIndex() [member function] */
        public GetPreviewTeamIndex(): number;

        /** bool CarWrapper::HasTeam() [member function] */
        public HasTeam(): boolean;

        /** void CarWrapper::HandleLoadoutSelected(PriWrapper MyPRI) [member function] */
        public HandleLoadoutSelected(MyPRI: PriWrapper): void;

        /** void CarWrapper::HandleGameEventChanged(PriWrapper MyPRI) [member function] */
        public HandleGameEventChanged(MyPRI: PriWrapper): void;

        /** void CarWrapper::OnPRIChanged() [member function] */
        public OnPRIChanged(): void;

        /** void CarWrapper::OnControllerChanged() [member function] */
        public OnControllerChanged(): void;

    }

    /** EngineTAWrapper [class] */
    class EngineTAWrapper extends ObjectWrapper {
        // Public:
        /** EngineTAWrapper::EngineTAWrapper(uintptr_t mem) [constructor] */
        public constructor(mem: bigint);

        /** bool EngineTAWrapper::IsNull() const [member function] */
        public IsNull(): boolean;

        /** long unsigned int EngineTAWrapper::GetbEnableClientPrediction() [member function] */
        public GetbEnableClientPrediction(): boolean;

        /** void EngineTAWrapper::SetbEnableClientPrediction(long unsigned int newbEnableClientPrediction) [member function] */
        public SetbEnableClientPrediction(newbEnableClientPrediction: boolean): void;

        /** long unsigned int EngineTAWrapper::GetbClientPhysicsUpdate() [member function] */
        public GetbClientPhysicsUpdate(): boolean;

        /** void EngineTAWrapper::SetbClientPhysicsUpdate(long unsigned int newbClientPhysicsUpdate) [member function] */
        public SetbClientPhysicsUpdate(newbClientPhysicsUpdate: boolean): void;

        /** long unsigned int EngineTAWrapper::GetbDisableClientCorrections() [member function] */
        public GetbDisableClientCorrections(): boolean;

        /** void EngineTAWrapper::SetbDisableClientCorrections(long unsigned int newbDisableClientCorrections) [member function] */
        public SetbDisableClientCorrections(newbDisableClientCorrections: boolean): void;

        /** long unsigned int EngineTAWrapper::GetbDebugClientCorrections() [member function] */
        public GetbDebugClientCorrections(): boolean;

        /** void EngineTAWrapper::SetbDebugClientCorrections(long unsigned int newbDebugClientCorrections) [member function] */
        public SetbDebugClientCorrections(newbDebugClientCorrections: boolean): void;

        /** long unsigned int EngineTAWrapper::GetbForceClientCorrection() [member function] */
        public GetbForceClientCorrection(): boolean;

        /** void EngineTAWrapper::SetbForceClientCorrection(long unsigned int newbForceClientCorrection) [member function] */
        public SetbForceClientCorrection(newbForceClientCorrection: boolean): void;

        /** float EngineTAWrapper::GetPhysicsFramerate() [member function] */
        public GetPhysicsFramerate(): number;

        /** void EngineTAWrapper::SetPhysicsFramerate(float newPhysicsFramerate) [member function] */
        public SetPhysicsFramerate(newPhysicsFramerate: number): void;

        /** int EngineTAWrapper::GetMaxPhysicsSubsteps() [member function] */
        public GetMaxPhysicsSubsteps(): number;

        /** void EngineTAWrapper::SetMaxPhysicsSubsteps(int newMaxPhysicsSubsteps) [member function] */
        public SetMaxPhysicsSubsteps(newMaxPhysicsSubsteps: number): void;

        /** int EngineTAWrapper::GetMaxUploadedClientFrames() [member function] */
        public GetMaxUploadedClientFrames(): number;

        /** void EngineTAWrapper::SetMaxUploadedClientFrames(int newMaxUploadedClientFrames) [member function] */
        public SetMaxUploadedClientFrames(newMaxUploadedClientFrames: number): void;

        /** int EngineTAWrapper::GetMaxClientReplayFrames() [member function] */
        public GetMaxClientReplayFrames(): number;

        /** void EngineTAWrapper::SetMaxClientReplayFrames(int newMaxClientReplayFrames) [member function] */
        public SetMaxClientReplayFrames(newMaxClientReplayFrames: number): void;

        /** int EngineTAWrapper::GetPhysicsFrame() [member function] */
        public GetPhysicsFrame(): number;

        /** void EngineTAWrapper::SetPhysicsFrame(int newPhysicsFrame) [member function] */
        public SetPhysicsFrame(newPhysicsFrame: number): void;

        /** float EngineTAWrapper::GetRenderAlpha() [member function] */
        public GetRenderAlpha(): number;

        /** void EngineTAWrapper::SetRenderAlpha(float newRenderAlpha) [member function] */
        public SetRenderAlpha(newRenderAlpha: number): void;

        /** int EngineTAWrapper::GetReplicatedPhysicsFrame() [member function] */
        public GetReplicatedPhysicsFrame(): number;

        /** void EngineTAWrapper::SetReplicatedPhysicsFrame(int newReplicatedPhysicsFrame) [member function] */
        public SetReplicatedPhysicsFrame(newReplicatedPhysicsFrame: number): void;

        /** int EngineTAWrapper::GetDirtyPhysicsFrame() [member function] */
        public GetDirtyPhysicsFrame(): number;

        /** void EngineTAWrapper::SetDirtyPhysicsFrame(int newDirtyPhysicsFrame) [member function] */
        public SetDirtyPhysicsFrame(newDirtyPhysicsFrame: number): void;

        /** int EngineTAWrapper::GetForceCorrectionFrames() [member function] */
        public GetForceCorrectionFrames(): number;

        /** void EngineTAWrapper::SetForceCorrectionFrames(int newForceCorrectionFrames) [member function] */
        public SetForceCorrectionFrames(newForceCorrectionFrames: number): void;

        /** int EngineTAWrapper::GetTickNotifyIndex() [member function] */
        public GetTickNotifyIndex(): number;

        /** void EngineTAWrapper::SetTickNotifyIndex(int newTickNotifyIndex) [member function] */
        public SetTickNotifyIndex(newTickNotifyIndex: number): void;

        /** UnrealStringWrapper EngineTAWrapper::GetShellArchetypePath() [member function] */
        public GetShellArchetypePath(): UnrealStringWrapper;

        /** float EngineTAWrapper::GetLastBugReportTime() [member function] */
        public GetLastBugReportTime(): number;

        /** void EngineTAWrapper::SetLastBugReportTime(float newLastBugReportTime) [member function] */
        public SetLastBugReportTime(newLastBugReportTime: number): void;

        /** float EngineTAWrapper::GetDebugClientCorrectionStartTime() [member function] */
        public GetDebugClientCorrectionStartTime(): number;

        /** void EngineTAWrapper::SetDebugClientCorrectionStartTime(float newDebugClientCorrectionStartTime) [member function] */
        public SetDebugClientCorrectionStartTime(newDebugClientCorrectionStartTime: number): void;

        /** int EngineTAWrapper::GetDebugClientCorrectionCount() [member function] */
        public GetDebugClientCorrectionCount(): number;

        /** void EngineTAWrapper::SetDebugClientCorrectionCount(int newDebugClientCorrectionCount) [member function] */
        public SetDebugClientCorrectionCount(newDebugClientCorrectionCount: number): void;

        /** StatGraphSystemWrapper EngineTAWrapper::GetStatGraphs() [member function] */
        public GetStatGraphs(): StatGraphSystemWrapper;

        /** void EngineTAWrapper::SetStatGraphs(StatGraphSystemWrapper newStatGraphs) [member function] */
        public SetStatGraphs(newStatGraphs: StatGraphSystemWrapper): void;

        /** float EngineTAWrapper::GetLastPhysicsDeltaTimeScale() [member function] */
        public GetLastPhysicsDeltaTimeScale(): number;

        /** void EngineTAWrapper::SetLastPhysicsDeltaTimeScale(float newLastPhysicsDeltaTimeScale) [member function] */
        public SetLastPhysicsDeltaTimeScale(newLastPhysicsDeltaTimeScale: number): void;

        /** void EngineTAWrapper::DebugClientCorrections2() [member function] */
        public DebugClientCorrections2(): void;

        /** float EngineTAWrapper::GetBulletFixedDeltaTime() [member function] */
        public GetBulletFixedDeltaTime(): number;

        /** void EngineTAWrapper::RunPhysicsStep(int BulletSceneIndex, float DeltaTime) [member function] */
        public RunPhysicsStep(BulletSceneIndex: number, DeltaTime: number): void;

        /** void EngineTAWrapper::UpdateReplicatedPhysicsFrame(int ServerFrame) [member function] */
        public UpdateReplicatedPhysicsFrame(ServerFrame: number): void;

        /** void EngineTAWrapper::DebugDedicatedServer(float ForHowLong) [member function] */
        public DebugDedicatedServer(ForHowLong: number): void;

        /** float EngineTAWrapper::GetPhysicsTime() [member function] */
        public GetPhysicsTime(): number;

        /** void EngineTAWrapper::eventRecordAppStart() [member function] */
        public eventRecordAppStart(): void;

        /** void EngineTAWrapper::eventInit() [member function] */
        public eventInit(): void;

        /** void EngineTAWrapper::EventPreAsyncTick(float DeltaTime) [member function] */
        public EventPreAsyncTick(DeltaTime: number): void;

    }

    /** PlayerControllerWrapper [class] */
    class PlayerControllerWrapper extends ActorWrapper {
        // Public:
        /** PlayerControllerWrapper::PlayerControllerWrapper(uintptr_t mem) [constructor] */
        public constructor(mem: bigint);

        /** CarWrapper PlayerControllerWrapper::GetCar() [member function] */
        public GetCar(): CarWrapper;

        /** void PlayerControllerWrapper::SetCar(CarWrapper newCar) [member function] */
        public SetCar(newCar: CarWrapper): void;

        /** PriWrapper PlayerControllerWrapper::GetPRI() [member function] */
        public GetPRI(): PriWrapper;

        /** void PlayerControllerWrapper::SetPRI(PriWrapper newPRI) [member function] */
        public SetPRI(newPRI: PriWrapper): void;

        /** ControllerInput PlayerControllerWrapper::GetVehicleInput() [member function] */
        public GetVehicleInput(): ControllerInput;

        /** void PlayerControllerWrapper::SetVehicleInput(ControllerInput newVehicleInput) [member function] */
        public SetVehicleInput(newVehicleInput: ControllerInput): void;

        /** long unsigned int PlayerControllerWrapper::GetbReceivedServerShutdownMessage() [member function] */
        public GetbReceivedServerShutdownMessage(): boolean;

        /** void PlayerControllerWrapper::SetbReceivedServerShutdownMessage(long unsigned int newbReceivedServerShutdownMessage) [member function] */
        public SetbReceivedServerShutdownMessage(newbReceivedServerShutdownMessage: boolean): void;

        /** long unsigned int PlayerControllerWrapper::GetbUseDebugInputs() [member function] */
        public GetbUseDebugInputs(): boolean;

        /** void PlayerControllerWrapper::SetbUseDebugInputs(long unsigned int newbUseDebugInputs) [member function] */
        public SetbUseDebugInputs(newbUseDebugInputs: boolean): void;

        /** long unsigned int PlayerControllerWrapper::GetbJumpPressed() [member function] */
        public GetbJumpPressed(): boolean;

        /** void PlayerControllerWrapper::SetbJumpPressed(long unsigned int newbJumpPressed) [member function] */
        public SetbJumpPressed(newbJumpPressed: boolean): void;

        /** long unsigned int PlayerControllerWrapper::GetbBoostPressed() [member function] */
        public GetbBoostPressed(): boolean;

        /** void PlayerControllerWrapper::SetbBoostPressed(long unsigned int newbBoostPressed) [member function] */
        public SetbBoostPressed(newbBoostPressed: boolean): void;

        /** long unsigned int PlayerControllerWrapper::GetbHandbrakePressed() [member function] */
        public GetbHandbrakePressed(): boolean;

        /** void PlayerControllerWrapper::SetbHandbrakePressed(long unsigned int newbHandbrakePressed) [member function] */
        public SetbHandbrakePressed(newbHandbrakePressed: boolean): void;

        /** long unsigned int PlayerControllerWrapper::GetbHasPitchedBack() [member function] */
        public GetbHasPitchedBack(): boolean;

        /** void PlayerControllerWrapper::SetbHasPitchedBack(long unsigned int newbHasPitchedBack) [member function] */
        public SetbHasPitchedBack(newbHasPitchedBack: boolean): void;

        /** long unsigned int PlayerControllerWrapper::GetbAllowAsymmetricalMute() [member function] */
        public GetbAllowAsymmetricalMute(): boolean;

        /** void PlayerControllerWrapper::SetbAllowAsymmetricalMute(long unsigned int newbAllowAsymmetricalMute) [member function] */
        public SetbAllowAsymmetricalMute(newbAllowAsymmetricalMute: boolean): void;

        /** long unsigned int PlayerControllerWrapper::GetbResetCamera() [member function] */
        public GetbResetCamera(): boolean;

        /** void PlayerControllerWrapper::SetbResetCamera(long unsigned int newbResetCamera) [member function] */
        public SetbResetCamera(newbResetCamera: boolean): void;

        /** UnrealStringWrapper PlayerControllerWrapper::GetLoginURL() [member function] */
        public GetLoginURL(): UnrealStringWrapper;

        /** unsigned char PlayerControllerWrapper::GetVoiceFilter() [member function] */
        public GetVoiceFilter(): number;

        /** void PlayerControllerWrapper::SetVoiceFilter(unsigned char newVoiceFilter) [member function] */
        public SetVoiceFilter(newVoiceFilter: number): void;

        /** unsigned char PlayerControllerWrapper::GetChatFilter() [member function] */
        public GetChatFilter(): number;

        /** void PlayerControllerWrapper::SetChatFilter(unsigned char newChatFilter) [member function] */
        public SetChatFilter(newChatFilter: number): void;

        /** PriWrapper PlayerControllerWrapper::GetFollowTarget() [member function] */
        public GetFollowTarget(): PriWrapper;

        /** void PlayerControllerWrapper::SetFollowTarget(PriWrapper newFollowTarget) [member function] */
        public SetFollowTarget(newFollowTarget: PriWrapper): void;

        /** BaseCameraWrapper PlayerControllerWrapper::GetSpectatorCameraArchetype() [member function] */
        public GetSpectatorCameraArchetype(): BaseCameraWrapper;

        /** void PlayerControllerWrapper::SetSpectatorCameraArchetype(BaseCameraWrapper newSpectatorCameraArchetype) [member function] */
        public SetSpectatorCameraArchetype(newSpectatorCameraArchetype: BaseCameraWrapper): void;

        /** BaseCameraWrapper PlayerControllerWrapper::GetEditorCameraArchetype() [member function] */
        public GetEditorCameraArchetype(): BaseCameraWrapper;

        /** void PlayerControllerWrapper::SetEditorCameraArchetype(BaseCameraWrapper newEditorCameraArchetype) [member function] */
        public SetEditorCameraArchetype(newEditorCameraArchetype: BaseCameraWrapper): void;

        /** Vector PlayerControllerWrapper::GetMoveActorGrabOffset() [member function] */
        public GetMoveActorGrabOffset(): Vector;

        /** void PlayerControllerWrapper::SetMoveActorGrabOffset(Vector newMoveActorGrabOffset) [member function] */
        public SetMoveActorGrabOffset(newMoveActorGrabOffset: Vector): void;

        /** float PlayerControllerWrapper::GetMoveActorGrabIncrement() [member function] */
        public GetMoveActorGrabIncrement(): number;

        /** void PlayerControllerWrapper::SetMoveActorGrabIncrement(float newMoveActorGrabIncrement) [member function] */
        public SetMoveActorGrabIncrement(newMoveActorGrabIncrement: number): void;

        /** float PlayerControllerWrapper::GetMinMoveActorGrabDistance() [member function] */
        public GetMinMoveActorGrabDistance(): number;

        /** void PlayerControllerWrapper::SetMinMoveActorGrabDistance(float newMinMoveActorGrabDistance) [member function] */
        public SetMinMoveActorGrabDistance(newMinMoveActorGrabDistance: number): void;

        /** float PlayerControllerWrapper::GetMouseIncrementSpeed() [member function] */
        public GetMouseIncrementSpeed(): number;

        /** void PlayerControllerWrapper::SetMouseIncrementSpeed(float newMouseIncrementSpeed) [member function] */
        public SetMouseIncrementSpeed(newMouseIncrementSpeed: number): void;

        /** float PlayerControllerWrapper::GetBallVelocityIncrementAmount() [member function] */
        public GetBallVelocityIncrementAmount(): number;

        /** void PlayerControllerWrapper::SetBallVelocityIncrementAmount(float newBallVelocityIncrementAmount) [member function] */
        public SetBallVelocityIncrementAmount(newBallVelocityIncrementAmount: number): void;

        /** int PlayerControllerWrapper::GetBallVelocityIncrementFireCount() [member function] */
        public GetBallVelocityIncrementFireCount(): number;

        /** void PlayerControllerWrapper::SetBallVelocityIncrementFireCount(int newBallVelocityIncrementFireCount) [member function] */
        public SetBallVelocityIncrementFireCount(newBallVelocityIncrementFireCount: number): void;

        /** float PlayerControllerWrapper::GetBallVelocityIncrementFireCountMax() [member function] */
        public GetBallVelocityIncrementFireCountMax(): number;

        /** void PlayerControllerWrapper::SetBallVelocityIncrementFireCountMax(float newBallVelocityIncrementFireCountMax) [member function] */
        public SetBallVelocityIncrementFireCountMax(newBallVelocityIncrementFireCountMax: number): void;

        /** float PlayerControllerWrapper::GetBallVelocityIncrementSpeedDefault() [member function] */
        public GetBallVelocityIncrementSpeedDefault(): number;

        /** void PlayerControllerWrapper::SetBallVelocityIncrementSpeedDefault(float newBallVelocityIncrementSpeedDefault) [member function] */
        public SetBallVelocityIncrementSpeedDefault(newBallVelocityIncrementSpeedDefault: number): void;

        /** float PlayerControllerWrapper::GetBallVelocityIncrementSpeedMax() [member function] */
        public GetBallVelocityIncrementSpeedMax(): number;

        /** void PlayerControllerWrapper::SetBallVelocityIncrementSpeedMax(float newBallVelocityIncrementSpeedMax) [member function] */
        public SetBallVelocityIncrementSpeedMax(newBallVelocityIncrementSpeedMax: number): void;

        /** float PlayerControllerWrapper::GetCrosshairTraceDistance() [member function] */
        public GetCrosshairTraceDistance(): number;

        /** void PlayerControllerWrapper::SetCrosshairTraceDistance(float newCrosshairTraceDistance) [member function] */
        public SetCrosshairTraceDistance(newCrosshairTraceDistance: number): void;

        /** ActorWrapper PlayerControllerWrapper::GetTracedCrosshairActor() [member function] */
        public GetTracedCrosshairActor(): ActorWrapper;

        /** void PlayerControllerWrapper::SetTracedCrosshairActor(ActorWrapper newTracedCrosshairActor) [member function] */
        public SetTracedCrosshairActor(newTracedCrosshairActor: ActorWrapper): void;

        /** Vector PlayerControllerWrapper::GetRotateActorCameraLocationOffset() [member function] */
        public GetRotateActorCameraLocationOffset(): Vector;

        /** void PlayerControllerWrapper::SetRotateActorCameraLocationOffset(Vector newRotateActorCameraLocationOffset) [member function] */
        public SetRotateActorCameraLocationOffset(newRotateActorCameraLocationOffset: Vector): void;

        /** Vector PlayerControllerWrapper::GetRotateActorCameraRotationOffset() [member function] */
        public GetRotateActorCameraRotationOffset(): Vector;

        /** void PlayerControllerWrapper::SetRotateActorCameraRotationOffset(Vector newRotateActorCameraRotationOffset) [member function] */
        public SetRotateActorCameraRotationOffset(newRotateActorCameraRotationOffset: Vector): void;

        /** int PlayerControllerWrapper::GetRotateActorCameraSide() [member function] */
        public GetRotateActorCameraSide(): number;

        /** void PlayerControllerWrapper::SetRotateActorCameraSide(int newRotateActorCameraSide) [member function] */
        public SetRotateActorCameraSide(newRotateActorCameraSide: number): void;

        /** float PlayerControllerWrapper::GetDesiredCameraSide() [member function] */
        public GetDesiredCameraSide(): number;

        /** void PlayerControllerWrapper::SetDesiredCameraSide(float newDesiredCameraSide) [member function] */
        public SetDesiredCameraSide(newDesiredCameraSide: number): void;

        /** float PlayerControllerWrapper::GetPawnTypeChangedTime() [member function] */
        public GetPawnTypeChangedTime(): number;

        /** void PlayerControllerWrapper::SetPawnTypeChangedTime(float newPawnTypeChangedTime) [member function] */
        public SetPawnTypeChangedTime(newPawnTypeChangedTime: number): void;

        /** int PlayerControllerWrapper::GetSelectedSpawnArchetype() [member function] */
        public GetSelectedSpawnArchetype(): number;

        /** void PlayerControllerWrapper::SetSelectedSpawnArchetype(int newSelectedSpawnArchetype) [member function] */
        public SetSelectedSpawnArchetype(newSelectedSpawnArchetype: number): void;

        /** ControllerInput PlayerControllerWrapper::GetDebugInputs() [member function] */
        public GetDebugInputs(): ControllerInput;

        /** void PlayerControllerWrapper::SetDebugInputs(ControllerInput newDebugInputs) [member function] */
        public SetDebugInputs(newDebugInputs: ControllerInput): void;

        /** int PlayerControllerWrapper::GetMinClientInputRate() [member function] */
        public GetMinClientInputRate(): number;

        /** void PlayerControllerWrapper::SetMinClientInputRate(int newMinClientInputRate) [member function] */
        public SetMinClientInputRate(newMinClientInputRate: number): void;

        /** int PlayerControllerWrapper::GetMedianClientInputRate() [member function] */
        public GetMedianClientInputRate(): number;

        /** void PlayerControllerWrapper::SetMedianClientInputRate(int newMedianClientInputRate) [member function] */
        public SetMedianClientInputRate(newMedianClientInputRate: number): void;

        /** int PlayerControllerWrapper::GetMaxClientInputRate() [member function] */
        public GetMaxClientInputRate(): number;

        /** void PlayerControllerWrapper::SetMaxClientInputRate(int newMaxClientInputRate) [member function] */
        public SetMaxClientInputRate(newMaxClientInputRate: number): void;

        /** int PlayerControllerWrapper::GetConfiguredClientInputRate() [member function] */
        public GetConfiguredClientInputRate(): number;

        /** void PlayerControllerWrapper::SetConfiguredClientInputRate(int newConfiguredClientInputRate) [member function] */
        public SetConfiguredClientInputRate(newConfiguredClientInputRate: number): void;

        /** float PlayerControllerWrapper::GetTimeSinceLastMovePacket() [member function] */
        public GetTimeSinceLastMovePacket(): number;

        /** void PlayerControllerWrapper::SetTimeSinceLastMovePacket(float newTimeSinceLastMovePacket) [member function] */
        public SetTimeSinceLastMovePacket(newTimeSinceLastMovePacket: number): void;

        /** float PlayerControllerWrapper::GetTimeLastReplicatedMovePacket() [member function] */
        public GetTimeLastReplicatedMovePacket(): number;

        /** void PlayerControllerWrapper::SetTimeLastReplicatedMovePacket(float newTimeLastReplicatedMovePacket) [member function] */
        public SetTimeLastReplicatedMovePacket(newTimeLastReplicatedMovePacket: number): void;

        /** float PlayerControllerWrapper::GetMouseXDeadZone() [member function] */
        public GetMouseXDeadZone(): number;

        /** void PlayerControllerWrapper::SetMouseXDeadZone(float newMouseXDeadZone) [member function] */
        public SetMouseXDeadZone(newMouseXDeadZone: number): void;

        /** float PlayerControllerWrapper::GetMouseYDeadZone() [member function] */
        public GetMouseYDeadZone(): number;

        /** void PlayerControllerWrapper::SetMouseYDeadZone(float newMouseYDeadZone) [member function] */
        public SetMouseYDeadZone(newMouseYDeadZone: number): void;

        /** float PlayerControllerWrapper::GetMouseXDeadZoneAir() [member function] */
        public GetMouseXDeadZoneAir(): number;

        /** void PlayerControllerWrapper::SetMouseXDeadZoneAir(float newMouseXDeadZoneAir) [member function] */
        public SetMouseXDeadZoneAir(newMouseXDeadZoneAir: number): void;

        /** float PlayerControllerWrapper::GetMouseYDeadZoneAir() [member function] */
        public GetMouseYDeadZoneAir(): number;

        /** void PlayerControllerWrapper::SetMouseYDeadZoneAir(float newMouseYDeadZoneAir) [member function] */
        public SetMouseYDeadZoneAir(newMouseYDeadZoneAir: number): void;

        /** ControllerInput PlayerControllerWrapper::GetLastInputs() [member function] */
        public GetLastInputs(): ControllerInput;

        /** void PlayerControllerWrapper::SetLastInputs(ControllerInput newLastInputs) [member function] */
        public SetLastInputs(newLastInputs: ControllerInput): void;

        /** PriWrapper PlayerControllerWrapper::GetPendingViewPRI() [member function] */
        public GetPendingViewPRI(): PriWrapper;

        /** void PlayerControllerWrapper::SetPendingViewPRI(PriWrapper newPendingViewPRI) [member function] */
        public SetPendingViewPRI(newPendingViewPRI: PriWrapper): void;

        /** float PlayerControllerWrapper::GetLastInputPitchUp() [member function] */
        public GetLastInputPitchUp(): number;

        /** void PlayerControllerWrapper::SetLastInputPitchUp(float newLastInputPitchUp) [member function] */
        public SetLastInputPitchUp(newLastInputPitchUp: number): void;

        /** float PlayerControllerWrapper::GetLastInputPitchDown() [member function] */
        public GetLastInputPitchDown(): number;

        /** void PlayerControllerWrapper::SetLastInputPitchDown(float newLastInputPitchDown) [member function] */
        public SetLastInputPitchDown(newLastInputPitchDown: number): void;

        /** float PlayerControllerWrapper::GetLastInputYawLeft() [member function] */
        public GetLastInputYawLeft(): number;

        /** void PlayerControllerWrapper::SetLastInputYawLeft(float newLastInputYawLeft) [member function] */
        public SetLastInputYawLeft(newLastInputYawLeft: number): void;

        /** float PlayerControllerWrapper::GetLastInputYawRight() [member function] */
        public GetLastInputYawRight(): number;

        /** void PlayerControllerWrapper::SetLastInputYawRight(float newLastInputYawRight) [member function] */
        public SetLastInputYawRight(newLastInputYawRight: number): void;

        /** float PlayerControllerWrapper::GetLastInputPitch() [member function] */
        public GetLastInputPitch(): number;

        /** void PlayerControllerWrapper::SetLastInputPitch(float newLastInputPitch) [member function] */
        public SetLastInputPitch(newLastInputPitch: number): void;

        /** float PlayerControllerWrapper::GetLastInputYaw() [member function] */
        public GetLastInputYaw(): number;

        /** void PlayerControllerWrapper::SetLastInputYaw(float newLastInputYaw) [member function] */
        public SetLastInputYaw(newLastInputYaw: number): void;

        /** float PlayerControllerWrapper::GetMouseInputMax() [member function] */
        public GetMouseInputMax(): number;

        /** void PlayerControllerWrapper::SetMouseInputMax(float newMouseInputMax) [member function] */
        public SetMouseInputMax(newMouseInputMax: number): void;

        /** EngineTAWrapper PlayerControllerWrapper::GetEngineShare() [member function] */
        public GetEngineShare(): EngineTAWrapper;

        /** void PlayerControllerWrapper::SetEngineShare(EngineTAWrapper newEngineShare) [member function] */
        public SetEngineShare(newEngineShare: EngineTAWrapper): void;

        /** void PlayerControllerWrapper::HandleCarSet(PriWrapper InPRI) [member function] */
        public HandleCarSet(InPRI: PriWrapper): void;

        /** void PlayerControllerWrapper::SpawnSelectedArchetype() [member function] */
        public SpawnSelectedArchetype(): void;

        /** bool PlayerControllerWrapper::RemoveActor() [member function] */
        public RemoveActor(): boolean;

        /** void PlayerControllerWrapper::ToggleGrabActor() [member function] */
        public ToggleGrabActor(): void;

        /** void PlayerControllerWrapper::ToggleRotateActor() [member function] */
        public ToggleRotateActor(): void;

        /** void PlayerControllerWrapper::EditorReleaseActor() [member function] */
        public EditorReleaseActor(): void;

        /** void PlayerControllerWrapper::EditorCycleActor() [member function] */
        public EditorCycleActor(): void;

        /** void PlayerControllerWrapper::DuplicateShot() [member function] */
        public DuplicateShot(): void;

        /** void PlayerControllerWrapper::StopEditing() [member function] */
        public StopEditing(): void;

        /** void PlayerControllerWrapper::EditorIncreasePower() [member function] */
        public EditorIncreasePower(): void;

        /** void PlayerControllerWrapper::EditorDecreasePower() [member function] */
        public EditorDecreasePower(): void;

        /** void PlayerControllerWrapper::EditorIncreasePowerToggleInterim() [member function] */
        public EditorIncreasePowerToggleInterim(): void;

        /** void PlayerControllerWrapper::EditorDecreasePowerToggleInterim() [member function] */
        public EditorDecreasePowerToggleInterim(): void;

        /** void PlayerControllerWrapper::EditorIncreasePowerToggle2(long unsigned int bToggle) [member function] */
        public EditorIncreasePowerToggle2(bToggle: boolean): void;

        /** void PlayerControllerWrapper::EditorDecreasePowerToggle2(long unsigned int bToggle) [member function] */
        public EditorDecreasePowerToggle2(bToggle: boolean): void;

        /** void PlayerControllerWrapper::ModifyEditorPower(int Direction) [member function] */
        public ModifyEditorPower(Direction: number): void;

        /** void PlayerControllerWrapper::ToggleCameraPosition() [member function] */
        public ToggleCameraPosition(): void;

        /** void PlayerControllerWrapper::EditorUndo() [member function] */
        public EditorUndo(): void;

        /** void PlayerControllerWrapper::EditorRedo() [member function] */
        public EditorRedo(): void;

        /** void PlayerControllerWrapper::EditorIncreaseRoundTime() [member function] */
        public EditorIncreaseRoundTime(): void;

        /** void PlayerControllerWrapper::EditorDecreaseRoundTime() [member function] */
        public EditorDecreaseRoundTime(): void;

        /** void PlayerControllerWrapper::EditorNextRound() [member function] */
        public EditorNextRound(): void;

        /** void PlayerControllerWrapper::EditorPrevRound() [member function] */
        public EditorPrevRound(): void;

        /** void PlayerControllerWrapper::UpdateCrosshair() [member function] */
        public UpdateCrosshair(): void;

        /** void PlayerControllerWrapper::NetClientInputRate(int Rate) [member function] */
        public NetClientInputRate(Rate: number): void;

        /** void PlayerControllerWrapper::ServerCreateMatchBroadcast(ServerWrapper GameEvent) [member function] */
        public ServerCreateMatchBroadcast(GameEvent: ServerWrapper): void;

        /** void PlayerControllerWrapper::ClampMoveActorGrabOffset() [member function] */
        public ClampMoveActorGrabOffset(): void;

        /** void PlayerControllerWrapper::RevertToDefaultCameraHUDInput() [member function] */
        public RevertToDefaultCameraHUDInput(): void;

        /** void PlayerControllerWrapper::SwitchToEditPawn() [member function] */
        public SwitchToEditPawn(): void;

        /** void PlayerControllerWrapper::ServerResetPlayer(long unsigned int bFullReset) [member function] */
        public ServerResetPlayer(bFullReset: boolean): void;

        /** void PlayerControllerWrapper::ResetPlayerRun() [member function] */
        public ResetPlayerRun(): void;

        /** void PlayerControllerWrapper::ResetPlayerCheckpoint() [member function] */
        public ResetPlayerCheckpoint(): void;

        /** void PlayerControllerWrapper::ToggleEditorRound() [member function] */
        public ToggleEditorRound(): void;

        /** void PlayerControllerWrapper::ToggleBetweenCarAndEditPawn() [member function] */
        public ToggleBetweenCarAndEditPawn(): void;

        /** void PlayerControllerWrapper::Interact() [member function] */
        public Interact(): void;

        /** void PlayerControllerWrapper::StopMovement(long unsigned int bOnlyIfNoAccel) [member function] */
        public StopMovement(bOnlyIfNoAccel: boolean): void;

        /** Vector PlayerControllerWrapper::GetRotateActorCameraOffset(float DeltaTime, long unsigned int bSnap) [member function] */
        public GetRotateActorCameraOffset(DeltaTime: number, bSnap: boolean): Vector;

        /** void PlayerControllerWrapper::RestoreEditorPawnOrientation() [member function] */
        public RestoreEditorPawnOrientation(): void;

        /** void PlayerControllerWrapper::BackupEditorPawnOrientation() [member function] */
        public BackupEditorPawnOrientation(): void;

        /** void PlayerControllerWrapper::UpdateRotatedActorOrientation(float DeltaTime) [member function] */
        public UpdateRotatedActorOrientation(DeltaTime: number): void;

        /** void PlayerControllerWrapper::OnOpenPauseMenu() [member function] */
        public OnOpenPauseMenu(): void;

        /** void PlayerControllerWrapper::ResetMouseCenter() [member function] */
        public ResetMouseCenter(): void;

        /** float PlayerControllerWrapper::CalculateMouseAxis(float Center, float CurrentLocation, float Deadzone, float MaxDist) [member function] */
        public CalculateMouseAxis(Center: number, CurrentLocation: number, Deadzone: number, MaxDist: number): number;

        /** void PlayerControllerWrapper::ShowControllerApplet() [member function] */
        public ShowControllerApplet(): void;

        /** void PlayerControllerWrapper::ShowAccountPicker() [member function] */
        public ShowAccountPicker(): void;

        /** void PlayerControllerWrapper::QueSaveReplay() [member function] */
        public QueSaveReplay(): void;

        /** void PlayerControllerWrapper::SetFollowTarget2(PriWrapper InTarget) [member function] */
        public SetFollowTarget2(InTarget: PriWrapper): void;

        /** void PlayerControllerWrapper::FollowPlayer(PriWrapper InPlayer) [member function] */
        public FollowPlayer(InPlayer: PriWrapper): void;

        /** void PlayerControllerWrapper::ClientSplitscreenJoinResponse(SteamID & PlayerID, long unsigned int bAllow, std::string Error) [member function] */
        public ClientSplitscreenJoinResponse(PlayerID: SteamID, bAllow: boolean, Error: string): void;

        /** void PlayerControllerWrapper::ServerRequestSplitscreenJoin(SteamID & PlayerID, std::string PlayerName) [member function] */
        public ServerRequestSplitscreenJoin(PlayerID: SteamID, PlayerName: string): void;

        /** bool PlayerControllerWrapper::eventPreClientTravel(std::string PendingURL, unsigned char TravelType, long unsigned int bIsSeamlessTravel) [member function] */
        public eventPreClientTravel(PendingURL: string, TravelType: number, bIsSeamlessTravel: boolean): boolean;

        /** void PlayerControllerWrapper::NotifyGoalScored(int ScoredOnTeam) [member function] */
        public NotifyGoalScored(ScoredOnTeam: number): void;

        /** void PlayerControllerWrapper::eventDestroyed() [member function] */
        public eventDestroyed(): void;

        /** bool PlayerControllerWrapper::ShouldBeMuted(PlayerControllerWrapper Other) [member function] */
        public ShouldBeMuted(Other: PlayerControllerWrapper): boolean;

        /** bool PlayerControllerWrapper::IsCommunicationFiltered(unsigned char Filter, PlayerControllerWrapper Other, long unsigned int bPreset) [member function] */
        public IsCommunicationFiltered(Filter: number, Other: PlayerControllerWrapper, bPreset: boolean): boolean;

        /** void PlayerControllerWrapper::RefreshMutedPlayers(long unsigned int bForceRefresh) [member function] */
        public RefreshMutedPlayers(bForceRefresh: boolean): void;

        /** void PlayerControllerWrapper::eventServerUnmutePlayer(SteamID & PlayerNetId) [member function] */
        public eventServerUnmutePlayer(PlayerNetId: SteamID): void;

        /** void PlayerControllerWrapper::eventServerMutePlayer(SteamID & PlayerNetId) [member function] */
        public eventServerMutePlayer(PlayerNetId: SteamID): void;

        /** void PlayerControllerWrapper::GameplayUnmutePlayer(SteamID & PlayerNetId) [member function] */
        public GameplayUnmutePlayer(PlayerNetId: SteamID): void;

        /** void PlayerControllerWrapper::GameplayMutePlayer(SteamID & PlayerNetId) [member function] */
        public GameplayMutePlayer(PlayerNetId: SteamID): void;

        /** void PlayerControllerWrapper::ServerSetChatFilter(unsigned char InVoiceFilter) [member function] */
        public ServerSetChatFilter(InVoiceFilter: number): void;

        /** void PlayerControllerWrapper::ServerSetVoiceFilter(unsigned char InVoiceFilter) [member function] */
        public ServerSetVoiceFilter(InVoiceFilter: number): void;

        /** bool PlayerControllerWrapper::IsExplictlyMuted(SteamID & PlayerNetId) [member function] */
        public IsExplictlyMuted(PlayerNetId: SteamID): boolean;

        /** void PlayerControllerWrapper::DebugAI() [member function] */
        public DebugAI(): void;

        /** void PlayerControllerWrapper::SendPendingRPCs() [member function] */
        public SendPendingRPCs(): void;

        /** bool PlayerControllerWrapper::CanSendMessage(long unsigned int bQuickChatMessage) [member function] */
        public CanSendMessage(bQuickChatMessage: boolean): boolean;

        /** void PlayerControllerWrapper::ClientNotifyChatBanned(long long unsigned int ChatBanExpiration) [member function] */
        public ClientNotifyChatBanned(ChatBanExpiration: number): void;

        /** void PlayerControllerWrapper::ClientNotifyChatDisabled(float Time) [member function] */
        public ClientNotifyChatDisabled(Time: number): void;

        /** void PlayerControllerWrapper::ChatMessage_TA(PlayerReplicationInfoWrapper InPRI, std::string Message, unsigned char ChatChannel, long unsigned int bPreset) [member function] */
        public ChatMessage_TA(InPRI: PlayerReplicationInfoWrapper, Message: string, ChatChannel: number, bPreset: boolean): void;

        /** void PlayerControllerWrapper::ServerSayInternal_TA(std::string Message, unsigned char ChatChannel, long unsigned int bPreset) [member function] */
        public ServerSayInternal_TA(Message: string, ChatChannel: number, bPreset: boolean): void;

        /** void PlayerControllerWrapper::ServerSay_TA(std::string Message, unsigned char ChatChannel, long unsigned int bPreset) [member function] */
        public ServerSay_TA(Message: string, ChatChannel: number, bPreset: boolean): void;

        /** void PlayerControllerWrapper::Say_TA2(std::string Message, unsigned char ChatChannel, SteamID & Recipient, long unsigned int bPreset) [member function] */
        public Say_TA2(Message: string, ChatChannel: number, Recipient: SteamID, bPreset: boolean): void;

        /** bool PlayerControllerWrapper::CanChatWith(PlayerControllerWrapper Other, long unsigned int bPreset) [member function] */
        public CanChatWith(Other: PlayerControllerWrapper, bPreset: boolean): boolean;

        /** bool PlayerControllerWrapper::AllowTextMessage(std::string msg) [member function] */
        public AllowTextMessage(msg: string): boolean;

        /** void PlayerControllerWrapper::PushToTalkEnd() [member function] */
        public PushToTalkEnd(): void;

        /** void PlayerControllerWrapper::PushToTalk2() [member function] */
        public PushToTalk2(): void;

        /** void PlayerControllerWrapper::HandleJoinGameMigrationCompleted(long unsigned int bSuccess, std::string FailReason) [member function] */
        public HandleJoinGameMigrationCompleted(bSuccess: boolean, FailReason: string): void;

        /** void PlayerControllerWrapper::eventClientUnmutePlayer(SteamID & PlayerNetId) [member function] */
        public eventClientUnmutePlayer(PlayerNetId: SteamID): void;

        /** void PlayerControllerWrapper::eventClientMutePlayer(SteamID & PlayerNetId, long unsigned int bAddToMuteList) [member function] */
        public eventClientMutePlayer(PlayerNetId: SteamID, bAddToMuteList: boolean): void;

        /** void PlayerControllerWrapper::ClientSetOnlineStatus() [member function] */
        public ClientSetOnlineStatus(): void;

        /** void PlayerControllerWrapper::HandleGameDataSelected(int PlaylistId, int MutatorIndex) [member function] */
        public HandleGameDataSelected(PlaylistId: number, MutatorIndex: number): void;

        /** GameEventWrapper PlayerControllerWrapper::GetGameEvent() [member function] */
        public GetGameEvent(): GameEventWrapper;

        /** void PlayerControllerWrapper::ClientArbitratedMatchEnded() [member function] */
        public ClientArbitratedMatchEnded(): void;

        /** void PlayerControllerWrapper::BannedKick() [member function] */
        public BannedKick(): void;

        /** void PlayerControllerWrapper::NoReservationKick() [member function] */
        public NoReservationKick(): void;

        /** void PlayerControllerWrapper::IdleKick2() [member function] */
        public IdleKick2(): void;

        /** void PlayerControllerWrapper::ServerReportServer() [member function] */
        public ServerReportServer(): void;

        /** void PlayerControllerWrapper::ClientUseItem(Vector & UseLocation, Rotator & UseRotation) [member function] */
        public ClientUseItem(UseLocation: Vector, UseRotation: Rotator): void;

        /** void PlayerControllerWrapper::ServerTeleportCar(Vector & SpawnLocation, Rotator & NewRotation) [member function] */
        public ServerTeleportCar(SpawnLocation: Vector, NewRotation: Rotator): void;

        /** void PlayerControllerWrapper::eventTeleportCar(Vector & SpawnLocation, Rotator & NewRotation) [member function] */
        public eventTeleportCar(SpawnLocation: Vector, NewRotation: Rotator): void;

        /** void PlayerControllerWrapper::ServerUsePickup(RBActorWrapper Target) [member function] */
        public ServerUsePickup(Target: RBActorWrapper): void;

        /** void PlayerControllerWrapper::UsePickup2() [member function] */
        public UsePickup2(): void;

        /** void PlayerControllerWrapper::ToggleHandbrake(long unsigned int bHandbrake) [member function] */
        public ToggleHandbrake(bHandbrake: boolean): void;

        /** void PlayerControllerWrapper::ToggleBoost(long unsigned int bBoost) [member function] */
        public ToggleBoost(bBoost: boolean): void;

        /** void PlayerControllerWrapper::ToggleJump(long unsigned int bJump) [member function] */
        public ToggleJump(bJump: boolean): void;

        /** void PlayerControllerWrapper::TargetSelectLeft() [member function] */
        public TargetSelectLeft(): void;

        /** void PlayerControllerWrapper::TargetSelectRight() [member function] */
        public TargetSelectRight(): void;

        /** void PlayerControllerWrapper::ReleaseRearCamera() [member function] */
        public ReleaseRearCamera(): void;

        /** void PlayerControllerWrapper::PressRearCamera() [member function] */
        public PressRearCamera(): void;

        /** void PlayerControllerWrapper::ReleaseSecondaryCamera() [member function] */
        public ReleaseSecondaryCamera(): void;

        /** void PlayerControllerWrapper::PressSecondaryCamera() [member function] */
        public PressSecondaryCamera(): void;

        /** void PlayerControllerWrapper::ReadyUp() [member function] */
        public ReadyUp(): void;

        /** void PlayerControllerWrapper::Spectate() [member function] */
        public Spectate(): void;

        /** void PlayerControllerWrapper::ChangeTeam(int TeamNum) [member function] */
        public ChangeTeam(TeamNum: number): void;

        /** void PlayerControllerWrapper::SwitchTeam() [member function] */
        public SwitchTeam(): void;

        /** void PlayerControllerWrapper::SetDefaultCameraMode() [member function] */
        public SetDefaultCameraMode(): void;

        /** void PlayerControllerWrapper::ResetCameraMode() [member function] */
        public ResetCameraMode(): void;

        /** void PlayerControllerWrapper::ZeroMoveInput() [member function] */
        public ZeroMoveInput(): void;

        /** void PlayerControllerWrapper::PlayerMove(float DeltaTime) [member function] */
        public PlayerMove(DeltaTime: number): void;

        /** void PlayerControllerWrapper::IgnoreMoveInput(long unsigned int bNewMoveInput) [member function] */
        public IgnoreMoveInput(bNewMoveInput: boolean): void;

        /** void PlayerControllerWrapper::eventSendClientAdjustment() [member function] */
        public eventSendClientAdjustment(): void;

        /** PlayerControllerWrapper PlayerControllerWrapper::GetPrimaryPlayerController() [member function] */
        public GetPrimaryPlayerController(): PlayerControllerWrapper;

        /** void PlayerControllerWrapper::HandleAddBoostComponent(BoostWrapper Boost) [member function] */
        public HandleAddBoostComponent(Boost: BoostWrapper): void;

        /** void PlayerControllerWrapper::ReplicateLoadout() [member function] */
        public ReplicateLoadout(): void;

        /** void PlayerControllerWrapper::ReplicateCameraRotation() [member function] */
        public ReplicateCameraRotation(): void;

        /** void PlayerControllerWrapper::SetUsingFreecam(long unsigned int bFreecam) [member function] */
        public SetUsingFreecam(bFreecam: boolean): void;

        /** void PlayerControllerWrapper::SetUsingBehindView(long unsigned int bBehindView) [member function] */
        public SetUsingBehindView(bBehindView: boolean): void;

        /** void PlayerControllerWrapper::SetUsingSecondaryCamera(long unsigned int bSecondaryCamera) [member function] */
        public SetUsingSecondaryCamera(bSecondaryCamera: boolean): void;

        /** void PlayerControllerWrapper::ReplicateCameraSettings() [member function] */
        public ReplicateCameraSettings(): void;

        /** void PlayerControllerWrapper::HandleControllerLayoutChanged(PriWrapper InPRI) [member function] */
        public HandleControllerLayoutChanged(InPRI: PriWrapper): void;

        /** void PlayerControllerWrapper::HandlePawnTypeChanged(PriWrapper InPRI) [member function] */
        public HandlePawnTypeChanged(InPRI: PriWrapper): void;

        /** void PlayerControllerWrapper::HandlePendingViewCarSet(PriWrapper InPRI) [member function] */
        public HandlePendingViewCarSet(InPRI: PriWrapper): void;

        /** void PlayerControllerWrapper::HandleReplaceBot(PriWrapper InPRI) [member function] */
        public HandleReplaceBot(InPRI: PriWrapper): void;

        /** void PlayerControllerWrapper::HandleTeamChanged(PriXWrapper InPRI) [member function] */
        public HandleTeamChanged(InPRI: PriXWrapper): void;

        /** void PlayerControllerWrapper::HandleMatchEnded(ServerWrapper GameEvent) [member function] */
        public HandleMatchEnded(GameEvent: ServerWrapper): void;

        /** void PlayerControllerWrapper::HandleStartNewRound(ServerWrapper GameEvent) [member function] */
        public HandleStartNewRound(GameEvent: ServerWrapper): void;

        /** void PlayerControllerWrapper::HandleGameEventChanged(PriWrapper InPRI) [member function] */
        public HandleGameEventChanged(InPRI: PriWrapper): void;

        /** void PlayerControllerWrapper::HandlePRICameraChanged(PriWrapper InPRI) [member function] */
        public HandlePRICameraChanged(InPRI: PriWrapper): void;

        /** void PlayerControllerWrapper::SetupLightBar() [member function] */
        public SetupLightBar(): void;

        /** void PlayerControllerWrapper::HandlePersistentCameraSet(PriWrapper InPRI) [member function] */
        public HandlePersistentCameraSet(InPRI: PriWrapper): void;

        /** void PlayerControllerWrapper::OnReceivedPlayerAndPRI() [member function] */
        public OnReceivedPlayerAndPRI(): void;

        /** void PlayerControllerWrapper::UpdateVoiceFilter() [member function] */
        public UpdateVoiceFilter(): void;

        /** void PlayerControllerWrapper::ReplicateLevelSessionID() [member function] */
        public ReplicateLevelSessionID(): void;

        /** void PlayerControllerWrapper::ServerInitInputBuffer(unsigned char Type) [member function] */
        public ServerInitInputBuffer(Type: number): void;

        /** void PlayerControllerWrapper::eventReceivedPlayer() [member function] */
        public eventReceivedPlayer(): void;

        /** void PlayerControllerWrapper::eventPostBeginPlay() [member function] */
        public eventPostBeginPlay(): void;

        /** void PlayerControllerWrapper::EventChatMessage(PlayerControllerWrapper PC, std::string Message, long unsigned int bPreset) [member function] */
        public EventChatMessage(PC: PlayerControllerWrapper, Message: string, bPreset: boolean): void;

        /** void PlayerControllerWrapper::EventResetPlayer(PlayerControllerWrapper PC, long unsigned int bFullReset) [member function] */
        public EventResetPlayer(PC: PlayerControllerWrapper, bFullReset: boolean): void;

        /** void PlayerControllerWrapper::EventSelectBallCamTarget(PlayerControllerWrapper PC, int Direction) [member function] */
        public EventSelectBallCamTarget(PC: PlayerControllerWrapper, Direction: number): void;

        /** void PlayerControllerWrapper::EventTrainingEditorActorModified() [member function] */
        public EventTrainingEditorActorModified(): void;

        /** void PlayerControllerWrapper::EventMuteChanged(PlayerControllerWrapper PC, SteamID & PlayerID, long unsigned int bMuted) [member function] */
        public EventMuteChanged(PC: PlayerControllerWrapper, PlayerID: SteamID, bMuted: boolean): void;

        /** void PlayerControllerWrapper::EventLaunchControllerApplet() [member function] */
        public EventLaunchControllerApplet(): void;

        /** void PlayerControllerWrapper::EventLaunchAccountPicker(int ControllerId) [member function] */
        public EventLaunchAccountPicker(ControllerId: number): void;

        /** bool PlayerControllerWrapper::GetbUsingGamepad() [member function] */
        public GetbUsingGamepad(): boolean;

        /** void PlayerControllerWrapper::SetMouseSensitivity(float NewSensitivity) [member function] */
        public SetMouseSensitivity(NewSensitivity: number): void;

        /** float PlayerControllerWrapper::GetMouseSensitivity() [member function] */
        public GetMouseSensitivity(): number;

        /** void PlayerControllerWrapper::SetAForward(float aForward) [member function] */
        public SetAForward(aForward: number): void;

        /** float PlayerControllerWrapper::GetAForward() [member function] */
        public GetAForward(): number;

        /** void PlayerControllerWrapper::SetATurn(float aTurn) [member function] */
        public SetATurn(aTurn: number): void;

        /** float PlayerControllerWrapper::GetATurn() [member function] */
        public GetATurn(): number;

        /** void PlayerControllerWrapper::SetAStrafe(float aStrafe) [member function] */
        public SetAStrafe(aStrafe: number): void;

        /** float PlayerControllerWrapper::GetAStrafe() [member function] */
        public GetAStrafe(): number;

        /** void PlayerControllerWrapper::SetAUp(float aUp) [member function] */
        public SetAUp(aUp: number): void;

        /** float PlayerControllerWrapper::GetAUp() [member function] */
        public GetAUp(): number;

        /** void PlayerControllerWrapper::SetALookUp(float aLookUp) [member function] */
        public SetALookUp(aLookUp: number): void;

        /** float PlayerControllerWrapper::GetALookUp() [member function] */
        public GetALookUp(): number;

        /** void PlayerControllerWrapper::SetLookRightScale(float NewScale) [member function] */
        public SetLookRightScale(NewScale: number): void;

        /** float PlayerControllerWrapper::GetLookRightScale() [member function] */
        public GetLookRightScale(): number;

        /** void PlayerControllerWrapper::SetLookUpScale(float NewScale) [member function] */
        public SetLookUpScale(NewScale: number): void;

        /** float PlayerControllerWrapper::GetLookUpScale() [member function] */
        public GetLookUpScale(): number;

        /** void PlayerControllerWrapper::SetGamepadLookScale(float NewScale) [member function] */
        public SetGamepadLookScale(NewScale: number): void;

        /** float PlayerControllerWrapper::GetGamepadLookScale() [member function] */
        public GetGamepadLookScale(): number;

        /** void PlayerControllerWrapper::SetALookRoll(float NewLookRoll) [member function] */
        public SetALookRoll(NewLookRoll: number): void;

        /** float PlayerControllerWrapper::GetALookRoll() [member function] */
        public GetALookRoll(): number;

        /** void PlayerControllerWrapper::SetbRoll(bool NewRoll) [member function] */
        public SetbRoll(NewRoll: boolean): void;

        /** bool PlayerControllerWrapper::GetbRoll() [member function] */
        public GetbRoll(): boolean;

        /** void PlayerControllerWrapper::SetSpectatorCameraAccel(float SpectatorCameraAccel) [member function] */
        public SetSpectatorCameraAccel(SpectatorCameraAccel: number): void;

        /** float PlayerControllerWrapper::GetSpectatorCameraAccel() [member function] */
        public GetSpectatorCameraAccel(): number;

        /** void PlayerControllerWrapper::SetSpectatorCameraSpeed(float SpectatorCameraSpeed) [member function] */
        public SetSpectatorCameraSpeed(SpectatorCameraSpeed: number): void;

        /** float PlayerControllerWrapper::GetSpectatorCameraSpeed() [member function] */
        public GetSpectatorCameraSpeed(): number;

    }

    /** PluginManagerWrapper [class] */
    class PluginManagerWrapper extends ObjectWrapper {
        // Public:
        /** PluginManagerWrapper::PluginManagerWrapper(uintptr_t mem) [constructor] */
        public constructor(mem: bigint);

        /** std::vector<std::shared_ptr<BakkesMod::Plugin::LoadedPlugin>, std::allocator<std::shared_ptr<BakkesMod::Plugin::LoadedPlugin> > > * PluginManagerWrapper::GetLoadedPlugins() [member function] */
        //public GetLoadedPlugins(): LoadedPlugin[];

    }

    /** GameWrapper [class] */
    class GameWrapper {
        // Public:
        /** GameWrapper::GameWrapper(uintptr_t mem, long int pluginType, std::type_index idx) [constructor] */
        public constructor(mem: bigint, pluginType: number, idx: type_index);

        /** bool GameWrapper::IsInGame() [member function] */
        public IsInGame(): boolean;

        /** bool GameWrapper::IsInOnlineGame() [member function] */
        public IsInOnlineGame(): boolean;

        /** bool GameWrapper::IsInFreeplay() [member function] */
        public IsInFreeplay(): boolean;

        /** bool GameWrapper::IsInReplay() [member function] */
        public IsInReplay(): boolean;

        /** bool GameWrapper::IsInCustomTraining() [member function] */
        public IsInCustomTraining(): boolean;

        /** bool GameWrapper::IsSpectatingInOnlineGame() [member function] */
        public IsSpectatingInOnlineGame(): boolean;

        /** bool GameWrapper::IsPaused() [member function] */
        public IsPaused(): boolean;

        /** bool GameWrapper::IsUsingEpicVersion() [member function] */
        public IsUsingEpicVersion(): boolean;

        /** bool GameWrapper::IsUsingSteamVersion() [member function] */
        public IsUsingSteamVersion(): boolean;

        /** int GameWrapper::GetSteamVersion() [member function] */
        public GetSteamVersion(): number;

        /** std::string GameWrapper::GetPsyBuildID() [member function] */
        public GetPsyBuildID(): string;

        /** ServerWrapper GameWrapper::GetCurrentGameState() [member function] */
        public GetCurrentGameState(): ServerWrapper;

        /** ServerWrapper GameWrapper::GetOnlineGame() [member function] */
        public GetOnlineGame(): ServerWrapper;

        /** ServerWrapper GameWrapper::GetGameEventAsServer() [member function] */
        public GetGameEventAsServer(): ServerWrapper;

        /** ReplayServerWrapper GameWrapper::GetGameEventAsReplay() [member function] */
        public GetGameEventAsReplay(): ReplayServerWrapper;

        /** MMRWrapper GameWrapper::GetMMRWrapper() [member function] */
        public GetMMRWrapper(): MMRWrapper;

        /** CarWrapper GameWrapper::GetLocalCar() [member function] */
        public GetLocalCar(): CarWrapper;

        /** CameraWrapper GameWrapper::GetCamera() [member function] */
        public GetCamera(): CameraWrapper;

        /** EngineTAWrapper GameWrapper::GetEngine() [member function] */
        public GetEngine(): EngineTAWrapper;

        /** PluginManagerWrapper GameWrapper::GetPluginManager() [member function] */
        public GetPluginManager(): PluginManagerWrapper;

        /** GuiManagerWrapper GameWrapper::GetGUIManager() [member function] */
        //public GetGUIManager(): GuiManagerWrapper;

        /** PlayerControllerWrapper GameWrapper::GetPlayerController() [member function] */
        public GetPlayerController(): PlayerControllerWrapper;

        /** ItemsWrapper GameWrapper::GetItemsWrapper() [member function] */
        public GetItemsWrapper(): ItemsWrapper;

        /** MatchmakingWrapper GameWrapper::GetMatchmakingWrapper() [member function] */
        public GetMatchmakingWrapper(): MatchmakingWrapper;

        /** SettingsWrapper GameWrapper::GetSettings() [member function] */
        public GetSettings(): SettingsWrapper;

        /** ModalWrapper GameWrapper::CreateModal(std::string const & title) [member function] */
        public CreateModal(title: string): ModalWrapper;

        /** TextInputModalWrapper GameWrapper::CreateTextInputModal(std::string const & title) [member function] */
        public CreateTextInputModal(title: string): TextInputModalWrapper;

        /** void GameWrapper::OverrideParams(void * src, size_t memsize) [member function] */
        //public OverrideParams(src: any, memsize: number): void;

        /** void GameWrapper::SetTimeout(std::function<void (GameWrapper *)> theLambda, float time) [member function] */
        public SetTimeout(theLambda: (unk0: GameWrapper) => void, time: number): void;

        /** void GameWrapper::Execute(std::function<void (GameWrapper *)> theLambda) [member function] */
        public Execute(theLambda: (unk0: GameWrapper) => void): void;

        /** void GameWrapper::RegisterDrawable(std::function<void (CanvasWrapper)> callback) [member function] */
        public RegisterDrawable(callback: (unk0: CanvasWrapper) => void): void;

        /** void GameWrapper::UnregisterDrawables() [member function] */
        public UnregisterDrawables(): void;

        /** std::string GameWrapper::GetFNameByIndex(int index) [member function] */
        public GetFNameByIndex(index: number): string;

        /** int GameWrapper::GetFNameIndexByString(std::string name) [member function] */
        public GetFNameIndexByString(name: string): number;

        /** void GameWrapper::HookEvent(std::string eventName, std::function<void (std::basic_string<char>)> callback) [member function] */
        public HookEvent(eventName: string, callback: (unk0: string) => void): void;

        /** void GameWrapper::UnhookEvent(std::string eventName) [member function] */
        public UnhookEvent(eventName: string): void;

        /** void GameWrapper::HookEventPost(std::string eventName, std::function<void (std::basic_string<char>)> callback) [member function] */
        public HookEventPost(eventName: string, callback: (unk0: string) => void): void;

        /** void GameWrapper::UnhookEventPost(std::string eventName) [member function] */
        public UnhookEventPost(eventName: string): void;

        /** void GameWrapper::LogToChatbox(std::string text, std::string sender="BAKKESMOD") [member function] */
        public LogToChatbox(text: string, sender?: string): void;

        /** void GameWrapper::LoadToastTexture(std::string name, std::string path) [member function] */
        public LoadToastTexture(name: string, path: string): void;

        /** void GameWrapper::LoadToastTexture(std::string name, std::wstring path) [member function] */
        public LoadToastTexture(name: string, path: string): void;

        /** void GameWrapper::Toast(std::string title, std::string text, std::string texture="default", float timeout=3.5F, uint8_t toastType=0, float width=290.F, float height=60.F) [member function] */
        public Toast(title: string, text: string, texture?: string, timeout?: number, toastType?: number, width?: number, height?: number): void;

        /** bool GameWrapper::IsKeyPressed(int keyName) [member function] */
        public IsKeyPressed(keyName: number): boolean;

        /** int GameWrapper::IsCursorVisible() [member function] */
        public IsCursorVisible(): number;

        /** void GameWrapper::ExecuteUnrealCommand(std::string command) [member function] */
        public ExecuteUnrealCommand(command: string): void;

        /** std::string GameWrapper::GetRandomMap() [member function] */
        public GetRandomMap(): string;

        /** std::string GameWrapper::GetCurrentMap() [member function] */
        public GetCurrentMap(): string;

        /** long long unsigned int GameWrapper::GetSteamID() [member function] */
        public GetSteamID(): number;

        /** std::string GameWrapper::GetEpicID() [member function] */
        public GetEpicID(): string;

        /** UniqueIDWrapper GameWrapper::GetUniqueID() [member function] */
        public GetUniqueID(): UniqueIDWrapper;

        /** UnrealStringWrapper GameWrapper::GetPlayerName() [member function] */
        public GetPlayerName(): UnrealStringWrapper;

        /** ClubDetailsWrapper GameWrapper::GetLocalClub() [member function] */
        public GetLocalClub(): ClubDetailsWrapper;

        /** SequenceWrapper GameWrapper::GetMainSequence() [member function] */
        public GetMainSequence(): SequenceWrapper;

        /** void GameWrapper::SetBotLoadout(PriWrapper & bot_pri, BotLoadoutData const & loadout_data) [member function] */
        public SetBotLoadout(bot_pri: PriWrapper, loadout_data: BotLoadoutData): void;

        /** Vector2 GameWrapper::GetScreenSize() [member function] */
        public GetScreenSize(): Vector2;

        /** float GameWrapper::GetSafeZoneRatio() [member function] */
        public GetSafeZoneRatio(): number;

        /** float GameWrapper::GetUIScale() [member function] */
        public GetUIScale(): number;

        /** unsigned int GameWrapper::GetbMetric() [member function] */
        public GetbMetric(): number;

        /** UnrealStringWrapper GameWrapper::GetUILanguage() [member function] */
        public GetUILanguage(): UnrealStringWrapper;

        /** bool GameWrapper::GetbColorBlind() [member function] */
        public GetbColorBlind(): boolean;

        /** std::wstring GameWrapper::GetBakkesModPathW() [member function] */
        public GetBakkesModPathW(): string;

        /** std::wstring GameWrapper::GetDataFolderW() [member function] */
        public GetDataFolderW(): string;

        /** int GameWrapper::GetBakkesModVersion() [member function] */
        public GetBakkesModVersion(): number;

        /** void GameWrapper::PlayReplay(std::wstring const & path) [member function] */
        public PlayReplay(path: string): void;

        /** void GameWrapper::HookEventWithCaller(std::string eventName, std::function<void (ServerWrapper, void *, std::basic_string<char>)> callback) [member function] */
        public HookEventWithCaller(eventName: string, callback: (unk0: ServerWrapper, unk1: any, unk2: string) => void): void;

        /** void GameWrapper::HookEventWithCaller(std::string eventName, std::function<void (ActorWrapper, void *, std::basic_string<char>)> callback) [member function] */
        public HookEventWithCaller(eventName: string, callback: (unk0: ActorWrapper, unk1: any, unk2: string) => void): void;

        /** void GameWrapper::HookEventWithCaller(std::string eventName, std::function<void (CarWrapper, void *, std::basic_string<char>)> callback) [member function] */
        public HookEventWithCaller(eventName: string, callback: (unk0: CarWrapper, unk1: any, unk2: string) => void): void;

        /** void GameWrapper::HookEventWithCaller(std::string eventName, std::function<void (CarComponentWrapper, void *, std::basic_string<char>)> callback) [member function] */
        public HookEventWithCaller(eventName: string, callback: (unk0: CarComponentWrapper, unk1: any, unk2: string) => void): void;

        /** void GameWrapper::HookEventWithCaller(std::string eventName, std::function<void (PlayerControllerWrapper, void *, std::basic_string<char>)> callback) [member function] */
        public HookEventWithCaller(eventName: string, callback: (unk0: PlayerControllerWrapper, unk1: any, unk2: string) => void): void;

        /** void GameWrapper::HookEventWithCaller(std::string eventName, std::function<void (BallWrapper, void *, std::basic_string<char>)> callback) [member function] */
        public HookEventWithCaller(eventName: string, callback: (unk0: BallWrapper, unk1: any, unk2: string) => void): void;

        /** void GameWrapper::HookEventWithCallerPost(std::string eventName, std::function<void (ActorWrapper, void *, std::basic_string<char>)> callback) [member function] */
        public HookEventWithCallerPost(eventName: string, callback: (unk0: ActorWrapper, unk1: any, unk2: string) => void): void;

        /** void GameWrapper::HookEventWithCallerPost(std::string eventName, std::function<void (ServerWrapper, void *, std::basic_string<char>)> callback) [member function] */
        public HookEventWithCallerPost(eventName: string, callback: (unk0: ServerWrapper, unk1: any, unk2: string) => void): void;

        /** void GameWrapper::HookEventWithCallerPost(std::string eventName, std::function<void (CarWrapper, void *, std::basic_string<char>)> callback) [member function] */
        public HookEventWithCallerPost(eventName: string, callback: (unk0: CarWrapper, unk1: any, unk2: string) => void): void;

        /** void GameWrapper::HookEventWithCallerPost(std::string eventName, std::function<void (CarComponentWrapper, void *, std::basic_string<char>)> callback) [member function] */
        public HookEventWithCallerPost(eventName: string, callback: (unk0: CarComponentWrapper, unk1: any, unk2: string) => void): void;

        /** void GameWrapper::HookEventWithCallerPost(std::string eventName, std::function<void (PlayerControllerWrapper, void *, std::basic_string<char>)> callback) [member function] */
        public HookEventWithCallerPost(eventName: string, callback: (unk0: PlayerControllerWrapper, unk1: any, unk2: string) => void): void;

        /** void GameWrapper::HookEventWithCallerPost(std::string eventName, std::function<void (BallWrapper, void *, std::basic_string<char>)> callback) [member function] */
        public HookEventWithCallerPost(eventName: string, callback: (unk0: BallWrapper, unk1: any, unk2: string) => void): void;

        /** GameWrapper::pimpl [variable] */
        //pimpl: undefined;

    }

    /** SequenceWrapper [class] */
    class SequenceWrapper extends SequenceOpWrapper {
        // Public:
        /** SequenceWrapper::SequenceWrapper(uintptr_t mem) [constructor] */
        public constructor(mem: bigint);

        /** ArrayWrapper<SequenceObjectWrapper> SequenceWrapper::GetSequenceObjects() [member function] */
        public GetSequenceObjects(): ArrayWrapper_SequenceObjectWrapper;

        /** ArrayWrapper<SequenceWrapper> SequenceWrapper::GetNestedSequences() [member function] */
        public GetNestedSequences(): ArrayWrapper_SequenceWrapper;

        /** int SequenceWrapper::ActivateRemoteEvents(std::string const & remote_event_name) const [member function] */
        public ActivateRemoteEvents(remote_event_name: string): number;

        /** std::map<std::basic_string<char>, SequenceVariableWrapper, std::less<std::basic_string<char> >, std::allocator<std::pair<const std::basic_string<char>, SequenceVariableWrapper> > > SequenceWrapper::GetAllSequenceVariables(bool reqursive) [member function] */
        public GetAllSequenceVariables(reqursive: boolean): {[key: string]: SequenceVariableWrapper};

    }

    /** ItemsWrapper [class] */
    class ItemsWrapper extends ObjectWrapper {
        // Public:
        /** ItemsWrapper::ItemsWrapper(uintptr_t gamedata, uintptr_t savedata) [constructor] */
        public constructor(gamedata: bigint, savedata: bigint);

        /** bool ItemsWrapper::IsNull() [member function] */
        public IsNull(): boolean;

        /** ArrayWrapper<ProductWrapper> ItemsWrapper::GetAllProducts() [member function] */
        public GetAllProducts(): ArrayWrapper_ProductWrapper;

        /** ProductWrapper ItemsWrapper::GetProduct(int productId) [member function] */
        public GetProduct(productId: number): ProductWrapper;

        /** OnlineProductWrapper ItemsWrapper::GetOnlineProduct(long long unsigned int instanceID) [member function] */
        public GetOnlineProduct(instanceID: number): OnlineProductWrapper;

        /** ArrayWrapper<OnlineProductWrapper> ItemsWrapper::GetUnlockedProducts() [member function] */
        public GetUnlockedProducts(): ArrayWrapper_OnlineProductWrapper;

        /** ArrayWrapper<ProductWrapper> ItemsWrapper::GetCachedUnlockedProducts() [member function] */
        public GetCachedUnlockedProducts(): ArrayWrapper_ProductWrapper;

        /** ArrayWrapper<OnlineProductWrapper> ItemsWrapper::GetOwnedProducts() [member function] */
        public GetOwnedProducts(): ArrayWrapper_OnlineProductWrapper;

        /** CertifiedStatDatabaseWrapper ItemsWrapper::GetCertifiedStatDB() [member function] */
        public GetCertifiedStatDB(): CertifiedStatDatabaseWrapper;

        /** DataAssetDatabase_ESportsTeamWrapper ItemsWrapper::GetEsportTeamDB() [member function] */
        public GetEsportTeamDB(): DataAssetDatabase_ESportsTeamWrapper;

        /** PaintDatabaseWrapper ItemsWrapper::GetPaintDB() [member function] */
        public GetPaintDB(): PaintDatabaseWrapper;

        /** SpecialEditionDatabaseWrapper ItemsWrapper::GetSpecialEditionDB() [member function] */
        public GetSpecialEditionDB(): SpecialEditionDatabaseWrapper;

        /** UnrealStringWrapper ItemsWrapper::GetCurrentLoadoutName() [member function] */
        public GetCurrentLoadoutName(): UnrealStringWrapper;

        /** LoadoutWrapper ItemsWrapper::GetCurrentLoadout(int teamIndex) [member function] */
        public GetCurrentLoadout(teamIndex: number): LoadoutWrapper;

        /** TradeWrapper ItemsWrapper::GetTradeWrapper() [member function] */
        public GetTradeWrapper(): TradeWrapper;

        /** ProductTradeInWrapper ItemsWrapper::GetProductTradeInWrapper() [member function] */
        public GetProductTradeInWrapper(): ProductTradeInWrapper;

    }

    /** ClubDetailsWrapper [class] */
    class ClubDetailsWrapper extends ClubSettingsWrapper {
        // Public:
        /** ClubDetailsWrapper::ClubDetailsWrapper(uintptr_t mem) [constructor] */
        public constructor(mem: bigint);

        /** long long unsigned int ClubDetailsWrapper::GetClubID() [member function] */
        public GetClubID(): number;

        /** SteamID ClubDetailsWrapper::GetOwnerPlayerID() [member function] */
        public GetOwnerPlayerID(): SteamID;

        /** UniqueIDWrapper ClubDetailsWrapper::GetOwnerPlayerUniqueID() [member function] */
        public GetOwnerPlayerUniqueID(): UniqueIDWrapper;

        /** UnrealStringWrapper ClubDetailsWrapper::GetMotD() [member function] */
        public GetMotD(): UnrealStringWrapper;

        /** long unsigned int ClubDetailsWrapper::GetbVerified() [member function] */
        public GetbVerified(): boolean;

        /** long long unsigned int ClubDetailsWrapper::GetLastUpdatedTime() [member function] */
        public GetLastUpdatedTime(): number;

        /** StructArrayWrapper<ClubMember> ClubDetailsWrapper::GetMembers() [member function] */
        public GetMembers(): StructArrayWrapper_ClubMember;

    }

    /** ClubMember [struct] */
    class ClubMember {
        // Public:
        /** ClubMember::paddingForReasons [variable] */
        //paddingForReasons: undefined;

        /** SteamID ClubMember::GetSteamId() [member function] */
        public GetSteamId(): SteamID;

        /** UniqueIDWrapper ClubMember::GetUniqueID() [member function] */
        public GetUniqueID(): UniqueIDWrapper;

        /** UnrealStringWrapper ClubMember::GetName() [member function] */
        public GetName(): UnrealStringWrapper;

        /** ClubMember::ClubMember() [constructor] */
        public constructor();

    }

    /** MatchmakingWrapper [class] */
    class MatchmakingWrapper extends ObjectWrapper {
        // Public:
        /** MatchmakingWrapper::MatchmakingWrapper(uintptr_t mem) [constructor] */
        public constructor(mem: bigint);

        /** bool MatchmakingWrapper::IsNull() const [member function] */
        public IsNull(): boolean;

        /** bool MatchmakingWrapper::IsSearching() [member function] */
        public IsSearching(): boolean;

        /** int MatchmakingWrapper::GetActiveViewTab() [member function] */
        public GetActiveViewTab(): number;

        /** void MatchmakingWrapper::SetRegionSelection(Region region, bool bSelected) [member function] */
        public SetRegionSelection(region: Region, bSelected: boolean): void;

        /** void MatchmakingWrapper::SetPlaylistSelection(Playlist playlist, bool bSelected) [member function] */
        public SetPlaylistSelection(playlist: Playlist, bSelected: boolean): void;

        /** void MatchmakingWrapper::StartMatchmaking(PlaylistCategory playlist_category) [member function] */
        public StartMatchmaking(playlist_category: PlaylistCategory): void;

        /** void MatchmakingWrapper::CancelMatchmaking() [member function] */
        public CancelMatchmaking(): void;

        /** void MatchmakingWrapper::CreatePrivateMatch(Region region, CustomMatchSettings const & match_settings) [member function] */
        public CreatePrivateMatch(region: Region, match_settings: CustomMatchSettings): void;

        /** void MatchmakingWrapper::JoinPrivateMatch(std::string const & server_name, std::string const & server_password="") [member function] */
        public JoinPrivateMatch(server_name: string, server_password?: string): void;

        /** int MatchmakingWrapper::SeasonEndDays() [member function] */
        public SeasonEndDays(): number;

        /** int MatchmakingWrapper::SeasonEndHours() [member function] */
        public SeasonEndHours(): number;

        /** int MatchmakingWrapper::SeasonEndMinutes() [member function] */
        public SeasonEndMinutes(): number;

        /** int MatchmakingWrapper::GetSeasonTimeRemaining() [member function] */
        public GetSeasonTimeRemaining(): number;

        /** int MatchmakingWrapper::GetSeasonEndTimeSeconds() [member function] */
        public GetSeasonEndTimeSeconds(): number;

        /** bool MatchmakingWrapper::HasSeasonEnded() [member function] */
        public HasSeasonEnded(): boolean;

        /** int MatchmakingWrapper::GetTotalPopulation() [member function] */
        public GetTotalPopulation(): number;

        /** static std::string MatchmakingWrapper::GetRegionID(Region region) [member function] */
        public GetRegionID(region: Region): string;

        /** static std::string MatchmakingWrapper::GetRegionLabel(Region region) [member function] */
        public GetRegionLabel(region: Region): string;

    }

    /** Region [enumeration] */
    enum Region {
        USE = 0,
        EU = 1,
        USW = 2,
        ASC = 3,
        ASM = 4,
        JPN = 5,
        ME = 6,
        OCE = 7,
        SAF = 8,
        SAM = 9,
    }

    /** Playlist [enumeration] */
    enum Playlist {
        CASUAL_STANDARD = 0,
        CASUAL_DOUBLES = 1,
        CASUAL_DUELS = 2,
        CASUAL_CHAOS = 3,
        RANKED_STANDARD = 4,
        RANKED_DOUBLES = 5,
        RANKED_DUELS = 6,
        EXTRAS_RUMBLE = 12,
        EXTRAS_DROPSHOT = 13,
        EXTRAS_HOOPS = 14,
        EXTRAS_SNOWDAY = 15,
    }

    /** PlaylistCategory [enumeration] */
    enum PlaylistCategory {
        CASUAL = 0,
        RANKED = 1,
        EXTRAS = 2,
    }

    /** ClubColorSet [struct] */
    class ClubColorSet {
        // Public:
        /** ClubColorSet::TeamColorID [variable] */
        TeamColorID: number;

        /** ClubColorSet::CustomColorID [variable] */
        CustomColorID: number;

        /** ClubColorSet::bTeamColorSet [variable] */
        bTeamColorSet: boolean;

        /** ClubColorSet::bCustomColorSet [variable] */
        bCustomColorSet: boolean;

        /** ClubColorSet::ClubColorSet() [constructor] */
        public constructor();

    }

    /** CustomMatchTeamSettings [struct] */
    class CustomMatchTeamSettings {
        // Public:
        /** CustomMatchTeamSettings::Name [variable] */
        Name: string;

        /** CustomMatchTeamSettings::Colors [variable] */
        Colors: ClubColorSet;

        /** CustomMatchTeamSettings::GameScore [variable] */
        GameScore: number;

        /** CustomMatchTeamSettings::CustomMatchTeamSettings() [constructor] */
        public constructor();

    }

    /** CustomMatchSettings [struct] */
    class CustomMatchSettings {
        // Public:
        /** CustomMatchSettings::GameTags [variable] */
        GameTags: string;

        /** CustomMatchSettings::MapName [variable] */
        MapName: string;

        /** CustomMatchSettings::ServerName [variable] */
        ServerName: string;

        /** CustomMatchSettings::Password [variable] */
        Password: string;

        /** CustomMatchSettings::BlueTeamSettings [variable] */
        BlueTeamSettings: CustomMatchTeamSettings;

        /** CustomMatchSettings::OrangeTeamSettings [variable] */
        OrangeTeamSettings: CustomMatchTeamSettings;

        /** CustomMatchSettings::GameMode [variable] */
        GameMode: number;

        /** CustomMatchSettings::MaxPlayerCount [variable] */
        MaxPlayerCount: number;

        /** CustomMatchSettings::bPartyMembersOnly [variable] */
        bPartyMembersOnly: boolean;

        /** CustomMatchSettings::bClubServer [variable] */
        bClubServer: boolean;

        /** CustomMatchSettings::CustomMatchSettings() [constructor] */
        public constructor();

    }

    /** SettingsWrapper [class] */
    class SettingsWrapper {
        // Public:
        /** SettingsWrapper::SettingsWrapper() [constructor] */
        public constructor();

        /** ProfileCameraSettings SettingsWrapper::GetCameraSettings() [member function] */
        public GetCameraSettings(): ProfileCameraSettings;

        /** CameraSave SettingsWrapper::GetCameraSaveSettings() [member function] */
        public GetCameraSaveSettings(): CameraSave;

        /** std::map<std::basic_string<char>, std::basic_string<char>, std::less<std::basic_string<char> >, std::allocator<std::pair<const std::basic_string<char>, std::basic_string<char> > > > SettingsWrapper::GetPCBindings() [member function] */
        public GetPCBindings(): {[key: string]: string};

        /** std::map<std::basic_string<char>, std::basic_string<char>, std::less<std::basic_string<char> >, std::allocator<std::pair<const std::basic_string<char>, std::basic_string<char> > > > SettingsWrapper::GetGamepadBindings() [member function] */
        public GetGamepadBindings(): {[key: string]: string};

        /** std::vector<std::pair<std::basic_string<char>, std::basic_string<char> >, std::allocator<std::pair<std::basic_string<char>, std::basic_string<char> > > > SettingsWrapper::GetAllPCBindings() [member function] */
        public GetAllPCBindings(): [string, string][];

        /** std::vector<std::pair<std::basic_string<char>, std::basic_string<char> >, std::allocator<std::pair<std::basic_string<char>, std::basic_string<char> > > > SettingsWrapper::GetAllGamepadBindings() [member function] */
        public GetAllGamepadBindings(): [string, string][];

        /** GamepadSettings SettingsWrapper::GetGamepadSettings() [member function] */
        public GetGamepadSettings(): GamepadSettings;

        /** VideoSettings SettingsWrapper::GetVideoSettings() [member function] */
        public GetVideoSettings(): VideoSettings;

    }

    /** PriWrapper [class] */
    class PriWrapper extends PriXWrapper {
        // Public:
        /** PriWrapper::PriWrapper(uintptr_t mem) [constructor] */
        public constructor(mem: bigint);

        /** int PriWrapper::GetMatchScore() [member function] */
        public GetMatchScore(): number;

        /** void PriWrapper::SetMatchScore(int newMatchScore) [member function] */
        public SetMatchScore(newMatchScore: number): void;

        /** int PriWrapper::GetMatchGoals() [member function] */
        public GetMatchGoals(): number;

        /** void PriWrapper::SetMatchGoals(int newMatchGoals) [member function] */
        public SetMatchGoals(newMatchGoals: number): void;

        /** int PriWrapper::GetMatchOwnGoals() [member function] */
        public GetMatchOwnGoals(): number;

        /** void PriWrapper::SetMatchOwnGoals(int newMatchOwnGoals) [member function] */
        public SetMatchOwnGoals(newMatchOwnGoals: number): void;

        /** int PriWrapper::GetMatchAssists() [member function] */
        public GetMatchAssists(): number;

        /** void PriWrapper::SetMatchAssists(int newMatchAssists) [member function] */
        public SetMatchAssists(newMatchAssists: number): void;

        /** int PriWrapper::GetMatchSaves() [member function] */
        public GetMatchSaves(): number;

        /** void PriWrapper::SetMatchSaves(int newMatchSaves) [member function] */
        public SetMatchSaves(newMatchSaves: number): void;

        /** int PriWrapper::GetMatchShots() [member function] */
        public GetMatchShots(): number;

        /** void PriWrapper::SetMatchShots(int newMatchShots) [member function] */
        public SetMatchShots(newMatchShots: number): void;

        /** int PriWrapper::GetMatchDemolishes() [member function] */
        public GetMatchDemolishes(): number;

        /** void PriWrapper::SetMatchDemolishes(int newMatchDemolishes) [member function] */
        public SetMatchDemolishes(newMatchDemolishes: number): void;

        /** int PriWrapper::GetMatchBonusXP() [member function] */
        public GetMatchBonusXP(): number;

        /** void PriWrapper::SetMatchBonusXP(int newMatchBonusXP) [member function] */
        public SetMatchBonusXP(newMatchBonusXP: number): void;

        /** int PriWrapper::GetMatchBreakoutDamage() [member function] */
        public GetMatchBreakoutDamage(): number;

        /** void PriWrapper::SetMatchBreakoutDamage(int newMatchBreakoutDamage) [member function] */
        public SetMatchBreakoutDamage(newMatchBreakoutDamage: number): void;

        /** long unsigned int PriWrapper::GetbMatchMVP() [member function] */
        public GetbMatchMVP(): boolean;

        /** void PriWrapper::SetbMatchMVP(long unsigned int newbMatchMVP) [member function] */
        public SetbMatchMVP(newbMatchMVP: boolean): void;

        /** long unsigned int PriWrapper::GetbMatchAdmin() [member function] */
        public GetbMatchAdmin(): boolean;

        /** void PriWrapper::SetbMatchAdmin(long unsigned int newbMatchAdmin) [member function] */
        public SetbMatchAdmin(newbMatchAdmin: boolean): void;

        /** long unsigned int PriWrapper::GetbLoadoutSet() [member function] */
        public GetbLoadoutSet(): boolean;

        /** void PriWrapper::SetbLoadoutSet(long unsigned int newbLoadoutSet) [member function] */
        public SetbLoadoutSet(newbLoadoutSet: boolean): void;

        /** long unsigned int PriWrapper::GetbOnlineLoadoutSet() [member function] */
        public GetbOnlineLoadoutSet(): boolean;

        /** void PriWrapper::SetbOnlineLoadoutSet(long unsigned int newbOnlineLoadoutSet) [member function] */
        public SetbOnlineLoadoutSet(newbOnlineLoadoutSet: boolean): void;

        /** long unsigned int PriWrapper::GetbLoadoutsSet() [member function] */
        public GetbLoadoutsSet(): boolean;

        /** void PriWrapper::SetbLoadoutsSet(long unsigned int newbLoadoutsSet) [member function] */
        public SetbLoadoutsSet(newbLoadoutsSet: boolean): void;

        /** long unsigned int PriWrapper::GetbOnlineLoadoutsSet() [member function] */
        public GetbOnlineLoadoutsSet(): boolean;

        /** void PriWrapper::SetbOnlineLoadoutsSet(long unsigned int newbOnlineLoadoutsSet) [member function] */
        public SetbOnlineLoadoutsSet(newbOnlineLoadoutsSet: boolean): void;

        /** long unsigned int PriWrapper::GetbTeamPaintSet() [member function] */
        public GetbTeamPaintSet(): boolean;

        /** void PriWrapper::SetbTeamPaintSet(long unsigned int newbTeamPaintSet) [member function] */
        public SetbTeamPaintSet(newbTeamPaintSet: boolean): void;

        /** long unsigned int PriWrapper::GetbReady() [member function] */
        public GetbReady(): boolean;

        /** void PriWrapper::SetbReady(long unsigned int newbReady) [member function] */
        public SetbReady(newbReady: boolean): void;

        /** long unsigned int PriWrapper::GetbBusy() [member function] */
        public GetbBusy(): boolean;

        /** void PriWrapper::SetbBusy(long unsigned int newbBusy) [member function] */
        public SetbBusy(newbBusy: boolean): void;

        /** long unsigned int PriWrapper::GetbUsingSecondaryCamera() [member function] */
        public GetbUsingSecondaryCamera(): boolean;

        /** void PriWrapper::SetbUsingSecondaryCamera(long unsigned int newbUsingSecondaryCamera) [member function] */
        public SetbUsingSecondaryCamera(newbUsingSecondaryCamera: boolean): void;

        /** long unsigned int PriWrapper::GetbUsingBehindView() [member function] */
        public GetbUsingBehindView(): boolean;

        /** void PriWrapper::SetbUsingBehindView(long unsigned int newbUsingBehindView) [member function] */
        public SetbUsingBehindView(newbUsingBehindView: boolean): void;

        /** long unsigned int PriWrapper::GetbUsingFreecam() [member function] */
        public GetbUsingFreecam(): boolean;

        /** void PriWrapper::SetbUsingFreecam(long unsigned int newbUsingFreecam) [member function] */
        public SetbUsingFreecam(newbUsingFreecam: boolean): void;

        /** long unsigned int PriWrapper::GetbIsInSplitScreen() [member function] */
        public GetbIsInSplitScreen(): boolean;

        /** void PriWrapper::SetbIsInSplitScreen(long unsigned int newbIsInSplitScreen) [member function] */
        public SetbIsInSplitScreen(newbIsInSplitScreen: boolean): void;

        /** long unsigned int PriWrapper::GetbStartVoteToForfeitDisabled() [member function] */
        public GetbStartVoteToForfeitDisabled(): boolean;

        /** void PriWrapper::SetbStartVoteToForfeitDisabled(long unsigned int newbStartVoteToForfeitDisabled) [member function] */
        public SetbStartVoteToForfeitDisabled(newbStartVoteToForfeitDisabled: boolean): void;

        /** long unsigned int PriWrapper::GetbUsingItems() [member function] */
        public GetbUsingItems(): boolean;

        /** void PriWrapper::SetbUsingItems(long unsigned int newbUsingItems) [member function] */
        public SetbUsingItems(newbUsingItems: boolean): void;

        /** long unsigned int PriWrapper::GetPlayerHistoryValid() [member function] */
        public GetPlayerHistoryValid(): boolean;

        /** void PriWrapper::SetPlayerHistoryValid(long unsigned int newPlayerHistoryValid) [member function] */
        public SetPlayerHistoryValid(newPlayerHistoryValid: boolean): void;

        /** GameEventWrapper PriWrapper::GetGameEvent() [member function] */
        public GetGameEvent(): GameEventWrapper;

        /** void PriWrapper::SetGameEvent(GameEventWrapper newGameEvent) [member function] */
        public SetGameEvent(newGameEvent: GameEventWrapper): void;

        /** GameEventWrapper PriWrapper::GetReplicatedGameEvent() [member function] */
        public GetReplicatedGameEvent(): GameEventWrapper;

        /** void PriWrapper::SetReplicatedGameEvent(GameEventWrapper newReplicatedGameEvent) [member function] */
        public SetReplicatedGameEvent(newReplicatedGameEvent: GameEventWrapper): void;

        /** CarWrapper PriWrapper::GetCar() [member function] */
        public GetCar(): CarWrapper;

        /** void PriWrapper::SetCar(CarWrapper newCar) [member function] */
        public SetCar(newCar: CarWrapper): void;

        /** int PriWrapper::GetRespawnTimeRemaining() [member function] */
        public GetRespawnTimeRemaining(): number;

        /** void PriWrapper::SetRespawnTimeRemaining(int newRespawnTimeRemaining) [member function] */
        public SetRespawnTimeRemaining(newRespawnTimeRemaining: number): void;

        /** int PriWrapper::GetWaitingStartTime() [member function] */
        public GetWaitingStartTime(): number;

        /** void PriWrapper::SetWaitingStartTime(int newWaitingStartTime) [member function] */
        public SetWaitingStartTime(newWaitingStartTime: number): void;

        /** float PriWrapper::GetTotalGameTimePlayed() [member function] */
        public GetTotalGameTimePlayed(): number;

        /** void PriWrapper::SetTotalGameTimePlayed(float newTotalGameTimePlayed) [member function] */
        public SetTotalGameTimePlayed(newTotalGameTimePlayed: number): void;

        /** ProfileCameraSettings PriWrapper::GetCameraSettings() [member function] */
        public GetCameraSettings(): ProfileCameraSettings;

        /** void PriWrapper::SetCameraSettings(ProfileCameraSettings newCameraSettings) [member function] */
        public SetCameraSettings(newCameraSettings: ProfileCameraSettings): void;

        /** unsigned char PriWrapper::GetCameraPitch() [member function] */
        public GetCameraPitch(): number;

        /** void PriWrapper::SetCameraPitch(unsigned char newCameraPitch) [member function] */
        public SetCameraPitch(newCameraPitch: number): void;

        /** unsigned char PriWrapper::GetCameraYaw() [member function] */
        public GetCameraYaw(): number;

        /** void PriWrapper::SetCameraYaw(unsigned char newCameraYaw) [member function] */
        public SetCameraYaw(newCameraYaw: number): void;

        /** unsigned char PriWrapper::GetPawnType() [member function] */
        public GetPawnType(): number;

        /** void PriWrapper::SetPawnType(unsigned char newPawnType) [member function] */
        public SetPawnType(newPawnType: number): void;

        /** unsigned char PriWrapper::GetReplicatedWorstNetQualityBeyondLatency() [member function] */
        public GetReplicatedWorstNetQualityBeyondLatency(): number;

        /** void PriWrapper::SetReplicatedWorstNetQualityBeyondLatency(unsigned char newReplicatedWorstNetQualityBeyondLatency) [member function] */
        public SetReplicatedWorstNetQualityBeyondLatency(newReplicatedWorstNetQualityBeyondLatency: number): void;

        /** SteamID PriWrapper::GetPartyLeader() [member function] */
        public GetPartyLeader(): SteamID;

        /** void PriWrapper::SetPartyLeader(SteamID newPartyLeader) [member function] */
        public SetPartyLeader(newPartyLeader: SteamID): void;

        /** UniqueIDWrapper PriWrapper::GetPartyLeaderID() [member function] */
        public GetPartyLeaderID(): UniqueIDWrapper;

        /** void PriWrapper::SetPartyLeader(UniqueIDWrapper newPartyLeader) [member function] */
        public SetPartyLeader(newPartyLeader: UniqueIDWrapper): void;

        /** float PriWrapper::GetDodgeInputThreshold() [member function] */
        public GetDodgeInputThreshold(): number;

        /** void PriWrapper::SetDodgeInputThreshold(float newDodgeInputThreshold) [member function] */
        public SetDodgeInputThreshold(newDodgeInputThreshold: number): void;

        /** float PriWrapper::GetSteeringSensitivity() [member function] */
        public GetSteeringSensitivity(): number;

        /** void PriWrapper::SetSteeringSensitivity(float newSteeringSensitivity) [member function] */
        public SetSteeringSensitivity(newSteeringSensitivity: number): void;

        /** float PriWrapper::GetAirControlSensitivity() [member function] */
        public GetAirControlSensitivity(): number;

        /** void PriWrapper::SetAirControlSensitivity(float newAirControlSensitivity) [member function] */
        public SetAirControlSensitivity(newAirControlSensitivity: number): void;

        /** float PriWrapper::GetNextTimeRestrictedStatEventAllowedTime() [member function] */
        public GetNextTimeRestrictedStatEventAllowedTime(): number;

        /** void PriWrapper::SetNextTimeRestrictedStatEventAllowedTime(float newNextTimeRestrictedStatEventAllowedTime) [member function] */
        public SetNextTimeRestrictedStatEventAllowedTime(newNextTimeRestrictedStatEventAllowedTime: number): void;

        /** float PriWrapper::GetLastTimeRestrictedStatEventTime() [member function] */
        public GetLastTimeRestrictedStatEventTime(): number;

        /** void PriWrapper::SetLastTimeRestrictedStatEventTime(float newLastTimeRestrictedStatEventTime) [member function] */
        public SetLastTimeRestrictedStatEventTime(newLastTimeRestrictedStatEventTime: number): void;

        /** int PriWrapper::GetTimeTillItem() [member function] */
        public GetTimeTillItem(): number;

        /** void PriWrapper::SetTimeTillItem(int newTimeTillItem) [member function] */
        public SetTimeTillItem(newTimeTillItem: number): void;

        /** int PriWrapper::GetMaxTimeTillItem() [member function] */
        public GetMaxTimeTillItem(): number;

        /** void PriWrapper::SetMaxTimeTillItem(int newMaxTimeTillItem) [member function] */
        public SetMaxTimeTillItem(newMaxTimeTillItem: number): void;

        /** int PriWrapper::GetBoostPickups() [member function] */
        public GetBoostPickups(): number;

        /** void PriWrapper::SetBoostPickups(int newBoostPickups) [member function] */
        public SetBoostPickups(newBoostPickups: number): void;

        /** int PriWrapper::GetBallTouches() [member function] */
        public GetBallTouches(): number;

        /** void PriWrapper::SetBallTouches(int newBallTouches) [member function] */
        public SetBallTouches(newBallTouches: number): void;

        /** int PriWrapper::GetCarTouches() [member function] */
        public GetCarTouches(): number;

        /** void PriWrapper::SetCarTouches(int newCarTouches) [member function] */
        public SetCarTouches(newCarTouches: number): void;

        /** PriWrapper PriWrapper::GetReplacingBotPRI() [member function] */
        public GetReplacingBotPRI(): PriWrapper;

        /** void PriWrapper::SetReplacingBotPRI(PriWrapper newReplacingBotPRI) [member function] */
        public SetReplacingBotPRI(newReplacingBotPRI: PriWrapper): void;

        /** long long unsigned int PriWrapper::GetClubID() [member function] */
        public GetClubID(): number;

        /** void PriWrapper::SetClubID(long long unsigned int newClubID) [member function] */
        public SetClubID(newClubID: number): void;

        /** UnrealStringWrapper PriWrapper::GetPublicIP() [member function] */
        public GetPublicIP(): UnrealStringWrapper;

        /** int PriWrapper::GetSpectatorShortcut() [member function] */
        public GetSpectatorShortcut(): number;

        /** void PriWrapper::SetSpectatorShortcut(int newSpectatorShortcut) [member function] */
        public SetSpectatorShortcut(newSpectatorShortcut: number): void;

        /** ClubDetailsWrapper PriWrapper::GetClubDetails() [member function] */
        public GetClubDetails(): ClubDetailsWrapper;

        /** void PriWrapper::__ClubID__ChangeNotifyFunc() [member function] */
        public __ClubID__ChangeNotifyFunc(): void;

        /** void PriWrapper::__PREI__ChangeNotifyFunc() [member function] */
        public __PREI__ChangeNotifyFunc(): void;

        /** void PriWrapper::__ReplicatedWorstNetQualityBeyondLatency__ChangeNotifyFunc() [member function] */
        public __ReplicatedWorstNetQualityBeyondLatency__ChangeNotifyFunc(): void;

        /** void PriWrapper::eventDestroyed() [member function] */
        public eventDestroyed(): void;

        /** void PriWrapper::OnSpectatorShortcutChanged() [member function] */
        public OnSpectatorShortcutChanged(): void;

        /** void PriWrapper::SetSpectatorShortcut2(int InShortcut) [member function] */
        public SetSpectatorShortcut2(InShortcut: number): void;

        /** void PriWrapper::ServerSetPublicIP(std::string IP) [member function] */
        public ServerSetPublicIP(IP: string): void;

        /** void PriWrapper::OnUniqueIdChanged() [member function] */
        public OnUniqueIdChanged(): void;

        /** void PriWrapper::UpdatePlayerAvatarBorder() [member function] */
        public UpdatePlayerAvatarBorder(): void;

        /** void PriWrapper::UpdatePlayerBanner() [member function] */
        public UpdatePlayerBanner(): void;

        /** void PriWrapper::ClientAchievementProgression(int AchievementId, unsigned char AchievementType, float Progress, float MaxProgress) [member function] */
        public ClientAchievementProgression(AchievementId: number, AchievementType: number, Progress: number, MaxProgress: number): void;

        /** void PriWrapper::ClientUnlockAchievement(int AchievementId, unsigned char AchievementType) [member function] */
        public ClientUnlockAchievement(AchievementId: number, AchievementType: number): void;

        /** void PriWrapper::ServerSetPlayerActivatedFX(FXActorWrapper FX) [member function] */
        public ServerSetPlayerActivatedFX(FX: FXActorWrapper): void;

        /** void PriWrapper::UpdateCarLocalPlayer() [member function] */
        public UpdateCarLocalPlayer(): void;

        /** void PriWrapper::OnReplacingBotPRIChanged() [member function] */
        public OnReplacingBotPRIChanged(): void;

        /** void PriWrapper::OnTeamChanged() [member function] */
        public OnTeamChanged(): void;

        /** void PriWrapper::ClearBotReplacement() [member function] */
        public ClearBotReplacement(): void;

        /** void PriWrapper::ReportCheater(std::string Reason) [member function] */
        public ReportCheater(Reason: string): void;

        /** bool PriWrapper::ValidateLoadoutTeamPaints() [member function] */
        public ValidateLoadoutTeamPaints(): boolean;

        /** bool PriWrapper::ValidateLoadoutSlots() [member function] */
        public ValidateLoadoutSlots(): boolean;

        /** void PriWrapper::ValidateLoadoutDLC() [member function] */
        public ValidateLoadoutDLC(): void;

        /** void PriWrapper::OnStartVoteToForfeitDisabledChanged() [member function] */
        public OnStartVoteToForfeitDisabledChanged(): void;

        /** void PriWrapper::SetStartVoteToForfeitDisabled(long unsigned int bDisabled) [member function] */
        public SetStartVoteToForfeitDisabled(bDisabled: boolean): void;

        /** void PriWrapper::ServerVoteToForfeit() [member function] */
        public ServerVoteToForfeit(): void;

        /** void PriWrapper::SetUserCarPreferences(float NewDodgeThreshold, float NewSteeringSensitivity, float NewAirControlSensitivity) [member function] */
        public SetUserCarPreferences(NewDodgeThreshold: number, NewSteeringSensitivity: number, NewAirControlSensitivity: number): void;

        /** void PriWrapper::ServerSetUserCarPreferences(float NewDodgeThreshold, float NewSteeringSensitivity, float NewAirControlSensitivity) [member function] */
        public ServerSetUserCarPreferences(NewDodgeThreshold: number, NewSteeringSensitivity: number, NewAirControlSensitivity: number): void;

        /** int PriWrapper::ValidateUserInt(std::string Reason, int NewValue, int Min, int Max) [member function] */
        public ValidateUserInt(Reason: string, NewValue: number, Min: number, Max: number): number;

        /** float PriWrapper::ValidateUserFloat(std::string Reason, float NewValue, float Min, float Max) [member function] */
        public ValidateUserFloat(Reason: string, NewValue: number, Min: number, Max: number): number;

        /** void PriWrapper::OnPawnTypeChanged() [member function] */
        public OnPawnTypeChanged(): void;

        /** void PriWrapper::SetWaitingPlayer(long unsigned int B) [member function] */
        public SetWaitingPlayer(B: boolean): void;

        /** void PriWrapper::SetPawnType2(unsigned char NewPawnType) [member function] */
        public SetPawnType2(NewPawnType: number): void;

        /** bool PriWrapper::IsPlayer() [member function] */
        public IsPlayer(): boolean;

        /** bool PriWrapper::IsEditor() [member function] */
        public IsEditor(): boolean;

        /** bool PriWrapper::IsSpectator() [member function] */
        public IsSpectator(): boolean;

        /** void PriWrapper::ServerSpectate() [member function] */
        public ServerSpectate(): void;

        /** void PriWrapper::ClientChangeTeamFailed(int TeamNum) [member function] */
        public ClientChangeTeamFailed(TeamNum: number): void;

        /** void PriWrapper::ServerChangeTeam(int TeamNum) [member function] */
        public ServerChangeTeam(TeamNum: number): void;

        /** void PriWrapper::ReplicatePodiumTitles() [member function] */
        public ReplicatePodiumTitles(): void;

        /** void PriWrapper::OnMatchAdmin() [member function] */
        public OnMatchAdmin(): void;

        /** void PriWrapper::OnMVPChange() [member function] */
        public OnMVPChange(): void;

        /** void PriWrapper::NotifyWonMVP() [member function] */
        public NotifyWonMVP(): void;

        /** bool PriWrapper::IsInvalidName() [member function] */
        public IsInvalidName(): boolean;

        /** bool PriWrapper::IsInWarmUpMode() [member function] */
        public IsInWarmUpMode(): boolean;

        /** void PriWrapper::SetReady(long unsigned int bNewReady) [member function] */
        public SetReady(bNewReady: boolean): void;

        /** void PriWrapper::ServerMatchAdminSetPaused(long unsigned int bPause) [member function] */
        public ServerMatchAdminSetPaused(bPause: boolean): void;

        /** void PriWrapper::ServerMatchAdminSetScoreAndTime(int NewScoreTeam0, int NewScoreTeam1, int SecondsRemaining, long unsigned int bOverTime, long unsigned int bRestartRound) [member function] */
        public ServerMatchAdminSetScoreAndTime(NewScoreTeam0: number, NewScoreTeam1: number, SecondsRemaining: number, bOverTime: boolean, bRestartRound: boolean): void;

        /** void PriWrapper::SetMatchAdmin(long unsigned int bIsMatchAdmin) [member function] */
        public SetMatchAdmin(bIsMatchAdmin: boolean): void;

        /** void PriWrapper::ServerReadyUp() [member function] */
        public ServerReadyUp(): void;

        /** bool PriWrapper::ShouldBroadCastWelcomeMessage(long unsigned int bExiting) [member function] */
        public ShouldBroadCastWelcomeMessage(bExiting: boolean): boolean;

        /** void PriWrapper::UpdateOnlineProductStats() [member function] */
        public UpdateOnlineProductStats(): void;

        /** void PriWrapper::SetWaitingStartTime2() [member function] */
        public SetWaitingStartTime2(): void;

        /** void PriWrapper::OnRespawnTimeRemainingChanged() [member function] */
        public OnRespawnTimeRemainingChanged(): void;

        /** void PriWrapper::SetRespawnTime2(int NewTime) [member function] */
        public SetRespawnTime2(NewTime: number): void;

        /** void PriWrapper::ClientScoredGoal(Vector & BallHitLocation) [member function] */
        public ClientScoredGoal(BallHitLocation: Vector): void;

        /** void PriWrapper::OnScoredGoal(Vector & BallHitLocation) [member function] */
        public OnScoredGoal(BallHitLocation: Vector): void;

        /** void PriWrapper::OnRep_SteeringSensitivity() [member function] */
        public OnRep_SteeringSensitivity(): void;

        /** void PriWrapper::OnRep_ClientScorePoint() [member function] */
        public OnRep_ClientScorePoint(): void;

        /** void PriWrapper::ResetScore() [member function] */
        public ResetScore(): void;

        /** void PriWrapper::RemovePoints(int Points) [member function] */
        public RemovePoints(Points: number): void;

        /** void PriWrapper::ScorePoint2(int AdditionalScore) [member function] */
        public ScorePoint2(AdditionalScore: number): void;

        /** bool PriWrapper::CanAwardTimeRestrictedStatEvent() [member function] */
        public CanAwardTimeRestrictedStatEvent(): boolean;

        /** void PriWrapper::RecordTimeRestrictedStatEvent() [member function] */
        public RecordTimeRestrictedStatEvent(): void;

        /** void PriWrapper::ResetTimeRestrictedStatEvent() [member function] */
        public ResetTimeRestrictedStatEvent(): void;

        /** int PriWrapper::GetMatchXP() [member function] */
        public GetMatchXP(): number;

        /** void PriWrapper::CommitStats() [member function] */
        public CommitStats(): void;

        /** void PriWrapper::UpdateFromLoadout() [member function] */
        public UpdateFromLoadout(): void;

        /** void PriWrapper::UpdateUserCarPreferences(AirControlComponentWrapper AirControlComponent) [member function] */
        public UpdateUserCarPreferences(AirControlComponent: AirControlComponentWrapper): void;

        /** void PriWrapper::HandleAirControl(AirControlComponentWrapper AirControlComp) [member function] */
        public HandleAirControl(AirControlComp: AirControlComponentWrapper): void;

        /** void PriWrapper::SetCar2(CarWrapper NewCar) [member function] */
        public SetCar2(NewCar: CarWrapper): void;

        /** bool PriWrapper::IsClientPlayerPRI() [member function] */
        public IsClientPlayerPRI(): boolean;

        /** bool PriWrapper::IsLocalPlayerPRI() [member function] */
        public IsLocalPlayerPRI(): boolean;

        /** void PriWrapper::Unregister() [member function] */
        public Unregister(): void;

        /** void PriWrapper::AddLocalPlayerToGameEvent() [member function] */
        public AddLocalPlayerToGameEvent(): void;

        /** void PriWrapper::OnLoadoutsSetInternal() [member function] */
        public OnLoadoutsSetInternal(): void;

        /** bool PriWrapper::AreLoadoutsSet() [member function] */
        public AreLoadoutsSet(): boolean;

        /** void PriWrapper::OnLoadoutsOnlineSet() [member function] */
        public OnLoadoutsOnlineSet(): void;

        /** void PriWrapper::OnLoadoutsSet2() [member function] */
        public OnLoadoutsSet2(): void;

        /** void PriWrapper::RemoveCertifiedProductStat(long long unsigned int InstanceID) [member function] */
        public RemoveCertifiedProductStat(InstanceID: number): void;

        /** void PriWrapper::InitLoadoutAttributesForTeam(PriXWrapper PRI) [member function] */
        public InitLoadoutAttributesForTeam(PRI: PriXWrapper): void;

        /** bool PriWrapper::ShouldValidateOnlineProducts() [member function] */
        public ShouldValidateOnlineProducts(): boolean;

        /** void PriWrapper::OnSplitScreenStatusChanged() [member function] */
        public OnSplitScreenStatusChanged(): void;

        /** void PriWrapper::ServerSplitScreenStatusChanged(long unsigned int bInSplitScreen) [member function] */
        public ServerSplitScreenStatusChanged(bInSplitScreen: boolean): void;

        /** void PriWrapper::UpdateSplitScreenStatus() [member function] */
        public UpdateSplitScreenStatus(): void;

        /** void PriWrapper::OnPartyLeaderChanged() [member function] */
        public OnPartyLeaderChanged(): void;

        /** void PriWrapper::ServerSetPartyLeader(SteamID & InPartyLeader, long unsigned int bInParty) [member function] */
        public ServerSetPartyLeader(InPartyLeader: SteamID, bInParty: boolean): void;

        /** void PriWrapper::SetPartyLeader2(SteamID & InPartyLeader, long unsigned int bInParty) [member function] */
        public SetPartyLeader2(InPartyLeader: SteamID, bInParty: boolean): void;

        /** void PriWrapper::UpdatePartyStatus() [member function] */
        public UpdatePartyStatus(): void;

        /** void PriWrapper::OnSkillTierChanged() [member function] */
        public OnSkillTierChanged(): void;

        /** void PriWrapper::ReplicateSkillTier(int NewTier) [member function] */
        public ReplicateSkillTier(NewTier: number): void;

        /** void PriWrapper::OnTitleChanged() [member function] */
        public OnTitleChanged(): void;

        /** void PriWrapper::SyncPlayerTitle() [member function] */
        public SyncPlayerTitle(): void;

        /** void PriWrapper::UpdateTitleFromLoadout() [member function] */
        public UpdateTitleFromLoadout(): void;

        /** void PriWrapper::UpdateTitle2() [member function] */
        public UpdateTitle2(): void;

        /** void PriWrapper::GetNewFriendKey() [member function] */
        public GetNewFriendKey(): void;

        /** void PriWrapper::ServerSetPlayerHistoryKey(unsigned char * HistoryKeyArray) [member function] */
        public ServerSetPlayerHistoryKey(HistoryKeyArray: string): void;

        /** void PriWrapper::OnRep_UniqueId() [member function] */
        public OnRep_UniqueId(): void;

        /** void PriWrapper::EventOwnerChanged(PriWrapper PRI) [member function] */
        public EventOwnerChanged(PRI: PriWrapper): void;

        /** void PriWrapper::EventSpectatorShortcutChanged(PriWrapper PRI) [member function] */
        public EventSpectatorShortcutChanged(PRI: PriWrapper): void;

        /** void PriWrapper::EventServerAchievementProgression(PriWrapper PRI, int AchievementId, unsigned char AchievementType, float Progress, float MaxProgress) [member function] */
        public EventServerAchievementProgression(PRI: PriWrapper, AchievementId: number, AchievementType: number, Progress: number, MaxProgress: number): void;

        /** void PriWrapper::EventStartVoteToForfeitDisabledChanged(PriWrapper PRI) [member function] */
        public EventStartVoteToForfeitDisabledChanged(PRI: PriWrapper): void;

        /** void PriWrapper::EventCarPreUpdate(PriWrapper PRI) [member function] */
        public EventCarPreUpdate(PRI: PriWrapper): void;

        /** void PriWrapper::EventVanityChanged() [member function] */
        public EventVanityChanged(): void;

    }

    /** ModalWrapper [class] */
    class ModalWrapper extends ObjectWrapper {
        // Public:
        /** ModalWrapper::ModalWrapper(uintptr_t mem) [constructor] */
        public constructor(mem: bigint);

        /** void ModalWrapper::ShowModal() const [member function] */
        public ShowModal(): void;

        /** void ModalWrapper::CloseModal() [member function] */
        public CloseModal(): void;

        /** void ModalWrapper::SetColor(float r, float g, float b) [member function] */
        public SetColor(r: number, g: number, b: number): void;

        /** void ModalWrapper::SetIcon(std::string const & iconName) [member function] */
        public SetIcon(iconName: string): void;

        /** void ModalWrapper::SetBody(std::string const & bodyHtml) [member function] */
        public SetBody(bodyHtml: string): void;

        /** void ModalWrapper::AddButton(std::string const & button_text, bool is_cancel_button, std::function<void ()> click_callback=nullptr) [member function] */
        public AddButton(button_text: string, is_cancel_button: boolean, click_callback?: () => void): void;

    }

    /** TextInputModalWrapper [class] */
    class TextInputModalWrapper extends ModalWrapper {
        // Public:
        /** TextInputModalWrapper::TextInputModalWrapper(uintptr_t mem) [constructor] */
        public constructor(mem: bigint);

        /** void TextInputModalWrapper::SetTextInput(std::string const & defaultText, int32_t max_text_length, bool password, std::function<void (std::basic_string<char>, bool)> input_callback) [member function] */
        public SetTextInput(defaultText: string, max_text_length: number, password: boolean, input_callback: (unk0: string, unk1: boolean) => void): void;

    }

    /** StatGraphSystemWrapper [class] */
    class StatGraphSystemWrapper extends ObjectWrapper {
        // Public:
        /** StatGraphSystemWrapper::StatGraphSystemWrapper(uintptr_t mem) [constructor] */
        public constructor(mem: bigint);

        /** bool StatGraphSystemWrapper::IsNull() const [member function] */
        public IsNull(): boolean;

        /** float StatGraphSystemWrapper::GetGraphSampleTime() [member function] */
        public GetGraphSampleTime(): number;

        /** void StatGraphSystemWrapper::SetGraphSampleTime(float newGraphSampleTime) [member function] */
        public SetGraphSampleTime(newGraphSampleTime: number): void;

        /** unsigned char StatGraphSystemWrapper::GetGraphLevel() [member function] */
        public GetGraphLevel(): number;

        /** void StatGraphSystemWrapper::SetGraphLevel(unsigned char newGraphLevel) [member function] */
        public SetGraphLevel(newGraphLevel: number): void;

        /** PerfStatGraphWrapper StatGraphSystemWrapper::GetPerfStatGraph() [member function] */
        public GetPerfStatGraph(): PerfStatGraphWrapper;

        /** void StatGraphSystemWrapper::SetPerfStatGraph(PerfStatGraphWrapper newPerfStatGraph) [member function] */
        public SetPerfStatGraph(newPerfStatGraph: PerfStatGraphWrapper): void;

        /** NetStatGraphWrapper StatGraphSystemWrapper::GetNetStatGraph() [member function] */
        public GetNetStatGraph(): NetStatGraphWrapper;

        /** void StatGraphSystemWrapper::SetNetStatGraph(NetStatGraphWrapper newNetStatGraph) [member function] */
        public SetNetStatGraph(newNetStatGraph: NetStatGraphWrapper): void;

        /** InputBufferGraphWrapper StatGraphSystemWrapper::GetInputBufferGraph() [member function] */
        public GetInputBufferGraph(): InputBufferGraphWrapper;

        /** void StatGraphSystemWrapper::SetInputBufferGraph(InputBufferGraphWrapper newInputBufferGraph) [member function] */
        public SetInputBufferGraph(newInputBufferGraph: InputBufferGraphWrapper): void;

        /** ArrayWrapper<StatGraphWrapper> StatGraphSystemWrapper::GetStatGraphs() [member function] */
        public GetStatGraphs(): ArrayWrapper_StatGraphWrapper;

        /** ArrayWrapper<StatGraphWrapper> StatGraphSystemWrapper::GetVisibleStatGraphs() [member function] */
        public GetVisibleStatGraphs(): ArrayWrapper_StatGraphWrapper;

        /** int StatGraphSystemWrapper::GetPreallocGraphLines() [member function] */
        public GetPreallocGraphLines(): number;

        /** void StatGraphSystemWrapper::SetPreallocGraphLines(int newPreallocGraphLines) [member function] */
        public SetPreallocGraphLines(newPreallocGraphLines: number): void;

        /** void StatGraphSystemWrapper::__StatGraphSystem_TA__SetGraphLevel(StatGraphWrapper G) [member function] */
        public __StatGraphSystem_TA__SetGraphLevel(G: StatGraphWrapper): void;

        /** void StatGraphSystemWrapper::PacketReceived(float Latency) [member function] */
        public PacketReceived(Latency: number): void;

        /** void StatGraphSystemWrapper::Graphtime(float Seconds) [member function] */
        public Graphtime(Seconds: number): void;

        /** void StatGraphSystemWrapper::StatGraphNext() [member function] */
        public StatGraphNext(): void;

        /** float StatGraphSystemWrapper::GetGraphSampleTime2(unsigned char Level) [member function] */
        public GetGraphSampleTime2(Level: number): number;

        /** void StatGraphSystemWrapper::SetGraphLevel2(unsigned char Level) [member function] */
        public SetGraphLevel2(Level: number): void;

    }

    /** FXActorWrapper [class] */
    class FXActorWrapper extends ActorWrapper {
        // Public:
        /** FXActorWrapper::FXActorWrapper(uintptr_t mem) [constructor] */
        public constructor(mem: bigint);

        /** long unsigned int FXActorWrapper::GetbDeactivateWhenOwnerDestroyed() [member function] */
        public GetbDeactivateWhenOwnerDestroyed(): boolean;

        /** void FXActorWrapper::SetbDeactivateWhenOwnerDestroyed(long unsigned int newbDeactivateWhenOwnerDestroyed) [member function] */
        public SetbDeactivateWhenOwnerDestroyed(newbDeactivateWhenOwnerDestroyed: boolean): void;

        /** long unsigned int FXActorWrapper::GetbAllowShadowCasting() [member function] */
        public GetbAllowShadowCasting(): boolean;

        /** void FXActorWrapper::SetbAllowShadowCasting(long unsigned int newbAllowShadowCasting) [member function] */
        public SetbAllowShadowCasting(newbAllowShadowCasting: boolean): void;

        /** long unsigned int FXActorWrapper::GetbAutoActivate() [member function] */
        public GetbAutoActivate(): boolean;

        /** void FXActorWrapper::SetbAutoActivate(long unsigned int newbAutoActivate) [member function] */
        public SetbAutoActivate(newbAutoActivate: boolean): void;

        /** long unsigned int FXActorWrapper::GetbRenderInactive() [member function] */
        public GetbRenderInactive(): boolean;

        /** void FXActorWrapper::SetbRenderInactive(long unsigned int newbRenderInactive) [member function] */
        public SetbRenderInactive(newbRenderInactive: boolean): void;

        /** long unsigned int FXActorWrapper::GetbActive() [member function] */
        public GetbActive(): boolean;

        /** void FXActorWrapper::SetbActive(long unsigned int newbActive) [member function] */
        public SetbActive(newbActive: boolean): void;

        /** long unsigned int FXActorWrapper::GetbHadOwner() [member function] */
        public GetbHadOwner(): boolean;

        /** void FXActorWrapper::SetbHadOwner(long unsigned int newbHadOwner) [member function] */
        public SetbHadOwner(newbHadOwner: boolean): void;

        /** FXActorWrapper FXActorWrapper::GetParent() [member function] */
        public GetParent(): FXActorWrapper;

        /** void FXActorWrapper::SetParent(FXActorWrapper newParent) [member function] */
        public SetParent(newParent: FXActorWrapper): void;

        /** ActorWrapper FXActorWrapper::GetAttachmentActor() [member function] */
        public GetAttachmentActor(): ActorWrapper;

        /** void FXActorWrapper::SetAttachmentActor(ActorWrapper newAttachmentActor) [member function] */
        public SetAttachmentActor(newAttachmentActor: ActorWrapper): void;

        /** float FXActorWrapper::GetDestroyWaitTime() [member function] */
        public GetDestroyWaitTime(): number;

        /** void FXActorWrapper::SetDestroyWaitTime(float newDestroyWaitTime) [member function] */
        public SetDestroyWaitTime(newDestroyWaitTime: number): void;

        /** float FXActorWrapper::GetDestroyTime() [member function] */
        public GetDestroyTime(): number;

        /** void FXActorWrapper::SetDestroyTime(float newDestroyTime) [member function] */
        public SetDestroyTime(newDestroyTime: number): void;

        /** int FXActorWrapper::GetEditID() [member function] */
        public GetEditID(): number;

        /** void FXActorWrapper::SetEditID(int newEditID) [member function] */
        public SetEditID(newEditID: number): void;

        /** void FXActorWrapper::eventDumpDebugInfo() [member function] */
        public eventDumpDebugInfo(): void;

        /** void FXActorWrapper::eventDestroyed() [member function] */
        public eventDestroyed(): void;

        /** void FXActorWrapper::Inherit(FXActorWrapper Other) [member function] */
        public Inherit(Other: FXActorWrapper): void;

        /** void FXActorWrapper::ResetParticles() [member function] */
        public ResetParticles(): void;

        /** void FXActorWrapper::StopAllEffects() [member function] */
        public StopAllEffects(): void;

        /** void FXActorWrapper::eventDeactivateAndDestroy() [member function] */
        public eventDeactivateAndDestroy(): void;

        /** void FXActorWrapper::UpdateFXStates() [member function] */
        public UpdateFXStates(): void;

        /** bool FXActorWrapper::IsLocallyControlled() [member function] */
        public IsLocallyControlled(): boolean;

        /** void FXActorWrapper::Deactivate2() [member function] */
        public Deactivate2(): void;

        /** void FXActorWrapper::Activate2() [member function] */
        public Activate2(): void;

        /** void FXActorWrapper::BindTo(FXActorWrapper ParentFXActor) [member function] */
        public BindTo(ParentFXActor: FXActorWrapper): void;

        /** void FXActorWrapper::SetAttachmentActor2(ActorWrapper AttachToActor) [member function] */
        public SetAttachmentActor2(AttachToActor: ActorWrapper): void;

        /** void FXActorWrapper::PostBeginPlay() [member function] */
        public PostBeginPlay(): void;

    }

    /** RBActorWrapper [class] */
    class RBActorWrapper extends ActorWrapper {
        // Public:
        /** RBActorWrapper::RBActorWrapper(uintptr_t mem) [constructor] */
        public constructor(mem: bigint);

        /** float RBActorWrapper::GetMaxLinearSpeed() [member function] */
        public GetMaxLinearSpeed(): number;

        /** void RBActorWrapper::SetMaxLinearSpeed(float newMaxLinearSpeed) [member function] */
        public SetMaxLinearSpeed(newMaxLinearSpeed: number): void;

        /** float RBActorWrapper::GetMaxAngularSpeed() [member function] */
        public GetMaxAngularSpeed(): number;

        /** void RBActorWrapper::SetMaxAngularSpeed(float newMaxAngularSpeed) [member function] */
        public SetMaxAngularSpeed(newMaxAngularSpeed: number): void;

        /** long unsigned int RBActorWrapper::GetbDisableSleeping() [member function] */
        public GetbDisableSleeping(): boolean;

        /** void RBActorWrapper::SetbDisableSleeping(long unsigned int newbDisableSleeping) [member function] */
        public SetbDisableSleeping(newbDisableSleeping: boolean): void;

        /** long unsigned int RBActorWrapper::GetbReplayActor() [member function] */
        public GetbReplayActor(): boolean;

        /** void RBActorWrapper::SetbReplayActor(long unsigned int newbReplayActor) [member function] */
        public SetbReplayActor(newbReplayActor: boolean): void;

        /** long unsigned int RBActorWrapper::GetbFrozen() [member function] */
        public GetbFrozen(): boolean;

        /** void RBActorWrapper::SetbFrozen(long unsigned int newbFrozen) [member function] */
        public SetbFrozen(newbFrozen: boolean): void;

        /** long unsigned int RBActorWrapper::GetbIgnoreSyncing() [member function] */
        public GetbIgnoreSyncing(): boolean;

        /** void RBActorWrapper::SetbIgnoreSyncing(long unsigned int newbIgnoreSyncing) [member function] */
        public SetbIgnoreSyncing(newbIgnoreSyncing: boolean): void;

        /** long unsigned int RBActorWrapper::GetbPhysInitialized() [member function] */
        public GetbPhysInitialized(): boolean;

        /** RBState RBActorWrapper::GetOldRBState() [member function] */
        public GetOldRBState(): RBState;

        /** void RBActorWrapper::SetOldRBState(RBState newOldRBState) [member function] */
        public SetOldRBState(newOldRBState: RBState): void;

        /** RBState RBActorWrapper::GetRBState() [member function] */
        public GetRBState(): RBState;

        /** void RBActorWrapper::SetRBState(RBState newRBState) [member function] */
        public SetRBState(newRBState: RBState): void;

        /** RBState RBActorWrapper::GetReplicatedRBState() [member function] */
        public GetReplicatedRBState(): RBState;

        /** void RBActorWrapper::SetReplicatedRBState(RBState newReplicatedRBState) [member function] */
        public SetReplicatedRBState(newReplicatedRBState: RBState): void;

        /** RBState RBActorWrapper::GetClientCorrectionRBState() [member function] */
        public GetClientCorrectionRBState(): RBState;

        /** void RBActorWrapper::SetClientCorrectionRBState(RBState newClientCorrectionRBState) [member function] */
        public SetClientCorrectionRBState(newClientCorrectionRBState: RBState): void;

        /** WorldContactData RBActorWrapper::GetWorldContact() [member function] */
        public GetWorldContact(): WorldContactData;

        /** void RBActorWrapper::SetWorldContact(WorldContactData newWorldContact) [member function] */
        public SetWorldContact(newWorldContact: WorldContactData): void;

        /** Vector RBActorWrapper::GetSyncErrorLocation() [member function] */
        public GetSyncErrorLocation(): Vector;

        /** float RBActorWrapper::GetSyncErrorAngle() [member function] */
        public GetSyncErrorAngle(): number;

        /** Vector RBActorWrapper::GetSyncErrorAxis() [member function] */
        public GetSyncErrorAxis(): Vector;

        /** FXActorWrapper RBActorWrapper::GetFXActorArchetype() [member function] */
        public GetFXActorArchetype(): FXActorWrapper;

        /** void RBActorWrapper::SetFXActorArchetype(FXActorWrapper newFXActorArchetype) [member function] */
        public SetFXActorArchetype(newFXActorArchetype: FXActorWrapper): void;

        /** FXActorWrapper RBActorWrapper::GetFXActor() [member function] */
        public GetFXActor(): FXActorWrapper;

        /** void RBActorWrapper::SetFXActor(FXActorWrapper newFXActor) [member function] */
        public SetFXActor(newFXActor: FXActorWrapper): void;

        /** int RBActorWrapper::GetLastRBCollisionsFrame() [member function] */
        public GetLastRBCollisionsFrame(): number;

        /** RBActorWrapper RBActorWrapper::GetWeldedActor() [member function] */
        public GetWeldedActor(): RBActorWrapper;

        /** RBActorWrapper RBActorWrapper::GetWeldedTo() [member function] */
        public GetWeldedTo(): RBActorWrapper;

        /** float RBActorWrapper::GetPreWeldMass() [member function] */
        public GetPreWeldMass(): number;

        /** void RBActorWrapper::SetMass(float NewMass) [member function] */
        public SetMass(NewMass: number): void;

        /** void RBActorWrapper::SetConstrained3D(Vector & LinearLower, Vector & LinearUpper, Vector & AngularLower, Vector & AngularUpper) [member function] */
        public SetConstrained3D(LinearLower: Vector, LinearUpper: Vector, AngularLower: Vector, AngularUpper: Vector): void;

        /** void RBActorWrapper::SetConstrained2D(long unsigned int bConstrain2D) [member function] */
        public SetConstrained2D(bConstrain2D: boolean): void;

        /** void RBActorWrapper::SetPhysicsState(RBState & NewState) [member function] */
        public SetPhysicsState(NewState: RBState): void;

        /** void RBActorWrapper::SetFrozen(long unsigned int bEnabled) [member function] */
        public SetFrozen(bEnabled: boolean): void;

        /** void RBActorWrapper::SetMaxAngularSpeed2(float NewMaxSpeed) [member function] */
        public SetMaxAngularSpeed2(NewMaxSpeed: number): void;

        /** void RBActorWrapper::SetMaxLinearSpeed2(float NewMaxSpeed) [member function] */
        public SetMaxLinearSpeed2(NewMaxSpeed: number): void;

        /** void RBActorWrapper::AddTorque(Vector & Torque, unsigned char ForceMode) [member function] */
        public AddTorque(Torque: Vector, ForceMode: number): void;

        /** void RBActorWrapper::AddForce(Vector & Force, unsigned char ForceMode) [member function] */
        public AddForce(Force: Vector, ForceMode: number): void;

        /** void RBActorWrapper::UnWeldRBActor(RBActorWrapper Other) [member function] */
        public UnWeldRBActor(Other: RBActorWrapper): void;

        /** void RBActorWrapper::WeldRBActor2(RBActorWrapper Other, Vector & WeldOffset, Rotator & WeldRotation) [member function] */
        public WeldRBActor2(Other: RBActorWrapper, WeldOffset: Vector, WeldRotation: Rotator): void;

        /** void RBActorWrapper::ReInitRBPhys() [member function] */
        public ReInitRBPhys(): void;

        /** void RBActorWrapper::TerminateRBPhys() [member function] */
        public TerminateRBPhys(): void;

        /** Vector RBActorWrapper::GetCurrentRBLocation() [member function] */
        public GetCurrentRBLocation(): Vector;

        /** RBState RBActorWrapper::GetCurrentRBState() [member function] */
        public GetCurrentRBState(): RBState;

        /** int RBActorWrapper::GetPhysicsFrame() [member function] */
        public GetPhysicsFrame(): number;

        /** float RBActorWrapper::GetPhysicsTime() [member function] */
        public GetPhysicsTime(): number;

        /** void RBActorWrapper::InitAk() [member function] */
        public InitAk(): void;

        /** void RBActorWrapper::eventPreBeginPlay() [member function] */
        public eventPreBeginPlay(): void;

    }

    /** AIControllerWrapper [class] */
    class AIControllerWrapper extends ControllerWrapper {
        // Public:
        /** AIControllerWrapper::AIControllerWrapper(uintptr_t mem) [constructor] */
        public constructor(mem: bigint);

        /** void AIControllerWrapper::DoNothing() [member function] */
        public DoNothing(): void;

    }

    /** BoostWrapper [class] */
    class BoostWrapper extends CarComponentWrapper {
        // Public:
        /** BoostWrapper::BoostWrapper(uintptr_t mem) [constructor] */
        public constructor(mem: bigint);

        /** float BoostWrapper::GetBoostConsumptionRate() [member function] */
        public GetBoostConsumptionRate(): number;

        /** void BoostWrapper::SetBoostConsumptionRate(float newBoostConsumptionRate) [member function] */
        public SetBoostConsumptionRate(newBoostConsumptionRate: number): void;

        /** float BoostWrapper::GetMaxBoostAmount() [member function] */
        public GetMaxBoostAmount(): number;

        /** void BoostWrapper::SetMaxBoostAmount(float newMaxBoostAmount) [member function] */
        public SetMaxBoostAmount(newMaxBoostAmount: number): void;

        /** float BoostWrapper::GetStartBoostAmount() [member function] */
        public GetStartBoostAmount(): number;

        /** void BoostWrapper::SetStartBoostAmount(float newStartBoostAmount) [member function] */
        public SetStartBoostAmount(newStartBoostAmount: number): void;

        /** float BoostWrapper::GetCurrentBoostAmount() [member function] */
        public GetCurrentBoostAmount(): number;

        /** void BoostWrapper::SetCurrentBoostAmount(float newCurrentBoostAmount) [member function] */
        public SetCurrentBoostAmount(newCurrentBoostAmount: number): void;

        /** float BoostWrapper::GetBoostModifier() [member function] */
        public GetBoostModifier(): number;

        /** void BoostWrapper::SetBoostModifier(float newBoostModifier) [member function] */
        public SetBoostModifier(newBoostModifier: number): void;

        /** float BoostWrapper::GetLastBoostAmountRequestTime() [member function] */
        public GetLastBoostAmountRequestTime(): number;

        /** void BoostWrapper::SetLastBoostAmountRequestTime(float newLastBoostAmountRequestTime) [member function] */
        public SetLastBoostAmountRequestTime(newLastBoostAmountRequestTime: number): void;

        /** float BoostWrapper::GetLastBoostAmount() [member function] */
        public GetLastBoostAmount(): number;

        /** void BoostWrapper::SetLastBoostAmount(float newLastBoostAmount) [member function] */
        public SetLastBoostAmount(newLastBoostAmount: number): void;

        /** long unsigned int BoostWrapper::GetbPendingConfirmBoostAmount() [member function] */
        public GetbPendingConfirmBoostAmount(): boolean;

        /** void BoostWrapper::SetbPendingConfirmBoostAmount(long unsigned int newbPendingConfirmBoostAmount) [member function] */
        public SetbPendingConfirmBoostAmount(newbPendingConfirmBoostAmount: boolean): void;

        /** long unsigned int BoostWrapper::GetbNoBoost() [member function] */
        public GetbNoBoost(): boolean;

        /** void BoostWrapper::SetbNoBoost(long unsigned int newbNoBoost) [member function] */
        public SetbNoBoost(newbNoBoost: boolean): void;

        /** float BoostWrapper::GetBoostForce() [member function] */
        public GetBoostForce(): number;

        /** void BoostWrapper::SetBoostForce(float newBoostForce) [member function] */
        public SetBoostForce(newBoostForce: number): void;

        /** float BoostWrapper::GetMinBoostTime() [member function] */
        public GetMinBoostTime(): number;

        /** void BoostWrapper::SetMinBoostTime(float newMinBoostTime) [member function] */
        public SetMinBoostTime(newMinBoostTime: number): void;

        /** float BoostWrapper::GetRechargeRate() [member function] */
        public GetRechargeRate(): number;

        /** void BoostWrapper::SetRechargeRate(float newRechargeRate) [member function] */
        public SetRechargeRate(newRechargeRate: number): void;

        /** float BoostWrapper::GetRechargeDelay() [member function] */
        public GetRechargeDelay(): number;

        /** void BoostWrapper::SetRechargeDelay(float newRechargeDelay) [member function] */
        public SetRechargeDelay(newRechargeDelay: number): void;

        /** int BoostWrapper::GetUnlimitedBoostRefCount() [member function] */
        public GetUnlimitedBoostRefCount(): number;

        /** void BoostWrapper::SetUnlimitedBoostRefCount(int newUnlimitedBoostRefCount) [member function] */
        public SetUnlimitedBoostRefCount(newUnlimitedBoostRefCount: number): void;

        /** unsigned char BoostWrapper::GetReplicatedBoostAmount() [member function] */
        public GetReplicatedBoostAmount(): number;

        /** void BoostWrapper::SetReplicatedBoostAmount(unsigned char newReplicatedBoostAmount) [member function] */
        public SetReplicatedBoostAmount(newReplicatedBoostAmount: number): void;

        /** bool BoostWrapper::ShouldPredictBoostConsumption() [member function] */
        public ShouldPredictBoostConsumption(): boolean;

        /** void BoostWrapper::ReadReplicatedBoostAmount() [member function] */
        public ReadReplicatedBoostAmount(): void;

        /** void BoostWrapper::eventSetReplicatedBoostAmount() [member function] */
        public eventSetReplicatedBoostAmount(): void;

        /** void BoostWrapper::ApplyForces(float ActiveTime) [member function] */
        public ApplyForces(ActiveTime: number): void;

        /** void BoostWrapper::ClientGiveBoost(float Amount) [member function] */
        public ClientGiveBoost(Amount: number): void;

        /** void BoostWrapper::ConfirmBoostAmount2() [member function] */
        public ConfirmBoostAmount2(): void;

        /** void BoostWrapper::SendConfirmBoostAmount() [member function] */
        public SendConfirmBoostAmount(): void;

        /** void BoostWrapper::ClientFixBoostAmount(float TimeStamp, float Amount) [member function] */
        public ClientFixBoostAmount(TimeStamp: number, Amount: number): void;

        /** void BoostWrapper::ServerConfirmBoostAmount(float TimeStamp, float Amount) [member function] */
        public ServerConfirmBoostAmount(TimeStamp: number, Amount: number): void;

        /** void BoostWrapper::SetRechargeDelay2(float InRechargeDelay) [member function] */
        public SetRechargeDelay2(InRechargeDelay: number): void;

        /** void BoostWrapper::SetRechargeRate2(float InRechargeRate) [member function] */
        public SetRechargeRate2(InRechargeRate: number): void;

        /** void BoostWrapper::SetNoBoost(long unsigned int Enabled) [member function] */
        public SetNoBoost(Enabled: boolean): void;

        /** void BoostWrapper::SetUnlimitedBoost2(long unsigned int Enabled) [member function] */
        public SetUnlimitedBoost2(Enabled: boolean): void;

        /** void BoostWrapper::SetUnlimitedBoostDelayed(long unsigned int Enabled) [member function] */
        public SetUnlimitedBoostDelayed(Enabled: boolean): void;

        /** void BoostWrapper::SetBoostModifier2(float Modifier) [member function] */
        public SetBoostModifier2(Modifier: number): void;

        /** void BoostWrapper::SetBoostAmount(float Amount) [member function] */
        public SetBoostAmount(Amount: number): void;

        /** void BoostWrapper::GiveBoost2(float Amount) [member function] */
        public GiveBoost2(Amount: number): void;

        /** void BoostWrapper::GiveStartingBoost() [member function] */
        public GiveStartingBoost(): void;

        /** void BoostWrapper::GiveFullBoost() [member function] */
        public GiveFullBoost(): void;

        /** float BoostWrapper::GetPercentBoostFull() [member function] */
        public GetPercentBoostFull(): number;

        /** bool BoostWrapper::IsFull() [member function] */
        public IsFull(): boolean;

        /** void BoostWrapper::RemoveFromCar() [member function] */
        public RemoveFromCar(): void;

        /** bool BoostWrapper::CanDeactivate() [member function] */
        public CanDeactivate(): boolean;

        /** bool BoostWrapper::CanActivate() [member function] */
        public CanActivate(): boolean;

    }

    /** DodgeComponentWrapper [class] */
    class DodgeComponentWrapper extends CarComponentWrapper {
        // Public:
        /** DodgeComponentWrapper::DodgeComponentWrapper(uintptr_t mem) [constructor] */
        public constructor(mem: bigint);

        /** float DodgeComponentWrapper::GetDodgeInputThreshold() [member function] */
        public GetDodgeInputThreshold(): number;

        /** void DodgeComponentWrapper::SetDodgeInputThreshold(float newDodgeInputThreshold) [member function] */
        public SetDodgeInputThreshold(newDodgeInputThreshold: number): void;

        /** float DodgeComponentWrapper::GetSideDodgeImpulse() [member function] */
        public GetSideDodgeImpulse(): number;

        /** void DodgeComponentWrapper::SetSideDodgeImpulse(float newSideDodgeImpulse) [member function] */
        public SetSideDodgeImpulse(newSideDodgeImpulse: number): void;

        /** float DodgeComponentWrapper::GetSideDodgeImpulseMaxSpeedScale() [member function] */
        public GetSideDodgeImpulseMaxSpeedScale(): number;

        /** void DodgeComponentWrapper::SetSideDodgeImpulseMaxSpeedScale(float newSideDodgeImpulseMaxSpeedScale) [member function] */
        public SetSideDodgeImpulseMaxSpeedScale(newSideDodgeImpulseMaxSpeedScale: number): void;

        /** float DodgeComponentWrapper::GetForwardDodgeImpulse() [member function] */
        public GetForwardDodgeImpulse(): number;

        /** void DodgeComponentWrapper::SetForwardDodgeImpulse(float newForwardDodgeImpulse) [member function] */
        public SetForwardDodgeImpulse(newForwardDodgeImpulse: number): void;

        /** float DodgeComponentWrapper::GetForwardDodgeImpulseMaxSpeedScale() [member function] */
        public GetForwardDodgeImpulseMaxSpeedScale(): number;

        /** void DodgeComponentWrapper::SetForwardDodgeImpulseMaxSpeedScale(float newForwardDodgeImpulseMaxSpeedScale) [member function] */
        public SetForwardDodgeImpulseMaxSpeedScale(newForwardDodgeImpulseMaxSpeedScale: number): void;

        /** float DodgeComponentWrapper::GetBackwardDodgeImpulse() [member function] */
        public GetBackwardDodgeImpulse(): number;

        /** void DodgeComponentWrapper::SetBackwardDodgeImpulse(float newBackwardDodgeImpulse) [member function] */
        public SetBackwardDodgeImpulse(newBackwardDodgeImpulse: number): void;

        /** float DodgeComponentWrapper::GetBackwardDodgeImpulseMaxSpeedScale() [member function] */
        public GetBackwardDodgeImpulseMaxSpeedScale(): number;

        /** void DodgeComponentWrapper::SetBackwardDodgeImpulseMaxSpeedScale(float newBackwardDodgeImpulseMaxSpeedScale) [member function] */
        public SetBackwardDodgeImpulseMaxSpeedScale(newBackwardDodgeImpulseMaxSpeedScale: number): void;

        /** float DodgeComponentWrapper::GetSideDodgeTorque() [member function] */
        public GetSideDodgeTorque(): number;

        /** void DodgeComponentWrapper::SetSideDodgeTorque(float newSideDodgeTorque) [member function] */
        public SetSideDodgeTorque(newSideDodgeTorque: number): void;

        /** float DodgeComponentWrapper::GetForwardDodgeTorque() [member function] */
        public GetForwardDodgeTorque(): number;

        /** void DodgeComponentWrapper::SetForwardDodgeTorque(float newForwardDodgeTorque) [member function] */
        public SetForwardDodgeTorque(newForwardDodgeTorque: number): void;

        /** float DodgeComponentWrapper::GetDodgeTorqueTime() [member function] */
        public GetDodgeTorqueTime(): number;

        /** void DodgeComponentWrapper::SetDodgeTorqueTime(float newDodgeTorqueTime) [member function] */
        public SetDodgeTorqueTime(newDodgeTorqueTime: number): void;

        /** float DodgeComponentWrapper::GetMinDodgeTorqueTime() [member function] */
        public GetMinDodgeTorqueTime(): number;

        /** void DodgeComponentWrapper::SetMinDodgeTorqueTime(float newMinDodgeTorqueTime) [member function] */
        public SetMinDodgeTorqueTime(newMinDodgeTorqueTime: number): void;

        /** float DodgeComponentWrapper::GetDodgeZDamping() [member function] */
        public GetDodgeZDamping(): number;

        /** void DodgeComponentWrapper::SetDodgeZDamping(float newDodgeZDamping) [member function] */
        public SetDodgeZDamping(newDodgeZDamping: number): void;

        /** float DodgeComponentWrapper::GetDodgeZDampingDelay() [member function] */
        public GetDodgeZDampingDelay(): number;

        /** void DodgeComponentWrapper::SetDodgeZDampingDelay(float newDodgeZDampingDelay) [member function] */
        public SetDodgeZDampingDelay(newDodgeZDampingDelay: number): void;

        /** float DodgeComponentWrapper::GetDodgeZDampingUpTime() [member function] */
        public GetDodgeZDampingUpTime(): number;

        /** void DodgeComponentWrapper::SetDodgeZDampingUpTime(float newDodgeZDampingUpTime) [member function] */
        public SetDodgeZDampingUpTime(newDodgeZDampingUpTime: number): void;

        /** float DodgeComponentWrapper::GetDodgeImpulseScale() [member function] */
        public GetDodgeImpulseScale(): number;

        /** void DodgeComponentWrapper::SetDodgeImpulseScale(float newDodgeImpulseScale) [member function] */
        public SetDodgeImpulseScale(newDodgeImpulseScale: number): void;

        /** float DodgeComponentWrapper::GetDodgeTorqueScale() [member function] */
        public GetDodgeTorqueScale(): number;

        /** void DodgeComponentWrapper::SetDodgeTorqueScale(float newDodgeTorqueScale) [member function] */
        public SetDodgeTorqueScale(newDodgeTorqueScale: number): void;

        /** Vector DodgeComponentWrapper::GetDodgeTorque() [member function] */
        public GetDodgeTorque(): Vector;

        /** void DodgeComponentWrapper::SetDodgeTorque(Vector newDodgeTorque) [member function] */
        public SetDodgeTorque(newDodgeTorque: Vector): void;

        /** Vector DodgeComponentWrapper::GetDodgeDirection() [member function] */
        public GetDodgeDirection(): Vector;

        /** void DodgeComponentWrapper::SetDodgeDirection(Vector newDodgeDirection) [member function] */
        public SetDodgeDirection(newDodgeDirection: Vector): void;

        /** void DodgeComponentWrapper::SetDodgeSettings() [member function] */
        public SetDodgeSettings(): void;

        /** void DodgeComponentWrapper::ApplyTorqueForces(float ActiveTime) [member function] */
        public ApplyTorqueForces(ActiveTime: number): void;

        /** void DodgeComponentWrapper::ApplyDodgeImpulse() [member function] */
        public ApplyDodgeImpulse(): void;

        /** Vector DodgeComponentWrapper::GetDodgeImpulse2(Vector & DodgeDir) [member function] */
        public GetDodgeImpulse2(DodgeDir: Vector): Vector;

        /** void DodgeComponentWrapper::ApplyForces(float ActiveTime) [member function] */
        public ApplyForces(ActiveTime: number): void;

        /** bool DodgeComponentWrapper::CanActivate() [member function] */
        public CanActivate(): boolean;

        /** void DodgeComponentWrapper::OnCreated() [member function] */
        public OnCreated(): void;

    }

    /** JumpComponentWrapper [class] */
    class JumpComponentWrapper extends CarComponentWrapper {
        // Public:
        /** JumpComponentWrapper::JumpComponentWrapper(uintptr_t mem) [constructor] */
        public constructor(mem: bigint);

        /** float JumpComponentWrapper::GetMinJumpTime() [member function] */
        public GetMinJumpTime(): number;

        /** void JumpComponentWrapper::SetMinJumpTime(float newMinJumpTime) [member function] */
        public SetMinJumpTime(newMinJumpTime: number): void;

        /** float JumpComponentWrapper::GetJumpImpulse() [member function] */
        public GetJumpImpulse(): number;

        /** void JumpComponentWrapper::SetJumpImpulse(float newJumpImpulse) [member function] */
        public SetJumpImpulse(newJumpImpulse: number): void;

        /** float JumpComponentWrapper::GetJumpForce() [member function] */
        public GetJumpForce(): number;

        /** void JumpComponentWrapper::SetJumpForce(float newJumpForce) [member function] */
        public SetJumpForce(newJumpForce: number): void;

        /** float JumpComponentWrapper::GetJumpForceTime() [member function] */
        public GetJumpForceTime(): number;

        /** void JumpComponentWrapper::SetJumpForceTime(float newJumpForceTime) [member function] */
        public SetJumpForceTime(newJumpForceTime: number): void;

        /** float JumpComponentWrapper::GetPodiumJumpForceTime() [member function] */
        public GetPodiumJumpForceTime(): number;

        /** void JumpComponentWrapper::SetPodiumJumpForceTime(float newPodiumJumpForceTime) [member function] */
        public SetPodiumJumpForceTime(newPodiumJumpForceTime: number): void;

        /** float JumpComponentWrapper::GetJumpImpulseSpeed() [member function] */
        public GetJumpImpulseSpeed(): number;

        /** void JumpComponentWrapper::SetJumpImpulseSpeed(float newJumpImpulseSpeed) [member function] */
        public SetJumpImpulseSpeed(newJumpImpulseSpeed: number): void;

        /** float JumpComponentWrapper::GetJumpAccel() [member function] */
        public GetJumpAccel(): number;

        /** void JumpComponentWrapper::SetJumpAccel(float newJumpAccel) [member function] */
        public SetJumpAccel(newJumpAccel: number): void;

        /** float JumpComponentWrapper::GetMaxJumpHeight() [member function] */
        public GetMaxJumpHeight(): number;

        /** void JumpComponentWrapper::SetMaxJumpHeight(float newMaxJumpHeight) [member function] */
        public SetMaxJumpHeight(newMaxJumpHeight: number): void;

        /** float JumpComponentWrapper::GetMaxJumpHeightTime() [member function] */
        public GetMaxJumpHeightTime(): number;

        /** void JumpComponentWrapper::SetMaxJumpHeightTime(float newMaxJumpHeightTime) [member function] */
        public SetMaxJumpHeightTime(newMaxJumpHeightTime: number): void;

        /** long unsigned int JumpComponentWrapper::GetbDeactivate() [member function] */
        public GetbDeactivate(): boolean;

        /** void JumpComponentWrapper::SetbDeactivate(long unsigned int newbDeactivate) [member function] */
        public SetbDeactivate(newbDeactivate: boolean): void;

        /** void JumpComponentWrapper::ApplyForces(float ActiveTime) [member function] */
        public ApplyForces(ActiveTime: number): void;

        /** void JumpComponentWrapper::CacheJumpData() [member function] */
        public CacheJumpData(): void;

        /** void JumpComponentWrapper::OnCreated() [member function] */
        public OnCreated(): void;

    }

    /** DoubleJumpComponentWrapper [class] */
    class DoubleJumpComponentWrapper extends CarComponentWrapper {
        // Public:
        /** DoubleJumpComponentWrapper::DoubleJumpComponentWrapper(uintptr_t mem) [constructor] */
        public constructor(mem: bigint);

        /** void DoubleJumpComponentWrapper::SetJumpImpulse(float newJumpImpulse) [member function] */
        public SetJumpImpulse(newJumpImpulse: number): void;

        /** float DoubleJumpComponentWrapper::GetImpulseScale() [member function] */
        public GetImpulseScale(): number;

        /** void DoubleJumpComponentWrapper::SetImpulseScale(float newImpulseScale) [member function] */
        public SetImpulseScale(newImpulseScale: number): void;

        /** void DoubleJumpComponentWrapper::ApplyForces(float ActiveTime) [member function] */
        public ApplyForces(ActiveTime: number): void;

        /** void DoubleJumpComponentWrapper::OnCreated() [member function] */
        public OnCreated(): void;

    }

    /** VehicleSimWrapper [class] */
    class VehicleSimWrapper extends ObjectWrapper {
        // Public:
        /** VehicleSimWrapper::VehicleSimWrapper(uintptr_t mem) [constructor] */
        public constructor(mem: bigint);

        /** bool VehicleSimWrapper::IsNull() const [member function] */
        public IsNull(): boolean;

        /** ArrayWrapper<WheelWrapper> VehicleSimWrapper::GetWheels() [member function] */
        public GetWheels(): ArrayWrapper_WheelWrapper;

        /** float VehicleSimWrapper::GetDriveTorque() [member function] */
        public GetDriveTorque(): number;

        /** void VehicleSimWrapper::SetDriveTorque(float newDriveTorque) [member function] */
        public SetDriveTorque(newDriveTorque: number): void;

        /** float VehicleSimWrapper::GetBrakeTorque() [member function] */
        public GetBrakeTorque(): number;

        /** void VehicleSimWrapper::SetBrakeTorque(float newBrakeTorque) [member function] */
        public SetBrakeTorque(newBrakeTorque: number): void;

        /** float VehicleSimWrapper::GetStopThreshold() [member function] */
        public GetStopThreshold(): number;

        /** void VehicleSimWrapper::SetStopThreshold(float newStopThreshold) [member function] */
        public SetStopThreshold(newStopThreshold: number): void;

        /** float VehicleSimWrapper::GetIdleBrakeFactor() [member function] */
        public GetIdleBrakeFactor(): number;

        /** void VehicleSimWrapper::SetIdleBrakeFactor(float newIdleBrakeFactor) [member function] */
        public SetIdleBrakeFactor(newIdleBrakeFactor: number): void;

        /** float VehicleSimWrapper::GetOppositeBrakeFactor() [member function] */
        public GetOppositeBrakeFactor(): number;

        /** void VehicleSimWrapper::SetOppositeBrakeFactor(float newOppositeBrakeFactor) [member function] */
        public SetOppositeBrakeFactor(newOppositeBrakeFactor: number): void;

        /** long unsigned int VehicleSimWrapper::GetbUseAckermannSteering() [member function] */
        public GetbUseAckermannSteering(): boolean;

        /** void VehicleSimWrapper::SetbUseAckermannSteering(long unsigned int newbUseAckermannSteering) [member function] */
        public SetbUseAckermannSteering(newbUseAckermannSteering: boolean): void;

        /** long unsigned int VehicleSimWrapper::GetbWasAttached() [member function] */
        public GetbWasAttached(): boolean;

        /** void VehicleSimWrapper::SetbWasAttached(long unsigned int newbWasAttached) [member function] */
        public SetbWasAttached(newbWasAttached: boolean): void;

        /** float VehicleSimWrapper::GetOutputThrottle() [member function] */
        public GetOutputThrottle(): number;

        /** void VehicleSimWrapper::SetOutputThrottle(float newOutputThrottle) [member function] */
        public SetOutputThrottle(newOutputThrottle: number): void;

        /** float VehicleSimWrapper::GetOutputSteer() [member function] */
        public GetOutputSteer(): number;

        /** void VehicleSimWrapper::SetOutputSteer(float newOutputSteer) [member function] */
        public SetOutputSteer(newOutputSteer: number): void;

        /** float VehicleSimWrapper::GetOutputBrake() [member function] */
        public GetOutputBrake(): number;

        /** void VehicleSimWrapper::SetOutputBrake(float newOutputBrake) [member function] */
        public SetOutputBrake(newOutputBrake: number): void;

        /** float VehicleSimWrapper::GetOutputHandbrake() [member function] */
        public GetOutputHandbrake(): number;

        /** void VehicleSimWrapper::SetOutputHandbrake(float newOutputHandbrake) [member function] */
        public SetOutputHandbrake(newOutputHandbrake: number): void;

        /** VehicleWrapper VehicleSimWrapper::GetVehicle() [member function] */
        public GetVehicle(): VehicleWrapper;

        /** void VehicleSimWrapper::SetVehicle(VehicleWrapper newVehicle) [member function] */
        public SetVehicle(newVehicle: VehicleWrapper): void;

        /** CarWrapper VehicleSimWrapper::GetCar() [member function] */
        public GetCar(): CarWrapper;

        /** void VehicleSimWrapper::SetCar(CarWrapper newCar) [member function] */
        public SetCar(newCar: CarWrapper): void;

        /** float VehicleSimWrapper::GetSteeringSensitivity() [member function] */
        public GetSteeringSensitivity(): number;

        /** void VehicleSimWrapper::SetSteeringSensitivity(float newSteeringSensitivity) [member function] */
        public SetSteeringSensitivity(newSteeringSensitivity: number): void;

    }

    /** AirControlComponentWrapper [class] */
    class AirControlComponentWrapper extends CarComponentWrapper {
        // Public:
        /** AirControlComponentWrapper::AirControlComponentWrapper(uintptr_t mem) [constructor] */
        public constructor(mem: bigint);

        /** Rotator AirControlComponentWrapper::GetAirTorque() [member function] */
        public GetAirTorque(): Rotator;

        /** void AirControlComponentWrapper::SetAirTorque(Rotator newAirTorque) [member function] */
        public SetAirTorque(newAirTorque: Rotator): void;

        /** Rotator AirControlComponentWrapper::GetAirDamping() [member function] */
        public GetAirDamping(): Rotator;

        /** void AirControlComponentWrapper::SetAirDamping(Rotator newAirDamping) [member function] */
        public SetAirDamping(newAirDamping: Rotator): void;

        /** float AirControlComponentWrapper::GetThrottleForce() [member function] */
        public GetThrottleForce(): number;

        /** void AirControlComponentWrapper::SetThrottleForce(float newThrottleForce) [member function] */
        public SetThrottleForce(newThrottleForce: number): void;

        /** float AirControlComponentWrapper::GetDodgeDisableTimeRemaining() [member function] */
        public GetDodgeDisableTimeRemaining(): number;

        /** void AirControlComponentWrapper::SetDodgeDisableTimeRemaining(float newDodgeDisableTimeRemaining) [member function] */
        public SetDodgeDisableTimeRemaining(newDodgeDisableTimeRemaining: number): void;

        /** float AirControlComponentWrapper::GetControlScale() [member function] */
        public GetControlScale(): number;

        /** void AirControlComponentWrapper::SetControlScale(float newControlScale) [member function] */
        public SetControlScale(newControlScale: number): void;

        /** float AirControlComponentWrapper::GetAirControlSensitivity() [member function] */
        public GetAirControlSensitivity(): number;

        /** void AirControlComponentWrapper::SetAirControlSensitivity(float newAirControlSensitivity) [member function] */
        public SetAirControlSensitivity(newAirControlSensitivity: number): void;

        /** void AirControlComponentWrapper::ApplyForces(float ActiveTime) [member function] */
        public ApplyForces(ActiveTime: number): void;

        /** void AirControlComponentWrapper::OnCreated() [member function] */
        public OnCreated(): void;

    }

    /** VehicleWrapper [class] */
    class VehicleWrapper extends RBActorWrapper {
        // Public:
        /** VehicleWrapper::VehicleWrapper(uintptr_t mem) [constructor] */
        public constructor(mem: bigint);

        /** long unsigned int VehicleWrapper::GetbCanJump() [member function] */
        public GetbCanJump(): boolean;

        /** void VehicleWrapper::SetbCanJump(long unsigned int newbCanJump) [member function] */
        public SetbCanJump(newbCanJump: boolean): void;

        /** VehicleSimWrapper VehicleWrapper::GetVehicleSim() [member function] */
        public GetVehicleSim(): VehicleSimWrapper;

        /** void VehicleWrapper::SetVehicleSim(VehicleSimWrapper newVehicleSim) [member function] */
        public SetVehicleSim(newVehicleSim: VehicleSimWrapper): void;

        /** StickyForceData VehicleWrapper::GetStickyForce() [member function] */
        public GetStickyForce(): StickyForceData;

        /** void VehicleWrapper::SetStickyForce(StickyForceData newStickyForce) [member function] */
        public SetStickyForce(newStickyForce: StickyForceData): void;

        /** long unsigned int VehicleWrapper::GetbDriving() [member function] */
        public GetbDriving(): boolean;

        /** void VehicleWrapper::SetbDriving(long unsigned int newbDriving) [member function] */
        public SetbDriving(newbDriving: boolean): void;

        /** long unsigned int VehicleWrapper::GetbReplicatedHandbrake() [member function] */
        public GetbReplicatedHandbrake(): boolean;

        /** void VehicleWrapper::SetbReplicatedHandbrake(long unsigned int newbReplicatedHandbrake) [member function] */
        public SetbReplicatedHandbrake(newbReplicatedHandbrake: boolean): void;

        /** long unsigned int VehicleWrapper::GetbJumped() [member function] */
        public GetbJumped(): boolean;

        /** void VehicleWrapper::SetbJumped(long unsigned int newbJumped) [member function] */
        public SetbJumped(newbJumped: boolean): void;

        /** long unsigned int VehicleWrapper::GetbDoubleJumped() [member function] */
        public GetbDoubleJumped(): boolean;

        /** void VehicleWrapper::SetbDoubleJumped(long unsigned int newbDoubleJumped) [member function] */
        public SetbDoubleJumped(newbDoubleJumped: boolean): void;

        /** long unsigned int VehicleWrapper::GetbOnGround() [member function] */
        public GetbOnGround(): boolean;

        /** void VehicleWrapper::SetbOnGround(long unsigned int newbOnGround) [member function] */
        public SetbOnGround(newbOnGround: boolean): void;

        /** long unsigned int VehicleWrapper::GetbSuperSonic() [member function] */
        public GetbSuperSonic(): boolean;

        /** void VehicleWrapper::SetbSuperSonic(long unsigned int newbSuperSonic) [member function] */
        public SetbSuperSonic(newbSuperSonic: boolean): void;

        /** long unsigned int VehicleWrapper::GetbPodiumMode() [member function] */
        public GetbPodiumMode(): boolean;

        /** void VehicleWrapper::SetbPodiumMode(long unsigned int newbPodiumMode) [member function] */
        public SetbPodiumMode(newbPodiumMode: boolean): void;

        /** ControllerInput VehicleWrapper::GetInput() [member function] */
        public GetInput(): ControllerInput;

        /** void VehicleWrapper::SetInput(ControllerInput newInput) [member function] */
        public SetInput(newInput: ControllerInput): void;

        /** unsigned char VehicleWrapper::GetReplicatedThrottle() [member function] */
        public GetReplicatedThrottle(): number;

        /** void VehicleWrapper::SetReplicatedThrottle(unsigned char newReplicatedThrottle) [member function] */
        public SetReplicatedThrottle(newReplicatedThrottle: number): void;

        /** unsigned char VehicleWrapper::GetReplicatedSteer() [member function] */
        public GetReplicatedSteer(): number;

        /** void VehicleWrapper::SetReplicatedSteer(unsigned char newReplicatedSteer) [member function] */
        public SetReplicatedSteer(newReplicatedSteer: number): void;

        /** AIControllerWrapper VehicleWrapper::GetAIController() [member function] */
        public GetAIController(): AIControllerWrapper;

        /** PlayerControllerWrapper VehicleWrapper::GetPlayerController() [member function] */
        public GetPlayerController(): PlayerControllerWrapper;

        /** void VehicleWrapper::SetPlayerController(PlayerControllerWrapper newPlayerController) [member function] */
        public SetPlayerController(newPlayerController: PlayerControllerWrapper): void;

        /** PriWrapper VehicleWrapper::GetPRI() [member function] */
        public GetPRI(): PriWrapper;

        /** void VehicleWrapper::SetPRI(PriWrapper newPRI) [member function] */
        public SetPRI(newPRI: PriWrapper): void;

        /** int VehicleWrapper::GetVehicleUpdateTag() [member function] */
        public GetVehicleUpdateTag(): number;

        /** void VehicleWrapper::SetVehicleUpdateTag(int newVehicleUpdateTag) [member function] */
        public SetVehicleUpdateTag(newVehicleUpdateTag: number): void;

        /** Vector VehicleWrapper::GetLocalCollisionOffset() [member function] */
        public GetLocalCollisionOffset(): Vector;

        /** void VehicleWrapper::SetLocalCollisionOffset(Vector newLocalCollisionOffset) [member function] */
        public SetLocalCollisionOffset(newLocalCollisionOffset: Vector): void;

        /** Vector VehicleWrapper::GetLocalCollisionExtent() [member function] */
        public GetLocalCollisionExtent(): Vector;

        /** void VehicleWrapper::SetLocalCollisionExtent(Vector newLocalCollisionExtent) [member function] */
        public SetLocalCollisionExtent(newLocalCollisionExtent: Vector): void;

        /** int VehicleWrapper::GetLastBallTouchFrame() [member function] */
        public GetLastBallTouchFrame(): number;

        /** void VehicleWrapper::SetLastBallTouchFrame(int newLastBallTouchFrame) [member function] */
        public SetLastBallTouchFrame(newLastBallTouchFrame: number): void;

        /** int VehicleWrapper::GetLastBallImpactFrame() [member function] */
        public GetLastBallImpactFrame(): number;

        /** void VehicleWrapper::SetLastBallImpactFrame(int newLastBallImpactFrame) [member function] */
        public SetLastBallImpactFrame(newLastBallImpactFrame: number): void;

        /** BoostWrapper VehicleWrapper::GetBoostComponent() [member function] */
        public GetBoostComponent(): BoostWrapper;

        /** DodgeComponentWrapper VehicleWrapper::GetDodgeComponent() [member function] */
        public GetDodgeComponent(): DodgeComponentWrapper;

        /** AirControlComponentWrapper VehicleWrapper::GetAirControlComponent() [member function] */
        public GetAirControlComponent(): AirControlComponentWrapper;

        /** JumpComponentWrapper VehicleWrapper::GetJumpComponent() [member function] */
        public GetJumpComponent(): JumpComponentWrapper;

        /** DoubleJumpComponentWrapper VehicleWrapper::GetDoubleJumpComponent() [member function] */
        public GetDoubleJumpComponent(): DoubleJumpComponentWrapper;

        /** void VehicleWrapper::SetDoubleJumpComponent(DoubleJumpComponentWrapper newDoubleJumpComponent) [member function] */
        public SetDoubleJumpComponent(newDoubleJumpComponent: DoubleJumpComponentWrapper): void;

        /** float VehicleWrapper::GetTimeBelowSupersonicSpeed() [member function] */
        public GetTimeBelowSupersonicSpeed(): number;

        /** void VehicleWrapper::SetTimeBelowSupersonicSpeed(float newTimeBelowSupersonicSpeed) [member function] */
        public SetTimeBelowSupersonicSpeed(newTimeBelowSupersonicSpeed: number): void;

        /** void VehicleWrapper::ForceNetPacketIfNearBall() [member function] */
        public ForceNetPacketIfNearBall(): void;

        /** bool VehicleWrapper::IsCarWithinForwardEllipticalCone(VehicleWrapper OtherCar, float YawAngleDegrees, float PitchAngleDegrees) [member function] */
        public IsCarWithinForwardEllipticalCone(OtherCar: VehicleWrapper, YawAngleDegrees: number, PitchAngleDegrees: number): boolean;

        /** float VehicleWrapper::GetForwardSpeed() [member function] */
        public GetForwardSpeed(): number;

        /** float VehicleWrapper::GetTimeOffGround() [member function] */
        public GetTimeOffGround(): number;

        /** float VehicleWrapper::GetTimeOnGround() [member function] */
        public GetTimeOnGround(): number;

        /** Vector VehicleWrapper::GetGroundNormal() [member function] */
        public GetGroundNormal(): Vector;

        /** bool VehicleWrapper::IsOnWall() [member function] */
        public IsOnWall(): boolean;

        /** bool VehicleWrapper::IsOnGround() [member function] */
        public IsOnGround(): boolean;

        /** int VehicleWrapper::GetNumWheelWorldContacts() [member function] */
        public GetNumWheelWorldContacts(): number;

        /** int VehicleWrapper::GetNumWheelContacts() [member function] */
        public GetNumWheelContacts(): number;

        /** void VehicleWrapper::ZeroMovementVariables() [member function] */
        public ZeroMovementVariables(): void;

        /** void VehicleWrapper::eventSetVehicleInput(ControllerInput & NewInput) [member function] */
        public eventSetVehicleInput(NewInput: ControllerInput): void;

        /** void VehicleWrapper::EnablePodiumMode() [member function] */
        public EnablePodiumMode(): void;

        /** void VehicleWrapper::SetDriving(long unsigned int bDrive) [member function] */
        public SetDriving(bDrive: boolean): void;

        /** void VehicleWrapper::InitAudioParams() [member function] */
        public InitAudioParams(): void;

        /** void VehicleWrapper::OnPRIChanged() [member function] */
        public OnPRIChanged(): void;

        /** void VehicleWrapper::OnControllerChanged() [member function] */
        public OnControllerChanged(): void;

        /** void VehicleWrapper::UnPossessed() [member function] */
        public UnPossessed(): void;

        /** void VehicleWrapper::EventPRIChanged(VehicleWrapper Vehicle) [member function] */
        public EventPRIChanged(Vehicle: VehicleWrapper): void;

    }

    /** WheelWrapper [class] */
    class WheelWrapper extends ObjectWrapper {
        // Public:
        /** WheelWrapper::WheelWrapper(uintptr_t mem) [constructor] */
        public constructor(mem: bigint);

        /** bool WheelWrapper::IsNull() const [member function] */
        public IsNull(): boolean;

        /** float WheelWrapper::GetSteerFactor() [member function] */
        public GetSteerFactor(): number;

        /** void WheelWrapper::SetSteerFactor(float newSteerFactor) [member function] */
        public SetSteerFactor(newSteerFactor: number): void;

        /** float WheelWrapper::GetWheelRadius() [member function] */
        public GetWheelRadius(): number;

        /** void WheelWrapper::SetWheelRadius(float newWheelRadius) [member function] */
        public SetWheelRadius(newWheelRadius: number): void;

        /** float WheelWrapper::GetSuspensionStiffness() [member function] */
        public GetSuspensionStiffness(): number;

        /** void WheelWrapper::SetSuspensionStiffness(float newSuspensionStiffness) [member function] */
        public SetSuspensionStiffness(newSuspensionStiffness: number): void;

        /** float WheelWrapper::GetSuspensionDampingCompression() [member function] */
        public GetSuspensionDampingCompression(): number;

        /** void WheelWrapper::SetSuspensionDampingCompression(float newSuspensionDampingCompression) [member function] */
        public SetSuspensionDampingCompression(newSuspensionDampingCompression: number): void;

        /** float WheelWrapper::GetSuspensionDampingRelaxation() [member function] */
        public GetSuspensionDampingRelaxation(): number;

        /** void WheelWrapper::SetSuspensionDampingRelaxation(float newSuspensionDampingRelaxation) [member function] */
        public SetSuspensionDampingRelaxation(newSuspensionDampingRelaxation: number): void;

        /** float WheelWrapper::GetSuspensionTravel() [member function] */
        public GetSuspensionTravel(): number;

        /** void WheelWrapper::SetSuspensionTravel(float newSuspensionTravel) [member function] */
        public SetSuspensionTravel(newSuspensionTravel: number): void;

        /** float WheelWrapper::GetSuspensionMaxRaise() [member function] */
        public GetSuspensionMaxRaise(): number;

        /** void WheelWrapper::SetSuspensionMaxRaise(float newSuspensionMaxRaise) [member function] */
        public SetSuspensionMaxRaise(newSuspensionMaxRaise: number): void;

        /** float WheelWrapper::GetContactForceDistance() [member function] */
        public GetContactForceDistance(): number;

        /** void WheelWrapper::SetContactForceDistance(float newContactForceDistance) [member function] */
        public SetContactForceDistance(newContactForceDistance: number): void;

        /** float WheelWrapper::GetSpinSpeedDecayRate() [member function] */
        public GetSpinSpeedDecayRate(): number;

        /** void WheelWrapper::SetSpinSpeedDecayRate(float newSpinSpeedDecayRate) [member function] */
        public SetSpinSpeedDecayRate(newSpinSpeedDecayRate: number): void;

        /** Vector WheelWrapper::GetBoneOffset() [member function] */
        public GetBoneOffset(): Vector;

        /** void WheelWrapper::SetBoneOffset(Vector newBoneOffset) [member function] */
        public SetBoneOffset(newBoneOffset: Vector): void;

        /** Vector WheelWrapper::GetPresetRestPosition() [member function] */
        public GetPresetRestPosition(): Vector;

        /** void WheelWrapper::SetPresetRestPosition(Vector newPresetRestPosition) [member function] */
        public SetPresetRestPosition(newPresetRestPosition: Vector): void;

        /** Vector WheelWrapper::GetLocalSuspensionRayStart() [member function] */
        public GetLocalSuspensionRayStart(): Vector;

        /** void WheelWrapper::SetLocalSuspensionRayStart(Vector newLocalSuspensionRayStart) [member function] */
        public SetLocalSuspensionRayStart(newLocalSuspensionRayStart: Vector): void;

        /** Vector WheelWrapper::GetLocalRestPosition() [member function] */
        public GetLocalRestPosition(): Vector;

        /** void WheelWrapper::SetLocalRestPosition(Vector newLocalRestPosition) [member function] */
        public SetLocalRestPosition(newLocalRestPosition: Vector): void;

        /** VehicleSimWrapper WheelWrapper::GetVehicleSim() [member function] */
        public GetVehicleSim(): VehicleSimWrapper;

        /** void WheelWrapper::SetVehicleSim(VehicleSimWrapper newVehicleSim) [member function] */
        public SetVehicleSim(newVehicleSim: VehicleSimWrapper): void;

        /** int WheelWrapper::GetWheelIndex() [member function] */
        public GetWheelIndex(): number;

        /** void WheelWrapper::SetWheelIndex(int newWheelIndex) [member function] */
        public SetWheelIndex(newWheelIndex: number): void;

        /** WheelContactData WheelWrapper::GetContact() [member function] */
        public GetContact(): WheelContactData;

        /** void WheelWrapper::SetContact(WheelContactData newContact) [member function] */
        public SetContact(newContact: WheelContactData): void;

        /** long unsigned int WheelWrapper::GetbDrawDebug() [member function] */
        public GetbDrawDebug(): boolean;

        /** void WheelWrapper::SetbDrawDebug(long unsigned int newbDrawDebug) [member function] */
        public SetbDrawDebug(newbDrawDebug: boolean): void;

        /** long unsigned int WheelWrapper::GetbHadContact() [member function] */
        public GetbHadContact(): boolean;

        /** void WheelWrapper::SetbHadContact(long unsigned int newbHadContact) [member function] */
        public SetbHadContact(newbHadContact: boolean): void;

        /** float WheelWrapper::GetFrictionCurveInput() [member function] */
        public GetFrictionCurveInput(): number;

        /** void WheelWrapper::SetFrictionCurveInput(float newFrictionCurveInput) [member function] */
        public SetFrictionCurveInput(newFrictionCurveInput: number): void;

        /** float WheelWrapper::GetAerialThrottleToVelocityFactor() [member function] */
        public GetAerialThrottleToVelocityFactor(): number;

        /** void WheelWrapper::SetAerialThrottleToVelocityFactor(float newAerialThrottleToVelocityFactor) [member function] */
        public SetAerialThrottleToVelocityFactor(newAerialThrottleToVelocityFactor: number): void;

        /** float WheelWrapper::GetAerialAccelerationFactor() [member function] */
        public GetAerialAccelerationFactor(): number;

        /** void WheelWrapper::SetAerialAccelerationFactor(float newAerialAccelerationFactor) [member function] */
        public SetAerialAccelerationFactor(newAerialAccelerationFactor: number): void;

        /** float WheelWrapper::GetSpinSpeed() [member function] */
        public GetSpinSpeed(): number;

        /** void WheelWrapper::SetSpinSpeed(float newSpinSpeed) [member function] */
        public SetSpinSpeed(newSpinSpeed: number): void;

        /** Vector WheelWrapper::GetRefWheelLocation() [member function] */
        public GetRefWheelLocation(): Vector;

        /** float WheelWrapper::GetSuspensionDistance() [member function] */
        public GetSuspensionDistance(): number;

        /** float WheelWrapper::GetSteer2() [member function] */
        public GetSteer2(): number;

        /** Vector WheelWrapper::GetLinearVelocity() [member function] */
        public GetLinearVelocity(): Vector;

        /** void WheelWrapper::EventContactChanged(WheelWrapper Wheel) [member function] */
        public EventContactChanged(Wheel: WheelWrapper): void;

    }

    /** PriXWrapper [class] */
    class PriXWrapper extends PlayerReplicationInfoWrapper {
        // Public:
        /** PriXWrapper::PriXWrapper(uintptr_t mem) [constructor] */
        public constructor(mem: bigint);

        /** void PriXWrapper::eventDestroyed() [member function] */
        public eventDestroyed(): void;

        /** void PriXWrapper::OnUniqueIdChanged() [member function] */
        public OnUniqueIdChanged(): void;

        /**
         * void PriXWrapper::SetUniqueId(SteamID & PlayerUniqueId) [member function]
         * @Note renamed because it is not assignable to the same property in parent.
         */
        public SetUniqueId3(PlayerUniqueId: SteamID): void;

        /** void PriXWrapper::UnregisterPlayerFromSession() [member function] */
        public UnregisterPlayerFromSession(): void;

        /** void PriXWrapper::RegisterPlayerWithSession() [member function] */
        public RegisterPlayerWithSession(): void;

        /** void PriXWrapper::OnTeamChanged() [member function] */
        public OnTeamChanged(): void;

        /** void PriXWrapper::SetPlayerTeam(TeamInfoWrapper NewTeam) [member function] */
        public SetPlayerTeam(NewTeam: TeamInfoWrapper): void;

        /** void PriXWrapper::eventOnOwnerChanged() [member function] */
        public eventOnOwnerChanged(): void;

        /** void PriXWrapper::eventSetPlayerName(std::string S) [member function] */
        public eventSetPlayerName(S: string): void;

        /** void PriXWrapper::EventDestroyed(PriXWrapper PRI) [member function] */
        public EventDestroyed(PRI: PriXWrapper): void;

        /** void PriXWrapper::EventTeamChanged(PriXWrapper PRI) [member function] */
        public EventTeamChanged(PRI: PriXWrapper): void;

        /** void PriXWrapper::EventUniqueIdChanged(PriXWrapper PRI) [member function] */
        public EventUniqueIdChanged(PRI: PriXWrapper): void;

        /** void PriXWrapper::EventPlayerNameChanged(PriXWrapper PRI) [member function] */
        public EventPlayerNameChanged(PRI: PriXWrapper): void;

    }

    /** RumblePickupComponentWrapper [class] */
    class RumblePickupComponentWrapper extends CarComponentWrapper {
        // Public:
        /** RumblePickupComponentWrapper::RumblePickupComponentWrapper(uintptr_t mem) [constructor] */
        public constructor(mem: bigint);

        /** UnrealStringWrapper RumblePickupComponentWrapper::GetPickupName() [member function] */
        public GetPickupName(): UnrealStringWrapper;

        /** long unsigned int RumblePickupComponentWrapper::GetbHudIgnoreUseTime() [member function] */
        public GetbHudIgnoreUseTime(): boolean;

        /** void RumblePickupComponentWrapper::SetbHudIgnoreUseTime(long unsigned int newbHudIgnoreUseTime) [member function] */
        public SetbHudIgnoreUseTime(newbHudIgnoreUseTime: boolean): void;

        /** long unsigned int RumblePickupComponentWrapper::GetbHasActivated() [member function] */
        public GetbHasActivated(): boolean;

        /** void RumblePickupComponentWrapper::SetbHasActivated(long unsigned int newbHasActivated) [member function] */
        public SetbHasActivated(newbHasActivated: boolean): void;

        /** long unsigned int RumblePickupComponentWrapper::GetbIsActive() [member function] */
        public GetbIsActive(): boolean;

        /** void RumblePickupComponentWrapper::SetbIsActive(long unsigned int newbIsActive) [member function] */
        public SetbIsActive(newbIsActive: boolean): void;

        /** float RumblePickupComponentWrapper::GetActivationDuration() [member function] */
        public GetActivationDuration(): number;

        /** void RumblePickupComponentWrapper::SetActivationDuration(float newActivationDuration) [member function] */
        public SetActivationDuration(newActivationDuration: number): void;

        /** FXActorWrapper RumblePickupComponentWrapper::GetPickupFXArchetype() [member function] */
        public GetPickupFXArchetype(): FXActorWrapper;

        /** void RumblePickupComponentWrapper::SetPickupFXArchetype(FXActorWrapper newPickupFXArchetype) [member function] */
        public SetPickupFXArchetype(newPickupFXArchetype: FXActorWrapper): void;

        /** FXActorWrapper RumblePickupComponentWrapper::GetPickupFX() [member function] */
        public GetPickupFX(): FXActorWrapper;

        /** void RumblePickupComponentWrapper::SetPickupFX(FXActorWrapper newPickupFX) [member function] */
        public SetPickupFX(newPickupFX: FXActorWrapper): void;

        /** bool RumblePickupComponentWrapper::HasActivated2() [member function] */
        public HasActivated2(): boolean;

        /** RBActorWrapper RumblePickupComponentWrapper::GetClientTarget() [member function] */
        public GetClientTarget(): RBActorWrapper;

        /** void RumblePickupComponentWrapper::OnVehicleSetupComplete() [member function] */
        public OnVehicleSetupComplete(): void;

        /** float RumblePickupComponentWrapper::GetActiveTimePercent() [member function] */
        public GetActiveTimePercent(): number;

        /** void RumblePickupComponentWrapper::PickupEnd() [member function] */
        public PickupEnd(): void;

        /** void RumblePickupComponentWrapper::PickupStart() [member function] */
        public PickupStart(): void;

        /** BoostWrapper RumblePickupComponentWrapper::GetBoostComponent() [member function] */
        public GetBoostComponent(): BoostWrapper;

        /** void RumblePickupComponentWrapper::DeactivatePickup() [member function] */
        public DeactivatePickup(): void;

        /** bool RumblePickupComponentWrapper::TryActivate(RBActorWrapper TargetOverride) [member function] */
        public TryActivate(TargetOverride: RBActorWrapper): boolean;

        /** void RumblePickupComponentWrapper::OnCreated() [member function] */
        public OnCreated(): void;

        /** bool RumblePickupComponentWrapper::CanPickup(CarWrapper InCar) [member function] */
        public CanPickup(InCar: CarWrapper): boolean;

        /** void RumblePickupComponentWrapper::ApplyPickup(CarWrapper InCar) [member function] */
        public ApplyPickup(InCar: CarWrapper): void;

    }

    /** CarComponentWrapper [class] */
    class CarComponentWrapper extends ActorWrapper {
        // Public:
        /** CarComponentWrapper::CarComponentWrapper(uintptr_t mem) [constructor] */
        public constructor(mem: bigint);

        /** FXActorWrapper CarComponentWrapper::GetFXActorArchetype() [member function] */
        public GetFXActorArchetype(): FXActorWrapper;

        /** void CarComponentWrapper::SetFXActorArchetype(FXActorWrapper newFXActorArchetype) [member function] */
        public SetFXActorArchetype(newFXActorArchetype: FXActorWrapper): void;

        /** long unsigned int CarComponentWrapper::GetbDisabled() [member function] */
        public GetbDisabled(): boolean;

        /** void CarComponentWrapper::SetbDisabled(long unsigned int newbDisabled) [member function] */
        public SetbDisabled(newbDisabled: boolean): void;

        /** long unsigned int CarComponentWrapper::GetbAutoActivate() [member function] */
        public GetbAutoActivate(): boolean;

        /** void CarComponentWrapper::SetbAutoActivate(long unsigned int newbAutoActivate) [member function] */
        public SetbAutoActivate(newbAutoActivate: boolean): void;

        /** long unsigned int CarComponentWrapper::GetbSimulateComponent() [member function] */
        public GetbSimulateComponent(): boolean;

        /** void CarComponentWrapper::SetbSimulateComponent(long unsigned int newbSimulateComponent) [member function] */
        public SetbSimulateComponent(newbSimulateComponent: boolean): void;

        /** long unsigned int CarComponentWrapper::GetbCreated() [member function] */
        public GetbCreated(): boolean;

        /** void CarComponentWrapper::SetbCreated(long unsigned int newbCreated) [member function] */
        public SetbCreated(newbCreated: boolean): void;

        /** long unsigned int CarComponentWrapper::GetbActive() [member function] */
        public GetbActive(): boolean;

        /** void CarComponentWrapper::SetbActive(long unsigned int newbActive) [member function] */
        public SetbActive(newbActive: boolean): void;

        /** long unsigned int CarComponentWrapper::GetbRemovedFromCar() [member function] */
        public GetbRemovedFromCar(): boolean;

        /** void CarComponentWrapper::SetbRemovedFromCar(long unsigned int newbRemovedFromCar) [member function] */
        public SetbRemovedFromCar(newbRemovedFromCar: boolean): void;

        /** unsigned char CarComponentWrapper::GetComponentData() [member function] */
        public GetComponentData(): number;

        /** void CarComponentWrapper::SetComponentData(unsigned char newComponentData) [member function] */
        public SetComponentData(newComponentData: number): void;

        /** unsigned char CarComponentWrapper::GetReplicatedActive() [member function] */
        public GetReplicatedActive(): number;

        /** void CarComponentWrapper::SetReplicatedActive(unsigned char newReplicatedActive) [member function] */
        public SetReplicatedActive(newReplicatedActive: number): void;

        /** PriWrapper CarComponentWrapper::GetActivator() [member function] */
        public GetActivator(): PriWrapper;

        /** void CarComponentWrapper::SetActivator(PriWrapper newActivator) [member function] */
        public SetActivator(newActivator: PriWrapper): void;

        /** VehicleWrapper CarComponentWrapper::GetVehicle() [member function] */
        public GetVehicle(): VehicleWrapper;

        /** void CarComponentWrapper::SetVehicle(VehicleWrapper newVehicle) [member function] */
        public SetVehicle(newVehicle: VehicleWrapper): void;

        /** CarWrapper CarComponentWrapper::GetCar() [member function] */
        public GetCar(): CarWrapper;

        /** void CarComponentWrapper::SetCar(CarWrapper newCar) [member function] */
        public SetCar(newCar: CarWrapper): void;

        /** float CarComponentWrapper::GetActivityTime() [member function] */
        public GetActivityTime(): number;

        /** void CarComponentWrapper::SetActivityTime(float newActivityTime) [member function] */
        public SetActivityTime(newActivityTime: number): void;

        /** float CarComponentWrapper::GetReplicatedActivityTime() [member function] */
        public GetReplicatedActivityTime(): number;

        /** void CarComponentWrapper::SetReplicatedActivityTime(float newReplicatedActivityTime) [member function] */
        public SetReplicatedActivityTime(newReplicatedActivityTime: number): void;

        /** FXActorWrapper CarComponentWrapper::GetFXActor() [member function] */
        public GetFXActor(): FXActorWrapper;

        /** void CarComponentWrapper::SetFXActor(FXActorWrapper newFXActor) [member function] */
        public SetFXActor(newFXActor: FXActorWrapper): void;

        /** void CarComponentWrapper::eventFellOutOfWorld() [member function] */
        public eventFellOutOfWorld(): void;

        /** float CarComponentWrapper::GetInactiveTime() [member function] */
        public GetInactiveTime(): number;

        /** float CarComponentWrapper::GetActiveTime() [member function] */
        public GetActiveTime(): number;

        /** void CarComponentWrapper::ApplyForces(float ActiveTime) [member function] */
        public ApplyForces(ActiveTime: number): void;

        /** void CarComponentWrapper::PrePhysicsStep(float DeltaTime) [member function] */
        public PrePhysicsStep(DeltaTime: number): void;

        /** void CarComponentWrapper::RemoveFromCar() [member function] */
        public RemoveFromCar(): void;

        /** bool CarComponentWrapper::CanDeactivate() [member function] */
        public CanDeactivate(): boolean;

        /** bool CarComponentWrapper::ConditionalDeactivate() [member function] */
        public ConditionalDeactivate(): boolean;

        /** bool CarComponentWrapper::CanActivate() [member function] */
        public CanActivate(): boolean;

        /** bool CarComponentWrapper::ConditionalActivate() [member function] */
        public ConditionalActivate(): boolean;

        /** void CarComponentWrapper::SetActive(long unsigned int bNewActive) [member function] */
        public SetActive(bNewActive: boolean): void;

        /** void CarComponentWrapper::Deactivate2() [member function] */
        public Deactivate2(): void;

        /** void CarComponentWrapper::Activate2() [member function] */
        public Activate2(): void;

        /** void CarComponentWrapper::UnregisterCarEvents() [member function] */
        public UnregisterCarEvents(): void;

        /** void CarComponentWrapper::RegisterCarEvents() [member function] */
        public RegisterCarEvents(): void;

        /** void CarComponentWrapper::HandleVehicleSetup(CarWrapper InCar) [member function] */
        public HandleVehicleSetup(InCar: CarWrapper): void;

        /** void CarComponentWrapper::OnVehicleSetupComplete() [member function] */
        public OnVehicleSetupComplete(): void;

        /** void CarComponentWrapper::Create2(CarWrapper OwnerCar, PriWrapper InActivator) [member function] */
        public Create2(OwnerCar: CarWrapper, InActivator: PriWrapper): void;

        /** void CarComponentWrapper::ClientUpdateActive() [member function] */
        public ClientUpdateActive(): void;

        /** void CarComponentWrapper::EventActivationChanged(CarComponentWrapper CarComponent) [member function] */
        public EventActivationChanged(CarComponent: CarComponentWrapper): void;

    }

    /** FlipCarComponentWrapper [class] */
    class FlipCarComponentWrapper extends CarComponentWrapper {
        // Public:
        /** FlipCarComponentWrapper::FlipCarComponentWrapper(uintptr_t mem) [constructor] */
        public constructor(mem: bigint);

        /** float FlipCarComponentWrapper::GetFlipCarImpulse() [member function] */
        public GetFlipCarImpulse(): number;

        /** void FlipCarComponentWrapper::SetFlipCarImpulse(float newFlipCarImpulse) [member function] */
        public SetFlipCarImpulse(newFlipCarImpulse: number): void;

        /** float FlipCarComponentWrapper::GetFlipCarTorque() [member function] */
        public GetFlipCarTorque(): number;

        /** void FlipCarComponentWrapper::SetFlipCarTorque(float newFlipCarTorque) [member function] */
        public SetFlipCarTorque(newFlipCarTorque: number): void;

        /** float FlipCarComponentWrapper::GetFlipCarTime() [member function] */
        public GetFlipCarTime(): number;

        /** void FlipCarComponentWrapper::SetFlipCarTime(float newFlipCarTime) [member function] */
        public SetFlipCarTime(newFlipCarTime: number): void;

        /** long unsigned int FlipCarComponentWrapper::GetbFlipRight() [member function] */
        public GetbFlipRight(): boolean;

        /** void FlipCarComponentWrapper::SetbFlipRight(long unsigned int newbFlipRight) [member function] */
        public SetbFlipRight(newbFlipRight: boolean): void;

        /** void FlipCarComponentWrapper::InitFlip() [member function] */
        public InitFlip(): void;

        /** void FlipCarComponentWrapper::ApplyForces(float ActiveTime) [member function] */
        public ApplyForces(ActiveTime: number): void;

        /** bool FlipCarComponentWrapper::CanActivate() [member function] */
        public CanActivate(): boolean;

        /** void FlipCarComponentWrapper::OnCreated() [member function] */
        public OnCreated(): void;

    }

    /** BallWrapper [class] */
    class BallWrapper extends RBActorWrapper {
        // Public:
        /** BallWrapper::BallWrapper(uintptr_t mem) [constructor] */
        public constructor(mem: bigint);

        /** float BallWrapper::GetLastTouchTime() [member function] */
        public GetLastTouchTime(): number;

        /** PredictionInfo BallWrapper::PredictPosition(float timeAhead) [member function] */
        public PredictPosition(timeAhead: number): PredictionInfo;

        /** FXActorWrapper BallWrapper::GetEndOfGameFXArchetype() [member function] */
        public GetEndOfGameFXArchetype(): FXActorWrapper;

        /** void BallWrapper::SetEndOfGameFXArchetype(FXActorWrapper newEndOfGameFXArchetype) [member function] */
        public SetEndOfGameFXArchetype(newEndOfGameFXArchetype: FXActorWrapper): void;

        /** long unsigned int BallWrapper::GetbAllowPlayerExplosionOverride() [member function] */
        public GetbAllowPlayerExplosionOverride(): boolean;

        /** void BallWrapper::SetbAllowPlayerExplosionOverride(long unsigned int newbAllowPlayerExplosionOverride) [member function] */
        public SetbAllowPlayerExplosionOverride(newbAllowPlayerExplosionOverride: boolean): void;

        /** long unsigned int BallWrapper::GetbNotifyGroundHit() [member function] */
        public GetbNotifyGroundHit(): boolean;

        /** void BallWrapper::SetbNotifyGroundHit(long unsigned int newbNotifyGroundHit) [member function] */
        public SetbNotifyGroundHit(newbNotifyGroundHit: boolean): void;

        /** long unsigned int BallWrapper::GetbEndOfGameHidden() [member function] */
        public GetbEndOfGameHidden(): boolean;

        /** void BallWrapper::SetbEndOfGameHidden(long unsigned int newbEndOfGameHidden) [member function] */
        public SetbEndOfGameHidden(newbEndOfGameHidden: boolean): void;

        /** long unsigned int BallWrapper::GetbFadeIn() [member function] */
        public GetbFadeIn(): boolean;

        /** void BallWrapper::SetbFadeIn(long unsigned int newbFadeIn) [member function] */
        public SetbFadeIn(newbFadeIn: boolean): void;

        /** long unsigned int BallWrapper::GetbFadeOut() [member function] */
        public GetbFadeOut(): boolean;

        /** void BallWrapper::SetbFadeOut(long unsigned int newbFadeOut) [member function] */
        public SetbFadeOut(newbFadeOut: boolean): void;

        /** long unsigned int BallWrapper::GetbPredictionOnGround() [member function] */
        public GetbPredictionOnGround(): boolean;

        /** void BallWrapper::SetbPredictionOnGround(long unsigned int newbPredictionOnGround) [member function] */
        public SetbPredictionOnGround(newbPredictionOnGround: boolean): void;

        /** long unsigned int BallWrapper::GetbCanBeAttached() [member function] */
        public GetbCanBeAttached(): boolean;

        /** void BallWrapper::SetbCanBeAttached(long unsigned int newbCanBeAttached) [member function] */
        public SetbCanBeAttached(newbCanBeAttached: boolean): void;

        /** long unsigned int BallWrapper::GetbItemFreeze() [member function] */
        public GetbItemFreeze(): boolean;

        /** void BallWrapper::SetbItemFreeze(long unsigned int newbItemFreeze) [member function] */
        public SetbItemFreeze(newbItemFreeze: boolean): void;

        /** Vector BallWrapper::GetMagnusCoefficient() [member function] */
        public GetMagnusCoefficient(): Vector;

        /** void BallWrapper::SetMagnusCoefficient(Vector newMagnusCoefficient) [member function] */
        public SetMagnusCoefficient(newMagnusCoefficient: Vector): void;

        /** float BallWrapper::GetRadius() [member function] */
        public GetRadius(): number;

        /** void BallWrapper::SetRadius(float newRadius) [member function] */
        public SetRadius(newRadius: number): void;

        /** float BallWrapper::GetVisualRadius() [member function] */
        public GetVisualRadius(): number;

        /** void BallWrapper::SetVisualRadius(float newVisualRadius) [member function] */
        public SetVisualRadius(newVisualRadius: number): void;

        /** float BallWrapper::GetLastCalculateCarHit() [member function] */
        public GetLastCalculateCarHit(): number;

        /** Vector BallWrapper::GetInitialLocation() [member function] */
        public GetInitialLocation(): Vector;

        /** void BallWrapper::SetInitialLocation(Vector newInitialLocation) [member function] */
        public SetInitialLocation(newInitialLocation: Vector): void;

        /** void BallWrapper::SetInitialRotation(Rotator newInitialRotation) [member function] */
        public SetInitialRotation(newInitialRotation: Rotator): void;

        /** float BallWrapper::GetLastHitWorldTime() [member function] */
        public GetLastHitWorldTime(): number;

        /** float BallWrapper::GetReplicatedBallScale() [member function] */
        public GetReplicatedBallScale(): number;

        /** void BallWrapper::SetReplicatedBallScale(float newReplicatedBallScale) [member function] */
        public SetReplicatedBallScale(newReplicatedBallScale: number): void;

        /** float BallWrapper::GetReplicatedWorldBounceScale() [member function] */
        public GetReplicatedWorldBounceScale(): number;

        /** void BallWrapper::SetReplicatedWorldBounceScale(float newReplicatedWorldBounceScale) [member function] */
        public SetReplicatedWorldBounceScale(newReplicatedWorldBounceScale: number): void;

        /** float BallWrapper::GetReplicatedBallGravityScale() [member function] */
        public GetReplicatedBallGravityScale(): number;

        /** void BallWrapper::SetReplicatedBallGravityScale(float newReplicatedBallGravityScale) [member function] */
        public SetReplicatedBallGravityScale(newReplicatedBallGravityScale: number): void;

        /** float BallWrapper::GetReplicatedBallMaxLinearSpeedScale() [member function] */
        public GetReplicatedBallMaxLinearSpeedScale(): number;

        /** void BallWrapper::SetReplicatedBallMaxLinearSpeedScale(float newReplicatedBallMaxLinearSpeedScale) [member function] */
        public SetReplicatedBallMaxLinearSpeedScale(newReplicatedBallMaxLinearSpeedScale: number): void;

        /** float BallWrapper::GetReplicatedAddedCarBounceScale() [member function] */
        public GetReplicatedAddedCarBounceScale(): number;

        /** void BallWrapper::SetReplicatedAddedCarBounceScale(float newReplicatedAddedCarBounceScale) [member function] */
        public SetReplicatedAddedCarBounceScale(newReplicatedAddedCarBounceScale: number): void;

        /** float BallWrapper::GetAdditionalCarGroundBounceScaleZ() [member function] */
        public GetAdditionalCarGroundBounceScaleZ(): number;

        /** void BallWrapper::SetAdditionalCarGroundBounceScaleZ(float newAdditionalCarGroundBounceScaleZ) [member function] */
        public SetAdditionalCarGroundBounceScaleZ(newAdditionalCarGroundBounceScaleZ: number): void;

        /** float BallWrapper::GetAdditionalCarGroundBounceScaleXY() [member function] */
        public GetAdditionalCarGroundBounceScaleXY(): number;

        /** void BallWrapper::SetAdditionalCarGroundBounceScaleXY(float newAdditionalCarGroundBounceScaleXY) [member function] */
        public SetAdditionalCarGroundBounceScaleXY(newAdditionalCarGroundBounceScaleXY: number): void;

        /** unsigned char BallWrapper::GetHitTeamNum() [member function] */
        public GetHitTeamNum(): number;

        /** void BallWrapper::SetHitTeamNum(unsigned char newHitTeamNum) [member function] */
        public SetHitTeamNum(newHitTeamNum: number): void;

        /** ServerWrapper BallWrapper::GetGameEvent() [member function] */
        public GetGameEvent(): ServerWrapper;

        /** float BallWrapper::GetExplosionTime() [member function] */
        public GetExplosionTime(): number;

        /** void BallWrapper::SetExplosionTime(float newExplosionTime) [member function] */
        public SetExplosionTime(newExplosionTime: number): void;

        /** Vector BallWrapper::GetOldLocation() [member function] */
        public GetOldLocation(): Vector;

        /** void BallWrapper::SetOldLocation(Vector newOldLocation) [member function] */
        public SetOldLocation(newOldLocation: Vector): void;

        /** float BallWrapper::GetPredictionTimestep() [member function] */
        public GetPredictionTimestep(): number;

        /** void BallWrapper::SetPredictionTimestep(float newPredictionTimestep) [member function] */
        public SetPredictionTimestep(newPredictionTimestep: number): void;

        /** float BallWrapper::GetLastPredictionTime() [member function] */
        public GetLastPredictionTime(): number;

        /** void BallWrapper::SetLastPredictionTime(float newLastPredictionTime) [member function] */
        public SetLastPredictionTime(newLastPredictionTime: number): void;

        /** float BallWrapper::GetGroundForce() [member function] */
        public GetGroundForce(): number;

        /** void BallWrapper::SetGroundForce(float newGroundForce) [member function] */
        public SetGroundForce(newGroundForce: number): void;

        /** CarWrapper BallWrapper::GetCurrentAffector() [member function] */
        public GetCurrentAffector(): CarWrapper;

        /** void BallWrapper::SetCurrentAffector(CarWrapper newCurrentAffector) [member function] */
        public SetCurrentAffector(newCurrentAffector: CarWrapper): void;

        /** Vector BallWrapper::GetTrajectoryStartVelocity() [member function] */
        public GetTrajectoryStartVelocity(): Vector;

        /** Rotator BallWrapper::GetTrajectoryStartRotation() [member function] */
        public GetTrajectoryStartRotation(): Rotator;

        /** Vector BallWrapper::GetTrajectoryStartLocation() [member function] */
        public GetTrajectoryStartLocation(): Vector;

        /** bool BallWrapper::ShouldDrawTrajectory() [member function] */
        public ShouldDrawTrajectory(): boolean;

        /** float BallWrapper::GetAdditionalCarBounceScaleZ(CarWrapper Car) [member function] */
        public GetAdditionalCarBounceScaleZ(Car: CarWrapper): number;

        /** void BallWrapper::SetEndOfGameHidden() [member function] */
        public SetEndOfGameHidden(): void;

        /** void BallWrapper::Explode(GoalWrapper ExplosionGoal, Vector & ExplodeLocation, PriWrapper Scorer) [member function] */
        public Explode(ExplosionGoal: GoalWrapper, ExplodeLocation: Vector, Scorer: PriWrapper): void;

        /** void BallWrapper::DoDestroy() [member function] */
        public DoDestroy(): void;

        /** void BallWrapper::DoExplode() [member function] */
        public DoExplode(): void;

        /** void BallWrapper::Launch(Vector & LaunchPosition, Vector & LaunchDirection) [member function] */
        public Launch(LaunchPosition: Vector, LaunchDirection: Vector): void;

        /** void BallWrapper::OnCarTouch(CarWrapper HitCar, unsigned char HitType) [member function] */
        public OnCarTouch(HitCar: CarWrapper, HitType: number): void;

        /** void BallWrapper::RecordCarHit(CarWrapper HitCar, Vector & HitLocation, Vector & HitNormal, unsigned char HitType) [member function] */
        public RecordCarHit(HitCar: CarWrapper, HitLocation: Vector, HitNormal: Vector, HitType: number): void;

        /** bool BallWrapper::IsGroundHit(Vector & HitNormal) [member function] */
        public IsGroundHit(HitNormal: Vector): boolean;

        /** void BallWrapper::FellOutOfWorld() [member function] */
        public FellOutOfWorld(): void;

        /** bool BallWrapper::IsRoundActive() [member function] */
        public IsRoundActive(): boolean;

        /** void BallWrapper::eventOnHitGoal(GoalWrapper Goal, Vector & HitLoc) [member function] */
        public eventOnHitGoal(Goal: GoalWrapper, HitLoc: Vector): void;

        /** void BallWrapper::TurnOff() [member function] */
        public TurnOff(): void;

        /** void BallWrapper::InitAk() [member function] */
        public InitAk(): void;

        /** void BallWrapper::SetWorldBounceScale(float NewScale) [member function] */
        public SetWorldBounceScale(NewScale: number): void;

        /** void BallWrapper::SetCarBounceScale(float NewScale) [member function] */
        public SetCarBounceScale(NewScale: number): void;

        /** void BallWrapper::SetBallMaxLinearSpeedScale(float InMaxLinearSpeedScale) [member function] */
        public SetBallMaxLinearSpeedScale(InMaxLinearSpeedScale: number): void;

        /** void BallWrapper::SetBallGravityScale(float InBallGravityScale) [member function] */
        public SetBallGravityScale(InBallGravityScale: number): void;

        /** void BallWrapper::SetBallScale(float NewScale) [member function] */
        public SetBallScale(NewScale: number): void;

        /** void BallWrapper::EventHitGoal(BallWrapper Ball, GoalWrapper Goal) [member function] */
        public EventHitGoal(Ball: BallWrapper, Goal: GoalWrapper): void;

    }

    /** GoalWrapper [class] */
    class GoalWrapper extends ObjectWrapper {
        // Public:
        /** GoalWrapper::GoalWrapper(uintptr_t mem) [constructor] */
        public constructor(mem: bigint);

        /** bool GoalWrapper::IsNull() const [member function] */
        public IsNull(): boolean;

        /** ActorWrapper GoalWrapper::GetGoalOrientation() [member function] */
        public GetGoalOrientation(): ActorWrapper;

        /** void GoalWrapper::SetGoalOrientation(ActorWrapper newGoalOrientation) [member function] */
        public SetGoalOrientation(newGoalOrientation: ActorWrapper): void;

        /** ArrayWrapper<ActorWrapper> GoalWrapper::GetOverrideGoalIndicatorOrientations() [member function] */
        public GetOverrideGoalIndicatorOrientations(): ArrayWrapper_ActorWrapper;

        /** unsigned char GoalWrapper::GetTeamNum() [member function] */
        public GetTeamNum(): number;

        /** void GoalWrapper::SetTeamNum(unsigned char newTeamNum) [member function] */
        public SetTeamNum(newTeamNum: number): void;

        /** FXActorWrapper GoalWrapper::GetScoreFX() [member function] */
        public GetScoreFX(): FXActorWrapper;

        /** void GoalWrapper::SetScoreFX(FXActorWrapper newScoreFX) [member function] */
        public SetScoreFX(newScoreFX: FXActorWrapper): void;

        /** UnrealStringWrapper GoalWrapper::GetGoalIndicatorArchetype() [member function] */
        public GetGoalIndicatorArchetype(): UnrealStringWrapper;

        /** long unsigned int GoalWrapper::GetbNoGoalIndicator() [member function] */
        public GetbNoGoalIndicator(): boolean;

        /** void GoalWrapper::SetbNoGoalIndicator(long unsigned int newbNoGoalIndicator) [member function] */
        public SetbNoGoalIndicator(newbNoGoalIndicator: boolean): void;

        /** long unsigned int GoalWrapper::GetbOnlyGoalsFromDirection() [member function] */
        public GetbOnlyGoalsFromDirection(): boolean;

        /** void GoalWrapper::SetbOnlyGoalsFromDirection(long unsigned int newbOnlyGoalsFromDirection) [member function] */
        public SetbOnlyGoalsFromDirection(newbOnlyGoalsFromDirection: boolean): void;

        /** long unsigned int GoalWrapper::GetbShowFocusExtent() [member function] */
        public GetbShowFocusExtent(): boolean;

        /** void GoalWrapper::SetbShowFocusExtent(long unsigned int newbShowFocusExtent) [member function] */
        public SetbShowFocusExtent(newbShowFocusExtent: boolean): void;

        /** ActorWrapper GoalWrapper::GetGoalDirection() [member function] */
        public GetGoalDirection(): ActorWrapper;

        /** void GoalWrapper::SetGoalDirection(ActorWrapper newGoalDirection) [member function] */
        public SetGoalDirection(newGoalDirection: ActorWrapper): void;

        /** int GoalWrapper::GetPointsToAward() [member function] */
        public GetPointsToAward(): number;

        /** void GoalWrapper::SetPointsToAward(int newPointsToAward) [member function] */
        public SetPointsToAward(newPointsToAward: number): void;

        /** Vector GoalWrapper::GetAutoCamFocusExtent() [member function] */
        public GetAutoCamFocusExtent(): Vector;

        /** void GoalWrapper::SetAutoCamFocusExtent(Vector newAutoCamFocusExtent) [member function] */
        public SetAutoCamFocusExtent(newAutoCamFocusExtent: Vector): void;

        /** Vector GoalWrapper::GetGoalFocusLocationOffset() [member function] */
        public GetGoalFocusLocationOffset(): Vector;

        /** void GoalWrapper::SetGoalFocusLocationOffset(Vector newGoalFocusLocationOffset) [member function] */
        public SetGoalFocusLocationOffset(newGoalFocusLocationOffset: Vector): void;

        /** float GoalWrapper::GetMaxGoalScorerAttachRadius() [member function] */
        public GetMaxGoalScorerAttachRadius(): number;

        /** void GoalWrapper::SetMaxGoalScorerAttachRadius(float newMaxGoalScorerAttachRadius) [member function] */
        public SetMaxGoalScorerAttachRadius(newMaxGoalScorerAttachRadius: number): void;

        /** Vector GoalWrapper::GetGoalScoredDotDirection() [member function] */
        public GetGoalScoredDotDirection(): Vector;

        /** void GoalWrapper::SetGoalScoredDotDirection(Vector newGoalScoredDotDirection) [member function] */
        public SetGoalScoredDotDirection(newGoalScoredDotDirection: Vector): void;

        /** float GoalWrapper::GetMinAttachGoalToScorerDot() [member function] */
        public GetMinAttachGoalToScorerDot(): number;

        /** void GoalWrapper::SetMinAttachGoalToScorerDot(float newMinAttachGoalToScorerDot) [member function] */
        public SetMinAttachGoalToScorerDot(newMinAttachGoalToScorerDot: number): void;

        /** Vector GoalWrapper::GetLocation() [member function] */
        public GetLocation(): Vector;

        /** void GoalWrapper::SetLocation(Vector newLocation) [member function] */
        public SetLocation(newLocation: Vector): void;

        /** Vector GoalWrapper::GetDirection() [member function] */
        public GetDirection(): Vector;

        /** void GoalWrapper::SetDirection(Vector newDirection) [member function] */
        public SetDirection(newDirection: Vector): void;

        /** Vector GoalWrapper::GetRight() [member function] */
        public GetRight(): Vector;

        /** void GoalWrapper::SetRight(Vector newRight) [member function] */
        public SetRight(newRight: Vector): void;

        /** Vector GoalWrapper::GetUp() [member function] */
        public GetUp(): Vector;

        /** void GoalWrapper::SetUp(Vector newUp) [member function] */
        public SetUp(newUp: Vector): void;

        /** Rotator GoalWrapper::GetRotation() [member function] */
        public GetRotation(): Rotator;

        /** void GoalWrapper::SetRotation(Rotator newRotation) [member function] */
        public SetRotation(newRotation: Rotator): void;

        /** Vector GoalWrapper::GetLocalExtent() [member function] */
        public GetLocalExtent(): Vector;

        /** void GoalWrapper::SetLocalExtent(Vector newLocalExtent) [member function] */
        public SetLocalExtent(newLocalExtent: Vector): void;

        /** Vector GoalWrapper::GetWorldCenter() [member function] */
        public GetWorldCenter(): Vector;

        /** void GoalWrapper::SetWorldCenter(Vector newWorldCenter) [member function] */
        public SetWorldCenter(newWorldCenter: Vector): void;

        /** Vector GoalWrapper::GetWorldExtent() [member function] */
        public GetWorldExtent(): Vector;

        /** void GoalWrapper::SetWorldExtent(Vector newWorldExtent) [member function] */
        public SetWorldExtent(newWorldExtent: Vector): void;

        /** Vector GoalWrapper::GetWorldFrontCenter() [member function] */
        public GetWorldFrontCenter(): Vector;

        /** void GoalWrapper::SetWorldFrontCenter(Vector newWorldFrontCenter) [member function] */
        public SetWorldFrontCenter(newWorldFrontCenter: Vector): void;

        /** Vector GoalWrapper::GetGoalFocusExtentCenter() [member function] */
        public GetGoalFocusExtentCenter(): Vector;

        /** void GoalWrapper::Init() [member function] */
        public Init(): void;

        /** void GoalWrapper::eventBeginPlay() [member function] */
        public eventBeginPlay(): void;

    }

    /** TeamInfoWrapper [class] */
    class TeamInfoWrapper extends ActorWrapper {
        // Public:
        /** TeamInfoWrapper::TeamInfoWrapper(uintptr_t mem) [constructor] */
        public constructor(mem: bigint);

        /** UnrealStringWrapper TeamInfoWrapper::GetTeamName() [member function] */
        public GetTeamName(): UnrealStringWrapper;

        /** int TeamInfoWrapper::GetSize() [member function] */
        public GetSize(): number;

        /** void TeamInfoWrapper::SetSize(int newSize) [member function] */
        public SetSize(newSize: number): void;

        /** int TeamInfoWrapper::GetScore() [member function] */
        public GetScore(): number;

        /** void TeamInfoWrapper::SetScore(int newScore) [member function] */
        public SetScore(newScore: number): void;

        /** int TeamInfoWrapper::GetTeamIndex() [member function] */
        public GetTeamIndex(): number;

        /** void TeamInfoWrapper::SetTeamIndex(int newTeamIndex) [member function] */
        public SetTeamIndex(newTeamIndex: number): void;

        /** UnrealColor TeamInfoWrapper::GetTeamColor() [member function] */
        public GetTeamColor(): UnrealColor;

        /** void TeamInfoWrapper::SetTeamColor(UnrealColor newTeamColor) [member function] */
        public SetTeamColor(newTeamColor: UnrealColor): void;

        /** unsigned char TeamInfoWrapper::GetTeamNum() [member function] */
        public GetTeamNum(): number;

        /** void TeamInfoWrapper::eventDestroyed() [member function] */
        public eventDestroyed(): void;

    }

    /** PlayerReplicationInfoWrapper [class] */
    class PlayerReplicationInfoWrapper extends ActorWrapper {
        // Public:
        /** PlayerReplicationInfoWrapper::PlayerReplicationInfoWrapper(uintptr_t mem) [constructor] */
        public constructor(mem: bigint);

        /** OnlinePlatform PlayerReplicationInfoWrapper::GetPlatform() [member function] */
        public GetPlatform(): OnlinePlatform;

        /** int PlayerReplicationInfoWrapper::GetScore() [member function] */
        public GetScore(): number;

        /** void PlayerReplicationInfoWrapper::SetScore(int newScore) [member function] */
        public SetScore(newScore: number): void;

        /** int PlayerReplicationInfoWrapper::GetDeaths() [member function] */
        public GetDeaths(): number;

        /** void PlayerReplicationInfoWrapper::SetDeaths(int newDeaths) [member function] */
        public SetDeaths(newDeaths: number): void;

        /** unsigned char PlayerReplicationInfoWrapper::GetPing() [member function] */
        public GetPing(): number;

        /** void PlayerReplicationInfoWrapper::SetPing(unsigned char newPing) [member function] */
        public SetPing(newPing: number): void;

        /** unsigned char PlayerReplicationInfoWrapper::GetTTSSpeaker() [member function] */
        public GetTTSSpeaker(): number;

        /** void PlayerReplicationInfoWrapper::SetTTSSpeaker(unsigned char newTTSSpeaker) [member function] */
        public SetTTSSpeaker(newTTSSpeaker: number): void;

        /** int PlayerReplicationInfoWrapper::GetNumLives() [member function] */
        public GetNumLives(): number;

        /** void PlayerReplicationInfoWrapper::SetNumLives(int newNumLives) [member function] */
        public SetNumLives(newNumLives: number): void;

        /** UnrealStringWrapper PlayerReplicationInfoWrapper::GetPlayerName() [member function] */
        public GetPlayerName(): UnrealStringWrapper;

        /** UnrealStringWrapper PlayerReplicationInfoWrapper::GetOldName() [member function] */
        public GetOldName(): UnrealStringWrapper;

        /** int PlayerReplicationInfoWrapper::GetPlayerID() [member function] */
        public GetPlayerID(): number;

        /** void PlayerReplicationInfoWrapper::SetPlayerID(int newPlayerID) [member function] */
        public SetPlayerID(newPlayerID: number): void;

        /** TeamInfoWrapper PlayerReplicationInfoWrapper::GetTeam() [member function] */
        public GetTeam(): TeamInfoWrapper;

        /** void PlayerReplicationInfoWrapper::SetTeam(TeamInfoWrapper newTeam) [member function] */
        public SetTeam(newTeam: TeamInfoWrapper): void;

        /** long unsigned int PlayerReplicationInfoWrapper::GetbAdmin() [member function] */
        public GetbAdmin(): boolean;

        /** void PlayerReplicationInfoWrapper::SetbAdmin(long unsigned int newbAdmin) [member function] */
        public SetbAdmin(newbAdmin: boolean): void;

        /** long unsigned int PlayerReplicationInfoWrapper::GetbIsSpectator() [member function] */
        public GetbIsSpectator(): boolean;

        /** void PlayerReplicationInfoWrapper::SetbIsSpectator(long unsigned int newbIsSpectator) [member function] */
        public SetbIsSpectator(newbIsSpectator: boolean): void;

        /** long unsigned int PlayerReplicationInfoWrapper::GetbOnlySpectator() [member function] */
        public GetbOnlySpectator(): boolean;

        /** void PlayerReplicationInfoWrapper::SetbOnlySpectator(long unsigned int newbOnlySpectator) [member function] */
        public SetbOnlySpectator(newbOnlySpectator: boolean): void;

        /** long unsigned int PlayerReplicationInfoWrapper::GetbWaitingPlayer() [member function] */
        public GetbWaitingPlayer(): boolean;

        /** void PlayerReplicationInfoWrapper::SetbWaitingPlayer(long unsigned int newbWaitingPlayer) [member function] */
        public SetbWaitingPlayer(newbWaitingPlayer: boolean): void;

        /** long unsigned int PlayerReplicationInfoWrapper::GetbReadyToPlay() [member function] */
        public GetbReadyToPlay(): boolean;

        /** void PlayerReplicationInfoWrapper::SetbReadyToPlay(long unsigned int newbReadyToPlay) [member function] */
        public SetbReadyToPlay(newbReadyToPlay: boolean): void;

        /** long unsigned int PlayerReplicationInfoWrapper::GetbOutOfLives() [member function] */
        public GetbOutOfLives(): boolean;

        /** void PlayerReplicationInfoWrapper::SetbOutOfLives(long unsigned int newbOutOfLives) [member function] */
        public SetbOutOfLives(newbOutOfLives: boolean): void;

        /** long unsigned int PlayerReplicationInfoWrapper::GetbBot() [member function] */
        public GetbBot(): boolean;

        /** void PlayerReplicationInfoWrapper::SetbBot(long unsigned int newbBot) [member function] */
        public SetbBot(newbBot: boolean): void;

        /** long unsigned int PlayerReplicationInfoWrapper::GetbIsInactive() [member function] */
        public GetbIsInactive(): boolean;

        /** void PlayerReplicationInfoWrapper::SetbIsInactive(long unsigned int newbIsInactive) [member function] */
        public SetbIsInactive(newbIsInactive: boolean): void;

        /** long unsigned int PlayerReplicationInfoWrapper::GetbFromPreviousLevel() [member function] */
        public GetbFromPreviousLevel(): boolean;

        /** void PlayerReplicationInfoWrapper::SetbFromPreviousLevel(long unsigned int newbFromPreviousLevel) [member function] */
        public SetbFromPreviousLevel(newbFromPreviousLevel: boolean): void;

        /** long unsigned int PlayerReplicationInfoWrapper::GetbTimedOut() [member function] */
        public GetbTimedOut(): boolean;

        /** void PlayerReplicationInfoWrapper::SetbTimedOut(long unsigned int newbTimedOut) [member function] */
        public SetbTimedOut(newbTimedOut: boolean): void;

        /** long unsigned int PlayerReplicationInfoWrapper::GetbUnregistered() [member function] */
        public GetbUnregistered(): boolean;

        /** void PlayerReplicationInfoWrapper::SetbUnregistered(long unsigned int newbUnregistered) [member function] */
        public SetbUnregistered(newbUnregistered: boolean): void;

        /** int PlayerReplicationInfoWrapper::GetStartTime() [member function] */
        public GetStartTime(): number;

        /** void PlayerReplicationInfoWrapper::SetStartTime(int newStartTime) [member function] */
        public SetStartTime(newStartTime: number): void;

        /** UnrealStringWrapper PlayerReplicationInfoWrapper::GetStringSpectating() [member function] */
        public GetStringSpectating(): UnrealStringWrapper;

        /** UnrealStringWrapper PlayerReplicationInfoWrapper::GetStringUnknown() [member function] */
        public GetStringUnknown(): UnrealStringWrapper;

        /** int PlayerReplicationInfoWrapper::GetKills() [member function] */
        public GetKills(): number;

        /** void PlayerReplicationInfoWrapper::SetKills(int newKills) [member function] */
        public SetKills(newKills: number): void;

        /** float PlayerReplicationInfoWrapper::GetExactPing() [member function] */
        public GetExactPing(): number;

        /** void PlayerReplicationInfoWrapper::SetExactPing(float newExactPing) [member function] */
        public SetExactPing(newExactPing: number): void;

        /** UnrealStringWrapper PlayerReplicationInfoWrapper::GetSavedNetworkAddress() [member function] */
        public GetSavedNetworkAddress(): UnrealStringWrapper;

        /** SteamID PlayerReplicationInfoWrapper::GetUniqueId() [member function] */
        public GetUniqueId(): SteamID;

        /** void PlayerReplicationInfoWrapper::SetUniqueId(SteamID newUniqueId) [member function] */
        public SetUniqueId(newUniqueId: SteamID): void;

        /** UniqueIDWrapper PlayerReplicationInfoWrapper::GetUniqueIdWrapper() [member function] */
        public GetUniqueIdWrapper(): UniqueIDWrapper;

        /** void PlayerReplicationInfoWrapper::SetUniqueId(UniqueIDWrapper newUniqueId) [member function] */
        public SetUniqueId(newUniqueId: UniqueIDWrapper): void;

        /** void PlayerReplicationInfoWrapper::UnregisterPlayerFromSession() [member function] */
        public UnregisterPlayerFromSession(): void;

        /** void PlayerReplicationInfoWrapper::RegisterPlayerWithSession() [member function] */
        public RegisterPlayerWithSession(): void;

        /** bool PlayerReplicationInfoWrapper::IsInvalidName() [member function] */
        public IsInvalidName(): boolean;

        /** unsigned char PlayerReplicationInfoWrapper::GetTeamNum() [member function] */
        public GetTeamNum(): number;

        /** void PlayerReplicationInfoWrapper::SetUniqueId2(SteamID & PlayerUniqueId) [member function] */
        public SetUniqueId2(PlayerUniqueId: SteamID): void;

        /** void PlayerReplicationInfoWrapper::SetUniqueId2(UniqueIDWrapper & PlayerUniqueId) [member function] */
        public SetUniqueId2(PlayerUniqueId: UniqueIDWrapper): void;

        /** void PlayerReplicationInfoWrapper::SeamlessTravelTo(PlayerReplicationInfoWrapper NewPRI) [member function] */
        public SeamlessTravelTo(NewPRI: PlayerReplicationInfoWrapper): void;

        /** void PlayerReplicationInfoWrapper::IncrementDeaths(int Amt) [member function] */
        public IncrementDeaths(Amt: number): void;

        /** void PlayerReplicationInfoWrapper::CopyProperties(PlayerReplicationInfoWrapper PRI) [member function] */
        public CopyProperties(PRI: PlayerReplicationInfoWrapper): void;

        /** void PlayerReplicationInfoWrapper::OverrideWith(PlayerReplicationInfoWrapper PRI) [member function] */
        public OverrideWith(PRI: PlayerReplicationInfoWrapper): void;

        /** PlayerReplicationInfoWrapper PlayerReplicationInfoWrapper::Duplicate() [member function] */
        public Duplicate(): PlayerReplicationInfoWrapper;

        /** void PlayerReplicationInfoWrapper::SetWaitingPlayer(long unsigned int B) [member function] */
        public SetWaitingPlayer(B: boolean): void;

        /** void PlayerReplicationInfoWrapper::eventSetPlayerName(std::string S) [member function] */
        public eventSetPlayerName(S: string): void;

        /** void PlayerReplicationInfoWrapper::Reset() [member function] */
        public Reset(): void;

        /** void PlayerReplicationInfoWrapper::eventDestroyed() [member function] */
        public eventDestroyed(): void;

        /** void PlayerReplicationInfoWrapper::Unregister2() [member function] */
        public Unregister2(): void;

        /** void PlayerReplicationInfoWrapper::UpdatePing(float TimeStamp) [member function] */
        public UpdatePing(TimeStamp: number): void;

        /** void PlayerReplicationInfoWrapper::RemoteUserDataReplicated() [member function] */
        public RemoteUserDataReplicated(): void;

        /** void PlayerReplicationInfoWrapper::SetPlayerTeam(TeamInfoWrapper NewTeam) [member function] */
        public SetPlayerTeam(NewTeam: TeamInfoWrapper): void;

        /** void PlayerReplicationInfoWrapper::eventClientFillRemoteUserData() [member function] */
        public eventClientFillRemoteUserData(): void;

        /** void PlayerReplicationInfoWrapper::eventPostBeginPlay() [member function] */
        public eventPostBeginPlay(): void;

        /** void PlayerReplicationInfoWrapper::eventOnOwnerChanged() [member function] */
        public eventOnOwnerChanged(): void;

        /** void PlayerReplicationInfoWrapper::eventConstruct() [member function] */
        public eventConstruct(): void;

    }

    /** TeamGameEventWrapper [class] */
    class TeamGameEventWrapper extends GameEventWrapper {
        // Public:
        /** TeamGameEventWrapper::TeamGameEventWrapper(uintptr_t mem) [constructor] */
        public constructor(mem: bigint);

        /** ArrayWrapper<TeamWrapper> TeamGameEventWrapper::GetTeamArchetypes() [member function] */
        public GetTeamArchetypes(): ArrayWrapper_TeamWrapper;

        /** ArrayWrapper<TeamWrapper> TeamGameEventWrapper::GetTeams() [member function] */
        public GetTeams(): ArrayWrapper_TeamWrapper;

        /** int TeamGameEventWrapper::GetMaxTeamSize() [member function] */
        public GetMaxTeamSize(): number;

        /** void TeamGameEventWrapper::SetMaxTeamSize(int newMaxTeamSize) [member function] */
        public SetMaxTeamSize(newMaxTeamSize: number): void;

        /** int TeamGameEventWrapper::GetNumBots() [member function] */
        public GetNumBots(): number;

        /** void TeamGameEventWrapper::SetNumBots(int newNumBots) [member function] */
        public SetNumBots(newNumBots: number): void;

        /** long unsigned int TeamGameEventWrapper::GetbMuteOppositeTeams() [member function] */
        public GetbMuteOppositeTeams(): boolean;

        /** void TeamGameEventWrapper::SetbMuteOppositeTeams(long unsigned int newbMuteOppositeTeams) [member function] */
        public SetbMuteOppositeTeams(newbMuteOppositeTeams: boolean): void;

        /** long unsigned int TeamGameEventWrapper::GetbDisableMutingOtherTeam() [member function] */
        public GetbDisableMutingOtherTeam(): boolean;

        /** void TeamGameEventWrapper::SetbDisableMutingOtherTeam(long unsigned int newbDisableMutingOtherTeam) [member function] */
        public SetbDisableMutingOtherTeam(newbDisableMutingOtherTeam: boolean): void;

        /** long unsigned int TeamGameEventWrapper::GetbForfeit() [member function] */
        public GetbForfeit(): boolean;

        /** void TeamGameEventWrapper::SetbForfeit(long unsigned int newbForfeit) [member function] */
        public SetbForfeit(newbForfeit: boolean): void;

        /** long unsigned int TeamGameEventWrapper::GetbUnfairTeams() [member function] */
        public GetbUnfairTeams(): boolean;

        /** void TeamGameEventWrapper::SetbUnfairTeams(long unsigned int newbUnfairTeams) [member function] */
        public SetbUnfairTeams(newbUnfairTeams: boolean): void;

        /** long unsigned int TeamGameEventWrapper::GetbAlwaysAutoSelectTeam() [member function] */
        public GetbAlwaysAutoSelectTeam(): boolean;

        /** void TeamGameEventWrapper::SetbAlwaysAutoSelectTeam(long unsigned int newbAlwaysAutoSelectTeam) [member function] */
        public SetbAlwaysAutoSelectTeam(newbAlwaysAutoSelectTeam: boolean): void;

        /** void TeamGameEventWrapper::StartRematchVote() [member function] */
        public StartRematchVote(): void;

        /** void TeamGameEventWrapper::CheckRematchVote() [member function] */
        public CheckRematchVote(): void;

        /** bool TeamGameEventWrapper::__GameEvent_Team_TA__AllTeamsHaveHumans(TeamWrapper Team) [member function] */
        public __GameEvent_Team_TA__AllTeamsHaveHumans(Team: TeamWrapper): boolean;

        /** void TeamGameEventWrapper::UpdatePlayerShortcuts() [member function] */
        public UpdatePlayerShortcuts(): void;

        /** void TeamGameEventWrapper::ClearTemporarySpawnSpots() [member function] */
        public ClearTemporarySpawnSpots(): void;

        /** bool TeamGameEventWrapper::ChooseTeam(int TeamIndex, PlayerControllerWrapper Player) [member function] */
        public ChooseTeam(TeamIndex: number, Player: PlayerControllerWrapper): boolean;

        /** bool TeamGameEventWrapper::CanChangeTeam() [member function] */
        public CanChangeTeam(): boolean;

        /** void TeamGameEventWrapper::OnPenaltyChanged() [member function] */
        public OnPenaltyChanged(): void;

        /** void TeamGameEventWrapper::OnTeamForfeited(TeamWrapper Team) [member function] */
        public OnTeamForfeited(Team: TeamWrapper): void;

        /** void TeamGameEventWrapper::HandleTeamForfeit(TeamWrapper Team) [member function] */
        public HandleTeamForfeit(Team: TeamWrapper): void;

        /** void TeamGameEventWrapper::MuteOppositeTeams2(long unsigned int bMute) [member function] */
        public MuteOppositeTeams2(bMute: boolean): void;

        /** void TeamGameEventWrapper::UpdateBotCount() [member function] */
        public UpdateBotCount(): void;

        /** bool TeamGameEventWrapper::FindBotReplacement(PriWrapper PRI) [member function] */
        public FindBotReplacement(PRI: PriWrapper): boolean;

        /** void TeamGameEventWrapper::EndGame() [member function] */
        public EndGame(): void;

        /** void TeamGameEventWrapper::ForceNoContest() [member function] */
        public ForceNoContest(): void;

        /** void TeamGameEventWrapper::AddTemporarySpawnSpot(TeamWrapper Team, CarWrapper Car) [member function] */
        public AddTemporarySpawnSpot(Team: TeamWrapper, Car: CarWrapper): void;

        /** void TeamGameEventWrapper::HandleSelectedLoadout(PriWrapper PlayerPRI) [member function] */
        public HandleSelectedLoadout(PlayerPRI: PriWrapper): void;

        /** void TeamGameEventWrapper::DestroyTeams() [member function] */
        public DestroyTeams(): void;

        /** void TeamGameEventWrapper::OnAllTeamsCreated() [member function] */
        public OnAllTeamsCreated(): void;

        /** void TeamGameEventWrapper::AssignCustomTeamSettings() [member function] */
        public AssignCustomTeamSettings(): void;

        /** void TeamGameEventWrapper::OnMatchSettingsChanged() [member function] */
        public OnMatchSettingsChanged(): void;

        /** bool TeamGameEventWrapper::AllTeamsHaveHumans2() [member function] */
        public AllTeamsHaveHumans2(): boolean;

        /** bool TeamGameEventWrapper::AllTeamsCreated2() [member function] */
        public AllTeamsCreated2(): boolean;

        /** void TeamGameEventWrapper::SetTeam(int TeamNum, TeamWrapper NewTeam) [member function] */
        public SetTeam(TeamNum: number, NewTeam: TeamWrapper): void;

        /** void TeamGameEventWrapper::CreateTeams() [member function] */
        public CreateTeams(): void;

        /** void TeamGameEventWrapper::PreloadBots() [member function] */
        public PreloadBots(): void;

        /** void TeamGameEventWrapper::OnInit() [member function] */
        public OnInit(): void;

        /** void TeamGameEventWrapper::SetMaxTeamSize2(int MaxSize) [member function] */
        public SetMaxTeamSize2(MaxSize: number): void;

        /** void TeamGameEventWrapper::UpdateMaxTeamSize() [member function] */
        public UpdateMaxTeamSize(): void;

        /** void TeamGameEventWrapper::SetUnfairTeams(long unsigned int bUnfair) [member function] */
        public SetUnfairTeams(bUnfair: boolean): void;

        /** void TeamGameEventWrapper::InitBotSkill() [member function] */
        public InitBotSkill(): void;

        /** void TeamGameEventWrapper::eventInitGame(std::string Options) [member function] */
        public eventInitGame(Options: string): void;

    }

    /** TeamWrapper [class] */
    class TeamWrapper extends TeamInfoWrapper {
        // Public:
        /** TeamWrapper::TeamWrapper(uintptr_t mem) [constructor] */
        public constructor(mem: bigint);

        /** LinearColor TeamWrapper::GetPrimaryColor() [member function] */
        public GetPrimaryColor(): LinearColor;

        /** LinearColor TeamWrapper::GetSecondaryColor() [member function] */
        public GetSecondaryColor(): LinearColor;

        /** LinearColor TeamWrapper::GetFontColor() [member function] */
        public GetFontColor(): LinearColor;

        /** void TeamWrapper::SetFontColor(LinearColor newFontColor) [member function] */
        public SetFontColor(newFontColor: LinearColor): void;

        /** LinearColor TeamWrapper::GetColorBlindFontColor() [member function] */
        public GetColorBlindFontColor(): LinearColor;

        /** void TeamWrapper::SetColorBlindFontColor(LinearColor newColorBlindFontColor) [member function] */
        public SetColorBlindFontColor(newColorBlindFontColor: LinearColor): void;

        /** UnrealColor TeamWrapper::GetTeamControllerColor() [member function] */
        public GetTeamControllerColor(): UnrealColor;

        /** void TeamWrapper::SetTeamControllerColor(UnrealColor newTeamControllerColor) [member function] */
        public SetTeamControllerColor(newTeamControllerColor: UnrealColor): void;

        /** UnrealColor TeamWrapper::GetTeamScoreStrobeColor() [member function] */
        public GetTeamScoreStrobeColor(): UnrealColor;

        /** void TeamWrapper::SetTeamScoreStrobeColor(UnrealColor newTeamScoreStrobeColor) [member function] */
        public SetTeamScoreStrobeColor(newTeamScoreStrobeColor: UnrealColor): void;

        /** StructArrayWrapper<LinearColor> TeamWrapper::GetDefaultColorList() [member function] */
        public GetDefaultColorList(): StructArrayWrapper_LinearColor;

        /** StructArrayWrapper<LinearColor> TeamWrapper::GetColorBlindColorList() [member function] */
        public GetColorBlindColorList(): StructArrayWrapper_LinearColor;

        /** StructArrayWrapper<LinearColor> TeamWrapper::GetCurrentColorList() [member function] */
        public GetCurrentColorList(): StructArrayWrapper_LinearColor;

        /** TeamGameEventWrapper TeamWrapper::GetGameEvent() [member function] */
        public GetGameEvent(): TeamGameEventWrapper;

        /** void TeamWrapper::SetGameEvent(TeamGameEventWrapper newGameEvent) [member function] */
        public SetGameEvent(newGameEvent: TeamGameEventWrapper): void;

        /** ArrayWrapper<PriWrapper> TeamWrapper::GetMembers() [member function] */
        public GetMembers(): ArrayWrapper_PriWrapper;

        /** UnrealStringWrapper TeamWrapper::GetCustomTeamName() [member function] */
        public GetCustomTeamName(): UnrealStringWrapper;

        /** UnrealStringWrapper TeamWrapper::GetSanitizedTeamName() [member function] */
        public GetSanitizedTeamName(): UnrealStringWrapper;

        /** long long unsigned int TeamWrapper::GetClubID() [member function] */
        public GetClubID(): number;

        /** void TeamWrapper::SetClubID(long long unsigned int newClubID) [member function] */
        public SetClubID(newClubID: number): void;

        /** long unsigned int TeamWrapper::GetbForfeit() [member function] */
        public GetbForfeit(): boolean;

        /** void TeamWrapper::SetbForfeit(long unsigned int newbForfeit) [member function] */
        public SetbForfeit(newbForfeit: boolean): void;

        /** bool TeamWrapper::__Team_TA__GetHumanPlayers(PriWrapper PRI) [member function] */
        public __Team_TA__GetHumanPlayers(PRI: PriWrapper): boolean;

        /** bool TeamWrapper::__Team_TA__GetHumanPrimaryPlayers(PriWrapper PRI) [member function] */
        public __Team_TA__GetHumanPrimaryPlayers(PRI: PriWrapper): boolean;

        /** bool TeamWrapper::__Team_TA__GetNumOfMembersThatCanStartForfeit(PriWrapper P) [member function] */
        public __Team_TA__GetNumOfMembersThatCanStartForfeit(P: PriWrapper): boolean;

        /** void TeamWrapper::__Team_TA__EnableAllMembersStartVoteToForfeit(PriWrapper Member) [member function] */
        public __Team_TA__EnableAllMembersStartVoteToForfeit(Member: PriWrapper): void;

        /** void TeamWrapper::OnClubColorsChanged() [member function] */
        public OnClubColorsChanged(): void;

        /** void TeamWrapper::Forfeit2() [member function] */
        public Forfeit2(): void;

        /** void TeamWrapper::EnableAllMembersStartVoteToForfeit2() [member function] */
        public EnableAllMembersStartVoteToForfeit2(): void;

        /** void TeamWrapper::EnableAllMembersStartVoteToForfeitIfNecessary() [member function] */
        public EnableAllMembersStartVoteToForfeitIfNecessary(): void;

        /** void TeamWrapper::VoteToForfeit22(PriWrapper PRI) [member function] */
        public VoteToForfeit22(PRI: PriWrapper): void;

        /** void TeamWrapper::NotifyKismetTeamColorChanged() [member function] */
        public NotifyKismetTeamColorChanged(): void;

        /** void TeamWrapper::UpdateColors() [member function] */
        public UpdateColors(): void;

        /** void TeamWrapper::SetLogo(int LogoID, long unsigned int bSwapColors) [member function] */
        public SetLogo(LogoID: number, bSwapColors: boolean): void;

        /** void TeamWrapper::HandleTeamNameSanitized(std::string Original, std::string Sanitized) [member function] */
        public HandleTeamNameSanitized(Original: string, Sanitized: string): void;

        /** void TeamWrapper::SetClubID2(long long unsigned int InClubID) [member function] */
        public SetClubID2(InClubID: number): void;

        /** void TeamWrapper::SetCustomTeamName(std::string NewName) [member function] */
        public SetCustomTeamName(NewName: string): void;

        /** void TeamWrapper::SetDefaultColors() [member function] */
        public SetDefaultColors(): void;

        /** bool TeamWrapper::IsSingleParty() [member function] */
        public IsSingleParty(): boolean;

        /** PriWrapper TeamWrapper::GetTeamMemberNamed(std::string PlayerName) [member function] */
        public GetTeamMemberNamed(PlayerName: string): PriWrapper;

        /** int TeamWrapper::GetNumBots() [member function] */
        public GetNumBots(): number;

        /** int TeamWrapper::GetNumHumans() [member function] */
        public GetNumHumans(): number;

        /** void TeamWrapper::OnScoreUpdated() [member function] */
        public OnScoreUpdated(): void;

        /** void TeamWrapper::ResetScore() [member function] */
        public ResetScore(): void;

        /** void TeamWrapper::RemovePoints(int Points) [member function] */
        public RemovePoints(Points: number): void;

        /** void TeamWrapper::SetScore(int Points) [member function] */
        public SetScore(Points: number): void;

        /** void TeamWrapper::ScorePoint(int AdditionalScore) [member function] */
        public ScorePoint(AdditionalScore: number): void;

        /** void TeamWrapper::MuteOtherTeam(TeamWrapper OtherTeam, long unsigned int bMute) [member function] */
        public MuteOtherTeam(OtherTeam: TeamWrapper, bMute: boolean): void;

        /** void TeamWrapper::ClearTemporarySpawnSpots() [member function] */
        public ClearTemporarySpawnSpots(): void;

        /** void TeamWrapper::ExpireTemporarySpawnSpots() [member function] */
        public ExpireTemporarySpawnSpots(): void;

        /** void TeamWrapper::AddTemporarySpawnSpot(ActorWrapper AtActor) [member function] */
        public AddTemporarySpawnSpot(AtActor: ActorWrapper): void;

        /** void TeamWrapper::OnGameEventSet() [member function] */
        public OnGameEventSet(): void;

        /** void TeamWrapper::SetGameEvent2(TeamGameEventWrapper InGameEvent) [member function] */
        public SetGameEvent2(InGameEvent: TeamGameEventWrapper): void;

    }

    /** VehiclePickupWrapper [class] */
    class VehiclePickupWrapper extends ActorWrapper {
        // Public:
        /** VehiclePickupWrapper::VehiclePickupWrapper(uintptr_t mem) [constructor] */
        public constructor(mem: bigint);

        /** float VehiclePickupWrapper::GetRespawnDelay() [member function] */
        public GetRespawnDelay(): number;

        /** void VehiclePickupWrapper::SetRespawnDelay(float newRespawnDelay) [member function] */
        public SetRespawnDelay(newRespawnDelay: number): void;

        /** FXActorWrapper VehiclePickupWrapper::GetFXActorArchetype() [member function] */
        public GetFXActorArchetype(): FXActorWrapper;

        /** void VehiclePickupWrapper::SetFXActorArchetype(FXActorWrapper newFXActorArchetype) [member function] */
        public SetFXActorArchetype(newFXActorArchetype: FXActorWrapper): void;

        /** FXActorWrapper VehiclePickupWrapper::GetFXActor() [member function] */
        public GetFXActor(): FXActorWrapper;

        /** void VehiclePickupWrapper::SetFXActor(FXActorWrapper newFXActor) [member function] */
        public SetFXActor(newFXActor: FXActorWrapper): void;

        /** long unsigned int VehiclePickupWrapper::GetbPickedUp() [member function] */
        public GetbPickedUp(): boolean;

        /** void VehiclePickupWrapper::SetbPickedUp(long unsigned int newbPickedUp) [member function] */
        public SetbPickedUp(newbPickedUp: boolean): void;

        /** long unsigned int VehiclePickupWrapper::GetbNetRelevant() [member function] */
        public GetbNetRelevant(): boolean;

        /** void VehiclePickupWrapper::SetbNetRelevant(long unsigned int newbNetRelevant) [member function] */
        public SetbNetRelevant(newbNetRelevant: boolean): void;

        /** long unsigned int VehiclePickupWrapper::GetbNoPickup() [member function] */
        public GetbNoPickup(): boolean;

        /** void VehiclePickupWrapper::SetbNoPickup(long unsigned int newbNoPickup) [member function] */
        public SetbNoPickup(newbNoPickup: boolean): void;

        /** void VehiclePickupWrapper::PlayPickedUpFX() [member function] */
        public PlayPickedUpFX(): void;

        /** bool VehiclePickupWrapper::IsTouchingAVehicle() [member function] */
        public IsTouchingAVehicle(): boolean;

        /** void VehiclePickupWrapper::UpdateTickDisabled() [member function] */
        public UpdateTickDisabled(): void;

        /** void VehiclePickupWrapper::SetNetRelevant(long unsigned int bRelevant) [member function] */
        public SetNetRelevant(bRelevant: boolean): void;

        /** void VehiclePickupWrapper::Respawn2() [member function] */
        public Respawn2(): void;

        /** void VehiclePickupWrapper::SetPickedUp(long unsigned int bNewPickedUp, CarWrapper InInstigator) [member function] */
        public SetPickedUp(bNewPickedUp: boolean, InInstigator: CarWrapper): void;

        /** void VehiclePickupWrapper::Pickup2(CarWrapper Car) [member function] */
        public Pickup2(Car: CarWrapper): void;

        /** bool VehiclePickupWrapper::CanPickup(CarWrapper Car) [member function] */
        public CanPickup(Car: CarWrapper): boolean;

        /** void VehiclePickupWrapper::OnTouch(CarWrapper Car) [member function] */
        public OnTouch(Car: CarWrapper): void;

        /** void VehiclePickupWrapper::eventTouch(ActorWrapper Other, PrimitiveComponentWrapper OtherComp, Vector & HitLocation, Vector & HitNormal) [member function] */
        public eventTouch(Other: ActorWrapper, OtherComp: PrimitiveComponentWrapper, HitLocation: Vector, HitNormal: Vector): void;

        /** void VehiclePickupWrapper::OnPickUp() [member function] */
        public OnPickUp(): void;

        /** void VehiclePickupWrapper::OnSpawn() [member function] */
        public OnSpawn(): void;

        /** void VehiclePickupWrapper::SetNoPickup() [member function] */
        public SetNoPickup(): void;

        /** void VehiclePickupWrapper::SetupReplicateNoPickup() [member function] */
        public SetupReplicateNoPickup(): void;

        /** void VehiclePickupWrapper::InitFX() [member function] */
        public InitFX(): void;

        /** void VehiclePickupWrapper::eventPostBeginPlay() [member function] */
        public eventPostBeginPlay(): void;

        /** void VehiclePickupWrapper::eventPreBeginPlay() [member function] */
        public eventPreBeginPlay(): void;

        /** void VehiclePickupWrapper::EventPickedUp(VehiclePickupWrapper Pickup) [member function] */
        public EventPickedUp(Pickup: VehiclePickupWrapper): void;

        /** void VehiclePickupWrapper::EventSpawned(VehiclePickupWrapper Pickup) [member function] */
        public EventSpawned(Pickup: VehiclePickupWrapper): void;

    }

    /** SampleHistoryWrapper [class] */
    class SampleHistoryWrapper extends ObjectWrapper {
        // Public:
        /** SampleHistoryWrapper::SampleHistoryWrapper(uintptr_t mem) [constructor] */
        public constructor(mem: bigint);

        /** bool SampleHistoryWrapper::IsNull() const [member function] */
        public IsNull(): boolean;

        /** SampleRecordSettingsWrapper SampleHistoryWrapper::GetRecordSettings() [member function] */
        public GetRecordSettings(): SampleRecordSettingsWrapper;

        /** void SampleHistoryWrapper::SetRecordSettings(SampleRecordSettingsWrapper newRecordSettings) [member function] */
        public SetRecordSettings(newRecordSettings: SampleRecordSettingsWrapper): void;

        /** UnrealStringWrapper SampleHistoryWrapper::GetTitle() [member function] */
        public GetTitle(): UnrealStringWrapper;

        /** float SampleHistoryWrapper::GetYMin() [member function] */
        public GetYMin(): number;

        /** void SampleHistoryWrapper::SetYMin(float newYMin) [member function] */
        public SetYMin(newYMin: number): void;

        /** float SampleHistoryWrapper::GetYMax() [member function] */
        public GetYMax(): number;

        /** void SampleHistoryWrapper::SetYMax(float newYMax) [member function] */
        public SetYMax(newYMax: number): void;

        /** float SampleHistoryWrapper::GetGoodValue() [member function] */
        public GetGoodValue(): number;

        /** void SampleHistoryWrapper::SetGoodValue(float newGoodValue) [member function] */
        public SetGoodValue(newGoodValue: number): void;

        /** float SampleHistoryWrapper::GetBadValue() [member function] */
        public GetBadValue(): number;

        /** void SampleHistoryWrapper::SetBadValue(float newBadValue) [member function] */
        public SetBadValue(newBadValue: number): void;

        /** float SampleHistoryWrapper::GetBaseValue() [member function] */
        public GetBaseValue(): number;

        /** void SampleHistoryWrapper::SetBaseValue(float newBaseValue) [member function] */
        public SetBaseValue(newBaseValue: number): void;

        /** StructArrayWrapper<RecordedSample> SampleHistoryWrapper::GetSamples() [member function] */
        public GetSamples(): StructArrayWrapper_RecordedSample;

        /** int SampleHistoryWrapper::GetSampleIndex() [member function] */
        public GetSampleIndex(): number;

        /** void SampleHistoryWrapper::SetSampleIndex(int newSampleIndex) [member function] */
        public SetSampleIndex(newSampleIndex: number): void;

        /** float SampleHistoryWrapper::GetAccumTime() [member function] */
        public GetAccumTime(): number;

        /** void SampleHistoryWrapper::SetAccumTime(float newAccumTime) [member function] */
        public SetAccumTime(newAccumTime: number): void;

        /** RecordedSample SampleHistoryWrapper::GetPendingSample() [member function] */
        public GetPendingSample(): RecordedSample;

        /** void SampleHistoryWrapper::SetPendingSample(RecordedSample newPendingSample) [member function] */
        public SetPendingSample(newPendingSample: RecordedSample): void;

        /** long unsigned int SampleHistoryWrapper::GetbHasPendingSample() [member function] */
        public GetbHasPendingSample(): boolean;

        /** void SampleHistoryWrapper::SetbHasPendingSample(long unsigned int newbHasPendingSample) [member function] */
        public SetbHasPendingSample(newbHasPendingSample: boolean): void;

        /** void SampleHistoryWrapper::Tick(float DeltaTime) [member function] */
        public Tick(DeltaTime: number): void;

        /** void SampleHistoryWrapper::AddSample(float NewValue) [member function] */
        public AddSample(NewValue: number): void;

        /** float SampleHistoryWrapper::GetSummaryValue(unsigned char Type, float MaxSampleAge, long unsigned int bAbsoluteValue) [member function] */
        public GetSummaryValue(Type: number, MaxSampleAge: number, bAbsoluteValue: boolean): number;

        /** SampleHistoryWrapper SampleHistoryWrapper::SetBaseValue2(float InBaseValue) [member function] */
        public SetBaseValue2(InBaseValue: number): SampleHistoryWrapper;

        /** SampleHistoryWrapper SampleHistoryWrapper::SetGoodBadValues(float InGoodValue, float InBadValue) [member function] */
        public SetGoodBadValues(InGoodValue: number, InBadValue: number): SampleHistoryWrapper;

        /** SampleHistoryWrapper SampleHistoryWrapper::SetGraphMaxMin(float MaxValue, float MinValue) [member function] */
        public SetGraphMaxMin(MaxValue: number, MinValue: number): SampleHistoryWrapper;

        /** SampleHistoryWrapper SampleHistoryWrapper::SetTitle(std::string InTitle) [member function] */
        public SetTitle(InTitle: string): SampleHistoryWrapper;

    }

    /** StatGraphWrapper [class] */
    class StatGraphWrapper extends ObjectWrapper {
        // Public:
        /** StatGraphWrapper::StatGraphWrapper(uintptr_t mem) [constructor] */
        public constructor(mem: bigint);

        /** bool StatGraphWrapper::IsNull() const [member function] */
        public IsNull(): boolean;

        /** SampleRecordSettingsWrapper StatGraphWrapper::GetRecordSettings() [member function] */
        public GetRecordSettings(): SampleRecordSettingsWrapper;

        /** void StatGraphWrapper::SetRecordSettings(SampleRecordSettingsWrapper newRecordSettings) [member function] */
        public SetRecordSettings(newRecordSettings: SampleRecordSettingsWrapper): void;

        /** double StatGraphWrapper::GetLastTickTime() [member function] */
        public GetLastTickTime(): number;

        /** void StatGraphWrapper::SetLastTickTime(double newLastTickTime) [member function] */
        public SetLastTickTime(newLastTickTime: number): void;

        /** ArrayWrapper<SampleHistoryWrapper> StatGraphWrapper::GetSampleHistories() [member function] */
        public GetSampleHistories(): ArrayWrapper_SampleHistoryWrapper;

        /** void StatGraphWrapper::StopDrawing() [member function] */
        public StopDrawing(): void;

        /** SampleHistoryWrapper StatGraphWrapper::CreateSampleHistory(std::string Title) [member function] */
        public CreateSampleHistory(Title: string): SampleHistoryWrapper;

        /** SampleHistoryWrapper StatGraphWrapper::AddSampleHistory(SampleHistoryWrapper History) [member function] */
        public AddSampleHistory(History: SampleHistoryWrapper): SampleHistoryWrapper;

        /** void StatGraphWrapper::eventConstruct() [member function] */
        public eventConstruct(): void;

    }

    /** ControllerWrapper [class] */
    class ControllerWrapper extends ActorWrapper {
        // Public:
        /** ControllerWrapper::ControllerWrapper(uintptr_t mem) [constructor] */
        public constructor(mem: bigint);

        /** PlayerReplicationInfoWrapper ControllerWrapper::GetPlayerReplicationInfo() [member function] */
        public GetPlayerReplicationInfo(): PlayerReplicationInfoWrapper;

    }

    /** SequenceObjectWrapper [class] */
    class SequenceObjectWrapper extends ObjectWrapper {
        // Public:
        /** SequenceObjectWrapper::SequenceObjectWrapper(uintptr_t mem) [constructor] */
        public constructor(mem: bigint);

        /** bool SequenceObjectWrapper::IsNull() const [member function] */
        public IsNull(): boolean;

        /** SequenceWrapper SequenceObjectWrapper::GetParentSequence() [member function] */
        public GetParentSequence(): SequenceWrapper;

        /** UnrealStringWrapper SequenceObjectWrapper::GetObjName() [member function] */
        public GetObjName(): UnrealStringWrapper;

        /** UnrealStringWrapper SequenceObjectWrapper::GetObjCategory() [member function] */
        public GetObjCategory(): UnrealStringWrapper;

        /** UnrealStringWrapper SequenceObjectWrapper::GetObjComment() [member function] */
        public GetObjComment(): UnrealStringWrapper;

    }

    /** SequenceVariableWrapper [class] */
    class SequenceVariableWrapper extends SequenceObjectWrapper {
        // Public:
        /** SequenceVariableWrapper::SequenceVariableWrapper(uintptr_t mem) [constructor] */
        public constructor(mem: bigint);

        /** std::string SequenceVariableWrapper::GetVarName() [member function] */
        public GetVarName(): string;

        /** bool SequenceVariableWrapper::IsInt() [member function] */
        public IsInt(): boolean;

        /** bool SequenceVariableWrapper::IsFloat() [member function] */
        public IsFloat(): boolean;

        /** bool SequenceVariableWrapper::IsString() [member function] */
        public IsString(): boolean;

        /** bool SequenceVariableWrapper::IsVector() [member function] */
        public IsVector(): boolean;

        /** bool SequenceVariableWrapper::IsBool() [member function] */
        public IsBool(): boolean;

        /** bool SequenceVariableWrapper::IsObjectList() [member function] */
        public IsObjectList(): boolean;

        /** bool SequenceVariableWrapper::IsActor() [member function] */
        public IsActor(): boolean;

        /** float SequenceVariableWrapper::GetFloat() [member function] */
        public GetFloat(): number;

        /** int SequenceVariableWrapper::GetInt() [member function] */
        public GetInt(): number;

        /** std::string SequenceVariableWrapper::GetString() [member function] */
        public GetString(): string;

        /** Vector SequenceVariableWrapper::GetVector() [member function] */
        public GetVector(): Vector;

        /** bool SequenceVariableWrapper::GetBool() [member function] */
        public GetBool(): boolean;

        /** ArrayWrapper<SequenceVariableWrapper> SequenceVariableWrapper::GetObjectList() [member function] */
        public GetObjectList(): ArrayWrapper_SequenceVariableWrapper;

        /** void SequenceVariableWrapper::SetFloat(float value) [member function] */
        public SetFloat(value: number): void;

        /** void SequenceVariableWrapper::SetInt(int value) [member function] */
        public SetInt(value: number): void;

        /** void SequenceVariableWrapper::SetString(std::string const & value) [member function] */
        public SetString(value: string): void;

        /** void SequenceVariableWrapper::SetVector(Vector value) [member function] */
        public SetVector(value: Vector): void;

        /** void SequenceVariableWrapper::SetBool(bool value) [member function] */
        public SetBool(value: boolean): void;

        /** ActorWrapper SequenceVariableWrapper::GetActor() [member function] */
        public GetActor(): ActorWrapper;

    }

    /** ProductWrapper [class] */
    class ProductWrapper extends ProductTemplateWrapper {
        // Public:
        /** ProductWrapper::ProductWrapper(uintptr_t mem) [constructor] */
        public constructor(mem: bigint);

        /** bool ProductWrapper::IsNull() [member function] */
        public IsNull(): boolean;

        /** std::string ProductWrapper::GetAssetPackageName() [member function] */
        public GetAssetPackageName(): string;

        /** UnrealStringWrapper ProductWrapper::GetAssetPath() [member function] */
        public GetAssetPath(): UnrealStringWrapper;

        /** UnrealStringWrapper ProductWrapper::GetLabel() [member function] */
        public GetLabel(): UnrealStringWrapper;

        /** UnrealStringWrapper ProductWrapper::GetAsciiLabel() [member function] */
        public GetAsciiLabel(): UnrealStringWrapper;

        /** UnrealStringWrapper ProductWrapper::GetLongLabel() [member function] */
        public GetLongLabel(): UnrealStringWrapper;

        /** bool ProductWrapper::IsPaintable() [member function] */
        public IsPaintable(): boolean;

        /** UnrealStringWrapper ProductWrapper::GetDisplayLabelSlot() [member function] */
        public GetDisplayLabelSlot(): UnrealStringWrapper;

        /** unsigned char ProductWrapper::GetQuality() [member function] */
        public GetQuality(): number;

        /** bool ProductWrapper::IsContainerKey() [member function] */
        public IsContainerKey(): boolean;

        /** bool ProductWrapper::IsCurrency() [member function] */
        public IsCurrency(): boolean;

        /** bool ProductWrapper::IsBlueprint() [member function] */
        public IsBlueprint(): boolean;

        /** bool ProductWrapper::IsContainerUnlocked() [member function] */
        public IsContainerUnlocked(): boolean;

        /** bool ProductWrapper::IsContainer() [member function] */
        public IsContainer(): boolean;

        /** bool ProductWrapper::IsSchematic() [member function] */
        public IsSchematic(): boolean;

        /** bool ProductWrapper::IsPlatformExclusive() [member function] */
        public IsPlatformExclusive(): boolean;

        /** bool ProductWrapper::IsLicensed() [member function] */
        public IsLicensed(): boolean;

        /** ArrayWrapper<ProductAttributeWrapper> ProductWrapper::GetAttributes() [member function] */
        public GetAttributes(): ArrayWrapper_ProductAttributeWrapper;

        /** UnrealStringWrapper ProductWrapper::GetSortLabel() [member function] */
        public GetSortLabel(): UnrealStringWrapper;

        /** UnrealStringWrapper ProductWrapper::GetThumbnailAssetPath() [member function] */
        public GetThumbnailAssetPath(): UnrealStringWrapper;

        /** UnrealStringWrapper ProductWrapper::GetThumbnailPackageNameForLoad() [member function] */
        public GetThumbnailPackageNameForLoad(): UnrealStringWrapper;

        /** std::string ProductWrapper::GetThumbnailPackageName() [member function] */
        public GetThumbnailPackageName(): string;

        /** std::string ProductWrapper::GetThumbnailAssetName() [member function] */
        public GetThumbnailAssetName(): string;

        /** UnrealStringWrapper ProductWrapper::GetTrademarkLabel() [member function] */
        public GetTrademarkLabel(): UnrealStringWrapper;

        /** int ProductWrapper::GetID() [member function] */
        public GetID(): number;

    }

    /** OnlineProductWrapper [class] */
    class OnlineProductWrapper extends ObjectWrapper {
        // Public:
        /** OnlineProductWrapper::OnlineProductWrapper(uintptr_t mem) [constructor] */
        public constructor(mem: bigint);

        /** bool OnlineProductWrapper::IsNull() const [member function] */
        public IsNull(): boolean;

        /** std::string OnlineProductWrapper::SeriesIdToSeriesName(int seriesID) [member function] */
        public SeriesIdToSeriesName(seriesID: number): string;

        /** int OnlineProductWrapper::GetProductID() [member function] */
        public GetProductID(): number;

        /** int OnlineProductWrapper::GetSeriesID() [member function] */
        public GetSeriesID(): number;

        /** int OnlineProductWrapper::GetTradeHold() [member function] */
        public GetTradeHold(): number;

        /** std::string OnlineProductWrapper::GetProductSeries() [member function] */
        public GetProductSeries(): string;

        /** unsigned char OnlineProductWrapper::GetQuality() [member function] */
        public GetQuality(): number;

        /** ArrayWrapper<ProductAttributeWrapper> OnlineProductWrapper::GetAttributes() [member function] */
        public GetAttributes(): ArrayWrapper_ProductAttributeWrapper;

        /** UnrealStringWrapper OnlineProductWrapper::GetLongLabel() [member function] */
        public GetLongLabel(): UnrealStringWrapper;

        /** int OnlineProductWrapper::GetBlueprintSeriesID() [member function] */
        public GetBlueprintSeriesID(): number;

        /** unsigned char OnlineProductWrapper::GetBlueprintType() [member function] */
        public GetBlueprintType(): number;

        /** bool OnlineProductWrapper::IsBlueprint() [member function] */
        public IsBlueprint(): boolean;

        /** ProductWrapper OnlineProductWrapper::GetProduct() [member function] */
        public GetProduct(): ProductWrapper;

        /** bool OnlineProductWrapper::GetIsUntradable() [member function] */
        public GetIsUntradable(): boolean;

        /** long long unsigned int OnlineProductWrapper::GetInstanceID() [member function] */
        public GetInstanceID(): number;

    }

    /** ProductAttributeWrapper [class] */
    class ProductAttributeWrapper extends ObjectWrapper {
        // Public:
        /** ProductAttributeWrapper::ProductAttributeWrapper(uintptr_t mem) [constructor] */
        public constructor(mem: bigint);

        /** bool ProductAttributeWrapper::IsNull() const [member function] */
        public IsNull(): boolean;

        /** std::string ProductAttributeWrapper::GetAttributeType() [member function] */
        public GetAttributeType(): string;

        /** std::string ProductAttributeWrapper::GetTypename() [member function] */
        public GetTypename(): string;

        /** UnrealStringWrapper ProductAttributeWrapper::GetLabel() [member function] */
        public GetLabel(): UnrealStringWrapper;

    }

    /** GameSettingPlaylistWrapper [class] */
    class GameSettingPlaylistWrapper extends ObjectWrapper {
        // Public:
        /** GameSettingPlaylistWrapper::GameSettingPlaylistWrapper(uintptr_t mem) [constructor] */
        public constructor(mem: bigint);

        /** bool GameSettingPlaylistWrapper::IsNull() const [member function] */
        public IsNull(): boolean;

        /** UnrealStringWrapper GameSettingPlaylistWrapper::GetTitle() [member function] */
        public GetTitle(): UnrealStringWrapper;

        /** UnrealStringWrapper GameSettingPlaylistWrapper::GetDescription() [member function] */
        public GetDescription(): UnrealStringWrapper;

        /** int GameSettingPlaylistWrapper::GetPlayerCount() [member function] */
        public GetPlayerCount(): number;

        /** void GameSettingPlaylistWrapper::SetPlayerCount(int newPlayerCount) [member function] */
        public SetPlayerCount(newPlayerCount: number): void;

        /** long unsigned int GameSettingPlaylistWrapper::GetbStandard() [member function] */
        public GetbStandard(): boolean;

        /** void GameSettingPlaylistWrapper::SetbStandard(long unsigned int newbStandard) [member function] */
        public SetbStandard(newbStandard: boolean): void;

        /** long unsigned int GameSettingPlaylistWrapper::GetbRanked() [member function] */
        public GetbRanked(): boolean;

        /** void GameSettingPlaylistWrapper::SetbRanked(long unsigned int newbRanked) [member function] */
        public SetbRanked(newbRanked: boolean): void;

        /** long unsigned int GameSettingPlaylistWrapper::GetbSolo() [member function] */
        public GetbSolo(): boolean;

        /** void GameSettingPlaylistWrapper::SetbSolo(long unsigned int newbSolo) [member function] */
        public SetbSolo(newbSolo: boolean): void;

        /** long unsigned int GameSettingPlaylistWrapper::GetbNew() [member function] */
        public GetbNew(): boolean;

        /** void GameSettingPlaylistWrapper::SetbNew(long unsigned int newbNew) [member function] */
        public SetbNew(newbNew: boolean): void;

        /** long unsigned int GameSettingPlaylistWrapper::GetbApplyQuitPenalty() [member function] */
        public GetbApplyQuitPenalty(): boolean;

        /** void GameSettingPlaylistWrapper::SetbApplyQuitPenalty(long unsigned int newbApplyQuitPenalty) [member function] */
        public SetbApplyQuitPenalty(newbApplyQuitPenalty: boolean): void;

        /** long unsigned int GameSettingPlaylistWrapper::GetbAllowForfeit() [member function] */
        public GetbAllowForfeit(): boolean;

        /** void GameSettingPlaylistWrapper::SetbAllowForfeit(long unsigned int newbAllowForfeit) [member function] */
        public SetbAllowForfeit(newbAllowForfeit: boolean): void;

        /** long unsigned int GameSettingPlaylistWrapper::GetbDisableRankedReconnect() [member function] */
        public GetbDisableRankedReconnect(): boolean;

        /** void GameSettingPlaylistWrapper::SetbDisableRankedReconnect(long unsigned int newbDisableRankedReconnect) [member function] */
        public SetbDisableRankedReconnect(newbDisableRankedReconnect: boolean): void;

        /** long unsigned int GameSettingPlaylistWrapper::GetbIgnoreAssignTeams() [member function] */
        public GetbIgnoreAssignTeams(): boolean;

        /** void GameSettingPlaylistWrapper::SetbIgnoreAssignTeams(long unsigned int newbIgnoreAssignTeams) [member function] */
        public SetbIgnoreAssignTeams(newbIgnoreAssignTeams: boolean): void;

        /** long unsigned int GameSettingPlaylistWrapper::GetbKickOnMigrate() [member function] */
        public GetbKickOnMigrate(): boolean;

        /** void GameSettingPlaylistWrapper::SetbKickOnMigrate(long unsigned int newbKickOnMigrate) [member function] */
        public SetbKickOnMigrate(newbKickOnMigrate: boolean): void;

        /** long unsigned int GameSettingPlaylistWrapper::GetbAllowClubs() [member function] */
        public GetbAllowClubs(): boolean;

        /** void GameSettingPlaylistWrapper::SetbAllowClubs(long unsigned int newbAllowClubs) [member function] */
        public SetbAllowClubs(newbAllowClubs: boolean): void;

        /** long unsigned int GameSettingPlaylistWrapper::GetbPlayersVSBots() [member function] */
        public GetbPlayersVSBots(): boolean;

        /** void GameSettingPlaylistWrapper::SetbPlayersVSBots(long unsigned int newbPlayersVSBots) [member function] */
        public SetbPlayersVSBots(newbPlayersVSBots: boolean): void;

        /** int GameSettingPlaylistWrapper::GetPlaylistId() [member function] */
        public GetPlaylistId(): number;

        /** void GameSettingPlaylistWrapper::SetPlaylistId(int newPlaylistId) [member function] */
        public SetPlaylistId(newPlaylistId: number): void;

        /** UnrealStringWrapper GameSettingPlaylistWrapper::GetServerCommand() [member function] */
        public GetServerCommand(): UnrealStringWrapper;

        /** bool GameSettingPlaylistWrapper::IsLanMatch() [member function] */
        public IsLanMatch(): boolean;

        /** bool GameSettingPlaylistWrapper::IsPrivateMatch() [member function] */
        public IsPrivateMatch(): boolean;

        /** bool GameSettingPlaylistWrapper::ShouldUpdateSkills() [member function] */
        public ShouldUpdateSkills(): boolean;

        /** bool GameSettingPlaylistWrapper::IsValidID(int InPlaylistID) [member function] */
        public IsValidID(InPlaylistID: number): boolean;

        /** bool GameSettingPlaylistWrapper::IsValid2() [member function] */
        public IsValid2(): boolean;

    }

    /** ReplayDirectorWrapper [class] */
    class ReplayDirectorWrapper extends ActorWrapper {
        // Public:
        /** ReplayDirectorWrapper::ReplayDirectorWrapper(uintptr_t mem) [constructor] */
        public constructor(mem: bigint);

        /** float ReplayDirectorWrapper::GetSlomoPreScoreTime() [member function] */
        public GetSlomoPreScoreTime(): number;

        /** void ReplayDirectorWrapper::SetSlomoPreScoreTime(float newSlomoPreScoreTime) [member function] */
        public SetSlomoPreScoreTime(newSlomoPreScoreTime: number): void;

        /** float ReplayDirectorWrapper::GetSlomoPostScoreTime() [member function] */
        public GetSlomoPostScoreTime(): number;

        /** void ReplayDirectorWrapper::SetSlomoPostScoreTime(float newSlomoPostScoreTime) [member function] */
        public SetSlomoPostScoreTime(newSlomoPostScoreTime: number): void;

        /** float ReplayDirectorWrapper::GetSlomoDefendTime() [member function] */
        public GetSlomoDefendTime(): number;

        /** void ReplayDirectorWrapper::SetSlomoDefendTime(float newSlomoDefendTime) [member function] */
        public SetSlomoDefendTime(newSlomoDefendTime: number): void;

        /** float ReplayDirectorWrapper::GetSlomoDefendDistance() [member function] */
        public GetSlomoDefendDistance(): number;

        /** void ReplayDirectorWrapper::SetSlomoDefendDistance(float newSlomoDefendDistance) [member function] */
        public SetSlomoDefendDistance(newSlomoDefendDistance: number): void;

        /** float ReplayDirectorWrapper::GetSlomoTimeDilation() [member function] */
        public GetSlomoTimeDilation(): number;

        /** void ReplayDirectorWrapper::SetSlomoTimeDilation(float newSlomoTimeDilation) [member function] */
        public SetSlomoTimeDilation(newSlomoTimeDilation: number): void;

        /** float ReplayDirectorWrapper::GetMinReplayTime() [member function] */
        public GetMinReplayTime(): number;

        /** void ReplayDirectorWrapper::SetMinReplayTime(float newMinReplayTime) [member function] */
        public SetMinReplayTime(newMinReplayTime: number): void;

        /** float ReplayDirectorWrapper::GetMaxReplayTime() [member function] */
        public GetMaxReplayTime(): number;

        /** void ReplayDirectorWrapper::SetMaxReplayTime(float newMaxReplayTime) [member function] */
        public SetMaxReplayTime(newMaxReplayTime: number): void;

        /** float ReplayDirectorWrapper::GetReplayPadding() [member function] */
        public GetReplayPadding(): number;

        /** void ReplayDirectorWrapper::SetReplayPadding(float newReplayPadding) [member function] */
        public SetReplayPadding(newReplayPadding: number): void;

        /** float ReplayDirectorWrapper::GetHighlightReplayDuration() [member function] */
        public GetHighlightReplayDuration(): number;

        /** void ReplayDirectorWrapper::SetHighlightReplayDuration(float newHighlightReplayDuration) [member function] */
        public SetHighlightReplayDuration(newHighlightReplayDuration: number): void;

        /** float ReplayDirectorWrapper::GetTimeBeforeHighlightReplay() [member function] */
        public GetTimeBeforeHighlightReplay(): number;

        /** void ReplayDirectorWrapper::SetTimeBeforeHighlightReplay(float newTimeBeforeHighlightReplay) [member function] */
        public SetTimeBeforeHighlightReplay(newTimeBeforeHighlightReplay: number): void;

        /** ReplaySoccarWrapper ReplayDirectorWrapper::GetReplay() [member function] */
        public GetReplay(): ReplaySoccarWrapper;

        /** void ReplayDirectorWrapper::SetReplay(ReplaySoccarWrapper newReplay) [member function] */
        public SetReplay(newReplay: ReplaySoccarWrapper): void;

        /** ActorWrapper ReplayDirectorWrapper::GetFocusCar() [member function] */
        public GetFocusCar(): ActorWrapper;

        /** void ReplayDirectorWrapper::SetFocusCar(ActorWrapper newFocusCar) [member function] */
        public SetFocusCar(newFocusCar: ActorWrapper): void;

        /** float ReplayDirectorWrapper::GetFocusCarChangeTime() [member function] */
        public GetFocusCarChangeTime(): number;

        /** void ReplayDirectorWrapper::SetFocusCarChangeTime(float newFocusCarChangeTime) [member function] */
        public SetFocusCarChangeTime(newFocusCarChangeTime: number): void;

        /** ActorWrapper ReplayDirectorWrapper::GetFocusBall() [member function] */
        public GetFocusBall(): ActorWrapper;

        /** void ReplayDirectorWrapper::SetFocusBall(ActorWrapper newFocusBall) [member function] */
        public SetFocusBall(newFocusBall: ActorWrapper): void;

        /** float ReplayDirectorWrapper::GetScoreTime() [member function] */
        public GetScoreTime(): number;

        /** void ReplayDirectorWrapper::SetScoreTime(float newScoreTime) [member function] */
        public SetScoreTime(newScoreTime: number): void;

        /** int ReplayDirectorWrapper::GetScoreHitIndex() [member function] */
        public GetScoreHitIndex(): number;

        /** void ReplayDirectorWrapper::SetScoreHitIndex(int newScoreHitIndex) [member function] */
        public SetScoreHitIndex(newScoreHitIndex: number): void;

        /** GoalWrapper ReplayDirectorWrapper::GetScoredGoal() [member function] */
        public GetScoredGoal(): GoalWrapper;

        /** void ReplayDirectorWrapper::SetScoredGoal(GoalWrapper newScoredGoal) [member function] */
        public SetScoredGoal(newScoredGoal: GoalWrapper): void;

        /** ReplayScoreData ReplayDirectorWrapper::GetReplayScoreData() [member function] */
        public GetReplayScoreData(): ReplayScoreData;

        /** long unsigned int ReplayDirectorWrapper::GetbSlomo() [member function] */
        public GetbSlomo(): boolean;

        /** void ReplayDirectorWrapper::SetbSlomo(long unsigned int newbSlomo) [member function] */
        public SetbSlomo(newbSlomo: boolean): void;

        /** long unsigned int ReplayDirectorWrapper::GetbSlomoForDefender() [member function] */
        public GetbSlomoForDefender(): boolean;

        /** void ReplayDirectorWrapper::SetbSlomoForDefender(long unsigned int newbSlomoForDefender) [member function] */
        public SetbSlomoForDefender(newbSlomoForDefender: boolean): void;

        /** long unsigned int ReplayDirectorWrapper::GetbAutoSave() [member function] */
        public GetbAutoSave(): boolean;

        /** void ReplayDirectorWrapper::SetbAutoSave(long unsigned int newbAutoSave) [member function] */
        public SetbAutoSave(newbAutoSave: boolean): void;

        /** int ReplayDirectorWrapper::GetFocusHitIndex() [member function] */
        public GetFocusHitIndex(): number;

        /** void ReplayDirectorWrapper::SetFocusHitIndex(int newFocusHitIndex) [member function] */
        public SetFocusHitIndex(newFocusHitIndex: number): void;

        /** int ReplayDirectorWrapper::GetFocusCarIdx() [member function] */
        public GetFocusCarIdx(): number;

        /** void ReplayDirectorWrapper::SetFocusCarIdx(int newFocusCarIdx) [member function] */
        public SetFocusCarIdx(newFocusCarIdx: number): void;

        /** float ReplayDirectorWrapper::GetReplayStartGameTime() [member function] */
        public GetReplayStartGameTime(): number;

        /** void ReplayDirectorWrapper::SetReplayStartGameTime(float newReplayStartGameTime) [member function] */
        public SetReplayStartGameTime(newReplayStartGameTime: number): void;

        /** float ReplayDirectorWrapper::GetBallSpawnTime() [member function] */
        public GetBallSpawnTime(): number;

        /** void ReplayDirectorWrapper::SetBallSpawnTime(float newBallSpawnTime) [member function] */
        public SetBallSpawnTime(newBallSpawnTime: number): void;

        /** ServerWrapper ReplayDirectorWrapper::GetSoccarGame() [member function] */
        public GetSoccarGame(): ServerWrapper;

        /** void ReplayDirectorWrapper::SetSoccarGame(ServerWrapper newSoccarGame) [member function] */
        public SetSoccarGame(newSoccarGame: ServerWrapper): void;

        /** unsigned char ReplayDirectorWrapper::GetScoredOnTeam() [member function] */
        public GetScoredOnTeam(): number;

        /** void ReplayDirectorWrapper::SetScoredOnTeam(unsigned char newScoredOnTeam) [member function] */
        public SetScoredOnTeam(newScoredOnTeam: number): void;

        /** int ReplayDirectorWrapper::GetForceCutToFocusActors() [member function] */
        public GetForceCutToFocusActors(): number;

        /** void ReplayDirectorWrapper::SetForceCutToFocusActors(int newForceCutToFocusActors) [member function] */
        public SetForceCutToFocusActors(newForceCutToFocusActors: number): void;

        /** void ReplayDirectorWrapper::HandleReplayFinished(ReplayWrapper InReplay) [member function] */
        public HandleReplayFinished(InReplay: ReplayWrapper): void;

        /** bool ReplayDirectorWrapper::ShouldSlomo() [member function] */
        public ShouldSlomo(): boolean;

        /** void ReplayDirectorWrapper::UpdateSlomo() [member function] */
        public UpdateSlomo(): void;

        /** void ReplayDirectorWrapper::UpdateFocusActors() [member function] */
        public UpdateFocusActors(): void;

        /** void ReplayDirectorWrapper::PlayRandomHighlight() [member function] */
        public PlayRandomHighlight(): void;

        /** int ReplayDirectorWrapper::GetNextHighlightFrame() [member function] */
        public GetNextHighlightFrame(): number;

        /** void ReplayDirectorWrapper::SetAutoSave() [member function] */
        public SetAutoSave(): void;

        /** void ReplayDirectorWrapper::SaveUserKeyframe() [member function] */
        public SaveUserKeyframe(): void;

        /** void ReplayDirectorWrapper::BuildFocusCars() [member function] */
        public BuildFocusCars(): void;

        /** void ReplayDirectorWrapper::SetSlomo2(long unsigned int bNewSlomo) [member function] */
        public SetSlomo2(bNewSlomo: boolean): void;

        /** void ReplayDirectorWrapper::eventTick(float DeltaTime) [member function] */
        public eventTick(DeltaTime: number): void;

        /** void ReplayDirectorWrapper::eventDestroyed() [member function] */
        public eventDestroyed(): void;

        /** float ReplayDirectorWrapper::GetReplayTimeSeconds() [member function] */
        public GetReplayTimeSeconds(): number;

        /** void ReplayDirectorWrapper::SetFocusActors(ActorWrapper NewCar, ActorWrapper NewBall) [member function] */
        public SetFocusActors(NewCar: ActorWrapper, NewBall: ActorWrapper): void;

        /** float ReplayDirectorWrapper::GetReplayStartTime() [member function] */
        public GetReplayStartTime(): number;

        /** void ReplayDirectorWrapper::SetSlomoForDefender(BallWrapper Ball, int DefendingTeam) [member function] */
        public SetSlomoForDefender(Ball: BallWrapper, DefendingTeam: number): void;

        /** void ReplayDirectorWrapper::OnScoreDataChanged() [member function] */
        public OnScoreDataChanged(): void;

        /** void ReplayDirectorWrapper::HandleScoreUpdated(TeamWrapper Team) [member function] */
        public HandleScoreUpdated(Team: TeamWrapper): void;

        /** void ReplayDirectorWrapper::HandleAllTeamsCreated(TeamGameEventWrapper TeamGame) [member function] */
        public HandleAllTeamsCreated(TeamGame: TeamGameEventWrapper): void;

        /** void ReplayDirectorWrapper::RecordPlayers() [member function] */
        public RecordPlayers(): void;

        /** void ReplayDirectorWrapper::HandleGameStateChanged(GameEventWrapper G) [member function] */
        public HandleGameStateChanged(G: GameEventWrapper): void;

        /** void ReplayDirectorWrapper::OnSoccarGameSet() [member function] */
        public OnSoccarGameSet(): void;

        /** void ReplayDirectorWrapper::SetGameEvent(ServerWrapper InGameEvent) [member function] */
        public SetGameEvent(InGameEvent: ServerWrapper): void;

        /** void ReplayDirectorWrapper::EventFocusCarChanged(ActorWrapper NewFocusCar) [member function] */
        public EventFocusCarChanged(NewFocusCar: ActorWrapper): void;

        /** void ReplayDirectorWrapper::EventAutoSaveChanged(ReplayDirectorWrapper Director) [member function] */
        public EventAutoSaveChanged(Director: ReplayDirectorWrapper): void;

        /** void ReplayDirectorWrapper::EventScoreDataChanged(ReplayDirectorWrapper Director) [member function] */
        public EventScoreDataChanged(Director: ReplayDirectorWrapper): void;

        /** void ReplayDirectorWrapper::EventReplayFinished(ReplayDirectorWrapper Director) [member function] */
        public EventReplayFinished(Director: ReplayDirectorWrapper): void;

    }

    /** GameEditorWrapper [class] */
    class GameEditorWrapper extends ServerWrapper {
        // Public:
        /** GameEditorWrapper::GameEditorWrapper(uintptr_t mem) [constructor] */
        public constructor(mem: bigint);

        /** int GameEditorWrapper::GetActiveRoundNumber() [member function] */
        public GetActiveRoundNumber(): number;

        /** void GameEditorWrapper::SetActiveRoundNumber(int newActiveRoundNumber) [member function] */
        public SetActiveRoundNumber(newActiveRoundNumber: number): void;

        /** int GameEditorWrapper::GetMaxRounds() [member function] */
        public GetMaxRounds(): number;

        /** void GameEditorWrapper::SetMaxRounds(int newMaxRounds) [member function] */
        public SetMaxRounds(newMaxRounds: number): void;

        /** int GameEditorWrapper::GetHistoryPosition() [member function] */
        public GetHistoryPosition(): number;

        /** void GameEditorWrapper::SetHistoryPosition(int newHistoryPosition) [member function] */
        public SetHistoryPosition(newHistoryPosition: number): void;

        /** int GameEditorWrapper::GetMaxUndoHistory() [member function] */
        public GetMaxUndoHistory(): number;

        /** void GameEditorWrapper::SetMaxUndoHistory(int newMaxUndoHistory) [member function] */
        public SetMaxUndoHistory(newMaxUndoHistory: number): void;

        /** FXActorWrapper GameEditorWrapper::GetFXActorArchetype() [member function] */
        public GetFXActorArchetype(): FXActorWrapper;

        /** void GameEditorWrapper::SetFXActorArchetype(FXActorWrapper newFXActorArchetype) [member function] */
        public SetFXActorArchetype(newFXActorArchetype: FXActorWrapper): void;

        /** FXActorWrapper GameEditorWrapper::GetFXActor() [member function] */
        public GetFXActor(): FXActorWrapper;

        /** void GameEditorWrapper::SetFXActor(FXActorWrapper newFXActor) [member function] */
        public SetFXActor(newFXActor: FXActorWrapper): void;

        /** void GameEditorWrapper::RotateActor(PlayerControllerWrapper PC, long unsigned int bSnapOrientation) [member function] */
        public RotateActor(PC: PlayerControllerWrapper, bSnapOrientation: boolean): void;

        /** void GameEditorWrapper::PrevRound() [member function] */
        public PrevRound(): void;

        /** void GameEditorWrapper::NextRound() [member function] */
        public NextRound(): void;

        /** void GameEditorWrapper::DecreaseTime() [member function] */
        public DecreaseTime(): void;

        /** void GameEditorWrapper::IncreaseTime() [member function] */
        public IncreaseTime(): void;

        /** void GameEditorWrapper::StopEditing(PlayerControllerWrapper PC) [member function] */
        public StopEditing(PC: PlayerControllerWrapper): void;

        /** void GameEditorWrapper::StartEditing() [member function] */
        public StartEditing(): void;

        /** void GameEditorWrapper::CycleActor(PlayerControllerWrapper PC) [member function] */
        public CycleActor(PC: PlayerControllerWrapper): void;

        /** void GameEditorWrapper::ReleaseGrabbedActor(PlayerControllerWrapper PC) [member function] */
        public ReleaseGrabbedActor(PC: PlayerControllerWrapper): void;

        /** void GameEditorWrapper::ReleaseRotateActor(PlayerControllerWrapper PC) [member function] */
        public ReleaseRotateActor(PC: PlayerControllerWrapper): void;

        /** void GameEditorWrapper::ToggleRotateActor(PlayerControllerWrapper PC) [member function] */
        public ToggleRotateActor(PC: PlayerControllerWrapper): void;

        /** void GameEditorWrapper::ToggleGrabActor(PlayerControllerWrapper PC) [member function] */
        public ToggleGrabActor(PC: PlayerControllerWrapper): void;

        /** void GameEditorWrapper::ToggleReleaseActor(PlayerControllerWrapper PC) [member function] */
        public ToggleReleaseActor(PC: PlayerControllerWrapper): void;

        /** void GameEditorWrapper::ReleaseActor2(PlayerControllerWrapper PC) [member function] */
        public ReleaseActor2(PC: PlayerControllerWrapper): void;

        /** void GameEditorWrapper::GrabActor2(PlayerControllerWrapper PC) [member function] */
        public GrabActor2(PC: PlayerControllerWrapper): void;

        /** bool GameEditorWrapper::CanQueSaveReplay() [member function] */
        public CanQueSaveReplay(): boolean;

        /** bool GameEditorWrapper::ShouldUpdateCrosshair() [member function] */
        public ShouldUpdateCrosshair(): boolean;

        /** int GameEditorWrapper::GetPlayerTeamNumber() [member function] */
        public GetPlayerTeamNumber(): number;

        /** bool GameEditorWrapper::CanAddHistory() [member function] */
        public CanAddHistory(): boolean;

        /** void GameEditorWrapper::ToggleEditorRound() [member function] */
        public ToggleEditorRound(): void;

        /** void GameEditorWrapper::CommitRedoRound() [member function] */
        public CommitRedoRound(): void;

        /** void GameEditorWrapper::ResetRound() [member function] */
        public ResetRound(): void;

        /** void GameEditorWrapper::Save2() [member function] */
        public Save2(): void;

        /** void GameEditorWrapper::Redo2(PlayerControllerWrapper PC) [member function] */
        public Redo2(PC: PlayerControllerWrapper): void;

        /** void GameEditorWrapper::Undo2(PlayerControllerWrapper PC) [member function] */
        public Undo2(PC: PlayerControllerWrapper): void;

        /** unsigned char GameEditorWrapper::GetOtherHistoryType(unsigned char HistoryType) [member function] */
        public GetOtherHistoryType(HistoryType: number): number;

        /** void GameEditorWrapper::ClampUndoHistory() [member function] */
        public ClampUndoHistory(): void;

        /** void GameEditorWrapper::ClearRedoHistory() [member function] */
        public ClearRedoHistory(): void;

        /** void GameEditorWrapper::ClearAllHistory() [member function] */
        public ClearAllHistory(): void;

        /** bool GameEditorWrapper::DestroyActor(ActorWrapper A, unsigned char HistoryType) [member function] */
        public DestroyActor(A: ActorWrapper, HistoryType: number): boolean;

        /** bool GameEditorWrapper::IsInEditorMode() [member function] */
        public IsInEditorMode(): boolean;

        /** void GameEditorWrapper::RemoveAllPointsFromScore(int TeamIndex) [member function] */
        public RemoveAllPointsFromScore(TeamIndex: number): void;

        /** void GameEditorWrapper::RemovePointsFromScore(int PointsToRemove, int TeamIndex) [member function] */
        public RemovePointsFromScore(PointsToRemove: number, TeamIndex: number): void;

        /** void GameEditorWrapper::DeleteAllExistingActorsBasedOffSpawnList() [member function] */
        public DeleteAllExistingActorsBasedOffSpawnList(): void;

        /** bool GameEditorWrapper::RoundContainsASwitch() [member function] */
        public RoundContainsASwitch(): boolean;

        /** void GameEditorWrapper::EnableTriggers(long unsigned int bEnable) [member function] */
        public EnableTriggers(bEnable: boolean): void;

        /** void GameEditorWrapper::HideCarSpawnPoints(long unsigned int bHide) [member function] */
        public HideCarSpawnPoints(bHide: boolean): void;

        /** void GameEditorWrapper::ResetSpawnLocations() [member function] */
        public ResetSpawnLocations(): void;

        /** void GameEditorWrapper::OnSpawnedArchetype(ActorWrapper SpawnedActor, unsigned char HistoryType) [member function] */
        public OnSpawnedArchetype(SpawnedActor: ActorWrapper, HistoryType: number): void;

        /** void GameEditorWrapper::SpawnArchetype(PlayerControllerWrapper Controller, int ArchetypeIndex) [member function] */
        public SpawnArchetype(Controller: PlayerControllerWrapper, ArchetypeIndex: number): void;

        /** void GameEditorWrapper::IncrementSelectedSpawnArchetypeIndex(int Direction, int * Index) [member function] */
        public IncrementSelectedSpawnArchetypeIndex(Direction: number, Index: number): void;

        /** bool GameEditorWrapper::CanChangeTeam() [member function] */
        public CanChangeTeam(): boolean;

        /** void GameEditorWrapper::ResetBallsToDefaultPosition() [member function] */
        public ResetBallsToDefaultPosition(): void;

        /** void GameEditorWrapper::FireBalls() [member function] */
        public FireBalls(): void;

        /** void GameEditorWrapper::Interact() [member function] */
        public Interact(): void;

        /** bool GameEditorWrapper::ShouldResetBalls() [member function] */
        public ShouldResetBalls(): boolean;

        /** void GameEditorWrapper::OnVehicleSetup(CarWrapper Car) [member function] */
        public OnVehicleSetup(Car: CarWrapper): void;

        /** void GameEditorWrapper::HandleVehicleSetup(CarWrapper Car) [member function] */
        public HandleVehicleSetup(Car: CarWrapper): void;

        /** void GameEditorWrapper::OnPlayerRestarted(CarWrapper PlayerCar) [member function] */
        public OnPlayerRestarted(PlayerCar: CarWrapper): void;

        /** bool GameEditorWrapper::ChooseTeam(int TeamIndex, PlayerControllerWrapper Player) [member function] */
        public ChooseTeam(TeamIndex: number, Player: PlayerControllerWrapper): boolean;

        /** void GameEditorWrapper::InitFX() [member function] */
        public InitFX(): void;

        /** void GameEditorWrapper::eventPostBeginPlay() [member function] */
        public eventPostBeginPlay(): void;

    }

    /** ReplaySoccarWrapper [class] */
    class ReplaySoccarWrapper extends ReplayWrapper {
        // Public:
        /** ReplaySoccarWrapper::ReplaySoccarWrapper(uintptr_t mem) [constructor] */
        public constructor(mem: bigint);

        /** int ReplaySoccarWrapper::GetTeamSize() [member function] */
        public GetTeamSize(): number;

        /** void ReplaySoccarWrapper::SetTeamSize(int newTeamSize) [member function] */
        public SetTeamSize(newTeamSize: number): void;

        /** int ReplaySoccarWrapper::GetUnfairTeamSize() [member function] */
        public GetUnfairTeamSize(): number;

        /** void ReplaySoccarWrapper::SetUnfairTeamSize(int newUnfairTeamSize) [member function] */
        public SetUnfairTeamSize(newUnfairTeamSize: number): void;

        /** long unsigned int ReplaySoccarWrapper::GetbUnfairBots() [member function] */
        public GetbUnfairBots(): boolean;

        /** void ReplaySoccarWrapper::SetbUnfairBots(long unsigned int newbUnfairBots) [member function] */
        public SetbUnfairBots(newbUnfairBots: boolean): void;

        /** int ReplaySoccarWrapper::GetPrimaryPlayerTeam() [member function] */
        public GetPrimaryPlayerTeam(): number;

        /** void ReplaySoccarWrapper::SetPrimaryPlayerTeam(int newPrimaryPlayerTeam) [member function] */
        public SetPrimaryPlayerTeam(newPrimaryPlayerTeam: number): void;

        /** int ReplaySoccarWrapper::GetTeam0Score() [member function] */
        public GetTeam0Score(): number;

        /** void ReplaySoccarWrapper::SetTeam0Score(int newTeam0Score) [member function] */
        public SetTeam0Score(newTeam0Score: number): void;

        /** int ReplaySoccarWrapper::GetTeam1Score() [member function] */
        public GetTeam1Score(): number;

        /** void ReplaySoccarWrapper::SetTeam1Score(int newTeam1Score) [member function] */
        public SetTeam1Score(newTeam1Score: number): void;

        /** void ReplaySoccarWrapper::eventPreExport() [member function] */
        public eventPreExport(): void;

        /** void ReplaySoccarWrapper::RemoveTimelineKeyframe(int KeyframeIndex) [member function] */
        public RemoveTimelineKeyframe(KeyframeIndex: number): void;

        /** void ReplaySoccarWrapper::RecordUserEvent() [member function] */
        public RecordUserEvent(): void;

        /** void ReplaySoccarWrapper::AddPlayer(PriWrapper PRI) [member function] */
        public AddPlayer(PRI: PriWrapper): void;

    }

    /** ReplayWrapper [class] */
    class ReplayWrapper extends ObjectWrapper {
        // Public:
        /** ReplayWrapper::ReplayWrapper(uintptr_t mem) [constructor] */
        public constructor(mem: bigint);

        /** bool ReplayWrapper::IsNull() const [member function] */
        public IsNull(): boolean;

        /** UnrealStringWrapper ReplayWrapper::GetReplayName() [member function] */
        public GetReplayName(): UnrealStringWrapper;

        /** int ReplayWrapper::GetEngineVersion() [member function] */
        public GetEngineVersion(): number;

        /** void ReplayWrapper::SetEngineVersion(int newEngineVersion) [member function] */
        public SetEngineVersion(newEngineVersion: number): void;

        /** int ReplayWrapper::GetLicenseeVersion() [member function] */
        public GetLicenseeVersion(): number;

        /** void ReplayWrapper::SetLicenseeVersion(int newLicenseeVersion) [member function] */
        public SetLicenseeVersion(newLicenseeVersion: number): void;

        /** int ReplayWrapper::GetNetVersion() [member function] */
        public GetNetVersion(): number;

        /** void ReplayWrapper::SetNetVersion(int newNetVersion) [member function] */
        public SetNetVersion(newNetVersion: number): void;

        /** int ReplayWrapper::GetReplayVersion() [member function] */
        public GetReplayVersion(): number;

        /** void ReplayWrapper::SetReplayVersion(int newReplayVersion) [member function] */
        public SetReplayVersion(newReplayVersion: number): void;

        /** int ReplayWrapper::GetReplayLastSaveVersion() [member function] */
        public GetReplayLastSaveVersion(): number;

        /** void ReplayWrapper::SetReplayLastSaveVersion(int newReplayLastSaveVersion) [member function] */
        public SetReplayLastSaveVersion(newReplayLastSaveVersion: number): void;

        /** int ReplayWrapper::GetGameVersion() [member function] */
        public GetGameVersion(): number;

        /** void ReplayWrapper::SetGameVersion(int newGameVersion) [member function] */
        public SetGameVersion(newGameVersion: number): void;

        /** int ReplayWrapper::GetBuildID() [member function] */
        public GetBuildID(): number;

        /** void ReplayWrapper::SetBuildID(int newBuildID) [member function] */
        public SetBuildID(newBuildID: number): void;

        /** int ReplayWrapper::GetChangelist() [member function] */
        public GetChangelist(): number;

        /** void ReplayWrapper::SetChangelist(int newChangelist) [member function] */
        public SetChangelist(newChangelist: number): void;

        /** UnrealStringWrapper ReplayWrapper::GetBuildVersion() [member function] */
        public GetBuildVersion(): UnrealStringWrapper;

        /** int ReplayWrapper::GetReserveMegabytes() [member function] */
        public GetReserveMegabytes(): number;

        /** void ReplayWrapper::SetReserveMegabytes(int newReserveMegabytes) [member function] */
        public SetReserveMegabytes(newReserveMegabytes: number): void;

        /** float ReplayWrapper::GetRecordFPS() [member function] */
        public GetRecordFPS(): number;

        /** void ReplayWrapper::SetRecordFPS(float newRecordFPS) [member function] */
        public SetRecordFPS(newRecordFPS: number): void;

        /** float ReplayWrapper::GetKeyframeDelay() [member function] */
        public GetKeyframeDelay(): number;

        /** void ReplayWrapper::SetKeyframeDelay(float newKeyframeDelay) [member function] */
        public SetKeyframeDelay(newKeyframeDelay: number): void;

        /** int ReplayWrapper::GetMaxChannels() [member function] */
        public GetMaxChannels(): number;

        /** void ReplayWrapper::SetMaxChannels(int newMaxChannels) [member function] */
        public SetMaxChannels(newMaxChannels: number): void;

        /** int ReplayWrapper::GetMaxReplaySizeMB() [member function] */
        public GetMaxReplaySizeMB(): number;

        /** void ReplayWrapper::SetMaxReplaySizeMB(int newMaxReplaySizeMB) [member function] */
        public SetMaxReplaySizeMB(newMaxReplaySizeMB: number): void;

        /** UnrealStringWrapper ReplayWrapper::GetFilename() [member function] */
        public GetFilename(): UnrealStringWrapper;

        /** UnrealStringWrapper ReplayWrapper::GetId() [member function] */
        public GetId(): UnrealStringWrapper;

        /** UnrealStringWrapper ReplayWrapper::GetDate() [member function] */
        public GetDate(): UnrealStringWrapper;

        /** int ReplayWrapper::GetNumFrames() [member function] */
        public GetNumFrames(): number;

        /** void ReplayWrapper::SetNumFrames(int newNumFrames) [member function] */
        public SetNumFrames(newNumFrames: number): void;

        /** UnrealStringWrapper ReplayWrapper::GetPlayerName() [member function] */
        public GetPlayerName(): UnrealStringWrapper;

        /** long unsigned int ReplayWrapper::GetbFileCorrupted() [member function] */
        public GetbFileCorrupted(): boolean;

        /** void ReplayWrapper::SetbFileCorrupted(long unsigned int newbFileCorrupted) [member function] */
        public SetbFileCorrupted(newbFileCorrupted: boolean): void;

        /** long unsigned int ReplayWrapper::GetbForceKeyframe() [member function] */
        public GetbForceKeyframe(): boolean;

        /** void ReplayWrapper::SetbForceKeyframe(long unsigned int newbForceKeyframe) [member function] */
        public SetbForceKeyframe(newbForceKeyframe: boolean): void;

        /** long unsigned int ReplayWrapper::GetbLoadedNetPackages() [member function] */
        public GetbLoadedNetPackages(): boolean;

        /** void ReplayWrapper::SetbLoadedNetPackages(long unsigned int newbLoadedNetPackages) [member function] */
        public SetbLoadedNetPackages(newbLoadedNetPackages: boolean): void;

        /** long unsigned int ReplayWrapper::GetbDebug() [member function] */
        public GetbDebug(): boolean;

        /** void ReplayWrapper::SetbDebug(long unsigned int newbDebug) [member function] */
        public SetbDebug(newbDebug: boolean): void;

        /** unsigned char ReplayWrapper::GetReplayState() [member function] */
        public GetReplayState(): number;

        /** void ReplayWrapper::SetReplayState(unsigned char newReplayState) [member function] */
        public SetReplayState(newReplayState: number): void;

        /** int ReplayWrapper::GetCurrentFrame() [member function] */
        public GetCurrentFrame(): number;

        /** void ReplayWrapper::SetCurrentFrame(int newCurrentFrame) [member function] */
        public SetCurrentFrame(newCurrentFrame: number): void;

        /** int ReplayWrapper::GetNextKeyframe() [member function] */
        public GetNextKeyframe(): number;

        /** void ReplayWrapper::SetNextKeyframe(int newNextKeyframe) [member function] */
        public SetNextKeyframe(newNextKeyframe: number): void;

        /** float ReplayWrapper::GetCurrentTime() [member function] */
        public GetCurrentTime(): number;

        /** void ReplayWrapper::SetCurrentTime(float newCurrentTime) [member function] */
        public SetCurrentTime(newCurrentTime: number): void;

        /** float ReplayWrapper::GetAccumulatedDeltaTime() [member function] */
        public GetAccumulatedDeltaTime(): number;

        /** void ReplayWrapper::SetAccumulatedDeltaTime(float newAccumulatedDeltaTime) [member function] */
        public SetAccumulatedDeltaTime(newAccumulatedDeltaTime: number): void;

        /** float ReplayWrapper::GetTimeToSkipTo() [member function] */
        public GetTimeToSkipTo(): number;

        /** void ReplayWrapper::SetTimeToSkipTo(float newTimeToSkipTo) [member function] */
        public SetTimeToSkipTo(newTimeToSkipTo: number): void;

        /** int ReplayWrapper::GetFrameToSkipTo() [member function] */
        public GetFrameToSkipTo(): number;

        /** void ReplayWrapper::SetFrameToSkipTo(int newFrameToSkipTo) [member function] */
        public SetFrameToSkipTo(newFrameToSkipTo: number): void;

        /** int ReplayWrapper::GetPlayersOnlyTicks() [member function] */
        public GetPlayersOnlyTicks(): number;

        /** void ReplayWrapper::SetPlayersOnlyTicks(int newPlayersOnlyTicks) [member function] */
        public SetPlayersOnlyTicks(newPlayersOnlyTicks: number): void;

        /** float ReplayWrapper::GetPlaybackTime() [member function] */
        public GetPlaybackTime(): number;

        /** bool ReplayWrapper::IsFromBeforeGameVersion(unsigned char BeforeGameVersion) [member function] */
        public IsFromBeforeGameVersion(BeforeGameVersion: number): boolean;

        /** bool ReplayWrapper::IsFromBeforeReplayVersion(unsigned char BeforeReplayVersion) [member function] */
        public IsFromBeforeReplayVersion(BeforeReplayVersion: number): boolean;

        /** void ReplayWrapper::SetReplayName(std::string NewName) [member function] */
        public SetReplayName(NewName: string): void;

        /** void ReplayWrapper::RemoveTimelineKeyframe(int KeyframeIndex) [member function] */
        public RemoveTimelineKeyframe(KeyframeIndex: number): void;

        /** void ReplayWrapper::eventTrimData(int FirstKeyframe, int FirstFrame) [member function] */
        public eventTrimData(FirstKeyframe: number, FirstFrame: number): void;

        /** ReplayWrapper ReplayWrapper::CreateCopy(float StartTime) [member function] */
        public CreateCopy(StartTime: number): ReplayWrapper;

        /** void ReplayWrapper::ImportReplay(std::string Path) [member function] */
        public ImportReplay(Path: string): void;

        /** void ReplayWrapper::ExportReplay(std::string Path) [member function] */
        public ExportReplay(Path: string): void;

        /** void ReplayWrapper::SkipToFrame(int frame, long unsigned int bFlush) [member function] */
        public SkipToFrame(frame: number, bFlush: boolean): void;

        /** void ReplayWrapper::SkipToTime(float Time, long unsigned int bFlush) [member function] */
        public SkipToTime(Time: number, bFlush: boolean): void;

        /** float ReplayWrapper::GetReplayTimeSeconds() [member function] */
        public GetReplayTimeSeconds(): number;

        /** void ReplayWrapper::StopPlayback() [member function] */
        public StopPlayback(): void;

        /** void ReplayWrapper::StartPlaybackAtFrame(int StartFrame) [member function] */
        public StartPlaybackAtFrame(StartFrame: number): void;

        /** void ReplayWrapper::StartPlaybackAtTimeSeconds(float StartTime) [member function] */
        public StartPlaybackAtTimeSeconds(StartTime: number): void;

        /** void ReplayWrapper::StopRecord() [member function] */
        public StopRecord(): void;

        /** void ReplayWrapper::StartRecord() [member function] */
        public StartRecord(): void;

        /** void ReplayWrapper::Tick2(float DeltaTime) [member function] */
        public Tick2(DeltaTime: number): void;

        /** void ReplayWrapper::eventPreExport() [member function] */
        public eventPreExport(): void;

        /** void ReplayWrapper::EventPlayedFrame(ReplayWrapper Replay) [member function] */
        public EventPlayedFrame(Replay: ReplayWrapper): void;

        /** void ReplayWrapper::EventPostTimeSkip(ReplayWrapper Replay) [member function] */
        public EventPostTimeSkip(Replay: ReplayWrapper): void;

        /** void ReplayWrapper::EventPreTimeSkip(ReplayWrapper Replay) [member function] */
        public EventPreTimeSkip(Replay: ReplayWrapper): void;

        /** void ReplayWrapper::EventSpawned(ReplayWrapper Replay, ActorWrapper A) [member function] */
        public EventSpawned(Replay: ReplayWrapper, A: ActorWrapper): void;

        /** void ReplayWrapper::EventPlaybackStopped(ReplayWrapper Replay) [member function] */
        public EventPlaybackStopped(Replay: ReplayWrapper): void;

    }

    /** SaveDataWrapper [class] */
    class SaveDataWrapper extends ObjectWrapper {
        // Public:
        /** SaveDataWrapper::SaveDataWrapper(uintptr_t mem) [constructor] */
        public constructor(mem: bigint);

        /** bool SaveDataWrapper::IsNull() const [member function] */
        public IsNull(): boolean;

        /** UnrealStringWrapper SaveDataWrapper::GetDirectoryPath() [member function] */
        public GetDirectoryPath(): UnrealStringWrapper;

        /** UnrealStringWrapper SaveDataWrapper::GetSaveType() [member function] */
        public GetSaveType(): UnrealStringWrapper;

        /** UnrealStringWrapper SaveDataWrapper::GetSaveExt() [member function] */
        public GetSaveExt(): UnrealStringWrapper;

        /** long unsigned int SaveDataWrapper::GetbExactFileMatch() [member function] */
        public GetbExactFileMatch(): boolean;

        /** void SaveDataWrapper::SetbExactFileMatch(long unsigned int newbExactFileMatch) [member function] */
        public SetbExactFileMatch(newbExactFileMatch: boolean): void;

        /** void SaveDataWrapper::Init() [member function] */
        public Init(): void;

    }

    /** TrainingEditorSaveDataWrapper [class] */
    class TrainingEditorSaveDataWrapper extends ObjectWrapper {
        // Public:
        /** TrainingEditorSaveDataWrapper::TrainingEditorSaveDataWrapper(uintptr_t mem) [constructor] */
        public constructor(mem: bigint);

        /** bool TrainingEditorSaveDataWrapper::IsNull() const [member function] */
        public IsNull(): boolean;

        /** UnrealStringWrapper TrainingEditorSaveDataWrapper::GetCode() [member function] */
        public GetCode(): UnrealStringWrapper;

        /** UnrealStringWrapper TrainingEditorSaveDataWrapper::GetTM_Name() [member function] */
        public GetTM_Name(): UnrealStringWrapper;

        /** unsigned char TrainingEditorSaveDataWrapper::GetType() [member function] */
        public GetType(): number;

        /** void TrainingEditorSaveDataWrapper::SetType(unsigned char newType) [member function] */
        public SetType(newType: number): void;

        /** unsigned char TrainingEditorSaveDataWrapper::GetDifficulty() [member function] */
        public GetDifficulty(): number;

        /** void TrainingEditorSaveDataWrapper::SetDifficulty(unsigned char newDifficulty) [member function] */
        public SetDifficulty(newDifficulty: number): void;

        /** UnrealStringWrapper TrainingEditorSaveDataWrapper::GetCreatorName() [member function] */
        public GetCreatorName(): UnrealStringWrapper;

        /** UnrealStringWrapper TrainingEditorSaveDataWrapper::GetDescription() [member function] */
        public GetDescription(): UnrealStringWrapper;

        /** int TrainingEditorSaveDataWrapper::GetNumRounds() [member function] */
        public GetNumRounds(): number;

        /** void TrainingEditorSaveDataWrapper::SetNumRounds(int newNumRounds) [member function] */
        public SetNumRounds(newNumRounds: number): void;

        /** long long unsigned int TrainingEditorSaveDataWrapper::GetCreatedAt() [member function] */
        public GetCreatedAt(): number;

        /** void TrainingEditorSaveDataWrapper::SetCreatedAt(long long unsigned int newCreatedAt) [member function] */
        public SetCreatedAt(newCreatedAt: number): void;

        /** long long unsigned int TrainingEditorSaveDataWrapper::GetUpdatedAt() [member function] */
        public GetUpdatedAt(): number;

        /** void TrainingEditorSaveDataWrapper::SetUpdatedAt(long long unsigned int newUpdatedAt) [member function] */
        public SetUpdatedAt(newUpdatedAt: number): void;

        /** SteamID TrainingEditorSaveDataWrapper::GetCreatorPlayerID() [member function] */
        public GetCreatorPlayerID(): SteamID;

        /** void TrainingEditorSaveDataWrapper::SetCreatorPlayerID(SteamID newCreatorPlayerID) [member function] */
        public SetCreatorPlayerID(newCreatorPlayerID: SteamID): void;

        /** void TrainingEditorSaveDataWrapper::Init() [member function] */
        public Init(): void;

        /** UniqueIDWrapper TrainingEditorSaveDataWrapper::GetCreatorPlayerUniqueID() [member function] */
        public GetCreatorPlayerUniqueID(): UniqueIDWrapper;

    }

    /** GameEditorSaveDataWrapper [class] */
    class GameEditorSaveDataWrapper extends SaveDataWrapper {
        // Public:
        /** GameEditorSaveDataWrapper::GameEditorSaveDataWrapper(uintptr_t mem) [constructor] */
        public constructor(mem: bigint);

        /** UnrealStringWrapper GameEditorSaveDataWrapper::GetLoadedSaveName() [member function] */
        public GetLoadedSaveName(): UnrealStringWrapper;

        /** TrainingEditorSaveDataWrapper GameEditorSaveDataWrapper::GetTrainingData() [member function] */
        public GetTrainingData(): TrainingEditorSaveDataWrapper;

        /** void GameEditorSaveDataWrapper::SetTrainingData(TrainingEditorSaveDataWrapper newTrainingData) [member function] */
        public SetTrainingData(newTrainingData: TrainingEditorSaveDataWrapper): void;

        /** int GameEditorSaveDataWrapper::GetPlayerTeamNumber() [member function] */
        public GetPlayerTeamNumber(): number;

        /** void GameEditorSaveDataWrapper::SetPlayerTeamNumber(int newPlayerTeamNumber) [member function] */
        public SetPlayerTeamNumber(newPlayerTeamNumber: number): void;

        /** long unsigned int GameEditorSaveDataWrapper::GetbUnowned() [member function] */
        public GetbUnowned(): boolean;

        /** void GameEditorSaveDataWrapper::SetbUnowned(long unsigned int newbUnowned) [member function] */
        public SetbUnowned(newbUnowned: boolean): void;

        /** int GameEditorSaveDataWrapper::GetShotsCompleted() [member function] */
        public GetShotsCompleted(): number;

        /** void GameEditorSaveDataWrapper::SetShotsCompleted(int newShotsCompleted) [member function] */
        public SetShotsCompleted(newShotsCompleted: number): void;

        /** UnrealStringWrapper GameEditorSaveDataWrapper::GetFavoritesFolderPath() [member function] */
        public GetFavoritesFolderPath(): UnrealStringWrapper;

        /** UnrealStringWrapper GameEditorSaveDataWrapper::GetMyTrainingFolderPath() [member function] */
        public GetMyTrainingFolderPath(): UnrealStringWrapper;

        /** UnrealStringWrapper GameEditorSaveDataWrapper::GetDownloadedFolderPath() [member function] */
        public GetDownloadedFolderPath(): UnrealStringWrapper;

        /** unsigned char GameEditorSaveDataWrapper::GetTrainingSaveType(long unsigned int bOwned, long unsigned int bFavorited) [member function] */
        public GetTrainingSaveType(bOwned: boolean, bFavorited: boolean): number;

        /** void GameEditorSaveDataWrapper::Init() [member function] */
        public Init(): void;

    }

    /** TrainingEditorWrapper [class] */
    class TrainingEditorWrapper extends GameEditorWrapper {
        // Public:
        /** TrainingEditorWrapper::TrainingEditorWrapper(uintptr_t mem) [constructor] */
        public constructor(mem: bigint);

        /** float TrainingEditorWrapper::GetMinRoundTime() [member function] */
        public GetMinRoundTime(): number;

        /** void TrainingEditorWrapper::SetMinRoundTime(float newMinRoundTime) [member function] */
        public SetMinRoundTime(newMinRoundTime: number): void;

        /** float TrainingEditorWrapper::GetMaxRoundTime() [member function] */
        public GetMaxRoundTime(): number;

        /** void TrainingEditorWrapper::SetMaxRoundTime(float newMaxRoundTime) [member function] */
        public SetMaxRoundTime(newMaxRoundTime: number): void;

        /** long unsigned int TrainingEditorWrapper::GetbNoEditor() [member function] */
        public GetbNoEditor(): boolean;

        /** void TrainingEditorWrapper::SetbNoEditor(long unsigned int newbNoEditor) [member function] */
        public SetbNoEditor(newbNoEditor: boolean): void;

        /** long unsigned int TrainingEditorWrapper::GetbDisplayedRedoPenaltyMessage() [member function] */
        public GetbDisplayedRedoPenaltyMessage(): boolean;

        /** void TrainingEditorWrapper::SetbDisplayedRedoPenaltyMessage(long unsigned int newbDisplayedRedoPenaltyMessage) [member function] */
        public SetbDisplayedRedoPenaltyMessage(newbDisplayedRedoPenaltyMessage: boolean): void;

        /** long unsigned int TrainingEditorWrapper::GetbUnsavedChanges() [member function] */
        public GetbUnsavedChanges(): boolean;

        /** void TrainingEditorWrapper::SetbUnsavedChanges(long unsigned int newbUnsavedChanges) [member function] */
        public SetbUnsavedChanges(newbUnsavedChanges: boolean): void;

        /** int TrainingEditorWrapper::GetPointsScoredThisRound() [member function] */
        public GetPointsScoredThisRound(): number;

        /** void TrainingEditorWrapper::SetPointsScoredThisRound(int newPointsScoredThisRound) [member function] */
        public SetPointsScoredThisRound(newPointsScoredThisRound: number): void;

        /** int TrainingEditorWrapper::GetShotAttempt() [member function] */
        public GetShotAttempt(): number;

        /** void TrainingEditorWrapper::SetShotAttempt(int newShotAttempt) [member function] */
        public SetShotAttempt(newShotAttempt: number): void;

        /** int TrainingEditorWrapper::GetGoalieScore() [member function] */
        public GetGoalieScore(): number;

        /** void TrainingEditorWrapper::SetGoalieScore(int newGoalieScore) [member function] */
        public SetGoalieScore(newGoalieScore: number): void;

        /** unsigned char TrainingEditorWrapper::GetPlayTestType() [member function] */
        public GetPlayTestType(): number;

        /** void TrainingEditorWrapper::SetPlayTestType(unsigned char newPlayTestType) [member function] */
        public SetPlayTestType(newPlayTestType: number): void;

        /** ArrayWrapper<ActorWrapper> TrainingEditorWrapper::GetGoalMeshBlockers() [member function] */
        public GetGoalMeshBlockers(): ArrayWrapper_ActorWrapper;

        /** ActorWrapper TrainingEditorWrapper::GetGoalMeshBlockerArchetype() [member function] */
        public GetGoalMeshBlockerArchetype(): ActorWrapper;

        /** void TrainingEditorWrapper::SetGoalMeshBlockerArchetype(ActorWrapper newGoalMeshBlockerArchetype) [member function] */
        public SetGoalMeshBlockerArchetype(newGoalMeshBlockerArchetype: ActorWrapper): void;

        /** GameEditorSaveDataWrapper TrainingEditorWrapper::GetTrainingData() [member function] */
        public GetTrainingData(): GameEditorSaveDataWrapper;

        /** void TrainingEditorWrapper::SetTrainingData(GameEditorSaveDataWrapper newTrainingData) [member function] */
        public SetTrainingData(newTrainingData: GameEditorSaveDataWrapper): void;

        /** float TrainingEditorWrapper::GetSaveDelayTime() [member function] */
        public GetSaveDelayTime(): number;

        /** void TrainingEditorWrapper::SetSaveDelayTime(float newSaveDelayTime) [member function] */
        public SetSaveDelayTime(newSaveDelayTime: number): void;

        /** float TrainingEditorWrapper::GetSaveCooldown() [member function] */
        public GetSaveCooldown(): number;

        /** void TrainingEditorWrapper::SetSaveCooldown(float newSaveCooldown) [member function] */
        public SetSaveCooldown(newSaveCooldown: number): void;

        /** UnrealStringWrapper TrainingEditorWrapper::GetTrainingFileName() [member function] */
        public GetTrainingFileName(): UnrealStringWrapper;

        /** void TrainingEditorWrapper::OnLoadingMovieClosed() [member function] */
        public OnLoadingMovieClosed(): void;

        /** void TrainingEditorWrapper::TagHistoryChanges() [member function] */
        public TagHistoryChanges(): void;

        /** void TrainingEditorWrapper::MarkAsDirty() [member function] */
        public MarkAsDirty(): void;

        /** void TrainingEditorWrapper::ForceTagHistoryChanges() [member function] */
        public ForceTagHistoryChanges(): void;

        /** void TrainingEditorWrapper::SetTracedCrosshairActor(PlayerControllerWrapper PC, ActorWrapper NewActor) [member function] */
        public SetTracedCrosshairActor(PC: PlayerControllerWrapper, NewActor: ActorWrapper): void;

        /** bool TrainingEditorWrapper::DestroyBall(BallWrapper Ball) [member function] */
        public DestroyBall(Ball: BallWrapper): boolean;

        /** bool TrainingEditorWrapper::AllowDynamicCrowd() [member function] */
        public AllowDynamicCrowd(): boolean;

        /** void TrainingEditorWrapper::BroadcastGoMessage() [member function] */
        public BroadcastGoMessage(): void;

        /** int TrainingEditorWrapper::GetTotalRounds() [member function] */
        public GetTotalRounds(): number;

        /** unsigned char TrainingEditorWrapper::GetDifficulty() [member function] */
        public GetDifficulty(): number;

        /** unsigned char TrainingEditorWrapper::GetTrainingType() [member function] */
        public GetTrainingType(): number;

        /** void TrainingEditorWrapper::Save2() [member function] */
        public Save2(): void;

        /** void TrainingEditorWrapper::OnTrainingModeLoaded() [member function] */
        public OnTrainingModeLoaded(): void;

        /** void TrainingEditorWrapper::DuplicateRound(int Index) [member function] */
        public DuplicateRound(Index: number): void;

        /** void TrainingEditorWrapper::ReorderRound(int FromIndex, int ToIndex) [member function] */
        public ReorderRound(FromIndex: number, ToIndex: number): void;

        /** void TrainingEditorWrapper::SetRoundTimeLimit(float NewRoundTime) [member function] */
        public SetRoundTimeLimit(NewRoundTime: number): void;

        /** bool TrainingEditorWrapper::HandleNextGame() [member function] */
        public HandleNextGame(): boolean;

        /** void TrainingEditorWrapper::ResetBalls() [member function] */
        public ResetBalls(): void;

        /** void TrainingEditorWrapper::Load2(std::string SaveName, PlayerControllerWrapper PC) [member function] */
        public Load2(SaveName: string, PC: PlayerControllerWrapper): void;

        /** void TrainingEditorWrapper::DestroyGoalMeshBlockers() [member function] */
        public DestroyGoalMeshBlockers(): void;

        /** void TrainingEditorWrapper::UpdateGoalMeshBlocker() [member function] */
        public UpdateGoalMeshBlocker(): void;

        /** int TrainingEditorWrapper::GetScore() [member function] */
        public GetScore(): number;

        /** void TrainingEditorWrapper::RemovePointsFromScore(int PointsToRemove, int TeamIndex) [member function] */
        public RemovePointsFromScore(PointsToRemove: number, TeamIndex: number): void;

        /** bool TrainingEditorWrapper::ShowScorerGoalMessage() [member function] */
        public ShowScorerGoalMessage(): boolean;

        /** void TrainingEditorWrapper::ShowResetRoundMessage() [member function] */
        public ShowResetRoundMessage(): void;

        /** bool TrainingEditorWrapper::ShowPenaltyMessage() [member function] */
        public ShowPenaltyMessage(): boolean;

        /** int TrainingEditorWrapper::GetPlayerTeamNumber() [member function] */
        public GetPlayerTeamNumber(): number;

        /** int TrainingEditorWrapper::GetBallGoalScoreNumber() [member function] */
        public GetBallGoalScoreNumber(): number;

        /** void TrainingEditorWrapper::RemoveAllPointsFromScore(int TeamIndex) [member function] */
        public RemoveAllPointsFromScore(TeamIndex: number): void;

        /** bool TrainingEditorWrapper::IncrementRound(long unsigned int bLoop) [member function] */
        public IncrementRound(bLoop: boolean): boolean;

        /** Vector TrainingEditorWrapper::AdjustToFloorLocation(Vector & TraceStart, Vector & CollsionExtent) [member function] */
        public AdjustToFloorLocation(TraceStart: Vector, CollsionExtent: Vector): Vector;

        /** ActorWrapper TrainingEditorWrapper::SpawnArchetypeAtAndAdjustToFloor(ActorWrapper Archetype, Vector & SpawnLocation, Rotator & SpawnRotation) [member function] */
        public SpawnArchetypeAtAndAdjustToFloor(Archetype: ActorWrapper, SpawnLocation: Vector, SpawnRotation: Rotator): ActorWrapper;

        /** void TrainingEditorWrapper::SpawnBallAndStartPointAt(Vector & BallSpawnLocation, Rotator & BallSpawnRotation, Vector & StartPointSpawnLocation, Rotator & StartPointSpawnRotation) [member function] */
        public SpawnBallAndStartPointAt(BallSpawnLocation: Vector, BallSpawnRotation: Rotator, StartPointSpawnLocation: Vector, StartPointSpawnRotation: Rotator): void;

        /** void TrainingEditorWrapper::SetupDefaultRound() [member function] */
        public SetupDefaultRound(): void;

        /** void TrainingEditorWrapper::SwitchToRoundNumber(int RoundNumber, long unsigned int BackupCurrentRound) [member function] */
        public SwitchToRoundNumber(RoundNumber: number, BackupCurrentRound: boolean): void;

        /** void TrainingEditorWrapper::DeleteRound(int RoundToDelete) [member function] */
        public DeleteRound(RoundToDelete: number): void;

        /** void TrainingEditorWrapper::RestartPlayTest() [member function] */
        public RestartPlayTest(): void;

        /** void TrainingEditorWrapper::EndPlayTest() [member function] */
        public EndPlayTest(): void;

        /** void TrainingEditorWrapper::StartPlayTest(unsigned char InPlayTestType) [member function] */
        public StartPlayTest(InPlayTestType: number): void;

        /** bool TrainingEditorWrapper::CanPlayTestRoundNumber(int RoundNumber) [member function] */
        public CanPlayTestRoundNumber(RoundNumber: number): boolean;

        /** void TrainingEditorWrapper::SetUnsavedChanges(long unsigned int bInUnsavedChanges) [member function] */
        public SetUnsavedChanges(bInUnsavedChanges: boolean): void;

        /** void TrainingEditorWrapper::UpdateActiveRoundData() [member function] */
        public UpdateActiveRoundData(): void;

        /** void TrainingEditorWrapper::StartNewRound() [member function] */
        public StartNewRound(): void;

        /** bool TrainingEditorWrapper::IsValidRoundIndex(int ArrayIndex) [member function] */
        public IsValidRoundIndex(ArrayIndex: number): boolean;

        /** void TrainingEditorWrapper::AddLocalPlayer(PlayerControllerWrapper Player) [member function] */
        public AddLocalPlayer(Player: PlayerControllerWrapper): void;

        /** void TrainingEditorWrapper::OnInit() [member function] */
        public OnInit(): void;

        /** void TrainingEditorWrapper::eventDestroyed() [member function] */
        public eventDestroyed(): void;

        /** void TrainingEditorWrapper::eventPostBeginPlay() [member function] */
        public eventPostBeginPlay(): void;

        /** void TrainingEditorWrapper::EventSaveResult(long unsigned int bSuccess) [member function] */
        public EventSaveResult(bSuccess: boolean): void;

        /** void TrainingEditorWrapper::EventUnsavedChanges(long unsigned int bOutUnsavedChanges) [member function] */
        public EventUnsavedChanges(bOutUnsavedChanges: boolean): void;

        /** void TrainingEditorWrapper::EventPlaytestStarted(TrainingEditorWrapper GamEvent) [member function] */
        public EventPlaytestStarted(GamEvent: TrainingEditorWrapper): void;

        /** void TrainingEditorWrapper::EventRoundChanged(TrainingEditorWrapper GamEvent) [member function] */
        public EventRoundChanged(GamEvent: TrainingEditorWrapper): void;

        /** void TrainingEditorWrapper::EventRoundTimeChanged(TrainingEditorWrapper GameEvent) [member function] */
        public EventRoundTimeChanged(GameEvent: TrainingEditorWrapper): void;

    }

    /** BaseCameraWrapper [class] */
    class BaseCameraWrapper extends ActorWrapper {
        // Public:
        /** BaseCameraWrapper::BaseCameraWrapper(uintptr_t mem) [constructor] */
        public constructor(mem: bigint);

        /** float BaseCameraWrapper::GetDefaultFOV() [member function] */
        public GetDefaultFOV(): number;

        /** void BaseCameraWrapper::SetDefaultFOV(float newDefaultFOV) [member function] */
        public SetDefaultFOV(newDefaultFOV: number): void;

        /** long unsigned int BaseCameraWrapper::GetbLockedFOV() [member function] */
        public GetbLockedFOV(): boolean;

        /** void BaseCameraWrapper::SetbLockedFOV(long unsigned int newbLockedFOV) [member function] */
        public SetbLockedFOV(newbLockedFOV: boolean): void;

        /** long unsigned int BaseCameraWrapper::GetbConstrainAspectRatio() [member function] */
        public GetbConstrainAspectRatio(): boolean;

        /** void BaseCameraWrapper::SetbConstrainAspectRatio(long unsigned int newbConstrainAspectRatio) [member function] */
        public SetbConstrainAspectRatio(newbConstrainAspectRatio: boolean): void;

        /** long unsigned int BaseCameraWrapper::GetbEnableFading() [member function] */
        public GetbEnableFading(): boolean;

        /** void BaseCameraWrapper::SetbEnableFading(long unsigned int newbEnableFading) [member function] */
        public SetbEnableFading(newbEnableFading: boolean): void;

        /** long unsigned int BaseCameraWrapper::GetbFadeAudio() [member function] */
        public GetbFadeAudio(): boolean;

        /** void BaseCameraWrapper::SetbFadeAudio(long unsigned int newbFadeAudio) [member function] */
        public SetbFadeAudio(newbFadeAudio: boolean): void;

        /** long unsigned int BaseCameraWrapper::GetbForceDisableTemporalAA() [member function] */
        public GetbForceDisableTemporalAA(): boolean;

        /** void BaseCameraWrapper::SetbForceDisableTemporalAA(long unsigned int newbForceDisableTemporalAA) [member function] */
        public SetbForceDisableTemporalAA(newbForceDisableTemporalAA: boolean): void;

        /** long unsigned int BaseCameraWrapper::GetbEnableColorScaling() [member function] */
        public GetbEnableColorScaling(): boolean;

        /** void BaseCameraWrapper::SetbEnableColorScaling(long unsigned int newbEnableColorScaling) [member function] */
        public SetbEnableColorScaling(newbEnableColorScaling: boolean): void;

        /** long unsigned int BaseCameraWrapper::GetbEnableColorScaleInterp() [member function] */
        public GetbEnableColorScaleInterp(): boolean;

        /** void BaseCameraWrapper::SetbEnableColorScaleInterp(long unsigned int newbEnableColorScaleInterp) [member function] */
        public SetbEnableColorScaleInterp(newbEnableColorScaleInterp: boolean): void;

        /** long unsigned int BaseCameraWrapper::GetbUseClientSideCameraUpdates() [member function] */
        public GetbUseClientSideCameraUpdates(): boolean;

        /** void BaseCameraWrapper::SetbUseClientSideCameraUpdates(long unsigned int newbUseClientSideCameraUpdates) [member function] */
        public SetbUseClientSideCameraUpdates(newbUseClientSideCameraUpdates: boolean): void;

        /** long unsigned int BaseCameraWrapper::GetbDebugClientSideCamera() [member function] */
        public GetbDebugClientSideCamera(): boolean;

        /** void BaseCameraWrapper::SetbDebugClientSideCamera(long unsigned int newbDebugClientSideCamera) [member function] */
        public SetbDebugClientSideCamera(newbDebugClientSideCamera: boolean): void;

        /** long unsigned int BaseCameraWrapper::GetbShouldSendClientSideCameraUpdate() [member function] */
        public GetbShouldSendClientSideCameraUpdate(): boolean;

        /** void BaseCameraWrapper::SetbShouldSendClientSideCameraUpdate(long unsigned int newbShouldSendClientSideCameraUpdate) [member function] */
        public SetbShouldSendClientSideCameraUpdate(newbShouldSendClientSideCameraUpdate: boolean): void;

        /** float BaseCameraWrapper::GetLockedFOV() [member function] */
        public GetLockedFOV(): number;

        /** void BaseCameraWrapper::SetLockedFOV(float newLockedFOV) [member function] */
        public SetLockedFOV(newLockedFOV: number): void;

        /** float BaseCameraWrapper::GetConstrainedAspectRatio() [member function] */
        public GetConstrainedAspectRatio(): number;

        /** void BaseCameraWrapper::SetConstrainedAspectRatio(float newConstrainedAspectRatio) [member function] */
        public SetConstrainedAspectRatio(newConstrainedAspectRatio: number): void;

        /** float BaseCameraWrapper::GetDefaultAspectRatio() [member function] */
        public GetDefaultAspectRatio(): number;

        /** void BaseCameraWrapper::SetDefaultAspectRatio(float newDefaultAspectRatio) [member function] */
        public SetDefaultAspectRatio(newDefaultAspectRatio: number): void;

        /** float BaseCameraWrapper::GetOffAxisYawAngle() [member function] */
        public GetOffAxisYawAngle(): number;

        /** void BaseCameraWrapper::SetOffAxisYawAngle(float newOffAxisYawAngle) [member function] */
        public SetOffAxisYawAngle(newOffAxisYawAngle: number): void;

        /** float BaseCameraWrapper::GetOffAxisPitchAngle() [member function] */
        public GetOffAxisPitchAngle(): number;

        /** void BaseCameraWrapper::SetOffAxisPitchAngle(float newOffAxisPitchAngle) [member function] */
        public SetOffAxisPitchAngle(newOffAxisPitchAngle: number): void;

        /** UnrealColor BaseCameraWrapper::GetFadeColor() [member function] */
        public GetFadeColor(): UnrealColor;

        /** void BaseCameraWrapper::SetFadeColor(UnrealColor newFadeColor) [member function] */
        public SetFadeColor(newFadeColor: UnrealColor): void;

        /** float BaseCameraWrapper::GetFadeAmount() [member function] */
        public GetFadeAmount(): number;

        /** void BaseCameraWrapper::SetFadeAmount(float newFadeAmount) [member function] */
        public SetFadeAmount(newFadeAmount: number): void;

        /** float BaseCameraWrapper::GetCamOverridePostProcessAlpha() [member function] */
        public GetCamOverridePostProcessAlpha(): number;

        /** void BaseCameraWrapper::SetCamOverridePostProcessAlpha(float newCamOverridePostProcessAlpha) [member function] */
        public SetCamOverridePostProcessAlpha(newCamOverridePostProcessAlpha: number): void;

        /** Vector BaseCameraWrapper::GetColorScale() [member function] */
        public GetColorScale(): Vector;

        /** void BaseCameraWrapper::SetColorScale(Vector newColorScale) [member function] */
        public SetColorScale(newColorScale: Vector): void;

        /** Vector BaseCameraWrapper::GetDesiredColorScale() [member function] */
        public GetDesiredColorScale(): Vector;

        /** void BaseCameraWrapper::SetDesiredColorScale(Vector newDesiredColorScale) [member function] */
        public SetDesiredColorScale(newDesiredColorScale: Vector): void;

        /** Vector BaseCameraWrapper::GetOriginalColorScale() [member function] */
        public GetOriginalColorScale(): Vector;

        /** void BaseCameraWrapper::SetOriginalColorScale(Vector newOriginalColorScale) [member function] */
        public SetOriginalColorScale(newOriginalColorScale: Vector): void;

        /** float BaseCameraWrapper::GetColorScaleInterpDuration() [member function] */
        public GetColorScaleInterpDuration(): number;

        /** void BaseCameraWrapper::SetColorScaleInterpDuration(float newColorScaleInterpDuration) [member function] */
        public SetColorScaleInterpDuration(newColorScaleInterpDuration: number): void;

        /** float BaseCameraWrapper::GetColorScaleInterpStartTime() [member function] */
        public GetColorScaleInterpStartTime(): number;

        /** void BaseCameraWrapper::SetColorScaleInterpStartTime(float newColorScaleInterpStartTime) [member function] */
        public SetColorScaleInterpStartTime(newColorScaleInterpStartTime: number): void;

        /** ViewTarget BaseCameraWrapper::GetViewTarget() [member function] */
        public GetViewTarget(): ViewTarget;

        /** void BaseCameraWrapper::SetViewTarget(ViewTarget newViewTarget) [member function] */
        public SetViewTarget(newViewTarget: ViewTarget): void;

        /** ViewTarget BaseCameraWrapper::GetPendingViewTarget() [member function] */
        public GetPendingViewTarget(): ViewTarget;

        /** void BaseCameraWrapper::SetPendingViewTarget(ViewTarget newPendingViewTarget) [member function] */
        public SetPendingViewTarget(newPendingViewTarget: ViewTarget): void;

        /** float BaseCameraWrapper::GetBlendTimeToGo() [member function] */
        public GetBlendTimeToGo(): number;

        /** void BaseCameraWrapper::SetBlendTimeToGo(float newBlendTimeToGo) [member function] */
        public SetBlendTimeToGo(newBlendTimeToGo: number): void;

        /** float BaseCameraWrapper::GetFreeCamDistance() [member function] */
        public GetFreeCamDistance(): number;

        /** void BaseCameraWrapper::SetFreeCamDistance(float newFreeCamDistance) [member function] */
        public SetFreeCamDistance(newFreeCamDistance: number): void;

        /** Vector BaseCameraWrapper::GetFreeCamOffset() [member function] */
        public GetFreeCamOffset(): Vector;

        /** void BaseCameraWrapper::SetFreeCamOffset(Vector newFreeCamOffset) [member function] */
        public SetFreeCamOffset(newFreeCamOffset: Vector): void;

        /** float BaseCameraWrapper::GetFadeTime() [member function] */
        public GetFadeTime(): number;

        /** void BaseCameraWrapper::SetFadeTime(float newFadeTime) [member function] */
        public SetFadeTime(newFadeTime: number): void;

        /** float BaseCameraWrapper::GetFadeTimeRemaining() [member function] */
        public GetFadeTimeRemaining(): number;

        /** void BaseCameraWrapper::SetFadeTimeRemaining(float newFadeTimeRemaining) [member function] */
        public SetFadeTimeRemaining(newFadeTimeRemaining: number): void;

        /** void BaseCameraWrapper::StopAllCameraAnims(long unsigned int bImmediate) [member function] */
        public StopAllCameraAnims(bImmediate: boolean): void;

        /** void BaseCameraWrapper::ClearAllCameraShakes() [member function] */
        public ClearAllCameraShakes(): void;

        /** float BaseCameraWrapper::CalcRadialShakeScale(BaseCameraWrapper Cam, Vector & Epicenter, float InnerRadius, float OuterRadius, float Falloff) [member function] */
        public CalcRadialShakeScale(Cam: BaseCameraWrapper, Epicenter: Vector, InnerRadius: number, OuterRadius: number, Falloff: number): number;

        /** void BaseCameraWrapper::ClearCameraLensEffects() [member function] */
        public ClearCameraLensEffects(): void;

        /** void BaseCameraWrapper::ApplyAudioFade() [member function] */
        public ApplyAudioFade(): void;

        /** void BaseCameraWrapper::UpdateFade(float DeltaTime) [member function] */
        public UpdateFade(DeltaTime: number): void;

        /** void BaseCameraWrapper::DoUpdateCamera(float DeltaTime) [member function] */
        public DoUpdateCamera(DeltaTime: number): void;

        /** void BaseCameraWrapper::eventUpdateCamera(float DeltaTime) [member function] */
        public eventUpdateCamera(DeltaTime: number): void;

        /** void BaseCameraWrapper::SetDesiredColorScale2(Vector & NewColorScale, float InterpTime) [member function] */
        public SetDesiredColorScale2(NewColorScale: Vector, InterpTime: number): void;

        /** Rotator BaseCameraWrapper::GetCameraRotation() [member function] */
        public GetCameraRotation(): Rotator;

        /** void BaseCameraWrapper::SetFOV(float NewFOV) [member function] */
        public SetFOV(NewFOV: number): void;

        /** float BaseCameraWrapper::GetFOVAngle() [member function] */
        public GetFOVAngle(): number;

        /** void BaseCameraWrapper::eventDestroyed() [member function] */
        public eventDestroyed(): void;

        /** void BaseCameraWrapper::PostBeginPlay() [member function] */
        public PostBeginPlay(): void;

    }

    /** CameraXWrapper [class] */
    class CameraXWrapper extends BaseCameraWrapper {
        // Public:
        /** CameraXWrapper::CameraXWrapper(uintptr_t mem) [constructor] */
        public constructor(mem: bigint);

        /** Rotator CameraXWrapper::GetPCDeltaRotation() [member function] */
        public GetPCDeltaRotation(): Rotator;

        /** void CameraXWrapper::SetPCDeltaRotation(Rotator newPCDeltaRotation) [member function] */
        public SetPCDeltaRotation(newPCDeltaRotation: Rotator): void;

        /** Rotator CameraXWrapper::GetOldControllerRotation() [member function] */
        public GetOldControllerRotation(): Rotator;

        /** void CameraXWrapper::SetOldControllerRotation(Rotator newOldControllerRotation) [member function] */
        public SetOldControllerRotation(newOldControllerRotation: Rotator): void;

        /** Vector CameraXWrapper::GetPCDeltaLocation() [member function] */
        public GetPCDeltaLocation(): Vector;

        /** void CameraXWrapper::SetPCDeltaLocation(Vector newPCDeltaLocation) [member function] */
        public SetPCDeltaLocation(newPCDeltaLocation: Vector): void;

        /** Vector CameraXWrapper::GetOldControllerLocation() [member function] */
        public GetOldControllerLocation(): Vector;

        /** void CameraXWrapper::SetOldControllerLocation(Vector newOldControllerLocation) [member function] */
        public SetOldControllerLocation(newOldControllerLocation: Vector): void;

        /** Vector CameraXWrapper::GetShakeLocationOffset() [member function] */
        public GetShakeLocationOffset(): Vector;

        /** void CameraXWrapper::SetShakeLocationOffset(Vector newShakeLocationOffset) [member function] */
        public SetShakeLocationOffset(newShakeLocationOffset: Vector): void;

        /** Rotator CameraXWrapper::GetShakeRotationOffset() [member function] */
        public GetShakeRotationOffset(): Rotator;

        /** void CameraXWrapper::SetShakeRotationOffset(Rotator newShakeRotationOffset) [member function] */
        public SetShakeRotationOffset(newShakeRotationOffset: Rotator): void;

        /** float CameraXWrapper::GetShakeFOVOffset() [member function] */
        public GetShakeFOVOffset(): number;

        /** void CameraXWrapper::SetShakeFOVOffset(float newShakeFOVOffset) [member function] */
        public SetShakeFOVOffset(newShakeFOVOffset: number): void;

        /** UnrealColor CameraXWrapper::GetStartFadeColor() [member function] */
        public GetStartFadeColor(): UnrealColor;

        /** void CameraXWrapper::SetStartFadeColor(UnrealColor newStartFadeColor) [member function] */
        public SetStartFadeColor(newStartFadeColor: UnrealColor): void;

        /** UnrealColor CameraXWrapper::GetEndFadeColor() [member function] */
        public GetEndFadeColor(): UnrealColor;

        /** void CameraXWrapper::SetEndFadeColor(UnrealColor newEndFadeColor) [member function] */
        public SetEndFadeColor(newEndFadeColor: UnrealColor): void;

        /** Vector CameraXWrapper::GetClipOffset() [member function] */
        public GetClipOffset(): Vector;

        /** void CameraXWrapper::SetClipOffset(Vector newClipOffset) [member function] */
        public SetClipOffset(newClipOffset: Vector): void;

        /** long unsigned int CameraXWrapper::GetbDisableCameraShake() [member function] */
        public GetbDisableCameraShake(): boolean;

        /** void CameraXWrapper::SetbDisableCameraShake(long unsigned int newbDisableCameraShake) [member function] */
        public SetbDisableCameraShake(newbDisableCameraShake: boolean): void;

        /** long unsigned int CameraXWrapper::GetbSnapNextTransition() [member function] */
        public GetbSnapNextTransition(): boolean;

        /** void CameraXWrapper::SetbSnapNextTransition(long unsigned int newbSnapNextTransition) [member function] */
        public SetbSnapNextTransition(newbSnapNextTransition: boolean): void;

        /** void CameraXWrapper::eventOnViewTargetChanged() [member function] */
        public eventOnViewTargetChanged(): void;

        /** bool CameraXWrapper::IsTransitioning() [member function] */
        public IsTransitioning(): boolean;

        /** void CameraXWrapper::SnapTransition() [member function] */
        public SnapTransition(): void;

        /** void CameraXWrapper::CopyFade(CameraXWrapper Other) [member function] */
        public CopyFade(Other: CameraXWrapper): void;

        /** void CameraXWrapper::UpdateFade(float DeltaTime) [member function] */
        public UpdateFade(DeltaTime: number): void;

        /** void CameraXWrapper::eventUpdateCamera(float DeltaTime) [member function] */
        public eventUpdateCamera(DeltaTime: number): void;

        /** Rotator CameraXWrapper::RemoveRoll(Rotator & InRot) [member function] */
        public RemoveRoll(InRot: Rotator): Rotator;

        /** void CameraXWrapper::UpdateCameraState() [member function] */
        public UpdateCameraState(): void;

        /** void CameraXWrapper::InstanceCameraStates() [member function] */
        public InstanceCameraStates(): void;

        /** void CameraXWrapper::OnLoadingMovieClosesd() [member function] */
        public OnLoadingMovieClosesd(): void;

        /** void CameraXWrapper::eventPostBeginPlay() [member function] */
        public eventPostBeginPlay(): void;

    }

    /** SampleRecordSettingsWrapper [class] */
    class SampleRecordSettingsWrapper extends ObjectWrapper {
        // Public:
        /** SampleRecordSettingsWrapper::SampleRecordSettingsWrapper(uintptr_t mem) [constructor] */
        public constructor(mem: bigint);

        /** bool SampleRecordSettingsWrapper::IsNull() const [member function] */
        public IsNull(): boolean;

        /** float SampleRecordSettingsWrapper::GetMaxSampleAge() [member function] */
        public GetMaxSampleAge(): number;

        /** void SampleRecordSettingsWrapper::SetMaxSampleAge(float newMaxSampleAge) [member function] */
        public SetMaxSampleAge(newMaxSampleAge: number): void;

        /** float SampleRecordSettingsWrapper::GetRecordRate() [member function] */
        public GetRecordRate(): number;

        /** void SampleRecordSettingsWrapper::SetRecordRate(float newRecordRate) [member function] */
        public SetRecordRate(newRecordRate: number): void;

    }

    /** InputBufferGraphWrapper [class] */
    class InputBufferGraphWrapper extends StatGraphWrapper {
        // Public:
        /** InputBufferGraphWrapper::InputBufferGraphWrapper(uintptr_t mem) [constructor] */
        public constructor(mem: bigint);

        /** SampleHistoryWrapper InputBufferGraphWrapper::GetBuffer() [member function] */
        public GetBuffer(): SampleHistoryWrapper;

        /** void InputBufferGraphWrapper::SetBuffer(SampleHistoryWrapper newBuffer) [member function] */
        public SetBuffer(newBuffer: SampleHistoryWrapper): void;

        /** SampleHistoryWrapper InputBufferGraphWrapper::GetBufferTarget() [member function] */
        public GetBufferTarget(): SampleHistoryWrapper;

        /** void InputBufferGraphWrapper::SetBufferTarget(SampleHistoryWrapper newBufferTarget) [member function] */
        public SetBufferTarget(newBufferTarget: SampleHistoryWrapper): void;

        /** SampleHistoryWrapper InputBufferGraphWrapper::GetOverUnderFrames() [member function] */
        public GetOverUnderFrames(): SampleHistoryWrapper;

        /** void InputBufferGraphWrapper::SetOverUnderFrames(SampleHistoryWrapper newOverUnderFrames) [member function] */
        public SetOverUnderFrames(newOverUnderFrames: SampleHistoryWrapper): void;

        /** SampleHistoryWrapper InputBufferGraphWrapper::GetPhysicsRate() [member function] */
        public GetPhysicsRate(): SampleHistoryWrapper;

        /** void InputBufferGraphWrapper::SetPhysicsRate(SampleHistoryWrapper newPhysicsRate) [member function] */
        public SetPhysicsRate(newPhysicsRate: SampleHistoryWrapper): void;

        /** float InputBufferGraphWrapper::GetMaxPhysicsRate() [member function] */
        public GetMaxPhysicsRate(): number;

        /** void InputBufferGraphWrapper::SetMaxPhysicsRate(float newMaxPhysicsRate) [member function] */
        public SetMaxPhysicsRate(newMaxPhysicsRate: number): void;

        /** float InputBufferGraphWrapper::GetMinPhysicsRate() [member function] */
        public GetMinPhysicsRate(): number;

        /** void InputBufferGraphWrapper::SetMinPhysicsRate(float newMinPhysicsRate) [member function] */
        public SetMinPhysicsRate(newMinPhysicsRate: number): void;

        /** SampleHistoryWrapper InputBufferGraphWrapper::CreateBufferHistory(std::string Title) [member function] */
        public CreateBufferHistory(Title: string): SampleHistoryWrapper;

        /** void InputBufferGraphWrapper::eventConstruct() [member function] */
        public eventConstruct(): void;

    }

    /** NetStatGraphWrapper [class] */
    class NetStatGraphWrapper extends StatGraphWrapper {
        // Public:
        /** NetStatGraphWrapper::NetStatGraphWrapper(uintptr_t mem) [constructor] */
        public constructor(mem: bigint);

        /** SampleHistoryWrapper NetStatGraphWrapper::GetPacketsOut() [member function] */
        public GetPacketsOut(): SampleHistoryWrapper;

        /** void NetStatGraphWrapper::SetPacketsOut(SampleHistoryWrapper newPacketsOut) [member function] */
        public SetPacketsOut(newPacketsOut: SampleHistoryWrapper): void;

        /** SampleHistoryWrapper NetStatGraphWrapper::GetPacketsIn() [member function] */
        public GetPacketsIn(): SampleHistoryWrapper;

        /** void NetStatGraphWrapper::SetPacketsIn(SampleHistoryWrapper newPacketsIn) [member function] */
        public SetPacketsIn(newPacketsIn: SampleHistoryWrapper): void;

        /** SampleHistoryWrapper NetStatGraphWrapper::GetLostPacketsOut() [member function] */
        public GetLostPacketsOut(): SampleHistoryWrapper;

        /** void NetStatGraphWrapper::SetLostPacketsOut(SampleHistoryWrapper newLostPacketsOut) [member function] */
        public SetLostPacketsOut(newLostPacketsOut: SampleHistoryWrapper): void;

        /** SampleHistoryWrapper NetStatGraphWrapper::GetLostPacketsIn() [member function] */
        public GetLostPacketsIn(): SampleHistoryWrapper;

        /** void NetStatGraphWrapper::SetLostPacketsIn(SampleHistoryWrapper newLostPacketsIn) [member function] */
        public SetLostPacketsIn(newLostPacketsIn: SampleHistoryWrapper): void;

        /** SampleHistoryWrapper NetStatGraphWrapper::GetBytesOut() [member function] */
        public GetBytesOut(): SampleHistoryWrapper;

        /** void NetStatGraphWrapper::SetBytesOut(SampleHistoryWrapper newBytesOut) [member function] */
        public SetBytesOut(newBytesOut: SampleHistoryWrapper): void;

        /** SampleHistoryWrapper NetStatGraphWrapper::GetBytesIn() [member function] */
        public GetBytesIn(): SampleHistoryWrapper;

        /** void NetStatGraphWrapper::SetBytesIn(SampleHistoryWrapper newBytesIn) [member function] */
        public SetBytesIn(newBytesIn: SampleHistoryWrapper): void;

        /** SampleHistoryWrapper NetStatGraphWrapper::GetLatency() [member function] */
        public GetLatency(): SampleHistoryWrapper;

        /** void NetStatGraphWrapper::SetLatency(SampleHistoryWrapper newLatency) [member function] */
        public SetLatency(newLatency: SampleHistoryWrapper): void;

        /** float NetStatGraphWrapper::GetExpectedOutPacketRate() [member function] */
        public GetExpectedOutPacketRate(): number;

        /** void NetStatGraphWrapper::SetExpectedOutPacketRate(float newExpectedOutPacketRate) [member function] */
        public SetExpectedOutPacketRate(newExpectedOutPacketRate: number): void;

        /** float NetStatGraphWrapper::GetExpectedInPacketRate() [member function] */
        public GetExpectedInPacketRate(): number;

        /** void NetStatGraphWrapper::SetExpectedInPacketRate(float newExpectedInPacketRate) [member function] */
        public SetExpectedInPacketRate(newExpectedInPacketRate: number): void;

        /** float NetStatGraphWrapper::GetMaxBytesRate() [member function] */
        public GetMaxBytesRate(): number;

        /** void NetStatGraphWrapper::SetMaxBytesRate(float newMaxBytesRate) [member function] */
        public SetMaxBytesRate(newMaxBytesRate: number): void;

        /** void NetStatGraphWrapper::eventUpdateGraphRanges() [member function] */
        public eventUpdateGraphRanges(): void;

        /** SampleHistoryWrapper NetStatGraphWrapper::CreateBytesSummary(std::string Title) [member function] */
        public CreateBytesSummary(Title: string): SampleHistoryWrapper;

        /** SampleHistoryWrapper NetStatGraphWrapper::CreateLossSummary(std::string Title) [member function] */
        public CreateLossSummary(Title: string): SampleHistoryWrapper;

        /** SampleHistoryWrapper NetStatGraphWrapper::CreatePktSummary(std::string Title) [member function] */
        public CreatePktSummary(Title: string): SampleHistoryWrapper;

        /** void NetStatGraphWrapper::eventConstruct() [member function] */
        public eventConstruct(): void;

    }

    /** PerfStatGraphWrapper [class] */
    class PerfStatGraphWrapper extends StatGraphWrapper {
        // Public:
        /** PerfStatGraphWrapper::PerfStatGraphWrapper(uintptr_t mem) [constructor] */
        public constructor(mem: bigint);

        /** SampleHistoryWrapper PerfStatGraphWrapper::GetFPS() [member function] */
        public GetFPS(): SampleHistoryWrapper;

        /** void PerfStatGraphWrapper::SetFPS(SampleHistoryWrapper newFPS) [member function] */
        public SetFPS(newFPS: SampleHistoryWrapper): void;

        /** SampleHistoryWrapper PerfStatGraphWrapper::GetFrameTime() [member function] */
        public GetFrameTime(): SampleHistoryWrapper;

        /** void PerfStatGraphWrapper::SetFrameTime(SampleHistoryWrapper newFrameTime) [member function] */
        public SetFrameTime(newFrameTime: SampleHistoryWrapper): void;

        /** SampleHistoryWrapper PerfStatGraphWrapper::GetGameThreadTime() [member function] */
        public GetGameThreadTime(): SampleHistoryWrapper;

        /** void PerfStatGraphWrapper::SetGameThreadTime(SampleHistoryWrapper newGameThreadTime) [member function] */
        public SetGameThreadTime(newGameThreadTime: SampleHistoryWrapper): void;

        /** SampleHistoryWrapper PerfStatGraphWrapper::GetRenderThreadTime() [member function] */
        public GetRenderThreadTime(): SampleHistoryWrapper;

        /** void PerfStatGraphWrapper::SetRenderThreadTime(SampleHistoryWrapper newRenderThreadTime) [member function] */
        public SetRenderThreadTime(newRenderThreadTime: SampleHistoryWrapper): void;

        /** SampleHistoryWrapper PerfStatGraphWrapper::GetGPUFrameTime() [member function] */
        public GetGPUFrameTime(): SampleHistoryWrapper;

        /** void PerfStatGraphWrapper::SetGPUFrameTime(SampleHistoryWrapper newGPUFrameTime) [member function] */
        public SetGPUFrameTime(newGPUFrameTime: SampleHistoryWrapper): void;

        /** ArrayWrapper<SampleHistoryWrapper> PerfStatGraphWrapper::GetFrameTimeHistories() [member function] */
        public GetFrameTimeHistories(): ArrayWrapper_SampleHistoryWrapper;

        /** float PerfStatGraphWrapper::GetMaxFPS() [member function] */
        public GetMaxFPS(): number;

        /** void PerfStatGraphWrapper::SetMaxFPS(float newMaxFPS) [member function] */
        public SetMaxFPS(newMaxFPS: number): void;

        /** float PerfStatGraphWrapper::GetTargetFPS() [member function] */
        public GetTargetFPS(): number;

        /** void PerfStatGraphWrapper::SetTargetFPS(float newTargetFPS) [member function] */
        public SetTargetFPS(newTargetFPS: number): void;

        /** void PerfStatGraphWrapper::eventUpdateGraphRanges() [member function] */
        public eventUpdateGraphRanges(): void;

        /** SampleHistoryWrapper PerfStatGraphWrapper::CreateFrameTimeHistory(std::string Title) [member function] */
        public CreateFrameTimeHistory(Title: string): SampleHistoryWrapper;

        /** SampleHistoryWrapper PerfStatGraphWrapper::CreateFpsHistory(std::string Title) [member function] */
        public CreateFpsHistory(Title: string): SampleHistoryWrapper;

        /** void PerfStatGraphWrapper::eventConstruct() [member function] */
        public eventConstruct(): void;

    }

    /** PhysicalMaterialPropertyWrapper [class] */
    class PhysicalMaterialPropertyWrapper extends ObjectWrapper {
        // Public:
        /** PhysicalMaterialPropertyWrapper::PhysicalMaterialPropertyWrapper(uintptr_t mem) [constructor] */
        public constructor(mem: bigint);

        /** bool PhysicalMaterialPropertyWrapper::IsNull() const [member function] */
        public IsNull(): boolean;

        /** float PhysicalMaterialPropertyWrapper::GetTireFrictionScale() [member function] */
        public GetTireFrictionScale(): number;

        /** void PhysicalMaterialPropertyWrapper::SetTireFrictionScale(float newTireFrictionScale) [member function] */
        public SetTireFrictionScale(newTireFrictionScale: number): void;

        /** long unsigned int PhysicalMaterialPropertyWrapper::GetbStickyWheels() [member function] */
        public GetbStickyWheels(): boolean;

        /** void PhysicalMaterialPropertyWrapper::SetbStickyWheels(long unsigned int newbStickyWheels) [member function] */
        public SetbStickyWheels(newbStickyWheels: boolean): void;

        /** long unsigned int PhysicalMaterialPropertyWrapper::GetbConsiderForGround() [member function] */
        public GetbConsiderForGround(): boolean;

        /** void PhysicalMaterialPropertyWrapper::SetbConsiderForGround(long unsigned int newbConsiderForGround) [member function] */
        public SetbConsiderForGround(newbConsiderForGround: boolean): void;

    }

    /** AttachmentPickup [class] */
    class AttachmentPickup extends RumblePickupComponentWrapper {
        // Public:
        /** AttachmentPickup::AttachmentPickup(uintptr_t mem) [constructor] */
        public constructor(mem: bigint);

        /** void AttachmentPickup::PickupEnd() [member function] */
        public PickupEnd(): void;

        /** void AttachmentPickup::PickupStart() [member function] */
        public PickupStart(): void;

    }

    /** TargetedPickup [class] */
    class TargetedPickup extends RumblePickupComponentWrapper {
        // Public:
        /** TargetedPickup::TargetedPickup(uintptr_t mem) [constructor] */
        public constructor(mem: bigint);

        /** long unsigned int TargetedPickup::GetbCanTargetBall() [member function] */
        public GetbCanTargetBall(): boolean;

        /** void TargetedPickup::SetbCanTargetBall(long unsigned int newbCanTargetBall) [member function] */
        public SetbCanTargetBall(newbCanTargetBall: boolean): void;

        /** long unsigned int TargetedPickup::GetbCanTargetCars() [member function] */
        public GetbCanTargetCars(): boolean;

        /** void TargetedPickup::SetbCanTargetCars(long unsigned int newbCanTargetCars) [member function] */
        public SetbCanTargetCars(newbCanTargetCars: boolean): void;

        /** long unsigned int TargetedPickup::GetbCanTargetEnemyCars() [member function] */
        public GetbCanTargetEnemyCars(): boolean;

        /** void TargetedPickup::SetbCanTargetEnemyCars(long unsigned int newbCanTargetEnemyCars) [member function] */
        public SetbCanTargetEnemyCars(newbCanTargetEnemyCars: boolean): void;

        /** long unsigned int TargetedPickup::GetbCanTargetTeamCars() [member function] */
        public GetbCanTargetTeamCars(): boolean;

        /** void TargetedPickup::SetbCanTargetTeamCars(long unsigned int newbCanTargetTeamCars) [member function] */
        public SetbCanTargetTeamCars(newbCanTargetTeamCars: boolean): void;

        /** long unsigned int TargetedPickup::GetbUseDirectionalTargeting() [member function] */
        public GetbUseDirectionalTargeting(): boolean;

        /** void TargetedPickup::SetbUseDirectionalTargeting(long unsigned int newbUseDirectionalTargeting) [member function] */
        public SetbUseDirectionalTargeting(newbUseDirectionalTargeting: boolean): void;

        /** long unsigned int TargetedPickup::GetbRequireTrace() [member function] */
        public GetbRequireTrace(): boolean;

        /** void TargetedPickup::SetbRequireTrace(long unsigned int newbRequireTrace) [member function] */
        public SetbRequireTrace(newbRequireTrace: boolean): void;

        /** float TargetedPickup::GetRange() [member function] */
        public GetRange(): number;

        /** void TargetedPickup::SetRange(float newRange) [member function] */
        public SetRange(newRange: number): void;

        /** float TargetedPickup::GetDirectionalTargetingAccuracy() [member function] */
        public GetDirectionalTargetingAccuracy(): number;

        /** void TargetedPickup::SetDirectionalTargetingAccuracy(float newDirectionalTargetingAccuracy) [member function] */
        public SetDirectionalTargetingAccuracy(newDirectionalTargetingAccuracy: number): void;

        /** RBActorWrapper TargetedPickup::GetClientTarget() [member function] */
        public GetClientTarget(): RBActorWrapper;

        /** void TargetedPickup::SetClientTarget(RBActorWrapper newClientTarget) [member function] */
        public SetClientTarget(newClientTarget: RBActorWrapper): void;

        /** RBActorWrapper TargetedPickup::GetTargeted() [member function] */
        public GetTargeted(): RBActorWrapper;

        /** void TargetedPickup::SetTargeted(RBActorWrapper newTargeted) [member function] */
        public SetTargeted(newTargeted: RBActorWrapper): void;

        /** RBActorWrapper TargetedPickup::GetClientTarget2() [member function] */
        public GetClientTarget2(): RBActorWrapper;

        /** void TargetedPickup::TargetChanged() [member function] */
        public TargetChanged(): void;

        /** void TargetedPickup::OnTargetChanged() [member function] */
        public OnTargetChanged(): void;

        /** bool TargetedPickup::TryActivate(RBActorWrapper TargetOverride) [member function] */
        public TryActivate(TargetOverride: RBActorWrapper): boolean;

        /** bool TargetedPickup::ValidateTargetTrace(RBActorWrapper InTarget) [member function] */
        public ValidateTargetTrace(InTarget: RBActorWrapper): boolean;

        /** bool TargetedPickup::ValidateTarget2(RBActorWrapper InTarget) [member function] */
        public ValidateTarget2(InTarget: RBActorWrapper): boolean;

        /** RBActorWrapper TargetedPickup::GetTarget2() [member function] */
        public GetTarget2(): RBActorWrapper;

    }

    /** SpringPickup [class] */
    class SpringPickup extends TargetedPickup {
        // Public:
        /** SpringPickup::SpringPickup(uintptr_t mem) [constructor] */
        public constructor(mem: bigint);

        /** float SpringPickup::GetForce() [member function] */
        public GetForce(): number;

        /** void SpringPickup::SetForce(float newForce) [member function] */
        public SetForce(newForce: number): void;

        /** float SpringPickup::GetVerticalForce() [member function] */
        public GetVerticalForce(): number;

        /** void SpringPickup::SetVerticalForce(float newVerticalForce) [member function] */
        public SetVerticalForce(newVerticalForce: number): void;

        /** Vector SpringPickup::GetTorque() [member function] */
        public GetTorque(): Vector;

        /** void SpringPickup::SetTorque(Vector newTorque) [member function] */
        public SetTorque(newTorque: Vector): void;

        /** long unsigned int SpringPickup::GetbApplyRelativeForce() [member function] */
        public GetbApplyRelativeForce(): boolean;

        /** void SpringPickup::SetbApplyRelativeForce(long unsigned int newbApplyRelativeForce) [member function] */
        public SetbApplyRelativeForce(newbApplyRelativeForce: boolean): void;

        /** long unsigned int SpringPickup::GetbApplyConstantForce() [member function] */
        public GetbApplyConstantForce(): boolean;

        /** void SpringPickup::SetbApplyConstantForce(long unsigned int newbApplyConstantForce) [member function] */
        public SetbApplyConstantForce(newbApplyConstantForce: boolean): void;

        /** long unsigned int SpringPickup::GetbBreakConstantForceWithHit() [member function] */
        public GetbBreakConstantForceWithHit(): boolean;

        /** void SpringPickup::SetbBreakConstantForceWithHit(long unsigned int newbBreakConstantForceWithHit) [member function] */
        public SetbBreakConstantForceWithHit(newbBreakConstantForceWithHit: boolean): void;

        /** long unsigned int SpringPickup::GetbApplyRelativeConstantForce() [member function] */
        public GetbApplyRelativeConstantForce(): boolean;

        /** void SpringPickup::SetbApplyRelativeConstantForce(long unsigned int newbApplyRelativeConstantForce) [member function] */
        public SetbApplyRelativeConstantForce(newbApplyRelativeConstantForce: boolean): void;

        /** long unsigned int SpringPickup::GetbInstant() [member function] */
        public GetbInstant(): boolean;

        /** void SpringPickup::SetbInstant(long unsigned int newbInstant) [member function] */
        public SetbInstant(newbInstant: boolean): void;

        /** long unsigned int SpringPickup::GetbFollowAfterHit() [member function] */
        public GetbFollowAfterHit(): boolean;

        /** void SpringPickup::SetbFollowAfterHit(long unsigned int newbFollowAfterHit) [member function] */
        public SetbFollowAfterHit(newbFollowAfterHit: boolean): void;

        /** long unsigned int SpringPickup::GetbSpringed() [member function] */
        public GetbSpringed(): boolean;

        /** void SpringPickup::SetbSpringed(long unsigned int newbSpringed) [member function] */
        public SetbSpringed(newbSpringed: boolean): void;

        /** float SpringPickup::GetRelativeForceNormalDirection() [member function] */
        public GetRelativeForceNormalDirection(): number;

        /** void SpringPickup::SetRelativeForceNormalDirection(float newRelativeForceNormalDirection) [member function] */
        public SetRelativeForceNormalDirection(newRelativeForceNormalDirection: number): void;

        /** float SpringPickup::GetMaxSpringLength() [member function] */
        public GetMaxSpringLength(): number;

        /** void SpringPickup::SetMaxSpringLength(float newMaxSpringLength) [member function] */
        public SetMaxSpringLength(newMaxSpringLength: number): void;

        /** float SpringPickup::GetConstantForce() [member function] */
        public GetConstantForce(): number;

        /** void SpringPickup::SetConstantForce(float newConstantForce) [member function] */
        public SetConstantForce(newConstantForce: number): void;

        /** Vector SpringPickup::GetFromOffset() [member function] */
        public GetFromOffset(): Vector;

        /** void SpringPickup::SetFromOffset(Vector newFromOffset) [member function] */
        public SetFromOffset(newFromOffset: Vector): void;

        /** Vector SpringPickup::GetSpringMeshScale() [member function] */
        public GetSpringMeshScale(): Vector;

        /** void SpringPickup::SetSpringMeshScale(Vector newSpringMeshScale) [member function] */
        public SetSpringMeshScale(newSpringMeshScale: Vector): void;

        /** float SpringPickup::GetSpringMeshInitialSize() [member function] */
        public GetSpringMeshInitialSize(): number;

        /** void SpringPickup::SetSpringMeshInitialSize(float newSpringMeshInitialSize) [member function] */
        public SetSpringMeshInitialSize(newSpringMeshInitialSize: number): void;

        /** Rotator SpringPickup::GetSpringRotationOffset() [member function] */
        public GetSpringRotationOffset(): Rotator;

        /** void SpringPickup::SetSpringRotationOffset(Rotator newSpringRotationOffset) [member function] */
        public SetSpringRotationOffset(newSpringRotationOffset: Rotator): void;

        /** Vector SpringPickup::GetHittingMeshScale() [member function] */
        public GetHittingMeshScale(): Vector;

        /** void SpringPickup::SetHittingMeshScale(Vector newHittingMeshScale) [member function] */
        public SetHittingMeshScale(newHittingMeshScale: Vector): void;

        /** Vector SpringPickup::GetHittingMeshOffset() [member function] */
        public GetHittingMeshOffset(): Vector;

        /** void SpringPickup::SetHittingMeshOffset(Vector newHittingMeshOffset) [member function] */
        public SetHittingMeshOffset(newHittingMeshOffset: Vector): void;

        /** Rotator SpringPickup::GetHittingRotationOffset() [member function] */
        public GetHittingRotationOffset(): Rotator;

        /** void SpringPickup::SetHittingRotationOffset(Rotator newHittingRotationOffset) [member function] */
        public SetHittingRotationOffset(newHittingRotationOffset: Rotator): void;

        /** float SpringPickup::GetHitDistanceOffset() [member function] */
        public GetHitDistanceOffset(): number;

        /** void SpringPickup::SetHitDistanceOffset(float newHitDistanceOffset) [member function] */
        public SetHitDistanceOffset(newHitDistanceOffset: number): void;

        /** float SpringPickup::GetAfterSpringDuration() [member function] */
        public GetAfterSpringDuration(): number;

        /** void SpringPickup::SetAfterSpringDuration(float newAfterSpringDuration) [member function] */
        public SetAfterSpringDuration(newAfterSpringDuration: number): void;

        /** unsigned char SpringPickup::GetBallHitType() [member function] */
        public GetBallHitType(): number;

        /** void SpringPickup::SetBallHitType(unsigned char newBallHitType) [member function] */
        public SetBallHitType(newBallHitType: number): void;

        /** float SpringPickup::GetMinSpringLength() [member function] */
        public GetMinSpringLength(): number;

        /** void SpringPickup::SetMinSpringLength(float newMinSpringLength) [member function] */
        public SetMinSpringLength(newMinSpringLength: number): void;

        /** float SpringPickup::GetWeldedForceScalar() [member function] */
        public GetWeldedForceScalar(): number;

        /** void SpringPickup::SetWeldedForceScalar(float newWeldedForceScalar) [member function] */
        public SetWeldedForceScalar(newWeldedForceScalar: number): void;

        /** float SpringPickup::GetWeldedVerticalForce() [member function] */
        public GetWeldedVerticalForce(): number;

        /** void SpringPickup::SetWeldedVerticalForce(float newWeldedVerticalForce) [member function] */
        public SetWeldedVerticalForce(newWeldedVerticalForce: number): void;

        /** float SpringPickup::GetCurrentSpringLength() [member function] */
        public GetCurrentSpringLength(): number;

        /** void SpringPickup::SetCurrentSpringLength(float newCurrentSpringLength) [member function] */
        public SetCurrentSpringLength(newCurrentSpringLength: number): void;

        /** float SpringPickup::GetSpringedTime() [member function] */
        public GetSpringedTime(): number;

        /** void SpringPickup::SetSpringedTime(float newSpringedTime) [member function] */
        public SetSpringedTime(newSpringedTime: number): void;

        /** float SpringPickup::GetAfterSpringTime() [member function] */
        public GetAfterSpringTime(): number;

        /** void SpringPickup::SetAfterSpringTime(float newAfterSpringTime) [member function] */
        public SetAfterSpringTime(newAfterSpringTime: number): void;

        /** float SpringPickup::GetSpringToTime() [member function] */
        public GetSpringToTime(): number;

        /** void SpringPickup::SetSpringToTime(float newSpringToTime) [member function] */
        public SetSpringToTime(newSpringToTime: number): void;

        /** Vector SpringPickup::GetSpringOrigin() [member function] */
        public GetSpringOrigin(): Vector;

        /** void SpringPickup::SetSpringOrigin(Vector newSpringOrigin) [member function] */
        public SetSpringOrigin(newSpringOrigin: Vector): void;

        /** Vector SpringPickup::GetSpringedLocation() [member function] */
        public GetSpringedLocation(): Vector;

        /** void SpringPickup::SetSpringedLocation(Vector newSpringedLocation) [member function] */
        public SetSpringedLocation(newSpringedLocation: Vector): void;

        /** Vector SpringPickup::GetSpringedNormal() [member function] */
        public GetSpringedNormal(): Vector;

        /** void SpringPickup::SetSpringedNormal(Vector newSpringedNormal) [member function] */
        public SetSpringedNormal(newSpringedNormal: Vector): void;

        /** float SpringPickup::GetSpringedLength() [member function] */
        public GetSpringedLength(): number;

        /** void SpringPickup::SetSpringedLength(float newSpringedLength) [member function] */
        public SetSpringedLength(newSpringedLength: number): void;

        /** void SpringPickup::PickupEnd() [member function] */
        public PickupEnd(): void;

        /** void SpringPickup::HandleCarTouchedBall(BallWrapper Ball, CarWrapper OtherCar, unsigned char HitType) [member function] */
        public HandleCarTouchedBall(Ball: BallWrapper, OtherCar: CarWrapper, HitType: number): void;

        /** void SpringPickup::ScaleSpringMeshToLocation(Vector & NewLocation, Vector & TargetLoction) [member function] */
        public ScaleSpringMeshToLocation(NewLocation: Vector, TargetLoction: Vector): void;

        /** void SpringPickup::ApplyForces(float ActiveTime) [member function] */
        public ApplyForces(ActiveTime: number): void;

        /** Vector SpringPickup::GetRelativeConstantForce(Vector & Direction) [member function] */
        public GetRelativeConstantForce(Direction: Vector): Vector;

        /** Vector SpringPickup::GetRelativeImpulse(Vector & Direction) [member function] */
        public GetRelativeImpulse(Direction: Vector): Vector;

        /** void SpringPickup::DoSpring(long unsigned int bFirstHit) [member function] */
        public DoSpring(bFirstHit: boolean): void;

        /** void SpringPickup::PickupStart() [member function] */
        public PickupStart(): void;

    }

    /** BallCarSpringPickup [class] */
    class BallCarSpringPickup extends SpringPickup {
        // Public:
        /** BallCarSpringPickup::BallCarSpringPickup(uintptr_t mem) [constructor] */
        public constructor(mem: bigint);

        /** void BallCarSpringPickup::ScaleSpringMeshToLocation(Vector & NewLocation, Vector & TargetLocation) [member function] */
        public ScaleSpringMeshToLocation(NewLocation: Vector, TargetLocation: Vector): void;

    }

    /** BallFreezePickup [class] */
    class BallFreezePickup extends TargetedPickup {
        // Public:
        /** BallFreezePickup::BallFreezePickup(uintptr_t mem) [constructor] */
        public constructor(mem: bigint);

        /** FXActorWrapper BallFreezePickup::GetFreezeBreakFXArchetype() [member function] */
        public GetFreezeBreakFXArchetype(): FXActorWrapper;

        /** void BallFreezePickup::SetFreezeBreakFXArchetype(FXActorWrapper newFreezeBreakFXArchetype) [member function] */
        public SetFreezeBreakFXArchetype(newFreezeBreakFXArchetype: FXActorWrapper): void;

        /** FXActorWrapper BallFreezePickup::GetFreezeFXArchetype() [member function] */
        public GetFreezeFXArchetype(): FXActorWrapper;

        /** void BallFreezePickup::SetFreezeFXArchetype(FXActorWrapper newFreezeFXArchetype) [member function] */
        public SetFreezeFXArchetype(newFreezeFXArchetype: FXActorWrapper): void;

        /** long unsigned int BallFreezePickup::GetbMaintainMomentum() [member function] */
        public GetbMaintainMomentum(): boolean;

        /** void BallFreezePickup::SetbMaintainMomentum(long unsigned int newbMaintainMomentum) [member function] */
        public SetbMaintainMomentum(newbMaintainMomentum: boolean): void;

        /** long unsigned int BallFreezePickup::GetbTouched() [member function] */
        public GetbTouched(): boolean;

        /** void BallFreezePickup::SetbTouched(long unsigned int newbTouched) [member function] */
        public SetbTouched(newbTouched: boolean): void;

        /** float BallFreezePickup::GetTimeToStop() [member function] */
        public GetTimeToStop(): number;

        /** void BallFreezePickup::SetTimeToStop(float newTimeToStop) [member function] */
        public SetTimeToStop(newTimeToStop: number): void;

        /** float BallFreezePickup::GetStopMomentumPercentage() [member function] */
        public GetStopMomentumPercentage(): number;

        /** void BallFreezePickup::SetStopMomentumPercentage(float newStopMomentumPercentage) [member function] */
        public SetStopMomentumPercentage(newStopMomentumPercentage: number): void;

        /** BallWrapper BallFreezePickup::GetBall() [member function] */
        public GetBall(): BallWrapper;

        /** void BallFreezePickup::SetBall(BallWrapper newBall) [member function] */
        public SetBall(newBall: BallWrapper): void;

        /** Vector BallFreezePickup::GetOrigLinearVelocity() [member function] */
        public GetOrigLinearVelocity(): Vector;

        /** void BallFreezePickup::SetOrigLinearVelocity(Vector newOrigLinearVelocity) [member function] */
        public SetOrigLinearVelocity(newOrigLinearVelocity: Vector): void;

        /** Vector BallFreezePickup::GetOrigAngularVelocity() [member function] */
        public GetOrigAngularVelocity(): Vector;

        /** void BallFreezePickup::SetOrigAngularVelocity(Vector newOrigAngularVelocity) [member function] */
        public SetOrigAngularVelocity(newOrigAngularVelocity: Vector): void;

        /** float BallFreezePickup::GetOrigSpeed() [member function] */
        public GetOrigSpeed(): number;

        /** void BallFreezePickup::SetOrigSpeed(float newOrigSpeed) [member function] */
        public SetOrigSpeed(newOrigSpeed: number): void;

        /** float BallFreezePickup::GetRepOrigSpeed() [member function] */
        public GetRepOrigSpeed(): number;

        /** void BallFreezePickup::SetRepOrigSpeed(float newRepOrigSpeed) [member function] */
        public SetRepOrigSpeed(newRepOrigSpeed: number): void;

        /** FXActorWrapper BallFreezePickup::GetFreezeFX() [member function] */
        public GetFreezeFX(): FXActorWrapper;

        /** void BallFreezePickup::SetFreezeFX(FXActorWrapper newFreezeFX) [member function] */
        public SetFreezeFX(newFreezeFX: FXActorWrapper): void;

        /** void BallFreezePickup::PickupEnd() [member function] */
        public PickupEnd(): void;

        /** void BallFreezePickup::HandleBallExploded(BallWrapper InBall) [member function] */
        public HandleBallExploded(InBall: BallWrapper): void;

        /** void BallFreezePickup::HandleBallHit(BallWrapper InBall, CarWrapper InCar, unsigned char HitType) [member function] */
        public HandleBallHit(InBall: BallWrapper, InCar: CarWrapper, HitType: number): void;

        /** void BallFreezePickup::ApplyForces(float ActiveTime) [member function] */
        public ApplyForces(ActiveTime: number): void;

        /** void BallFreezePickup::OnTargetChanged() [member function] */
        public OnTargetChanged(): void;

        /** void BallFreezePickup::PickupStart() [member function] */
        public PickupStart(): void;

    }

    /** BallLassoPickup [class] */
    class BallLassoPickup extends SpringPickup {
        // Public:
        /** BallLassoPickup::BallLassoPickup(uintptr_t mem) [constructor] */
        public constructor(mem: bigint);

        /** void BallLassoPickup::ScaleSpringMeshToLocation(Vector & NewLocation, Vector & TargetLocation) [member function] */
        public ScaleSpringMeshToLocation(NewLocation: Vector, TargetLocation: Vector): void;

        /** void BallLassoPickup::DoSpring(long unsigned int bFirstHit) [member function] */
        public DoSpring(bFirstHit: boolean): void;

    }

    /** BattarangPickup [class] */
    class BattarangPickup extends BallLassoPickup {
        // Public:
        /** BattarangPickup::BattarangPickup(uintptr_t mem) [constructor] */
        public constructor(mem: bigint);

        /** float BattarangPickup::GetSpinSpeed() [member function] */
        public GetSpinSpeed(): number;

        /** void BattarangPickup::SetSpinSpeed(float newSpinSpeed) [member function] */
        public SetSpinSpeed(newSpinSpeed: number): void;

        /** float BattarangPickup::GetCurRotation() [member function] */
        public GetCurRotation(): number;

        /** void BattarangPickup::SetCurRotation(float newCurRotation) [member function] */
        public SetCurRotation(newCurRotation: number): void;

    }

    /** BoostModPickup [class] */
    class BoostModPickup extends RumblePickupComponentWrapper {
        // Public:
        /** BoostModPickup::BoostModPickup(uintptr_t mem) [constructor] */
        public constructor(mem: bigint);

        /** long unsigned int BoostModPickup::GetbUnlimitedBoost() [member function] */
        public GetbUnlimitedBoost(): boolean;

        /** void BoostModPickup::SetbUnlimitedBoost(long unsigned int newbUnlimitedBoost) [member function] */
        public SetbUnlimitedBoost(newbUnlimitedBoost: boolean): void;

        /** float BoostModPickup::GetBoostStrength() [member function] */
        public GetBoostStrength(): number;

        /** void BoostModPickup::SetBoostStrength(float newBoostStrength) [member function] */
        public SetBoostStrength(newBoostStrength: number): void;

        /** float BoostModPickup::GetOldBoostStrength() [member function] */
        public GetOldBoostStrength(): number;

        /** void BoostModPickup::SetOldBoostStrength(float newOldBoostStrength) [member function] */
        public SetOldBoostStrength(newOldBoostStrength: number): void;

        /** void BoostModPickup::PickupEnd() [member function] */
        public PickupEnd(): void;

        /** void BoostModPickup::PickupStart() [member function] */
        public PickupStart(): void;

    }

    /** BoostOverridePickup [class] */
    class BoostOverridePickup extends TargetedPickup {
        // Public:
        /** BoostOverridePickup::BoostOverridePickup(uintptr_t mem) [constructor] */
        public constructor(mem: bigint);

        /** CarWrapper BoostOverridePickup::GetOtherCar() [member function] */
        public GetOtherCar(): CarWrapper;

        /** void BoostOverridePickup::SetOtherCar(CarWrapper newOtherCar) [member function] */
        public SetOtherCar(newOtherCar: CarWrapper): void;

        /** void BoostOverridePickup::PickupEnd() [member function] */
        public PickupEnd(): void;

        /** void BoostOverridePickup::OnTargetChanged() [member function] */
        public OnTargetChanged(): void;

        /** void BoostOverridePickup::PickupStart() [member function] */
        public PickupStart(): void;

    }

    /** CarSpeedPickup [class] */
    class CarSpeedPickup extends RumblePickupComponentWrapper {
        // Public:
        /** CarSpeedPickup::CarSpeedPickup(uintptr_t mem) [constructor] */
        public constructor(mem: bigint);

        /** float CarSpeedPickup::GetGravityScale() [member function] */
        public GetGravityScale(): number;

        /** void CarSpeedPickup::SetGravityScale(float newGravityScale) [member function] */
        public SetGravityScale(newGravityScale: number): void;

        /** Vector CarSpeedPickup::GetAddedForce() [member function] */
        public GetAddedForce(): Vector;

        /** void CarSpeedPickup::SetAddedForce(Vector newAddedForce) [member function] */
        public SetAddedForce(newAddedForce: Vector): void;

        /** float CarSpeedPickup::GetOrigGravityScale() [member function] */
        public GetOrigGravityScale(): number;

        /** void CarSpeedPickup::SetOrigGravityScale(float newOrigGravityScale) [member function] */
        public SetOrigGravityScale(newOrigGravityScale: number): void;

        /** void CarSpeedPickup::PickupEnd() [member function] */
        public PickupEnd(): void;

        /** void CarSpeedPickup::PickupStart() [member function] */
        public PickupStart(): void;

    }

    /** DemolishPickup [class] */
    class DemolishPickup extends RumblePickupComponentWrapper {
        // Public:
        /** DemolishPickup::DemolishPickup(uintptr_t mem) [constructor] */
        public constructor(mem: bigint);

        /** unsigned char DemolishPickup::GetDemolishTarget() [member function] */
        public GetDemolishTarget(): number;

        /** void DemolishPickup::SetDemolishTarget(unsigned char newDemolishTarget) [member function] */
        public SetDemolishTarget(newDemolishTarget: number): void;

        /** unsigned char DemolishPickup::GetDemolishSpeed() [member function] */
        public GetDemolishSpeed(): number;

        /** void DemolishPickup::SetDemolishSpeed(unsigned char newDemolishSpeed) [member function] */
        public SetDemolishSpeed(newDemolishSpeed: number): void;

        /** unsigned char DemolishPickup::GetOldTarget() [member function] */
        public GetOldTarget(): number;

        /** void DemolishPickup::SetOldTarget(unsigned char newOldTarget) [member function] */
        public SetOldTarget(newOldTarget: number): void;

        /** unsigned char DemolishPickup::GetOldSpeed() [member function] */
        public GetOldSpeed(): number;

        /** void DemolishPickup::SetOldSpeed(unsigned char newOldSpeed) [member function] */
        public SetOldSpeed(newOldSpeed: number): void;

        /** void DemolishPickup::PickupEnd() [member function] */
        public PickupEnd(): void;

        /** void DemolishPickup::PickupStart() [member function] */
        public PickupStart(): void;

    }

    /** GrapplingHookPickup [class] */
    class GrapplingHookPickup extends TargetedPickup {
        // Public:
        /** GrapplingHookPickup::GrapplingHookPickup(uintptr_t mem) [constructor] */
        public constructor(mem: bigint);

        /** float GrapplingHookPickup::GetImpulse() [member function] */
        public GetImpulse(): number;

        /** void GrapplingHookPickup::SetImpulse(float newImpulse) [member function] */
        public SetImpulse(newImpulse: number): void;

        /** float GrapplingHookPickup::GetForce() [member function] */
        public GetForce(): number;

        /** void GrapplingHookPickup::SetForce(float newForce) [member function] */
        public SetForce(newForce: number): void;

        /** float GrapplingHookPickup::GetMaxRopeLength() [member function] */
        public GetMaxRopeLength(): number;

        /** void GrapplingHookPickup::SetMaxRopeLength(float newMaxRopeLength) [member function] */
        public SetMaxRopeLength(newMaxRopeLength: number): void;

        /** float GrapplingHookPickup::GetPredictionSpeed() [member function] */
        public GetPredictionSpeed(): number;

        /** void GrapplingHookPickup::SetPredictionSpeed(float newPredictionSpeed) [member function] */
        public SetPredictionSpeed(newPredictionSpeed: number): void;

        /** long unsigned int GrapplingHookPickup::GetbDeactivateOnTouch() [member function] */
        public GetbDeactivateOnTouch(): boolean;

        /** void GrapplingHookPickup::SetbDeactivateOnTouch(long unsigned int newbDeactivateOnTouch) [member function] */
        public SetbDeactivateOnTouch(newbDeactivateOnTouch: boolean): void;

        /** long unsigned int GrapplingHookPickup::GetbInstant() [member function] */
        public GetbInstant(): boolean;

        /** void GrapplingHookPickup::SetbInstant(long unsigned int newbInstant) [member function] */
        public SetbInstant(newbInstant: boolean): void;

        /** long unsigned int GrapplingHookPickup::GetbBlocked() [member function] */
        public GetbBlocked(): boolean;

        /** void GrapplingHookPickup::SetbBlocked(long unsigned int newbBlocked) [member function] */
        public SetbBlocked(newbBlocked: boolean): void;

        /** long unsigned int GrapplingHookPickup::GetbAttachedToBall() [member function] */
        public GetbAttachedToBall(): boolean;

        /** void GrapplingHookPickup::SetbAttachedToBall(long unsigned int newbAttachedToBall) [member function] */
        public SetbAttachedToBall(newbAttachedToBall: boolean): void;

        /** Vector GrapplingHookPickup::GetRopeMeshScale() [member function] */
        public GetRopeMeshScale(): Vector;

        /** void GrapplingHookPickup::SetRopeMeshScale(Vector newRopeMeshScale) [member function] */
        public SetRopeMeshScale(newRopeMeshScale: Vector): void;

        /** float GrapplingHookPickup::GetRopeMeshInitialSize() [member function] */
        public GetRopeMeshInitialSize(): number;

        /** void GrapplingHookPickup::SetRopeMeshInitialSize(float newRopeMeshInitialSize) [member function] */
        public SetRopeMeshInitialSize(newRopeMeshInitialSize: number): void;

        /** Rotator GrapplingHookPickup::GetRopeRotationOffset() [member function] */
        public GetRopeRotationOffset(): Rotator;

        /** void GrapplingHookPickup::SetRopeRotationOffset(Rotator newRopeRotationOffset) [member function] */
        public SetRopeRotationOffset(newRopeRotationOffset: Rotator): void;

        /** Vector GrapplingHookPickup::GetHookMeshScale() [member function] */
        public GetHookMeshScale(): Vector;

        /** void GrapplingHookPickup::SetHookMeshScale(Vector newHookMeshScale) [member function] */
        public SetHookMeshScale(newHookMeshScale: Vector): void;

        /** Vector GrapplingHookPickup::GetHookMeshOffset() [member function] */
        public GetHookMeshOffset(): Vector;

        /** void GrapplingHookPickup::SetHookMeshOffset(Vector newHookMeshOffset) [member function] */
        public SetHookMeshOffset(newHookMeshOffset: Vector): void;

        /** Rotator GrapplingHookPickup::GetHookRotationOffset() [member function] */
        public GetHookRotationOffset(): Rotator;

        /** void GrapplingHookPickup::SetHookRotationOffset(Rotator newHookRotationOffset) [member function] */
        public SetHookRotationOffset(newHookRotationOffset: Rotator): void;

        /** float GrapplingHookPickup::GetHitDistanceOffset() [member function] */
        public GetHitDistanceOffset(): number;

        /** void GrapplingHookPickup::SetHitDistanceOffset(float newHitDistanceOffset) [member function] */
        public SetHitDistanceOffset(newHitDistanceOffset: number): void;

        /** float GrapplingHookPickup::GetAfterAttachDuration() [member function] */
        public GetAfterAttachDuration(): number;

        /** void GrapplingHookPickup::SetAfterAttachDuration(float newAfterAttachDuration) [member function] */
        public SetAfterAttachDuration(newAfterAttachDuration: number): void;

        /** float GrapplingHookPickup::GetBlockedRequiredMoveDistance() [member function] */
        public GetBlockedRequiredMoveDistance(): number;

        /** void GrapplingHookPickup::SetBlockedRequiredMoveDistance(float newBlockedRequiredMoveDistance) [member function] */
        public SetBlockedRequiredMoveDistance(newBlockedRequiredMoveDistance: number): void;

        /** float GrapplingHookPickup::GetBlockedRequiredMoveTime() [member function] */
        public GetBlockedRequiredMoveTime(): number;

        /** void GrapplingHookPickup::SetBlockedRequiredMoveTime(float newBlockedRequiredMoveTime) [member function] */
        public SetBlockedRequiredMoveTime(newBlockedRequiredMoveTime: number): void;

        /** float GrapplingHookPickup::GetBlockedStartTime() [member function] */
        public GetBlockedStartTime(): number;

        /** void GrapplingHookPickup::SetBlockedStartTime(float newBlockedStartTime) [member function] */
        public SetBlockedStartTime(newBlockedStartTime: number): void;

        /** Vector GrapplingHookPickup::GetBlockedStartPos() [member function] */
        public GetBlockedStartPos(): Vector;

        /** void GrapplingHookPickup::SetBlockedStartPos(Vector newBlockedStartPos) [member function] */
        public SetBlockedStartPos(newBlockedStartPos: Vector): void;

        /** BallWrapper GrapplingHookPickup::GetBall() [member function] */
        public GetBall(): BallWrapper;

        /** void GrapplingHookPickup::SetBall(BallWrapper newBall) [member function] */
        public SetBall(newBall: BallWrapper): void;

        /** Vector GrapplingHookPickup::GetRopeOrigin() [member function] */
        public GetRopeOrigin(): Vector;

        /** void GrapplingHookPickup::SetRopeOrigin(Vector newRopeOrigin) [member function] */
        public SetRopeOrigin(newRopeOrigin: Vector): void;

        /** float GrapplingHookPickup::GetRopeToTime() [member function] */
        public GetRopeToTime(): number;

        /** void GrapplingHookPickup::SetRopeToTime(float newRopeToTime) [member function] */
        public SetRopeToTime(newRopeToTime: number): void;

        /** float GrapplingHookPickup::GetCurrentRopeLength() [member function] */
        public GetCurrentRopeLength(): number;

        /** void GrapplingHookPickup::SetCurrentRopeLength(float newCurrentRopeLength) [member function] */
        public SetCurrentRopeLength(newCurrentRopeLength: number): void;

        /** float GrapplingHookPickup::GetAttachTime() [member function] */
        public GetAttachTime(): number;

        /** void GrapplingHookPickup::SetAttachTime(float newAttachTime) [member function] */
        public SetAttachTime(newAttachTime: number): void;

        /** void GrapplingHookPickup::HandleBallExploded(BallWrapper InBall) [member function] */
        public HandleBallExploded(InBall: BallWrapper): void;

        /** void GrapplingHookPickup::PickupEnd() [member function] */
        public PickupEnd(): void;

        /** void GrapplingHookPickup::ScaleMeshToLocation(Vector & NewLocation, Vector & TargetLocation) [member function] */
        public ScaleMeshToLocation(NewLocation: Vector, TargetLocation: Vector): void;

        /** Vector GrapplingHookPickup::GetPredictedBallLocation(BallWrapper InBall) [member function] */
        public GetPredictedBallLocation(InBall: BallWrapper): Vector;

        /** Vector GrapplingHookPickup::GetTargetedLocation() [member function] */
        public GetTargetedLocation(): Vector;

        /** void GrapplingHookPickup::UpdateVisual(float DeltaTime) [member function] */
        public UpdateVisual(DeltaTime: number): void;

        /** void GrapplingHookPickup::PickupTick(float DeltaTime) [member function] */
        public PickupTick(DeltaTime: number): void;

        /** void GrapplingHookPickup::ApplyForces(float ActiveTime) [member function] */
        public ApplyForces(ActiveTime: number): void;

        /** void GrapplingHookPickup::DoAttach() [member function] */
        public DoAttach(): void;

        /** void GrapplingHookPickup::PickupStart() [member function] */
        public PickupStart(): void;

    }

    /** GravityPickup [class] */
    class GravityPickup extends RumblePickupComponentWrapper {
        // Public:
        /** GravityPickup::GravityPickup(uintptr_t mem) [constructor] */
        public constructor(mem: bigint);

        /** float GravityPickup::GetBallGravity() [member function] */
        public GetBallGravity(): number;

        /** void GravityPickup::SetBallGravity(float newBallGravity) [member function] */
        public SetBallGravity(newBallGravity: number): void;

        /** float GravityPickup::GetRange() [member function] */
        public GetRange(): number;

        /** void GravityPickup::SetRange(float newRange) [member function] */
        public SetRange(newRange: number): void;

        /** Vector GravityPickup::GetOffset() [member function] */
        public GetOffset(): Vector;

        /** void GravityPickup::SetOffset(Vector newOffset) [member function] */
        public SetOffset(newOffset: Vector): void;

        /** long unsigned int GravityPickup::GetbDeactivateOnTouch() [member function] */
        public GetbDeactivateOnTouch(): boolean;

        /** void GravityPickup::SetbDeactivateOnTouch(long unsigned int newbDeactivateOnTouch) [member function] */
        public SetbDeactivateOnTouch(newbDeactivateOnTouch: boolean): void;

        /** float GravityPickup::GetRecordBallHitRate() [member function] */
        public GetRecordBallHitRate(): number;

        /** void GravityPickup::SetRecordBallHitRate(float newRecordBallHitRate) [member function] */
        public SetRecordBallHitRate(newRecordBallHitRate: number): void;

        /** float GravityPickup::GetLastRecordedBallHitTime() [member function] */
        public GetLastRecordedBallHitTime(): number;

        /** void GravityPickup::SetLastRecordedBallHitTime(float newLastRecordedBallHitTime) [member function] */
        public SetLastRecordedBallHitTime(newLastRecordedBallHitTime: number): void;

        /** BallWrapper GravityPickup::GetPrevBall() [member function] */
        public GetPrevBall(): BallWrapper;

        /** void GravityPickup::SetPrevBall(BallWrapper newPrevBall) [member function] */
        public SetPrevBall(newPrevBall: BallWrapper): void;

        /** void GravityPickup::UpdateVisual() [member function] */
        public UpdateVisual(): void;

        /** void GravityPickup::ApplyForces(float ActiveTime) [member function] */
        public ApplyForces(ActiveTime: number): void;

        /** void GravityPickup::PickupEnd() [member function] */
        public PickupEnd(): void;

        /** void GravityPickup::PickupStart() [member function] */
        public PickupStart(): void;

    }

    /** HandbrakeOverridePickup [class] */
    class HandbrakeOverridePickup extends TargetedPickup {
        // Public:
        /** HandbrakeOverridePickup::HandbrakeOverridePickup(uintptr_t mem) [constructor] */
        public constructor(mem: bigint);

        /** CarWrapper HandbrakeOverridePickup::GetOtherCar() [member function] */
        public GetOtherCar(): CarWrapper;

        /** void HandbrakeOverridePickup::SetOtherCar(CarWrapper newOtherCar) [member function] */
        public SetOtherCar(newOtherCar: CarWrapper): void;

        /** void HandbrakeOverridePickup::PickupEnd() [member function] */
        public PickupEnd(): void;

        /** void HandbrakeOverridePickup::PickupStart() [member function] */
        public PickupStart(): void;

    }

    /** HitForcePickup [class] */
    class HitForcePickup extends RumblePickupComponentWrapper {
        // Public:
        /** HitForcePickup::HitForcePickup(uintptr_t mem) [constructor] */
        public constructor(mem: bigint);

        /** long unsigned int HitForcePickup::GetbBallForce() [member function] */
        public GetbBallForce(): boolean;

        /** void HitForcePickup::SetbBallForce(long unsigned int newbBallForce) [member function] */
        public SetbBallForce(newbBallForce: boolean): void;

        /** long unsigned int HitForcePickup::GetbCarForce() [member function] */
        public GetbCarForce(): boolean;

        /** void HitForcePickup::SetbCarForce(long unsigned int newbCarForce) [member function] */
        public SetbCarForce(newbCarForce: boolean): void;

        /** long unsigned int HitForcePickup::GetbDemolishCars() [member function] */
        public GetbDemolishCars(): boolean;

        /** void HitForcePickup::SetbDemolishCars(long unsigned int newbDemolishCars) [member function] */
        public SetbDemolishCars(newbDemolishCars: boolean): void;

        /** float HitForcePickup::GetBallHitForce() [member function] */
        public GetBallHitForce(): number;

        /** void HitForcePickup::SetBallHitForce(float newBallHitForce) [member function] */
        public SetBallHitForce(newBallHitForce: number): void;

        /** float HitForcePickup::GetCarHitForce() [member function] */
        public GetCarHitForce(): number;

        /** void HitForcePickup::SetCarHitForce(float newCarHitForce) [member function] */
        public SetCarHitForce(newCarHitForce: number): void;

        /** float HitForcePickup::GetMinFXTime() [member function] */
        public GetMinFXTime(): number;

        /** void HitForcePickup::SetMinFXTime(float newMinFXTime) [member function] */
        public SetMinFXTime(newMinFXTime: number): void;

        /** float HitForcePickup::GetOrigBallHitForce() [member function] */
        public GetOrigBallHitForce(): number;

        /** void HitForcePickup::SetOrigBallHitForce(float newOrigBallHitForce) [member function] */
        public SetOrigBallHitForce(newOrigBallHitForce: number): void;

        /** float HitForcePickup::GetOrigCarHitForce() [member function] */
        public GetOrigCarHitForce(): number;

        /** void HitForcePickup::SetOrigCarHitForce(float newOrigCarHitForce) [member function] */
        public SetOrigCarHitForce(newOrigCarHitForce: number): void;

        /** float HitForcePickup::GetLastFXTime() [member function] */
        public GetLastFXTime(): number;

        /** void HitForcePickup::SetLastFXTime(float newLastFXTime) [member function] */
        public SetLastFXTime(newLastFXTime: number): void;

        /** void HitForcePickup::PickupEnd() [member function] */
        public PickupEnd(): void;

        /** void HitForcePickup::PickupStart() [member function] */
        public PickupStart(): void;

    }

    /** SwapperPickup [class] */
    class SwapperPickup extends TargetedPickup {
        // Public:
        /** SwapperPickup::SwapperPickup(uintptr_t mem) [constructor] */
        public constructor(mem: bigint);

        /** CarWrapper SwapperPickup::GetOtherCar() [member function] */
        public GetOtherCar(): CarWrapper;

        /** void SwapperPickup::SetOtherCar(CarWrapper newOtherCar) [member function] */
        public SetOtherCar(newOtherCar: CarWrapper): void;

        /** void SwapperPickup::PickupEnd() [member function] */
        public PickupEnd(): void;

        /** void SwapperPickup::OnTargetChanged() [member function] */
        public OnTargetChanged(): void;

        /** void SwapperPickup::PickupStart() [member function] */
        public PickupStart(): void;

    }

    /** TimeBombPickup [class] */
    class TimeBombPickup extends RumblePickupComponentWrapper {
        // Public:
        /** TimeBombPickup::TimeBombPickup(uintptr_t mem) [constructor] */
        public constructor(mem: bigint);

        /** float TimeBombPickup::GetRadius() [member function] */
        public GetRadius(): number;

        /** void TimeBombPickup::SetRadius(float newRadius) [member function] */
        public SetRadius(newRadius: number): void;

        /** float TimeBombPickup::GetAlmostReadyDuration() [member function] */
        public GetAlmostReadyDuration(): number;

        /** void TimeBombPickup::SetAlmostReadyDuration(float newAlmostReadyDuration) [member function] */
        public SetAlmostReadyDuration(newAlmostReadyDuration: number): void;

        /** float TimeBombPickup::GetStartMatSpeed() [member function] */
        public GetStartMatSpeed(): number;

        /** void TimeBombPickup::SetStartMatSpeed(float newStartMatSpeed) [member function] */
        public SetStartMatSpeed(newStartMatSpeed: number): void;

        /** float TimeBombPickup::GetAlmostReadyMatSpeed() [member function] */
        public GetAlmostReadyMatSpeed(): number;

        /** void TimeBombPickup::SetAlmostReadyMatSpeed(float newAlmostReadyMatSpeed) [member function] */
        public SetAlmostReadyMatSpeed(newAlmostReadyMatSpeed: number): void;

        /** float TimeBombPickup::GetImpulseForce() [member function] */
        public GetImpulseForce(): number;

        /** void TimeBombPickup::SetImpulseForce(float newImpulseForce) [member function] */
        public SetImpulseForce(newImpulseForce: number): void;

        /** float TimeBombPickup::GetCarVerticalForce() [member function] */
        public GetCarVerticalForce(): number;

        /** void TimeBombPickup::SetCarVerticalForce(float newCarVerticalForce) [member function] */
        public SetCarVerticalForce(newCarVerticalForce: number): void;

        /** float TimeBombPickup::GetCarTorque() [member function] */
        public GetCarTorque(): number;

        /** void TimeBombPickup::SetCarTorque(float newCarTorque) [member function] */
        public SetCarTorque(newCarTorque: number): void;

        /** long unsigned int TimeBombPickup::GetbDemolish() [member function] */
        public GetbDemolish(): boolean;

        /** void TimeBombPickup::SetbDemolish(long unsigned int newbDemolish) [member function] */
        public SetbDemolish(newbDemolish: boolean): void;

        /** long unsigned int TimeBombPickup::GetbImpulse() [member function] */
        public GetbImpulse(): boolean;

        /** void TimeBombPickup::SetbImpulse(long unsigned int newbImpulse) [member function] */
        public SetbImpulse(newbImpulse: boolean): void;

        /** void TimeBombPickup::PickupEnd() [member function] */
        public PickupEnd(): void;

        /** void TimeBombPickup::AlmostReady2() [member function] */
        public AlmostReady2(): void;

        /** void TimeBombPickup::PickupStart() [member function] */
        public PickupStart(): void;

    }

    /** TornadoPickup [class] */
    class TornadoPickup extends RumblePickupComponentWrapper {
        // Public:
        /** TornadoPickup::TornadoPickup(uintptr_t mem) [constructor] */
        public constructor(mem: bigint);

        /** float TornadoPickup::GetHeight() [member function] */
        public GetHeight(): number;

        /** void TornadoPickup::SetHeight(float newHeight) [member function] */
        public SetHeight(newHeight: number): void;

        /** float TornadoPickup::GetRadius() [member function] */
        public GetRadius(): number;

        /** void TornadoPickup::SetRadius(float newRadius) [member function] */
        public SetRadius(newRadius: number): void;

        /** Vector TornadoPickup::GetOffset() [member function] */
        public GetOffset(): Vector;

        /** void TornadoPickup::SetOffset(Vector newOffset) [member function] */
        public SetOffset(newOffset: Vector): void;

        /** float TornadoPickup::GetRotationalForce() [member function] */
        public GetRotationalForce(): number;

        /** void TornadoPickup::SetRotationalForce(float newRotationalForce) [member function] */
        public SetRotationalForce(newRotationalForce: number): void;

        /** float TornadoPickup::GetTorque() [member function] */
        public GetTorque(): number;

        /**
         * void TornadoPickup::SetTorque(float newTorque) [member function]
         * @Note renamed because it is not assignable to the same property in parent.
         */
        public SetTorque2(newTorque: number): void;

        /** Vector TornadoPickup::GetFXScale() [member function] */
        public GetFXScale(): Vector;

        /** void TornadoPickup::SetFXScale(Vector newFXScale) [member function] */
        public SetFXScale(newFXScale: Vector): void;

        /** Vector TornadoPickup::GetFXOffset() [member function] */
        public GetFXOffset(): Vector;

        /** void TornadoPickup::SetFXOffset(Vector newFXOffset) [member function] */
        public SetFXOffset(newFXOffset: Vector): void;

        /** Vector TornadoPickup::GetMeshOffset() [member function] */
        public GetMeshOffset(): Vector;

        /** void TornadoPickup::SetMeshOffset(Vector newMeshOffset) [member function] */
        public SetMeshOffset(newMeshOffset: Vector): void;

        /** Vector TornadoPickup::GetMeshScale() [member function] */
        public GetMeshScale(): Vector;

        /** void TornadoPickup::SetMeshScale(Vector newMeshScale) [member function] */
        public SetMeshScale(newMeshScale: Vector): void;

        /** float TornadoPickup::GetMaxVelocityOffset() [member function] */
        public GetMaxVelocityOffset(): number;

        /** void TornadoPickup::SetMaxVelocityOffset(float newMaxVelocityOffset) [member function] */
        public SetMaxVelocityOffset(newMaxVelocityOffset: number): void;

        /** float TornadoPickup::GetBallMultiplier() [member function] */
        public GetBallMultiplier(): number;

        /** void TornadoPickup::SetBallMultiplier(float newBallMultiplier) [member function] */
        public SetBallMultiplier(newBallMultiplier: number): void;

        /** long unsigned int TornadoPickup::GetbDebugVis() [member function] */
        public GetbDebugVis(): boolean;

        /** void TornadoPickup::SetbDebugVis(long unsigned int newbDebugVis) [member function] */
        public SetbDebugVis(newbDebugVis: boolean): void;

        /** float TornadoPickup::GetVelocityEase() [member function] */
        public GetVelocityEase(): number;

        /** void TornadoPickup::SetVelocityEase(float newVelocityEase) [member function] */
        public SetVelocityEase(newVelocityEase: number): void;

        /** Vector TornadoPickup::GetVel() [member function] */
        public GetVel(): Vector;

        /** void TornadoPickup::SetVel(Vector newVel) [member function] */
        public SetVel(newVel: Vector): void;

        /** ArrayWrapper<RBActorWrapper> TornadoPickup::GetAffecting() [member function] */
        public GetAffecting(): ArrayWrapper_RBActorWrapper;

        /** void TornadoPickup::ApplyForces(float ActiveTime) [member function] */
        public ApplyForces(ActiveTime: number): void;

        /** void TornadoPickup::PlayCarSFX(RBActorWrapper InActor) [member function] */
        public PlayCarSFX(InActor: RBActorWrapper): void;

        /** void TornadoPickup::PlayBallSFX(RBActorWrapper InActor) [member function] */
        public PlayBallSFX(InActor: RBActorWrapper): void;

    }

    /** VelcroPickup [class] */
    class VelcroPickup extends RumblePickupComponentWrapper {
        // Public:
        /** VelcroPickup::VelcroPickup(uintptr_t mem) [constructor] */
        public constructor(mem: bigint);

        /** Vector VelcroPickup::GetBallOffset() [member function] */
        public GetBallOffset(): Vector;

        /** void VelcroPickup::SetBallOffset(Vector newBallOffset) [member function] */
        public SetBallOffset(newBallOffset: Vector): void;

        /** long unsigned int VelcroPickup::GetbUseRealOffset() [member function] */
        public GetbUseRealOffset(): boolean;

        /** void VelcroPickup::SetbUseRealOffset(long unsigned int newbUseRealOffset) [member function] */
        public SetbUseRealOffset(newbUseRealOffset: boolean): void;

        /** long unsigned int VelcroPickup::GetbHit() [member function] */
        public GetbHit(): boolean;

        /** void VelcroPickup::SetbHit(long unsigned int newbHit) [member function] */
        public SetbHit(newbHit: boolean): void;

        /** long unsigned int VelcroPickup::GetbBroken() [member function] */
        public GetbBroken(): boolean;

        /** void VelcroPickup::SetbBroken(long unsigned int newbBroken) [member function] */
        public SetbBroken(newbBroken: boolean): void;

        /** float VelcroPickup::GetAfterHitDuration() [member function] */
        public GetAfterHitDuration(): number;

        /** void VelcroPickup::SetAfterHitDuration(float newAfterHitDuration) [member function] */
        public SetAfterHitDuration(newAfterHitDuration: number): void;

        /** float VelcroPickup::GetPostBreakDuration() [member function] */
        public GetPostBreakDuration(): number;

        /** void VelcroPickup::SetPostBreakDuration(float newPostBreakDuration) [member function] */
        public SetPostBreakDuration(newPostBreakDuration: number): void;

        /** float VelcroPickup::GetMinBreakForce() [member function] */
        public GetMinBreakForce(): number;

        /** void VelcroPickup::SetMinBreakForce(float newMinBreakForce) [member function] */
        public SetMinBreakForce(newMinBreakForce: number): void;

        /** float VelcroPickup::GetMinBreakTime() [member function] */
        public GetMinBreakTime(): number;

        /** void VelcroPickup::SetMinBreakTime(float newMinBreakTime) [member function] */
        public SetMinBreakTime(newMinBreakTime: number): void;

        /** float VelcroPickup::GetCheckLastTouchRate() [member function] */
        public GetCheckLastTouchRate(): number;

        /** void VelcroPickup::SetCheckLastTouchRate(float newCheckLastTouchRate) [member function] */
        public SetCheckLastTouchRate(newCheckLastTouchRate: number): void;

        /** BallWrapper VelcroPickup::GetWeldedBall() [member function] */
        public GetWeldedBall(): BallWrapper;

        /** void VelcroPickup::SetWeldedBall(BallWrapper newWeldedBall) [member function] */
        public SetWeldedBall(newWeldedBall: BallWrapper): void;

        /** float VelcroPickup::GetOldBallMass() [member function] */
        public GetOldBallMass(): number;

        /** void VelcroPickup::SetOldBallMass(float newOldBallMass) [member function] */
        public SetOldBallMass(newOldBallMass: number): void;

        /** float VelcroPickup::GetAttachTime() [member function] */
        public GetAttachTime(): number;

        /** void VelcroPickup::SetAttachTime(float newAttachTime) [member function] */
        public SetAttachTime(newAttachTime: number): void;

        /** float VelcroPickup::GetLastTouchCheckTime() [member function] */
        public GetLastTouchCheckTime(): number;

        /** void VelcroPickup::SetLastTouchCheckTime(float newLastTouchCheckTime) [member function] */
        public SetLastTouchCheckTime(newLastTouchCheckTime: number): void;

        /** float VelcroPickup::GetBreakTime() [member function] */
        public GetBreakTime(): number;

        /** void VelcroPickup::SetBreakTime(float newBreakTime) [member function] */
        public SetBreakTime(newBreakTime: number): void;

        /** void VelcroPickup::DoBreak() [member function] */
        public DoBreak(): void;

        /** void VelcroPickup::HandleCarTouch(BallWrapper InBall, CarWrapper InCar, unsigned char HitType) [member function] */
        public HandleCarTouch(InBall: BallWrapper, InCar: CarWrapper, HitType: number): void;

        /** void VelcroPickup::PickupEnd() [member function] */
        public PickupEnd(): void;

        /** void VelcroPickup::OnBallHit() [member function] */
        public OnBallHit(): void;

        /** void VelcroPickup::PickupStart() [member function] */
        public PickupStart(): void;

    }

    /** ClubSettingsWrapper [class] */
    class ClubSettingsWrapper extends ObjectWrapper {
        // Public:
        /** ClubSettingsWrapper::ClubSettingsWrapper(uintptr_t mem) [constructor] */
        public constructor(mem: bigint);

        /** bool ClubSettingsWrapper::IsNull() const [member function] */
        public IsNull(): boolean;

        /** UnrealStringWrapper ClubSettingsWrapper::GetClubName() [member function] */
        public GetClubName(): UnrealStringWrapper;

        /** UnrealStringWrapper ClubSettingsWrapper::GetClubTag() [member function] */
        public GetClubTag(): UnrealStringWrapper;

        /** int ClubSettingsWrapper::GetPrimaryColor() [member function] */
        public GetPrimaryColor(): number;

        /** int ClubSettingsWrapper::GetAccentColor() [member function] */
        public GetAccentColor(): number;

    }

    /** ProductSlotWrapper [class] */
    class ProductSlotWrapper extends ObjectWrapper {
        // Public:
        /** ProductSlotWrapper::ProductSlotWrapper(uintptr_t mem) [constructor] */
        public constructor(mem: bigint);

        /** bool ProductSlotWrapper::IsNull() const [member function] */
        public IsNull(): boolean;

        /** UnrealStringWrapper ProductSlotWrapper::GetLabel() [member function] */
        public GetLabel(): UnrealStringWrapper;

        /** UnrealStringWrapper ProductSlotWrapper::GetPluralLabel() [member function] */
        public GetPluralLabel(): UnrealStringWrapper;

        /** UnrealStringWrapper ProductSlotWrapper::GetDescription() [member function] */
        public GetDescription(): UnrealStringWrapper;

        /** UnrealStringWrapper ProductSlotWrapper::GetOnlineLabel() [member function] */
        public GetOnlineLabel(): UnrealStringWrapper;

        /** int ProductSlotWrapper::GetSlotIndex() [member function] */
        public GetSlotIndex(): number;

    }

    /** ProductTemplateWrapper [class] */
    class ProductTemplateWrapper extends ObjectWrapper {
        // Public:
        /** ProductTemplateWrapper::ProductTemplateWrapper(uintptr_t mem) [constructor] */
        public constructor(mem: bigint);

        /** bool ProductTemplateWrapper::IsNull() const [member function] */
        public IsNull(): boolean;

        /** ProductSlotWrapper ProductTemplateWrapper::GetSlot() [member function] */
        public GetSlot(): ProductSlotWrapper;

        /** unsigned char ProductTemplateWrapper::GetUnlockMethod() [member function] */
        public GetUnlockMethod(): number;

        /** unsigned char ProductTemplateWrapper::GetQuality() [member function] */
        public GetQuality(): number;

        /** ProductWrapper ProductTemplateWrapper::GetRequiredProduct() [member function] */
        public GetRequiredProduct(): ProductWrapper;

        /** long unsigned int ProductTemplateWrapper::GetbLicensed() [member function] */
        public GetbLicensed(): boolean;

    }

    /** ProductAttribute_AnimatedSkinLabelWrapper [class] */
    class ProductAttribute_AnimatedSkinLabelWrapper extends ProductAttributeWrapper {
        // Public:
        /** ProductAttribute_AnimatedSkinLabelWrapper::ProductAttribute_AnimatedSkinLabelWrapper(uintptr_t mem) [constructor] */
        public constructor(mem: bigint);

        /** UnrealStringWrapper ProductAttribute_AnimatedSkinLabelWrapper::GetAnimatedLabel() [member function] */
        public GetAnimatedLabel(): UnrealStringWrapper;

    }

    /** ProductAttribute_BlueprintCostWrapper [class] */
    class ProductAttribute_BlueprintCostWrapper extends ProductAttributeWrapper {
        // Public:
        /** ProductAttribute_BlueprintCostWrapper::ProductAttribute_BlueprintCostWrapper(uintptr_t mem) [constructor] */
        public constructor(mem: bigint);

        /** int ProductAttribute_BlueprintCostWrapper::GetCost() [member function] */
        public GetCost(): number;

    }

    /** ProductAttribute_BlueprintWrapper [class] */
    class ProductAttribute_BlueprintWrapper extends ProductAttributeWrapper {
        // Public:
        /** ProductAttribute_BlueprintWrapper::ProductAttribute_BlueprintWrapper(uintptr_t mem) [constructor] */
        public constructor(mem: bigint);

        /** int ProductAttribute_BlueprintWrapper::GetProductID() [member function] */
        public GetProductID(): number;

        /** int ProductAttribute_BlueprintWrapper::GetCachedBlueprintSeriesID() [member function] */
        public GetCachedBlueprintSeriesID(): number;

        /** UnrealStringWrapper ProductAttribute_BlueprintWrapper::GetSortLabel() [member function] */
        public GetSortLabel(): UnrealStringWrapper;

    }

    /** ProductAttribute_BodyCompatibilityWrapper [class] */
    class ProductAttribute_BodyCompatibilityWrapper extends ProductAttributeWrapper {
        // Public:
        /** ProductAttribute_BodyCompatibilityWrapper::ProductAttribute_BodyCompatibilityWrapper(uintptr_t mem) [constructor] */
        public constructor(mem: bigint);

        /** ArrayWrapper<ProductWrapper> ProductAttribute_BodyCompatibilityWrapper::GetCompatibleBodies() [member function] */
        public GetCompatibleBodies(): ArrayWrapper_ProductWrapper;

    }

    /** ProductAttribute_CertifiedWrapper [class] */
    class ProductAttribute_CertifiedWrapper extends ProductAttributeWrapper {
        // Public:
        /** ProductAttribute_CertifiedWrapper::ProductAttribute_CertifiedWrapper(uintptr_t mem) [constructor] */
        public constructor(mem: bigint);

        /** std::string ProductAttribute_CertifiedWrapper::GetValueKeyName() [member function] */
        public GetValueKeyName(): string;

        /** int ProductAttribute_CertifiedWrapper::GetStatId() [member function] */
        public GetStatId(): number;

        /** int ProductAttribute_CertifiedWrapper::GetStatValue() [member function] */
        public GetStatValue(): number;

        /** UnrealStringWrapper ProductAttribute_CertifiedWrapper::GetSortLabel() [member function] */
        public GetSortLabel(): UnrealStringWrapper;

        /** UnrealStringWrapper ProductAttribute_CertifiedWrapper::GetDescription() [member function] */
        public GetDescription(): UnrealStringWrapper;

        /** UnrealStringWrapper ProductAttribute_CertifiedWrapper::GetRankLabel() [member function] */
        public GetRankLabel(): UnrealStringWrapper;

        /** int ProductAttribute_CertifiedWrapper::GetRank() [member function] */
        public GetRank(): number;

    }

    /** ProductAttribute_CurrencyWrapper [class] */
    class ProductAttribute_CurrencyWrapper extends ProductAttributeWrapper {
        // Public:
        /** ProductAttribute_CurrencyWrapper::ProductAttribute_CurrencyWrapper(uintptr_t mem) [constructor] */
        public constructor(mem: bigint);

        /** int ProductAttribute_CurrencyWrapper::GetCurrencyID() [member function] */
        public GetCurrencyID(): number;

        /** UnrealStringWrapper ProductAttribute_CurrencyWrapper::GetSortLabel() [member function] */
        public GetSortLabel(): UnrealStringWrapper;

    }

    /** ProductAttribute_PaintedWrapper [class] */
    class ProductAttribute_PaintedWrapper extends ProductAttributeWrapper {
        // Public:
        /** ProductAttribute_PaintedWrapper::ProductAttribute_PaintedWrapper(uintptr_t mem) [constructor] */
        public constructor(mem: bigint);

        /** int ProductAttribute_PaintedWrapper::GetPaintID() [member function] */
        public GetPaintID(): number;

        /** UnrealStringWrapper ProductAttribute_PaintedWrapper::GetSortLabel() [member function] */
        public GetSortLabel(): UnrealStringWrapper;

    }

    /** ProductAttribute_QualityWrapper [class] */
    class ProductAttribute_QualityWrapper extends ProductAttributeWrapper {
        // Public:
        /** ProductAttribute_QualityWrapper::ProductAttribute_QualityWrapper(uintptr_t mem) [constructor] */
        public constructor(mem: bigint);

        /** unsigned char ProductAttribute_QualityWrapper::GetQuality() [member function] */
        public GetQuality(): number;

        /** UnrealStringWrapper ProductAttribute_QualityWrapper::ProductQualityToString(unsigned char InQuality) [member function] */
        public ProductQualityToString(InQuality: number): UnrealStringWrapper;

    }

    /** ProductAttribute_SpecialEditionWrapper [class] */
    class ProductAttribute_SpecialEditionWrapper extends ProductAttributeWrapper {
        // Public:
        /** ProductAttribute_SpecialEditionWrapper::ProductAttribute_SpecialEditionWrapper(uintptr_t mem) [constructor] */
        public constructor(mem: bigint);

        /** int ProductAttribute_SpecialEditionWrapper::GetEditionID() [member function] */
        public GetEditionID(): number;

        /** UnrealStringWrapper ProductAttribute_SpecialEditionWrapper::GetSortLabel() [member function] */
        public GetSortLabel(): UnrealStringWrapper;

        /** int ProductAttribute_SpecialEditionWrapper::GetOverrideProductID(int ProductID) [member function] */
        public GetOverrideProductID(ProductID: number): number;

    }

    /** SpecialEdition [struct] */
    class SpecialEdition {
        // Public:
        /** SpecialEdition::productId [variable] */
        productId: number;

        /** SpecialEdition::editionId [variable] */
        editionId: number;

        /** SpecialEdition::label [variable] */
        label: string;

        /** SpecialEdition::SpecialEdition() [constructor] */
        public constructor();

    }

    /** ProductAttribute_SpecialEditionSettingsWrapper [class] */
    class ProductAttribute_SpecialEditionSettingsWrapper extends ProductAttributeWrapper {
        // Public:
        /** ProductAttribute_SpecialEditionSettingsWrapper::ProductAttribute_SpecialEditionSettingsWrapper(uintptr_t mem) [constructor] */
        public constructor(mem: bigint);

        /** std::vector<SpecialEdition, std::allocator<SpecialEdition> > ProductAttribute_SpecialEditionSettingsWrapper::GetEditions() [member function] */
        public GetEditions(): SpecialEdition[];

    }

    /** ProductAttribute_TeamEditionUploadWrapper [class] */
    class ProductAttribute_TeamEditionUploadWrapper extends ProductAttributeWrapper {
        // Public:
        /** ProductAttribute_TeamEditionUploadWrapper::ProductAttribute_TeamEditionUploadWrapper(uintptr_t mem) [constructor] */
        public constructor(mem: bigint);

        /** ArrayWrapper<int> ProductAttribute_TeamEditionUploadWrapper::GetSupportedTeamEditions() [member function] */
        public GetSupportedTeamEditions(): ArrayWrapper_int;

    }

    /** ProductAttribute_TeamEditionWrapper [class] */
    class ProductAttribute_TeamEditionWrapper extends ProductAttributeWrapper {
        // Public:
        /** ProductAttribute_TeamEditionWrapper::ProductAttribute_TeamEditionWrapper(uintptr_t mem) [constructor] */
        public constructor(mem: bigint);

        /** int ProductAttribute_TeamEditionWrapper::GetId() [member function] */
        public GetId(): number;

        /** UnrealStringWrapper ProductAttribute_TeamEditionWrapper::GetSortLabel() [member function] */
        public GetSortLabel(): UnrealStringWrapper;

    }

    /** ProductAttribute_UnlockMethodWrapper [class] */
    class ProductAttribute_UnlockMethodWrapper extends ProductAttributeWrapper {
        // Public:
        /** ProductAttribute_UnlockMethodWrapper::ProductAttribute_UnlockMethodWrapper(uintptr_t mem) [constructor] */
        public constructor(mem: bigint);

        /** unsigned char ProductAttribute_UnlockMethodWrapper::GetUnlockMethod() [member function] */
        public GetUnlockMethod(): number;

    }

    /** CertifiedStatDatabaseWrapper [class] */
    class CertifiedStatDatabaseWrapper extends ObjectWrapper {
        // Public:
        /** CertifiedStatDatabaseWrapper::CertifiedStatDatabaseWrapper(uintptr_t mem) [constructor] */
        public constructor(mem: bigint);

        /** bool CertifiedStatDatabaseWrapper::IsNull() const [member function] */
        public IsNull(): boolean;

        /** std::string CertifiedStatDatabaseWrapper::GetStatName(int StatId) [member function] */
        public GetStatName(StatId: number): string;

        /** int CertifiedStatDatabaseWrapper::GetStatId(std::string & StatName) [member function] */
        //public GetStatId(StatName: string): number;

    }

    /** DataAssetDatabaseWrapper [class] */
    class DataAssetDatabaseWrapper extends ObjectWrapper {
        // Public:
        /** DataAssetDatabaseWrapper::DataAssetDatabaseWrapper(uintptr_t mem) [constructor] */
        public constructor(mem: bigint);

        /** bool DataAssetDatabaseWrapper::IsNull() const [member function] */
        public IsNull(): boolean;

        /** std::string DataAssetDatabaseWrapper::GetName(int DataAssetID) [member function] */
        public GetName(DataAssetID: number): string;

        /** int DataAssetDatabaseWrapper::GetID(std::string & DataAssetName) [member function] */
        //public GetID(DataAssetName: string): number;

    }

    /** DataAssetDatabase_ESportsTeamWrapper [class] */
    class DataAssetDatabase_ESportsTeamWrapper extends DataAssetDatabaseWrapper {
        // Public:
        /** DataAssetDatabase_ESportsTeamWrapper::DataAssetDatabase_ESportsTeamWrapper(uintptr_t mem) [constructor] */
        public constructor(mem: bigint);

    }

    /** PaintDatabaseWrapper [class] */
    class PaintDatabaseWrapper extends ObjectWrapper {
        // Public:
        /** PaintDatabaseWrapper::PaintDatabaseWrapper(uintptr_t mem) [constructor] */
        public constructor(mem: bigint);

        /** bool PaintDatabaseWrapper::IsNull() const [member function] */
        public IsNull(): boolean;

        /** std::string PaintDatabaseWrapper::GetPaintName(int PaintID) [member function] */
        public GetPaintName(PaintID: number): string;

        /** int PaintDatabaseWrapper::GetPaintID(std::string & PaintName) [member function] */
        //public GetPaintID(PaintName: string): number;

    }

    /** SpecialEditionDatabaseWrapper [class] */
    class SpecialEditionDatabaseWrapper extends ObjectWrapper {
        // Public:
        /** SpecialEditionDatabaseWrapper::SpecialEditionDatabaseWrapper(uintptr_t mem) [constructor] */
        public constructor(mem: bigint);

        /** bool SpecialEditionDatabaseWrapper::IsNull() const [member function] */
        public IsNull(): boolean;

        /** std::string SpecialEditionDatabaseWrapper::GetSpecialEditionName(int EditionID) [member function] */
        public GetSpecialEditionName(EditionID: number): string;

        /** int SpecialEditionDatabaseWrapper::GetSpecialEditionId(std::string & EditionName) [member function] */
        //public GetSpecialEditionId(EditionName: string): number;

    }

    /** TradeWrapper [class] */
    class TradeWrapper extends ObjectWrapper {
        // Public:
        /** TradeWrapper::TradeWrapper(uintptr_t mem) [constructor] */
        public constructor(mem: bigint);

        /** std::vector<TradeWrapper::Currency, std::allocator<TradeWrapper::Currency> > TradeWrapper::GetReceivingCurrency() const [member function] */
        public GetReceivingCurrency(): Currency[];

        /** std::vector<TradeWrapper::Currency, std::allocator<TradeWrapper::Currency> > TradeWrapper::GetSendingCurrency() const [member function] */
        public GetSendingCurrency(): Currency[];

        /** ArrayWrapper<OnlineProductWrapper> TradeWrapper::GetReceivingProducts() [member function] */
        public GetReceivingProducts(): ArrayWrapper_OnlineProductWrapper;

        /** ArrayWrapper<OnlineProductWrapper> TradeWrapper::GetSendingProducts() [member function] */
        public GetSendingProducts(): ArrayWrapper_OnlineProductWrapper;

        /** UniqueIDWrapper TradeWrapper::GetTradingPlayer() const [member function] */
        public GetTradingPlayer(): UniqueIDWrapper;

        /** GUIDWrapper TradeWrapper::GetTradeGuid() const [member function] */
        public GetTradeGuid(): GUIDWrapper;

        /** bool TradeWrapper::IsNull() [member function] */
        public IsNull(): boolean;

    }

    /** TradeWrapper::Currency [struct] */
    class Currency {
        // Public:
        /** TradeWrapper::Currency::currency_id [variable] */
        currency_id: number;

        /** TradeWrapper::Currency::quantity [variable] */
        quantity: number;

        /** TradeWrapper::Currency::Currency() [constructor] */
        public constructor();

    }

    /** ProductTradeInWrapper [class] */
    class ProductTradeInWrapper extends ObjectWrapper {
        // Public:
        /** ProductTradeInWrapper::ProductTradeInWrapper(uintptr_t mem) [constructor] */
        public constructor(mem: bigint);

        /** ArrayWrapper<OnlineProductWrapper> ProductTradeInWrapper::GetProducts() const [member function] */
        public GetProducts(): ArrayWrapper_OnlineProductWrapper;

        /** bool ProductTradeInWrapper::IsNull() const [member function] */
        public IsNull(): boolean;

    }

    /** LoadoutWrapper [class] */
    class LoadoutWrapper extends ObjectWrapper {
        // Public:
        /** LoadoutWrapper::LoadoutWrapper(uintptr_t mem) [constructor] */
        public constructor(mem: bigint);

        /** bool LoadoutWrapper::IsNull() const [member function] */
        public IsNull(): boolean;

        /** ArrayWrapper<int> LoadoutWrapper::GetLoadout() [member function] */
        public GetLoadout(): ArrayWrapper_int;

        /** ArrayWrapper<unsigned long long> LoadoutWrapper::GetOnlineLoadout() [member function] */
        public GetOnlineLoadout(): ArrayWrapper_unsigned_long_long;

        /** unsigned char LoadoutWrapper::GetPrimaryPaintColorId() [member function] */
        public GetPrimaryPaintColorId(): number;

        /** unsigned char LoadoutWrapper::GetAccentPaintColorId() [member function] */
        public GetAccentPaintColorId(): number;

        /** int LoadoutWrapper::GetPrimaryFinishId() [member function] */
        public GetPrimaryFinishId(): number;

        /** int LoadoutWrapper::GetAccentFinishId() [member function] */
        public GetAccentFinishId(): number;

    }

    /** FormField [struct] */
    class FormField {
        // Public:
        /** FormField::field_type [variable] */
        field_type: Type;

        /** FormField::data [variable] */
        data: string;

        /** FormField::name [variable] */
        name: string;

        /** FormField::FormField() [constructor] */
        public constructor();

    }

    /** FormField::Type [enumeration] */
    enum Type {
        kString = 0,
        kFile = 1,
    }

    /** CurlRequest [struct] */
    class CurlRequest {
        // Public:
        /** CurlRequest::url [variable] */
        url: string;

        /** CurlRequest::verb [variable] */
        verb: string;

        /** CurlRequest::headers [variable] */
        headers: {[key: string]: string};

        /** CurlRequest::body [variable] */
        body: string;

        /** CurlRequest::form_data [variable] */
        form_data: FormField[];

        /** CurlRequest::progress_function [variable] */
        progress_function: (unk0: number, unk1: number, unk2: number, unk3: number) => void;

        /** CurlRequest::CurlRequest() [constructor] */
        public constructor();

    }

    /** HttpWrapper [class] */
    class HttpWrapper {
        // Public:
        /** static void HttpWrapper::SendCurlRequest(CurlRequest request_data, CurlRequestDoneStringReturn on_complete) [member function] */
        public SendCurlRequest(request_data: CurlRequest, on_complete: (unk0: number, unk1: string) => void): void;

        /** static void HttpWrapper::SendCurlRequest(CurlRequest request_data, CurlRequestDoneBinaryReturn on_complete) [member function] */
        public SendCurlRequest(request_data: CurlRequest, on_complete: (unk0: number, unk1: string, unk2: number) => void): void;

        /** static void HttpWrapper::SendCurlRequest(CurlRequest request_data, std::wstring const & file_output, CurlRequestDoneFileReturn on_complete) [member function] */
        public SendCurlRequest(request_data: CurlRequest, file_output: string, on_complete: (unk0: number, unk1: string) => void): void;

        /** static void HttpWrapper::SendCurlJsonRequest(CurlRequest request_data, CurlRequestDoneStringReturn on_complete) [member function] */
        public SendCurlJsonRequest(request_data: CurlRequest, on_complete: (unk0: number, unk1: string) => void): void;

        /** HttpWrapper::HttpWrapper() [constructor] */
        public constructor();

    }

    /** BotLoadoutData [struct] */
    class BotLoadoutData {
        // Public:
        /** BotLoadoutData::products [variable] */
        products: {[key: number]: number};

        /** BotLoadoutData::product_attributes [variable] */
        product_attributes: {[key: number]: Attribute};

        /** BotLoadoutData::team [variable] */
        team: number;

        /** BotLoadoutData::team_finish_id [variable] */
        team_finish_id: number;

        /** BotLoadoutData::custom_finish_id [variable] */
        custom_finish_id: number;

        /** BotLoadoutData::team_color_id [variable] */
        team_color_id: number;

        /** BotLoadoutData::custom_color_id [variable] */
        custom_color_id: number;

        /** BotLoadoutData::BotLoadoutData() [constructor] */
        public constructor();

    }

    /** BotLoadoutData::Attribute [struct] */
    class Attribute {
        // Public:
        /** BotLoadoutData::Attribute::type [variable] */
        type: Type;

        /** BotLoadoutData::Attribute::value [variable] */
        value: number;

        /** BotLoadoutData::Attribute::Attribute() [constructor] */
        public constructor();

    }

    /** BotLoadoutData::Attribute::Type [enumeration] */
    enum Type {
        PAINT = 0,
        ESPORTWHEEL = 1,
        SPECIALEDITION = 2,
    }

    /** CareerStatsWrapper [class] */
    class CareerStatsWrapper {
        // Public:
        /** static std::vector<CareerStatsWrapper::StatValue, std::allocator<CareerStatsWrapper::StatValue> > CareerStatsWrapper::GetStatValues() [member function] */
        public GetStatValues(): StatValue[];

        /** CareerStatsWrapper::CareerStatsWrapper() [constructor] */
        public constructor();

    }

    /** CareerStatsWrapper::StatValue [struct] */
    class StatValue {
        // Public:
        /** CareerStatsWrapper::StatValue::stat_name [variable] */
        stat_name: string;

        /** CareerStatsWrapper::StatValue::private_ [variable] */
        private_: number;

        /** CareerStatsWrapper::StatValue::unranked [variable] */
        unranked: number;

        /** CareerStatsWrapper::StatValue::ranked [variable] */
        ranked: number;

        /** CareerStatsWrapper::StatValue::StatValue() [constructor] */
        public constructor();

    }

    /** BakkesMod::Plugin::BakkesModPlugin [class] */
    class BakkesModPlugin {
        // Public:
        /** BakkesMod::Plugin::BakkesModPlugin::cvarManager [variable] */
        cvarManager: CVarManagerWrapper;

        /** BakkesMod::Plugin::BakkesModPlugin::gameWrapper [variable] */
        gameWrapper: GameWrapper;

        /** void BakkesMod::Plugin::BakkesModPlugin::onLoad() [member function] */
        onLoad(): void;

        /** void BakkesMod::Plugin::BakkesModPlugin::onUnload() [member function] */
        onUnload(): void;

        /** BakkesMod::Plugin::BakkesModPlugin::BakkesModPlugin() [constructor] */
        public constructor();

    }

    /** BakkesMod::Plugin::PluginInfo [struct] */
    class PluginInfo {
        // Public:
        /** BakkesMod::Plugin::PluginInfo::apiBuildVersion [variable] */
        apiBuildVersion: number;

        /** BakkesMod::Plugin::PluginInfo::fileName [variable] */
        fileName: string;

        /** BakkesMod::Plugin::PluginInfo::className [variable] */
        className: string;

        /** BakkesMod::Plugin::PluginInfo::pluginName [variable] */
        pluginName: string;

        /** BakkesMod::Plugin::PluginInfo::pluginVersion [variable] */
        pluginVersion: string;

        /** BakkesMod::Plugin::PluginInfo::pluginType [variable] */
        pluginType: boolean;

        /** BakkesMod::Plugin::PluginInfo::initializeFunc [variable] */
        //initializeFunc: () => bigint;

        /** BakkesMod::Plugin::PluginInfo::delFunc [variable] */
        //delFunc: () => void;

    }

    /** BakkesMod::Plugin::LoadedPlugin [struct] */
    class LoadedPlugin {
        // Public:
        /** BakkesMod::Plugin::LoadedPlugin::_details [variable] */
        _details: PluginInfo;

        /** BakkesMod::Plugin::LoadedPlugin::_plugin [variable] */
        _plugin: BakkesModPlugin;

        /** BakkesMod::Plugin::LoadedPlugin::_instance [variable] */
        _instance: any;

        /** BakkesMod::Plugin::LoadedPlugin::_filename [variable] */
        _filename: string;

        /** BakkesMod::Plugin::LoadedPlugin::_typeid [variable] */
        _typeid: type_index;

        /** BakkesMod::Plugin::LoadedPlugin::LoadedPlugin(std::shared_ptr<BakkesMod::Plugin::PluginInfo> details, std::shared_ptr<BakkesMod::Plugin::BakkesModPlugin> plugin, void * instance, std::string filename) [constructor] */
        //public constructor(details: PluginInfo, plugin: BakkesModPlugin, instance: any, filename: string);

    }

    /** StartGraphSystemWrapper [class] */
    class StartGraphSystemWrapper extends ObjectWrapper {
        // Public:
        /** StartGraphSystemWrapper::StartGraphSystemWrapper(uintptr_t mem) [constructor] */
        public constructor(mem: bigint);

        /** bool StartGraphSystemWrapper::IsNull() const [member function] */
        public IsNull(): boolean;

        /** float StartGraphSystemWrapper::GetGraphSampleTime() [member function] */
        public GetGraphSampleTime(): number;

        /** void StartGraphSystemWrapper::SetGraphSampleTime(float newGraphSampleTime) [member function] */
        public SetGraphSampleTime(newGraphSampleTime: number): void;

        /** unsigned char StartGraphSystemWrapper::GetGraphLevel() [member function] */
        public GetGraphLevel(): number;

        /** void StartGraphSystemWrapper::SetGraphLevel(unsigned char newGraphLevel) [member function] */
        public SetGraphLevel(newGraphLevel: number): void;

        /** PerfStatGraphWrapper StartGraphSystemWrapper::GetPerfStatGraph() [member function] */
        public GetPerfStatGraph(): PerfStatGraphWrapper;

        /** void StartGraphSystemWrapper::SetPerfStatGraph(PerfStatGraphWrapper newPerfStatGraph) [member function] */
        public SetPerfStatGraph(newPerfStatGraph: PerfStatGraphWrapper): void;

        /** NetStatGraphWrapper StartGraphSystemWrapper::GetNetStatGraph() [member function] */
        public GetNetStatGraph(): NetStatGraphWrapper;

        /** void StartGraphSystemWrapper::SetNetStatGraph(NetStatGraphWrapper newNetStatGraph) [member function] */
        public SetNetStatGraph(newNetStatGraph: NetStatGraphWrapper): void;

        /** InputBufferGraphWrapper StartGraphSystemWrapper::GetInputBufferGraph() [member function] */
        public GetInputBufferGraph(): InputBufferGraphWrapper;

        /** void StartGraphSystemWrapper::SetInputBufferGraph(InputBufferGraphWrapper newInputBufferGraph) [member function] */
        public SetInputBufferGraph(newInputBufferGraph: InputBufferGraphWrapper): void;

        /** ArrayWrapper<StatGraphWrapper> StartGraphSystemWrapper::GetStatGraphs() [member function] */
        public GetStatGraphs(): ArrayWrapper_StatGraphWrapper;

        /** ArrayWrapper<StatGraphWrapper> StartGraphSystemWrapper::GetVisibleStatGraphs() [member function] */
        public GetVisibleStatGraphs(): ArrayWrapper_StatGraphWrapper;

        /** void StartGraphSystemWrapper::Graphtime(float Seconds) [member function] */
        public Graphtime(Seconds: number): void;

        /** void StartGraphSystemWrapper::StatGraphNext() [member function] */
        public StatGraphNext(): void;

        /** float StartGraphSystemWrapper::GetGraphSampleTime2(unsigned char Level) [member function] */
        public GetGraphSampleTime2(Level: number): number;

        /** void StartGraphSystemWrapper::SetGraphLevel2(unsigned char Level) [member function] */
        public SetGraphLevel2(Level: number): void;

    }

    /** StatEventWrapper [class] */
    class StatEventWrapper extends ObjectWrapper {
        // Public:
        /** StatEventWrapper::StatEventWrapper(uintptr_t mem) [constructor] */
        public constructor(mem: bigint);

        /** bool StatEventWrapper::IsNull() const [member function] */
        public IsNull(): boolean;

        /** int StatEventWrapper::GetPoints() [member function] */
        public GetPoints(): number;

        /** float StatEventWrapper::GetCooldownSeconds() [member function] */
        public GetCooldownSeconds(): number;

        /** long unsigned int StatEventWrapper::GetbAddToScore() [member function] */
        public GetbAddToScore(): boolean;

        /** long unsigned int StatEventWrapper::GetbIsLeaderboardStat() [member function] */
        public GetbIsLeaderboardStat(): boolean;

        /** long unsigned int StatEventWrapper::GetbNotifyTicker() [member function] */
        public GetbNotifyTicker(): boolean;

        /** long unsigned int StatEventWrapper::GetbShowOnHUD() [member function] */
        public GetbShowOnHUD(): boolean;

        /** long unsigned int StatEventWrapper::GetbPrimaryStat() [member function] */
        public GetbPrimaryStat(): boolean;

        /** long unsigned int StatEventWrapper::GetbSkipReplication() [member function] */
        public GetbSkipReplication(): boolean;

        /** long unsigned int StatEventWrapper::GetbCanMute() [member function] */
        public GetbCanMute(): boolean;

        /** long unsigned int StatEventWrapper::GetbCountMultiplied() [member function] */
        public GetbCountMultiplied(): boolean;

        /** UnrealStringWrapper StatEventWrapper::GetLabel() [member function] */
        public GetLabel(): UnrealStringWrapper;

        /** UnrealStringWrapper StatEventWrapper::GetPluralLabel() [member function] */
        public GetPluralLabel(): UnrealStringWrapper;

        /** UnrealStringWrapper StatEventWrapper::GetDescription() [member function] */
        public GetDescription(): UnrealStringWrapper;

        /** float StatEventWrapper::GetNextCooldownTime() [member function] */
        public GetNextCooldownTime(): number;

        /** std::string StatEventWrapper::GetGroupName() [member function] */
        public GetGroupName(): string;

        /** std::string StatEventWrapper::GetEventName() [member function] */
        public GetEventName(): string;

    }

    /** SequenceOpWrapper [class] */
    class SequenceOpWrapper extends SequenceObjectWrapper {
        // Public:
        /** SequenceOpWrapper::SequenceOpWrapper(uintptr_t mem) [constructor] */
        public constructor(mem: bigint);

    }

}
