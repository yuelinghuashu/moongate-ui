export interface ToastOptions {
    /** 消息内容 */
    message: string;
    /** 类型 */
    type?: "success" | "error" | "warning" | "info";
    /** 持续时间（毫秒），0 表示不自动关闭 */
    duration?: number;
    /** 是否显示关闭按钮 */
    closable?: boolean;
    /** 位置 */
    position?: "top" | "bottom";
    /** 自定义图标 */
    icon?: string;
}
export declare const useToast: () => {
    /** 显示通知 */
    show: (options: ToastOptions) => void;
    /** 成功通知 */
    success: (message: string, options?: Partial<Omit<ToastOptions, "message" | "type">>) => void;
    /** 错误通知 */
    error: (message: string, options?: Partial<Omit<ToastOptions, "message" | "type">>) => void;
    /** 警告通知 */
    warning: (message: string, options?: Partial<Omit<ToastOptions, "message" | "type">>) => void;
    /** 信息通知 */
    info: (message: string, options?: Partial<Omit<ToastOptions, "message" | "type">>) => void;
};
