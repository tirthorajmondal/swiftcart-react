import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import Cart from "../pages/Cart/Cart";
import ProductsPage from "../pages/Products/ProductsPage";
import Error from "../pages/Error/Error";
import Contact from "../pages/Contact/Contact";

const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        errorElement: <Error />,
        children: [
            {
                index: true,
                path: '/',
                Component: Home,
                loader: () => fetch("https://fakestoreapi.com/products")
            },
            {
                path: '/products',
                Component: ProductsPage
            },
            {
                path: '/product/:id',
                Component: ProductDetails,
                loader: ({ params }) => fetch(`https://fakestoreapi.com/products/${params.id}`)

            },
            {
                path: '/cart',
                Component: Cart
            },
            {
                path: '/contact',
                Component: Contact
            },

        ]
    }
])

export default router;