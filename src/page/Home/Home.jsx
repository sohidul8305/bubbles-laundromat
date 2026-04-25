import React from 'react';
import HeroSection from '../../components/HeroSection/HeroSection';
import Services from '../../components/Services/Services';
import WhyChooseUs from '../../components/WhyChooseUs/WhyChooseUs';
import Pricing from '../../components/Pricing/Pricing';

const Home = () => {
    return (
        <div className="pt-32 pb-20 text-center">
           <HeroSection></HeroSection>
           <Services></Services>
           <WhyChooseUs></WhyChooseUs>
           <Pricing></Pricing>
        </div>
    );
};

export default Home;