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
      {/* Hero background with the Eiffel Tower construction progression image */}
      <div 
        ref={imageRef}
        className="absolute inset-0 w-full h-full bg-cover bg-no-repeat"
        style={{ 
          backgroundImage: 'url("/lovable-uploads/598e8131-1224-4d6d-8920-9530bf85e32d.png")',
          transform: 'scale(1.2)', // Keeping scale to prevent cutoff
          filter: 'brightness(0.9)',
          backgroundPosition: 'center 30% right 50%' // Moved all the way to the right to show the left side
        }}
      />
      
      {/* Image caption - Eiffel Tower */}
      <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 z-10">
        <span className="text-xs sm:text-sm uppercase tracking-wider text-white font-medium" style={{ letterSpacing: '0.1em' }}>
          Eiffel Tower Construction Progression [1887-1889]
        </span>
      </div>
      
      {/* Content container */}
      <div className="absolute inset-0 flex flex-col justify-center items-center px-4 sm:px-6 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-sans font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-4 sm:mb-6 opacity-0 animate-fade-in tracking-tight text-white" style={{ 
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            animationDelay: '200ms',
            textShadow: '0 0 1px #0006, 0 0 1px #0006, 0 0 1px #0006, 0 0 1px #0006' // Keeping the thin black text-shadow for letter outline
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
