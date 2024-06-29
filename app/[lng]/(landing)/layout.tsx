import { ReactNode } from "react"
import { HeaderLanding } from "@/components/header"
import AppProvider from "@/providers";

interface Params {
    lng: string;
}

interface LandingLayoutProps {
    children: ReactNode;
    params: Params;
}

const LandingLayout: React.FC<LandingLayoutProps> = ({ children, params: { lng } }) => {
    return (
        <AppProvider lang={lng}>
            <div>
                <HeaderLanding lang={lng} />
                {children}
            </div>
        </AppProvider>

    );
}

export default LandingLayout