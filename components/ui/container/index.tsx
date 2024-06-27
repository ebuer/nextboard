import React, { ReactNode } from 'react';

interface AppContainerProps {
    children: ReactNode;
    className?: string
}

const UiContainer: React.FC<AppContainerProps> = ({ children, className }) => {
    return (
        <div className={`mx-auto max-w-7xl sm:px-6 lg:px-8 ${className}`}>{children}</div>
    )
}

export default UiContainer