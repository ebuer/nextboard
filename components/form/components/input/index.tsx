"use client";
import React, { useEffect, useState, forwardRef, ForwardRefRenderFunction, ChangeEvent } from "react";

interface InputProps {
    name?: string;
    value?: string | number;
    isChecked?: boolean;
    type?: string;
    onChange?: (e: any) => void;
    defaultElementClass?: string
}

const Input: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ name, value, isChecked, type, onChange, defaultElementClass }, ref) => {


    const [val, setVal] = useState<string | number>(value ? value : "")


    useEffect(() => {
        console.log('value', value)
        if (onChange) onChange(val)
        // onChange
    }, [val])


    useEffect(() => {
        console.log('NAMe', name)
    }, [])


    return (
        <>
            <input
                ref={ref}
                type={type}
                name={name}
                value={val || ""}
                checked={isChecked || false}
                onChange={(e) => setVal(e.target.value)}
                id={name}
                className={`${type !== 'checkbox' ? 'w-full' : 'w-7 h-7'} ${defaultElementClass}`} // replace 'default-class' with your actual default class
            />
        </>
    );
};

export default forwardRef(Input);