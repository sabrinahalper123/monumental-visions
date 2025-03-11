
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
}> = ({ images, interval = 7000, className }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);
    
    return () => clearInterval(timer);
  }, [images.length, interval]);
  
  return (
    <div className={cn("relative overflow-hidden group", className)}>
      <div className="relative">
        <div className="absolute inset-0 border-2 border-gold/30 transform rotate-2 z-0 group-hover:rotate-0 transition-transform duration-300"></div>
        {images.map((image, index) => (
          <div 
            key={index}
            className={cn(
              "absolute inset-0 transition-opacity duration-1000",
              index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            )}
          >
            <img 
              src={image.src}
              alt={image.alt} 
              className="w-full h-auto object-cover shadow-lg group-hover:scale-105 transition-transform duration-500"
            />
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
  
  const slideshowImages = [
    {
      src: "/lovable-uploads/a3c9eca4-02e5-461c-b352-333e819964d5.png",
      alt: "Christ the Redeemer statue above clouds",
      title: "Christ the Redeemer (1922)"
    },
    {
      src: "/lovable-uploads/d018935a-aca2-46e4-9b1f-bb2c207d8d9f.png",
      alt: "Mount Rushmore with four presidents carved in mountain",
      title: "Mount Rushmore (1927)"
    },
    {
      src: "/lovable-uploads/27357f25-0be9-4db5-a98a-90ef5016e090.png",
      alt: "Pyramids of Giza with Sphinx",
      title: "Pyramids of Giza (c. 2600 – c. 2500 BC)"
    }
  ];
  
  const newSlideshowImages = [
    {
      src: "/lovable-uploads/ba8bda9d-b2ef-4903-a21e-1ed96f23efe3.png",
      alt: "Christ the Redeemer statue rising above clouds in Rio de Janeiro"
    },
    {
      src: "/lovable-uploads/7ef6cae9-85e8-462b-8221-5c27c0a18644.png",
      alt: "Mount Rushmore National Memorial showing four presidents carved in mountain"
    },
    {
      src: "/lovable-uploads/06fd2b9b-4b1b-49ca-a426-96ab0e31b817.png",
      alt: "Taj Mahal with its reflection in water"
    }
  ];

  return (
    <section 
      id="motivation" 
      ref={sectionRef}
      className="relative pt-8 pb-20 md:pb-24 px-4"
    >
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="animate-on-scroll opacity-0 inline-block font-accent text-gold text-sm uppercase tracking-widest mb-3">Our Vision</span>
            <h2 className="animate-on-scroll opacity-0 section-heading">Motivation</h2>
            <p className={cn(
              "animate-on-scroll opacity-0 text-lg leading-relaxed text-primary font-medium mt-6 mb-10"
            )}>
              {motivationParagraphs[3]}
            </p>
          </div>
          
          <div className="space-y-16">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-center">
              <div className="animate-on-scroll opacity-0 order-2 md:order-1 md:col-span-3 space-y-6">
                <p className="text-lg leading-relaxed">{motivationParagraphs[0]}</p>
                <p className="text-lg leading-relaxed">
                  The Seven Wonders of the Ancient World inspired Egyptians, Babylonians, and Greeks to rethink their place in the world. The Eiffel Tower was originally a way for the French to showcase their new technology of steel making and steel casting at the 1889 World Fair.
                </p>
              </div>
              <div className="animate-on-scroll opacity-0 order-1 md:order-2 md:col-span-2">
                <div className="relative overflow-hidden group">
                  <div className="relative">
                    <div className="absolute inset-0 border-2 border-gold/30 transform rotate-2 z-0 group-hover:rotate-0 transition-transform duration-300"></div>
                    <img 
                      src={monuments[1].image}
                      alt={monuments[1].alt} 
                      className="relative z-10 w-full h-auto aspect-square object-cover shadow-lg group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="mt-2 text-center">
                    <h3 className="text-lg font-medium">{monuments[1].title}</h3>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-center mb-16">
              <div className="animate-on-scroll opacity-0 order-1 md:col-span-2">
                <div className="relative overflow-hidden group">
                  <div className="relative">
                    <div className="absolute inset-0 border-2 border-gold/30 transform rotate-2 z-0 group-hover:rotate-0 transition-transform duration-300"></div>
                    <img 
                      src={monuments[0].image}
                      alt={monuments[0].alt} 
                      className="relative z-10 w-full h-auto aspect-square object-cover shadow-lg group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="mt-2 text-center">
                    <h3 className="text-lg font-medium">{monuments[0].title}</h3>
                  </div>
                </div>
              </div>
              <div className="animate-on-scroll opacity-0 order-2 md:col-span-3 space-y-6">
                <p className="text-lg leading-relaxed">
                  The Statue of Liberty inspired generations of immigrants entering Ellis Island and symbolized freedom and hope for a better future.
                </p>
                <p className="text-lg leading-relaxed">{motivationParagraphs[2]}</p>
              </div>
            </div>
            
            {/* Full-width slideshow below Statue of Liberty */}
            <div className="animate-on-scroll opacity-0 w-full mb-24">
              <ImageSlideshow 
                images={newSlideshowImages} 
                interval={7000} 
                className="w-full h-[400px] md:h-[500px]"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-center">
              <div className="animate-on-scroll opacity-0 order-2 md:order-1 md:col-span-3 space-y-6">
                {/* Content can be added here if needed */}
              </div>
              <div className="animate-on-scroll opacity-0 order-1 md:order-2 md:col-span-2">
                <ImageSlideshow images={slideshowImages} interval={7000} />
              </div>
            </div>
          </div>
          
          <div className="my-24">
            <div className="animate-on-scroll opacity-0 art-deco-divider"></div>
          </div>
          
          <div id="process">
            <div className="text-center mb-12">
              <span className="animate-on-scroll opacity-0 inline-block font-accent text-gold text-sm uppercase tracking-widest mb-3">How We Work</span>
              <h2 className="animate-on-scroll opacity-0 section-heading">Our Process</h2>
            </div>
            
            <p className="animate-on-scroll opacity-0 text-lg leading-relaxed mb-8">
              We are starting small but thinking big. We are committed to collaborating with local artists to create something meaningful for the community, ensuring this project is shaped by and for the citizens.
              <br /><br />
              Right now, we're experimenting with bronze and marble works.
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
