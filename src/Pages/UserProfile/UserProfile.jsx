import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProviders";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const UserProfile = () => {
    document.title = 'My Profile'

    const { user, updateUserProfile } = useContext(AuthContext);

    const { displayName, email, phoneNumber, emailVerified } = user;

    console.log(phoneNumber);

    const handleUpdate = (e) => {
        e.preventDefault();

        const form = new FormData(e.currentTarget);

        const name = form.get('name');
        const imageUrl = form.get('imageUrl');
        const phoneNumber = form.get('phoneNumber');

        // Reset error or success
        toast.dismiss();

        updateUserProfile(name, imageUrl, phoneNumber)
            .then(() => {
                toast.success("Profile updated")
            })
            .catch(error => {
                console.log(error);
                toast.error('Some problem-----')
            })



    }


    return (
        <>
            <div className="max-w-6xl mx-10 lg:mx-auto font-poppins">

                <div className="flex justify-between mt-10">
                    <h2 className="text-xl  lg:text-2xl  mb-10">Profile Information</h2>


                    <button className="btn bg-[#0EA5E9] text-white"
                        onClick={() => document.getElementById('book_modal').showModal()}>
                        Edit Profile
                    </button>

                    <dialog id="book_modal" className="modal text-left">
                        <div className="modal-box w-11/12 max-w-5xl">
                            <h3 className="font-bold text-lg"> Update Your Profile</h3>

                            <form className="card-body" onSubmit={handleUpdate} >
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Your Name</span>
                                    </label>
                                    <input type="text" name="name" placeholder="Your Name" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input type="text" name="imageUrl" placeholder="Photo URL" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Phone Number</span>
                                    </label>
                                    <input type="number" name="phoneNumber" placeholder="Phone Number" className="input input-bordered" />
                                </div>
                               
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary uppercase">Update</button>
                                </div>
                            </form>

                            <div className="modal-action">
                                <form method="dialog">
                                    <button className="btn">Close</button>
                                </form>
                            </div>
                        </div>
                    </dialog>


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

            <ToastContainer />

        </>
    );
};

export default UserProfile;