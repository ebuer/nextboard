"use client"
import { useEffect, forwardRef, ForwardRefRenderFunction } from 'react';
import { Transition } from '@headlessui/react';
import { CheckCircleIcon, XMarkIcon, ExclamationTriangleIcon, XCircleIcon, InformationCircleIcon } from '@heroicons/react/20/solid';
import { NotifyProps } from '@/interfaces/notify.interfaces';

const Notify: ForwardRefRenderFunction<HTMLDivElement, NotifyProps> = ({ open, type, text, onClose }, ref) => {
    useEffect(() => {
        if (open) {
            const timer = setTimeout(() => {
                if (onClose) onClose();
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [open, onClose]);

    const variant = {
        info: "blue",
        success: "green",
        error: "red",
        warning: "yellow"
    };

    let notyType = type ? variant[type] : "";

    return (
        <Transition
            show={open}
            enter="transition-opacity duration-75"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
        >
            <div ref={ref} className={`rounded-md bg-${notyType}-50 p-4 fixed top-5 right-5 z-50`}>
                <div className="flex">
                    <div className="flex-shrink-0">
                        {type === "success" && <CheckCircleIcon className="h-5 w-5 text-green-400" aria-hidden="true" />}
                        {type === "error" && <XCircleIcon className="h-5 w-5 text-red-400" aria-hidden="true" />}
                        {type === "warning" && <ExclamationTriangleIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />}
                        {type === "info" && <InformationCircleIcon className="h-5 w-5 text-blue-400" aria-hidden="true" />}
                    </div>
                    <div className="ml-3">
                        <p className={`text-sm font-medium text-${notyType}-800`}>{text}</p>
                    </div>
                    <div className="ml-auto pl-3">
                        <div className="-mx-1.5 -my-1.5">
                            <button
                                onClick={onClose}
                                type="button"
                                className={`inline-flex rounded-md bg-${notyType}-50 p-1.5 text-${notyType}-500 hover:bg-${notyType}-100 focus:outline-none focus:ring-2 focus:ring-${notyType}-600 focus:ring-offset-2 focus:ring-offset-${notyType}-50`}
                            >
                                <span className="sr-only">Dismiss</span>
                                <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Transition>
    );
};

Notify.displayName = "Notify"

export default forwardRef(Notify);