import React, { ReactNode } from 'react';

import ServerProvider from './server';
import ClientProvider from './client';

interface AppProviderProps {
    children: ReactNode;
    ssr?: boolean;
}

const AppProvider: React.FC<AppProviderProps> = ({ children, ssr }) => {
    return (
        <>
            {
                ssr ?
                    <ServerProvider>
                        {children}
                    </ServerProvider >
                    :
                    <ClientProvider>
                        {children}
                    </ClientProvider>
            }
        </>
    );
};

export default AppProvider;