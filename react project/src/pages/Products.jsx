import { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { Search, Filter, Loader2, Plus, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/Products.css';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null); // Added error state
    const [category, setCategory] = useState('all');
    const [search, setSearch] = useState('');
    const { addToCart } = useCart();

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => {
                if (!res.ok) throw new Error('Failed to fetch products');
                return res.json();
            })
            .then(data => {
                setProducts(data);
                setFilteredProducts(data);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setError(err.message);
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        let result = products;
        if (category !== 'all') {
            result = result.filter(p => p.category === category);
        }
        if (search) {
            result = result.filter(p => p.title.toLowerCase().includes(search.toLowerCase()));
        }
        setFilteredProducts(result);
    }, [category, search, products]);

    // Helper to trim titles
    const trimTitle = (title) => {
        return title.length > 35 ? title.substring(0, 35) + '...' : title;
    };

    const categories = ['all', ...new Set(products.map(p => p.category))];

    if (loading) {
        return (
            <div className="loading-state">
                <Loader2 className="animate-spin" size={48} />
                <p>Loading...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="loading-state error-state">
                <p>Error: {error}</p>
                <button onClick={() => window.location.reload()} className="btn btn-primary">Try Again</button>
            </div>
        );
    }

    return (
        <div className="products-page section-padding container">
            <header className="page-header">
                <div>
                    <h1 className="text-gradient">Products</h1>
                    <p className="subtitle">Explore our latest collection</p>
                </div>

                <div className="controls">
                    {/* Category Dropdown as requested */}
                    <div className="select-container glass">
                        <Filter size={18} className="icon" />
                        <select
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                        >
                            {categories.map(cat => (
                                <option key={cat} value={cat}>
                                    {cat === 'all' ? 'All Categories' : cat.charAt(0).toUpperCase() + cat.slice(1)}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="search-box glass">
                        <Search size={20} className="icon" />
                        <input
                            type="text"
                            placeholder="Search products..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>
                </div>
            </header>

            <motion.div layout className="products-grid">
                <AnimatePresence>
                    {filteredProducts.map(product => (
                        <motion.div
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.4 }}
                            key={product.id}
                            className="product-card glass"
                        >
                            <div className="img-container">
                                <img src={product.image} alt={product.title} />
                                <div className="category-tag">{product.category}</div>
                            </div>

                            <div className="product-info">
                                <div className="rating">
                                    <Star size={14} fill="currentColor" />
                                    <span>{product.rating.rate} ({product.rating.count})</span>
                                </div>
                                <h3>{trimTitle(product.title)}</h3>
                                <div className="footer">
                                    <span className="price">${product.price}</span>
                                    <button onClick={() => addToCart(product)} className="add-btn">
                                        <Plus size={20} />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>

            {filteredProducts.length === 0 && (
                <div className="empty-state">
                    <p>No products match your filters. Try something else!</p>
                </div>
            )}
        </div>
    );
};

export default Products;
