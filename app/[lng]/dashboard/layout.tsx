"use client"
import { ReactNode } from "react"
import AppProvider from "@/providers"
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
            name: 'Basics',
            href: '/dashboard',
            icon: HomeIcon,
            current: true
        },
        { name: 'i18n(Language)', href: '/dashboard/language', icon: UsersIcon, current: false },
        { name: 'Form Builder', href: '/dashboard/form', icon: UsersIcon, current: false },
        {
            name: 'Ui Components', href: '#', prefix: "/dashboard/ui", icon: FolderIcon, current: false,
            children: [
                { name: 'Container', href: '/container' },
                { name: 'Button', href: '#' },
                { name: 'Tag', href: '#' },
                { name: 'Skeleton', href: '#' },
                { name: 'Loader', href: '#' },
                { name: 'Calendar', href: '#' },
            ],
        },
        {
            name: 'Table', href: '#', prefix: "/dashboard/table", icon: CalendarIcon, current: false,
            children: [
                { name: 'Simple Table', href: '/simple-table' },
                { name: 'Data Table', href: '/data-table' },
            ]
        },
        {
            name: 'Alerts', href: '#', prefix: "/dashboard", icon: DocumentDuplicateIcon, current: false, children: [
                { name: 'Swal', href: '/swal' },
                { name: 'Notify', href: '/notify' },
            ],
        },
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
        <AppProvider lang={lng}>
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
        </AppProvider>
    );
}

export default DashboardLayout