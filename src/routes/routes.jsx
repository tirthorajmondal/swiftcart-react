import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Error from "../pages/Error/Error";

// Lazy load non-critical routes for code splitting
const ProductDetails = lazy(() => import("../pages/ProductDetails/ProductDetails"));
const Cart = lazy(() => import("../pages/Cart/Cart"));
const ProductsPage = lazy(() => import("../pages/Products/ProductsPage"));
const Contact = lazy(() => import("../pages/Contact/Contact"));
const SignUp = lazy(() => import("../pages/SignUp/SignUp"));
const Login = lazy(() => import("../pages/Login/Login"));
const Profile = lazy(() => import("../pages/Profile/Profile"));
const Orders = lazy(() => import("../pages/Orders/Orders"));

// Simple loading fallback
const LoadingSpinner = () => (
    <div className="min-h-screen flex items-center justify-center">
        <div className="loading loading-spinner loading-lg"></div>
    </div>
);

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
                Component: () => (
                    <Suspense fallback={<LoadingSpinner />}>
                        <ProductsPage />
                    </Suspense>
                )
            },
            {
                path: '/product/:id',
                Component: () => (
                    <Suspense fallback={<LoadingSpinner />}>
                        <ProductDetails />
                    </Suspense>
                ),
                loader: ({ params }) => fetch(`https://fakestoreapi.com/products/${params.id}`)

            },
            {
                path: '/cart',
                Component: () => (
                    <Suspense fallback={<LoadingSpinner />}>
                        <Cart />
                    </Suspense>
                )
            },
            {
                path: '/contact',
                Component: () => (
                    <Suspense fallback={<LoadingSpinner />}>
                        <Contact />
                    </Suspense>
                )
            },
            {
                path: '/signup',
                Component: () => (
                    <Suspense fallback={<LoadingSpinner />}>
                        <SignUp />
                    </Suspense>
                )
            },
            {
                path: '/login',
                Component: () => (
                    <Suspense fallback={<LoadingSpinner />}>
                        <Login />
                    </Suspense>
                )
            },
            {
                path: '/profile',
                Component: () => (
                    <Suspense fallback={<LoadingSpinner />}>
                        <Profile />
                    </Suspense>
                )
            },
            {
                path: '/my-orders',
                Component: () => (
                    <Suspense fallback={<LoadingSpinner />}>
                        <Orders />
                    </Suspense>
                )
            }

        ]
    }
])

export default router;