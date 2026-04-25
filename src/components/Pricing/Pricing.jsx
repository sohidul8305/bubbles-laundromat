import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiCheck, HiOutlineInformationCircle } from 'react-icons/hi';

const Pricing = () => {
    const [activeTab, setActiveTab] = useState('residential');

    const pricingData = {
        residential: [
            {
                plan: "Standard Wash",
                price: "1.25",
                unit: "/ lb",
                desc: "Everyday clothes, cleaned and folded.",
                features: ["Organic Detergent", "Color Protection", "Professional Fold", "24h Turnaround"],
                featured: false
            },
            {
                plan: "Premium Care",
                price: "2.50",
                unit: "/ lb",
                desc: "Extra care for your favorite outfits.",
                features: ["Scent Options", "Stain Pre-treatment", "Sanitized Wash", "Same-Day Service"],
                featured: true
            },
            {
                plan: "Dry Cleaning",
                price: "6.99",
                unit: "/ item",
                desc: "Expert care for delicate garments.",
                features: ["Eco-friendly Solvent", "Expert Pressing", "Hanger Provided", "Quality Check"],
                featured: false
            }
        ],
        commercial: [
            {
                plan: "Hotel & Spa",
                price: "Custom",
                unit: "/ bulk",
                desc: "Bulk linen and towel services.",
                features: ["Bulk Discounts", "High-Volume Wash", "Pickup/Delivery", "Priority Support"],
                featured: true
            },
            {
                plan: "Medical Care",
                price: "Quote",
                unit: "/ contract",
                desc: "Hygienic solutions for clinics.",
                features: ["Deep Sanitization", "Allergen Free", "Compliance Ready", "Secure Packaging"],
                featured: false
            }
        ]
    };

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-5">
                <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400 rounded-full blur-[120px]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <motion.span 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-blue-600 font-black tracking-[0.3em] uppercase text-xs mb-4 block"
                    >
                        Pricing & Plans
                    </motion.span>
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-black text-slate-900 mb-8"
                    >
                        Simple & <span className="text-blue-600">Transparent</span> Costs
                    </motion.h2>

                    {/* Tab Switcher */}
                    <div className="inline-flex bg-slate-100 p-1.5 rounded-2xl mb-12">
                        {['residential', 'commercial'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-8 py-3 rounded-xl font-bold transition-all duration-300 capitalize ${
                                    activeTab === tab ? 'bg-white text-blue-600 shadow-md' : 'text-slate-500 hover:text-slate-800'
                                }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Pricing Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                    <AnimatePresence mode='wait'>
                        {pricingData[activeTab].map((item, index) => (
                            <motion.div
                                key={item.plan}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ delay: index * 0.1 }}
                                className={`relative group p-10 rounded-[3rem] border-2 transition-all duration-500 ${
                                    item.featured 
                                    ? 'bg-blue-600 border-blue-600 text-white shadow-2xl shadow-blue-200 -translate-y-4' 
                                    : 'bg-white border-slate-100 text-slate-900 hover:border-blue-200'
                                }`}
                            >
                                {item.featured && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-slate-900 text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
                                        Best Choice
                                    </div>
                                )}

                                <h3 className="text-2xl font-black mb-2">{item.plan}</h3>
                                <p className={`text-sm mb-8 ${item.featured ? 'text-blue-100' : 'text-slate-500'}`}>
                                    {item.desc}
                                </p>

                                <div className="mb-8">
                                    <span className="text-5xl font-black">{item.price === "Custom" || item.price === "Quote" ? "" : "$"}{item.price}</span>
                                    <span className={`text-lg font-bold ${item.featured ? 'text-blue-100' : 'text-slate-400'}`}>
                                        {item.unit}
                                    </span>
                                </div>

                                <div className={`h-px w-full mb-8 ${item.featured ? 'bg-blue-400/30' : 'bg-slate-100'}`}></div>

                                <ul className="space-y-4 mb-10">
                                    {item.features.map((feature, fIndex) => (
                                        <li key={fIndex} className="flex items-center gap-3 font-semibold text-sm">
                                            <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${item.featured ? 'bg-white text-blue-600' : 'bg-blue-100 text-blue-600'}`}>
                                                <HiCheck className="text-xs" />
                                            </div>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <button className={`w-full py-4 rounded-2xl font-black text-sm transition-all transform active:scale-95 ${
                                    item.featured 
                                    ? 'bg-white text-blue-600 hover:bg-slate-50' 
                                    : 'bg-slate-900 text-white hover:bg-slate-800'
                                }`}>
                                    Order Now
                                </button>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* Oklahoma Trust Info */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-16 flex items-center justify-center gap-2 text-slate-400 text-sm font-medium"
                >
                    <HiOutlineInformationCircle className="text-xl text-blue-500" />
                    <span>Serving 815 W Britton Rd & surrounding Oklahoma City areas.</span>
                </motion.div>
            </div>
        </section>
    );
};

export default Pricing;