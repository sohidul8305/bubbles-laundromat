import React from 'react';
import AboutHero from '../components/AboutHero/AboutHero';
import OurStory from '../components/OurStory/OurStory';
import StatsCounter from '../components/StatsCounter/StatsCounter';
import AboutFeatures from '../components/AboutFeatures/AboutFeatures';
import AboutProcess from '../components/AboutProcess/AboutProcess';
import AboutContactMap from '../components/AboutContactMap/AboutContactMap';

const About = () => {
  return (
    <div className="w-full bg-[#0a0a0b]">

        <AboutHero />

        <OurStory />

        <StatsCounter />

        <AboutFeatures />

        <AboutProcess />

        <AboutContactMap />

    </div>
  );
};

export default About;