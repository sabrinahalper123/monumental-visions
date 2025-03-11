
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
      isScrolled 
        ? "bg-white/80 backdrop-blur-md py-2 shadow-md" 
        : "bg-transparent py-4"
    )}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a 
          href="#" 
          className="text-2xl font-display font-bold tracking-wide text-black"
        >
          <span className="text-gold">M</span>onumental
        </a>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span className={cn(
              "block h-0.5 bg-primary transition-all duration-300 ease-in-out",
              isMenuOpen ? "rotate-45 translate-y-2" : ""
            )}></span>
            <span className={cn(
              "block h-0.5 bg-primary transition-all duration-300 ease-in-out",
              isMenuOpen ? "opacity-0" : "opacity-100"
            )}></span>
            <span className={cn(
              "block h-0.5 bg-primary transition-all duration-300 ease-in-out",
              isMenuOpen ? "-rotate-45 -translate-y-2" : ""
            )}></span>
          </div>
        </button>
        
        {/* Desktop menu */}
        <nav className="hidden md:flex space-x-8">
          {['Ideas', 'Motivation', 'Process'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`} 
              className="text-sm font-medium tracking-wide uppercase transition-colors hover:text-gold"
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
      
      {/* Mobile menu dropdown */}
      <div className={cn(
        "md:hidden absolute w-full bg-white/95 backdrop-blur-md transition-all duration-300 ease-in-out overflow-hidden shadow-md",
        isMenuOpen ? "max-h-64 py-4" : "max-h-0 py-0"
      )}>
        <nav className="container mx-auto px-4 flex flex-col space-y-4">
          {['Ideas', 'Motivation', 'Process'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`} 
              className="text-sm font-medium tracking-wide uppercase transition-colors hover:text-gold py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
