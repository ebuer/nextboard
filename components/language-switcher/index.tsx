"use client"
import { useState, useEffect } from 'react'
import { useRouter, usePathname, useParams, useSearchParams } from 'next/navigation'
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { clsx } from 'clsx';


const items = [
    {
        title: 'EN',
        lng: 'en',
        flag: '/assets/icons/us.svg',
    },
    {
        title: 'DE',
        lng: 'de',
        flag: '/assets/icons/de.svg',
    },
    {
        title: 'TR',
        lng: 'tr',
        flag: '/assets/icons/tr.svg',
    },
]

const LanguageSwitcher: React.FC<{ lang: string }> = ({ lang }) => {

    const params = useParams()
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const [selected, setSelected] = useState(items.find(x => x.lng === lang) || items[0])

    useEffect(() => {

        if (selected && (lang !== selected.lng)) {
            const url = pathname.replace(/\/(en|de|tr)/, `/${selected.lng}`);
            const query = searchParams.toString() !== "" ? `?${searchParams.toString()}` : "";
            router.push(`${url}${query}`)
        }

    }, [selected])

    return (
        <Listbox value={selected} onChange={setSelected}>
            {({ open }) => (
                <>
                    <div className="relative mt-">
                        <ListboxButton className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
                            <span className="flex items-center">
                                <img src={selected.flag} alt="" className="h-5 w-5 flex-shrink-0 rounded-full" />
                                <span className="ml-3 block truncate">{selected.title}</span>
                            </span>
                            <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                                <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                            </span>
                        </ListboxButton>

                        <ListboxOptions
                            transition
                            className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
                        >
                            {items.map((lang) => (
                                <ListboxOption
                                    key={lang.lng}
                                    className={({ focus }) =>
                                        clsx(
                                            focus ? 'bg-indigo-600 text-white' : '',
                                            !focus ? 'text-gray-900' : '',
                                            'relative cursor-default select-none py-2 pl-3 pr-9',
                                        )
                                    }
                                    value={lang}
                                >
                                    {({ selected, focus }) => (
                                        <>
                                            <div className="flex items-center">
                                                <img src={lang.flag} alt="" className="h-5 w-5 flex-shrink-0 rounded-full" />
                                                <span className={clsx(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}>
                                                    {lang.title}
                                                </span>
                                            </div>

                                            {selected ? (
                                                <span
                                                    className={clsx(
                                                        focus ? 'text-white' : 'text-indigo-600',
                                                        'absolute inset-y-0 right-0 flex items-center pr-4',
                                                    )}
                                                >
                                                    <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                </span>
                                            ) : null}
                                        </>
                                    )}
                                </ListboxOption>
                            ))}
                        </ListboxOptions>
                    </div>
                </>
            )}
        </Listbox>
    )

}

export default LanguageSwitcher