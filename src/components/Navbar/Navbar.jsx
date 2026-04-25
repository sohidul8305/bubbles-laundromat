import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX, HiPhone, HiClock, HiLocationMarker } from 'react-icons/hi';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '#about' },
        { name: 'Services', href: '#services' },
        { name: 'Prices', href: '#pricing' },
        { name: 'FAQ', href: '#faq' },
        { name: 'Contacts', href: '#contact' },
    ];

    return (
        <header className="fixed w-full z-50 transition-all duration-300">
            {/* Top Bar - Hidden on Mobile */}
            <div className={`hidden lg:block bg-gray-50 py-2 border-b border-gray-200 transition-all ${scrolled ? 'h-0 opacity-0 overflow-hidden' : 'h-auto opacity-100'}`}>
                <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-sm text-gray-500">
                    <div className="flex gap-6">
                        <div className="flex items-center gap-1">
                            <HiLocationMarker className="text-blue-500" /> 815 W Britton Rd, Oklahoma City, OK
                        </div>
                        <div className="flex items-center gap-1">
                            <HiClock className="text-blue-500" /> Mon-Sat: 08:00 AM - 09:00 PM
                        </div>
                    </div>
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-1 font-bold text-gray-700">
                            <HiPhone className="text-blue-500 text-lg" /> +1 405-748-8990
                        </div>
                        <div className="flex gap-4 border-l pl-6 border-gray-300">
                            <FaTwitter className="cursor-pointer hover:text-blue-400" />
                            <FaFacebookF className="cursor-pointer hover:text-blue-600" />
                            <FaLinkedinIn className="cursor-pointer hover:text-blue-700" />
                            <FaInstagram className="cursor-pointer hover:text-pink-500" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Navbar */}
            <nav className={`transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-white py-4'}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center">
                        
                        {/* Logo */}
                        <Link to="/" className="flex items-center gap-2 group">
                            <div className="bg-blue-600 p-2 rounded-lg transform group-hover:rotate-12 transition-transform">
                                <span className="text-2xl text-white">🧼</span>
                            </div>
                            <span className="text-2xl font-black text-gray-800 tracking-tight">
                                BUBBLES<span className="text-blue-600">.</span>
                            </span>
                        </Link>

                        {/* Desktop Links */}
                        <div className="hidden lg:flex items-center gap-8">
                            <div className="flex gap-7">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        to={link.href}
                                        className="text-[15px] font-bold text-gray-700 hover:text-blue-600 uppercase tracking-wide transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </div>

                            {/* Cart Icon & CTA */}
                            <div className="flex items-center gap-6 ml-4">
                                <div className="relative cursor-pointer">
                                    <FaShoppingCart className="text-xl text-gray-700" />
                                    <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                                        0
                                    </span>
                                </div>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-green-500 hover:bg-green-600 text-white px-7 py-3 rounded-md font-bold uppercase text-xs tracking-widest shadow-lg shadow-green-100 transition-all"
                                >
                                    Schedule a Pickup
                                </motion.button>
                            </div>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="lg:hidden flex items-center gap-4">
                            <HiPhone className="text-blue-600 text-xl" />
                            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800">
                                {isOpen ? <HiX size={32} /> : <HiMenuAlt3 size={32} />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 100 }}
                            className="fixed inset-y-0 right-0 w-full bg-white z-[60] p-8 shadow-2xl lg:hidden"
                        >
                            <div className="flex justify-between items-center mb-10">
                                <span className="text-xl font-bold">Menu</span>
                                <HiX size={32} onClick={() => setIsOpen(false)} className="cursor-pointer" />
                            </div>
                            <div className="flex flex-col gap-6">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        to={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="text-2xl font-bold text-gray-800 border-b pb-2"
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                                <button className="bg-blue-600 text-white py-4 rounded-lg font-bold text-lg mt-4">
                                    Schedule a Pickup
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </header>
    );
};

export default Navbar;