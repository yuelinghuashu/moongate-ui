type Size = "sm" | "md" | "lg";
interface Props {
    currentPage: number;
    totalPages: number;
    size?: Size;
}
declare const __VLS_export: import("vue").DefineComponent<Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    change: (page: number) => any;
    "update:currentPage": (page: number) => any;
}, string, import("vue").PublicProps, Readonly<Props> & Readonly<{
    onChange?: ((page: number) => any) | undefined;
    "onUpdate:currentPage"?: ((page: number) => any) | undefined;
}>, {
    size: Size;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: typeof __VLS_export;
export default _default;
