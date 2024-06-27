import React from 'react';

const UiSkeletonUserList: React.FC = () => {
    return (
        <ul className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:md:grid-cols-3'>
            {Array.from({ length: 9 }).map((_, index) => (
                <li key={index} className='animate-pulse col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow relative'>
                    <div className="flex flex-1 flex-col p-8">
                        <div className="rounded-full bg-slate-200 mx-auto h-32 w-32"></div>
                        <h3 className="mt-6 text-sm font-medium text-gray-900"></h3>
                        <dl className="mt-1 flex flex-grow flex-col justify-between">
                            <div className="h-2 w-5 mx-auto bg-slate-200 rounded"></div>
                            <dd className="mt-3">
                                <span className="w-16 h-5 inline-flex items-center rounded-full bg-slate-50 px-2 py-1 text-xs font-medium ring-1 ring-inset ring-gray-600/20"></span>
                            </dd>
                        </dl>
                    </div>
                    <div>
                        <div className="-mt-px flex divide-x divide-gray-200">
                            <div className="flex w-0 flex-1">
                                <span
                                    className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                                >

                                </span>
                            </div>
                            <div className="-ml-px flex w-0 flex-1">
                                <span
                                    className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                                >
                                </span>
                            </div>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    );
}

export default UiSkeletonUserList;