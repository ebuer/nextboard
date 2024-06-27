import React from 'react';

interface UiTagProps {
    children: React.ReactNode;
    className?: string;
    type?: 'success' | 'error' | 'info' | 'warning';
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

const UiTag: React.FC<UiTagProps> = ({ children, className = '', type, size }) => {
    const typeClass = type === 'success' ? 'text-green-700 bg-green-50 ring-green-600/20'
        : type === 'error' ? 'text-red-700 bg-red-50 ring-red-600/10'
            : type === 'info' ? 'text-blue-700 bg-blue-50 ring-blue-600/10'
                : type === 'warning' ? 'text-yellow-700 bg-yellow-50 ring-yellow-600/10'
                    : '';

    const sizeClass = size === 'xs' ? "text-xs"
        : size === 'sm' ? "text-sm"
            : size === 'md' ? "text-md"
                : size === 'lg' ? "text-lg"
                    : size === 'xl' ? "text-xl"
                        : "text-xs";

    return (
        <div className={`inline rounded-md py-1 px-2 font-medium ring-1 ring-inset ${sizeClass} ${typeClass} ${className}`}>
            {children}
        </div>
    );
}

export default UiTag;