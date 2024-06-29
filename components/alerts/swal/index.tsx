"use client"
import { Fragment, ForwardRefRenderFunction, forwardRef } from 'react';
import { Dialog, Transition, DialogPanel, DialogTitle, TransitionChild } from '@headlessui/react';
import {
    CheckIcon,
    ExclamationCircleIcon,
    InformationCircleIcon,
    XMarkIcon,
    ExclamationTriangleIcon,
    EllipsisHorizontalIcon,
    CheckCircleIcon
} from '@heroicons/react/24/outline';

import { SwalProps } from '@/interfaces/swal.interfaces';

const Swal: ForwardRefRenderFunction<HTMLDivElement, SwalProps> = (props, ref) => {
    const {
        open = false,
        type = 'info',
        title,
        text,
        onConfirm,
        onClose,
        onCancel,
        closeBtnText,
        cancelBtnText,
        confirmBtnText
    } = props;

    const closeHandle = () => {
        if (onClose) onClose();
    };

    const confirmHandle = () => {
        if (onConfirm) onConfirm();
        closeHandle();
    };

    const cancelHandle = () => {
        if (onCancel) onCancel()
        closeHandle();
    }

    const successContent = () => (
        <>
            <div>
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                    <CheckIcon className="h-6 w-6 text-green-600" aria-hidden="true" />
                </div>
                <div className="mt-3 text-center sm:mt-5">
                    <DialogTitle as="h3" className="text-base font-semibold leading-6 text-gray-900">
                        {title || <CheckCircleIcon className='w-5 h-5 mx-auto' />}
                    </DialogTitle>
                    <div className="mt-2">
                        <p className="text-sm text-gray-500">
                            {text || ""}
                        </p>
                    </div>
                </div>
            </div>
            <div className="mt-5 sm:mt-6">
                <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    onClick={closeHandle}
                >
                    {closeBtnText || "Close"}
                </button>
            </div>
        </>
    );

    const errorContent = () => (
        <>
            <div>
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
                    <XMarkIcon className="h-6 w-6 text-red-600" aria-hidden="true" />
                </div>
                <div className="mt-3 text-center sm:mt-5">
                    <DialogTitle as="h3" className="text-base font-semibold leading-6 text-gray-900">
                        {title || <ExclamationTriangleIcon className='w-5 h-5 mx-auto' />}
                    </DialogTitle>
                    <div className="mt-2">
                        <p className="text-sm text-gray-500">
                            {text || ""}
                        </p>
                    </div>
                </div>
            </div>
            <div className="mt-5 sm:mt-6">
                <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    onClick={closeHandle}
                >
                    {closeBtnText || <XMarkIcon className='w-5 h-5' />}
                </button>
            </div>
        </>
    );

    const infoContent = () => (
        <>
            <div>
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                    <InformationCircleIcon className="h-6 w-6 text-blue-600" aria-hidden="true" />
                </div>
                <div className="mt-3 text-center sm:mt-5">
                    <DialogTitle as="h3" className="text-base font-semibold leading-6 text-gray-900">
                        {title || <EllipsisHorizontalIcon className='w-5 h-5 mx-auto' />}
                    </DialogTitle>
                    <div className="mt-2">
                        <p className="text-sm text-gray-500">
                            {text || ""}
                        </p>
                    </div>
                </div>
            </div>
            <div className="mt-5 sm:mt-6">
                <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    onClick={closeHandle}
                >
                    {closeBtnText || <XMarkIcon className='w-5 h-5' />}
                </button>
            </div>
        </>
    );

    const warningContent = () => (
        <>
            <div>
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-yellow-100">
                    <ExclamationCircleIcon className="h-6 w-6 text-yellow-600" aria-hidden="true" />
                </div>
                <div className="mt-3 text-center sm:mt-5">
                    <DialogTitle as="h3" className="text-base font-semibold leading-6 text-gray-900">
                        {title || <ExclamationTriangleIcon className='w-5 h-5 mx-auto' />}
                    </DialogTitle>
                    <div className="mt-2">
                        <p className="text-sm text-gray-500">
                            {text || ""}
                        </p>
                    </div>
                </div>
            </div>
            <div className="mt-5 sm:mt-6">
                <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    onClick={closeHandle}
                >
                    {closeBtnText || <XMarkIcon className='w-5 h-5' />}
                </button>
            </div>
        </>
    );

    const confirmContent = () => (
        <>
            <div>
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-yellow-100">
                    <ExclamationCircleIcon className="h-6 w-6 text-yellow-600" aria-hidden="true" />
                </div>
                <div className="mt-3 text-center sm:mt-5">
                    <DialogTitle as="h3" className="text-base font-semibold leading-6 text-gray-900">
                        {title || <ExclamationTriangleIcon className='w-5 h-5 mx-auto' />}
                    </DialogTitle>
                    <div className="mt-2">
                        <p className="text-sm text-gray-500">
                            {text || ""}
                        </p>
                    </div>
                </div>
            </div>
            <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    onClick={cancelHandle}
                >
                    {cancelBtnText || <XMarkIcon className='w-5 h-5' />}
                </button>
                <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    onClick={confirmHandle}
                >
                    {confirmBtnText || <CheckIcon className='w-5 h-5' />}
                </button>
            </div>
        </>
    );

    const swalContent = () => {
        switch (type) {
            case 'confirm':
                return confirmContent();
            case 'info':
                return infoContent();
            case 'warning':
                return warningContent();
            case 'success':
                return successContent();
            case 'error':
                return errorContent();
            default:
                return null;
        }
    };

    return (
        <Transition show={open} as={Fragment}>
            <Dialog as="div" className="relative z-50" onClose={closeHandle}>
                <TransitionChild
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </TransitionChild>

                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <TransitionChild
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <DialogPanel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                                {swalContent()}
                            </DialogPanel>
                        </TransitionChild>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
};

Swal.displayName = "Swal";

export default forwardRef(Swal);