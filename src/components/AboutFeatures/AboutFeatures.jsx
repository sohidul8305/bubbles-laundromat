import React from 'react';
import { motion } from 'framer-motion';
import { 
    HiOutlineSparkles, 
    HiOutlineShieldCheck, 
    HiOutlineTruck, 
    HiOutlineClock,
    HiOutlineCurrencyDollar,
    HiOutlineHeart
} from 'react-icons/hi';

const AboutFeatures = () => {
    const features = [
        {
            id: 1,
            icon: <HiOutlineSparkles />,
            title: "Premium Cleaning",
            desc: "Using eco-friendly detergents and advanced technology to give your clothes a spa-like treatment.",
            gradient: "from-blue-500 to-cyan-400"
        },
        {
            id: 2,
            icon: <HiOutlineShieldCheck />,
            title: "Hygienic Process",
            desc: "100% sanitized machines and specialized handling for a germ-free laundry experience.",
            gradient: "from-purple-500 to-blue-500"
        },
        {
            id: 3,
            icon: <HiOutlineTruck />,
            title: "Pickup & Delivery",
            desc: "Busy schedule? We collect your laundry from 815 W Britton Rd and deliver it fresh in OKC.",
            gradient: "from-blue-600 to-indigo-600"
        },
        {
            id: 4,
            icon: <HiOutlineClock />,
            title: "24-Hour Turnaround",
            desc: "Fast and reliable service because we know your time is as precious as your clothes.",
            gradient: "from-cyan-500 to-blue-500"
        },
        {
            id: 5,
            icon: <HiOutlineCurrencyDollar />,
            title: "Affordable Pricing",
            desc: "Premium quality doesn't have to be expensive. Enjoy top-tier service at local OKC rates.",
            gradient: "from-blue-400 to-emerald-400"
        },
        {
            id: 6,
            icon: <HiOutlineHeart />,
            title: "Handled with Care",
            desc: "Every garment is inspected and treated with professional expertise before washing.",
            gradient: "from-rose-400 to-blue-500"
        }
    ];

    return (
        <section className="relative py-24 bg-[#0a0a0b] overflow-hidden">
            {/* Background Decorative Circles */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] -z-10"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-600/5 rounded-full blur-[100px] -z-10"></div>

            <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
                            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Bubbles?</span>
                        </h2>
                        <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full mb-6"></div>
                        <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                            Discover the difference professional care makes. We combine modern technology with local Oklahoma hospitality to give your clothes the best.
                        </p>
                    </motion.div>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-12">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -12 }}
                            className="group relative bg-white/5 border border-white/10 p-10 rounded-[2.5rem] backdrop-blur-xl transition-all duration-500 hover:bg-white/[0.08] hover:border-blue-500/50 shadow-2xl overflow-hidden"
                        >
                            {/* Animated Background Gradient on Hover */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>

                            <div className="relative z-10">
                                {/* Icon Container */}
                                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-3xl text-white mb-8 shadow-lg transform group-hover:rotate-6 transition-transform duration-500`}>
                                    {feature.icon}
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                                    {feature.title}
                                </h3>

                                <p className="text-gray-400 leading-relaxed text-md">
                                    {feature.desc}
                                </p>
                            </div>

                            {/* Small Decorative Element */}
                            <div className="absolute top-6 right-8 text-white/5 text-6xl font-black select-none transition-opacity duration-500">
                                0{feature.id}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA within Features */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-20 text-center"
                >
                    <p className="text-gray-500 mb-6 italic text-lg">"Ready for a cleaner tomorrow?"</p>
                    <a 
                        href="tel:+14057488990"
                        className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-2xl font-black text-xl transition-all shadow-xl shadow-blue-900/40"
                    >
                        Schedule a Pickup Now
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutFeatures;