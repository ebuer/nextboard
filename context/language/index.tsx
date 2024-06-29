import React, { createContext, useContext, ReactNode } from 'react';

interface LanguageContextType {
    language: string;
    // setLanguage: (language: string) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = (): LanguageContextType => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};

interface LanguageProviderProps {
    children: ReactNode;
    lang: string;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children, lang }) => {
    return (
        <LanguageContext.Provider value={{ language: lang }}>
            {children}
        </LanguageContext.Provider>
    );
};