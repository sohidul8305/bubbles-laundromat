import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiPhone, HiLocationMarker, HiClock, HiOutlineMail, HiArrowRight } from 'react-icons/hi';
import { FaFacebookF, FaInstagram, FaGoogle } from 'react-icons/fa';

const Contacts = () => {
    // পেজ লোড হলে অটোমেটিক স্ক্রল টপ হবে
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className="min-h-screen py-16 md:py-24 bg-white relative overflow-hidden">
            
            {/* Background Luxury Elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50/40 rounded-full blur-[140px] -z-10"></div>
            <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-indigo-50/30 rounded-full blur-[120px] -z-10"></div>

            <div className="max-w-[1400px] mx-auto px-6">
                
                {/* 1. Page Title Section */}
                <div className="max-w-3xl mb-20 md:mb-28">
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-4 mb-6"
                    >
                        <span className="w-16 h-[2px] bg-blue-600"></span>
                        <span className="text-blue-600 font-black uppercase tracking-[6px] text-[10px]">Connect With Us</span>
                    </motion.div>
                    
                    <motion.h1 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-6xl md:text-[110px] font-black text-slate-900 tracking-tighter leading-[0.85] mb-8"
                    >
                        Fresh Help <br /> 
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500 italic">Is Here.</span>
                    </motion.h1>
                    
                    <p className="text-slate-500 text-lg md:text-xl font-medium max-w-xl leading-relaxed">
                        Have a special request or a large load? Our Oklahoma City team is ready to provide elite garment care.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-16 lg:gap-32">
                    
                    {/* 2. Left: Modern Contact Form */}
                    <div className="lg:w-1/2 order-2 lg:order-1">
                        <motion.div 
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="bg-white border border-slate-100 p-10 md:p-14 rounded-[3.5rem] shadow-[0_30px_100px_rgba(0,0,0,0.04)] relative"
                        >
                            <h3 className="text-2xl font-black text-slate-900 mb-10 tracking-tight">Send a message</h3>
                            
                            <form className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Full Name</label>
                                        <input type="text" placeholder="John Doe" className="w-full h-16 px-8 bg-slate-50 rounded-2xl border-none focus:ring-2 focus:ring-blue-600/20 focus:bg-white outline-none transition-all font-medium" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Email</label>
                                        <input type="email" placeholder="john@example.com" className="w-full h-16 px-8 bg-slate-50 rounded-2xl border-none focus:ring-2 focus:ring-blue-600/20 focus:bg-white outline-none transition-all font-medium" />
                                    </div>
                                </div>
                                
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Message</label>
                                    <textarea rows="4" placeholder="How can we assist you?" className="w-full p-8 bg-slate-50 rounded-3xl border-none focus:ring-2 focus:ring-blue-600/20 focus:bg-white outline-none transition-all font-medium resize-none"></textarea>
                                </div>

                                <motion.button 
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full h-16 bg-slate-900 hover:bg-blue-600 text-white rounded-2xl font-black uppercase tracking-[3px] text-xs transition-all duration-500 shadow-xl"
                                >
                                    Submit Request
                                </motion.button>
                            </form>
                        </motion.div>

                        {/* Contact Quick Info */}
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-16">
                            {[
                                { icon: <HiPhone />, label: "Call Us", val: "+1 405-748-8990" },
                                { icon: <HiOutlineMail />, label: "Email", val: "hi@bubblesokc.com" },
                                { icon: <HiClock />, label: "Hours", val: "08 AM - 09 PM" },
                            ].map((item, i) => (
                                <div key={i} className="group">
                                    <div className="w-12 h-12 bg-slate-50 text-slate-400 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                                        {item.icon}
                                    </div>
                                    <p className="text-[9px] font-black uppercase text-slate-400 tracking-widest mb-1">{item.label}</p>
                                    <p className="text-slate-900 font-bold text-sm leading-tight">{item.val}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* 3. Right: Map & Location Details */}
                    <div className="lg:w-1/2 order-1 lg:order-2">
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="relative h-[550px] lg:h-full min-h-[550px] rounded-[4rem] overflow-hidden border-[1px] border-slate-100 shadow-2xl"
                        >
                            {/* Google Map Embed */}
                            <iframe 
                                title="Bubbles Location"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3243.6667!2d-97.5303!3d35.5658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87b210a4!2s815%20W%20Britton%20Rd%2C%20OKC%2C%20OK!5e0!3m2!1sen!2sus!4v1"
                                width="100%" 
                                height="100%" 
                                style={{ border: 0, filter: 'contrast(1.1) brightness(1)' }} 
                                allowFullScreen="" 
                                loading="lazy"
                            ></iframe>

                            {/* Floating Glassmorphism Location Card */}
                            <div className="absolute bottom-10 left-10 right-10 bg-white/80 backdrop-blur-2xl p-10 rounded-[3rem] shadow-2xl border border-white/50">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
                                    <span className="text-[10px] font-black uppercase tracking-[4px] text-blue-600">Active Location</span>
                                </div>
                                <h3 className="text-3xl font-black text-slate-900 mb-3 tracking-tighter">Bubbles Laundromat</h3>
                                <p className="text-slate-500 font-medium text-base mb-8">815 W Britton Rd, <br />Oklahoma City, OK 73114</p>
                                
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <a 
                                        href="tel:+14057488990" 
                                        className="flex-1 h-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center font-black text-[10px] uppercase tracking-widest hover:bg-slate-900 transition-all"
                                    >
                                        Call Store
                                    </a>
                                    <a 
                                        href="#" 
                                        className="flex-1 h-14 bg-white border border-slate-200 text-slate-900 rounded-2xl flex items-center justify-center font-black text-[10px] uppercase tracking-widest hover:border-blue-600 transition-all"
                                    >
                                        Directions
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contacts;