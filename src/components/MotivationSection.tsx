
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
    "Monumental is building the next generation of large scale public works to inspire humanity to build its future. We are starting small but thinking big. Right now we're experimenting with marble work and brass works."
  ];

  return (
    <section 
      id="motivation" 
      ref={sectionRef}
      className="relative py-20 md:py-24 lg:py-32 px-4"
    >
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="animate-on-scroll opacity-0 inline-block font-accent text-gold text-sm uppercase tracking-widest mb-3">Our Vision</span>
            <h2 className="animate-on-scroll opacity-0 section-heading">Motivation</h2>
          </div>
          
          <div className="space-y-6 mb-12">
            {motivationParagraphs.map((paragraph, index) => (
              <p 
                key={index} 
                className={cn(
                  "animate-on-scroll opacity-0 text-lg leading-relaxed",
                  index === 2 && "text-primary font-medium"
                )}
              >
                {paragraph}
              </p>
            ))}
          </div>
          
          <div className="my-16">
            <div className="animate-on-scroll opacity-0 art-deco-divider"></div>
          </div>
          
          <div id="process">
            <div className="text-center mb-12">
              <span className="animate-on-scroll opacity-0 inline-block font-accent text-gold text-sm uppercase tracking-widest mb-3">How We Work</span>
              <h2 className="animate-on-scroll opacity-0 section-heading">Our Process</h2>
            </div>
            
            <p className="animate-on-scroll opacity-0 text-lg leading-relaxed mb-8">
              We are committed to working alongside local artists to create something meaningful for the community. 
              Our goal is to foster collaboration, ensuring this project is shaped by and for the citizens of San Francisco.
            </p>
            
            <div className="animate-on-scroll opacity-0 bg-gradient-to-r from-gold/5 via-gold/10 to-gold/5 p-8 border border-gold/20 mb-12">
              <h3 className="font-display text-2xl mb-4">Propose a Monument</h3>
              <p className="mb-6">
                If you have an idea of where and what we should build, propose a monument here.
              </p>
              <a href="#" className="art-deco-button">
                Submit Proposal
              </a>
            </div>
            
            <div>
              <h3 className="animate-on-scroll opacity-0 font-display text-2xl mb-4">Sponsors</h3>
              <p className="animate-on-scroll opacity-0 text-lg leading-relaxed">
                The founding sponsor of Monumental is Elad Gil. Other sponsors and support list coming soon. 
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
