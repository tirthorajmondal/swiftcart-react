import SEO from "../../components/SEO/SEO";
import Banner from './../../components/Home/Banner';

const Home = () => {
    return (
        <div>
            <SEO title={'Swiftcart | Home'} description={'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum non pariatur, dicta beatae animi, recusandae vel, consequatur modi reprehenderit aspernatur minima ducimus voluptatibus.'} />

            <Banner/>
        </div>
    );
};

export default Home;