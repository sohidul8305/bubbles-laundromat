import React from 'react';
import { motion } from 'framer-motion';
import { HiOutlineBadgeCheck, HiOutlineSparkles } from 'react-icons/hi';

const PriceHero = () => {
    return (
        <section className="relative w-full pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden bg-[#0f1115]">
            
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 blur-[120px] rounded-full animate-pulse"></div>
                <div className="absolute bottom-0 right-0 w-[40%] h-[40%] bg-cyan-500/5 blur-[100px] rounded-full"></div>
            </div>

            <div className="max-w-[1600px] mx-auto px-6 lg:px-16 relative z-10 text-center">
                
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-[3px] mb-8"
                >
                    <HiOutlineSparkles className="text-sm" />
                    <span>Premium Garment Care</span>
                </motion.div>

                {/* ২. মেইন টাইটেল - বড় এবং বোল্ড */}
                <motion.h1 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-[0.9] mb-8"
                >
                    Simple Rates. <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
                        Zero Hidden Fees.
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl font-medium leading-relaxed mb-12"
                >
                    At Bubbles Laundromat, we believe in transparent pricing. From daily wear to delicate dry cleaning, we provide the best rates in Oklahoma City.
                </motion.p>

                {/* ৪. ট্রাস্ট ফিচারস (Trust Badges) */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="flex flex-wrap justify-center gap-6 md:gap-12 pt-8 border-t border-white/5"
                >
                    <div className="flex items-center gap-2 text-gray-500">
                        <HiOutlineBadgeCheck className="text-blue-500 text-xl" />
                        <span className="text-xs font-bold uppercase tracking-widest">No Hidden Charges</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500">
                        <HiOutlineBadgeCheck className="text-blue-500 text-xl" />
                        <span className="text-xs font-bold uppercase tracking-widest">Eco-Friendly Cleaning</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500">
                        <HiOutlineBadgeCheck className="text-blue-500 text-xl" />
                        <span className="text-xs font-bold uppercase tracking-widest">OKC Licensed</span>
                    </div>
                </motion.div>

            </div>

            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        </section>
    );
};

export default PriceHero;