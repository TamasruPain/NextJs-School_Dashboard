"use client"
import { faCircleUser, faPersonChalkboard } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"

const events = [
    {
        id: 1,
        title: "Teach1",
        status: "Avalaible",
        description: "PHD in Math ",
    },
    {
        id: 2,
        title: "Teach2",
        status: "Avalaible",
        description: "PHD in History",
    },
    {
        id: 3,
        title: "Teach3",
        status: "Avalaible",
        description: "Geography",
    },
    {
        id: 4,
        title: "Teach4",
        status: "Avalaible ",
        description: "Life Science",
    },
    {
        id: 5,
        title: "Teach5",
        status: "unavalaible ",
        description: "PHD in Computer Science",
    },
    {
        id: 6,
        title: "Teach6",
        status: "unavalaible ",
        description: "PHD in English",
    },
]


export default function TeachersCard({ urlData }: { urlData: string }) {
    return (
        <div className=" sm:w-full md:w-[186%] lg:w-[250%] xl:w-[300%]">

            <div className="bg-zinc-700 p-2 rounded-md hover:shadow-lg shadow-sky-200">

                <div className="p-2">
                    <h1>
                        <FontAwesomeIcon icon={faPersonChalkboard} /> Teachers
                        <Link href={urlData}>
                            <span className="float-end underline" >{">>"} All Teachers</span>
                        </Link>
                    </h1>

                </div>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5 p-4
                ">
                    {events.slice(0, 6).map(events => (
                        <div className="bg-base-100 card hover:shadow shadow-blue-500" key={events.id}>
                            <div>
                                <span className="text-zinc-300 float-end">{events.status}</span>
                            </div>
                            <div className="flex gap-2 mb-5 ml-4">
                                <div>
                                    <FontAwesomeIcon icon={faCircleUser} fontSize="400%" />
                                </div>
                                <div className="my-1.5">
                                    <label className="card-title">{events.title}</label>
                                    <p className="text-zinc-400">{events.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}

