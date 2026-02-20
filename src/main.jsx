import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom';
import router from './routes/routes';
import { HelmetProvider } from 'react-helmet-async';
import CartProvider from './contexts/CartProvider';



createRoot(document.getElementById('root')).render(
  <HelmetProvider>
    <CartProvider>
      <div className="">
        <RouterProvider router={router} />
      </div>
    </CartProvider>
  </HelmetProvider>
)
