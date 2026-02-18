import { useEffect, useState } from "react";
import SEO from "../../components/SEO/SEO";
import ProductsCard from "../../components/Products/ProductsCard";
import { NavLink } from "react-router-dom";

const Products = () => {
    const [productsData, setProductsData] = useState([])
    const [caterories, setCaterories] = useState([])
    const [loading, setLoading] = useState(false)

    const getProductsData = async () => {
        try {
            setLoading(true)
            const res = await fetch('https://fakestoreapi.com/products')
            const data = await res.json()
            setProductsData(data)
            setLoading(false)
        } catch (error) {
            console.log(error);
        }
    }
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
    const reloadAllProducts = () => {
        getProductsData()
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
        getProductsData()
        getCategoriesName()
    }, [])


    return (
        <div>
            <SEO title={'Swiftcart | Products'} description={'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum non pariatur, dicta beatae animi, recusandae vel, consequatur modi reprehenderit aspernatur minima ducimus voluptatibus.'} />
            <div className="py-8">
                <h2 className="text-xl lg:text-3xl font-bold text-center">Our Products</h2>
                <div id="categories-container"
                    className="flex flex-wrap gap-4 w-11/12 md:w-full mx-auto  justify-center my-4 uppercase">
                    <button
                        onClick={reloadAllProducts}
                        className="btn btn-outline border-slate-400 rounded-full active category-button">All</button>
                    {
                        caterories.map(category => <NavLink onClick={() => filterByCategory(category)} key={category} className={`${({ isActive }) => isActive && 'bg-primary text-white'} 
                        btn btn-outline border-slate-400 rounded-full uppercase`}>{category}</NavLink>)
                    }
                </div>
                <div
                    className="grid gap-6 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mt-8 content-stretch min-h-20 place-items-center">
                    {loading && <span className="mx-auto loading loading-bars loading-md col-span-4"></span>}
                    {
                        productsData.map(product => <ProductsCard key={product.id} product={product} />)
                    }
                </div>

            </div>
        </div >
    );
};

export default Products;