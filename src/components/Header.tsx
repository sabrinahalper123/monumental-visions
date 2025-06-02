
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
        ? "bg-white/90 backdrop-blur-md py-2 shadow-sm" 
        : "bg-transparent py-4"
    )}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a 
          href="#" 
          className="text-2xl font-medium tracking-tight"
          style={{ 
            textTransform: 'uppercase', 
            letterSpacing: '0.05em',
          }}
        >
          <span className={cn(
            "transition-colors duration-300",
            isScrolled ? "text-black" : "text-white"
          )}>Alexandria</span>
        </a>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span className={cn(
              "block h-0.5 transition-all duration-300 ease-in-out",
              isScrolled ? "bg-black" : "bg-white",
              isMenuOpen ? "rotate-45 translate-y-2" : ""
            )}></span>
            <span className={cn(
              "block h-0.5 transition-all duration-300 ease-in-out",
              isScrolled ? "bg-black" : "bg-white",
              isMenuOpen ? "opacity-0" : "opacity-100"
            )}></span>
            <span className={cn(
              "block h-0.5 transition-all duration-300 ease-in-out",
              isScrolled ? "bg-black" : "bg-white",
              isMenuOpen ? "-rotate-45 -translate-y-2" : ""
            )}></span>
          </div>
        </button>
        
        {/* Desktop menu */}
        <nav className="hidden md:flex space-x-8">
          {[
            { name: 'Motivation', color: isScrolled ? 'text-black hover:text-black/70' : 'text-white hover:text-white/70' },
            { name: 'Process', color: isScrolled ? 'text-black hover:text-black/70' : 'text-white hover:text-white/70' }
          ].map((item) => (
            <a 
              key={item.name}
              href={`#${item.name.toLowerCase()}`} 
              className={`text-sm font-medium tracking-wide uppercase transition-colors ${item.color}`}
            >
              {item.name}
            </a>
          ))}
        </nav>
      </div>
      
      {/* Mobile menu dropdown */}
      <div className={cn(
        "md:hidden absolute w-full bg-white/95 backdrop-blur-md transition-all duration-300 ease-in-out overflow-hidden shadow-sm",
        isMenuOpen ? "max-h-64 py-4" : "max-h-0 py-0"
      )}>
        <nav className="container mx-auto px-4 flex flex-col space-y-4">
          {[
            { name: 'Motivation', color: 'text-black hover:text-black/70' },
            { name: 'Process', color: 'text-black hover:text-black/70' }
          ].map((item) => (
            <a 
              key={item.name}
              href={`#${item.name.toLowerCase()}`} 
              className={`text-sm font-medium tracking-wide uppercase transition-colors ${item.color} py-2`}
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
