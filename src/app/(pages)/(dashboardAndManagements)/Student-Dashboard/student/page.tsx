"use client"

import EventCalendar from "@/components/calendarCard";

import AnnouncementsCard from "@/components/announcementCard";
import ClassesCard from "@/components/classesCard";
import LessonsCard from "@/components/lessonsCard";
import AssignmentsCard from "@/components/assignmentCard";
import StudentHeader from "@/components/dashboardHeader/StudentHeader";


export default function StudnetDashboardPage() {

    const LocalStudentsClassesUrl = "/Student-Dashboard/view-classes";
    const LocalStudentsAnnouncementUrl = "/Student-Dashboard/view-announcements";
    const LocalStudentsLessonsUrl = "/Student-Dashboard/view-lessons";
    const LocalStudentsAssignmentsUrl = "/Student-Dashboard/view-assignments";


    return (
        <div className="h-screen">
            {/* Heading of dashboard */}
            <StudentHeader/>
            {/* userCards, Rightside bar */}
            {/* ---------------------------------------------------------------------------- */}
            <div className="h-153 overflow-scroll backdrop-blur-sm bg-black/10 rounded-2xl shadow-lg p-2 mt-2">
                <div className="flex rounded-2xl">
                    {/* user Card */}
                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 
                gap-4 p-4
                w-[100%] md:w-[160%] lg:w-[220%] xl:w-[260%]">
                        {/* charts */}
                        <div
                            className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 
                                   gap-10
                                   w-[242%] md:w-[207%] lg:w-[207%] xl:w-[300%]">
                            <ClassesCard urlData={LocalStudentsClassesUrl} />
                            <AssignmentsCard urlData={LocalStudentsAssignmentsUrl} />
                            <LessonsCard urlData={LocalStudentsLessonsUrl} />
                        </div>

                    </div>

                    {/* calendar, announcement */}
                    <div className="flex flex-col w-[135%] md:w-[130%] lg:w-[120%] xl:w-[110%] mt-2">
                        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-4 p-2">
                            <div className="hidden md:block">
                                <EventCalendar />
                            </div>
                            <div className="hidden md:block">
                                <AnnouncementsCard urlData={LocalStudentsAnnouncementUrl} />
                            </div>
                        </div>
                    </div>

                </div>
                {/* ---------------------------------------------------------------------------- */}
            </div>
        </div>
    )
}
