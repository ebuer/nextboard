import React from "react";
import { clsx } from "clsx";
import Link from "next/link";
import { Cog6ToothIcon } from '@heroicons/react/24/outline';
import LanguageSwitcher from "@/components/language-switcher";
import { INavigation } from "@/interfaces/navigation.interfaces"


interface SidebarProps {
    lang: string;
    navigation: INavigation;
}

const Sidebar: React.FC<SidebarProps> = ({ lang, navigation }) => {
    return (
        <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
            <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6 pb-4">
                <div className="flex h-16 shrink-0 items-center justify-between">
                    <Link href={`/${lang}`}>
                        <img
                            className="h-8 w-auto"
                            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                            alt="Your Company"
                        />
                    </Link>
                    <LanguageSwitcher lang={lang} />
                </div>
                <nav className="flex flex-1 flex-col">
                    <ul role="list" className="flex flex-1 flex-col gap-y-7">
                        <li>
                            <ul role="list" className="-mx-2 space-y-1">
                                {navigation.main.map((item) => (
                                    <li key={item.name}>
                                        <a
                                            href={item.href}
                                            className={clsx(
                                                item.current
                                                    ? 'bg-gray-50 text-indigo-600'
                                                    : 'text-gray-700 hover:bg-gray-50 hover:text-indigo-600',
                                                'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6',
                                            )}
                                        >
                                            <item.icon
                                                className={clsx(
                                                    item.current ? 'text-indigo-600' : 'text-gray-400 group-hover:text-indigo-600',
                                                    'h-6 w-6 shrink-0',
                                                )}
                                                aria-hidden={true}
                                            />
                                            {item.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </li>
                        <li>
                            <div className="text-xs font-semibold leading-6 text-gray-400">Your teams</div>
                            <ul role="list" className="-mx-2 mt-2 space-y-1">
                                {navigation.sub.map((subItem) => (
                                    <li key={subItem.name}>
                                        <a
                                            href={subItem.href}
                                            className={clsx(
                                                subItem.current
                                                    ? 'bg-gray-50 text-indigo-600'
                                                    : 'text-gray-700 hover:bg-gray-50 hover:text-indigo-600',
                                                'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6',
                                            )}
                                        >
                                            <span
                                                className={clsx(
                                                    subItem.current
                                                        ? 'border-indigo-600 text-indigo-600'
                                                        : 'border-gray-200 text-gray-400 group-hover:border-indigo-600 group-hover:text-indigo-600',
                                                    'flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border bg-white text-[0.625rem] font-medium',
                                                )}
                                            >
                                                {subItem.initial}
                                            </span>
                                            <span className="truncate">{subItem.name}</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </li>
                        <li className="mt-auto">
                            <a
                                href="#"
                                className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
                            >
                                <Cog6ToothIcon
                                    className="h-6 w-6 shrink-0 text-gray-400 group-hover:text-indigo-600"
                                    aria-hidden={true}
                                />
                                Settings
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Sidebar;