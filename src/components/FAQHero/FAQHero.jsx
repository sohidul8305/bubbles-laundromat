import React from 'react';
import { motion } from 'framer-motion';
import { HiOutlineQuestionMarkCircle } from 'react-icons/hi';

const FAQHero = () => {
    return (
        /* pt-20 এবং pb-16 ব্যবহার করে সেকশনটিকে উপরে উঠানো হয়েছে */
        <section className="relative w-full pt-20 pb-16 md:pt-28 md:pb-24 bg-white overflow-hidden">
            
            {/* Background Decorative Accents */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[60%] bg-blue-50/50 blur-[120px] rounded-full"></div>
                <div className="absolute bottom-0 left-[-5%] w-[30%] h-[50%] bg-cyan-50/30 blur-[100px] rounded-full"></div>
            </div>

            <div className="max-w-[1600px] mx-auto px-6 lg:px-16 relative z-10">
                <div className="flex flex-col items-center text-center">
                    
                    {/* 1. Badge - মার্জিন কমানো হয়েছে (mb-6) */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-slate-50 border border-slate-100 text-blue-600 mb-6 shadow-sm"
                    >
                        <HiOutlineQuestionMarkCircle className="text-lg" />
                        <span className="text-[10px] font-black uppercase tracking-[4px]">Knowledge Base</span>
                    </motion.div>

                    {/* 2. Main Title - mb-6 করে গ্যাপ কমানো হয়েছে */}
                    <motion.h1 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-5xl md:text-[90px] font-black text-slate-900 tracking-tighter leading-[0.85] mb-6"
                    >
                        Commonly <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">
                            Asked.
                        </span>
                    </motion.h1>

                    {/* 3. Subtitle */}
                    <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="max-w-2xl text-slate-500 text-base md:text-lg font-medium leading-relaxed"
                    >
                        Everything you need to know about our premium garment care, pricing, 
                        and turnaround times in Oklahoma City.
                    </motion.p>

                    {/* 4. Decorative Line - mt-10 করে উপরে উঠানো হয়েছে */}
                    <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: "60px" }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="h-1.5 bg-blue-600 mt-10 rounded-full"
                    ></motion.div>

                </div>
            </div>

            {/* 5. Bottom Gradient Border */}
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-100 to-transparent"></div>
        </section>
    );
};

export default FAQHero;