import React, { ReactNode } from 'react';

interface UiButtonProps {
    children: ReactNode;
    onClick: () => void;
    className?: string;
    type?: 'error' | 'success' | 'info' | 'warning' | 'primary';
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

const UiButton: React.FC<UiButtonProps> = ({ children, onClick, className = '', type, size }) => {

    const colorClass = type === "error" ? "bg-red-600 hover:bg-red-500 focus-visible:outline-red-600" :
        type === "success" ? "bg-green-600 hover:bg-green-500 focus-visible:outline-green-600" :
            type === "info" ? "bg-blue-600 hover:bg-blue-500 focus-visible:outline-blue-600" :
                type === "warning" ? "bg-yellow-600 hover:bg-yellow-500 focus-visible:outline-yellow-600" :
                    type === "primary" ? "bg-appPurple hover:bg-appPurpleDark focus-visible:outline-appPurple" :
                        "bg-indigo-600 hover:bg-indigo-500 focus-visible:outline-indigo-600";

    const defaultClass = `font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${colorClass}`;

    const sizeClass = size === 'xs' ? "rounded px-2 py-1 text-xs" :
        size === 'sm' ? "rounded px-2 py-1 text-sm" :
            size === 'md' ? "rounded-md px-2.5 py-1.5 text-sm" :
                size === 'lg' ? "rounded-md px-3 py-2 text-sm" :
                    size === 'xl' ? "rounded-md px-3.5 py-2.5 text-sm" : "rounded-md px-3 py-2 text-sm";

    return (
        <button
            onClick={onClick}
            type="button"
            className={`${defaultClass} ${sizeClass} ${className}`}
        >
            {children}
        </button>
    );
}

export default UiButton;