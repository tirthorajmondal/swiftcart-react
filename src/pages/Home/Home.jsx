import WhyChooseUs from "../../components/Home/WhyChooseUs";
import SEO from "../../components/SEO/SEO";
import Banner from './../../components/Home/Banner';
import Trending from './../../components/Home/Trending';

const Home = () => {
    return (
        <div className="">
            <SEO title={'Swiftcart | Home'} description={'Welcome to Swiftcart, your one-stop shop for trending products and exclusive deals. Discover why customers choose us and explore our latest offerings.'} />

            <Banner />
            <WhyChooseUs />
            <Trending/>
        </div>
    );
};

export default Home;