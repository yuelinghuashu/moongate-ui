type SkeletonType = "default" | "card" | "list";
type AvatarType = "circle" | "square";
type AvatarSize = "sm" | "md" | "lg";
type RowSize = "sm" | "md" | "lg";
interface Props {
    type?: SkeletonType;
    rows?: number;
    avatar?: boolean;
    avatarShape?: AvatarType;
    /** 头像尺寸 */
    avatarSize?: AvatarSize;
    /** 第一行是否为标题 */
    title?: boolean;
    /** 行宽度（仅 default 模式） */
    rowSize?: RowSize;
}
declare const __VLS_export: import("vue").DefineComponent<Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<Props> & Readonly<{}>, {
    title: boolean;
    type: SkeletonType;
    rows: number;
    avatar: boolean;
    avatarShape: AvatarType;
    avatarSize: AvatarSize;
    rowSize: RowSize;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: typeof __VLS_export;
export default _default;
