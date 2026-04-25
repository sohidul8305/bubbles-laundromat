import React from 'react';
import { motion } from 'framer-motion';
import { HiOutlinePhone, HiOutlineArrowNarrowRight } from 'react-icons/hi';

const ServiceHero = () => {
    return (
        <section className="relative w-full h-[70vh] md:h-[85vh] flex items-center justify-center overflow-hidden bg-[#0a0a0b]">
            
            {/* --- Motion Video / Background Section --- */}
            <div className="absolute inset-0 z-0">
                {/* আপনি এখানে আপনার লন্ড্রি প্রসেস ভিডিওর লিঙ্ক দিতে পারেন */}
                <video 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    className="w-full h-full object-cover opacity-40"
                >
                    <source src="https://cdn.pixabay.com/video/2021/08/03/83726-585350918_tiny.mp4" type="video/mp4" />
                </video>
                {/* Gradient Overlay for Premium Look */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0b]/80 via-transparent to-[#0a0a0b]"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0b] via-transparent to-[#0a0a0b]/60"></div>
            </div>

            {/* --- Content Section --- */}
            <div className="relative z-10 max-w-[1600px] mx-auto px-6 lg:px-16 w-full">
                <div className="max-w-4xl">
                    
                    {/* Small Badge */}
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex items-center gap-2 bg-blue-600/10 border border-blue-500/20 text-blue-400 px-4 py-2 rounded-full w-fit mb-6"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                        </span>
                        <span className="text-xs font-bold uppercase tracking-widest">Our Expert Services</span>
                    </motion.div>

                    {/* Main Heading */}
                    <motion.h1 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-5xl md:text-8xl font-black text-white leading-[0.9] mb-8"
                    >
                        Premium Care <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-600">
                            For Every Fabric.
                        </span>
                    </motion.h1>

                    {/* Description */}
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed mb-10"
                    >
                        From daily wear to delicate silks, we provide the finest laundromat experience in **Oklahoma City**. Professional, Eco-friendly, and always on time.
                    </motion.p>

                    {/* Buttons / CTA */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-wrap gap-5"
                    >
                        {/* Call Now Button */}
                        <a 
                            href="tel:+14057488990" 
                            className="group flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-5 rounded-2xl font-black transition-all shadow-xl shadow-blue-900/20"
                        >
                            <HiOutlinePhone className="text-2xl group-hover:rotate-12 transition-transform" />
                            <span>Call +1 405-748-8990</span>
                        </a>

                        {/* Secondary Button */}
                        <button className="group flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-5 rounded-2xl font-bold transition-all backdrop-blur-md">
                            <span>Explore Services</span>
                            <HiOutlineArrowNarrowRight className="text-xl group-hover:translate-x-2 transition-transform" />
                        </button>
                    </motion.div>

                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute bottom-10 left-16 hidden lg:block">
                <div className="flex items-center gap-4 text-white/20">
                    <span className="text-sm font-bold tracking-[5px] uppercase rotate-90 origin-left">Bubbles</span>
                    <div className="w-[1px] h-24 bg-white/10"></div>
                </div>
            </div>

        </section>
    );
};

export default ServiceHero;