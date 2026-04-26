type TabSize = "sm" | "md" | "lg";
type TabVariant = "line" | "card";
export interface TabItem {
    label: string;
    icon?: string;
    content?: string;
    disabled?: boolean;
}
interface Props {
    tabs?: TabItem[];
    modelValue?: number;
    size?: TabSize;
    variant?: TabVariant;
    lazy?: boolean;
}
declare var __VLS_2: `panel-${number}`, __VLS_3: {};
type __VLS_Slots = {} & {
    [K in NonNullable<typeof __VLS_2>]?: (props: typeof __VLS_3) => any;
};
declare const __VLS_base: import("vue").DefineComponent<Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: number) => any;
    change: (index: number, tab: TabItem) => any;
}, string, import("vue").PublicProps, Readonly<Props> & Readonly<{
    "onUpdate:modelValue"?: ((value: number) => any) | undefined;
    onChange?: ((index: number, tab: TabItem) => any) | undefined;
}>, {
    variant: TabVariant;
    size: TabSize;
    modelValue: number;
    tabs: TabItem[];
    lazy: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
