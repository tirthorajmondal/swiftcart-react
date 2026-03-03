import { FaEnvelope, FaLocationDot, FaPhone } from "react-icons/fa6";
import SEO from "../../components/SEO/SEO";

const Contact = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        alert("Message sent! We will get back to you soon.");
        form.reset();
    }

    return (
        <section className="max-w-7xl mx-auto px-4 xl:px-0 py-8 lg:py-12">
            <SEO
                title={"Swiftcart | Contact"}
                description={"Get in touch with Swiftcart support for order help, product questions, and service inquiries."}
            />

            <div className="rounded-2xl bg-white border border-gray-100 shadow-sm p-6 md:p-10">
                <div className="text-center max-w-2xl mx-auto">
                    <h1 className="text-3xl md:text-4xl font-black text-slate-800">Contact Us</h1>
                    <p className="mt-3 text-slate-600">
                        We are here to help with your orders, deliveries, and product questions. Reach out anytime and our team
                        will respond as quickly as possible.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-10">
                    <div className="bg-gray-50 rounded-xl border border-gray-100 p-5">
                        <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-3">
                            <FaPhone />
                        </div>
                        <h2 className="font-bold text-slate-800">Phone Support</h2>
                        <p className="text-slate-600 mt-1">+880 1789-356912</p>
                        <p className="text-sm text-slate-500 mt-2">Sat - Thu, 9:00 AM to 8:00 PM</p>
                    </div>

                    <div className="bg-gray-50 rounded-xl border border-gray-100 p-5">
                        <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-3">
                            <FaEnvelope />
                        </div>
                        <h2 className="font-bold text-slate-800">Email</h2>
                        <p className="text-slate-600 mt-1">support@swiftcart.com</p>
                        <p className="text-sm text-slate-500 mt-2">We usually reply within 24 hours</p>
                    </div>

                    <div className="bg-gray-50 rounded-xl border border-gray-100 p-5">
                        <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-3">
                            <FaLocationDot />
                        </div>
                        <h2 className="font-bold text-slate-800">Office</h2>
                        <p className="text-slate-600 mt-1">Dhaka, Bangladesh</p>
                        <p className="text-sm text-slate-500 mt-2">Swiftcart Service Center</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mt-10">
                    <div className="lg:col-span-2 bg-[#161641] text-white rounded-2xl p-6">
                        <h3 className="text-xl font-bold">Business Hours</h3>
                        <div className="mt-4 space-y-2 text-sm text-slate-200">
                            <p className="flex justify-between"><span>Saturday - Thursday</span><span>9:00 AM - 8:00 PM</span></p>
                            <p className="flex justify-between"><span>Friday</span><span>Closed</span></p>
                            <p className="pt-3 border-t border-white/20 text-slate-300">For urgent order issues, contact by phone.</p>
                        </div>
                    </div>

                    <div className="lg:col-span-3 bg-gray-50 rounded-2xl p-6 border border-gray-100">
                        <h3 className="text-xl font-bold text-slate-800">Send a Message</h3>
                        <form onSubmit={handleSubmit} className="mt-4 space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                                <input
                                    name="name"
                                    type="text"
                                    placeholder="Enter your name"
                                    className="input input-bordered w-full"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                                <input
                                    name="email"
                                    type="email"
                                    placeholder="name@mail.com"
                                    className="input input-bordered w-full"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                                <textarea
                                    name="message"
                                    rows={5}
                                    placeholder="Write your message..."
                                    className="textarea textarea-bordered w-full"
                                />
                            </div>

                            <button type="submit" className="btn btn-primary text-white rounded-xl px-8">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
