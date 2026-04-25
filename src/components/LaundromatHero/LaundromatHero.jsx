import React from 'react';
import { motion } from 'framer-motion';
import { HiPhone, HiArrowRight, HiShieldCheck, HiOutlineSparkles } from 'react-icons/hi';
import clothimage2 from "../../assets/Clean Clothes2.jpg"; 

const LaundromatHero = () => {
    return (
        <section className="relative min-h-screen w-full flex items-center bg-[#0a0a0b] overflow-hidden pt-32 pb-32 md:pb-40">

            {/* --- Background Elements --- */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 -left-[10%] w-[50%] h-[50%] bg-blue-600/20 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-0 -right-[10%] w-[40%] h-[40%] bg-cyan-600/10 rounded-full blur-[100px]"></div>
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
            </div>

            {/* Container width increased to 1600px for a wider look */}
            <div className="relative z-10 max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 w-full">
                <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
                    
                    {/* --- Left Side: Text Content --- */}
                    <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="z-20 order-2 lg:order-1"
                    >
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3 }}
                            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 text-blue-300 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-[2px] mb-8"
                        >
                            <HiOutlineSparkles className="animate-pulse text-lg" /> 
                            Premium Laundry Service Oklahoma
                        </motion.div>

                        <h1 className="text-5xl md:text-7xl xl:text-8xl font-black text-white leading-[1.1] mb-8">
                            Fresh Clothes, <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500">
                                Fresh Start.
                            </span>
                        </h1>

                        <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-2xl leading-relaxed">
                            Stop wasting hours on laundry. **Bubbles Laundromat** provides eco-friendly care, professional folding, and lightning-fast service right at your doorstep.
                        </p>

                        <div className="flex flex-wrap gap-5">
                            <motion.button
                                whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(37, 99, 235, 0.4)" }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-2xl font-black text-lg flex items-center gap-3 transition-all"
                            >
                                Get Started Now <HiArrowRight className="text-xl" />
                            </motion.button>
                            
                            <motion.a
                                href="tel:+14057488990"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex items-center gap-3 bg-white/5 border border-white/10 text-white px-10 py-5 rounded-2xl font-bold text-lg backdrop-blur-md transition-all"
                            >
                                <div className="bg-blue-500 p-2 rounded-full">
                                    <HiPhone className="text-white" />
                                </div>
                                Call Now
                            </motion.a>
                        </div>

                        <div className="mt-12 flex flex-wrap gap-8 border-t border-white/5 pt-8">
                            <div className="flex items-center gap-2">
                                <HiShieldCheck className="text-green-400 text-2xl" />
                                <span className="text-gray-400 text-sm font-medium uppercase tracking-wider">100% Sanitized</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <HiOutlineSparkles className="text-yellow-400 text-2xl" />
                                <span className="text-gray-400 text-sm font-medium uppercase tracking-wider">Express Service</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* --- Right Side: Bigger Image Card --- */}
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="relative w-full h-full flex justify-center items-center order-1 lg:order-2"
                    >
                        {/* Container width and height increased */}
                        <div className="relative z-10 rounded-[3rem] overflow-hidden border-[10px] border-white/5 shadow-2xl w-full h-[50vh] md:h-[70vh] lg:h-[75vh] xl:h-[80vh] lg:w-[115%] lg:-mr-32 transition-all"> 
                            <img 
                                src={clothimage2} 
                                alt="Clean Clothes" 
                                className="w-full h-full object-cover object-center" 
                            />
                            
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

                            {/* Floating Stats */}
                            <motion.div 
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute bottom-10 left-10 right-10 bg-white/10 backdrop-blur-3xl border border-white/10 p-6 rounded-[2.5rem]"
                            >
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-1">Satisfied Clients</p>
                                        <p className="text-white text-3xl font-black">5,000+</p>
                                    </div>
                                    <div className="flex -space-x-3">
                                        {[1,2,3,4].map(i => (
                                            <div key={i} className="w-10 h-10 rounded-full border-2 border-blue-600 bg-gray-800 flex items-center justify-center text-[10px] text-white font-bold">
                                                User
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Background Decorative Elements scaled up */}
                        <div className="absolute -top-6 -right-10 w-[110%] h-[110%] border border-blue-500/20 rounded-[4rem] -z-10 hidden lg:block"></div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default LaundromatHero;