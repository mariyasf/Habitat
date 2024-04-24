import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
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
        <li><NavLink exact to="/" activeClassName="isActive">Home</NavLink></li>
        <li><NavLink exact to="/contactus" activeClassName="isActive">Contact Us</NavLink></li>
        <li><NavLink exact to="/hotel" activeClassName="isActive">Hotel</NavLink></li>
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
                    user?.displayName &&
                    <h2 className="mr-4 text-sky-500">Welcome, {user?.displayName}</h2>
                }

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

                                <ul tabIndex={0}
                                    className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                    <li>
                                        <NavLink to={'/profile'}>
                                            {user?.displayName || 'User name not found'}
                                        </NavLink>
                                    </li>



                                    <li>
                                        <a onClick={handleSignOut}>Logout</a>
                                    </li>
                                </ul>

                            </div>
                        </>
                        :
                        <div >
                            <Link to={'/login'} className="mr-4">
                                <button className="btn bg-[#0EA5E9] text-white">Login</button>
                            </Link>
                            <Link to={'/register'}>
                                <button className="btn btn-outline btn-primary">Register</button>
                            </Link>
                        </div >
                }

            </div>
        </div>
    );
};

export default Navbar;