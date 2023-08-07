import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main/Main";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";
import Profile from "../../Pages/Others/Profile/Profile";
import Courses from "../../Pages/Shared/Courses/Courses";
import CourseByCategory from "../../Pages/Shared/CourseByCategory/CourseByCategory";
import CourseDetails from "../../Pages/Shared/CourseDetails/CourseDetails";
import Checkout from "../../Pages/Checkout/Checkout";
import PrivateRoute from "../PrivateRoutes/PrivateRoute";
import Error from "../../Pages/Shared/Error/Error";
import Blog from "../../Pages/Shared/Blog/Blog";
import Faq from "../../Pages/Shared/Faq/Faq";


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: async () => {
                    return fetch('https://web-learning-server-nine.vercel.app/courses');
                }
            },
            {
                path: '/courses',
                element: <Courses></Courses>,
                loader: ({ params }) => fetch(`https://web-learning-server-nine.vercel.app/category/07`)

            },
            {
                path: '/course-details/:id',
                element: <CourseDetails></CourseDetails>,
                loader: ({ params }) => fetch(`https://web-learning-server-nine.vercel.app/courses/${params.id}`)
            },
            {
                path: '/faq',
                element: <Faq></Faq>

            },
            {
                path: '/blog',
                element: <Blog></Blog>

            },
            {
                path: '/category/:id',
                element: <CourseByCategory></CourseByCategory>,
                loader: ({ params }) => fetch(`https://web-learning-server-nine.vercel.app/category/${params.id}`)
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
            },
            {
                path: '/checkout/:id',
                element: <PrivateRoute><Checkout></Checkout></PrivateRoute>,
                loader: ({ params }) => fetch(`https://web-learning-server-nine.vercel.app/courses/${params.id}`)
            },
            {
                path: "*",
                element: <Error></Error>
            }

        ]
    }
]) 