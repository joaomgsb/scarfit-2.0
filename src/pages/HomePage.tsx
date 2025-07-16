import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import TransformationJourney from '../components/TransformationJourney';
import MethodologyShowcase from '../components/MethodologyShowcase';
import ResultsGallery from '../components/ResultsGallery';
import TeamExpertise from '../components/TeamExpertise';
import ElitePlan from '../components/ElitePlan';
import Faq from '../components/Faq';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import Feedbacks from '../components/Feedbacks';
import AppShowcase from '../components/AppShowcase';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark text-light">
      <WhatsAppButton />
      <Navbar />
      
      {/* Seções integradas e fluidas */}
      <div id="hero">
        <Hero />
      </div>
      
      <div id="journey">
        <TransformationJourney />
      </div>
      
      <div id="methodology">
        <MethodologyShowcase />
      </div>
      
      <div id="results">
        <ResultsGallery />
      </div>
      
      <div id="feedbacks">
        <Feedbacks />
      </div>
      
      <div id="team">
        <TeamExpertise />
      </div>
      
      <div id="plans">
        <ElitePlan />
      </div>
      
      <div id="app-showcase">
        <AppShowcase />
      </div>
      
      <div id="contact">
        <ContactSection />
      </div>

      <div id="faq">
        <Faq />
      </div>
      
      <Footer />
    </div>
  );
};

export default HomePage;