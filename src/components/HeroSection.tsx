
import React, { useEffect, useRef } from 'react';
import AnimatedText from './AnimatedText';

const HeroSection: React.FC = () => {
  const imageRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!imageRef.current) return;
      const scrollPosition = window.scrollY;
      // Parallax effect for hero image
      imageRef.current.style.transform = `translateY(${scrollPosition * 0.2}px)`;
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Hero background */}
      <div 
        ref={imageRef}
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url("/lovable-uploads/5cddec10-307b-44f4-996d-316b082f4c0f.png")',
          transform: 'scale(1.1)',
          filter: 'brightness(0.6) contrast(1.2)' 
        }}
      />
      
      {/* Decorative overlay */}
      <div className="absolute inset-0 bg-art-deco-pattern opacity-15"></div>
      
      {/* Gradient overlay with increased opacity */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent"></div>
      
      {/* Content container */}
      <div className="absolute inset-0 flex flex-col justify-end items-center pb-24 md:pb-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <span className="inline-block w-16 h-1 bg-gold mb-3"></span>
            <span className="inline-block w-32 h-1 bg-gold"></span>
          </div>
          
          <h1 className="font-display font-bold text-5xl md:text-7xl lg:text-8xl mb-6 opacity-0 animate-fade-in tracking-widest text-black" style={{ 
            textTransform: 'uppercase', 
            letterSpacing: '0.2em',
            textShadow: '2px 2px 0px rgba(212, 175, 55, 0.3)'
          }}>
            Monumental
          </h1>
          
          <p className="font-accent text-xl md:text-2xl opacity-0 animate-fade-in" style={{ animationDelay: '300ms' }}>
            Inspiring humanity to build its future
          </p>
          
          <div className="mt-12 opacity-0 animate-fade-in" style={{ animationDelay: '600ms' }}>
            <a href="#athena" className="art-deco-button">
              Discover
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center opacity-0 animate-fade-in" style={{ animationDelay: '900ms' }}>
        <span className="text-xs uppercase tracking-widest mb-2">Scroll</span>
        <div className="w-0.5 h-8 bg-gradient-to-b from-gold to-transparent animate-pulse"></div>
      </div>
    </section>
  );
};

export default HeroSection;
