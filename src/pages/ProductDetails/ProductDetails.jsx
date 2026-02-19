import { Link, useLoaderData } from "react-router-dom";
import { setCart } from "../../utils";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";


const ProductDetails = () => {
    const [productInfo, setProductInfo] = useState({})
    const product = useLoaderData() || {}
    // console.log(product);
    const { id, title, image, price, category, rating, description } = productInfo;
    const stock = 300;

    const addToCart = () => {
        setCart(productInfo)
    }

    useEffect(() => {
        setProductInfo(product)
    }, [product])

    if (!product) {
        return
    }

    return (
        <div className="flex flex-col lg:flex-row gap-10 p-2 py-6 lg:py-10 max-w-6xl mx-auto animate-fadeIn">
            {/*  Image container */}
            <div className="w-full lg:w-1/2 flex items-center justify-center bg-slate-50 rounded-3xl p-8 border border-slate-100 overflow-hidden group shadow">
                <img
                    src={image}
                    alt={title}
                    className="max-h-100 object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-110 "
                />
            </div>

            {/* other info */}
            <div className="w-full lg:w-1/2 flex flex-col justify-between py-2">
                <div>
                    <div className="flex justify-between items-center mb-6">
                        <span className="badge badge-primary badge-md font-bold uppercase tracking-widest px-4 py-3">
                            {category}
                        </span>
                        <div className="flex items-center gap-2 bg-yellow-50 px-3 py-1 rounded-full border border-yellow-100">
                            <FaStar className="text-yellow-500" />
                            <span className="font-bold text-slate-800">
                                {rating?.rate || 0}</span>
                            <span className="text-slate-400 text-xs font-medium">({rating?.count || 0} reviews)</span>
                        </div>
                    </div>

                    <h1 className="text-3xl font-black text-slate-900 leading-tight tracking-tight">
                        {title}
                    </h1>

                    <div className="flex items-baseline gap-1 mt-4">
                        <span className="text-xl font-bold text-[#5842F4]">$</span>
                        <p className="text-4xl font-black text-[#5842F4] tracking-tighter">
                            {price}
                        </p>
                    </div>

                    <div className="divider my-8 text-slate-300 text-xs uppercase tracking-widest font-bold">Product Description</div>

                    <p className="text-slate-600 leading-relaxed text-base italic border-l-4 border-primary/20 pl-6 py-2">
                        {description}
                    </p>
                    {/* needs change when you work wotk real world project . here dummy stock added  */}
                    <div className="mt-6 flex items-center gap-3 text-sm font-medium text-slate-500">
                        <div className={`w-2 h-2 rounded-full  animate-pulse ${stock === 0 ? 'bg-red-500' : 'bg-green-500'}`}></div>
                        <span>{stock === 0 ? 'Out of stock' : <>In Stock: <span className="text-slate-800">{`${stock} units`}</span> available now</>}</span>
                    </div>
                </div>


                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
                    <button
                        onClick={addToCart}
                        className="btn btn-primary btn-lg shadow-lg shadow-indigo-200 hover:shadow-indigo-300 transition-all border-none normal-case flex items-center gap-2"
                    >
                        <i className="fa-solid fa-cart-shopping"></i>
                        Add To Cart
                    </button>

                    <Link
                        to="/products"
                        className="btn btn-outline btn-lg border-slate-200 text-slate-600 hover:bg-slate-50 hover:border-slate-300 normal-case flex items-center gap-2"
                    >
                        <i className="fa-solid fa-arrow-left"></i>
                        Explore More
                    </Link>
                </div>
            </div>
        </div >
    );
};

export default ProductDetails;