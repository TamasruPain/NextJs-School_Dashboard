
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
    { id: 8, title: "Fastival Seven", time: "12:00 PM - 2:00 PM", description: "School have a Fastivel in coming few days name Three", },
    { id: 9, title: "Fastival Seven", time: "12:00 PM - 2:00 PM", description: "School have a Fastivel in coming few days name Three", },
]

export default function ManageAnnoucements() {

    const [searchTerm, setSearchTerm] = useState("")

    const filteredAnnoucement = annoucements.filter(e =>
        e.title.toLowerCase().includes(searchTerm.toLowerCase())
    )


    return (
        <div className="h-screen">
            <div className="p-4">
                <h1 className="text-2xl p-2">
                    <FontAwesomeIcon icon={faBullhorn} /> Management Announcments
                </h1>
                <div className="p-2 ">
                    {/* search bar */}
                    <div className="flex items-center justify-center mt-2 gap-3">
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
                    {/* add button */}
                    <div className="flex items-center justify-between mt-4 ">
                        <h1 className="text-lg">Announcements ( {annoucements.length} )</h1>
                        <a href="#my_modal_8" className="btn btn-soft">
                            <FontAwesomeIcon icon={faSquarePlus} /> Add Announcment
                        </a>
                        <div className="modal" role="dialog" id="my_modal_8">
                            <div className="modal-box">
                                <div className="modal-action mt-1">
                                    <a href="#" className="btn">close</a>
                                </div>
                                <h3 className="text-lg font-bold">Hello!</h3>
                                <div className="">
                                    <fieldset className="fieldset p-4">

                                        <label className="label">Title</label>
                                        <input type="text" className="input w-full" placeholder="My awesome page" />

                                        <label className="label">Slug</label>
                                        <input type="text" className="input w-full" placeholder="my-awesome-page" />

                                        <label className="label">Author</label>
                                        <input type="text" className="input w-full" placeholder="Name" />

                                        <button className="btn btn-neutral mt-10">Submit</button>

                                    </fieldset>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* list of announcement */}
                <div className=" hover:shadow-lg shadow-sky-200">
                    <div className="flex flex-col gap-4 p-4 bg-zinc-700 w-full h-126 overflow-scroll rounded-xl">
                        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 p-2">
                            {filteredAnnoucement.map(e => (
                                <div className="bg-base-100 p-3 card hover:shadow shadow-blue-500" key={e.id}>
                                    <div className="flex items-center justify-between my-1">
                                        <h1>{e.title}</h1>
                                        <span className="text-zinc-300">{e.time}</span>
                                    </div>
                                    <p className="text-zinc-400">{e.description}</p>
                                    <div className="flex items-end justify-end">
                                        <button className="btn btn-soft btn-primary mx-2 my-1">
                                            <FontAwesomeIcon icon={faEye} />
                                        </button>
                                        <button className="btn btn-soft btn-success mx-2 my-1">
                                            <FontAwesomeIcon icon={faPenToSquare} />
                                        </button>
                                        <button className="btn btn-soft btn-warning mx-2 my-1">
                                            <FontAwesomeIcon icon={faTrashCan} />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
} 