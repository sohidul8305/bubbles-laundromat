import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineChevronDown } from 'react-icons/hi';
import FAQHero from '../FAQHero/FAQHero';
import FAQSearch from '../FAQSearch/FAQSearch';
import FAQAccordion from '../FAQAccordion/FAQAccordion';
import SupportCard from '../SupportCard/SupportCard';

const FAQ = () => {
    const faqs = [
        { q: "How long does the laundry take?", a: "Our standard turnaround time is 24 hours for Wash & Fold services." },
        { q: "Do you offer same-day service?", a: "Yes! If you drop off before 10 AM, we can have it ready by the evening for a small rush fee." },
        { q: "Where is Bubbles Laundromat located?", a: "We are located at 815 W Britton Rd, Oklahoma City, OK 73114." },
        { q: "Do you separate whites and colors?", a: "Absolutely. We meticulously sort your laundry to ensure the best care for every fabric." }
    ];

    const [activeIdx, setActiveIdx] = useState(null);

    return (
        <section className="w-full min-h-screen py-20 px-6 bg-white">
            <FAQHero></FAQHero>
            <FAQSearch></FAQSearch>
            <FAQAccordion></FAQAccordion>
            <SupportCard></SupportCard>
        </section>
    );
};

export default FAQ;