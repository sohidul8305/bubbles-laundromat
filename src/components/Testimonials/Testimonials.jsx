import React from 'react';
import { motion } from 'framer-motion';
import { HiStar, HiCheckBadge } from 'react-icons/hi2';
import { FaQuoteLeft } from 'react-icons/fa6';

const Testimonials = () => {
    const reviews = [
        {
            name: "Sarah Jenkins",
            location: "Nichols Hills, OKC",
            text: "Bubbles is hands down the best laundromat in Oklahoma City! My clothes always come back smelling fresh and perfectly folded. Their pickup service is a game changer for my busy week.",
            image: "https://i.pravatar.cc/150?u=sarah",
            stars: 5
        },
        {
            name: "David Miller",
            location: "The Village, OK",
            text: "Cleanest facility I've ever visited. The machines are high-tech and fast. I used their drop-off service and was impressed by the professional packaging. 5-star experience!",
            image: "https://i.pravatar.cc/150?u=david",
            stars: 5
        },
        {
            name: "Samantha R.",
            location: "Edmond, OK",
            text: "Finally a laundry service that cares about quality. They handled my delicate silk dresses with extreme care. The eco-friendly detergent they use is a huge plus for my family.",
            image: "https://i.pravatar.cc/150?u=samantha",
            stars: 5
        }
    ];

    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-100/50 rounded-full blur-[120px] -z-10"></div>
            <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-blue-50 rounded-full blur-[100px] -z-10"></div>

            <div className="max-w-7xl mx-auto px-4">
                
                {/* Header Area */}
                <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
                    <div className="max-w-xl">
                        <motion.div 
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="flex items-center gap-2 text-blue-600 font-black tracking-widest uppercase text-xs mb-4"
                        >
                            <span className="w-8 h-[2px] bg-blue-600"></span>
                            Customer Feedback
                        </motion.div>
                        <motion.h2 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-6xl font-black text-slate-900 leading-tight"
                        >
                            Trusted by <span className="text-blue-600">500+</span> Locals in Oklahoma City
                        </motion.h2>
                    </div>
                    
                    <motion.div 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="bg-white p-6 rounded-3xl shadow-xl shadow-slate-200 border border-slate-100 flex items-center gap-4"
                    >
                        <div className="flex -space-x-3">
                            {[1, 2, 3, 4].map(i => (
                                <img key={i} className="w-10 h-10 rounded-full border-2 border-white" src={`https://i.pravatar.cc/100?img=${i+10}`} alt="user" />
                            ))}
                        </div>
                        <div>
                            <div className="flex text-yellow-400 text-sm">
                                <HiStar /><HiStar /><HiStar /><HiStar /><HiStar />
                            </div>
                            <p className="text-xs font-bold text-slate-500 uppercase tracking-tighter">4.9/5 Google Rating</p>
                        </div>
                    </motion.div>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.15 }}
                            whileHover={{ y: -10 }}
                            className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-xl shadow-slate-200/50 relative group transition-all duration-500"
                        >
                            {/* Quote Icon */}
                            <div className="absolute top-8 right-10 text-slate-100 group-hover:text-blue-50 transition-colors">
                                <FaQuoteLeft size={40} />
                            </div>

                            {/* Stars */}
                            <div className="flex text-yellow-400 mb-6">
                                {[...Array(review.stars)].map((_, i) => (
                                    <HiStar key={i} className="text-xl" />
                                ))}
                            </div>

                            {/* Review Text */}
                            <p className="text-slate-600 leading-relaxed mb-8 font-medium italic">
                                "{review.text}"
                            </p>

                            {/* Profile Info */}
                            <div className="flex items-center gap-4 mt-auto">
                                <div className="relative">
                                    <img 
                                        src={review.image} 
                                        alt={review.name} 
                                        className="w-16 h-16 rounded-2xl object-cover ring-4 ring-blue-50"
                                    />
                                    <HiCheckBadge className="absolute -bottom-1 -right-1 text-blue-600 bg-white rounded-full text-xl" />
                                </div>
                                <div>
                                    <h4 className="font-black text-slate-900">{review.name}</h4>
                                    <p className="text-blue-600 text-xs font-bold uppercase tracking-widest">{review.location}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Verification Text */}
                <motion.p 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-center mt-16 text-slate-400 text-sm font-medium"
                >
                    All reviews are collected from our verified <span className="text-blue-500 font-bold underline cursor-pointer">Google My Business</span> profile.
                </motion.p>
            </div>
        </section>
    );
};

export default Testimonials;