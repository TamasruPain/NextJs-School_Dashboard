"use client"
import toast, { Toaster } from 'react-hot-toast'
import { faPeopleRoof, faSchoolCircleCheck, faUserAstronaut } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [url, setUrl] = useState<string | undefined>(undefined);
    // const [user, setUser] = useState('')

    const user = "Tamasru";
    const role: "admin" | "teacher" | "student" | "parent" | string = "student";

    const notify = () => {
        setIsLoggedIn(false);
        toast.success("Successfully Logged out !!")
    }

    const loginisClicked = () => {
        setIsLoggedIn(true);
        toast.success("Successfully Logged in 🎉")
    }

    useEffect(() => {
        if (user) {
            setIsLoggedIn(true)
        } else {
            setIsLoggedIn(false)
        }
    }, [user]);

    useEffect(() => {
        if (role === "admin") {
            setUrl('/Admin-Dashboard/admin')
        } else if (role === "teacher") {
            setUrl('/Teacher-Dashboard/teacher')
        } else if (role === "student") {
            setUrl('/Student-Dashboard/student')
        } else if (role === "parent") {
            setUrl('Parent-Dashboard/parent')
        } else {
            setUrl('/')
        }
    }, [role])



    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-30 p-2 shadow">
                        <li><Link href="/" className="hover:shadow-2xl shadow-sky-500">Home</Link></li>
                        <li><Link href="/about" className="hover:shadow-2xl shadow-sky-500">adout</Link></li>
                        <li><Link href="/contactus" className="hover:shadow-2xl shadow-sky-500">contact us</Link></li>
                    </ul>
                </div>
                <Link href='/' className="flex justify-center items-center gap-2 text-xl w-auto p-2">
                    <FontAwesomeIcon icon={faPeopleRoof} style={{ color: "#B197FC", }} />
                    <span className="hidden sm:block">Next School</span>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link href="/" className="hover:shadow-2xl shadow-sky-500">Home</Link></li>
                    <li><Link href="/about" className="hover:shadow-2xl shadow-sky-500">adout</Link></li>
                    <li><Link href="/contactus" className="hover:shadow-2xl shadow-sky-500">Contact us</Link></li>
                </ul>
            </div>

            <div className="navbar-end">
                {!isLoggedIn ? (
                    <div className="dropdown dropdown-end hover:shadow-2xl shadow-sky-500 mx-2">
                        <div tabIndex={0} role="button" className="btn btn-ghost">Login / Sign up</div>
                        <ul
                            tabIndex={0}
                            className="menu dropdown-content bg-base-200 rounded-box z-1 mt-4 w-34 p-2 shadow-sm">
                            <li><Link href='/teacher-login'>Teachers</Link></li>
                            <li><Link href='/student-login'>Students</Link></li>
                            <li><Link href='/parent-login'>Parents</Link></li>
                            <li><Link href='/admin-login'>Admin</Link></li>
                        </ul>
                    </div>
                ) : (
                    <>
                        <div className="flex gap-2">
                            <Link href={url || '/'} className="btn btn-ghost hover:shadow-2xl shadow-sky-500 ">
                                <FontAwesomeIcon icon={faUserAstronaut} style={{ color: "#B197FC", }} />
                                <span>{user ? `${user}` : "Profile"}</span>
                            </Link>

                            <label className="btn btn-ghost hover:shadow-2xl shadow-sky-500 ">
                                <Link href="/" onClick={notify}>
                                    Logout
                                </Link>
                            </label>
                        </div>
                    </>
                )}
                <Toaster />
            </div>
        </div>
    )
}