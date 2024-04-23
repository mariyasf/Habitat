import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProviders";
import profile from '../../assets/images/user.png'

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleSignOut = () => {
        logOut()
            .then()
            .catch()
    }

    const navLink = <>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/contactus'}>Contact Us</Link></li>
        <li><Link to={'/'}>Team</Link></li>
        <li><Link to={'/hotel'}>Hotel</Link></li>

    </>
    return (
        <div className="navbar bg-base-100 max-w-6xl mx-auto ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLink}
                    </ul>
                </div>
                <a className="font-poppins font-bold text-xl text-sky-500">Habitat</a>
            </div>
            <div className="navbar-center hidden lg:flex font-bold">
                <ul className="menu menu-horizontal px-1">
                    {navLink}
                </ul>
            </div>
            <div className="navbar-end">

                {
                    user ?
                        <>
                            <div className="dropdown dropdown-end">
                                {/* Profile image */}
                                <div
                                    tabIndex={0}
                                    role="button"
                                    className="btn btn-ghost btn-circle avatar"
                                >

                                    <div className="w-10 rounded-full">
                                        <img alt="Profile" src={profile} />
                                    </div>

                                </div>

                                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                    <li><a>Update</a></li>
                                    <li><a onClick={handleSignOut}>Logout</a></li>
                                </ul>

                            </div>
                        </>
                        :
                        <Link to={'/login'}>
                            <button className="btn">Login</button>
                        </Link>
                }




            </div>
        </div>
    );
};

export default Navbar;