"use client"
import { useState } from "react"
import { useLanguage } from "@/context/language"
import { Card } from "@/components/ui"
import { Container } from "@/components/ui"


const propsList = [
    {
        title: "children",
        desc: "The content to be wrapped inside the container. This is a required prop of type `ReactNode`."
    },
    {
        title: "className",
        desc: "Optional. Additional class names to apply to the container."
    }
];

const ContainerPage: React.FC = () => {

    const { language } = useLanguage()

    return (
        <>

            <Card className="mt-3">
                <div className="sm:flex sm:items-center">
                    <div className="sm:flex-auto">
                        <h1 className="text-base font-semibold leading-6 text-gray-900"><b>Container</b> Component</h1>
                        <p className="mt-2 text-sm text-gray-700">
                            The <code>Container</code> component is a simple container component that centers and provides maximum width constraints for its children.
                            It accepts additional class names for further customization.
                        </p>
                    </div>
                </div>
                <div className="mt-3 flow-root">
                    <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                            <div className="mt-5">
                            </div>
                        </div>
                    </div>
                </div>
            </Card>


            <Card className="mt-3">
                <pre>
                    <code className="language-jsx">
                        {`import React from 'react';
import { Container } from '@/components/ui';

const Example = () => {
    return (
        <Container className="bg-gray-50 p-4">
            <h1 className="text-2xl font-bold">Hello, world!</h1>
            <p className="text-gray-600">This is an example of the UiContainer component in use.</p>
        </Container>
    );
};

export default Example;
`}
                    </code>
                </pre>
            </Card>


            <Card className="mt-3">
                <div className="sm:flex sm:items-center">
                    <div className="sm:flex-auto">
                        <h1 className="text-base font-semibold leading-6 text-gray-900">Props</h1>
                        <p className="mt-2 text-sm text-gray-700">
                            The <b>Swal</b> component accepts the following props:
                        </p>
                    </div>
                </div>
                <div className="mt-8 flow-root">
                    <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                            <table className="min-w-full divide-y divide-gray-300">
                                <thead>
                                    <tr className="divide-x divide-gray-200">
                                        <th scope="col" className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                                            Prop Name
                                        </th>
                                        <th scope="col" className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pr-0">
                                            Description
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 bg-white">
                                    {propsList.map((item, index) => (
                                        <tr key={index} className="divide-x divide-gray-200">
                                            <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">
                                                {item.title}
                                            </td>
                                            <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">{item.desc}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </Card>


        </>
    )
}

export default ContainerPage