
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
      {/* Hero background - increased opacity by adjusting brightness filter */}
      <div 
        ref={imageRef}
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url("/lovable-uploads/4488f7d9-a9e9-4e53-80ac-ce60e9ce22ea.png")',
          transform: 'scale(1.1)',
          filter: 'brightness(0.85)', // Increased from 0.75 to 0.85 for higher opacity
          backgroundPosition: 'center 75%'
        }}
      />
      
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent"></div>
      
      {/* Content container */}
      <div className="absolute inset-0 flex flex-col justify-center items-center px-4 sm:px-6 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-sans font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-4 sm:mb-6 opacity-0 animate-fade-in tracking-tight text-white" style={{ 
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            animationDelay: '200ms'
          }}>
            Monumental
          </h1>
          
          <p className="font-sans text-lg sm:text-xl md:text-2xl opacity-0 animate-fade-in text-white/90" style={{ animationDelay: '500ms' }}>
            Inspiring humanity to build its future
          </p>
        </div>
      </div>
      
      {/* Scroll indicator - Sleeker version */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center opacity-0 animate-fade-in" style={{ animationDelay: '900ms' }}>
        <span 
          className="text-xs sm:text-sm uppercase tracking-wider mb-2 bg-white/10 backdrop-blur-sm text-white px-6 sm:px-8 py-1.5 sm:py-2 font-medium"
          style={{
            letterSpacing: '0.1em',
          }}
        >
          Scroll
        </span>
        <div className="w-px h-6 sm:h-8 bg-white/40 animate-pulse"></div>
      </div>
    </section>
  );
};

export default HeroSection;
