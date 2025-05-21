import { faCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function ParentLoginPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen"
            style={{
                backgroundImage: "url('/images/5483844.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="backdrop-blur-xl font-bold text-black rounded-box w-xs hover:shadow-md shadow-sky-400">
                <fieldset className="fieldset p-5">
                    <legend className="fieldset-legend text-2xl">Parents Login</legend>

                    <div className="flex justify-end mb-4">
                        <Link href="/" className="btn btn-ghost">
                            <FontAwesomeIcon icon={faCircleLeft} />Home</Link>
                    </div>

                    <div>
                        <label className="floating-label">
                            <input className="input validator input-md" type="email" required placeholder="mail@site.com"
                                style={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }}
                            />
                            <span style={{ backgroundColor: "rgba(255, 255, 255, 0.0)" }}>Email</span>
                            <div className="validator-hint">Enter valid email address</div>
                        </label>
                        <label className="floating-label">
                            <input type="password" className="input validator input-md" required placeholder="Password" minLength={8}
                                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
                                style={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }}
                            />
                            <span style={{ backgroundColor: "rgba(255, 255, 255, 0.0)" }}>
                                Password
                            </span>
                            <p className="validator-hint">
                                Must be more than 8 characters, including
                                <br />At least one number
                                <br />At least one lowercase letter
                                <br />At least one uppercase letter
                            </p>
                        </label>
                    </div>

                    <Link href={"/parent"} className="btn btn-outline btn-ghost mt-4  hover:shadow-md shadow-green-200">
                        Login
                    </Link>

                    <div className="flex justify-center mt-4">
                        <a href="/forgot-password" className="link">
                            <p>Forgot Password? Click here</p>
                        </a>
                    </div>

                    <div>
                        <div className="flex justify-center mt-4">
                            <Link href="/parent-emailForm" className="link btn btn-link">
                                <p>Not a member? Click here to Register</p>
                            </Link>
                        </div>
                    </div>

                </fieldset>
            </div>
        </div>
    )
}