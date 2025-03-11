
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
          style={{ 
            textTransform: 'uppercase', 
            letterSpacing: '0.15em',
            textShadow: '1px 1px 0px rgba(212, 175, 55, 0.3)'
          }}
        >
          <span className="text-black">M</span>onumental
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
          {[
            { name: 'Ideas', color: 'text-gold hover:text-gold/80' },
            { name: 'Motivation', color: 'text-emerald-900 hover:text-emerald-900/80' },
            { name: 'Process', color: 'text-navy hover:text-navy/80' }
          ].map((item) => (
            <a 
              key={item.name}
              href={`#${item.name.toLowerCase()}`} 
              className={`text-sm font-medium tracking-wide uppercase transition-colors ${item.color} font-bold`}
            >
              {item.name}
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
          {[
            { name: 'Ideas', color: 'text-gold hover:text-gold/80' },
            { name: 'Motivation', color: 'text-emerald-900 hover:text-emerald-900/80' },
            { name: 'Process', color: 'text-navy hover:text-navy/80' }
          ].map((item) => (
            <a 
              key={item.name}
              href={`#${item.name.toLowerCase()}`} 
              className={`text-sm font-medium tracking-wide uppercase transition-colors ${item.color} font-bold py-2`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
