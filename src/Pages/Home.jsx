import React from 'react';
import HeroSection from '../components/HeroSection/HeroSection';
import Services from '../components/Services/Services';
import WhyChooseUs from '../components/WhyChooseUs/WhyChooseUs';
import Pricing from '../components/Pricing/Pricing';
import Testimonials from '../components/Testimonials/Testimonials';
import Contact from '../components/Contact/Contact';
import HowItWorks from '../components/HowItWorks/HowItWorks';
import AppDownload from '../components/AppDownload/AppDownload';

const Home = () => {
    return (
        <div className="pt-32 pb-20 text-center">
           <HeroSection></HeroSection>
           <Services></Services>
           <WhyChooseUs></WhyChooseUs>
           <HowItWorks></HowItWorks>
           <Pricing></Pricing>
           <Testimonials></Testimonials>
           <AppDownload></AppDownload>
           <Contact></Contact>
        </div>
    );
};

export default Home;