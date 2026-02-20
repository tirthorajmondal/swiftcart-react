import { Link, useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";

const ProductsCard = ({ product }) => {
    const { id, title, image, price, category, rating, } = product;
    const navigate = useNavigate()
    const { addToCart } = useCart();
    return (
        <div className="card bg-base-100 shadow-xl border border-gray-200 overflow-hidden h-full w-full">
            <figure className="px-4 pt-4 py-4 bg-gray-200 grow">
                <img src={image} alt={title}
                    className="max-h-48 object-contain my-auto hover:scale-105 transition-all duration-300" />
            </figure>

            <div className="card-body p-5 gap-4 grow">

                <div className="flex justify-between items-center mt-auto">
                    <span
                        className="badge badge-ghost bg-indigo-100 text-indigo-700 border-none font-semibold p-3 text-xs">
                        {category}
                    </span>
                    <div className="flex items-center gap-1 text-gray-500 text-sm">
                        <i className="fa-solid fa-star text-yellow-400 -mb-0.75"></i>
                        <span className="font-medium">{rating?.rate} ({rating?.count})</span>
                    </div>
                </div>

                <div>
                    <h2 className="text-xl font-bold text-slate-800 cursor-default" title={title} >
                        ${title.length > 40 ? title.slice(0, 40) + '...' : title}
                    </h2>
                    <p className="text-2xl font-black text-slate-900 mt-1">${price}</p>
                </div>

                <div className="card-actions grid grid-cols-2 gap-3 mt-2">
                    <Link to={`/product/${id}`}
                        className="btn btn-outline border-gray-300 text-slate-600 rounded-lg hover:bg-gray-50 hover:border-gray-400 normal-case">
                        Details
                    </Link>
                    <button
                        onClick={() => addToCart(product)}
                        className="btn bg-primary hover:bg-[#4533d1f5] border-none rounded-lg text-white normal-case">
                        <i className="fa-solid fa-cart-shopping mr-1"></i>
                        Add
                    </button>
                </div>

            </div>
        </div>
    );
};

export default ProductsCard;