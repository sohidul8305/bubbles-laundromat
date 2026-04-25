import React from 'react';
import { motion } from 'framer-motion';
import { HiOutlineColorSwatch, HiOutlineSparkles, HiOutlineTruck } from 'react-icons/hi';

const WorkProcess = () => {
    const steps = [
        {
            id: "01",
            icon: <HiOutlineColorSwatch />,
            title: "Sort & Treat",
            desc: "We meticulously sort your fabrics by color and material, applying specialized stain treatments where needed.",
            accent: "blue"
        },
        {
            id: "02",
            icon: <HiOutlineSparkles />,
            title: "Eco-Friendly Wash",
            desc: "Using premium, allergy-safe detergents and state-of-the-art machines to revitalize every fiber.",
            accent: "cyan"
        },
        {
            id: "03",
            icon: <HiOutlineTruck />,
            title: "Ready to Wear",
            desc: "Crisply folded, plastic-wrapped, and ready for pickup at our Britton Rd location in under 24 hours.",
            accent: "indigo"
        }
    ];

    return (
        /* ব্যাকগ্রাউন্ড পিওর হোয়াইট (bg-white) যা ফ্রেশনেস ফিল দিবে */
        <section className="py-28 bg-white relative overflow-hidden">
            
            {/* Background Decorative Patterns */}
            <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
                <svg width="100%" height="100%"><pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="black" strokeWidth="1"/></pattern><rect width="100%" height="100%" fill="url(#grid)" /></svg>
            </div>

            <div className="max-w-[1400px] mx-auto px-6 relative z-10">
                
                {/* Section Header */}
                <div className="text-center mb-24">
                    <motion.span 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-blue-600 font-black uppercase tracking-[6px] text-[10px] mb-4 block"
                    >
                        Our Seamless Flow
                    </motion.span>
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-8xl font-black text-slate-900 tracking-tighter"
                    >
                        The <span className="text-blue-600 italic">Bubbles</span> Way.
                    </motion.h2>
                </div>

                {/* Process Steps */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative">
                    
                    {/* কানেক্টিং ডটেড লাইন (শুধুমাত্র ডেস্কটপে দেখাবে) */}
                    <div className="hidden md:block absolute top-1/4 left-[10%] right-[10%] h-[2px] border-t-2 border-dashed border-slate-100 -z-0"></div>

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2, duration: 0.8 }}
                            className="relative group text-center"
                        >
                            {/* Step Number Overlay */}
                            <span className="absolute -top-12 left-1/2 -translate-x-1/2 text-9xl font-black text-slate-50 group-hover:text-blue-50 transition-colors duration-700 pointer-events-none -z-10">
                                {step.id}
                            </span>

                            {/* Icon Container with Floating Animation */}
                            <motion.div 
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 }}
                                className="w-24 h-24 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-50 rounded-[2rem] flex items-center justify-center text-4xl text-blue-600 mx-auto mb-10 group-hover:shadow-blue-200 transition-all"
                            >
                                {step.icon}
                            </motion.div>

                            <h3 className="text-2xl font-black text-slate-900 mb-5 tracking-tight uppercase">
                                {step.title}
                            </h3>
                            
                            <p className="text-slate-500 font-medium leading-relaxed px-4 text-sm md:text-base">
                                {step.desc}
                            </p>

                            {/* Status Indicator */}
                            <div className="mt-8 flex justify-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                <div className="w-1 h-1 bg-blue-600 rounded-full"></div>
                                <div className="w-4 h-1 bg-blue-600 rounded-full"></div>
                                <div className="w-1 h-1 bg-blue-600 rounded-full"></div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Call to Action Mini-Banner */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="mt-28 p-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[2.5rem] shadow-2xl shadow-blue-200"
                >
                    <div className="bg-white rounded-[2.4rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="text-center md:text-left">
                            <h4 className="text-2xl font-black text-slate-900 tracking-tight mb-2">Ready to save time?</h4>
                            <p className="text-slate-500 font-medium">Drop off your first bag today at Britton Rd.</p>
                        </div>
                        <div className="flex gap-4">
                            <a href="tel:+14057488990" className="px-10 py-5 bg-slate-900 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-blue-600 transition-all shadow-xl active:scale-95">
                                Call Now
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default WorkProcess;