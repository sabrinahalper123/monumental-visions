
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
          backgroundImage: 'url("https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2096&q=80")',
          transform: 'scale(1.1)',
          filter: 'brightness(0.7) contrast(1.1)' 
        }}
      />
      
      {/* Decorative overlay */}
      <div className="absolute inset-0 bg-art-deco-pattern opacity-15"></div>
      
      {/* Gradient overlay with increased opacity */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent"></div>
      
      {/* Content container - moved up by adjusting justify-end to justify-center and removing some bottom padding */}
      <div className="absolute inset-0 flex flex-col justify-center items-center px-4 sm:px-6 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Removed the yellow lines that were here */}
          
          <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-4 sm:mb-6 opacity-0 animate-fade-in tracking-wider sm:tracking-widest text-black" style={{ 
            textTransform: 'uppercase', 
            letterSpacing: '0.15em',
            textShadow: '2px 2px 0px rgba(212, 175, 55, 0.3)'
          }}>
            Monumental
          </h1>
          
          <p className="font-accent text-lg sm:text-xl md:text-2xl opacity-0 animate-fade-in" style={{ animationDelay: '300ms' }}>
            Inspiring humanity to build its future
          </p>
        </div>
      </div>
      
      {/* Scroll indicator - Styled similar to the previous "Discover" button */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center opacity-0 animate-fade-in" style={{ animationDelay: '900ms' }}>
        <span 
          className="text-xs sm:text-sm uppercase tracking-wider sm:tracking-widest mb-2 bg-gold text-white px-6 sm:px-8 py-1.5 sm:py-2 font-medium"
          style={{
            clipPath: 'polygon(0 0, 100% 0, 95% 100%, 5% 100%)',
            letterSpacing: '0.1em',
          }}
        >
          Scroll
        </span>
        <div className="w-0.5 h-6 sm:h-8 bg-gradient-to-b from-gold to-transparent animate-pulse"></div>
      </div>
    </section>
  );
};

export default HeroSection;
