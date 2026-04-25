import React from 'react';
import { motion } from 'framer-motion';
import { HiOutlineLocationMarker, HiOutlineHashtag } from 'react-icons/hi';

const AboutHero = () => {
    return (
        <section className="relative min-h-[70vh] w-full flex items-center justify-center bg-[#0a0a0b] overflow-hidden pt-20">
            
            {/* --- Background Decorative Elements --- */}
            <div className="absolute inset-0 z-0">
                {/* Large Background Text for Premium Look */}
                <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black text-white/[0.02] uppercase tracking-tighter select-none">
                    Bubbles
                </h2>
                
                {/* Glow Effects */}
                <div className="absolute top-20 left-1/4 w-72 h-72 bg-blue-600/20 rounded-full blur-[120px] animate-pulse"></div>
                <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-[150px]"></div>
            </div>

            <div className="relative z-10 max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 w-full text-center">
                
                {/* Breadcrumb / Small Title */}
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex items-center justify-center gap-3 text-blue-500 font-bold uppercase tracking-[4px] text-sm mb-6"
                >
                    <HiOutlineHashtag className="text-xl" />
                    <span>Est. 2014 in Oklahoma</span>
                </motion.div>

                {/* Main Heading with Gradient Mask */}
                <motion.h1 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-5xl md:text-8xl lg:text-9xl font-black text-white leading-[1] mb-8"
                >
                    We’re More Than <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-200 to-cyan-400">
                        Just Laundry.
                    </span>
                </motion.h1>

                {/* Description Text */}
                <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-gray-400 text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed mb-12"
                >
                    At Bubbles Laundromat, we combine high-tech cleaning with a personal touch to give you back your most valuable asset: **Time.**
                </motion.p>

                {/* Info Pills */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="flex flex-wrap justify-center gap-6 md:gap-12"
                >
                    <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-4 rounded-2xl backdrop-blur-md">
                        <div className="bg-blue-600 p-2 rounded-lg">
                            <HiOutlineLocationMarker className="text-white text-xl" />
                        </div>
                        <div className="text-left">
                            <p className="text-gray-500 text-[10px] uppercase font-bold tracking-widest">Our Location</p>
                            <p className="text-white text-sm font-semibold">815 W Britton Rd, OKC</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-4 rounded-2xl backdrop-blur-md">
                        <div className="bg-cyan-600 p-2 rounded-lg">
                            <HiOutlineHashtag className="text-white text-xl" />
                        </div>
                        <div className="text-left">
                            <p className="text-gray-500 text-[10px] uppercase font-bold tracking-widest">Client Satisfaction</p>
                            <p className="text-white text-sm font-semibold">99.9% Clean Guarantee</p>
                        </div>
                    </div>
                </motion.div>

                {/* Decorative Scroll Indicator */}
                <motion.div 
                    animate={{ y: [0, 15, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="mt-20 flex flex-col items-center gap-2"
                >
                    <div className="w-[2px] h-12 bg-gradient-to-b from-blue-600 to-transparent"></div>
                    <span className="text-gray-600 text-[10px] uppercase tracking-[4px] font-bold">Scroll to Discover</span>
                </motion.div>

            </div>
        </section>
    );
};

export default AboutHero;