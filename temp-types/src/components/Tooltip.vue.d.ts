type Placement = "top" | "bottom" | "left" | "right";
interface Props {
    /** 提示内容 */
    content?: string;
    /** 提示位置 */
    placement?: Placement;
    /** 显示延迟（毫秒） */
    delay?: number;
    /** 偏移量（像素） */
    offset?: number;
}
declare var __VLS_1: {}, __VLS_3: {}, __VLS_11: {};
type __VLS_Slots = {} & {
    trigger?: (props: typeof __VLS_1) => any;
} & {
    default?: (props: typeof __VLS_3) => any;
} & {
    content?: (props: typeof __VLS_11) => any;
};
declare const __VLS_base: import("vue").DefineComponent<Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<Props> & Readonly<{}>, {
    content: string;
    placement: Placement;
    delay: number;
    offset: number;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
