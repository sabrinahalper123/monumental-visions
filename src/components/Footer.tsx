
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white py-12 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <h3 className="font-display text-2xl mb-4">
              <span className="text-gold">M</span>onumental
            </h3>
            <p className="text-sm text-white/70 max-w-md">
              Building monumental public works to inspire humanity's future.
              Thinking big, starting small, and making a lasting impact.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-x-12 gap-y-4">
            <a href="#athena" className="hover:text-gold transition-colors duration-200">Athena</a>
            <a href="#" className="hover:text-gold transition-colors duration-200">About</a>
            <a href="#palisades" className="hover:text-gold transition-colors duration-200">Palisades</a>
            <a href="#" className="hover:text-gold transition-colors duration-200">Contact</a>
            <a href="#motivation" className="hover:text-gold transition-colors duration-200">Motivation</a>
            <a href="#" className="hover:text-gold transition-colors duration-200">Support</a>
          </div>
        </div>
        
        <div className="h-px w-full bg-white/20 my-8"></div>
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-white/50 mb-4 md:mb-0">
            © {new Date().getFullYear()} Monumental. All rights reserved.
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-white/50 hover:text-gold transition-colors duration-200">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
