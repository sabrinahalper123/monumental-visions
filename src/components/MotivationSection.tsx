
import React, { useEffect, useRef, useState } from 'react';
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
    "The Seven Wonders of the Ancient World inspired Egyptians, Babylonians, and Greeks to rethink their place in the world. The Eiffel Tower was originally a way for the French to showcase their new technology of steel making and steel casting at the 1889 World Fair.",
    "The Statue of Liberty inspired generations of immigrants entering Ellis Island and symbolized freedom and hope for a better future.",
    "Somehow, Western society has lost the drive to build large scale, heart changing, odes to progress. It's time to revive this tradition and build monuments that inspire generations to come.",
    "Monumental is building the next generation of large scale public works to inspire humanity to build its future."
  ];

  const monuments = [
    {
      image: "/lovable-uploads/60c4ecfc-2dfb-48f4-8040-a2fba8260d8e.png",
      alt: "Mount Rushmore under construction showing workers on scaffolding",
      title: "Mount Rushmore",
      year: "1941",
      location: "SOUTH DAKOTA, 1927",
      captionPosition: "bottom-right"
    },
    {
      image: "/lovable-uploads/75a0e077-b77b-4173-b0ee-15e5aea1655b.png",
      alt: "Statue of Liberty under construction",
      title: "Statue of Liberty",
      year: "1886",
      location: "NEW YORK, 1884",
      captionPosition: "bottom-right"
    },
    {
      image: "/lovable-uploads/7da1d04e-315d-4379-a49b-ba062ad150f9.png",
      alt: "Christ the Redeemer statue under construction in Rio de Janeiro",
      title: "Christ the Redeemer",
      year: "1931",
      location: "RIO DE JANEIRO, 1927",
      captionPosition: "bottom-right"
    }
  ];
  
  const processYear = (yearStr: string) => {
    if (yearStr.includes("BC")) {
      return -parseInt(yearStr.replace(" BC", ""), 10);
    }
    if (yearStr.includes("BCE")) {
      return -parseInt(yearStr.replace(" BCE", ""), 10);
    }
    if (yearStr.includes("CE")) {
      return parseInt(yearStr.replace("s CE", "").replace(" CE", ""), 10);
    }
    return parseInt(yearStr, 10);
  };
  
  const unsortedInspirationImages = [
    {
      src: "/lovable-uploads/ee2bb267-8e96-49d2-ab93-c78ff2b814bf.png",
      alt: "Eiffel Tower with green park and people relaxing in Paris, France",
      title: "Eiffel Tower",
      location: "Paris",
      year: "1889"
    },
    {
      src: "/lovable-uploads/27357f25-0be9-4db5-a98a-90ef5016e090.png",
      alt: "Pyramids of Giza in Egypt",
      title: "Pyramids of Giza",
      location: "Egypt",
      year: "2550 BC"
    },
    {
      src: "/lovable-uploads/ba8bda9d-b2ef-4903-a21e-1ed96f23efe3.png",
      alt: "Christ the Redeemer statue rising above clouds in Rio de Janeiro",
      title: "Christ the Redeemer",
      location: "Rio de Janeiro",
      year: "1931"
    },
    {
      src: "/lovable-uploads/01b7a8ed-9b94-4406-b5ae-3702a6c5a0a7.png",
      alt: "Mount Rushmore National Memorial showing the faces of four U.S. presidents",
      title: "Mount Rushmore",
      location: "South Dakota",
      year: "1941"
    },
    {
      src: "/lovable-uploads/71541524-00d1-4cc2-9d5e-51525a6cc55c.png",
      alt: "Chichen Itza pyramid against sunset sky",
      title: "Chichen Itza",
      location: "Mexico",
      year: "800-1100s CE"
    },
    {
      src: "/lovable-uploads/74b964ae-0c58-4c6e-9827-91150bf7afef.png",
      alt: "Colossus of Rhodes ancient illustration with a giant figure straddling a harbor",
      title: "Colossus of Rhodes",
      location: "Greece",
      year: "280 BC"
    },
    {
      src: "/lovable-uploads/c6faf248-f55a-49bc-b0c1-29431c1d1330.png",
      alt: "Taj Mahal white marble mausoleum with reflecting pool and gardens in Agra, India",
      title: "Taj Mahal",
      location: "Agra",
      year: "1632"
    },
    {
      src: "/lovable-uploads/7ab7e7c5-2115-4eb5-ba08-41f5b1b8b3c1.png",
      alt: "Lighthouse of Alexandria ancient illustration showing the tall lighthouse on an island",
      title: "Lighthouse of Alexandria",
      location: "Egypt",
      year: "280 BC"
    },
    {
      src: "/lovable-uploads/9f0f4497-758c-4bfb-a523-e7d553979f27.png",
      alt: "Statue of Liberty standing tall on Liberty Island with a colorful sunset sky",
      title: "Statue of Liberty",
      location: "New York",
      year: "1886"
    }
  ];
  
  const inspirationImages = [...unsortedInspirationImages].sort((a, b) => {
    const yearA = processYear(a.year);
    const yearB = processYear(b.year);
    return yearA - yearB;
  });

  return (
    <section 
      id="motivation" 
      ref={sectionRef}
      className="relative py-8 md:py-16 px-4"
    >
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="animate-on-scroll opacity-0 section-heading">Motivation</h2>
          </div>
          
          <div className="animate-on-scroll opacity-0 text-center mb-8">
            <p className={cn(
              "font-semibold font-accent text-base uppercase tracking-wider"
            )}>
              Monumental is building the next generation of large scale public works to inspire humanity to build its future.
            </p>
          </div>
          
          <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="animate-on-scroll opacity-0 md:col-span-7 space-y-6">
                <p className="text-lg leading-relaxed">{motivationParagraphs[0]}</p>
                <p className="text-lg leading-relaxed">{motivationParagraphs[1]}</p>
                <p className="text-lg leading-relaxed">{motivationParagraphs[2]}</p>
                <p className="text-lg leading-relaxed">{motivationParagraphs[3]}</p>
              </div>
              <div className="animate-on-scroll opacity-0 md:col-span-5 flex flex-col gap-6 justify-center">
                {monuments.map((monument, index) => (
                  <div key={index} className="relative overflow-hidden w-full max-w-[220px] aspect-square mx-auto">
                    <div className="relative h-full">
                      <img 
                        src={monument.image}
                        alt={monument.alt} 
                        className={cn(
                          "w-full h-full object-cover shadow-lg",
                          monument.title === "Christ the Redeemer" ? "object-top" : ""
                        )}
                      />
                      {monument.captionPosition === "top-left" && (
                        <div className="absolute top-0 left-2 mt-0.5">
                          <span className="px-2 py-0.5 bg-white/85 text-black text-xs font-accent tracking-wide">
                            {monument.location}
                          </span>
                        </div>
                      )}
                      {monument.captionPosition === "bottom-right" && (
                        <div className="absolute bottom-0 right-2 mb-0.5">
                          <span className="px-2 py-0.5 bg-white/85 text-black text-xs font-accent tracking-wide">
                            {monument.location}
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="mt-3 text-center">
                      <h3 className="text-sm font-medium">{monument.title} ({monument.year})</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="animate-on-scroll opacity-0 pt-10 pb-0">
              <div className="art-deco-divider"></div>
            </div>
            
            <div id="process" className="pt-2">
              <div className="text-center mb-12">
                <h2 className="animate-on-scroll opacity-0 process-heading">Our Process</h2>
              </div>
              
              <div className="animate-on-scroll opacity-0 text-lg leading-relaxed mb-12">
                We're starting small but thinking big, collaborating with bronze and marble foundries and artisans on several projects. Our goal is to create something meaningful with the community. <a href="mailto:hi@monumental.net" className="text-black hover:underline">Reach out</a> if you're an artist or architect interested in getting involved.
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <div className="animate-on-scroll opacity-0 space-y-4">
                  <h3 className="font-display text-xl mb-4">Sponsors</h3>
                  <p className="text-lg leading-relaxed">
                    The founding sponsor of Monumental is <a href="https://eladgil.com/" className="text-black hover:underline" target="_blank" rel="noopener noreferrer">Elad Gil</a>. Other sponsors and support list coming soon. 
                    Reach out to <a href="mailto:hi@monumental.net" className="text-black hover:underline">hi@monumental.net</a> if you're interested in supporting this project.
                  </p>
                </div>
                
                <div className="animate-on-scroll opacity-0 bg-mint p-6 border border-black/20">
                  <h3 className="font-display text-xl mb-4">Propose a Monument</h3>
                  <p className="mb-6 text-lg">
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
              
              <div className="animate-on-scroll opacity-0 max-w-3xl mx-auto w-full mt-16">
                <div className="relative mb-5">
                  <div className="flex justify-center">
                    <span className="relative px-4 bg-background text-black font-semibold font-accent text-sm">INSPIRATIONS</span>
                  </div>
                </div>
                
                <div className="animate-on-scroll opacity-0">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {inspirationImages.map((image, index) => (
                      <div key={index} className="flex flex-col items-center">
                        <div className="relative w-full h-[140px] mb-2 overflow-hidden rounded-sm shadow-md">
                          <img 
                            src={image.src}
                            alt={image.alt} 
                            className="w-full h-full object-cover"
                            onError={(e) => console.error('Image failed to load:', image.src)}
                            onLoad={() => console.log('Image loaded successfully:', image.src)}
                          />
                        </div>
                        <div className="text-center w-full py-1 px-2 text-black">
                          <span className="block uppercase tracking-wider text-xs font-medium" style={{ letterSpacing: '0.1em' }}>
                            {image.title}
                            {image.location && image.year && `, ${image.location} [est. ${image.year}]`}
                          </span>
                        </div>
                      </div>
                    ))}
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
