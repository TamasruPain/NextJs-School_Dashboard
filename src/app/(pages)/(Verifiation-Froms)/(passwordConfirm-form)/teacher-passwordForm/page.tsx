
"use client"

import Link from "next/link"
import { useEffect, useState } from "react"


export default function TeacherPasswordForm() {
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [progressOne, setProgressOne] = useState(0)
    const [progressTwo, setProgressTwo] = useState(0)

    useEffect(() => {
        let strength = 0
        if (password.length >= 8) strength += 25
        if (/[a-z]/.test(password)) strength += 25
        if (/[A-Z]/.test(password)) strength += 25
        if (/\d/.test(password)) strength += 25
        setProgressOne(strength)
    }, [password])

    useEffect(() => {
        let strength = 0
        if (confirmPassword.length >= 8) strength += 25
        if (/[a-z]/.test(confirmPassword)) strength += 25
        if (/[A-Z]/.test(confirmPassword)) strength += 25
        if (/\d/.test(confirmPassword)) strength += 25
        setProgressTwo(strength)
    }, [confirmPassword])


    return (
        <div className="flex flex-col items-center justify-center min-h-screen"
            style={{
                backgroundImage: "url('/images/5483827.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >

            <div className="backdrop-blur-xl font-bold text-black rounded-box w-xs hover:shadow-md shadow-sky-400">

                {/* passwordfiled form */}
                <fieldset className="fieldset p-5">
                    <h1 className="text-2xl">Set Password</h1>

                    <label className="label mt-5">Enter Password</label>
                    <input type="password" className="input validator" required placeholder="Password" minLength={8}
                        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                        title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
                        style={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <progress className="progress progress-primary" value={progressOne} max="100"></progress>
                    <p className="validator-hint">
                        Must be more than 8 characters, including
                        <br />At least one number
                        <br />At least one lowercase letter
                        <br />At least one uppercase letter
                    </p>

                    <label className="label">Confirm Password</label>
                    <input type="password" className="input validator" required placeholder="Password" minLength={8}
                        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                        title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
                        style={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }}
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <progress className="progress progress-primary" value={progressTwo} max="100"></progress>
                    <p className="validator-hint">
                        Must be more than 8 characters, including
                        <br />At least one number
                        <br />At least one lowercase letter
                        <br />At least one uppercase letter
                    </p>

                    <Link href={"/teacher-login"} className="btn btn-ghost btn-outline mt-4">Submit</Link>
                </fieldset>
            </div>
        </div>
    )
}