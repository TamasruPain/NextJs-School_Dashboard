"use client";
import { faArrowRightFromBracket, faBullhorn, faUserAstronaut } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function ParentDashboardHeader() {

    const user = "Tamasru";
    const userRole = "Parent";
    const userEmail = "tamasrupain@gmail.com"

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const route = useRouter();

    const notify = () => {
        setIsLoggedIn(false);
        route.push("/")
        toast.success("Successfully Logged out 🎉")
    }

    return (
        <div className="flex">
            <div className="sm:w-[60%] md:w-[60%] lg:w-[60%] xl:w-[80%]">
                <h1 className="text-2xl p-3 mx-3 my-2 font-bold">
                    Parent Dashboard
                </h1>
            </div>
            <div className="flex sm:w-[40%] md:w-[40%] lg:w-[20%] xl:w-[20%] p-4">
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5">

                    <Link href={"Parent-Dashboard/view-Announcement"} className="indicator btn btn-circle btn-soft me-10 float-end hover:shadow-2xl shadow-sky-100">
                        <FontAwesomeIcon icon={faBullhorn} style={{ fontSize: "15px" }} />
                        <span className="indicator-item badge badge-primary">12</span>
                    </Link>
                    {/* The button to open modal */}
                    <label htmlFor="my_modal_7" className="btn btn-ghost btn-soft hover:shadow-2xl shadow-sky-500 ">
                        <FontAwesomeIcon icon={faUserAstronaut} style={{ color: "#B197FC", }} />
                        {user ? `${user}` : "Profile"}
                        {""}
                    </label>
                    {/* Put this part before </body> tag */}
                    <input type="checkbox" id="my_modal_7" className="modal-toggle" />
                    <div className="modal" role="dialog">
                        <div className="modal-box flex flex-col gap-5">
                            <Link href={'/parent-Dashboard/parent-profile'}
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
                                <FontAwesomeIcon icon={faArrowRightFromBracket} /> Logout
                            </label>
                        </div>
                        <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
                    </div>
                </div>
            </div>
        </div>
    )
}