import React, { ReactNode } from 'react';

import ServerProvider from './server';
import ClientProvider from './client';

interface AppProviderProps {
    children: ReactNode;
    ssr?: boolean;
    lang: string;
}

const AppProvider: React.FC<AppProviderProps> = ({ children, ssr, lang }) => {
    return (
        <>
            {
                ssr ?
                    <ServerProvider>
                        {children}
                    </ServerProvider >
                    :
                    <ClientProvider lang={lang}>
                        {children}
                    </ClientProvider>
            }
        </>
    );
};

export default AppProvider;