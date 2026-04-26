type Size = "sm" | "md" | "lg" | "xl";
interface Props {
    modelValue?: boolean;
    title?: string;
    size?: Size;
    closable?: boolean;
    closeOnOverlay?: boolean;
}
declare var __VLS_7: {}, __VLS_9: {}, __VLS_11: {};
type __VLS_Slots = {} & {
    title?: (props: typeof __VLS_7) => any;
} & {
    default?: (props: typeof __VLS_9) => any;
} & {
    footer?: (props: typeof __VLS_11) => any;
};
declare const __VLS_base: import("vue").DefineComponent<Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: boolean) => any;
    open: () => any;
    close: () => any;
}, string, import("vue").PublicProps, Readonly<Props> & Readonly<{
    "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
    onOpen?: (() => any) | undefined;
    onClose?: (() => any) | undefined;
}>, {
    size: Size;
    title: string;
    modelValue: boolean;
    closable: boolean;
    closeOnOverlay: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
