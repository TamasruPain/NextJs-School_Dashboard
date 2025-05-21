
"use client"
import { faCommentDots, faEye, faTrashCan } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"



const messages = [
    { id: 1, title: "Fastival One", time: "12:00 PM ", description: "School have a Fastivel in coming few days name One", },
    { id: 2, title: "Fastival Two", time: "12:00 PM ", description: "School have a Fastivel in coming few days name Two", },
    { id: 3, title: "Fastival Three", time: "12:00 PM", description: "School have a Fastivel in coming few days name Three", },
    { id: 4, title: "Fastival Four", time: "12:00 PM ", description: "School have a Fastivel in coming few days name Three", },
    { id: 5, title: "Fastival Five", time: "12:00 PM ", description: "School have a Fastivel in coming few days name Three", },
    { id: 6, title: "Fastival Six", time: "12:00 PM ", description: "School have a Fastivel in coming few days name Three", },
    { id: 7, title: "Fastival Seven", time: "12:00 PM ", description: "School have a Fastivel in coming few days name Three", },
]

export default function ManageMessages() {

    const [searchTerm, setSearchTerm] = useState("")

    const filteredMassages = messages.filter(e =>
        e.title.toLowerCase().includes(searchTerm.toLowerCase())
    )


    return (
        <div className="min-h-screen">
            <div className="p-2 ">
                <div className="p-4">
                    <h1 className="text-2xl">
                        <FontAwesomeIcon icon={faCommentDots} /> Manage Messages
                    </h1>

                    {/* search bar */}
                    <div className="flex items-center justify-center mt-5 gap-3">
                        <input
                            type="search"
                            className="input bg-zinc-700 text-white placeholder:text-gray-400 hover:shadow-md shadow-sky-400 w-64 p-2 rounded"
                            placeholder="🔍 Search by Name"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <button
                            className="btn btn-soft"
                            onClick={() => setSearchTerm("")}
                        >
                            Clear
                        </button>
                    </div>
                </div>

                {/* Events table */}
                <div className=" p-2 w-full ">
                    <div className="flex flex-col gap-4 p-4">
                        {filteredMassages.map(e => (
                            <div className="bg-base-100 p-3 card hover:shadow shadow-blue-500" key={e.id}>
                                <div className="flex items-center justify-between">
                                    <h1>{e.title}</h1>
                                    <span className="text-zinc-300 mb-3">{e.time}</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <p className="text-zinc-400 mb-3">{e.description}</p>
                                    <div className=" items-end justify-end mt-3">
                                        <button className="btn btn-soft btn-primary mx-1 my-1 ml-5.5">
                                            <FontAwesomeIcon icon={faEye} />
                                        </button>
                                        <button className="btn btn-soft btn-warning mx-1 my-1 ml-6">
                                            <FontAwesomeIcon icon={faTrashCan} />
                                        </button>
                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>

            </div>

        </div >
    )
} 