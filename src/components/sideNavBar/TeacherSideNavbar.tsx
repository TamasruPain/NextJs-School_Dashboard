"use client"

import { faBook, faBullhorn, faCalendarCheck, faChalkboard, faCircleUser, faCommentDots, faFilePen, faGear, faHouse, faListCheck, faScroll, faUsers } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"


const menuItems = [
    {
        title: "MENU",
        items: [
            {
                icon: <FontAwesomeIcon icon={faCircleUser} style={{ color: "#B197FC", }} />,
                label: "Profile",
                href: "/Teacher-Dashboard/teacher-profile"
            },
            {
                icon: <FontAwesomeIcon icon={faHouse} style={{ color: "#B197FC", }} />,
                label: "Home",
                href: "/Teacher-Dashboard/teacher"
            },
            {
                icon: <FontAwesomeIcon icon={faUsers} style={{ color: "#B197FC", }} />,
                label: "Studnets",
                href: "/Teacher-Dashboard/manage-students"
            },
            {
                icon: <FontAwesomeIcon icon={faChalkboard} style={{ color: "#B197FC", }} />,
                label: "Classes",
                href: "/Teacher-Dashboard/manage-classes"
            },
            {
                icon: <FontAwesomeIcon icon={faBook} style={{ color: "#B197FC", }} />,
                label: "Lessons",
                href: "/Teacher-Dashboard/manage-lessons"
            },
            {
                icon: <FontAwesomeIcon icon={faFilePen} style={{ color: "#B197FC", }} />,
                label: "Exams",
                href: "/Teacher-Dashboard/manage-exams"
            },
            {
                icon: <FontAwesomeIcon icon={faScroll} style={{ color: "#B197FC", }} />,
                label: "Assignments",
                href: "/Teacher-Dashboard/manage-assignments"
            },
            {
                icon: <FontAwesomeIcon icon={faListCheck} style={{ color: "#B197FC", }} />,
                label: "Attendance",
                href: "/Teacher-Dashboard/manage-attendance"
            },
            {
                icon: <FontAwesomeIcon icon={faCommentDots} style={{ color: "#B197FC", }} />,
                label: "Messages",
                href: "/Teacher-Dashboard/manage-messages"
            },
            {
                icon: <FontAwesomeIcon icon={faBullhorn} style={{ color: "#B197FC", }} />,
                label: "Announcements",
                href: "/Teacher-Dashboard/manage-announcements"
            },
        ]
    }
]

export default function TeacherSideNavbar() {
    return (
        <div className="text-sm">
            {menuItems.map((i) => (
                <div className="flex flex-col gap-1" key={i.title}>
                    <span className="hidden lg:block my-1">{i.title}</span>
                    {i.items.map((item) => (
                        <Link href={item.href} key={item.label}
                            className="flex items-center justify-center lg:justify-start gap-2 py-2 
                        hover:shadow-2xl shadow-sky-500
                        btn btn-ghost
                        ">
                            <div>{item.icon}</div>
                            <span className="hidden lg:block">{item.label}</span>
                        </Link>
                    ))}
                </div>

            ))}
        </div>

    )
}