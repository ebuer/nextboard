"use client"
import React from 'react';
import { clsx } from "clsx"

interface HeaderItem {
    label: string;
    value: string | ((item: any) => React.ReactNode);
    type?: string;
    template?: (item: any) => React.ReactNode;
}

interface NDTableSimpleProps {
    headers?: HeaderItem[];
    items?: any[];
    onClickRow?: (item: any) => void;
}

const NDTableSimple: React.FC<NDTableSimpleProps> = ({ headers, items, onClickRow }) => {

    const setRow = (item: any) => {
        return (
            <>
                {headers && headers.map(({ label, value, type, template }, index) => (
                    <td key={index} className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {type && type === "custom" && template ? template(item)
                            :
                            typeof value === "function" ?
                                value(item)
                                :
                                item[value]}
                    </td>
                ))}
            </>
        );
    };

    return (
        <div className="app-table-default">
            <table className="min-w-full divide-y divide-gray-300">
                <thead>
                    <tr>
                        {headers && headers.map(({ label }, index) => (
                            <th
                                scope="col"
                                className={`px-3 py-3.5 text-left text-sm font-semibold text-gray-900 
                                        ${index === 0 ? 'sm:pl-3' : ''}
                                        ${index === headers.length - 1 ? 'sm:pr-3' : ''}
                                        `}
                                key={index}
                            >
                                {label}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="bg-white">
                    {items && items.map((item, index) => (
                        <tr
                            key={index}
                            onClick={() => onClickRow && onClickRow(item)}
                            className={clsx(
                                onClickRow && "cursor-pointer",
                                "even:bg-gray-50 hover:bg-gray-100"
                            )}
                        >
                            {setRow(item)}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div >
    );
};

export default NDTableSimple;