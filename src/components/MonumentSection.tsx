
import React, { useRef, useState, useEffect } from 'react';
import { monuments } from '@/data/monuments';
import SlideControls from '@/components/monument/SlideControls';
import MonumentImage from '@/components/monument/MonumentImage';
import MonumentDescription from '@/components/monument/MonumentDescription';

const MonumentSection: React.FC = () => {
  const [currentMonumentIndex, setCurrentMonumentIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const currentMonument = monuments[currentMonumentIndex];
  
  const nextMonument = () => {
    setCurrentMonumentIndex((prev) => (prev + 1) % monuments.length);
  };
  
  const prevMonument = () => {
    setCurrentMonumentIndex((prev) => (prev - 1 + monuments.length) % monuments.length);
  };
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    console.log("Current monument:", currentMonument);
  }, [currentMonument]);

  return (
    <section 
      id="ideas" 
      className="relative py-16 md:py-20 lg:py-20 px-4 bg-cover bg-center"
      style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.9), rgba(255,255,255,0.9)), url("https://images.unsplash.com/photo-1504198322253-cfa87a0ff60f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")' }}
      ref={sectionRef}
    >
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="inline-block font-accent text-black text-sm uppercase tracking-widest mb-3 opacity-0 animate-fade-in font-semibold">Thought Exercise</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium mb-4 sm:mb-6 opacity-0 animate-fade-in" style={{ animationDelay: '300ms' }}>{currentMonument.name}</h2>
        </div>
        
        <div className="flex flex-col items-center mb-10 relative">
          <MonumentImage 
            image={currentMonument.image} 
            name={currentMonument.name} 
            location={currentMonument.location} 
          />
          
          <SlideControls 
            currentIndex={currentMonumentIndex}
            totalItems={monuments.length}
            onPrev={prevMonument}
            onNext={nextMonument}
            onSelect={setCurrentMonumentIndex}
          />
        </div>
        
        <MonumentDescription description={currentMonument.description} />
      </div>
    </section>
  );
};

export default MonumentSection;
