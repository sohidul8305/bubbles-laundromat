import React, { useEffect } from 'react';
import ServiceHero from '../components/ServiceHero/ServiceHero';
import MainServicesGrid from '../components/MainServicesGrid/MainServicesGrid';
import ServicePricing from '../components/ServicePricing/ServicePricing';
import TechAdvantage from '../components/TechAdvantage/TechAdvantage';
import ServiceArea from '../components/ServiceArea/ServiceArea';

const Service = () => {
    // পেজ লোড হলে একদম উপরে স্ক্রল করার জন্য
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen w-full bg-white selection:bg-blue-100 overflow-hidden">

            <ServiceHero />

            <div className="relative z-10 bg-white">
                <MainServicesGrid />
            </div>

            <div className="relative z-10 bg-white">
                <ServicePricing />
            </div>

            <TechAdvantage />

            <ServiceArea />

            <div className="pb-10 bg-white"></div>
        </div>
    );
};

export default Service;