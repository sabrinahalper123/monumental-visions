
import React from 'react';
import { ChevronLeft, ChevronRight } from "lucide-react";

interface SlideControlsProps {
  currentIndex: number;
  totalItems: number;
  onPrev: () => void;
  onNext: () => void;
  onSelect: (index: number) => void;
}

const SlideControls: React.FC<SlideControlsProps> = ({
  currentIndex,
  totalItems,
  onPrev,
  onNext,
  onSelect
}) => {
  return (
    <>
      <ChevronLeft 
        onClick={onPrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 text-black/70 hover:text-black transition-colors cursor-pointer"
        size={36}
        aria-label="Previous monument"
      />
      
      <ChevronRight 
        onClick={onNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 text-black/70 hover:text-black transition-colors cursor-pointer"
        size={36}
        aria-label="Next monument"
      />
      
      <div className="flex justify-center gap-2 mt-4">
        {Array.from({ length: totalItems }).map((_, index) => (
          <button
            key={index}
            onClick={() => onSelect(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              index === currentIndex ? 'bg-black' : 'bg-gray-300'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </>
  );
};

export default SlideControls;
