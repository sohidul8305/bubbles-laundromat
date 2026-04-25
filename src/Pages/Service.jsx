import React from 'react';
import ServiceHero from '../components/ServiceHero/ServiceHero';
import MainServicesGrid from '../components/MainServicesGrid/MainServicesGrid';
import ServicePricing from '../components/ServicePricing/ServicePricing';
import TechAdvantage from '../components/TechAdvantage/TechAdvantage';
import ServiceArea from '../components/ServiceArea/ServiceArea';

const Service = () => {
    return (

        <div className="min-h-screen w-full bg-[#0f1115] selection:bg-blue-500/30">
            
            <ServiceHero />

            <MainServicesGrid />

            <ServicePricing />

            <TechAdvantage />

            <ServiceArea />


        </div>
    );
};

export default Service;