"use client";
import React, { useEffect, useState, forwardRef, ForwardRefRenderFunction, ChangeEvent } from "react";

interface TextareaProps {
    name?: string;
    value?: string | number;
    type?: string;
    onChange?: (e: any) => void;
    defaultElementClass?: string
    row?: string
}

const Textarea: ForwardRefRenderFunction<HTMLInputElement, TextareaProps> = ({ name, value, row, type, onChange, defaultElementClass }, ref) => {


    const [val, setVal] = useState<string | number>(value ? value : "")

    useEffect(() => {
        if (onChange) onChange(val)
    }, [val])
    
    return (
        <>
            <textarea
                rows={row ? parseInt(row) : 4}
                name={name}
                value={value || ""}
                id={name}
                onChange={(e) => setVal(e.target.value)}
                className={`w-full ${defaultElementClass}`}
            />
        </>
    );
};

export default forwardRef(Textarea);