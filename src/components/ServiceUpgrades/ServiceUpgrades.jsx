import React from 'react';
import { motion } from 'framer-motion';
import { HiOutlineLightningBolt, HiOutlineBeaker, HiOutlineShieldCheck, HiOutlineSparkles } from 'react-icons/hi';

const ServiceUpgrades = () => {
    const upgrades = [
        {
            icon: <HiOutlineLightningBolt />,
            title: "Rush Priority",
            price: "+$10.00",
            desc: "Need it now? Get your laundry washed, dried, and folded in under 6 hours.",
            tag: "Express"
        },
        {
            icon: <HiOutlineBeaker />,
            title: "Scent Infusion",
            price: "+$2.50",
            desc: "Premium essential oil blends to give your clothes a long-lasting luxury fragrance.",
            tag: "Premium"
        },
        {
            icon: <HiOutlineShieldCheck />,
            title: "Stain Specialist",
            price: "+$5.00",
            desc: "Deep chemical treatment for tough grease, wine, or ink stains on delicate fabrics.",
            tag: "Elite"
        },
        {
            icon: <HiOutlineSparkles />,
            title: "Sanitize Plus",
            price: "+$3.00",
            desc: "High-temperature medical grade sanitization to kill 99.9% of bacteria.",
            tag: "Healthy"
        }
    ];

    return (
        /* ব্যাকগ্রাউন্ড Deep Obsidian Blue (#0a0c10) যা সাদার চেয়ে অনেক বেশি প্রিমিয়াম */
        <section className="py-24 bg-[#0a0c10] relative overflow-hidden">
            
            {/* Background Aesthetic - Metallic Glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[150px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-indigo-500/5 blur-[100px] rounded-full pointer-events-none"></div>

            <div className="max-w-[1400px] mx-auto px-6 relative z-10">
                
                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
                    <div className="max-w-2xl">
                        <motion.div 
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="text-blue-500 font-black uppercase tracking-[6px] text-[10px] mb-4"
                        >
                            Exquisite Enhancements
                        </motion.div>
                        <motion.h2 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-7xl font-black text-white tracking-tighter leading-none"
                        >
                            Elevate Your <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">Garment Care.</span>
                        </motion.h2>
                    </div>
                    <p className="text-gray-500 font-medium max-w-[300px] text-sm md:text-right border-l md:border-l-0 md:border-r border-blue-500/30 px-6">
                        Add these professional touches to any of our standard cleaning plans.
                    </p>
                </div>

                {/* Upgrades Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {upgrades.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="group p-8 bg-white/[0.02] border border-white/5 rounded-[2.5rem] hover:bg-white/[0.05] hover:border-blue-500/30 transition-all duration-500"
                        >
                            {/* Icon & Tag */}
                            <div className="flex justify-between items-start mb-10">
                                <div className="w-14 h-14 bg-gradient-to-br from-blue-600/20 to-indigo-600/20 rounded-2xl flex items-center justify-center text-2xl text-blue-400 border border-blue-500/20 group-hover:scale-110 transition-transform">
                                    {item.icon}
                                </div>
                                <span className="text-[9px] font-black uppercase tracking-widest text-blue-500/60 group-hover:text-blue-400">
                                    {item.tag}
                                </span>
                            </div>

                            {/* Content */}
                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                                {item.title}
                            </h3>
                            <p className="text-gray-500 text-sm leading-relaxed mb-8">
                                {item.desc}
                            </p>

                            {/* Price Badge */}
                            <div className="inline-block px-5 py-2 bg-white/5 border border-white/10 rounded-full text-white font-black text-xs tracking-widest group-hover:bg-blue-600 group-hover:border-blue-600 transition-all">
                                {item.price}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Final Call to Action */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-20 text-center"
                >
                    <a 
                        href="tel:+14057488990" 
                        className="group relative inline-flex items-center gap-4 text-white font-black uppercase tracking-[4px] text-xs py-4 px-2"
                    >
                        <span className="w-2 h-2 bg-blue-500 rounded-full animate-ping"></span>
                        Ready to upgrade? Call Bubbles
                        <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-500 group-hover:w-full transition-all duration-500"></div>
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default ServiceUpgrades;