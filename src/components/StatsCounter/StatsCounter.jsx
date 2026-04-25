import React from 'react';
import { motion } from 'framer-motion';
import { HiOutlineUserGroup, HiOutlineSparkles, HiOutlineLocationMarker, HiOutlineEmojiHappy } from 'react-icons/hi';

const StatsCounter = () => {
    const stats = [
        {
            id: 1,
            icon: <HiOutlineUserGroup />,
            value: "5,000",
            suffix: "+",
            label: "Happy Clients",
            desc: "Trusted by OKC Residents"
        },
        {
            id: 2,
            icon: <HiOutlineSparkles />,
            value: "150,000",
            suffix: "+",
            label: "Items Cleaned",
            desc: "Expert Fabric Care"
        },
        {
            id: 3,
            icon: <HiOutlineLocationMarker />,
            value: "10",
            suffix: "+",
            label: "Years Experience",
            desc: "Serving Since 2014"
        },
        {
            id: 4,
            icon: <HiOutlineEmojiHappy />,
            value: "100",
            suffix: "%",
            label: "Quality Guarantee",
            desc: "Pure Satisfaction"
        }
    ];

    return (
        <section className="py-20 bg-[#0a0a0b] relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>

            <div className="max-w-[1600px] mx-auto px-6 lg:px-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="relative group p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:border-blue-500/30 transition-all duration-500"
                        >
                            {/* Icon Wrapper */}
                            <div className="flex items-center justify-between mb-6">
                                <div className="text-4xl text-blue-500 bg-blue-500/10 p-4 rounded-2xl group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white transition-all duration-500">
                                    {stat.icon}
                                </div>
                                <div className="text-xs font-black text-blue-500/20 uppercase tracking-widest select-none">
                                    Stats 0{stat.id}
                                </div>
                            </div>

                            {/* Counter Value */}
                            <div className="flex items-baseline gap-1 mb-2">
                                <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
                                    {stat.value}
                                </h2>
                                <span className="text-3xl font-bold text-blue-500">{stat.suffix}</span>
                            </div>

                            {/* Labels */}
                            <h3 className="text-lg font-bold text-gray-200 mb-1 tracking-wide">
                                {stat.label}
                            </h3>
                            <p className="text-gray-500 text-sm font-medium">
                                {stat.desc}
                            </p>

                            {/* Subtle Glow on Hover */}
                            <div className="absolute -inset-1 bg-blue-600/5 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
            
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
        </section>
    );
};

export default StatsCounter;