import React from 'react';

interface UiLoaderProps {
    className?: string;
    small?: boolean;
}

const UiLoader: React.FC<UiLoaderProps> = ({ className = '', small = false }) => {
    const smallClass = small ? "small" : "";

    return (
        <div className={className}>
            <span className={`app-loader ${smallClass}`}></span>
        </div>
    );
};

export default UiLoader;