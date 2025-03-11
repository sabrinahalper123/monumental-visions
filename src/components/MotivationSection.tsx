import React, { useEffect, useRef, useState } from 'react';
import { cn } from "@/lib/utils";

const ImageSlideshow: React.FC<{
  images: Array<{
    src: string;
    alt: string;
    title?: string;
  }>;
  interval?: number;
  className?: string;
}> = ({ images, interval = 4000, className }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);
    
    return () => clearInterval(timer);
  }, [images.length, interval]);
  
  return (
    <div className={cn("relative overflow-hidden group", className)}>
      <div className="relative h-full">
        <div className="absolute inset-0 border-2 border-gold/30 transform rotate-2 z-0 group-hover:rotate-0 transition-transform duration-300"></div>
        {images.map((image, index) => (
          <div 
            key={index}
            className={cn(
              "absolute inset-0 transition-opacity duration-1000 h-full",
              index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            )}
          >
            <img 
              src={image.src}
              alt={image.alt} 
              className="w-full h-full object-contain shadow-lg group-hover:scale-105 transition-transform duration-500"
            />
            {image.title && (
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-center py-1 text-sm">
                {image.title}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

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
    "The Seven Wonders of the Ancient World inspired Egyptians, Babylonians, and Greeks to rethink their place in the world. The Eiffel Tower was originally a way for the French to showcase their new technology of steel making and steel casting at the 1889 World Fair.",
    "The Statue of Liberty inspired generations of immigrants entering Ellis Island and symbolized freedom and hope for a better future.",
    "Somehow, Western society has lost the drive to build large scale, heart changing, odes to progress.",
    "Monumental is building the next generation of large scale public works to inspire humanity to build its future."
  ];

  const monuments = [
    {
      image: "/lovable-uploads/f0ec81f2-364c-4247-9c58-d696022349b8.png",
      alt: "Statue of Liberty with New York skyline",
      title: "Statue of Liberty (1886)"
    },
    {
      image: "/lovable-uploads/8933ec0a-b111-43e6-a4a2-350068e0ddb5.png",
      alt: "Eiffel Tower against blue sky",
      title: "Eiffel Tower (1889)"
    }
  ];
  
  const newSlideshowImages = [
    {
      src: "/lovable-uploads/ba8bda9d-b2ef-4903-a21e-1ed96f23efe3.png",
      alt: "Christ the Redeemer statue rising above clouds in Rio de Janeiro",
      title: "Christ the Redeemer"
    },
    {
      src: "/lovable-uploads/01b7a8ed-9b94-4406-b5ae-3702a6c5a0a7.png",
      alt: "Mount Rushmore National Memorial showing the faces of four U.S. presidents",
      title: "Mount Rushmore"
    },
    {
      src: "/lovable-uploads/74b964ae-0c58-4c6e-9827-91150bf7afef.png",
      alt: "Colossus of Rhodes ancient illustration with a giant figure straddling a harbor",
      title: "Colossus of Rhodes"
    },
    {
      src: "/lovable-uploads/c6faf248-f55a-49bc-b0c1-29431c1d1330.png",
      alt: "Taj Mahal white marble mausoleum with reflecting pool and gardens in Agra, India",
      title: "Taj Mahal"
    }
  ];

  return (
    <section 
      id="motivation" 
      ref={sectionRef}
      className="relative py-4 md:py-8 px-4"
    >
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-6">
            <span className="animate-on-scroll opacity-0 inline-block font-accent text-gold text-sm uppercase tracking-widest mb-2">Our Vision</span>
            <h2 className="animate-on-scroll opacity-0 section-heading">Motivation</h2>
          </div>
          
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
              <div className="animate-on-scroll opacity-0 md:col-span-7 space-y-3">
                <p className="text-base leading-relaxed">{motivationParagraphs[0]}</p>
                <p className="text-base leading-relaxed">{motivationParagraphs[1]}</p>
                <p className="text-base leading-relaxed">{motivationParagraphs[2]}</p>
                <p className="text-base leading-relaxed">{motivationParagraphs[3]}</p>
              </div>
              <div className="animate-on-scroll opacity-0 md:col-span-5 flex flex-row md:flex-col gap-3 justify-center">
                {monuments.map((monument, index) => (
                  <div key={index} className="relative overflow-hidden group w-1/2 md:w-full max-w-[180px] md:max-w-none">
                    <div className="relative">
                      <div className="absolute inset-0 border-2 border-gold/30 transform rotate-2 z-0 group-hover:rotate-0 transition-transform duration-300"></div>
                      <img 
                        src={monument.image}
                        alt={monument.alt} 
                        className="relative z-10 w-full h-auto max-h-[150px] aspect-[3/4] object-cover shadow-lg group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="mt-1 text-center">
                      <h3 className="text-sm font-medium">{monument.title}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="animate-on-scroll opacity-0 text-center">
              <p className={cn(
                "text-lg leading-relaxed text-primary font-medium mb-6"
              )}>
                {motivationParagraphs[4]}
              </p>
            </div>

            <div className="animate-on-scroll opacity-0 art-deco-divider my-4"></div>
            
            <div id="process">
              <div className="text-center mb-4">
                <span className="animate-on-scroll opacity-0 inline-block font-accent text-gold text-sm uppercase tracking-widest mb-1">How We Work</span>
                <h2 className="animate-on-scroll opacity-0 section-heading">Our Process</h2>
              </div>
              
              <div className="animate-on-scroll opacity-0 text-base leading-relaxed mb-4">
                We are starting small but thinking big. We are committed to collaborating with local artists to create something meaningful for the community, ensuring this project is shaped by and for the citizens. Right now, we're experimenting with bronze and marble works.
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
                <div className="animate-on-scroll opacity-0 space-y-2">
                  <h3 className="font-display text-xl mb-2">Sponsors</h3>
                  <p className="text-base leading-relaxed">
                    The founding sponsor of Monumental is <a href="https://eladgil.com/" className="text-gold hover:underline" target="_blank" rel="noopener noreferrer">Elad Gil</a>. Other sponsors and support list coming soon. 
                    Reach out to <a href="mailto:monumental@eladgil.com" className="text-gold hover:underline">monumental@eladgil.com</a> if you're interested in supporting this project.
                  </p>
                </div>
                
                <div className="animate-on-scroll opacity-0 bg-gradient-to-r from-gold/5 via-gold/10 to-gold/5 p-5 border border-gold/20">
                  <h3 className="font-display text-xl mb-2">Propose a Monument</h3>
                  <p className="mb-3 text-base">
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
              </div>
              
              <div className="animate-on-scroll opacity-0 max-w-3xl mx-auto w-full mt-6">
                <div className="relative mb-3">
                  <div className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
                  <div className="absolute left-1/4 right-1/4 top-1/2 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent"></div>
                  <div className="flex justify-center">
                    <span className="relative px-4 bg-background text-gold font-accent text-sm">INSPIRATIONS</span>
                  </div>
                </div>
                
                <div className="relative">
                  <ImageSlideshow 
                    images={newSlideshowImages} 
                    interval={4000} 
                    className="w-full h-[250px] md:h-[300px]"
                  />
                  
                  <div className="absolute -bottom-6 left-0 right-0 h-10 pointer-events-none">
                    <div className="absolute left-0 w-1/4 bottom-0 h-px bg-gradient-to-r from-gold/50 to-transparent"></div>
                    <div className="absolute right-0 w-1/4 bottom-0 h-px bg-gradient-to-r from-transparent to-gold/50"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MotivationSection;
