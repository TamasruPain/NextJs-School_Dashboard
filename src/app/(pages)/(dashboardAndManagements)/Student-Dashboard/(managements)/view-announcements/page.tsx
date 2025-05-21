
"use client"
import { faBullhorn, faEye, faPenToSquare, faSquarePlus, faTrashCan } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"



const annoucements = [
    { id: 1, title: "Fastival One", time: "12:00 PM - 2:00 PM", description: "School have a Fastivel in coming few days name One", },
    { id: 2, title: "Fastival Two", time: "12:00 PM - 2:00 PM", description: "School have a Fastivel in coming few days name Two", },
    { id: 3, title: "Fastival Three", time: "12:00 PM - 2:00 PM", description: "School have a Fastivel in coming few days name Three", },
    { id: 4, title: "Fastival Four", time: "12:00 PM - 2:00 PM", description: "School have a Fastivel in coming few days name Three", },
    { id: 5, title: "Fastival Five", time: "12:00 PM - 2:00 PM", description: "School have a Fastivel in coming few days name Three", },
    { id: 6, title: "Fastival Six", time: "12:00 PM - 2:00 PM", description: "School have a Fastivel in coming few days name Three", },
    { id: 7, title: "Fastival Seven", time: "12:00 PM - 2:00 PM", description: "School have a Fastivel in coming few days name Three", },
]

export default function ViewAnnoucements() {

    const [searchTerm, setSearchTerm] = useState("")

    const filteredAnnoucement = annoucements.filter(e =>
        e.title.toLowerCase().includes(searchTerm.toLowerCase())
    )


    return (
        <div className="min-h-screen">
            <div className="p-2 ">
                <div className="p-4">
                    <h1 className="text-2xl">
                        <FontAwesomeIcon icon={faBullhorn} /> Announcment Management
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
                    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 p-2">
                        {filteredAnnoucement.map(e => (
                            <div className="bg-base-100 p-3 card hover:shadow shadow-blue-500" key={e.id}>
                                <div className="flex items-center justify-between my-1">
                                    <h1>{e.title}</h1>
                                    <span className="text-zinc-300">{e.time}</span>
                                </div>
                                <p className="text-zinc-400">{e.description}</p>
                                <div className="flex items-end justify-end">
                                    <a href="#my_modal_8" className="btn btn-soft btn-primary mx-2 my-1">
                                        <FontAwesomeIcon icon={faEye} /> View
                                    </a>
                                    <div className="modal" role="dialog" id="my_modal_8">
                                        <div className="modal-box">
                                            <h3 className="font-bold text-lg">Hello!</h3>
                                            <p className="py-4">Press ESC key or click the button below to close</p>
                                            <div className="modal-action">
                                                <a href="#" className="btn">Close!</a>
                                            </div>
                                        </div>
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