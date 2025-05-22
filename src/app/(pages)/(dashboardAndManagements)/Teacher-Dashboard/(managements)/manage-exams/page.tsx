
"use client"
import { faBook, faEye, faFilePen, faPenToSquare, faSquarePlus, faTrashCan } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"



const exams = [
    { id: 1, title: "Geography Exam", subject: "Geography", date: "2023-10-01", time: "10:00 AM", duration: "2 hours", status: "Scheduled" },
    { id: 2, title: "History Exam", subject: "History", date: "2023-10-01", time: "10:00 AM", duration: "2 hours", status: "Scheduled" },
    { id: 3, title: "Maths Exam", subject: "Maths", date: "2023-10-01", time: "10:00 AM", duration: "2 hours", status: "Scheduled" },
    { id: 4, title: "Science Exam", subject: "Science", date: "2023-10-01", time: "10:00 AM", duration: "2 hours", status: "Scheduled" },
    { id: 5, title: "Life Science Exam", subject: "Life Science", date: "2023-10-01", time: "10:00 AM", duration: "2 hours", status: "Scheduled" },
    { id: 6, title: "Bengla Exam", subject: "Bengla", date: "2023-10-01", time: "10:00 AM", duration: "2 hours", status: "Scheduled" },
    { id: 7, title: "English Exam", subject: "English", date: "2023-10-01", time: "10:00 AM", duration: "2 hours", status: "Scheduled" },
    { id: 8, title: "English Exam", subject: "English", date: "2023-10-01", time: "10:00 AM", duration: "2 hours", status: "Scheduled" },
    { id: 9, title: "English Exam", subject: "English", date: "2023-10-01", time: "10:00 AM", duration: "2 hours", status: "Scheduled" },
]

export default function ManageExams() {

    const [searchTerm, setSearchTerm] = useState("")

    const filteredExams = exams.filter(e =>
        e.subject.toLowerCase().includes(searchTerm.toLowerCase())
    )


    return (
        <div className="h-screen">
            <div className="p-4">
                <h1 className="text-2xl p-2">
                    <FontAwesomeIcon icon={faFilePen} /> Exams Management
                </h1>
                <div className="p-2">
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
                        <h1 className="text-lg">Exams ( {exams.length} )</h1>
                        <a href="#my_modal_8" className="btn btn-soft">
                            <FontAwesomeIcon icon={faSquarePlus} /> Add new Exam
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

                {/* students table */}
                <div className="w-full h-124 overflow-scroll rounded-xl hover:shadow-lg shadow-sky-200">
                    <table className="table bg-base-100 w-full">
                        {/* head */}
                        <thead className="sticky top-0 z-10 bg-base-200">
                            <tr>
                                <th></th>
                                <th>NO.</th>
                                <th>Title</th>
                                <th>Subject</th>
                                <th>Date</th>
                                <th>Time</th>
                                <th>Duration</th>
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
                                    <td>{e.date}</td>
                                    <td>{e.time}</td>
                                    <td>{e.duration}</td>
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