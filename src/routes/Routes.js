import Main from "../layout/Main";
import About from "../pages/About/About";
import Booking from "../pages/Booking/Booking";
import Contact from "../pages/Contact/Contact";
import Home from "../pages/Home/Home";
import Product from "../pages/Product/Product";

const { createBrowserRouter } = require("react-router-dom");

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/booking',
                element: <Booking></Booking>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/products',
                element: <Product></Product>
            }
        ]
    }
])