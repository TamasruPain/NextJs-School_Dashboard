"use client"

import { faCalendarCheck } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"

export default function MessageCard({ urlData }: { urlData: string }) {

    const messages = [
        { id: 1, title: "Alpha One", time: "12:00 PM ", description: "School have a Fastivel in coming few days name One", },
        { id: 2, title: "Alpha Two", time: "12:00 PM ", description: "School have a Fastivel in coming few days name Two", },
        { id: 3, title: "Alpha Three", time: "12:00 PM", description: "School have a Fastivel in coming few days name Three", },
        { id: 4, title: "Alpha Four", time: "12:00 PM ", description: "School have a Fastivel in coming few days name Three", },
        { id: 5, title: "Alpha Five", time: "12:00 PM ", description: "School have a Fastivel in coming few days name Three", },
        { id: 6, title: "Alpha Six", time: "12:00 PM ", description: "School have a Fastivel in coming few days name Three", },
        { id: 7, title: "Alpha Seven", time: "12:00 PM ", description: "School have a Fastivel in coming few days name Three", },
    ]

    return (


        <div className="bg-zinc-800 p-2 rounded-md hover:shadow-lg shadow-sky-200 
                            sm:w-[100%] md:w-[100%] lg:w-[100%] xl:w-[188%]">

            <div className="p-2">
                <h1>
                    <FontAwesomeIcon icon={faCalendarCheck} /> messages
                    <Link href={urlData} className="indicator btn btn-circle btn-soft float-end hover:shadow-2xl shadow-sky-100 block md:hidden">
                        <FontAwesomeIcon className="my-3" icon={faCalendarCheck} style={{ color: "#B197FC", }} />
                        <span className="indicator-item badge badge-primary">12</span>
                    </Link>
                    <Link href={urlData}>
                        <span className="float-end hidden md:block underline">All Messages {">>"}</span>
                    </Link>
                </h1>
            </div>

            <div className="flex flex-col gap-4 p-2">
                {messages.slice(0, 6).map(messages => (
                    <div className="bg-base-100 p-3 card hover:shadow shadow-blue-500 hidden md:block" key={messages.id}>
                        <div className="flex items-center justify-between my-1">
                            <h1>{messages.title}</h1>
                            <span className="text-zinc-300">{messages.time}</span>
                        </div>
                        <p className="text-zinc-400">{messages.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

