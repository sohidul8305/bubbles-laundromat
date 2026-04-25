import React from 'react';
import { motion } from 'framer-motion';
import { HiOutlineBadgeCheck, HiOutlineUserGroup, HiOutlineClock } from 'react-icons/hi';
// আপনার কাছে থাকা অন্য একটি ভালো কোয়ালিটি ইমেজ এখানে ইমপোর্ট করুন
import storyImage from "../../assets/Clean Clothes2.jpg"; 

const OurStory = () => {
    return (
        <section className="relative py-24 bg-[#0a0a0b] overflow-hidden">
            {/* Background Gradient Blur */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[300px] h-[300px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="relative z-10 max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    
                    {/* --- Left Side: Image Content --- */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9, x: -50 }}
                        whileInView={{ opacity: 1, scale: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        {/* Decorative Frame */}
                        <div className="absolute -top-6 -left-6 w-32 h-32 border-t-4 border-l-4 border-blue-600 rounded-tl-3xl hidden md:block"></div>
                        
                        <div className="relative rounded-[2.5rem] overflow-hidden border-8 border-white/5 shadow-2xl">
                            <img 
                                src={storyImage} 
                                alt="Our Story at Bubbles Laundromat" 
                                className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700"
                            />
                            {/* Overlay tag */}
                            <div className="absolute bottom-6 left-6 bg-blue-600/90 backdrop-blur-md text-white px-6 py-3 rounded-2xl font-bold">
                                Since 2014 in OKC
                            </div>
                        </div>

                        {/* Floating Experience Card */}
                        <motion.div 
                            animate={{ y: [0, 20, 0] }}
                            transition={{ duration: 4, repeat: Infinity }}
                            className="absolute -bottom-10 -right-6 md:right-10 bg-white/10 backdrop-blur-xl border border-white/10 p-6 rounded-3xl shadow-xl hidden sm:block"
                        >
                            <div className="flex items-center gap-4">
                                <div className="bg-blue-500 p-3 rounded-2xl text-3xl">🧺</div>
                                <div>
                                    <h4 className="text-white font-black text-2xl">10+ Years</h4>
                                    <p className="text-gray-400 text-xs uppercase tracking-widest">Of Excellence</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* --- Right Side: Text Content --- */}
                    <motion.div 
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <span className="text-blue-500 font-bold uppercase tracking-[4px] text-sm mb-4 block">Our Story</span>
                        <h2 className="text-4xl md:text-6xl font-black text-white leading-tight mb-8">
                            A Tradition of <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                                Freshness & Care.
                            </span>
                        </h2>

                        <p className="text-gray-400 text-lg leading-relaxed mb-8">
                            Started as a family mission at **815 W Britton Rd**, Bubbles Laundromat was born from a simple idea: laundry shouldn't be a chore that takes away your weekend. We wanted to bring a premium, spa-like experience to your everyday essentials.
                        </p>

                        <p className="text-gray-500 text-md leading-relaxed mb-10 italic border-l-4 border-blue-600 pl-6">
                            "Our goal is to provide Oklahoma City with the cleanest, fastest, and most reliable laundry service possible, using eco-friendly technology and professional care."
                        </p>

                        {/* Feature Points */}
                        <div className="grid sm:grid-cols-2 gap-6">
                            <div className="flex items-start gap-4">
                                <div className="bg-blue-600/20 p-3 rounded-xl text-blue-500">
                                    <HiOutlineBadgeCheck className="text-2xl" />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold">Premium Quality</h4>
                                    <p className="text-gray-500 text-sm">Best-in-class detergents.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="bg-blue-600/20 p-3 rounded-xl text-blue-500">
                                    <HiOutlineUserGroup className="text-2xl" />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold">Expert Staff</h4>
                                    <p className="text-gray-500 text-sm">Trained laundry professionals.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="bg-blue-600/20 p-3 rounded-xl text-blue-500">
                                    <HiOutlineClock className="text-2xl" />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold">Fast Delivery</h4>
                                    <p className="text-gray-500 text-sm">24-48 hour turnaround.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default OurStory;