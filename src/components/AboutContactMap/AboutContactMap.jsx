import React from 'react';
import { motion } from 'framer-motion';
import { HiOutlineLocationMarker, HiOutlinePhone, HiOutlineMail, HiOutlineClock } from 'react-icons/hi';

const AboutContactMap = () => {
    return (
        <section className="py-24 bg-[#0a0a0b] relative overflow-hidden">
            <div className="max-w-[1600px] mx-auto px-6 lg:px-16">
                
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Visit Our <span className="text-blue-500">Facility</span></h2>
                    <p className="text-gray-500">Stop by our Oklahoma City location for premium care.</p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    
                    {/* --- Left Side: Contact Info --- */}
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="bg-white/5 border border-white/10 p-8 rounded-[2rem] hover:border-blue-500/30 transition-all">
                            <div className="flex items-center gap-6">
                                <div className="bg-blue-600 p-4 rounded-2xl text-white text-3xl">
                                    <HiOutlineLocationMarker />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-xl mb-1">Our Address</h4>
                                    <p className="text-gray-400">815 W Britton Rd, Oklahoma City, OK 73114</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white/5 border border-white/10 p-8 rounded-[2rem] hover:border-blue-500/30 transition-all">
                            <div className="flex items-center gap-6">
                                <div className="bg-cyan-600 p-4 rounded-2xl text-white text-3xl">
                                    <HiOutlinePhone />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-xl mb-1">Call Us Directly</h4>
                                    <p className="text-gray-400">+1 405-748-8990</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white/5 border border-white/10 p-8 rounded-[2rem] hover:border-blue-500/30 transition-all">
                            <div className="flex items-center gap-6">
                                <div className="bg-indigo-600 p-4 rounded-2xl text-white text-3xl">
                                    <HiOutlineClock />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-xl mb-1">Opening Hours</h4>
                                    <p className="text-gray-400">Mon - Sat: 8:00 AM - 8:00 PM</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* --- Right Side: Google Map --- */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="h-[500px] w-full rounded-[3rem] overflow-hidden border-8 border-white/5 shadow-2xl"
                    >
                        {/* Google Map Iframe */}
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3243.6472489370613!2d-97.5312389!3d35.562413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87b210a402316e6d%3A0xc48c962b1a5d6148!2s815%20W%20Britton%20Rd%2C%20Oklahoma%20City%2C%20OK%2073114%2C%20USA!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd" 
                            width="100%" 
                            height="100%" 
                            style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }} 
                            allowFullScreen="" 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default AboutContactMap;