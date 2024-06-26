"use client"
import React, { ReactNode } from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import store from "@/store";
import { NextUIProvider } from '@nextui-org/react';

interface ClientProviderProps {
    children: ReactNode;
}

const clientProvider: React.FC<ClientProviderProps> = ({ children }) => {
    return (
        <ReduxProvider store={store}>
            <NextUIProvider>
                {children}
            </NextUIProvider>
        </ReduxProvider>
    );
};

export default clientProvider;