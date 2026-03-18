import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, MapPin, Send, Github, Linkedin } from 'lucide-react';
import './Contact.css';
import emailjs from '@emailjs/browser';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
    const headerRef = useRef(null);
    const formRef = useRef(null);
    const infoRef = useRef(null);

    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [status, setStatus] = useState({
        submitting: false,
        submitted: false,
        error: null
    });

    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        setStatus({ submitting: true, submitted: false, error: null });

        try {
            const templateParams = {
                from_name: formState.name,
                from_email: formState.email,
                message: formState.message,
                to_name: 'Kahan Ghori',
                to_email: import.meta.env.VITE_EMAILJS_TO_EMAIL,
                reply_to: formState.email,
            };

            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                templateParams,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );

            setStatus({ submitting: false, submitted: true, error: null });
            setFormState({ name: '', email: '', message: '' });

            // Reset success message after 5 seconds
            setTimeout(() => {
                setStatus(prev => ({ ...prev, submitted: false }));
            }, 5000);

        } catch (error) {
            console.error('EmailJS Error:', error);
            setStatus({ 
                submitting: false, 
                submitted: false, 
                error: 'Failed to send message. Please try again or use direct email.' 
            });
        }
    };

    useEffect(() => {
        window.scrollTo(0, 0);

        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        tl.fromTo(headerRef.current,
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8 }
        )
            .fromTo(infoRef.current,
                { x: -30, opacity: 0 },
                { x: 0, opacity: 1, duration: 0.8 },
                "-=0.4"
            )
            .fromTo(formRef.current,
                { x: 30, opacity: 0 },
                { x: 0, opacity: 1, duration: 0.8 },
                "-=0.6"
            );

        return () => {
            tl.kill();
        };
    }, []);

    return (
        <div className="contact-page">
            <section className="section contact-hero">
                <div className="container">
                    <div ref={headerRef} className="section-header text-center">
                        <h1 className="section-title"><span className="text-gradient">Contact Me</span></h1>
                        <p className="section-desc">Have a project in mind or just want to say hi? I'd love to hear from you.</p>
                    </div>

                    <div className="contact-content">
                        {/* Contact Info Column */}
                        <div className="contact-info" ref={infoRef}>
                            <h2 className="info-title">Let's Chat</h2>
                            <p className="info-text">
                                I'm always open to discussing new projects, creative opportunities, or partnerships.
                            </p>

                            <div className="info-item">
                                <div className="icon-box"><Mail size={24} /></div>
                                <div>
                                    <h3 className="item-label">Email</h3>
                                    <a href="mailto:kahan.ghori.cg@gmail.com" className="item-link">kahan.ghori.cg@gmail.com</a>
                                </div>
                            </div>

                            <div className="info-item">
                                <div className="icon-box"><MapPin size={24} /></div>
                                <div>
                                    <h3 className="item-label">Location</h3>
                                    <p className="item-text">Gandhinagar, Gujarat</p>
                                </div>
                            </div>

                            <div className="social-connect">
                                <h3 className="social-title">Connect</h3>
                                <div className="social-icons">
                                    <a href="https://github.com/ghorikahan" target="_blank" rel="noopener noreferrer" className="social-btn"><Github size={20} /></a>
                                    <a href="https://www.linkedin.com/in/kahan-ghori-157487394/" target="_blank" rel="noopener noreferrer" className="social-btn"><Linkedin size={20} /></a>
                                    <a href="mailto:kahan.ghori.cg@gmail.com" className="social-btn"><Mail size={20} /></a>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form Column */}
                        <div className="contact-form-wrapper" ref={formRef}>
                            <form className="contact-form" onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formState.name}
                                        onChange={handleChange}
                                        placeholder="Your Name"
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formState.email}
                                        onChange={handleChange}
                                        placeholder="your@email.com"
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formState.message}
                                        onChange={handleChange}
                                        rows="5"
                                        placeholder="Tell me about your project..."
                                        required
                                    ></textarea>
                                </div>

                                {status.submitted && (
                                    <div className="status-message success" style={{ 
                                        padding: '1rem', 
                                        marginBottom: '1.5rem', 
                                        backgroundColor: 'rgba(201, 168, 76, 0.1)', 
                                        border: '1px solid var(--gold)',
                                        color: 'var(--gold)',
                                        borderRadius: 'var(--radius-sm)',
                                        fontSize: '13px',
                                        textAlign: 'center'
                                    }}>
                                        Message sent successfully! I will get back to you soon.
                                    </div>
                                )}

                                {status.error && (
                                    <div className="status-message error" style={{ 
                                        padding: '1rem', 
                                        marginBottom: '1.5rem', 
                                        backgroundColor: 'rgba(196, 75, 43, 0.1)', 
                                        border: '1px solid var(--red)',
                                        color: 'var(--red)',
                                        borderRadius: 'var(--radius-sm)',
                                        fontSize: '13px',
                                        textAlign: 'center'
                                    }}>
                                        {status.error}
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    className={`btn btn-primary submit-btn ${status.submitting ? 'submitting' : ''}`}
                                    disabled={status.submitting}
                                >
                                    {status.submitting ? 'Sending...' : 'Send Message'} 
                                    {!status.submitting && <Send size={18} />}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
