"use client"
import { useState } from "react"
import { Notify } from "@/components/alerts"
import { NotifyTypes } from "@/interfaces/notify.interfaces"
import { useLanguage } from "@/context/language"
import { Card } from "@/components/ui"


const propsList = [
    {
        title: "open",
        desc: "Boolean value to control the visibility of the notification. Default is `false`."
    },
    {
        title: "type",
        desc: "Specifies the type of notification. Possible values are `info`, `success`, `error`, and `warning`. Default is `info`."
    },
    {
        title: "text",
        desc: "Text message to display in the notification."
    },
    {
        title: "onClose",
        desc: "Callback function to handle the notification close event."
    }
];

const NotifyPage: React.FC = () => {

    const { language } = useLanguage()
    const [open, setOpen] = useState<boolean>(false)
    const [type, setType] = useState<NotifyTypes>("info")

    const handleClick = (typeStr: NotifyTypes) => {
        if (typeStr) {
            setType(typeStr)
            setTimeout(() => {
                setOpen(true)
            }, 200)
        }
    }

    return (
        <>

            <Card className="mt-3">
                <div className="sm:flex sm:items-center">
                    <div className="sm:flex-auto">
                        <h1 className="text-base font-semibold leading-6 text-gray-900"><b>Notify</b> Component</h1>
                        <p className="mt-2 text-sm text-gray-700">
                            The <code>Notify</code> component is used to display notifications in your application.
                            It supports different types of notifications such as info, success,
                        </p>
                    </div>
                </div>
                <div className="mt-3 flow-root">
                    <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                            <div className="mt-5">
                                <span className="isolate inline-flex rounded-md shadow-sm">
                                    <button
                                        type="button"
                                        onClick={() => handleClick("info")}
                                        className="relative inline-flex items-center rounded-l-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
                                    >
                                        Info {language}
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => handleClick("success")}
                                        className="relative -ml-px inline-flex items-center bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
                                    >
                                        Success
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => handleClick("warning")}
                                        className="relative -ml-px inline-flex items-center bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
                                    >
                                        Warning
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => handleClick("error")}
                                        className="relative -ml-px inline-flex items-center rounded-r-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
                                    >
                                        Error
                                    </button>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </Card>


            <Card className="mt-3">
                <pre>
                    <code className="language-jsx">
                        {`
import { Notify } from "@/components/alerts"

const Example = ({ prop }) => {

    const [open, setOpen] = useState<boolean>(false)

    return (
        <Notify
        open={open}
        type={type}
        onClose={() => setOpen(false)}
        text="Le Lorem Ipsum est le faux texte standard"
    />
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
                            The <b>Notify</b> component accepts the following props:
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





            <Notify
                open={open}
                type={type}
                onClose={() => setOpen(false)}
                text="Le Lorem Ipsum est le faux texte standard"
            />
        </>
    )
}

export default NotifyPage