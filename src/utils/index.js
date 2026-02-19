const getProductsData = async () => {
    try {
        const res = await fetch('https://fakestoreapi.com/products')
        const data = await res.json()
        return data
    } catch (error) {
        console.log(error);
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
    if (isExist) return console.log('product already exist ');
    const newCart = [...cart, product]
    console.log(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart))
}

export { getProductsData, getCart, setCart }