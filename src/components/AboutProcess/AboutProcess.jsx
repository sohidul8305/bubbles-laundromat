import React from 'react';
import { motion } from 'framer-motion';

const AboutProcess = () => {
    const steps = [
        { id: "01", title: "Schedule", desc: "Book a pickup via phone or website." },
        { id: "02", title: "Pickup", desc: "We collect from your OKC location." },
        { id: "03", title: "Cleaning", desc: "Expert care with eco-friendly products." },
        { id: "04", title: "Deliver", desc: "Fresh clothes back within 24 hours." }
    ];

    return (
        <section className="py-24 bg-[#0a0a0b] border-t border-white/5">
            <div className="max-w-[1600px] mx-auto px-6 lg:px-16 text-center">
                <h2 className="text-3xl md:text-5xl font-black text-white mb-16">
                    The Bubbles <span className="text-blue-500">Way</span>
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {steps.map((step) => (
                        <motion.div key={step.id} whileHover={{ y: -5 }} className="relative group">
                            <span className="text-7xl font-black text-white/[0.03] group-hover:text-blue-600/10 transition-colors block mb-[-30px]">
                                {step.id}
                            </span>
                            <h4 className="text-xl font-bold text-white mb-2 relative z-10">{step.title}</h4>
                            <p className="text-gray-500 text-sm max-w-[200px] mx-auto">{step.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutProcess;