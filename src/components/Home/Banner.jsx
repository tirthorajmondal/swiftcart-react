import bannerImg from '../../assets/banner/banner.png';
const Banner = () => {
    return (
        <section className="w-full min-h-[80vh] bg-cover bg-center text-white bg-blend-multiply flex items-center" style={{
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            backgroundImage: `url(${bannerImg})`,

        }} >

            <div className="max-w-7xl mx-auto w-full">
                <div className=" mx-16 md:mx-24 xl:mx-auto">
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold">Best Collection For You</h1>
                    <p
                        className="my-3 md:my-4 w-9/12 md:w-8/12 text-lg text-gray-300 md:text-xl lg:text-2xl lg:mt-6 leading-5 md:leading-normal lg:mb-8 text-wrap">
                        Discover the latest trends
                        in fashion, electronics, and
                        more. Shop with
                        confidence and
                        style at SwiftCart</p>
                    <a href="./products" className="btn btn-primary w-fit lg:btn-xl px-10">Shop Now</a>
                </div>
            </div>
        </section >
    );
};

export default Banner;