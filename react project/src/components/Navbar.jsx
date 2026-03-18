import { NavLink, Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Store, Info, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { motion } from 'framer-motion';
import '../styles/Navbar.css';

const Navbar = () => {
    const { totalItems } = useCart();
    // const location = useLocation(); // No longer needed for active state with NavLink

    const navLinks = [
        { name: 'Products', path: '/', icon: <Store size={20} /> },
        { name: 'About', path: '/about', icon: <Info size={20} /> },
    ];

    return (
        <nav className="navbar glass">
            <div className="container nav-content">
                <Link to="/" className="brand">
                    <div className="logo-box">
                        <ShoppingBag className="logo-icon" size={24} />
                    </div>
                    <span className="brand-text">Style<span>Store</span></span>
                </Link>

                <div className="nav-links">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.path}
                            to={link.path}
                            className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
                        >
                            {link.icon}
                            <span>{link.name}</span>
                            {/* Animated indicator preserved for premium feel */}
                            <motion.div
                                className="nav-indicator"
                                initial={false}
                                animate={{ height: 4 }}
                            />
                        </NavLink>
                    ))}

                    <NavLink to="/cart" className={({ isActive }) => `cart-btn ${isActive ? 'active-cart' : ''}`}>
                        <ShoppingCart size={22} />
                        {totalItems > 0 && (
                            <motion.span
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="badge"
                            >
                                {totalItems}
                            </motion.span>
                        )}
                        <span className="cart-text">Cart</span>
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
