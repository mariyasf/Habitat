import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ContactUs from "../Pages/ContactUs/ContactUs";
import PrivateRoute from "./PrivateRoute";
import Hotel from "../Pages/Hotel/Hotel";
import Details from "../Components/Details";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/register",
                element: <Register />,
            },
            {
                path: "/contactus",
                element: <PrivateRoute><ContactUs /></PrivateRoute>,
            },
            {
                path: "/hotel",
                element: <Hotel />
            },
            {
                path: "/hotel/:segment_name/:id",
                element: <PrivateRoute><Details /></PrivateRoute>
            },
        ]
    },
]);

export default router;