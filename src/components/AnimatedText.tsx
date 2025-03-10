
import React, { useEffect, useRef } from 'react';
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  text: string;
  className?: string;
  once?: boolean;
  delay?: number;
  speed?: number;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className,
  once = true,
  delay = 0,
  speed = 40,
  tag = 'p'
}) => {
  const elementRef = useRef<HTMLElement | null>(null);
  const renderedRef = useRef(false);

  useEffect(() => {
    const animateText = () => {
      if (!elementRef.current || (once && renderedRef.current)) return;
      
      renderedRef.current = true;
      const element = elementRef.current;
      const content = text;
      
      element.textContent = '';
      element.style.opacity = '1';
      
      let i = 0;
      const interval = setInterval(() => {
        if (i < content.length) {
          element.textContent += content.charAt(i);
          i++;
        } else {
          clearInterval(interval);
        }
      }, speed);
    };

    const timer = setTimeout(() => {
      animateText();
    }, delay);

    return () => clearTimeout(timer);
  }, [text, once, delay, speed]);

  const Tag = tag as keyof JSX.IntrinsicElements;

  return (
    <Tag 
      ref={elementRef as React.RefObject<HTMLDivElement>} 
      className={cn('opacity-0', className)}
    >
      {text}
    </Tag>
  );
};

export default AnimatedText;
