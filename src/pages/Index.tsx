
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import MonumentSection from '@/components/MonumentSection';
import MotivationSection from '@/components/MotivationSection';
import PalisadesSection from '@/components/PalisadesSection';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  useEffect(() => {
    // Smooth scroll to section when URL has hash
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <MonumentSection />
        <MotivationSection />
        <PalisadesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
