
import React, { useRef, useEffect } from 'react';

interface MonumentDescriptionProps {
  description: string[];
}

const MonumentDescription: React.FC<MonumentDescriptionProps> = ({ description }) => {
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
  }, [description]);

  return (
    <div className="max-w-3xl mx-auto" ref={textRef}>
      {description.map((paragraph, index) => (
        <p key={index} className="mb-4 text-base leading-relaxed opacity-0">
          {paragraph}
        </p>
      ))}
    </div>
  );
};

export default MonumentDescription;
