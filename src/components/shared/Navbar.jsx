import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdCart } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
import useCart from "../../hooks/useCart";
import { LuShoppingBasket } from "react-icons/lu";

const Navbar = () => {
    const { cartItems } = useCart();
    const [cartCount, setCartCount] = useState(cartItems.length || 0)

    useEffect(() => {
        setCartCount(cartItems.length)
    }, [cartItems])

    // navlinks and styles
    const linkStyle = "px-2 py-1 font-bold rounded-lg transition-all duration-300";
    const activeStyle = "text-primary";
    const idleStyle = "text-gray-600 hover:shadow-sm";
    const navLinks = <>
        <NavLink to='/' className={({ isActive }) => `${linkStyle} ${isActive ? activeStyle : idleStyle}`}>Home</NavLink>
        <NavLink to='/products' className={({ isActive }) => `${linkStyle} ${isActive ? activeStyle : idleStyle}`}>Products</NavLink>
        <NavLink to='/about' className={({ isActive }) => `${linkStyle} ${isActive ? activeStyle : idleStyle}`}>About</NavLink>
        <NavLink to='/contact' className={({ isActive }) => `${linkStyle} ${isActive ? activeStyle : idleStyle}`}>Contact</NavLink>
    </>

    return (
        <header className=" shadow-md  flex justify-between ">
            <div className="navbar bg-gray-100 max-w-7xl mx-auto">
                <div className="navbar-start">

                    <Link to="/" className="text-2xl text-primary font-bold">Swiftcart</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-semibold gap-x-5">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to="/cart" className="pr-3 relative  w-fit"><LuShoppingBasket
                        className="text-2xl" />

                        <span
                            className="cart-count absolute -left-1 -bottom-2 leading-none rounded-xl text-xs text-white w-fit bg-primary p-0.5">{cartCount || 0}</span>
                    </Link>

                    <div className="dropdown dropdown-end z-50">
                        <div tabIndex="0" role="button" className=" btn border-0 lg:hidden p-1 h-fit">
                            {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg> */}
                            <GiHamburgerMenu className="text-xl" />

                        </div>
                        <ul tabIndex="-1"
                            className="menu menu-sm dropdown-content items-end px-8 w-fit bg-base-100 rounded-box z-1 mt-3 p-2 shadow">
                            {navLinks}
                        </ul>
                    </div >
                </div >
            </div >
        </header >
    );
};

export default Navbar;