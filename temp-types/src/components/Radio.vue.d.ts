type Size = "sm" | "md" | "lg";
interface Props {
    modelValue?: string | number;
    label?: string;
    value?: string | number;
    size?: Size;
    disabled?: boolean;
    error?: boolean;
}
declare var __VLS_1: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_1) => any;
};
declare const __VLS_base: import("vue").DefineComponent<Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: string | number) => any;
    change: (event: Event) => any;
}, string, import("vue").PublicProps, Readonly<Props> & Readonly<{
    "onUpdate:modelValue"?: ((value: string | number) => any) | undefined;
    onChange?: ((event: Event) => any) | undefined;
}>, {
    error: boolean;
    label: string;
    size: Size;
    disabled: boolean;
    modelValue: string | number;
    value: string | number;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
