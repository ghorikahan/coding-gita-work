import { ShieldCheck, Truck, RotateCcw, Headphones } from 'lucide-react';
import { motion } from 'framer-motion';
import '../styles/About.css';

const About = () => {
    const features = [
        { icon: <ShieldCheck size={32} />, title: "Secure Context", desc: "State management powered by React Context API for a seamless shopping experience." },
        { icon: <Truck size={32} />, title: "Vite Powered", desc: "Lightning fast development and optimized production builds with Vite." },
        { icon: <RotateCcw size={32} />, title: "LocalStorage", desc: "Your cart data is automatically synchronized with your browser's local storage." },
        { icon: <Headphones size={32} />, title: "Antigravity Dev", desc: "Built with precision and high-end design patterns using modern React." }
    ];

    return (
        <div className="about-page container section-padding">
            <div className="hero-section">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-gradient"
                >
                    About StyleStore
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="subtitle"
                >
                    StyleStore is a high-performance eCommerce demonstration application.
                    It showcases how to build a scalable storefront using modern React
                    patterns like the Context API, custom hooks, and client-side routing.
                </motion.p>
            </div>

            <div className="features-grid">
                {features.map((f, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="feature-card glass"
                    >
                        <div className="icon-box">{f.icon}</div>
                        <h3>{f.title}</h3>
                        <p>{f.desc}</p>
                    </motion.div>
                ))}
            </div>

            <section className="mission-section glass">
                <div className="content">
                    <h2>API Integration</h2>
                    <p>
                        This application utilizes the <strong>FakeStore API</strong>, a free
                        REST API for testing eCommerce prototypes. We dynamically fetch products,
                        categories, and ratings to populate our storefront.
                    </p>
                    <p style={{ marginTop: '1rem' }}>
                        The integration process uses the <code>fetch</code> API within
                        <code>useEffect</code> hooks to handle asynchronous data streams,
                        providing a real-world example of external service consumption in React.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default About;
