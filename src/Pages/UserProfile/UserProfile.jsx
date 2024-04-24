import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProviders";
import { Link } from "react-router-dom";

const UserProfile = () => {
    document.title = 'My Profile'

    const { user } = useContext(AuthContext);
    const { displayName, email, phoneNumber, emailVerified } = user;

    return (
        <>
            <div className="max-w-6xl mx-10 lg:mx-auto font-poppins">

                <div className="flex justify-between mt-10">
                    <h2 className="text-xl  lg:text-2xl  mb-10">Profile Information</h2>
                    <Link>
                        <button className="btn text-white bg-[#0EA5E9] " >Edit Profile</button>
                    </Link>
                </div>
                <div className="grid grid-cols-2 grid-rows-4">
                    <div className="border p-4 bg-slate-100">
                        <h2 className="text-xl lg:text-2xl ">User Name</h2>
                    </div>
                    <div className="border p-4">
                        <h2 className="text-xl lg:text-2xl ">{displayName}</h2>
                    </div>

                    <div className="border p-4 bg-slate-100">
                        <h2 className="text-xl lg:text-2xl ">User Email</h2>
                    </div>
                    <div className="border p-4">
                        <h2 className="text-xl lg:text-2xl ">{email}</h2>
                    </div>

                    <div className="border p-4 bg-slate-100">
                        <h2 className="text-xl lg:text-2xl ">User Phone Number</h2>
                    </div>
                    <div className="border p-4">
                        <h2 className="text-xl lg:text-2xl ">{phoneNumber}</h2>
                    </div>

                    <div className="border p-4 bg-slate-100">
                        <h2 className="text-xl lg:text-2xl ">Verified</h2>
                    </div>
                    <div className="border p-4">
                        <h2 className={`text-xl lg:text-2xl  ${emailVerified ? 'text-green-500' : 'text-red-500'}`}>
                            {emailVerified ? 'Yes' : 'No'}
                        </h2>

                    </div>
                </div>
            </div>



        </>
    );
};

export default UserProfile;