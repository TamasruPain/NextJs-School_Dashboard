
"use client"
import { faEye, faPenToSquare, faPersonChalkboard, faSquarePlus, faTrashCan } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"

const teachers = [
    { id: 1, title: "Aloo", status: "Avalaible", description: "PHD in Math " },
    { id: 2, title: "Kaloo", status: "Avalaible", description: "PHD in History" },
    { id: 3, title: "Lol", status: "Avalaible", description: "Geography" },
    { id: 4, title: "Bol", status: "Avalaible ", description: "Life Science" },
    { id: 5, title: "Roll", status: "unavalaible ", description: "PHD in Computer Science" },
    { id: 7, title: "Dall", status: "unavalaible ", description: "PHD in English" },
    { id: 8, title: "Dall", status: "unavalaible ", description: "PHD in English" },
    { id: 9, title: "Dall", status: "unavalaible ", description: "PHD in English" },
]



export default function ManageTeachers() {
    const [searchTerm, setSearchTerm] = useState("")

    const filteredteachers = teachers.filter(e =>
        e.title.toLowerCase().includes(searchTerm.toLowerCase())
    )

    return (
        <div className="h-screen">
            <div className="p-4 ">
                <h1 className="text-2xl p-2">
                    <FontAwesomeIcon icon={faPersonChalkboard} /> Teachers Management
                </h1>
                <div className="p-2">
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
                        <h1 className="text-lg">Teachers ( {teachers.length} )</h1>
                        <a href="#my_modal_8" className="btn btn-soft">
                            <FontAwesomeIcon icon={faSquarePlus} /> Add New Teacher
                        </a>
                        {/* Put this part before </body> tag */}
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

                {/* Teacher Table */}
                <div className="w-full h-124 overflow-scroll rounded-xl hover:shadow-lg shadow-sky-200">
                    <table className="table bg-base-100 w-full">
                        {/* head */}
                        <thead className="sticky top-0 z-10 bg-base-200">
                            <tr>
                                <th></th>
                                <th>No.</th>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredteachers.map(teachers => (
                                <tr className="hover:bg-[rgba(255,255,255,0.1)]" key={teachers.id}>
                                    <td></td>
                                    <th>{teachers.id}</th>
                                    <td>{teachers.title}</td>
                                    <td>{teachers.description}</td>
                                    <td>{teachers.status}</td>
                                    <td>
                                        <button className="btn btn-soft btn-primary mx-2 my-1">
                                            <FontAwesomeIcon icon={faEye} /> View
                                        </button>
                                        <button className="btn btn-soft btn-success mx-2 my-1">
                                            <FontAwesomeIcon icon={faPenToSquare} /> Edit
                                        </button>
                                        <button className="btn btn-soft btn-warning mx-2 my-1">
                                            <FontAwesomeIcon icon={faTrashCan} /> Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}



