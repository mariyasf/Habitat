import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="text-center">
            <img className="mx-auto" src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg" alt="" />


            <button className="btn bg-blue-600 text-white">
                <Link to={"/"}>Go back to home</Link>
            </button>
        </div>
    );
};

export default ErrorPage;