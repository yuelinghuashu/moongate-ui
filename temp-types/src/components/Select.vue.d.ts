type Size = "sm" | "md" | "lg";
export interface SelectOption {
    label: string;
    value: string | number;
    disabled?: boolean;
}
interface Props {
    modelValue?: string | number;
    options?: SelectOption[];
    placeholder?: string;
    size?: Size;
    disabled?: boolean;
    error?: boolean;
}
declare const __VLS_export: import("vue").DefineComponent<Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: string | number) => any;
    change: (event: Event) => any;
}, string, import("vue").PublicProps, Readonly<Props> & Readonly<{
    "onUpdate:modelValue"?: ((value: string | number) => any) | undefined;
    onChange?: ((event: Event) => any) | undefined;
}>, {
    error: boolean;
    size: Size;
    disabled: boolean;
    modelValue: string | number;
    placeholder: string;
    options: SelectOption[];
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: typeof __VLS_export;
export default _default;
