
"use client"
import { faBook, faEye, faPenToSquare, faSquarePlus, faTrashCan } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"



const lessons = [
    { id: 1, title: "Topic_1", subject: "Geography", teacher: "Mr.teach one ", date: "2023-10-01", time: "10:00 AM", duration: "1 hour", status: "completed" },
    { id: 2, title: "Topic_2", subject: "History", teacher: "Mr.teach two", date: "2023-10-01", time: "10:00 AM", duration: "1 hour", status: "completed" },
    { id: 3, title: "Topic_4", subject: "Maths", teacher: "Mis. teach three", date: "2023-10-01", time: "10:00 AM", duration: "1 hour", status: "completed" },
    { id: 4, title: "Topic_3", subject: "Science", teacher: "Mis. teach four", date: "2023-10-01", time: "10:00 AM", duration: "1 hour", status: "completed" },
    { id: 5, title: "Topic_5", subject: "Life Science", teacher: "Mis. teach five", date: "2023-10-01", time: "10:00 AM", duration: "1 hour", status: "completed" },
    { id: 6, title: "topic_7", subject: "Bengla", teacher: "Mr.teach six", date: "2023-10-01", time: "10:00 AM", duration: "1 hour", status: "completed" },
    { id: 7, title: "topic_9", subject: "English", teacher: "Mr. teach seven", date: "2023-10-01", time: "10:00 AM", duration: "1 hour", status: "completed" },
]

export default function ManageLessons() {

    const [searchTerm, setSearchTerm] = useState("")

    const filteredLassons = lessons.filter(e =>
        e.subject.toLowerCase().includes(searchTerm.toLowerCase())
    )


    return (
        <div className="min-h-screen">
            <div className="p-2 ">

                <div className="p-4">
                    <h1 className="text-2xl">
                        <FontAwesomeIcon icon={faBook} /> All Lessons
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
                {/* Lessons table */}
                <div className="w-full h-140 overflow-scroll rounded-xl hover:shadow-lg shadow-sky-200">
                    <table className="table bg-base-100 w-full">
                        {/* head */}
                        <thead className="sticky top-0 z-10 bg-base-200">
                            <tr>
                                <th></th>
                                <th>NO.</th>
                                <th>Title</th>
                                <th>Subject</th>
                                <th>Lecturer</th>
                                <th>Date</th>
                                <th>Time</th>
                                <th>Duration</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody >
                            {filteredLassons.map(e => (
                                <tr className="hover:bg-[rgba(255,255,255,0.1)]" key={e.id}>
                                    <td></td>
                                    <td>{e.id}</td>
                                    <td>{e.title}</td>
                                    <td>{e.subject}</td>
                                    <td>{e.teacher}</td>
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
    )
} 