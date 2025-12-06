import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../components/Home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import ContestDetails from "../pages/ContestDetails/ContestDetails";
import PrivateRoute from "./PrivateRoute";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/contest/:id',
                element: <PrivateRoute><ContestDetails></ContestDetails></PrivateRoute>,
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    },
]);