import React from 'react';
import { motion } from 'framer-motion';
import { HiCheckCircle, HiOutlineShieldCheck, HiOutlineThumbUp } from 'react-icons/hi';
import { GiWashingMachine } from 'react-icons/gi';
import aboutImage from "../../assets/Fresh Clothes.jpeg"; // আপনার আগের ইমেজটি ব্যবহার করা হয়েছে

const WhyChooseUs = () => {
    const features = [
        {
            title: "100% Happiness Guarantee",
            desc: "If you're not satisfied with our service, we will re-wash your clothes for free.",
            icon: <HiOutlineThumbUp className="text-2xl text-blue-600" />
        },
        {
            title: "Eco-Friendly Cleaning",
            desc: "We use biodegradable detergents and energy-efficient machines to protect the planet.",
            icon: <HiOutlineShieldCheck className="text-2xl text-blue-600" />
        },
        {
            title: "Expert Handling",
            desc: "Your delicate fabrics are safe with our trained laundry specialists in Oklahoma.",
            icon: <GiWashingMachine className="text-2xl text-blue-600" />
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    
                    {/* Left Side: Image Content */}
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-1/2 relative"
                    >
                        {/* Floating Badge */}
                        <div className="absolute -top-6 -right-6 z-20 bg-blue-600 text-white p-6 rounded-3xl shadow-2xl hidden md:block">
                            <p className="text-3xl font-black italic">10+</p>
                            <p className="text-xs uppercase font-bold tracking-widest">Years Experience</p>
                        </div>

                        {/* Image Frame */}
                        <div className="relative rounded-[3rem] overflow-hidden shadow-2xl">
                            <img 
                                src={aboutImage} 
                                alt="Modern Laundry Service" 
                                className="w-full h-[500px] object-cover transform hover:scale-110 transition-transform duration-700"
                            />
                            {/* Blue Tint Overlay */}
                            <div className="absolute inset-0 bg-blue-900/10"></div>
                        </div>

                        {/* Background Decoration */}
                        <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-blue-100 rounded-full blur-3xl -z-10 opacity-60"></div>
                    </motion.div>

                    {/* Right Side: Text Content */}
                    <div className="lg:w-1/2">
                        <motion.span 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="text-blue-600 font-black tracking-widest uppercase text-sm"
                        >
                            Why Choose Bubbles
                        </motion.span>
                        
                        <motion.h2 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-5xl font-black text-gray-900 mt-4 mb-8 leading-tight"
                        >
                            We Provide The Best <br />
                            <span className="text-blue-600 font-outline-2">Laundry Experience</span>
                        </motion.h2>

                        <p className="text-gray-500 text-lg mb-10 leading-relaxed">
                            At Bubbles Laundromat, we don't just wash clothes; we care for them. Our state-of-the-art facility in Oklahoma City ensures that your garments receive the highest level of cleanliness and care.
                        </p>

                        {/* Features List */}
                        <div className="space-y-8">
                            {features.map((item, index) => (
                                <motion.div 
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.2 }}
                                    className="flex items-start gap-5 group"
                                >
                                    <div className="flex-shrink-0 w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-gray-800 mb-1">{item.title}</h4>
                                        <p className="text-gray-500">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Stats/Badge */}
                        <motion.div 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="mt-12 p-6 bg-gray-50 rounded-2xl border-l-8 border-blue-600 flex items-center gap-4"
                        >
                            <HiCheckCircle className="text-4xl text-blue-600" />
                            <p className="font-bold text-gray-700">Licensed and Insured Professional Cleaning Business.</p>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;