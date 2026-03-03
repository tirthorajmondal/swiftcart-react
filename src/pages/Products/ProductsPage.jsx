import { useEffect, useState } from 'react';
import CategoryBtnContainer from './CategoryBtnContainer';
import SEO from '../../components/SEO/SEO';
import ProductsCard from '../../components/Products/ProductsCard';

const ProductsPage = () => {
    const [categories, setCaterories] = useState([])
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)

    const loadCategory = async () => {
        const url = `https://fakestoreapi.com/products/categories`
        const res = await fetch(url)
        const data = await res.json()
        setCaterories(data)
    }

    const loadCategoryProduct = async (category) => {
        try {
            setProducts([])
            const url = category === 'all' ? `https://fakestoreapi.com/products` : `https://fakestoreapi.com/products/category/${category}`
            setLoading(true)
            const res = await fetch(url)
            const data = await res.json()
            setProducts(data)
        } catch (error) {
            console.log('failed to load product', error);
        }
        finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        loadCategory()
        loadCategoryProduct('all')
    }, [])

    return (
        <section className="max-w-7xl mx-auto">
            <SEO title={'Swiftcart | Products'} description="Browse a wide selection of products across various categories. Find the best deals and latest items available at Swiftcart." />

            <div className="py-8 px-4 xl:px-0">
                <h2 className="text-xl lg:text-3xl font-bold text-center">Our Products</h2>
                <CategoryBtnContainer
                    categories={categories}
                    loadCategoryProduct={loadCategoryProduct}
                />
                <div
                    className="grid gap-4 lg:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-8 content-stretch min-h-20 place-items-center">
                    {loading ? <span className="mx-auto loading loading-bars loading-md col-span-4"></span> :

                        products.map(product => <ProductsCard key={product.id} product={product} />)
                    }
                </div>

            </div>
        </section >
    );
};

export default ProductsPage;