import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-[#161641] text-white">
            <div className="max-w-7xl mx-auto p-10 lg:px-0 lg:py-10">
                <div className="grid grid-cols-12 gap-8">
                    <aside className="col-span-12 md:col-span-4">
                        <Link to="/" className="text-4xl text-amber-100 font-bold mb-2
                        ">Swiftcart</Link>
                        <p className="mt-4">Your one stop shop for all your fashion and lifestyle needs. Quality products, fast
                            delivery, and
                            excellent support</p>
                    </aside>
                    <nav className="flex flex-col gap-1 col-span-6 md:col-span-2">
                        <h6 className="footer-title">Services</h6>
                        <Link to="" className="link link-hover">Branding</Link>
                        <Link to="" className="link link-hover">Design</Link>
                        <Link to="" className="link link-hover">Marketing</Link>
                        <Link to="" className="link link-hover">Advertisement</Link>
                    </nav>
                    <nav
                        className="flex flex-col gap-1 col-span-6 md:col-span-2 place-self-end md:place-self-start mr-16 md:mr-0">
                        <h6 className="footer-title">Company</h6>
                        <Link to="" className="link link-hover">About us</Link>
                        <Link to="" className="link link-hover">Contact</Link>
                        <Link to="" className="link link-hover">Jobs</Link>
                        <Link to="" className="link link-hover">Press kit</Link>
                    </nav>
                    <div className="col-span-12 md:col-span-4 ">
                        <h6 className="footer-title">SubsCribe to our newsletter</h6>
                        <p className="my-3">The latest news, articles, and resources, sent to your inbox weekly.</p>
                        <fieldset className="">
                            <label>Enter your email address</label>
                            <div className="flex gap-3 mt-2">
                                <input type="email" placeholder="name@mail.com"
                                    className="input input-bordered join-item text-gray-600" />
                                <button className="btn btn-primary join-item">Subscribe</button>
                            </div>
                        </fieldset>
                    </div>
                </div>


                <hr className="border-t-2 my-8" />
                <div className="shadow-md  md:items-center flex flex-col-reverse md:flex-row md:justify-between gap-y-8">
                    <aside className="grid-flow-col items-center">
                        <p>© <span className="footer-year">{new Date().getFullYear()}</span> SwiftCart, Inc - All right reserved</p>
                    </aside>
                    <nav className="flex gap-3">
                        <Link to="">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                className="fill-current">
                                <path
                                    d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z">
                                </path>
                            </svg>
                        </Link>
                        <Link to="">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                className="fill-current">
                                <path
                                    d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z">
                                </path>
                            </svg>
                        </Link>
                        <Link to="">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                className="fill-current">
                                <path
                                    d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z">
                                </path>
                            </svg>
                        </Link>
                    </nav>
                </div>
            </div>
        </footer>
    );
};

export default Footer;