
"use client"

import { faCalendarCheck } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"

export default function EventsCard() {

    const events = [
        {
            id: 1,
            title: "Fastival One",
            time: "12:00 PM - 2:00 PM",
            description: "School have a Fastivel in coming few days name One",
        },
        {
            id: 2,
            title: "Fastival Two",
            time: "12:00 PM - 2:00 PM",
            description: "School have a Fastivel in coming few days name Two",
        },
        {
            id: 3,
            title: "Fastival Three",
            time: "12:00 PM - 2:00 PM",
            description: "School have a Fastivel in coming few days name Three",
        },
        {
            id: 3,
            title: "Fastival Three",
            time: "12:00 PM - 2:00 PM",
            description: "School have a Fastivel in coming few days name Three",
        },
    ]

    return (


        <div className="bg-zinc-700 p-2 rounded-md hover:shadow-lg shadow-sky-200">

            <div className="p-2">
                <h1>
                    <FontAwesomeIcon icon={faCalendarCheck}/> Events
                    <Link href='/manage-events' className="indicator btn btn-circle btn-soft float-end hover:shadow-2xl shadow-sky-100 block md:hidden">
                        <FontAwesomeIcon className="my-3" icon={faCalendarCheck} style={{ color: "#B197FC", }} />
                        <span className="indicator-item badge badge-primary">12</span>
                    </Link>
                    <Link href="/manage-events">
                        <span className="float-end hidden md:block underline">{">>"}more</span>
                    </Link>
                </h1>
            </div>

            <div className="flex flex-col gap-4 p-2">
                {events.slice(0, 3).map(events => (
                    <div className="bg-base-100 p-3 card hover:shadow shadow-blue-500 hidden md:block" key={events.id}>
                        <div className="flex items-center justify-between my-1">
                            <h1>{events.title}</h1>
                            <span className="text-zinc-300">{events.time}</span>
                        </div>
                        <p className="text-zinc-400">{events.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}