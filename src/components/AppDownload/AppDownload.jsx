import React from 'react';
import { motion } from 'framer-motion';
import { FaApple, FaGooglePlay } from 'react-icons/fa';
import { HiCheckCircle } from 'react-icons/hi';

const AppDownload = () => {
    return (
        <section className="py-24 bg-slate-900 overflow-hidden relative">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] -z-0"></div>

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    
                    {/* Left: Phone Mockup Animation */}
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-1/2 relative"
                    >
                        {/* Shadow Effect */}
                        <div className="absolute inset-0 bg-blue-500/20 blur-[80px] rounded-full"></div>
                        
                        {/* Phone Frame Mockup */}
                        <div className="relative mx-auto w-[280px] h-[580px] bg-slate-800 rounded-[3rem] border-[8px] border-slate-700 shadow-2xl overflow-hidden">
                            {/* Inner Screen Content */}
                            <div className="absolute inset-0 bg-white p-4">
                                <div className="w-full h-8 bg-blue-600 rounded-lg mb-4"></div>
                                <div className="space-y-3">
                                    <div className="w-full h-32 bg-blue-50 rounded-2xl"></div>
                                    <div className="w-3/4 h-4 bg-gray-200 rounded"></div>
                                    <div className="w-full h-4 bg-gray-100 rounded"></div>
                                    <div className="grid grid-cols-2 gap-2 mt-6">
                                        <div className="h-20 bg-blue-100 rounded-xl"></div>
                                        <div className="h-20 bg-blue-100 rounded-xl"></div>
                                    </div>
                                    <div className="w-full h-12 bg-blue-600 rounded-xl mt-10"></div>
                                </div>
                            </div>
                            {/* Notch */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-700 rounded-b-2xl z-20"></div>
                        </div>

                        {/* Floating Badge */}
                        <motion.div 
                            animate={{ y: [0, -15, 0] }}
                            transition={{ repeat: Infinity, duration: 4 }}
                            className="absolute top-20 -right-4 md:right-10 bg-white p-4 rounded-2xl shadow-2xl z-30 flex items-center gap-3 border border-blue-50"
                        >
                            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white">
                                <HiCheckCircle size={24} />
                            </div>
                            <div>
                                <p className="text-xs font-black text-slate-900">Order Completed!</p>
                                <p className="text-[10px] text-slate-500">Your clothes are ready.</p>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right: Content Area */}
                    <div className="lg:w-1/2 text-center lg:text-left">
                        <motion.span 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="text-blue-500 font-black tracking-widest uppercase text-sm"
                        >
                            Download Our App
                        </motion.span>
                        <motion.h2 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-6xl font-black text-white mt-6 mb-8 leading-tight"
                        >
                            Laundry Service At <br /> Your <span className="text-blue-500">Fingertips</span>
                        </motion.h2>
                        <p className="text-slate-400 text-lg mb-10 max-w-lg mx-auto lg:mx-0">
                            Download the Bubbles app today to schedule pickups, track your orders in real-time, and get exclusive discounts in Oklahoma City.
                        </p>

                        {/* App Buttons */}
                        <div className="flex flex-wrap justify-center lg:justify-start gap-6">
                            <button className="flex items-center gap-3 bg-white text-slate-900 px-8 py-4 rounded-2xl hover:bg-blue-500 hover:text-white transition-all transform hover:-translate-y-1">
                                <FaGooglePlay className="text-2xl" />
                                <div className="text-left">
                                    <p className="text-[10px] font-bold uppercase leading-none">Get it on</p>
                                    <p className="text-lg font-black leading-none mt-1">Google Play</p>
                                </div>
                            </button>
                            <button className="flex items-center gap-3 bg-slate-800 text-white border border-slate-700 px-8 py-4 rounded-2xl hover:bg-blue-600 transition-all transform hover:-translate-y-1">
                                <FaApple className="text-2xl" />
                                <div className="text-left">
                                    <p className="text-[10px] font-bold uppercase leading-none">Download on the</p>
                                    <p className="text-lg font-black leading-none mt-1">App Store</p>
                                </div>
                            </button>
                        </div>

                        {/* Trust Badges */}
                        <div className="mt-12 flex items-center justify-center lg:justify-start gap-8 opacity-50 grayscale invert">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg" alt="QR" className="w-16 h-16 rounded-lg bg-white p-1" />
                            <p className="text-white text-xs font-medium leading-relaxed max-w-[150px]">
                                Scan the QR code to download the app directly.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AppDownload;