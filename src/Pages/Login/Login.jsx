import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProviders";
import { IoEye, IoEyeOff } from "react-icons/io5";


const Login = () => {
    const { signIn } = useContext(AuthContext);
    const [showPass, setShowPass] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();


    const handleLogin = (e) => {
        e.preventDefault();

        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');

        console.log(email, password)
        signIn(email, password)
            .then(result => {
                console.log(result.user)

                // NAvigate after login
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.log(error)
            })

    }


    return (
        <div>
            <div className="bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold mb-5">Login Now!</h1>
                    </div>

                    <div className="card shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <div className='relative gap-2'>
                                    <input
                                        type={showPass ? "text" : "password"}
                                        name="password"
                                        placeholder="password"
                                        className="input input-bordered w-full"
                                        required />
                                    {/* Toggle Show password */}
                                    <span className="absolute top-1/3 text-black text-xl"
                                        onClick={() => setShowPass(!showPass)}>
                                        {showPass ? <IoEyeOff /> : <IoEye />}</span>
                                </div>



                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary uppercase">Login</button>
                            </div>
                        </form>

                        <p className="text-center pb-4">
                            Don`t have an account? Please  <Link to={'/register'} className=" text-blue-600 font-bold">Register</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;