"use client"

import { faBook, faChalkboard } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"

export default function LessonsCard({ urlData }: { urlData: string }) {

    const lessons = [
        { id: 1, title: "Alpha One", time: "12:00 PM ", description: "School have a Fastivel in coming few days name One", },
        { id: 2, title: "Alpha Two", time: "12:00 PM ", description: "School have a Fastivel in coming few days name Two", },
        { id: 3, title: "Alpha Three", time: "12:00 PM", description: "School have a Fastivel in coming few days name Three", },
        { id: 4, title: "Alpha Four", time: "12:00 PM ", description: "School have a Fastivel in coming few days name Three", },
        { id: 5, title: "Alpha Five", time: "12:00 PM ", description: "School have a Fastivel in coming few days name Three", },
        { id: 6, title: "Alpha Six", time: "12:00 PM ", description: "School have a Fastivel in coming few days name Three", },
        { id: 7, title: "Alpha Seven", time: "12:00 PM ", description: "School have a Fastivel in coming few days name Three", },
    ]


    return (
        <div className="bg-zinc-800 p-2 rounded-md hover:shadow-lg shadow-sky-200 sm:w-[100%] md:w-[100%] lg:w-[100%] xl:w-[190%]">

            <div className="p-2">
                <h1>
                    <FontAwesomeIcon icon={faBook} /> Lessons
                    <Link href={urlData} className="float-end">
                        <span className="float-end underline">All Lessons {">>"}</span>
                    </Link>
                </h1>
            </div>

            <div className="flex flex-col gap-4 p-2">
                {lessons.slice(0, 4).map(lessons => (
                    <div className="bg-base-100 p-3 card hover:shadow shadow-blue-500" key={lessons.id}>
                        <div className="flex items-center justify-between my-1">
                            <h1>{lessons.title}</h1>
                            <span className="text-zinc-300">{lessons.time}</span>
                        </div>
                        <p className="text-zinc-400">{lessons.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}