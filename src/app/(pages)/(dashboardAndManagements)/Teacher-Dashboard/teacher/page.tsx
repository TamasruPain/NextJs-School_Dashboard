"use client"

import { faBullhorn, faCommentDots, faUserAstronaut } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import EventCalendar from "@/components/calendarCard";
import CountChart from "@/components/studentsChart";
import AttandanceChart from "@/components/attendanceChart";

import AnnouncementsCard from "@/components/announcementCard";
import MessageCard from "@/components/messageCard";
import ClassesCard from "@/components/classesCard";

import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";


export default function TeacherDashboardPage() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const route = useRouter();

    const LocalTeachersMessageUrl = "/Teacher-Dashboard/manage-messages";
    const LocalTeachersClassesUrl = "/Teacher-Dashboard/manage-classes";
    // const LocalTeachersAttendanceUrl="/Teacher-Dashboard/manage-attendance";
    const LocalTeachersAnnouncementUrl = "/Teacher-Dashboard/manage-announcements";

    const user = "Tamasru";
    const userRole = "Teacher";
    const userEmail = "tamasrupain@gmail.com"

    const notify = () => {
        setIsLoggedIn(false);
        route.push("/")
        toast.success("Successfully Logged out 🎉")
    }

    return (
        <div >
            {/* Box-1: Heading of dashboard */}
            {/* --------------------------------------------------------------------------- */}
            <div className="flex">
                <div className="sm:w-[60%] md:w-[60%] lg:w-[60%] xl:w-[80%]">
                    <h1 className="text-2xl p-3 mx-3 my-2 font-bold hidden md:block lg:block xl:block">
                        Teacher Dashboard
                    </h1>
                </div>
                <div className="flex sm:w-[40%] md:w-[20%] lg:w-[20%] xl:w-[20%] p-4">
                    <div className="flex gap-5">

                        {/* The button to open modal */}
                        <div>
                            <label htmlFor="my_modal_7" className="btn btn-ghost btn-soft hover:shadow-2xl shadow-sky-500 ">
                                <FontAwesomeIcon icon={faUserAstronaut} style={{ color: "#B197FC", }} />
                                {user ? `${user}` : "Profile"}
                                {""}
                            </label>
                            {/* Put this part before </body> tag */}
                            <input type="checkbox" id="my_modal_7" className="modal-toggle" />
                            <div className="modal" role="dialog">
                                <div className="modal-box flex flex-col gap-5">
                                    <Link href={'/Teacher-Dashboard/teacher-profile'}
                                        className="btn btn-ghost btn-soft 
                                    h-40 flex items-start justify-start p-5 gap-5          
                                    hover:shadow-2xl shadow-sky-500 "
                                    >
                                        <div className="text-5xl ml-10 mt-8">
                                            <FontAwesomeIcon icon={faUserAstronaut} style={{ color: "#B197FC", }} />
                                        </div>
                                        <div className="flex flex-col items-start justify-items-start ml-10 mt-5 gap-4">
                                            <span>{user ? `${user}` : "Profile"}</span>
                                            <span>{userEmail ? `${userEmail}` : "No Email found"}</span>
                                            <span>{userRole ? `${userRole}` : "No Role found"}</span>
                                        </div>
                                    </Link>
                                    <label className="btn btn-ghost btn-outline hover:shadow-2xl shadow-sky-500 "
                                        onClick={notify}
                                    >
                                        Logout
                                    </label>
                                </div>
                                <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
                            </div>
                        </div>

                        <div className="flex gap-5">
                            <Link href={"Teacher-Dashboard/manage-messages"} className="indicator btn btn-circle btn-soft float-end hover:shadow-2xl shadow-sky-100">
                                <FontAwesomeIcon icon={faCommentDots} style={{ fontSize: "15px" }} />
                                <span className="indicator-item badge badge-primary">12</span>
                            </Link>

                            <Link href={"Teacher-Dashboard/manage-Announcement"} className="indicator btn btn-circle btn-soft float-end hover:shadow-2xl shadow-sky-100">
                                <FontAwesomeIcon icon={faBullhorn} style={{ fontSize: "15px" }} />
                                <span className="indicator-item badge badge-primary">12</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* ---------------------------------------------------------------------------- */}

            {/* Box-2: userCards, Rightside bar */}
            {/* ---------------------------------------------------------------------------- */}
            <div className="p-2">
                <div className="flex backdrop-blur-sm rounded-2xl">
                    {/* user Card */}
                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 
                gap-4 p-4
                w-[100%] md:w-[160%] lg:w-[220%] xl:w-[260%]">
                        {/* charts */}
                        <div
                            className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 
                                   gap-10
                                   w-[242%] md:w-[207%] lg:w-[207%] xl:w-[300%]">
                            <ClassesCard urlData={LocalTeachersClassesUrl} />
                            <MessageCard urlData={LocalTeachersMessageUrl} />
                            <CountChart />
                            <AttandanceChart />

                        </div>

                    </div>

                    {/* announcement, Event  */}
                    <div className="flex flex-col w-[135%] md:w-[130%] lg:w-[120%] xl:w-[110%] mt-2">
                        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-4 p-2">
                            <div className="hidden md:block">
                                <EventCalendar />
                            </div>
                            <div className="hidden md:block">
                                <AnnouncementsCard urlData={LocalTeachersAnnouncementUrl} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* ---------------------------------------------------------------------------- */}

        </div>
    )
}
