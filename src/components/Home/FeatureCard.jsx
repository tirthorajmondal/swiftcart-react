
const FeatureCard = ({ feature }) => {

    const { title, desc, Icon } = feature;
    return (
        <div className="flex flex-col p-6 rounded-md bg-white relative mt-12 w-[60vw] md:w-auto mx-auto">
            <div className="shadow-md absolute left-6 -top-10 rounded-md p-2 ">
                <div className="bg-blue-200/50 rounded-md p-2"><Icon className="w-12 h-12" /></div>
            </div>
            <h3 className="font-bold text-gray-700 text-2xl mt-10 mb-8">{title}</h3>
            <h6 className="text-gray-500  ">{desc}</h6>
        </div>
    );
};

export default FeatureCard;