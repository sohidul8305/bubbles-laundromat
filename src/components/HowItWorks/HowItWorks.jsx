import React from 'react';
import { motion } from 'framer-motion';
import { HiOutlineDeviceMobile, HiOutlineTruck, HiOutlineSparkles } from 'react-icons/hi';
import { GiWashingMachine } from 'react-icons/gi';

const HowItWorks = () => {
    const steps = [
        {
            id: 1,
            title: "Place Your Order",
            desc: "Book your service via our app or call us. Select a pickup time that fits your schedule.",
            icon: <HiOutlineDeviceMobile className="text-4xl" />,
            color: "bg-blue-500"
        },
        {
            id: 2,
            title: "We Pick Up",
            desc: "Our friendly driver will collect your laundry from your doorstep at 815 W Britton Rd or nearby.",
            icon: <HiOutlineTruck className="text-4xl" />,
            color: "bg-blue-600"
        },
        {
            id: 3,
            title: "Expert Cleaning",
            desc: "We wash, dry, and fold your clothes using premium detergents and high-tech machines.",
            icon: <GiWashingMachine className="text-4xl" />,
            color: "bg-blue-700"
        },
        {
            id: 4,
            title: "Fast Delivery",
            desc: "Fresh, clean, and perfectly folded clothes are delivered back to you within 24 hours.",
            icon: <HiOutlineSparkles className="text-4xl" />,
            color: "bg-blue-800"
        }
    ];

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-50 -translate-y-1/2 hidden lg:block z-0"></div>
            
            <div className="max-w-7xl mx-auto px-4 relative z-10">
                {/* Header */}
                <div className="text-center mb-20">
                    <motion.span 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-blue-600 font-black tracking-[0.3em] uppercase text-xs mb-4 block"
                    >
                        Working Process
                    </motion.span>
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-black text-slate-900"
                    >
                        How We <span className="text-blue-600">Work</span>
                    </motion.h2>
                </div>

                {/* Steps Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            className="relative flex flex-col items-center text-center group"
                        >
                            {/* Step Number Badge */}
                            <div className="absolute -top-4 -right-4 w-12 h-12 bg-white shadow-xl rounded-full flex items-center justify-center font-black text-blue-600 z-20 border border-blue-50">
                                0{step.id}
                            </div>

                            {/* Icon Container */}
                            <div className={`w-24 h-24 ${step.color} text-white rounded-[2.5rem] flex items-center justify-center mb-8 shadow-2xl shadow-blue-200 transform group-hover:rotate-12 transition-all duration-500 relative z-10`}>
                                {step.icon}
                            </div>

                            {/* Text Content */}
                            <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                                {step.title}
                            </h3>
                            <p className="text-slate-500 font-medium leading-relaxed px-4">
                                {step.desc}
                            </p>

                            {/* Connecting Arrow for Desktop (Optional Design Element) */}
                            {index !== steps.length - 1 && (
                                <div className="hidden lg:block absolute top-12 -right-6 text-blue-100 animate-pulse">
                                    <svg width="40" height="20" viewBox="0 0 40 20" fill="none">
                                        <path d="M1 10H39M39 10L30 1M39 10L30 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Call to Action */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-20 text-center"
                >
                    <div className="inline-flex items-center gap-4 bg-slate-50 p-2 pr-6 rounded-full border border-slate-100">
                        <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-xs font-black uppercase">Note</span>
                        <p className="text-sm font-bold text-slate-600 italic">
                            Fastest 24-hour turnaround in Oklahoma City!
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default HowItWorks;