import { useNavigate } from 'react-router-dom';
import SEO from '../../components/SEO/SEO';
import { FaExclamationTriangle, FaHome, FaShoppingBag } from 'react-icons/fa';

const Error = () => {
    const navigate = useNavigate();




    return (
        <>
            <SEO
                title="Swiftcart | "
                description={'An error occurred. Please try again or return to the home page to continue shopping.'}
            />
            <div className="flex items-center justify-center bg-linear-to-br from-slate-50 to-slate-100 px-4 min-h-screen">
                <div className="w-full">
                    <div className="p-6 md:p-12 text-center">
                        {/* icon */}
                        <div className="flex justify-center mb-6 animate-bounce">
                            <div className="text-yellow-500 text-7xl p-6 rounded-full bg-white shadow-lg">
                                < FaExclamationTriangle />
                            </div>
                        </div>

                        <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
                            <span className='text-5xl'>404</span> - Page Not Found                        </h2>

                        <div className="bg-yellow-100 bg-opacity-50 rounded-2xl p-6 mb-8 border border-slate-200 md:max-w-10/12 mx-auto">
                            <p className="text-slate-600 text-sm">
                                The page you requested might have been moved or deleted. Try checking the URL or browse our products instead.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-4 mb-6 md:max-w-lg mx-auto">
                            <button
                                onClick={() => navigate('/')}
                                className="btn btn-primary btn-lg shadow-lg shadow-indigo-200 hover:shadow-indigo-300 transition-all border-none normal-case flex items-center justify-center gap-2 rounded-xl"
                            >
                                <FaHome className="text-lg" />
                                Go to Home
                            </button>

                            <button
                                onClick={() => navigate('/products')}
                                className="btn btn-outline btn-lg border-slate-300 text-slate-600 hover:bg-slate-50 hover:border-slate-400 normal-case flex items-center justify-center gap-2 rounded-xl text-nowrap"
                            >
                                <FaShoppingBag className="text-lg" />
                                Browse Products
                            </button>
                        </div>


                    </div>

                    {/* Decorative Elements */}
                    <div className="mt-8 text-center">
                        <p className="text-slate-500 text-sm">
                            SwiftCart © 2024 | All Rights Reserved
                        </p>
                    </div>
                </div>
            </div >
        </>
    );
};

export default Error;
