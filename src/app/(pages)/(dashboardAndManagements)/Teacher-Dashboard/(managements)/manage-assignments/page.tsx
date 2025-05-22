
"use client"
import { faEye, faPenToSquare, faScroll, faSquarePlus, faTrashCan } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"


const assignments = [
    { id: 1, title: "Assignment 1", subject: "Math", postedDate: "2025-10-01", submitionDate: "01-10-2025", status: "Pending" },
    { id: 2, title: "Assignment 2", subject: "Science", postedDate: "2025-10-02", submitionDate: "01-10-2025", status: "Completed" },
    { id: 3, title: "Assignment 3", subject: "History", postedDate: "2025-10-03", submitionDate: "01-10-2025", status: "Pending" },
    { id: 4, title: "Assignment 4", subject: "Geography", postedDate: "2025-10-04", submitionDate: "01-10-2025", status: "Completed" },
    { id: 5, title: "Assignment 5", subject: "English", postedDate: "2025-10-05", submitionDate: "01-10-2025", status: "Pending" },
    { id: 6, title: "Assignment 6", subject: "Physics", postedDate: "2025-10-06", submitionDate: "01-10-2025", status: "Completed" },
    { id: 7, title: "Assignment 7", subject: "Chemistry", postedDate: "2025-10-07", submitionDate: "01-10-2025", status: "Pending" },
    { id: 8, title: "Assignment 8", subject: "Biology", postedDate: "2025-10-08", submitionDate: "01-10-2025", status: "Completed" },
    { id: 9, title: "Assignment 9", subject: "Computer Science", postedDate: "2025-10-09", submitionDate: "01-10-2025", status: "Pending" },
    { id: 10, title: "Assignment 10", subject: "Art", postedDate: "2025-10-10", submitionDate: "01-10-2025", status: "Completed" },
]

export default function ManageAssignments() {

    const [searchTerm, setSearchTerm] = useState("")

    const filteredExams = assignments.filter(e =>
        e.subject.toLowerCase().includes(searchTerm.toLowerCase())
    )


    return (
        <div className="h-screen">
            <div className="p-4">
                <h1 className="text-2xl p-2">
                    <FontAwesomeIcon icon={faScroll} /> Assignments Management
                </h1>
                <div className="p-2 ">
                    {/* search bar */}
                    <div className="flex items-center justify-center mt-2 gap-3">
                        <input
                            type="search"
                            className="input bg-zinc-700 text-white placeholder:text-gray-400 hover:shadow-md shadow-sky-400 w-64 p-2 rounded"
                            placeholder="🔍 Search by Subject"
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
                        <h1 className="text-lg">Assignments ( {assignments.length} )</h1>
                        <a href="#my_modal_8" className="btn btn-soft">
                            <FontAwesomeIcon icon={faSquarePlus} /> Add new Assignment
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

                {/*Asignment table */}
                <div className="w-full h-124 overflow-scroll rounded-xl hover:shadow-lg shadow-sky-200">
                    <table className="table bg-base-100 w-full">
                        {/* head */}
                        <thead className="sticky top-0 z-10 bg-base-200">
                            <tr>
                                <th></th>
                                <th>NO.</th>
                                <th>Title</th>
                                <th>Subject</th>
                                <th>Posted Date</th>
                                <th>Submition Date</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody >
                            {filteredExams.map(e => (
                                <tr className="hover:bg-[rgba(255,255,255,0.1)]" key={e.id}>
                                    <td></td>
                                    <td>{e.id}</td>
                                    <td>{e.title}</td>
                                    <td>{e.subject}</td>
                                    <td>{e.postedDate}</td>
                                    <td>{e.submitionDate}</td>
                                    <td>{e.status}</td>
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