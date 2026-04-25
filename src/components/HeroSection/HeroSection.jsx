import React from 'react';
import { motion } from 'framer-motion';
import { HiPhone, HiCalendar } from 'react-icons/hi';
// আপনার ইমেজটি এখানে ইমপোর্ট করা আছে
import clothimage from "../../assets/Fresh Clothes.jpeg"; 

const HeroSection = () => {
    return (
        <section className="relative h-screen w-full overflow-hidden flex items-center">
            
            {/* Background Container */}
            <div className="absolute inset-0 z-0">
                {/* যদি আপনার কাছে ভিডিও থাকে তবে ভিডিও ট্যাগটি আন-কমেন্ট করবেন, 
                    নতুবা নিচের এই ইমেজ ট্যাগটিই প্রিমিয়াম লুক দিবে */}
                <motion.img 
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
                    src={clothimage} 
                    alt="Bubbles Laundromat" 
                    className="w-full h-full object-cover"
                />
                
                {/* Premium Gradient Overlay - এটি টেক্সটকে ক্লিয়ারলি ফুটিয়ে তুলবে */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-900/40 to-black/60"></div>
            </div>

            {/* Content Section */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="max-w-3xl">
                    
                    {/* Status Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-md border border-blue-400/30 text-blue-100 px-4 py-2 rounded-full mb-6"
                    >
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                        </span>
                        <span className="text-xs md:text-sm font-bold tracking-widest uppercase">
                            Open Mon-Sat: 08:00 AM - 09:00 PM
                        </span>
                    </motion.div>

                    {/* Headline */}
                    <motion.h1
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-4xl md:text-7xl font-black text-white leading-[1.1] mb-6"
                    >
                        Fresh Clothes, <br />
                        <span className="text-blue-400">Fresh Life</span> – Oklahoma's Best.
                    </motion.h1>

                    {/* Sub-headline */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="text-base md:text-xl text-gray-200 mb-10 leading-relaxed max-w-xl"
                    >
                        Experience the ultimate laundry care at <span className="text-white font-semibold">Bubbles Laundromat</span>. We handle your garments with professional care and eco-friendly solutions.
                    </motion.p>

                    {/* Action Buttons (CTAs) */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="flex flex-col sm:flex-row gap-4"
                    >
                        <button className="flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-2xl shadow-green-900/20">
                            <HiCalendar className="text-2xl" />
                            Schedule a Pickup
                        </button>
                        
                        <a 
                            href="tel:+14057488990" 
                            className="flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-xl font-bold text-lg transition-all"
                        >
                            <HiPhone className="text-2xl text-blue-400" />
                            +1 405-748-8990
                        </a>
                    </motion.div>

                    {/* Social Trust / Ratings */}
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2 }}
                        className="mt-12 flex items-center gap-4"
                    >
                        <div className="flex -space-x-2">
                            {[1, 2, 3].map((i) => (
                                <img 
                                    key={i}
                                    className="w-10 h-10 rounded-full border-2 border-blue-900" 
                                    src={`https://i.pravatar.cc/150?u=${i}`} 
                                    alt="User" 
                                />
                            ))}
                        </div>
                        <div className="text-sm">
                            <div className="flex text-yellow-400 mb-0.5">
                                ★★★★★
                            </div>
                            <p className="text-gray-300">Trusted by <span className="text-white font-bold">500+</span> Locals</p>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Section Divider - সুন্দরভাবে পরবর্তী সেকশনে যাওয়ার জন্য */}
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-gray-50 to-transparent z-10"></div>
        </section>
    );
};

export default HeroSection;