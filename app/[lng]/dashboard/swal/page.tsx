"use client"
import { useState } from "react"
import Swal from "@/components/alerts/swal"
import { SwalTypes } from "@/interfaces/swal.interfaces"
import { useLanguage } from "@/context/language"
import { Card } from "@/components/ui"


const propsList = [
    {
        title: "open",
        desc: "Controls the visibility of the Swal modal. Expected type: boolean."
    },
    {
        title: "type",
        desc: "Specifies the type of Swal (success, error, info, warning, confirm). Expected type: string."
    },
    {
        title: "title",
        desc: "Title of the Swal modal. Expected type: string."
    },
    {
        title: "text",
        desc: "Text content of the Swal modal. Expected type: string."
    },
    {
        title: "onClose",
        desc: "Callback function triggered when the Swal modal is closed. Expected type: function."
    },
    {
        title: "onCancel",
        desc: "Callback function triggered when the cancel button is clicked (only for confirm type). Expected type: function."
    },
    {
        title: "onConfirm",
        desc: "Callback function triggered when the confirm button is clicked (only for confirm type). Expected type: function."
    }
];

const SwalPage: React.FC = () => {

    const { language } = useLanguage()
    const [open, setOpen] = useState<boolean>(false)
    const [type, setType] = useState<SwalTypes>("info")

    const handleClick = (typeStr: SwalTypes) => {
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
                        <h1 className="text-base font-semibold leading-6 text-gray-900"><b>Swal</b> Component</h1>
                        <p className="mt-2 text-sm text-gray-700">
                            The <b>Swal</b> component provides customizable alert modals for displaying success, error, info, warning messages, and confirmation dialogs. It is designed to be simple to integrate and highly customizable using props.
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
                                        className="relative -ml-px inline-flex items-center bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
                                    >
                                        Error
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => handleClick("confirm")}
                                        className="relative -ml-px inline-flex items-center rounded-r-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
                                    >
                                        Confirm
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
const Example = ({ prop }) => {

    const [open, setOpen] = useState<boolean>(false)

    return (
        <Swal
        open={open}
        type={"success' | 'error' | 'warning' | 'info' | 'confirm"}
        onClose={() => setOpen(false)}
        onCancel={() => alert('Cancel')}
        onConfirm={() => alert('Confirm')}
        title="Lorem Ipsum"
        text="Le Lorem Ipsum est le faux texte standard"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        closeBtnText="Close"
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
                            The `Swal` component accepts the following props:
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





            <Swal
                open={open}
                type={type}
                onClose={() => setOpen(false)}
                onCancel={() => alert('Cancel')}
                onConfirm={() => alert('Confirm')}
                title="Lorem Ipsum"
                text="Le Lorem Ipsum est le faux texte standard"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                closeBtnText="Close"
            />
        </>
    )
}

export default SwalPage