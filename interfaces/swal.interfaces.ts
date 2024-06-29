export type SwalTypes = 'success' | 'error' | 'warning' | 'info' | 'confirm';

export interface SwalProps {
    open: boolean;
    type?: SwalTypes
    title?: string;
    text?: string;
    closeBtnText?: string;
    cancelBtnText? : string;
    confirmBtnText?: string;
    onClose?: () => void;
    onConfirm?: () => void;
    onCancel?: () => void;
}

export const initialState: SwalProps = {
    open: false,
    type: "info",
    title: "",
    text: "",
}

