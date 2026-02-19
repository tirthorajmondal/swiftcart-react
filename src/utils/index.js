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

// cart
const getCart = () => {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || []
    return cartItems;
}
const setCart = (product) => {
    const cart = getCart()
    const isExist = cart.find(p => p.id === product.id)
    if (isExist) {
        console.log('product already exist ')
        return
    }
    const newCart = [...cart, product]
    localStorage.setItem('cart', JSON.stringify(newCart))
}

export { getProductsData, getCart, setCart }