import { useEffect, useState } from 'react';
import { getProductsData } from '../../utils';
import ProductsCard from '../Products/ProductsCard';
import { useLoaderData } from 'react-router-dom';

const Trending = () => {
    const [ternding, setTrending] = useState([])
    const products = useLoaderData()
    // console.log(products);

    // const fecthProducts = async () => {
    //     const products = await getProductsData()

    // }
    useEffect(() => {
        // fecthProducts()
        const greaterThanFour = products && products.filter(p => p.rating.rate > 4)
        const topFirstArray = greaterThanFour.sort((small, big) => big.rating.rate - small.rating.rate)
        const topThree = topFirstArray.slice(0, 3)
        setTrending(topThree)
    }, [products])
    return (
        <section className="max-w-7xl min-h-80 lg:mx-auto py-2 my-4 ">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 mx-4 lg:mx-auto">Trending Now</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-4 lg:mx-auto">
                {
                    ternding.map(p => <ProductsCard key={p.id} product={p} />)
                }
            </div>
        </section>
    );
};

export default Trending;