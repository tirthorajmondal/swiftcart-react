import bannerImg from '../../assets/banner/banner.png';
const Banner = () => {
    return (
        <section className="w-full md:min-h-[80vh] bg-cover bg-center text-white bg-blend-multiply flex items-center" style={{
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            backgroundImage: `url(${bannerImg})`,

        }} >

            <div className="max-w-7xl lg:min-w-7xl mx-auto ">
                <div className="flex flex-col mx-auto w-10/12 lg:w-full my-36 md:my-22">
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold">Best Collection For You</h1>
                    <p
                        className="my-3 md:my-4 md:w-8/12  md:text-xl lg:text-2xl lg:mt-6 leading-5 md:leading-normal lg:mb-8">
                        Discover the latest trends
                        in fashion, electronics, and
                        more. Shop with
                        confidence and
                        style at SwiftCart</p>
                    <a href="./products.html" className="btn btn-primary w-fit lg:btn-xl px-10">Shop Now</a>
                </div>
            </div>
        </section >
    );
};

export default Banner;