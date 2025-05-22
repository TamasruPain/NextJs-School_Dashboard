
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
    { id: 8, title: "topic_9", subject: "English", teacher: "Mr. teach seven", date: "2023-10-01", time: "10:00 AM", duration: "1 hour", status: "completed" },
    { id: 9, title: "topic_9", subject: "English", teacher: "Mr. teach seven", date: "2023-10-01", time: "10:00 AM", duration: "1 hour", status: "completed" },
]

export default function ManageLessons() {

    const [searchTerm, setSearchTerm] = useState("")

    const filteredLassons = lessons.filter(e =>
        e.subject.toLowerCase().includes(searchTerm.toLowerCase())
    )


    return (
        <div className="h-screen">
            <div className="p-4">
                <h1 className="text-2xl p-2">
                    <FontAwesomeIcon icon={faBook} /> Lessons Management
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
                        <h1 className="text-lg">Lessons ( {lessons.length}  ) </h1>
                        <a href="#my_modal_8" className="btn btn-soft">
                            <FontAwesomeIcon icon={faSquarePlus} /> Add new Lessons
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

                {/* Lessons table */}
                <div className="w-full h-124 overflow-scroll rounded-xl hover:shadow-lg shadow-sky-200">
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