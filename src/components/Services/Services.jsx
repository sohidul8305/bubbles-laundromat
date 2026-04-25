import React from 'react';
import { motion } from 'framer-motion';
import { Shirt, Waves, Truck, Clock, Sparkles, Home } from 'lucide-react';

const Services = () => {
    const services = [
        {
            title: "Wash & Fold",
            description: "Let us handle your everyday laundry. We wash, dry, and fold your clothes to perfection.",
            icon: <Waves className="w-8 h-8" />,
            price: "From $1.50/lb"
        },
        {
            title: "Dry Cleaning",
            description: "Premium care for delicate fabrics, suits, and dresses using eco-friendly cleaning solvents.",
            icon: <Shirt className="w-8 h-8" />,
            price: "From $5.00/item"
        },
        {
            title: "Pickup & Delivery",
            description: "No time to visit? We'll pick up your dirty laundry and deliver it fresh to your doorstep.",
            icon: <Truck className="w-8 h-8" />,
            price: "Free over $30"
        },
        {
            title: "Commercial Laundry",
            description: "Reliable laundry solutions for Oklahoma hotels, restaurants, and medical clinics.",
            icon: <Home className="w-8 h-8" />,
            price: "Custom Quote"
        }
    ];

    return (
        <section id="services" className="py-24 bg-white relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50" />
            
            <div className="max-w-7xl mx-auto px-4 relative z-10">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="max-w-2xl">
                        <motion.span 
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="text-blue-600 font-bold tracking-[0.2em] uppercase text-sm"
                        >
                            Our Specialization
                        </motion.span>
                        <motion.h2 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-5xl font-black text-gray-900 mt-3"
                        >
                            Professional Laundry <br /> 
                            <span className="text-blue-600">Services</span> for You
                        </motion.h2>
                    </div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="hidden lg:block pb-2"
                    >
                        <p className="text-gray-500 max-w-xs text-right italic">
                            "We use high-quality detergents and modern machines to ensure your clothes stay brand new."
                        </p>
                    </motion.div>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -12 }}
                            className="group bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-xl shadow-gray-200/40 hover:shadow-blue-200/50 transition-all duration-500"
                        >
                            {/* Icon Box */}
                            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 transform group-hover:rotate-12">
                                {service.icon}
                            </div>

                            {/* Content */}
                            <h3 className="text-2xl font-extrabold text-gray-800 mb-4 tracking-tight">
                                {service.title}
                            </h3>
                            <p className="text-gray-500 leading-relaxed mb-6">
                                {service.description}
                            </p>

                            {/* Price Badge */}
                            <div className="pt-6 border-t border-gray-50 flex justify-between items-center">
                                <span className="text-blue-600 font-bold">{service.price}</span>
                                <motion.div 
                                    whileHover={{ x: 5 }}
                                    className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center cursor-pointer hover:bg-blue-600 hover:text-white transition-colors"
                                >
                                    <Sparkles size={18} />
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA Section */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="mt-20 bg-blue-600 rounded-[3rem] p-10 md:p-16 text-center text-white relative overflow-hidden"
                >
                    <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                            <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
                        </svg>
                    </div>
                    
                    <h3 className="text-3xl md:text-4xl font-black mb-6 relative z-10">
                        Need Custom Commercial Solutions?
                    </h3>
                    <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto relative z-10">
                        We offer special pricing for businesses, hotels, and gyms in Oklahoma City. Get a customized plan for your volume.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-6 relative z-10">
                        <button className="bg-white text-blue-600 px-10 py-4 rounded-full font-black hover:bg-gray-100 transition-all shadow-lg">
                            Get A Quote
                        </button>
                        <button className="bg-blue-500 border border-blue-400 px-10 py-4 rounded-full font-black hover:bg-blue-400 transition-all">
                            View All Services
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Services;