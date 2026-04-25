import React from 'react';
import { motion } from 'framer-motion';
import { HiOutlinePhone, HiOutlineChat, HiOutlineLocationMarker, HiArrowRight } from 'react-icons/hi';

const SupportCard = () => {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-[1400px] mx-auto px-6">
                <div className="relative p-1 md:p-2 bg-gradient-to-r from-blue-100 via-indigo-50 to-blue-100 rounded-[3.5rem]">
                    <div className="bg-white rounded-[3.3rem] p-10 md:p-20 overflow-hidden relative">
                        
                        {/* Background Luxury Shapes */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl -mr-32 -mt-32"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-50 rounded-full blur-3xl -ml-32 -mb-32"></div>

                        <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
                            
                            {/* Left Side: Text Content */}
                            <div>
                                <motion.div 
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    className="flex items-center gap-3 mb-6"
                                >
                                    <span className="w-12 h-[2px] bg-blue-600"></span>
                                    <span className="text-blue-600 font-black uppercase tracking-[4px] text-[10px]">Direct Assistance</span>
                                </motion.div>
                                
                                <motion.h2 
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter leading-none mb-8"
                                >
                                    Can't find the <br /> 
                                    <span className="text-blue-600">right answer?</span>
                                </motion.h2>
                                
                                <p className="text-slate-500 text-lg font-medium mb-10 max-w-md">
                                    Our OKC team is standing by to help you with specialty fabrics, large orders, or technical issues.
                                </p>

                                <div className="flex flex-wrap gap-4">
                                    <a href="tel:+14057488990" className="flex items-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-blue-600 transition-all shadow-xl active:scale-95">
                                        <HiOutlinePhone className="text-lg" />
                                        Call Us Now
                                    </a>
                                    <button className="flex items-center gap-3 px-8 py-4 bg-white border border-slate-200 text-slate-900 rounded-2xl font-black text-xs uppercase tracking-widest hover:border-blue-600 transition-all active:scale-95">
                                        Email Support
                                        <HiArrowRight />
                                    </button>
                                </div>
                            </div>

                            {/* Right Side: Visual Contact Info */}
                            <div className="grid sm:grid-cols-2 gap-6">
                                <motion.div 
                                    whileHover={{ y: -10 }}
                                    className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 group transition-all duration-500"
                                >
                                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-2xl text-blue-600 mb-6 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                                        <HiOutlineChat />
                                    </div>
                                    <h4 className="text-xl font-bold text-slate-900 mb-2">Live Chat</h4>
                                    <p className="text-slate-500 text-sm font-medium">Available Mon-Fri <br /> 8:00 AM - 6:00 PM</p>
                                </motion.div>

                                <motion.div 
                                    whileHover={{ y: -10 }}
                                    className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 group transition-all duration-500"
                                >
                                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-2xl text-blue-600 mb-6 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                                        <HiOutlineLocationMarker />
                                    </div>
                                    <h4 className="text-xl font-bold text-slate-900 mb-2">Drop Off</h4>
                                    <p className="text-slate-500 text-sm font-medium">815 W Britton Rd, <br /> Oklahoma City, OK</p>
                                </motion.div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SupportCard;