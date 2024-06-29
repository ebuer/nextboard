"use client"
import React, { ReactNode } from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import store from "@/store";
import { NextUIProvider } from '@nextui-org/react';
import { LanguageProvider } from '@/context/language';

interface ClientProviderProps {
    children: ReactNode;
    lang: string
}

const clientProvider: React.FC<ClientProviderProps> = ({ children, lang }) => {
    return (
        <ReduxProvider store={store}>
            <NextUIProvider>
                <LanguageProvider lang={lang}>
                    {children}
                </LanguageProvider>
            </NextUIProvider>
        </ReduxProvider>
    );
};

export default clientProvider;