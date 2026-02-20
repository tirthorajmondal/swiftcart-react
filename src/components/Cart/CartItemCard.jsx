import { RiDeleteBin6Fill } from "react-icons/ri";
import useCart from "../../hooks/useCart";

const CartItemCard = ({ item }) => {
    const { id, title, image, category, price, quantity } = item;
    const { updateQuantity, removeFromCart } = useCart()


    const decreaseCount = () => {
        updateQuantity(id, quantity - 1)
    }
    const increaseCount = () => {
        updateQuantity(id, quantity + 1)
    }



    return (
        <div className='flex  items-center gap-3 md:gap-6 bg-white p-3 md:p-5 rounded-2xl shadow-sm border border-gray-100'>
            <div className="w-16 md:w-32 h-16 md:h-32 shrink-0 bg-gray-100 rounded-xl p-2">
                <img src={image} alt={title} className="w-full h-full object-contain" />
            </div>

            <div className="grow">
                <h3 className="md:text-lg font-bold text-slate-800 line-clamp-1 md:line-clamp-2">{title}</h3>
                <p className="text-xs md:text-sm text-slate-500 uppercase mb-2">{category}</p>
                <p className="md:text-xl font-black text-indigo-600">${price}</p>
            </div>

            <div className="flex items-center border border-gray-200 rounded-lg">
                <button
                    onClick={decreaseCount}
                    disabled={quantity === 1}
                    className={`${quantity === 1 && 'cursor-not-allowed'} px-3 py-1 bg-gray-50 hover:bg-gray-100 border-r border-gray-200`}>-</button>
                <span className="px-4 py-1 font-bold">{quantity}</span>
                <button
                    onClick={increaseCount}
                    className="px-3 py-1 bg-gray-50 hover:bg-gray-100 border-l border-gray-200">+</button>
            </div>

            <button onClick={() => removeFromCart(id)} className="btn btn-ghost btn-circle text-red-400 hover:text-red-600">
                <RiDeleteBin6Fill className="text-red-500 text-xl" />
            </button>
        </div>
    );
};

export default CartItemCard;