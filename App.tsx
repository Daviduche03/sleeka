import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { VideoSection } from './components/VideoSection';
import { TrustedBy } from './components/TrustedBy';
import { AgencyDescription } from './components/AgencyDescription';
import { OurWorks } from './components/OurWorks';
import { HowWeWork } from './components/HowWeWork';
import { TalentShowcase } from './components/TalentShowcase';
import { Testimonials } from './components/Testimonials';
import { WhyChooseUs } from './components/WhyChooseUs';
import { WhatWeDo } from './components/WhatWeDo';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <div className="relative">
          <Hero />
          {/* Video Section acts as the bridge between Hero and TrustedBy */}
          <VideoSection />
          <TrustedBy />
        </div>
        <AgencyDescription />
        <OurWorks />
        <HowWeWork />
        <TalentShowcase />
        <Testimonials />
        <WhyChooseUs />
        {/* <CTASection /> */}
      </main>
      <Footer />
    </div>
  );
}

export default App;