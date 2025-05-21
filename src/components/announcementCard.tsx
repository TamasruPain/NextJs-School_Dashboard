
"use client"

import { faBullhorn, faCalendarCheck } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"

export default function AnnouncementsCard({ urlData }: { urlData: string }) {

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
            id: 4,
            title: "Fastival Four",
            time: "12:00 PM - 2:00 PM",
            description: "School have a Fastivel in coming few days name Three",
        },
        {
            id: 5,
            title: "Fastival Five",
            time: "12:00 PM - 2:00 PM",
            description: "School have a Fastivel in coming few days name Three",
        },
        {
            id: 6,
            title: "Fastival Six",
            time: "12:00 PM - 2:00 PM",
            description: "School have a Fastivel in coming few days name Three",
        },
    ]

    return (


        <div className="bg-zinc-700 p-2 rounded-md hover:shadow-lg shadow-sky-200">

            <div className="p-2">
                <h1>
                    <FontAwesomeIcon icon={faBullhorn} /> Announcements
                    <Link href={urlData} className="indicator btn btn-circle btn-soft float-end hover:shadow-2xl shadow-sky-100 block md:hidden">
                        <FontAwesomeIcon className="my-3" icon={faBullhorn} style={{ color: "#B197FC", }} />
                        <span className="indicator-item badge badge-primary mt-5">12</span>
                    </Link>
                    <Link href={urlData}>
                        <span className="float-end hidden md:block underline">{">>"}more</span>
                    </Link>
                </h1>
            </div>

            <div className="flex flex-col gap-6 mt-2 mb-2 p-2">
                {events.slice(0, 6).map(events => (
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