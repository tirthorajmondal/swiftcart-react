import { useEffect, useState } from "react";
import SEO from "../../components/SEO/SEO";
import ProductsCard from "../../components/Products/ProductsCard";
import { NavLink } from "react-router-dom";
import CategoryBtnContainer from "./CategoryBtnContainer";
import { getProductsData } from "../../utils";

const Products = () => {
    const [productsData, setProductsData] = useState([])
    const [caterories, setCaterories] = useState([])
    const [loading, setLoading] = useState(false)
    const [activeBtn, setaActiveBtn] = useState(false)


    const getCategoriesName = async () => {
        try {
            setLoading(true)
            const res = await fetch('https://fakestoreapi.com/products/categories')
            const data = await res.json()
            setCaterories(data)
            setLoading(false)

        } catch (error) {
            console.log(error);
        }
    }
    const reloadAllProducts = (e) => {
        const allProducts = getProductsData()
        console.log(e.target);
    }

    const filterByCategory = async (category) => {
        try {
            setLoading(true)
            const res = await fetch(`https://fakestoreapi.com/products/category/${category}`)
            const data = await res.json()
            setProductsData(data)
            setLoading(false)
        } catch (error) {
            console.log(error);
        }
    }


    useEffect(() => {
        const allProducts = getProductsData()
        setProductsData(allProducts)
        getCategoriesName()
    }, [])


    return (
        <section className="max-w-7xl mx-auto">
            <SEO title={'Swiftcart | Products'} description={'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum non pariatur, dicta beatae animi, recusandae vel, consequatur modi reprehenderit aspernatur minima ducimus voluptatibus.'} />
            {/* <div className="py-8">
                <h2 className="text-xl lg:text-3xl font-bold text-center">Our Products</h2>
                <CategoryBtnContainer
                    caterories={caterories}
                    filterByCategory={filterByCategory}
                    reloadAllProducts={reloadAllProducts} />
                <div
                    className="grid gap-6 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mt-8 content-stretch min-h-20 place-items-center">
                    {loading && <span className="mx-auto loading loading-bars loading-md col-span-4"></span>}
                    {
                        productsData.map(product => <ProductsCard key={product.id} product={product} />)
                    }
                </div>

            </div> */}
        </section >
    );
};

export default Products;