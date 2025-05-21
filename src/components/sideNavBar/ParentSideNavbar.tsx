"use client"

import { faBook, faBullhorn, faCalendarCheck, faChalkboard, faCircleUser, faCommentDots, faFilePen, faGear, faHouse, faListCheck, faPeopleLine, faPersonChalkboard, faScroll, faSquareCaretRight, faUserAstronaut, faUserGroup, faUsers } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"

const menuItems = [
    {
        title: "MENU",
        items: [
            {
                icon: <FontAwesomeIcon icon={faCircleUser} style={{ color: "#B197FC", }} />,
                label: "Profile",
                href: "/Parent-Dashboard/parent-profile"
            },
            {
                icon: <FontAwesomeIcon icon={faHouse} style={{ color: "#B197FC", }} />,
                label: "Home",
                href: "/Parent-Dashboard/parent"
            },
            {
                icon: <FontAwesomeIcon icon={faPersonChalkboard} style={{ color: "#B197FC", }} />,
                label: "Teachers",
                href: "/Parent-Dashboard/view-teachers"
            },
            {
                icon: <FontAwesomeIcon icon={faChalkboard} style={{ color: "#B197FC", }} />,
                label: "Classes",
                href: "/Parent-Dashboard/view-classes"
            },
            {
                icon: <FontAwesomeIcon icon={faBook} style={{ color: "#B197FC", }} />,
                label: "Lessons",
                href: "/Parent-Dashboard/view-lessons"
            },
            {
                icon: <FontAwesomeIcon icon={faFilePen} style={{ color: "#B197FC", }} />,
                label: "Exams",
                href: "/Parent-Dashboard/view-exams"
            },
            {
                icon: <FontAwesomeIcon icon={faScroll} style={{ color: "#B197FC", }} />,
                label: "Assignments",
                href: "/Parent-Dashboard/view-assignments"
            },
            {
                icon: <FontAwesomeIcon icon={faBullhorn} style={{ color: "#B197FC", }} />,
                label: "Announcements",
                href: "/Parent-Dashboard/view-announcements"
            },
        ]
    }
]

export default function ParentSideNavbar() {
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