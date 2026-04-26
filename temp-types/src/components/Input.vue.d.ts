type Size = "sm" | "md" | "lg";
type InputType = "text" | "email" | "password" | "number" | "tel" | "url";
interface Props {
    type?: InputType;
    modelValue?: string;
    placeholder?: string;
    disabled?: boolean;
    readonly?: boolean;
    size?: Size;
    error?: boolean;
}
declare const __VLS_export: import("vue").DefineComponent<Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    input: (event: Event) => any;
    "update:modelValue": (value: string) => any;
    change: (event: Event) => any;
    focus: (event: FocusEvent) => any;
    blur: (event: FocusEvent) => any;
}, string, import("vue").PublicProps, Readonly<Props> & Readonly<{
    onInput?: ((event: Event) => any) | undefined;
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
    onChange?: ((event: Event) => any) | undefined;
    onFocus?: ((event: FocusEvent) => any) | undefined;
    onBlur?: ((event: FocusEvent) => any) | undefined;
}>, {
    error: boolean;
    size: Size;
    disabled: boolean;
    type: InputType;
    modelValue: string;
    placeholder: string;
    readonly: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: typeof __VLS_export;
export default _default;
