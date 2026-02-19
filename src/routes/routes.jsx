import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Products from "../pages/Products/Products";
import Home from "../pages/Home/Home";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import Cart from "../pages/Cart/Cart";

const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            {
                index: true,
                path: '/',
                Component: Home,
                loader: () => fetch("https://fakestoreapi.com/products")
            },
            {
                path: '/products',
                Component: Products
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

        ]
    }
])

export default router;