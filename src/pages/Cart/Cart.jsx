import { useEffect, useState } from "react";
import CartItemCard from "../../components/Cart/CartItemCard";
import useCart from "../../hooks/useCart";
import SEO from "../../components/SEO/SEO";
import { useNavigate } from "react-router-dom";
import CheckoutFloatingForm from "../../components/Cart/CheckoutFloatingForm";

const Cart = () => {
    const { cartItems, getTotal, getProductsMessage, clearCart } = useCart();
    const [total, setTotal] = useState(0);
    const [shippingPrice, setShippingPrice] = useState(0);
    const [isCheckoutFormOpen, setIsCheckoutFormOpen] = useState(false);
    const itemsInfo = getProductsMessage()
    const navigate = useNavigate();

    const handleCheckout = () => {
        if (cartItems.length === 0) {
            alert("Your cart is empty");
            return;
        }

        setIsCheckoutFormOpen(true);
    }

    const handleCheckoutSubmit = ({ customerName, customerAddress, customerPhone }) => {
        const message = `
        🛒 *SwiftCart – অর্ডার মেমো*

         ━━━━━━━━━━━━━━━━━━
        📋 *Order Details (পণ্যের তথ্য)*
         ━━━━━━━━━━━━━━━━━━

        ${itemsInfo}

        ━━━━━━━━━━━━━━━━━━
        💳 *Payment Summary (মূল্য বিবরণ)*
        ━━━━━━━━━━━━━━━━━━


        🧾 *Products Subtotal:* ৳ ${total}
        🚚 *Shipping Charge  :* ৳ ${shippingPrice}

        ━━━━━━━━━━━━━━━━━━━━
        💰 *Total Price (মোট টাকা): ৳ ${(parseFloat(total) + parseFloat(shippingPrice)).toFixed(2)}*
        ━━━━━━━━━━━━━━━━━━━━


        ━━━━━━━━━━━━━━━━━━
        👨🏻‍💻 *Customer Details:*
        ━━━━━━━━━━━━━━━━━━

        🎀*Name: ${customerName}* 

        📍*Address: ${customerAddress}*

        📞 *Contact Number: *${customerPhone}

        👉 অর্ডারটি নিশ্চিত করতে *CONFIRM* লিখে রিপ্লাই করুন।  

        ধন্যবাদ 💖
        *SwiftCart Team*`;

        window.open(`https://api.whatsapp.com/send?phone=8801789356912&text=${encodeURIComponent(message)}`, '_blank');
        clearCart();
    };

    useEffect(() => {
        setTotal(getTotal())
    }, [cartItems, getTotal])

    return (
        <>
            <SEO title={'Swiftcart | Shopping Bag'} description={'Review your shopping bag and proceed to checkout. Swiftcart offers secure payment, fast delivery, and exceptional customer service. Complete your purchase today!'} />
            <CheckoutFloatingForm
                isOpen={isCheckoutFormOpen}
                onClose={() => setIsCheckoutFormOpen(false)}
                onSubmit={handleCheckoutSubmit}
            />
            {
                cartItems.length === 0 ?

                    <div className="container mx-auto p-6 min-h-[92dvh] flex items-center justify-center">
                        <div className="text-center">
                            <h2 className="text-3xl font-bold text-slate-800 mb-4">Your cart is empty</h2>
                            <p className="text-slate-600 mb-6">Start shopping to add items to your cart</p>
                            <button onClick={() => navigate('/products')} className="btn btn-primary text-white rounded-xl">
                                Continue Shopping
                            </button>
                        </div>
                    </div>

                    :

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
                                        <span >${total}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Shipping</span>
                                        <span className="text-green-600 font-medium">{shippingPrice !== 0 ? `$${shippingPrice}` : "Free"}</span>
                                    </div>
                                    <div className="divider"></div>
                                    <div className="flex justify-between text-xl font-black text-slate-900">
                                        <span>Total</span>
                                        <span >${parseFloat(total) + parseFloat(shippingPrice)}</span>
                                    </div>
                                </div>
                                <button onClick={handleCheckout} className="btn btn-primary w-full mt-6 text-white rounded-xl">
                                    Checkout Now
                                </button>
                            </div>
                        </div>
                    </div>
            }
        </>
    );
};

export default Cart;