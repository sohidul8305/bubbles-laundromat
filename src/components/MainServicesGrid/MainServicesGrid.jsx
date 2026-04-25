import React from 'react';
import { motion } from 'framer-motion';
import { 
    HiOutlineSparkles, 
    HiOutlineSun, 
    HiOutlineVariable, 
    HiOutlineOfficeBuilding 
} from 'react-icons/hi';

const MainServicesGrid = () => {
    const services = [
        {
            id: 1,
            title: "Wash & Fold",
            desc: "Expert cleaning and precise folding for your daily apparel. We treat every garment like it's our own.",
            icon: <HiOutlineSparkles />,
            tag: "Most Popular",
            gradient: "from-blue-600 to-cyan-500"
        },
        {
            id: 2,
            title: "Dry Cleaning",
            desc: "Premium care for suits, silks, and delicate fabrics. Tough on stains, gentle on textures.",
            icon: <HiOutlineSun />,
            tag: "Premium Care",
            gradient: "from-purple-600 to-indigo-500"
        },
        {
            id: 3,
            title: "Steam Pressing",
            desc: "Crisp, wrinkle-free finishing using advanced steam technology. Look your best every single day.",
            icon: <HiOutlineVariable />,
            tag: "Fast Finish",
            gradient: "from-cyan-600 to-blue-500"
        },
        {
            id: 4,
            title: "Commercial",
            desc: "Bulk laundry solutions for hotels, gyms, and spas across Oklahoma City. Reliable & Scalable.",
            icon: <HiOutlineOfficeBuilding />,
            tag: "B2B Solutions",
            gradient: "from-blue-700 to-indigo-600"
        }
    ];

    return (
        <section className="py-24 bg-[#0a0a0b] relative overflow-hidden">
            {/* Background Accents */}
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]"></div>
            
            <div className="max-w-[1600px] mx-auto px-6 lg:px-16 relative z-10">
                {/* Section Heading */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div className="max-w-2xl">
                        <motion.h4 
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-blue-500 font-black uppercase tracking-[4px] text-sm mb-4"
                        >
                            Our Expertise
                        </motion.h4>
                        <motion.h2 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-6xl font-black text-white leading-tight"
                        >
                            Tailored Care for <br />
                            <span className="text-gray-500">All Your Fabrics.</span>
                        </motion.h2>
                    </div>
                    <motion.p 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-gray-500 md:max-w-xs text-lg"
                    >
                        From everyday wear to heavy commercial loads, we deliver perfection.
                    </motion.p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="group relative bg-white/[0.03] border border-white/5 p-8 rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:bg-white/[0.07] hover:border-blue-500/40"
                        >
                            {/* Gradient Glow on Hover */}
                            <div className={`absolute -inset-1 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500`}></div>

                            {/* Badge */}
                            <div className="inline-block px-4 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-widest text-blue-400 mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all">
                                {service.tag}
                            </div>

                            {/* Icon */}
                            <div className={`text-5xl text-white mb-6 group-hover:scale-110 transition-transform duration-500`}>
                                {service.icon}
                            </div>

                            {/* Title & Desc */}
                            <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                            <p className="text-gray-500 leading-relaxed mb-8 group-hover:text-gray-300 transition-colors">
                                {service.desc}
                            </p>

                            {/* Learn More / Arrow */}
                            <div className="flex items-center gap-2 text-white font-bold text-sm">
                                <span className="w-8 h-[1px] bg-blue-500 group-hover:w-12 transition-all"></span>
                                <span className="opacity-0 group-hover:opacity-100 transition-opacity">Explore Service</span>
                            </div>

                            {/* Bottom Decorative Number */}
                            <div className="absolute bottom-6 right-8 text-6xl font-black text-white/[0.02] select-none group-hover:text-blue-600/10 transition-colors">
                                0{service.id}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MainServicesGrid;