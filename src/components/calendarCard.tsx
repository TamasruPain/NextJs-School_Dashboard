"use client"
import React, { useState } from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function EventCalendar() {
    const [value, onChange] = useState<Value>(new Date());

    return (
        <div className="">
            <Calendar className="card p-2 bg-base-100 hover:shadow-md shadow-sky-200" onChange={onChange} value={value} />
        </div>
    )
}