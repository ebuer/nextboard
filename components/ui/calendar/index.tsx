"use client";
import React, { useState, forwardRef, useImperativeHandle, useRef, useEffect, ForwardRefRenderFunction } from "react";
import DatePicker, { registerLocale, setDefaultLocale, ReactDatePickerProps } from "react-datepicker";
import tr from 'date-fns/locale/tr';
import de from 'date-fns/locale/de';
registerLocale('tr', tr);
registerLocale('de', de);

import "react-datepicker/dist/react-datepicker.css";
import "./index.scss";

interface UiCalendarDefaultProps extends ReactDatePickerProps {
    className?: string;
}

const UiCalendar: ForwardRefRenderFunction<any, UiCalendarDefaultProps> = (props, ref) => {
    const { className, ...dateProps } = props;
    const dateRef = useRef<any>(null);

    useEffect(() => {
        if (ref && typeof ref === 'object' && ref !== null) {
            ref.current = dateRef.current;
        }
    }, [ref]);

    useImperativeHandle(ref, () => ({
        setValue: () => {
            console.log('setValue');
        }
    }));

    const renderDayContents = (day: number, date: Date) => {
        return <time className="mx-auto flex h-7 w-7 items-center justify-center rounded-full">{day}</time>;
    };

    return (
        <div className={`app-calendar-picker ${className}`}>
            <DatePicker
                ref={dateRef}
                locale="en" // TODO dynamic by language
                inline
                renderDayContents={renderDayContents}
                {...dateProps}
            />
        </div>
    );
};

UiCalendar.displayName = "AppCalendarDefault";

export default forwardRef(UiCalendar);