import { createContext, useEffect, useState } from "react";

export const CartContext = createContext()
const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);


    // get all cart items
    const getCart = () => {
        return cartItems;
    };

    // get cart count
    const getCartCount = () => {
        return cartItems.length;
    };

    //add to cart
    const addToCart = (product) => {
        const isExist = cartItems.find(p => p.id === product.id);

        if (isExist) {
            // show sweet alert
            console.log('product already exist');
            return;
        }

        const productWithQty = { ...product, quantity: 1 };
        const newCart = [...cartItems, productWithQty];
        setCartItems(newCart);
        localStorage.setItem('cart', JSON.stringify(newCart));
    };

    // update product quantity
    const updateQuantity = (id, newQty) => {
        const updatedCart = cartItems.map(item => {
            if (item.id === id) {
                return { ...item, quantity: newQty };
            }
            return item;
        });

        setCartItems(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    // delete item from cart
    const removeFromCart = (id) => {
        const updatedCart = cartItems.filter(p => p.id !== id);
        setCartItems(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    //  total price
    const getTotal = () => {
        return cartItems.reduce((total, item) => {
            return total + (item.price * item.quantity);
        }, 0).toFixed(2); //set 2 digit after point
    };

    const value = {
        cartItems,
        getCart,
        getCartCount,
        addToCart,
        updateQuantity,
        removeFromCart,
        getTotal,
    };



    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCartItems(savedCart);
    }, []);



    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;