export type NotifyTypes = 'info' | 'success' | 'error' | 'warning';

export interface NotifyProps {
    open: boolean;
    type: NotifyTypes;
    text: string;
    onClose?: () => void;
}

export const initialState: NotifyProps = {
    open: false,
    type: "info",
    text: "",
}
