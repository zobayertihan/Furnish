import Main from "../layout/Main";
import ProductsMain from "../layout/ProductsMain";
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
                element: <Home></Home>,
                loader: () => fetch(`https://furnish-server.vercel.app/products`)
            },
            // {
            //     path: '/booking',
            //     element: <Booking></Booking>
            // },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/about',
                element: <About></About>
            },
            // {
            //     path: '/products',
            //     element: <Product></Product>,
            //     loader: () => fetch(`http://localhost:5000/products`)
            // },
            {
                path: '/',
                element: <ProductsMain></ProductsMain>,
                children: [
                    {
                        path: '/products',
                        element: <Product></Product>,
                        loader: () => fetch(`https://furnish-server.vercel.app/products`)
                    },
                    {
                        path: '/catagories/:id',
                        element: <Product></Product>,
                        loader: ({ params }) => fetch(`https://furnish-server.vercel.app/catagories/${params.id}`)
                    }
                ]
            },
            {
                path: '/products/:id/booking',
                element: <Booking></Booking>,
                loader: ({ params }) => fetch(`https://furnish-server.vercel.app/products/${params.id}`)

            },
        ]
    }
])