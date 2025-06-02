
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-12 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl mb-4 font-medium">
              Alexandria
            </h3>
            <p className="text-sm text-white/70">
              Alexandria is a project to inspire humanity at an intellectual and physical level. Alexandria Monuments is building large scale art in the physical world. <a 
                href="https://www.alexlib.org/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-white/90 underline"
              >
                Alexandria Library (AI)
              </a> is translating many of the world's greatest works to inspire in the intellectual realm. In all cases we are inspired by the best of the past and present and hope to similarly motivate people in the future.
            </p>
          </div>
        </div>
        
        <div className="h-px w-full bg-white/20 my-8"></div>
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-white/50 mb-4 md:mb-0">
            © {new Date().getFullYear()} Alexandria. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
