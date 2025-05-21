
"use client"
import { faEye, faFilePen, } from "@fortawesome/free-solid-svg-icons"
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
]

export default function ManageExams() {

    const [searchTerm, setSearchTerm] = useState("")

    const filteredExams = exams.filter(e =>
        e.subject.toLowerCase().includes(searchTerm.toLowerCase())
    )


    return (
        <div className="min-h-screen">
            <div className="p-2 ">
                <div className="p-4">
                    <h1 className="text-2xl">
                        <FontAwesomeIcon icon={faFilePen} /> Exams
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

                {/* students table */}
                <div className=" p-2 w-full ">
                    <div className="overflow-x-auto rounded-xl hover:shadow-lg shadow-sky-200">
                        <table className="table bg-base-100">
                            {/* head */}
                            <thead>
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

        </div >
    )
} 