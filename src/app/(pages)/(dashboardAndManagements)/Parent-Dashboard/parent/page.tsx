"use client"

import { faBullhorn, faCommentDots, faUserTie } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import EventCalendar from "@/components/calendarCard";
import CountChart from "@/components/studentsChart";

import AnnouncementsCard from "@/components/announcementCard";
import ClassesCard from "@/components/classesCard";
import LessonsCard from "@/components/lessonsCard";
import AssignmentsCard from "@/components/assignmentCard";


export default function ParentDashboardPage() {

    const LocalParentsClassesUrl = "/parent-Dashboard/manage-classes";
    const LocalParentsAnnouncementUrl = "/parent-Dashboard/manage-announcements";
    const LocalParentsLessonsUrl = "/parent-Dashboard/manage-lessons";
    const LocalParentsAssignmentsUrl = "/parent-Dashboard/manage-assignments";
    return (
        <div >
            {/* Box-1: Heading of dashboard */}
            {/* --------------------------------------------------------------------------- */}
            <div className="flex ">
                <div className="sm:w-[60%] md:w-[80%] lg:w-[80%] xl:w-[98%] ">
                    <h1 className="text-2xl p-3 mx-3 my-2 font-bold">
                        <FontAwesomeIcon icon={faUserTie} /> Parent Dashboard
                    </h1>
                </div>
                <div className="flex sm:w-[40%] md:w-[20%] lg:w-[20%] xl:w-[8%] p-4 gap-5 ">
                    <Link href='Parent-Dashboard/manage-announcements' className="indicator btn btn-circle btn-soft float-end hover:shadow-2xl shadow-sky-100">
                        <FontAwesomeIcon icon={faBullhorn} style={{ fontSize: "15px" }} />
                        <span className="indicator-item badge badge-primary">12</span>
                    </Link>
                </div>
            </div>
            {/* ---------------------------------------------------------------------------- */}

            {/* Box-2: userCards, Rightside bar */}
            {/* ---------------------------------------------------------------------------- */}
            <div className="flex">

                {/* user Card */}
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 
                gap-4 p-4
                w-[100%] md:w-[160%] lg:w-[220%] xl:w-[260%]">
                    {/* charts */}
                    <div
                        className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 
                                   gap-10
                                   w-[242%] md:w-[207%] lg:w-[207%] xl:w-[300%]">
                        <CountChart />
                        <LessonsCard urlData={LocalParentsLessonsUrl} />
                        <ClassesCard urlData={LocalParentsClassesUrl} />
                        <AssignmentsCard urlData={LocalParentsAssignmentsUrl} />
                    </div>

                </div>

                {/* calendar, announcement */}
                <div className="flex flex-col w-[135%] md:w-[130%] lg:w-[120%] xl:w-[110%] mt-2">
                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-4 p-2">
                        <div className="hidden md:block">
                            <EventCalendar />
                        </div>
                        <div className="hidden md:block">
                            <AnnouncementsCard urlData={LocalParentsAnnouncementUrl} />
                        </div>
                    </div>
                </div>

            </div>
            {/* ---------------------------------------------------------------------------- */}

        </div>
    )
}
