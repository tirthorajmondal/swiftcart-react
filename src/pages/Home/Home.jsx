import WhyChooseUs from "../../components/Home/WhyChooseUs";
import SEO from "../../components/SEO/SEO";
import Banner from './../../components/Home/Banner';
import Trending from './../../components/Home/Trending';

const Home = () => {
    return (
        <div className="">
            <SEO title={'Swiftcart | Home'} description={'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum non pariatur, dicta beatae animi, recusandae vel, consequatur modi reprehenderit aspernatur minima ducimus voluptatibus.'} />

            <Banner />
            <WhyChooseUs />
            <Trending/>
        </div>
    );
};

export default Home;