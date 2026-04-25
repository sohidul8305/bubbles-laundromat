import React from 'react';
import { motion } from 'framer-motion';
import { HiOutlineHome, HiOutlineInformationCircle } from 'react-icons/hi';

const HouseholdPrices = () => {
    const householdItems = [
        { name: "King / Queen Comforter", price: "$35.00", tag: "Most Popular", desc: "Sanitized and perfectly bagged" },
        { name: "Twin / Full Comforter", price: "$25.00", tag: "Eco-Clean", desc: "Deep cleaning for cozy nights" },
        { name: "Sleeping Bag (Large)", price: "$22.00", tag: "Outdoor Care", desc: "Expert cleaning for adventure gear" },
        { name: "Area Rug (Small)", price: "$18.00", tag: "Fiber Safe", desc: "Delicate treatment for rugs" },
        { name: "Standard Pillows", price: "$10.00", tag: "Fluff Up", desc: "Odour removal and fluffing" },
        { name: "Heavy Curtains", price: "$15.00+", tag: "Refresh", desc: "Dust and allergen removal" },
    ];

    return (
        <section className="py-24 bg-[#0f1115] relative">
            {/* Background Accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.03)_0%,transparent_70%)] pointer-events-none"></div>

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div className="text-left">
                        <motion.div 
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="flex items-center gap-2 text-blue-500 font-black uppercase tracking-[4px] text-xs mb-4"
                        >
                            <HiOutlineHome className="text-lg" />
                            <span>Home Essentials</span>
                        </motion.div>
                        <motion.h2 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-6xl font-black text-white tracking-tighter"
                        >
                            Household <br/> <span className="text-blue-500">Care Rates.</span>
                        </motion.h2>
                    </div>
                    <motion.div 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="flex items-start gap-3 p-4 bg-white/5 border border-white/10 rounded-2xl max-w-sm"
                    >
                        <HiOutlineInformationCircle className="text-blue-500 text-xl flex-shrink-0 mt-1" />
                        <p className="text-gray-500 text-sm leading-snug font-medium">
                            Special handling for oversized items. Prices may vary based on material weight and size.
                        </p>
                    </motion.div>
                </div>

                {/* Pricing Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {householdItems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }}
                            whileHover={{ scale: 1.02 }}
                            className="group relative p-8 bg-white/[0.02] border border-white/5 rounded-[2.5rem] hover:bg-white/[0.04] hover:border-blue-500/30 transition-all duration-500"
                        >
                            <div className="flex justify-between items-start">
                                <div className="space-y-3">
                                    <span className="inline-block px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-[9px] font-black uppercase tracking-widest border border-blue-500/20">
                                        {item.tag}
                                    </span>
                                    <h4 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                                        {item.name}
                                    </h4>
                                    <p className="text-gray-500 text-sm font-medium pr-10">
                                        {item.desc}
                                    </p>
                                </div>
                                <div className="text-right">
                                    <div className="text-3xl font-black text-white tracking-tighter">
                                        {item.price}
                                    </div>
                                    <div className="text-gray-600 text-[10px] font-bold uppercase mt-1">Per Item</div>
                                </div>
                            </div>

                            {/* Animated Underline */}
                            <div className="absolute bottom-0 left-10 right-10 h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </motion.div>
                    ))}
                </div>

                {/* Footer CTA */}
                <div className="mt-16 text-center">
                    <p className="text-gray-500 text-sm font-bold uppercase tracking-[3px] mb-8">
                        Ready to freshen up your home?
                    </p>
                    <a 
                        href="tel:+14057488990" 
                        className="inline-flex items-center gap-3 px-10 py-5 bg-white text-black hover:bg-blue-600 hover:text-white rounded-full font-black text-sm uppercase tracking-widest transition-all duration-300 shadow-xl"
                    >
                        Call Bubbles Now
                    </a>
                </div>
            </div>
        </section>
    );
};

export default HouseholdPrices;