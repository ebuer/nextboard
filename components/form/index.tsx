"use client";
import React, { useState, useEffect, forwardRef, ForwardRefRenderFunction, useImperativeHandle } from 'react';
import { ExclamationCircleIcon } from '@heroicons/react/20/solid';
import { Input, Textarea } from './components';

interface FormItem {
    name?: string;
    col?: string;
    value?: string;
    isReady?: boolean;
    error?: string[];
    required?: boolean;
    rules?: any[];
    options?: any;
    start?: boolean;
    hint?: string;
    ruleActive?: boolean;
    type?: string;
    label?: string;
    defaultElementClass?: string;
}

interface FormProps {
    items: { [key: string]: FormItem };
    endpoint: string;
    onSuccess?: () => void;
    onItemChange?: (item: any) => void;
    submitMethod?: string;
}

export interface FormHandle {
    resetForm: () => void;
    submitForm: () => void;
}


// defautl classes for input, textarea
const defaultElementClass = "block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"


const Form: ForwardRefRenderFunction<any, FormProps> = (
    { items, endpoint, onSuccess, onItemChange, submitMethod = "object" },
    ref
) => {
    const [mainLoader, setMainLoader] = useState<boolean>(true);
    const [formInputs, setFormInputs] = useState<{ [key: string]: FormItem }>({});
    const [isOnSubmit, setIsOnSubmit] = useState<boolean>(false);



    const initForm = () => {
        const initialFormInputs: { [key: string]: FormItem } = {};

        Object.keys(items).forEach(itemKey => {

            const item = items[itemKey];
            const elementName = item.name ? item.name : itemKey;
            const rules = items[itemKey].rules || []


            const element: FormItem = {
                ...items[itemKey],
                name: elementName,
                col: item.col || "6",
                value: item.value || "",
                isReady: item.isReady || false,
                error: item.error || [],
                required: item.required || false,
                rules: rules,
                options: item.options || {},
                hint: item.hint || "",
                ruleActive: rules.length > 0,
                defaultElementClass: defaultElementClass
            };

            initialFormInputs[itemKey] = element;
        });

        setFormInputs(initialFormInputs);
        setMainLoader(false);
    };

    useImperativeHandle(ref, () => ({
        init: () => {
            console.log("init test");
            initForm()
        }
    }));

    useEffect(() => {
        initForm();
    }, []);

    type col = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12';

    const colSpan: Record<col, string> = {
        "1": "col-span-1",
        "2": "col-span-2",
        "3": "col-span-3",
        "4": "col-span-4",
        "5": "col-span-5",
        "6": "col-span-6",
        "7": "col-span-7",
        "8": "col-span-8",
        "9": "col-span-9",
        "10": "col-span-10",
        "11": "col-span-11",
        "12": "col-span-12",
    };

    const renderColspan = (itemCol?: string) => {
        return colSpan[itemCol as col] || "col-span-12";
    };

    const formSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('submit form', formInputs)
        setIsOnSubmit(true);
        // Implement form submission logic here
        setIsOnSubmit(false);
        if (onSuccess) onSuccess();
    };

    const handleChange = (value: any, formItem: FormItem) => {

        console.log('111', value)
        console.log('222', formItem)

        const { name }: FormItem = formItem


        updateFormItem(name, "value", value)

    }

    const updateFormItem = (itemKey: string, keyPath: string, value: any) => {


        // console.group(itemKey)
        // console.log('s', keyPath)
        // console.log('v', value)
        // console.groupEnd()

        const findItem = formInputs[itemKey]
        if (findItem) {
            findItem[keyPath as keyof FormItem] = value;
        }


        let updatedItems: Record<string, FormItem> = {};

        Object.keys(formInputs).map((itemK: any) => {
            const item = formInputs[itemK]
            if (itemK === itemKey) {
                updatedItems[itemK] = findItem;
            } else {
                updatedItems[itemK] = item;
            }
        });


        // console.log('updatedItems', updatedItems)

        setFormInputs(updatedItems);
        if (onItemChange) onItemChange(updatedItems)
    }
    const formElement = (item: FormItem) => {


        const { type, defaultElementClass, options, name, value, start } = item

        switch (type) {

            case "input":
                return (
                    <Input
                        {...item}
                        onChange={(val: string | number) => handleChange(val, item)}
                    />
                )
                break;
            case "textarea":
                return (
                    <Textarea
                        {...item}
                        onChange={(val: string | number) => handleChange(val, item)}
                    />
                )
                break;
        }

    };

    if (mainLoader) {
        return <div>Loading</div>;
    }

    return (
        <div ref={ref} className="app-form bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">
            <form onSubmit={formSubmit}>
                <div className="px-4 py-6 sm:p-8">
                    <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-12 mx-auto">
                        {Object.keys(formInputs).map((itemKey: any, index: any) => {
                            const item = formInputs[itemKey]
                            return (
                                <div className={`${renderColspan(item.col)} ${item.type === "hidden" ? "!hidden" : ""}`} key={index}>
                                    <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                                        {item.label}
                                    </label>
                                    <div className="relative mt-2 rounded-md shadow-sm">
                                        <div className="app-form-item relative">
                                            {formElement(item)}
                                            <div>{item.value}</div>
                                            {/* {
                                                item.error && item.error.length > 0 &&
                                                <div className={`pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2 ${item.disableHint && "-mt-6"}`}>
                                                    <ExclamationCircleIcon className="h-5 w-5 text-red-500" aria-hidden="true" />
                                                </div>
                                            } */}
                                        </div>
                                        {item.error && item.error.map((msg: string, errIndex: any) => <p className="mt-2 text-sm text-red-600" id="email-error" key={errIndex}>{msg}</p>)}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="flex items-center justify-end gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8">
                    {isOnSubmit && <div className="loader">Submitting...</div>}
                    <button
                        type="submit"
                        disabled={isOnSubmit}
                        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}

Form.displayName = "Form";

export default forwardRef<HTMLDivElement & FormHandle, FormProps>(Form);