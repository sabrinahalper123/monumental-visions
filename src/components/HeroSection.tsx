
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
          backgroundImage: 'url("/lovable-uploads/33f46351-9263-4813-b773-dc49e5f8fdff.png")',
          transform: 'scale(1.2)', // Keeping scale to prevent cutoff
          filter: 'brightness(0.9)',
          backgroundPosition: 'right center' // Positioning to center on the right side of the image
        }}
      />
      
      {/* Image caption - Eiffel Tower */}
      <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 z-10">
        <span className="text-xs sm:text-sm uppercase tracking-wider text-white font-medium" style={{ letterSpacing: '0.1em' }}>
          Eiffel Tower Construction [1887-1889]
        </span>
      </div>
      
      {/* Content container */}
      <div className="absolute inset-0 flex flex-col justify-center items-center px-4 sm:px-6 md:px-8 -mt-40 sm:-mt-44 md:-mt-48 lg:-mt-52">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-sans font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-4 sm:mb-6 opacity-0 animate-fade-in tracking-tight text-white" style={{ 
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            animationDelay: '200ms',
            textShadow: '0 0 1px #0006, 0 0 1px #0006, 0 0 1px #0006, 0 0 1px #0006' // Keeping the thin black text-shadow for letter outline
          }}>
            Alexandria Monuments
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
