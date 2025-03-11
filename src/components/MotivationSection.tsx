
import React, { useEffect, useRef } from 'react';
import { cn } from "@/lib/utils";

const MotivationSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.animate-on-scroll');
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('animate-fade-in');
              }, index * 200);
            });
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

  const motivationParagraphs = [
    "Throughout human history, large-scale monuments and public art works have inspired optimism, awe, and ambition.",
    "The Seven Wonders of the Ancient World inspired Egyptians, Babylonians, and Greeks to rethink their place in the world. The Eiffel Tower was originally a way for the French to showcase their new technology of steel making and steel casting at the 1881 World Fair. The Statue of Liberty inspired generations of immigrants entering Ellis Island and symbolized freedom and hope for a better future.",
    "Somehow, Western society has lost the drive to build large scale, heart changing, odes to progress.",
    "Monumental is building the next generation of large scale public works to inspire humanity to build its future."
  ];

  const monuments = [
    {
      image: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e",
      alt: "Statue of Liberty",
      title: "Statue of Liberty",
      description: "Symbol of freedom and hope for generations of immigrants"
    },
    {
      image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716",
      alt: "Eiffel Tower",
      title: "Eiffel Tower",
      description: "French innovation in steel technology at the 1881 World Fair"
    },
    {
      image: "https://images.unsplash.com/photo-1527576539890-dfa815648363",
      alt: "Great Pyramid",
      title: "Ancient Wonders",
      description: "The Seven Wonders inspired civilizations to think bigger"
    }
  ];

  return (
    <section 
      id="motivation" 
      ref={sectionRef}
      className="relative py-20 md:py-24 px-4"
    >
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="animate-on-scroll opacity-0 inline-block font-accent text-gold text-sm uppercase tracking-widest mb-3">Our Vision</span>
            <h2 className="animate-on-scroll opacity-0 section-heading">Motivation</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
            <div className="col-span-1 md:col-span-2 space-y-6">
              {motivationParagraphs.map((paragraph, index) => (
                <p 
                  key={index} 
                  className={cn(
                    "animate-on-scroll opacity-0 text-lg leading-relaxed",
                    index === 3 && "text-primary font-medium"
                  )}
                >
                  {paragraph}
                </p>
              ))}
            </div>
            
            <div className="animate-on-scroll opacity-0 space-y-6">
              {monuments.map((monument, index) => (
                <div key={index} className="relative mb-6 overflow-hidden group">
                  <div className="relative">
                    <div className="absolute inset-0 border-2 border-gold/30 transform rotate-2 z-0 group-hover:rotate-0 transition-transform duration-300"></div>
                    <img 
                      src={monument.image}
                      alt={monument.alt} 
                      className="relative z-10 w-full h-auto aspect-square object-cover shadow-lg group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="mt-2 text-center">
                    <h3 className="text-lg font-medium">{monument.title}</h3>
                    <p className="text-sm text-gray-600">{monument.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="my-12">
            <div className="animate-on-scroll opacity-0 art-deco-divider"></div>
          </div>
          
          <div id="process">
            <div className="text-center mb-12">
              <span className="animate-on-scroll opacity-0 inline-block font-accent text-gold text-sm uppercase tracking-widest mb-3">How We Work</span>
              <h2 className="animate-on-scroll opacity-0 section-heading">Our Process</h2>
            </div>
            
            <p className="animate-on-scroll opacity-0 text-lg leading-relaxed mb-8">
              We are starting small but thinking big. Right now we're experimenting with marble work and brass works. We are committed to working alongside local artists to create something meaningful for the community. 
              Our goal is to foster collaboration, ensuring this project is shaped by and for the citizens of San Francisco.
            </p>
            
            <div className="animate-on-scroll opacity-0 bg-gradient-to-r from-gold/5 via-gold/10 to-gold/5 p-8 border border-gold/20 mb-12">
              <h3 className="font-display text-2xl mb-4">Propose a Monument</h3>
              <p className="mb-6">
                If you have an idea of where and what we should build, propose a monument here.
              </p>
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSdP4v-778v3NyvX8GrxWw_nqho-5Dw6mfTAvMhUGflqJCfkIA/viewform?usp=sharing" 
                className="art-deco-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                Submit Proposal
              </a>
            </div>
            
            <div>
              <h3 className="animate-on-scroll opacity-0 font-display text-2xl mb-4">Sponsors</h3>
              <p className="animate-on-scroll opacity-0 text-lg leading-relaxed">
                The founding sponsor of Monumental is <a href="https://eladgil.com/" className="text-gold hover:underline" target="_blank" rel="noopener noreferrer">Elad Gil</a>. Other sponsors and support list coming soon. 
                Reach out to <a href="mailto:monumental@eladgil.com" className="text-gold hover:underline">monumental@eladgil.com</a> if you're interested in supporting this project.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MotivationSection;
