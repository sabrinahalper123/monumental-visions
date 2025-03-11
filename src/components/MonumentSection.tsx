
import React, { useEffect, useRef } from 'react';
import { cn } from "@/lib/utils";

const MonumentSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  
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
    
    const paragraphs = textRef.current?.querySelectorAll('p');
    paragraphs?.forEach((p, index) => {
      p.style.animationDelay = `${index * 200}ms`;
      p.classList.add('opacity-0');
      observer.observe(p);
    });
    
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="ideas" 
      className="relative py-16 md:py-20 lg:py-20 px-4 bg-cover bg-center"
      style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.9), rgba(255,255,255,0.9)), url("https://images.unsplash.com/photo-1504198322253-cfa87a0ff60f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")' }}
      ref={sectionRef}
    >
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="inline-block font-accent text-gold text-sm uppercase tracking-widest mb-3 opacity-0 animate-fade-in">Proposed Monument</span>
          <h2 className="section-heading">Athena</h2>
        </div>
        
        <div className="flex flex-col items-center mb-10">
          {/* Centered image */}
          <div className="max-w-2xl mx-auto opacity-0 animate-fade-in" style={{ animationDelay: '400ms' }}>
            <div className="relative">
              <div className="absolute inset-0 border-2 border-gold transform rotate-3 z-0"></div>
              <img 
                src="/lovable-uploads/f9cf8186-c0c8-467d-8b63-a890b03d5a85.png"
                alt="Athena Monument Concept" 
                className="relative z-10 w-full h-auto object-cover shadow-lg"
              />
            </div>
            <div className="flex justify-center mt-6">
              <span className="inline-block px-4 py-1 bg-gold/10 border border-gold/30 text-xs font-medium uppercase tracking-widest text-primary">
                Presidio, San Francisco
              </span>
            </div>
          </div>
        </div>
        
        {/* Text section below the image */}
        <div className="max-w-3xl mx-auto" ref={textRef}>
          <p className="mb-4 text-lg leading-relaxed">
            The proposed Athena Monument in the Presidio stands as a powerful tribute to wisdom, strategy, and the deep historical ties between California and its role as a western stronghold of the United States.
          </p>
          <p className="mb-4 text-lg leading-relaxed">
            Athena, the Greek goddess of wisdom and war, appears on the Great Seal of California to symbolize the state's immediate statehood—born fully formed, just as Athena herself was.
          </p>
          <p className="mb-4 text-lg leading-relaxed">
            Positioned in the Presidio of San Francisco, the Athena monument honors the land's long-standing role in defense and leadership. The Presidio was established in 1776 as a Spanish military fort, later controlled by Mexico, and ultimately became a key U.S. Army post, playing a role in every major American conflict from the Civil War through Desert Storm.
          </p>
          <p className="text-lg leading-relaxed">
            Athena also embodies justice, wisdom, and heroic endeavor, standing as a guardian overlooking the bay.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MonumentSection;
