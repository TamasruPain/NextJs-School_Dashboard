
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
        <div className="min-h-screen">
            <div className="p-2 ">

                <div className="p-4">
                    <h1 className="text-2xl">
                        <FontAwesomeIcon icon={faScroll} /> All Assignments
                    </h1>

                    {/* search bar */}
                    <div className="flex items-center justify-center mt-5 gap-3">
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
                </div>

                {/* assignment table */}
                <div className="w-full h-140 overflow-scroll rounded-xl hover:shadow-lg shadow-sky-200">
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