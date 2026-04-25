import React from 'react';
import { motion } from 'framer-motion';
import { HiOutlineSearch, HiOutlineLightningBolt } from 'react-icons/hi';

const FAQSearch = () => {
    return (
        <section className="relative w-full py-10 bg-white">
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                
                {/* Search Container */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="relative group"
                >
                    {/* Input Field */}
                    <div className="relative flex items-center">
                        <HiOutlineSearch className="absolute left-8 text-2xl text-slate-400 group-focus-within:text-blue-600 transition-colors duration-300" />
                        <input 
                            type="text" 
                            placeholder="Search for answers (e.g. turnaround time, pricing...)"
                            className="w-full h-20 pl-20 pr-8 bg-slate-50 border border-slate-100 rounded-[2.5rem] text-slate-900 font-medium placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-blue-500 focus:shadow-[0_20px_50px_rgba(59,130,246,0.1)] transition-all duration-500"
                        />
                        
                        {/* Instant Help Tag (Desktop Only) */}
                        <div className="hidden md:flex absolute right-6 items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-lg shadow-blue-200">
                            <HiOutlineLightningBolt className="text-sm" />
                            <span>Quick Find</span>
                        </div>
                    </div>

                    {/* Popular Tags Under Search */}
                    <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 mr-2">Popular:</span>
                        {['Pricing', 'Pickup', 'Timing', 'Eco-Soap'].map((tag, i) => (
                            <motion.button
                                key={i}
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-5 py-2 bg-white border border-slate-100 rounded-full text-xs font-bold text-slate-600 hover:text-blue-600 hover:border-blue-200 hover:shadow-sm transition-all"
                            >
                                {tag}
                            </motion.button>
                        ))}
                    </div>
                </motion.div>

                {/* Subtle Decorative Background Element */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.02)_0%,transparent_70%)] pointer-events-none"></div>
            </div>
        </section>
    );
};

export default FAQSearch;