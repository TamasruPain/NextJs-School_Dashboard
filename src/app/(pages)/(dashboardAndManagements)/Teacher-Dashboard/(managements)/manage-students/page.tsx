
"use client"
import { faEye, faPenToSquare, faSquarePlus, faTrashCan, faUsers } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react";


const students = [
    { id: 1, name: "Student1", roll_no: 123, class: 10 },
    { id: 2, name: "Student2", roll_no: 20, class: 10 },
    { id: 3, name: "Student3", roll_no: 98, class: 12 },
    { id: 4, name: "Student4", roll_no: 55, class: 12 },
    { id: 5, name: "Student5", roll_no: 65, class: 11 },
    { id: 6, name: "Student6", roll_no: 78, class: 11 },
    { id: 7, name: "Student6", roll_no: 78, class: 11 },
    { id: 8, name: "Student6", roll_no: 78, class: 11 },
];


export default function ManageStudents() {

    const [searchTerm, setSearchTerm] = useState("")

    const filteredStudents = students.filter(e =>
        e.name.toLowerCase().includes(searchTerm.toLowerCase())
    )


    return (
        <div className="h-screen">
            <div className="p-4">
                <h1 className="text-2xl p-2">
                    <FontAwesomeIcon icon={faUsers} /> Students Management
                </h1>
                <div className="p-2">
                    {/* search input */}
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
                    <div className="flex items-center justify-between mt-4">
                        <h1 className="text-lg">Students ( {students.length} )</h1>
                        <a href="#my_modal_8" className="btn btn-soft">
                            <FontAwesomeIcon icon={faSquarePlus} /> Add New Student
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
                {/* students table */}

                <div className="w-full h-124 overflow-scroll rounded-xl hover:shadow-lg shadow-sky-200">
                    <table className="table bg-base-100 w-full">
                        {/* head */}
                        <thead className="sticky top-0 z-10 bg-base-200">
                            <tr>
                                <th></th>
                                <th>No.</th>
                                <th>Name</th>
                                <th>roll_no.</th>
                                <th>Class</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody >
                            {filteredStudents.map(student => (
                                <tr className="hover:bg-[rgba(255,255,255,0.1)]" key={student.id}>
                                    <td></td>
                                    <th>{student.id}</th>
                                    <td>{student.name}</td>
                                    <td>{student.roll_no}</td>
                                    <td>{student.class}</td>
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
        </div >
    )
} 