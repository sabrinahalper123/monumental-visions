
import React, { useEffect, useRef } from 'react';

const PalisadesSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
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
      const elements = sectionRef.current.querySelectorAll('.animate-on-scroll');
      elements.forEach((el, index) => {
        el.classList.add('opacity-0');
        (el as HTMLElement).style.animationDelay = `${index * 200}ms`;
        observer.observe(el);
      });
    }
    
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="palisades" 
      ref={sectionRef}
      className="relative py-20 md:py-24 lg:py-32 px-4 bg-gold/5"
    >
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent"></div>
      
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="animate-on-scroll inline-block font-accent text-gold text-sm uppercase tracking-widest mb-3">
            Future Project
          </span>
          <h2 className="animate-on-scroll section-heading">Palisades</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((index) => (
            <div 
              key={index} 
              className="animate-on-scroll relative overflow-hidden group"
            >
              <div className="aspect-w-3 aspect-h-4 mb-4 overflow-hidden">
                <img 
                  src={`https://images.unsplash.com/photo-157006455176${index}-87z6oqrtavl?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80`} 
                  alt={`Palisades Concept ${index}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-xl font-display font-bold mb-2">Palisades Vision {index}</h3>
              <p className="text-muted-foreground mb-4">
                A monumental installation envisioned for the California coastline, representing the natural beauty and geological formations that define our landscape.
              </p>
              <span className="text-gold text-sm uppercase tracking-wider">Coming 2025</span>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center animate-on-scroll">
          <a href="#" className="art-deco-button">
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default PalisadesSection;
