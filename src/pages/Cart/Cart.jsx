import { useEffect, useState } from "react";
import CartItemCard from "../../components/Cart/CartItemCard";
import useCart from "../../hooks/useCart";
import SEO from "../../components/SEO/SEO";

const Cart = () => {
    const { cartItems, getTotal } = useCart();
    const [subTotal, setSubTotal] = useState(0)

    useEffect(() => {
        setSubTotal(getTotal())
    }, [cartItems, getTotal])
    
    return (
        <>
            <SEO title={'Swiftcart | Shopping Cart'} description={'Review your shopping bag and proceed to checkout. Swiftcart offers secure payment, fast delivery, and exceptional customer service. Complete your purchase today!'} />
            <div className="container mx-auto p-6 min-h-screen ">
            <h1 className="text-3xl font-black text-slate-800 mb-8">Your Shopping Bag</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-4 ">
                    {/* cart items here */}
                    {
                        cartItems.map(cart => <CartItemCard key={cart.id}
                            item={cart} />)
                    }
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 h-fit sticky top-6">
                    <h2 className="text-xl font-bold mb-4">Order Summary</h2>
                    <div className="space-y-3 text-slate-600">
                        <div className="flex justify-between">
                            <span>Subtotal</span>
                            <span >${subTotal}</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Shipping</span>
                            <span className="text-green-600 font-medium">Free</span>
                        </div>
                        <div className="divider"></div>
                        <div className="flex justify-between text-xl font-black text-slate-900">
                            <span>Total</span>
                            <span >${subTotal}</span>
                        </div>
                    </div>
                    <button className="btn btn-primary w-full mt-6 text-white rounded-xl">
                        Checkout Now
                    </button>
                </div>
            </div>
        </div>
        </>
    );
};

export default Cart;