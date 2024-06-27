import { ReactNode } from "react"
import { HeaderLanding } from "@/components/header"

interface Params {
    lng: string;
}

interface LandingLayoutProps {
    children: ReactNode;
    params: Params;
}

const LandingLayout: React.FC<LandingLayoutProps> = ({ children, params: { lng } }) => {
    return (
        <div>
            <HeaderLanding lang={lng} />
            {children}
        </div>
    );
}

export default LandingLayout