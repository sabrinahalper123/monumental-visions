
import React, { useState, useEffect } from 'react';
import { Skeleton } from "@/components/ui/skeleton";
import { toast } from "sonner";

interface MonumentImageProps {
  image: string;
  name: string;
  location: string;
}

const MonumentImage: React.FC<MonumentImageProps> = ({ image, name, location }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    // Reset states when the image prop changes
    setImageLoaded(false);
    setImageError(false);
  }, [image]);

  const handleImageLoad = () => {
    console.log("Image loaded successfully:", image);
    setImageLoaded(true);
  };

  const handleImageError = (error: React.SyntheticEvent<HTMLImageElement, Event>) => {
    console.error("Error loading image:", image, error);
    setImageError(true);
    toast.error(`Failed to load image: ${image}`);
  };

  return (
    <div className="max-w-4xl mx-auto opacity-0 animate-fade-in" style={{ animationDelay: '400ms', opacity: '1' }}>
      {image ? (
        imageError ? (
          <div className="relative w-full h-[500px] bg-gray-100 flex items-center justify-center rounded-md shadow-lg">
            <p className="text-gray-500">Image not available</p>
          </div>
        ) : (
          <>
            {!imageLoaded && <Skeleton className="w-full h-[500px] rounded-md" />}
            <img 
              src={image}
              alt={`${name} Monument Concept`} 
              className={`relative w-full object-cover shadow-lg rounded-md ${imageLoaded ? 'block' : 'hidden'}`}
              onLoad={handleImageLoad}
              onError={handleImageError}
              style={{ maxHeight: '700px', width: '100%' }}
            />
          </>
        )
      ) : (
        <div className="relative w-full h-[500px] bg-gray-100 flex items-center justify-center rounded-md shadow-lg">
          <p className="text-gray-500">No image for this concept</p>
        </div>
      )}
      <div className="flex justify-center mt-2">
        <span className="inline-block px-4 py-1 bg-mint border border-black/30 text-xs font-medium uppercase tracking-widest text-primary">
          {location}
        </span>
      </div>
    </div>
  );
};

export default MonumentImage;
