
import React, { useEffect, useRef, useState } from 'react';
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

// Monument data for the slideshow
const monuments = [
  {
    id: 'athena',
    name: 'Athena',
    image: '/lovable-uploads/f9cf8186-c0c8-467d-8b63-a890b03d5a85.png',
    location: 'Presidio, San Francisco',
    description: [
      "Athena would stand as a tribute to California's deep historical ties and its role as a western stronghold of the United States.",
      "The Greek goddess of wisdom and war, Athena, appears on the Great Seal of California, symbolizing the state's immediate statehood—born fully formed, just as Athena was.",
      "Standing in the Presidio of San Francisco, the monument would honor the land's long-standing history. Established in 1776 by the Spanish, the Presidio played a role in every major American conflict from the Civil War through Desert Storm.",
      "Athena embodies justice, wisdom, and heroic endeavor, standing as a guardian over the bay—an enduring symbol of the West's pursuit of progress."
    ]
  },
  {
    id: 'phoenix',
    name: 'Rising Phoenix',
    image: '/lovable-uploads/9b55b174-783f-4981-bd85-fb559ae35918.png',
    location: 'Pacific Palisades, California',
    description: [
      "The Rising Phoenix stands as a powerful symbol of rebirth, renewal, and resilience for Pacific Palisades, especially in the wake of the devastating fires earlier this year.",
      "A timeless emblem of transformation, the mythical bird rising from the ashes reflects the community's strength and ability to rebuild.",
      "Positioned along the cliffs overlooking the Pacific, the monument serves as a reminder that from destruction comes renewal, and from endings, new beginnings emerge."
    ]
  }
];

const MonumentSection: React.FC = () => {
  const [currentMonumentIndex, setCurrentMonumentIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  
  const currentMonument = monuments[currentMonumentIndex];
  
  const nextMonument = () => {
    setCurrentMonumentIndex((prev) => (prev + 1) % monuments.length);
    setImageLoaded(false);
    setImageError(false);
  };
  
  const prevMonument = () => {
    setCurrentMonumentIndex((prev) => (prev - 1 + monuments.length) % monuments.length);
    setImageLoaded(false);
    setImageError(false);
  };
  
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
    
    const resetAnimations = () => {
      const paragraphs = textRef.current?.querySelectorAll('p');
      paragraphs?.forEach((p) => {
        p.classList.remove('animate-fade-in');
        p.classList.add('opacity-0');
        observer.observe(p);
      });
    };
    
    resetAnimations();
    
    return () => observer.disconnect();
  }, [currentMonumentIndex]);

  useEffect(() => {
    console.log("Current monument:", currentMonument);
    setImageLoaded(false);
    setImageError(false);
    
    if (currentMonument.image) {
      const img = new Image();
      img.src = currentMonument.image;
      console.log("Attempting to load image:", currentMonument.image);
      img.onload = () => {
        console.log("Image loaded successfully:", currentMonument.image);
        setImageLoaded(true);
        setImageError(false);
      };
      img.onerror = (error) => {
        console.error("Failed to load image:", currentMonument.image, error);
        setImageError(true);
        setImageLoaded(false);
      };
    } else {
      setImageLoaded(false);
      setImageError(false);
    }
  }, [currentMonument]);

  const handleImageLoad = () => {
    console.log("Image loaded in component:", currentMonument.image);
    setImageLoaded(true);
    setImageError(false);
  };

  const handleImageError = (error: React.SyntheticEvent<HTMLImageElement, Event>) => {
    console.error("Error loading image in the component:", currentMonument.image, error);
    setImageError(true);
    setImageLoaded(false);
  };

  return (
    <section 
      id="ideas" 
      className="relative py-16 md:py-20 lg:py-20 px-4 bg-cover bg-center"
      style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.9), rgba(255,255,255,0.9)), url("https://images.unsplash.com/photo-1504198322253-cfa87a0ff60f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")' }}
      ref={sectionRef}
    >
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="inline-block font-accent text-black text-sm uppercase tracking-widest mb-3 opacity-0 animate-fade-in font-semibold">Proposed Monument</span>
          <h2 className="section-heading">{currentMonument.name}</h2>
        </div>
        
        <div className="flex flex-col items-center mb-10 relative">
          <div className="max-w-2xl mx-auto opacity-0 animate-fade-in" style={{ animationDelay: '400ms' }}>
            {currentMonument.image ? (
              imageError ? (
                <div className="relative w-full h-80 bg-gray-100 flex items-center justify-center rounded-md shadow-lg">
                  <p className="text-gray-500">Image not available</p>
                </div>
              ) : !imageLoaded ? (
                <Skeleton className="w-full h-80 rounded-md" />
              ) : (
                <img 
                  src={currentMonument.image}
                  alt={`${currentMonument.name} Monument Concept`} 
                  className="relative w-full h-auto object-cover shadow-lg rounded-md"
                  onLoad={handleImageLoad}
                  onError={handleImageError}
                />
              )
            ) : (
              <div className="relative w-full h-80 bg-gray-100 flex items-center justify-center rounded-md shadow-lg">
                <p className="text-gray-500">No image for this concept</p>
              </div>
            )}
            <div className="flex justify-center mt-2">
              <span className="inline-block px-4 py-1 bg-mint border border-black/30 text-xs font-medium uppercase tracking-widest text-primary">
                {currentMonument.location}
              </span>
            </div>
          </div>
          
          <ChevronLeft 
            onClick={prevMonument}
            className="absolute left-0 top-1/2 -translate-y-1/2 text-black/70 hover:text-black transition-colors cursor-pointer"
            size={36}
            aria-label="Previous monument"
          />
          <ChevronRight 
            onClick={nextMonument}
            className="absolute right-0 top-1/2 -translate-y-1/2 text-black/70 hover:text-black transition-colors cursor-pointer"
            size={36}
            aria-label="Next monument"
          />
          
          <div className="flex justify-center gap-2 mt-4">
            {monuments.map((monument, index) => (
              <button
                key={monument.id}
                onClick={() => setCurrentMonumentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  index === currentMonumentIndex ? 'bg-black' : 'bg-gray-300'
                }`}
                aria-label={`Go to ${monument.name} monument`}
              />
            ))}
          </div>
        </div>
        
        <div className="max-w-3xl mx-auto" ref={textRef}>
          {currentMonument.description.map((paragraph, index) => (
            <p key={index} className="mb-4 text-base leading-relaxed opacity-0">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MonumentSection;
