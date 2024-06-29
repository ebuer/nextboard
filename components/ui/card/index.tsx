import React, { ReactNode } from 'react';

interface UiCardProps {
    children: ReactNode;
    className?: string;
    slotClassName?: string;
}

const UiCard: React.FC<UiCardProps> = ({ children, className, slotClassName }) => {
    return (
        <div className={`overflow-hidden rounded-lg bg-white shadow ${className}`}>
            <div className={`px-4 py-5 sm:p-6 ${slotClassName}`}>{children}</div>
        </div>
    )
}

export default UiCard