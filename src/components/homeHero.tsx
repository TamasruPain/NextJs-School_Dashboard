import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faHandsHoldingChild, faPersonChalkboard } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';


export default function HomeHero() {
    return (
        <div>
            <div
                className="hero min-h-screen"
                style={{
                    backgroundImage: "url('/images/251739.jpg')"
                }}>
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <div>
                        <div className="text-neutral-content text-center p-6">
                            <h1 className="mb-5 text-5xl font-bold"> Hello there!</h1>
                            <h1 className="mb-5 text-3xl font-bold">Welcome to My School Zone</h1>
                            <p className="mb-5">
                                Here you can find all the information you need about our school, including news, events, and resources for students and parents. Whether you're a student, parent, or teacher, we hope you find our dashboard helpful and informative. Thank you for visiting!
                            </p>
                        </div>
                        <div className="grid row-auto gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-4">
                          
                            <div className="card h-60 w-full bg-base-100 card-lg shadow-sm ">
                                <div className="card-body hover:shadow-lg shadow-sky-100">
                                    <h2 className="card-title"><FontAwesomeIcon icon={faPersonChalkboard} size="2xl" style={{ color: "#B197FC", }} className='p-3' />
                                        Teachers Portal</h2>
                                    <p>Login to your teachers Protal or register yourself to get access</p>
                                    <div className="card-actions justify-end">
                                        <Link href="/teacher-emailForm" className="btn btn-outline">Get Registered</Link>
                                        <label className="my-2" >or</label>
                                        <Link href='/teacher-login' className="btn btn-outline w-20">Login</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="card h-60 w-full bg-base-100 card-lg shadow-sm">
                                <div className="card-body hover:shadow-lg shadow-sky-100">
                                    <h2 className="card-title"><FontAwesomeIcon icon={faGraduationCap} size="2xl" style={{ color: "#B197FC", }} className='p-3' />
                                        Students Portal</h2>
                                    <p>Login to your student Protal or register yourself to get access</p>
                                    <div className="card-actions justify-end">
                                        <Link href="/student-register" className="btn btn-outline">Get Registered</Link>
                                        <label className="my-2" >or</label>
                                        <Link href='/student-login' className="btn btn-outline w-20">Login</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="card h-60 w-full bg-base-100 card-lg shadow-sm">
                                <div className="card-body hover:shadow-lg shadow-sky-100">
                                    <h2 className="card-title"><FontAwesomeIcon icon={faHandsHoldingChild} size="2xl" style={{ color: "#B197FC", }} className='p-3' />
                                        Parents Portal</h2>
                                    <p>Login to your Parent Protal or register yourself to get access</p>
                                    <div className="card-actions justify-end">
                                        <Link href="/parent-emailForm" className="btn btn-outline">Get Registered</Link>
                                        <label className="my-2" >or</label>
                                        <Link href='/parent-login' className="btn btn-outline w-20">Login</Link>
                                    </div>
                                </div>
                            </div>
                     
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}