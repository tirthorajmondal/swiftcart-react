import { CiDeliveryTruck } from "react-icons/ci";
import FeatureCard from "./FeatureCard";
import { RiLoopRightFill } from "react-icons/ri";
import { GoShieldCheck } from "react-icons/go";
import { TfiHeadphoneAlt } from "react-icons/tfi";

const WhyChooseUs = () => {
    const sitefeatures = [
        {
            Icon: CiDeliveryTruck,
            title: 'Fast Delivery',
            desc: 'Get your order to your doorstep quickly and effeciently.'
        },
        {
            Icon: TfiHeadphoneAlt,
            title: 'Support 24/7',
            desc: 'Our Support team is avialable around the clock to assist you.'
        },
        {
            Icon: GoShieldCheck,
            title: 'Secure Payment',
            desc: 'experience safe and secure transcaction with our encrypted payment system.'
        },
        {
            Icon: RiLoopRightFill,
            title: 'Easy Returns',
            desc: 'Not Satisfied? Return your product within 30 days.'
        },
    ]
    return (
        <section className="max-w-7xl mx-auto py-12">
            <h2 className="text-xl md:text-3xl text-center font-bold">Why Choose Us</h2>
            <p className="text-center text-lg text-gray-600 my-4 w-10/12 lg:w-full mx-auto">We provide the best shoping experience with top notch
                services.
                quasi.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                {sitefeatures.map((feature, index) => <FeatureCard key={index} feature={feature} />)}
            </div>
        </section>
    );
};

export default WhyChooseUs;