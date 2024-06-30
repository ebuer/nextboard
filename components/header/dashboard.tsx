"use client"
import { ReactNode } from "react"
import { useState } from 'react'
import Link from "next/link"
import LanguageSwitcher from "@/components/language-switcher"
import { clsx } from "clsx"
import { INavigation, INavigationItem } from "@/interfaces/navigation.interfaces"
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'

import {
    Dialog,
    DialogBackdrop,
    DialogPanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    TransitionChild,
} from '@headlessui/react'
import {
    Bars3Icon,
    BellIcon,
    Cog6ToothIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, MagnifyingGlassIcon, ChevronRightIcon } from '@heroicons/react/20/solid'



interface HeaderDashboardProps {
    lang: string;
    navigation: INavigation;
}


const HeaderDashboard: React.FC<HeaderDashboardProps> = ({ lang, navigation }) => {

    const [sidebarOpen, setSidebarOpen] = useState(false)


    return (
        <>
            <Dialog className="relative z-50 lg:hidden" open={sidebarOpen} onClose={setSidebarOpen}>
                <DialogBackdrop
                    transition
                    className="fixed inset-0 bg-gray-900/80 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
                />

                <div className="fixed inset-0 flex">
                    <DialogPanel
                        transition
                        className="relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-[closed]:-translate-x-full"
                    >
                        <TransitionChild>
                            <div className="absolute left-full top-0 flex w-16 justify-center pt-5 duration-300 ease-in-out data-[closed]:opacity-0">
                                <button type="button" className="-m-2.5 p-2.5" onClick={() => setSidebarOpen(false)}>
                                    <span className="sr-only">Close sidebar</span>
                                    <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                                </button>
                            </div>
                        </TransitionChild>
                        <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4">
                            <div className="flex h-16 shrink-0 items-center">
                                <img
                                    className="h-8 w-auto"
                                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                    alt="Your Company"
                                />
                            </div>
                            <nav className="flex flex-1 flex-col">
                                <ul role="list" className="flex flex-1 flex-col gap-y-7">
                                    <li>
                                        <ul role="list" className="-mx-2 space-y-1">
                                            {navigation.main.map((item: INavigationItem) => (
                                                <li key={item.name}>
                                                    {!item.children ? (
                                                        <Link
                                                            onClick={() => setSidebarOpen(false)}
                                                            href={`/${lang}${item.href}`}
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
                                                        </Link>
                                                    ) : (
                                                        <Disclosure as="div">
                                                            {({ open }) => (
                                                                <>
                                                                    <DisclosureButton
                                                                        className={clsx(
                                                                            item.current ? 'text-indigo-600 bg-gray-50' : 'hover:bg-gray-50 hover:text-indigo-600',
                                                                            'group flex w-full items-center gap-x-3 rounded-md p-2 text-left text-sm font-semibold leading-6 text-gray-700',
                                                                        )}
                                                                    >
                                                                        <item.icon className="h-6 w-6 shrink-0 text-gray-400 group-hover:text-indigo-600" aria-hidden="true" />
                                                                        {item.name}
                                                                        <ChevronRightIcon
                                                                            className={clsx(
                                                                                open ? 'rotate-90 text-gray-500' : 'text-gray-400',
                                                                                'ml-auto h-5 w-5 shrink-0',
                                                                            )}
                                                                            aria-hidden="true"
                                                                        />
                                                                    </DisclosureButton>
                                                                    <DisclosurePanel as="ul" className="mt-1 px-2">
                                                                        {item.children && item.children.map((subItem) => (
                                                                            <li key={subItem.name}>
                                                                                <Link
                                                                                    onClick={() => setSidebarOpen(false)}
                                                                                    href={`/${lang}${item.prefix ? item.prefix : ""}${subItem.href}`}
                                                                                    className={clsx(
                                                                                        subItem.current ? 'bg-gray-50' : 'hover:bg-gray-50',
                                                                                        'block rounded-md py-2 pl-9 pr-2 text-sm leading-6 text-gray-700',
                                                                                    )}
                                                                                >
                                                                                    {subItem.name}
                                                                                </Link>
                                                                            </li>
                                                                        ))}
                                                                    </DisclosurePanel>
                                                                </>
                                                            )}
                                                        </Disclosure>
                                                    )}
                                                </li>
                                            ))}
                                        </ul>
                                    </li>
                                    <li>
                                        <div className="text-xs font-semibold leading-6 text-gray-400">Your teams</div>
                                        <ul role="list" className="-mx-2 mt-2 space-y-1">
                                            {navigation.sub.map((subItem: INavigationItem) => (
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
                                                aria-hidden="true"
                                            />
                                            Settings
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </DialogPanel>
                </div>
            </Dialog>



            <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
                <button type="button" className="-m-2.5 p-2.5 text-gray-700 lg:hidden" onClick={() => setSidebarOpen(true)}>
                    <span className="sr-only">Open sidebar</span>
                    <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </button>

                <div className="h-6 w-px bg-gray-200 lg:hidden" aria-hidden="true" />

                <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
                    <form className="relative flex flex-1" action="#" method="GET">
                        <label htmlFor="search-field" className="sr-only">
                            Search
                        </label>
                        <MagnifyingGlassIcon
                            className="pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-gray-400"
                            aria-hidden="true"
                        />
                        <input
                            id="search-field"
                            className="block h-full w-full border-0 py-0 pl-8 pr-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
                            placeholder="Search..."
                            type="search"
                            name="search"
                        />
                    </form>
                    <div className="flex items-center gap-x-4 lg:gap-x-6">
                        <button type="button" className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500">
                            <span className="sr-only">View notifications</span>
                            <BellIcon className="h-6 w-6" aria-hidden="true" />
                        </button>

                        <div className="lg:hidden">
                            <LanguageSwitcher lang={lang} />
                        </div>

                        <div className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-200" aria-hidden="true" />

                        <Menu as="div" className="relative">
                            <MenuButton className="-m-1.5 flex items-center p-1.5">
                                <span className="sr-only">Open user menu</span>
                                <img
                                    className="h-8 w-8 rounded-full bg-gray-50"
                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                    alt=""
                                />
                                <span className="hidden lg:flex lg:items-center">
                                    <span className="ml-4 text-sm font-semibold leading-6 text-gray-900" aria-hidden="true">
                                        Tom Cook
                                    </span>
                                    <ChevronDownIcon className="ml-2 h-5 w-5 text-gray-400" aria-hidden="true" />
                                </span>
                            </MenuButton>
                            <MenuItems
                                transition
                                className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                            >
                                {navigation.user.map((item: INavigationItem) => (
                                    <MenuItem key={item.name}>
                                        {({ focus }) => (
                                            <a
                                                href={item.href}
                                                className={clsx(
                                                    focus ? 'bg-gray-50' : '',
                                                    'block px-3 py-1 text-sm leading-6 text-gray-900',
                                                )}
                                            >
                                                {item.name}
                                            </a>
                                        )}
                                    </MenuItem>
                                ))}
                            </MenuItems>
                        </Menu>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeaderDashboard