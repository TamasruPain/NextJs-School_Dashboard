import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function AdminProfile() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-5">
            <div className="card rounded-lg bg-base-100 p-10">
                <div className="flex flex-col items-center justify-center mb-10 gap-2">
                    <FontAwesomeIcon icon={faCircleUser} size="3x"/>
                    <label className="text-2xl">Your Profile</label>
                </div>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-10">
                    <label className="text-md">Name: <span>Hell Driver</span></label>
                    <label className="text-md">Email: <span>abc@gmail.com</span></label>
                    <label className="text-md">Phone: <span>9087654321</span></label>
                    <label className="text-md">Age: <span>25</span></label>
                    <label className="text-md">Status: <span>Admin</span></label>
                </div>
                <div className="flex items-center justify-center mt-10">
                    <button className="btn btn-primary">Edit Profile</button>
                </div>
            </div>

        </div>
    )
}