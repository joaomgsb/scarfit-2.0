import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import HeroVideo from '../components/HeroVideo';
import TransformationJourney from '../components/TransformationJourney';
import MethodologyShowcase from '../components/MethodologyShowcase';
import ResultsGallery from '../components/ResultsGallery';
import ElitePlan from '../components/ElitePlan';
import ProPlus from '../components/ProPlus';
import Faq from '../components/Faq';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import Feedbacks from '../components/Feedbacks';
import AppShowcase from '../components/AppShowcase';
import OurClients from '../components/OurClients';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark text-light">
      <WhatsAppButton />
      <Navbar />
      
      {/* Seções integradas e fluidas */}
      <div id="hero">
        <Hero />
      </div>

      <div id="results">
        <ResultsGallery />
      </div>
      
      <div id="journey">
        <TransformationJourney />
      </div>

      <div id="hero-video">
        <HeroVideo />
      </div>

      <div id="methodology">
        <MethodologyShowcase />
      </div>
      
      <div id="plans">
        <ElitePlan />
      </div>
      
      <div id="pro-plus">
        <ProPlus />
      </div>
      
      <div id="app-showcase">
        <AppShowcase />
      </div>
      
      <div id="clients">
        <OurClients />
      </div>

      <div id="faq">
        <Faq />
      </div>
      
      <Footer />
    </div>
  );
};

export default HomePage;