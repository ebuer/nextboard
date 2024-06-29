import React, { Component, ReactNode } from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import store from "@/store";

interface ServerProviderProps {
    children: ReactNode;
}

const ServerProvider: React.FC<ServerProviderProps> = ({ children }) => {
    return (
        <ReduxProvider store={store}>
            {children}
        </ReduxProvider>
    );
};

export default ServerProvider;