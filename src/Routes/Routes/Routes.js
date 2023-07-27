import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main/Main";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";
import Profile from "../../Pages/Others/Profile/Profile";
import Courses from "../../Pages/Shared/Courses/Courses";
import CourseByCategory from "../../Pages/Shared/CourseByCategory/CourseByCategory";


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: async () => {
                    return fetch('http://localhost:5000/courses');
                }
            },
            {
                path: '/courses',
                element: <Courses></Courses>

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
                element: <CourseByCategory></CourseByCategory>,
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`)
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