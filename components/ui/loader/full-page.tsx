"use client";

import React, { useRef, useEffect } from 'react';
import { useSelector } from "react-redux";
import { getLoading } from "@/store/modules/global/slice";

const UiLoaderFull: React.FC = () => {
    const loading = useSelector(getLoading);
    const elementRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (loading) {
            const newElement = document.createElement('div');
            newElement.innerHTML = `
        <div class="fixed inset-0 z-[999999999] bg-black bg-opacity-10 flex justify-center items-center">
          <div class="animate-pulse">
            <img class="w-20" src="/images/logo/logo.png" alt="Logo" />
          </div>
        </div>
      `;

            document.body.insertBefore(newElement, document.body.firstChild);

            elementRef.current = newElement;
        } else {
            if (elementRef.current) {
                elementRef.current.remove();
                elementRef.current = null;
            }
        }
    }, [loading]);

    return null; // This component doesn't render anything directly
};

export default UiLoaderFull;