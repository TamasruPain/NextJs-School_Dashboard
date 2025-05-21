"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function TeacherEmailForm() {

    const [progress, setProgress] = useState(0);
    const [email, setEmail] = useState("")

    useEffect(() => {
        if (email.length === 0) {
            setProgress(0);
        } else if (email.length < 2) {
            setProgress(10)
        } else if (email.includes("@") && !email.includes(".com")) {
            setProgress(20);
        } else if (email.includes("@") && email.includes(".com")) {
            setProgress(30);
        }
    }, [email]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen"
            style={{
                backgroundImage: "url('/images/5483827.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/* Progress bar */}

            <div className="backdrop-blur-xl font-bold text-black rounded-box w-xs hover:shadow-md shadow-sky-400">

                {/* Email form  */}
                <fieldset className="fieldset p-6">
                    <h1 className=" text-2xl">Verify Your Email</h1>
                    <label className="label  mt-10">Email</label>
                    <input className="input validator" type="email" required placeholder="mail@site.com"
                        style={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <progress className="progress progress-primary" value={progress} max="100"></progress>
                    <div className="validator-hint">Enter valid email address</div>
                    <Link href={"/teacher-OTPForm"} className="btn btn-outline btn-ghost mt-5" type="submit">Submit</Link>
                    <div className="flex items-center justify-center mt-5">
                        <p>Already have an account?{" "}
                            <Link href={"/teacher-login"} className="btn-link">
                                Login
                            </Link>
                        </p>
                    </div>
                </fieldset>
            </div>
        </div>
    )
}