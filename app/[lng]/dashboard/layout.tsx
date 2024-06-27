"use client"
import { ReactNode } from "react"

import { HeaderDashboard } from "@/components/header"
import Sidebar from "@/components/sidebar"

import {
    CalendarIcon,
    ChartPieIcon,
    DocumentDuplicateIcon,
    FolderIcon,
    HomeIcon,
    UsersIcon,
} from '@heroicons/react/24/outline'

import { INavigation } from "@/interfaces/navigation.interfaces"

const navigation: INavigation = {
    main: [
        {
            name: 'Dashboard',
            href: '#',
            icon: HomeIcon,
            current: true
        },
        { name: 'Team', href: '#', icon: UsersIcon, current: false },
        {
            name: 'Projects', href: '#', icon: FolderIcon, current: false,
            children: [
                { name: 'GraphQL API', href: '#' },
                { name: 'iOS App', href: '#' },
                { name: 'Android App', href: '#' },
                { name: 'New Customer Portal', href: '#' },
            ],
        },
        { name: 'Calendar', href: '#', icon: CalendarIcon, current: false },
        { name: 'Documents', href: '#', icon: DocumentDuplicateIcon, current: false },
        { name: 'Reports', href: '#', icon: ChartPieIcon, current: false },
    ],
    sub: [
        { id: 1, name: 'Heroicons', href: '#', initial: 'H', current: false },
        { id: 2, name: 'Tailwind Labs', href: '#', initial: 'T', current: false },
        { id: 3, name: 'Workcation', href: '#', initial: 'W', current: false },
    ],
    user: [
        { name: 'Your profile', href: '#' },
        { name: 'Sign out', href: '#' },
    ]
}

interface Params {
    lng: string;
}

interface DashboardLayoutProps {
    children: ReactNode;
    params: Params;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children, params: { lng } }) => {

    return (
        <>
            <div className="h-full bg-white">

                <Sidebar
                    lang={lng}
                    navigation={navigation} />

                <div className="lg:pl-72">

                    <HeaderDashboard
                        lang={lng}
                        navigation={navigation} />

                    <main className="py-10">
                        <div className="px-4 sm:px-6 lg:px-8">
                            {children}
                        </div>
                    </main>
                </div>


            </div>
        </>
    );
}

export default DashboardLayout