import React from 'react';
import { motion } from 'framer-motion';
import { HiOutlineChip, HiOutlineShieldCheck, HiOutlineBeaker, HiOutlineGlobeAlt } from 'react-icons/hi';

const TechAdvantage = () => {
    const techFeatures = [
        {
            id: 1,
            icon: <HiOutlineBeaker />,
            title: "Eco-Logic Solvents",
            desc: "We use biodegradable, toxin-free detergents that are tough on stains but gentle on skin and fibers.",
            color: "text-green-400",
            bg: "bg-green-400/10"
        },
        {
            id: 2,
            icon: <HiOutlineChip />,
            title: "Smart Cycle AI",
            desc: "Our machines automatically detect fabric weight and type to optimize water and energy consumption.",
            color: "text-blue-400",
            bg: "bg-blue-400/10"
        },
        {
            id: 3,
            icon: <HiOutlineShieldCheck />,
            title: "UV-C Sanitization",
            desc: "Medical-grade UV-C light treatment integrated into every wash to eliminate 99.9% of bacteria and viruses.",
            color: "text-purple-400",
            bg: "bg-purple-400/10"
        },
        {
            id: 4,
            icon: <HiOutlineGlobeAlt />,
            title: "Soft Water Tech",
            desc: "Advanced filtration removes minerals, ensuring clothes stay brighter and feel softer after every wash.",
            color: "text-cyan-400",
            bg: "bg-cyan-400/10"
        }
    ];

    return (
        <section className="py-24 bg-[#0a0a0b] relative overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-600/5 rounded-full blur-[120px]"></div>

            <div className="max-w-[1600px] mx-auto px-6 lg:px-16 relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    
                    {/* Left: Content Area */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-blue-500 font-black uppercase tracking-[5px] text-xs mb-4 block">The Future of Laundry</span>
                        <h2 className="text-4xl md:text-6xl font-black text-white leading-tight mb-8">
                            Better Tech, <br />
                            <span className="text-gray-500 font-light">Superior Results.</span>
                        </h2>
                        <p className="text-gray-400 text-lg mb-10 max-w-lg leading-relaxed">
                            At Bubbles Laundromat, we’ve invested in the latest European garment care technology to ensure your clothes last longer and look newer.
                        </p>
                        
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-4 text-white/80 font-bold">
                                <div className="w-12 h-[1px] bg-blue-600"></div>
                                <span>Advanced Ozone Cleaning</span>
                            </div>
                            <div className="flex items-center gap-4 text-white/80 font-bold">
                                <div className="w-12 h-[1px] bg-cyan-600"></div>
                                <span>Precision Moisture Sensors</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Tech Grid */}
                    <div className="grid sm:grid-cols-2 gap-6">
                        {techFeatures.map((tech, index) => (
                            <motion.div
                                key={tech.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:border-blue-500/30 transition-all group"
                            >
                                <div className={`w-14 h-14 rounded-2xl ${tech.bg} ${tech.color} flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-500`}>
                                    {tech.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                                    {tech.title}
                                </h3>
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    {tech.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default TechAdvantage;