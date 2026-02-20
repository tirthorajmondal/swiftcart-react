import { useContext } from 'react';
import { CartContext } from '../contexts/CartProvider';

const useCart = () => {
    const all = useContext(CartContext);
    return all;
};

export default useCart;