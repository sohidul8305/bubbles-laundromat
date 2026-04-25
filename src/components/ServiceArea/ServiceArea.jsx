import React from 'react';
import { motion } from 'framer-motion';
import { HiOutlineMap, HiOutlineCheckCircle, HiOutlineTruck } from 'react-icons/hi';

const ServiceArea = () => {
    // Oklahoma City-র প্রমিনেন্ট এরিয়াগুলো এখানে দেওয়া হয়েছে SEO-র জন্য
    const locations = [
        "The Village", "Nichols Hills", "Edmond", "Casady Square", 
        "Quail Creek", "Northwest Oklahoma City", "Bethany", "Warr Acres"
    ];

    return (
        <section className="py-24 bg-[#0a0a0b] relative overflow-hidden">
            {/* Background Decorative Gradient */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[150px] -mr-40 -mt-40"></div>

            <div className="max-w-[1600px] mx-auto px-6 lg:px-16 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    
                    {/* --- Left Side: Content --- */}
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center gap-3 text-blue-500 font-bold uppercase tracking-[4px] text-sm mb-6">
                            <HiOutlineTruck className="text-2xl" />
                            <span>Pickup & Delivery</span>
                        </div>
                        
                        <h2 className="text-4xl md:text-6xl font-black text-white leading-tight mb-8">
                            Serving the Heart of <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Oklahoma City.</span>
                        </h2>
                        
                        <p className="text-gray-400 text-lg mb-10 max-w-xl">
                            We bring premium garment care to your doorstep. Based at **815 W Britton Rd**, we offer free pickup and delivery across major OKC neighborhoods.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {locations.map((loc, index) => (
                                <motion.div 
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex items-center gap-3 bg-white/5 border border-white/10 p-4 rounded-2xl hover:border-blue-500/40 transition-colors group"
                                >
                                    <HiOutlineCheckCircle className="text-blue-500 text-xl group-hover:scale-110 transition-transform" />
                                    <span className="text-gray-300 font-medium">{loc}</span>
                                </motion.div>
                            ))}
                        </div>

                        <div className="mt-12">
                            <a 
                                href="tel:+14057488990" 
                                className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-2xl font-black transition-all shadow-xl shadow-blue-900/20"
                            >
                                <HiOutlineMap />
                                Check Your Zip Code
                            </a>
                        </div>
                    </motion.div>

                    {/* --- Right Side: Visual Map Representation --- */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        {/* Abstract Map UI Card */}
                        <div className="relative z-10 bg-white/5 border border-white/10 p-4 rounded-[3rem] backdrop-blur-sm overflow-hidden shadow-2xl">
                            <div className="aspect-square bg-[#111113] rounded-[2.5rem] relative overflow-hidden flex items-center justify-center border border-white/5">
                                {/* SVG Map Placeholder - OKC Area Illustration */}
                                <svg viewBox="0 0 200 200" className="w-full h-full opacity-30">
                                    <path d="M40 40 L160 40 L160 160 L40 160 Z" fill="none" stroke="white" strokeWidth="0.5" strokeDasharray="4 4" />
                                    <circle cx="100" cy="100" r="40" fill="none" stroke="#2563eb" strokeWidth="1" />
                                    <circle cx="100" cy="100" r="60" fill="none" stroke="#2563eb" strokeWidth="0.5" strokeDasharray="2 2" />
                                </svg>

                                {/* Pulse Effect on Store Location */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                                    <span className="relative flex h-6 w-6">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-6 w-6 bg-blue-600 border-2 border-white"></span>
                                    </span>
                                    <div className="mt-3 bg-white text-black text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-tighter shadow-lg">
                                        Britton Rd Center
                                    </div>
                                </div>

                                {/* Floating Tags */}
                                <div className="absolute top-1/4 right-1/4 animate-bounce bg-blue-500/20 text-blue-400 text-[10px] p-2 rounded-lg backdrop-blur-md border border-blue-500/20">Edmond</div>
                                <div className="absolute bottom-1/4 left-1/4 animate-pulse bg-cyan-500/20 text-cyan-400 text-[10px] p-2 rounded-lg backdrop-blur-md border border-cyan-500/20">The Village</div>
                            </div>
                        </div>

                        {/* Floating Stats over Map */}
                        <div className="absolute -bottom-6 -left-6 bg-white/10 border border-white/20 backdrop-blur-xl p-6 rounded-3xl z-20 hidden md:block">
                            <h4 className="text-white font-bold text-2xl">10 Miles</h4>
                            <p className="text-gray-400 text-xs uppercase tracking-widest font-bold">Free Delivery Radius</p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default ServiceArea;