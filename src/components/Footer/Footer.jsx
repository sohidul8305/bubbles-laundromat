import React from 'react';
import { Link } from 'react-router';
import { HiLocationMarker, HiPhone, HiMail, HiArrowRight } from 'react-icons/hi';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerLinks = [
        { name: 'Our Services', href: '#services' },
        { name: 'Pricing Plans', href: '#pricing' },
        { name: 'About Company', href: '#about' },
        { name: 'Privacy Policy', href: '#' },
        { name: 'Terms & Conditions', href: '#' },
    ];

    return (
        <footer className="bg-gray-900 text-white pt-20 pb-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    
                    {/* Brand Section */}
                    <div className="space-y-6">
                        <Link to="/" className="flex items-center gap-2">
                            <div className="bg-blue-600 p-2 rounded-lg">
                                <span className="text-xl">🧼</span>
                            </div>
                            <span className="text-2xl font-black tracking-tight">
                                BUBBLES<span className="text-blue-500">.</span>
                            </span>
                        </Link>
                        <p className="text-gray-400 leading-relaxed">
                            Premium laundry services in Oklahoma City. We take the load off your hands and give you back your time. Professional, clean, and fast.
                        </p>
                        <div className="flex gap-4">
                            {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, index) => (
                                <a key={index} href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all">
                                    <Icon size={16} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-8 border-l-4 border-blue-600 pl-3">Quick Links</h4>
                        <ul className="space-y-4">
                            {footerLinks.map((link) => (
                                <li key={link.name}>
                                    <Link to={link.href} className="text-gray-400 hover:text-blue-400 flex items-center gap-2 group transition-all">
                                        <HiArrowRight className="text-blue-600 group-hover:translate-x-1 transition-transform" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-bold mb-8 border-l-4 border-blue-600 pl-3">Contact Us</h4>
                        <ul className="space-y-5">
                            <li className="flex items-start gap-3">
                                <HiLocationMarker className="text-blue-500 text-2xl mt-1" />
                                <span className="text-gray-400">815 W Britton Rd, Oklahoma City, OK 73114, USA</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <HiPhone className="text-blue-500 text-xl" />
                                <span className="text-gray-400">+1 405-748-8990</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <HiMail className="text-blue-500 text-xl" />
                                <span className="text-gray-400">info@bubbleslaundry.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Map Snippet / Newsletter */}
                    <div>
                        <h4 className="text-lg font-bold mb-8 border-l-4 border-blue-600 pl-3">Newsletter</h4>
                        <p className="text-gray-400 mb-4 text-sm">Subscribe to get special offers and wash-day tips.</p>
                        <div className="relative">
                            <input 
                                type="email" 
                                placeholder="Email Address" 
                                className="w-full bg-gray-800 border border-gray-700 py-3 px-4 rounded-lg focus:outline-none focus:border-blue-500 text-sm"
                            />
                            <button className="absolute right-1 top-1 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md transition-all">
                                Join
                            </button>
                        </div>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">
                        © {currentYear} <span className="text-blue-500 font-semibold">Bubbles Laundromat</span>. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-xs text-gray-500 uppercase tracking-widest font-bold">
                        <span className="hover:text-white cursor-pointer">Support</span>
                        <span className="hover:text-white cursor-pointer">Privacy</span>
                        <span className="hover:text-white cursor-pointer">Help</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;