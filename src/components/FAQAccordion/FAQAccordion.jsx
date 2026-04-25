import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlinePlus, HiOutlineMinus, HiOutlineChatAlt2 } from 'react-icons/hi';

const FAQAccordion = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const faqData = [
        {
            question: "How long does a standard wash and fold take?",
            answer: "Our standard turnaround time is 24 hours. For those in a hurry, we offer a Same-Day Express service if you drop off your laundry before 10:00 AM at our Britton Rd location."
        },
        {
            question: "Do you separate whites and colors?",
            answer: "Absolutely. We treat your garments with the utmost care. Every order is meticulously sorted into whites, lights, and darks to ensure no color bleeding and the best possible clean."
        },
        {
            question: "What kind of detergents do you use?",
            answer: "We use premium, eco-friendly, and hypoallergenic detergents that are tough on stains but gentle on skin and the environment. Specialized options for sensitive skin are available upon request."
        },
        {
            question: "Is there a minimum weight requirement?",
            answer: "Yes, our Wash & Fold service has a 10 lb minimum. Orders under 10 lbs are welcome but will be billed at the minimum weight rate."
        },
        {
            question: "Do you offer dry cleaning for delicate items?",
            answer: "Yes! Beyond standard laundry, we provide professional dry cleaning for suits, dresses, and other specialty fabrics to keep them looking brand new."
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-4xl mx-auto px-6">
                
                {/* Accordion List */}
                <div className="space-y-4">
                    {faqData.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className={`group border rounded-[2rem] transition-all duration-500 ${
                                activeIndex === index 
                                ? 'border-blue-500 bg-blue-50/30 shadow-xl shadow-blue-100/50' 
                                : 'border-slate-100 hover:border-blue-200 bg-white'
                            }`}
                        >
                            <button
                                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-7 md:p-9 text-left outline-none"
                            >
                                <span className={`text-lg md:text-xl font-bold tracking-tight transition-colors duration-300 ${
                                    activeIndex === index ? 'text-blue-600' : 'text-slate-900'
                                }`}>
                                    {faq.question}
                                </span>
                                
                                <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-500 ${
                                    activeIndex === index 
                                    ? 'bg-blue-600 border-blue-600 text-white rotate-180' 
                                    : 'border-slate-200 text-slate-400 group-hover:border-blue-300 group-hover:text-blue-500'
                                }`}>
                                    {activeIndex === index ? <HiOutlineMinus /> : <HiOutlinePlus />}
                                </div>
                            </button>

                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.4, ease: "easeInOut" }}
                                    >
                                        <div className="px-7 md:px-9 pb-9 text-slate-500 text-base md:text-lg leading-relaxed font-medium">
                                            <div className="h-[1px] w-12 bg-blue-200 mb-6"></div>
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Support CTA */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-20 flex flex-col items-center text-center p-10 bg-slate-50 rounded-[3rem] border border-dashed border-slate-200"
                >
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-blue-600 text-3xl shadow-sm mb-6">
                        <HiOutlineChatAlt2 />
                    </div>
                    <h3 className="text-2xl font-black text-slate-900 mb-2">Still have a question?</h3>
                    <p className="text-slate-500 font-medium mb-8">We're here to help you 7 days a week.</p>
                    <a 
                        href="tel:+14057488990" 
                        className="px-10 py-4 bg-blue-600 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-slate-900 transition-all duration-300 shadow-lg shadow-blue-200"
                    >
                        Call Bubbles OKC
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default FAQAccordion;