import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main/Main";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";
import Profile from "../../Pages/Others/Profile/Profile";


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/courses')
            },
            {
                path: '/courses',
                element: '',
                loader: ''
            },
            {
                path: '/faq',
                element: '',
                loader: ''
            },
            {
                path: '/blog',
                element: '',
                loader: ''
            },
            {
                path: '/category/:id',
                element: '',
                loader: ''
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/profile',
                element: <Profile></Profile>
            }
        ]
    }
]) 