import React from 'react';
import { motion } from 'framer-motion';
import { HiOutlineCheck, HiOutlinePhone } from 'react-icons/hi';

const ServicePricing = () => {
    const pricingPlans = [
        {
            title: "Wash & Fold",
            price: "$1.75",
            unit: "/ lb",
            description: "Perfect for your weekly laundry needs.",
            features: ["Minimum 10 lbs", "Next-Day Delivery", "Eco-Safe Detergents", "Professional Folding"],
            isPopular: true
        },
        {
            title: "Dry Cleaning",
            price: "$6.50",
            unit: "/ item",
            description: "Deep care for your delicate garments.",
            features: ["Stain Treatment", "Fabric Softening", "Premium Hangers", "Odor Removal"],
            isPopular: false
        },
        {
            title: "Commercial",
            price: "Custom",
            unit: "",
            description: "Bulk solutions for hotels and spas.",
            features: ["Priority Pickup", "Flexible Billing", "Dedicated Manager", "Sanitization Focus"],
            isPopular: false
        }
    ];

    return (
        <section className="py-24 bg-[#0a0a0b] relative overflow-hidden">
            {/* Background Accent Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-[1600px] mx-auto px-6 lg:px-16 relative z-10">
                {/* Heading */}
                <div className="text-center mb-16">
                    <motion.h4 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-blue-500 font-bold uppercase tracking-[4px] text-sm mb-4"
                    >
                        Pricing Plans
                    </motion.h4>
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-black text-white"
                    >
                        Transparent <span className="text-gray-500">Rates.</span>
                    </motion.h2>
                </div>

                {/* Pricing Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {pricingPlans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className={`relative p-10 rounded-[3rem] border transition-all duration-500 ${
                                plan.isPopular 
                                ? "bg-white/[0.05] border-blue-500/50 shadow-2xl shadow-blue-900/10" 
                                : "bg-white/[0.02] border-white/5 hover:border-white/20"
                            }`}
                        >
                            {plan.isPopular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest">
                                    Most Popular
                                </div>
                            )}

                            <h3 className="text-2xl font-bold text-white mb-2">{plan.title}</h3>
                            <p className="text-gray-500 text-sm mb-8">{plan.description}</p>

                            <div className="flex items-baseline gap-1 mb-8">
                                <span className="text-5xl font-black text-white">{plan.price}</span>
                                <span className="text-gray-500 font-medium">{plan.unit}</span>
                            </div>

                            <ul className="space-y-4 mb-10">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center gap-3 text-gray-400 group">
                                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-500/10 flex items-center justify-center">
                                            <HiOutlineCheck className="text-blue-500 text-sm" />
                                        </div>
                                        <span className="text-sm group-hover:text-gray-200 transition-colors">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <a 
                                href="tel:+14057488990"
                                className={`w-full py-4 rounded-2xl font-black flex items-center justify-center gap-2 transition-all ${
                                    plan.isPopular 
                                    ? "bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/20" 
                                    : "bg-white/5 hover:bg-white/10 text-white border border-white/10"
                                }`}
                            >
                                <HiOutlinePhone className="text-xl" />
                                <span>Book Now</span>
                            </a>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Trust Note */}
                <motion.p 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-center text-gray-500 text-sm mt-12 italic"
                >
                    * Pricing may vary based on material sensitivity and specific stains. Call for a detailed quote.
                </motion.p>
            </div>
        </section>
    );
};

export default ServicePricing;