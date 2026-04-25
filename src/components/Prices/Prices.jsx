import React from 'react';
import { motion } from 'framer-motion';
import ServicePricing from '../ServicePricing/ServicePricing';
import PriceHero from '../PriceHero/PriceHero';
import Pricing from '../Pricing/Pricing';
import HouseholdPrices from '../HouseholdPrices/HouseholdPrices';
import WorkProcess from '../WorkProcess/WorkProcess';
import ServiceUpgrades from '../ServiceUpgrades/ServiceUpgrades';

const Prices = () => {
    return (


        <div className="w-full min-h-screen ">

         <PriceHero></PriceHero>
         <Pricing></Pricing>
         <HouseholdPrices></HouseholdPrices>
         <WorkProcess></WorkProcess>
         <ServiceUpgrades></ServiceUpgrades>

            {/* Extra spacing at the bottom to ensure footer doesn't feel cramped */}
            <div className="pb-20"></div>
        </div>
    );
};

export default Prices;