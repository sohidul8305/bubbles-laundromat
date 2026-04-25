import React from 'react';
import { motion } from 'framer-motion';
import { HiPhone, HiLocationMarker, HiClock, HiPaperAirplane } from 'react-icons/hi';
import { FaFacebookF, FaInstagram, FaGoogle } from 'react-icons/fa';

const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-white relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-[100px] -z-10"></div>

            <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-16">
                    
                    {/* Left: Contact Details & Form */}
                    <div className="lg:w-5/12">
                        <motion.div 
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="mb-12"
                        >
                            <span className="text-blue-600 font-black tracking-widest uppercase text-xs mb-3 block">Get In Touch</span>
                            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
                                Contact <span className="text-blue-600">Us</span>
                            </h2>
                            <p className="text-slate-500 font-medium">
                                Have questions about our services in Oklahoma City? Reach out to us or visit our facility today.
                            </p>
                        </motion.div>

                        {/* Info Cards */}
                        <div className="space-y-6 mb-12">
                            {[
                                { icon: <HiLocationMarker />, title: "Location", detail: "815 W Britton Rd, OKC, OK 73114" },
                                { icon: <HiPhone />, title: "Call Us", detail: "+1 405-748-8990" },
                                { icon: <HiClock />, title: "Working Hours", detail: "Mon-Sat: 08:00 AM - 09:00 PM" }
                            ].map((item, i) => (
                                <motion.div 
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex items-center gap-6 p-6 bg-slate-50 rounded-3xl border border-slate-100 hover:border-blue-200 transition-all"
                                >
                                    <div className="w-12 h-12 bg-white text-blue-600 rounded-2xl shadow-sm flex items-center justify-center text-xl">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-xs font-black uppercase text-slate-400 tracking-widest">{item.title}</h4>
                                        <p className="font-bold text-slate-800">{item.detail}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Social Connect */}
                        <div className="flex gap-4">
                            {[<FaFacebookF />, <FaInstagram />, <FaGoogle />].map((icon, i) => (
                                <button key={i} className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center hover:bg-blue-600 transition-all transform hover:-translate-y-1">
                                    {icon}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Right: Integrated Map & Contact Trigger */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="lg:w-7/12 relative"
                    >
                        {/* Google Map Container */}
                        <div className="w-full h-[500px] lg:h-full min-h-[450px] bg-slate-200 rounded-[3.5rem] overflow-hidden shadow-2xl border-8 border-slate-50 relative group">
                            {/* Embed Google Map with Specific Bubbles Address */}
                            <iframe 
                                title="Bubbles Laundromat Location"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3244.577663242636!2d-97.53127812356193!3d35.56534573634914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87b21a0f8b80e461%3A0x6b10f279f53e0f0!2s815%20W%20Britton%20Rd%2C%20Oklahoma%20City%2C%20OK%2073114%2C%20USA!5e0!3m2!1sen!2sbd!4v1714040000000!5m2!1sen!2sbd"
                                width="100%" 
                                height="100%" 
                                style={{ border: 0 }} 
                                allowFullScreen="" 
                                loading="lazy"
                            ></iframe>

                            {/* Floating Map Label */}
                            <div className="absolute top-6 left-6 right-6 md:left-auto md:w-72 bg-white/90 backdrop-blur-md p-6 rounded-3xl shadow-xl border border-white/50">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-2 h-2 bg-green-500 rounded-full animate-ping"></div>
                                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-600">Live Location</p>
                                </div>
                                <h4 className="font-black text-slate-900 text-lg mb-1">Bubbles Laundromat</h4>
                                <p className="text-xs text-slate-500 font-medium leading-relaxed">
                                    Our Oklahoma City facility is fully equipped with high-tech machines.
                                </p>
                                <button className="mt-4 w-full bg-blue-600 text-white py-3 rounded-xl text-xs font-black uppercase hover:bg-slate-900 transition-all">
                                    Get Directions
                                </button>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Contact;