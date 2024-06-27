"use client"
import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { useClientTranslation, currentLng } from '@/i18n/client'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import LanguageSwitcher from '@/components/language-switcher'

const navigation = [
    { i18nPath: "menu_1", href: '#' },
    { i18nPath: "menu_2", href: '#' },
    { i18nPath: "menu_3", href: '#' },
    { i18nPath: "menu_4", href: '#' }
]

const HeaderLanding: React.FC<{ lang: string }> = ({ lang }) => {

    const { t: t_header } = useClientTranslation(lang, "landing/header")

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)


    return (
        <header className="bg-white">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex items-center gap-x-12">
                    <a href="#" className="-m-1.5 p-1.5">
                        <span className="sr-only">Your Company</span>
                        <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
                    </a>
                    <div className="hidden lg:flex lg:gap-x-12">
                        {navigation.map((item, index) => (
                            <a key={index} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
                                {t_header(item.i18nPath)}
                            </a>
                        ))}
                    </div>
                </div>
                <div className="flex lg:hidden">
                    <div className='mr-2'>
                        <LanguageSwitcher lang={lang} />
                    </div>
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <div className="hidden lg:flex">

                    <LanguageSwitcher lang={lang} />

                    <a target='_blank' href="https://github.com/ebuer/Nextboard" className="ml-3 text-sm font-semibold leading-6 text-gray-900 flex justify-center items-center">
                        <img className='mr-1 w-8' src="/assets/icons/github.svg" alt="" />
                        {/* View on GitHub <span aria-hidden="true">&rarr;</span> */}
                    </a>
                </div>
            </nav>
            <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-10" />
                <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img
                                className="h-8 w-auto"
                                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                alt=""
                            />
                        </a>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                {navigation.map((item, index) => (
                                    <a
                                        key={index}
                                        href={item.href}
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    >
                                        {t_header(item.i18nPath)}
                                    </a>
                                ))}
                            </div>
                            <div className="py-6">
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Log in
                                </a>
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    )
}

export default HeaderLanding