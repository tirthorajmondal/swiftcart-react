// fetch all products data
const getProductsData = async () => {
    try {
        const res = await fetch('https://fakestoreapi.com/products')
        const data = await res.json()
        return data
    } catch (error) {
        console.log("fetching products data", error);
    }
}


export { getProductsData }