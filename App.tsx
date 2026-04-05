import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
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
import { Footer } from './components/Footer';
import { Preloader } from './components/Preloader';
import { CaseStudyPage } from './pages/CaseStudyPage';
import { CreativeInfrastructure } from './pages/CreativeInfrastructure';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function HomePage() {
  return (
    <>
      <Preloader />
      <div className="min-h-screen bg-white">
        <Navbar />
        <main>
          <div id="home" className="relative">
            <Hero />
            <VideoSection />
            <TrustedBy />
          </div>
          <div id="about">
            <AgencyDescription />
          </div>
          <div id="work">
            <OurWorks />
          </div>
          <div id="services">
            <HowWeWork />
          </div>
          <div id="talent">
            <TalentShowcase />
          </div>
          <Testimonials />
          <WhyChooseUs />
        </main>
        <Footer />
      </div>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/case-study/:id" element={<CaseStudyPage />} />
        <Route path="/creative-infrastructure" element={<CreativeInfrastructure />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;