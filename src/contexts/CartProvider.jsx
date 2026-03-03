import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

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
            toast.error('Product is already in your cart');
            // console.log('product already exist');
            return;
        }

        const productWithQty = { ...product, quantity: 1 };
        const newCart = [...cartItems, productWithQty];
        setCartItems(newCart);
        localStorage.setItem('cart', JSON.stringify(newCart));
        toast.success('Added to cart')
    };

    // get all products with custom message
    const getProductsMessage = () => {
        const productsMessage = cartItems.map(item => `
        🔹 *Name: ${item.title}* (🆔: ${item.id}) 

        ⚖️ *Quantity:* ${item.quantity} 

        💰 *Subtotal:* ৳ _${(item.price * item.quantity).toFixed(2)}_`).join('\n\n');
        return productsMessage;
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

    // clear cart
    const clearCart = () => {
        setCartItems([]);
        localStorage.removeItem('cart');
    }
    const value = {
        cartItems,
        getCart,
        getCartCount,
        getProductsMessage,
        addToCart,
        updateQuantity,
        removeFromCart,
        getTotal,
        clearCart
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