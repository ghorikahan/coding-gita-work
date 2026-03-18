import { useCart } from '../context/CartContext';
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/Cart.css';

const Cart = () => {
    const { cart, removeFromCart, updateQuantity, totalPrice, totalItems } = useCart();

    if (cart.length === 0) {
        return (
            <div className="empty-cart-page container section-padding">
                <div className="empty-content glass">
                    <ShoppingBag size={64} className="icon" />
                    <h2>Your cart is empty</h2>
                    <p>Looks like you haven't added anything to your cart yet.</p>
                    <Link to="/" className="continue-btn">
                        Start Shopping <ArrowRight size={20} />
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="cart-page container section-padding">
            <h1 className="text-gradient">Your Shopping Bag</h1>

            <div className="cart-grid">
                <div className="cart-items">
                    <AnimatePresence>
                        {cart.map(item => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                className="cart-item glass"
                            >
                                <div className="item-img">
                                    <img src={item.image} alt={item.title} />
                                </div>
                                <div className="item-details">
                                    <h3>{item.title}</h3>
                                    <p className="item-price">${item.price}</p>

                                    <div className="item-actions">
                                        <div className="qty-controls">
                                            <button onClick={() => updateQuantity(item.id, -1)}><Minus size={16} /></button>
                                            <span>{item.quantity}</span>
                                            <button onClick={() => updateQuantity(item.id, 1)}><Plus size={16} /></button>
                                        </div>
                                        <button onClick={() => removeFromCart(item.id)} className="remove-btn">
                                            <Trash2 size={20} />
                                        </button>
                                    </div>
                                </div>
                                <div className="item-total">
                                    ${(item.price * item.quantity).toFixed(2)}
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                <div className="cart-summary glass">
                    <h2>Order Summary</h2>
                    <div className="summary-row">
                        <span>Items in Bag</span>
                        <span>{totalItems} items</span>
                    </div>
                    <div className="summary-row">
                        <span>Subtotal</span>
                        <span>${totalPrice.toFixed(2)}</span>
                    </div>
                    <div className="summary-row">
                        <span>Shipping</span>
                        <span className="free">FREE</span>
                    </div>
                    <div className="divider" />
                    <div className="summary-row total">
                        <span>Total Price</span>
                        <span className="text-gradient">${totalPrice.toFixed(2)}</span>
                    </div>
                    <button className="checkout-btn">
                        Proceed to Checkout
                    </button>
                    <p className="secure-text">🔒 Secure Checkout Powered by Context API</p>
                </div>
            </div>
        </div>
    );
};

export default Cart;
