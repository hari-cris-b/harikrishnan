import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import React, { forwardRef, useRef, useEffect } from 'react';

interface SectionProps {
  children: React.ReactNode;
  id: string;
  className?: string;
}

export const Section = forwardRef<HTMLDivElement, SectionProps>(
  ({ children, id, className = '' }, ref) => {
    return (
      <section
        id={id}
        ref={ref}
        className={`py-20 min-h-screen relative ${className} scroll-mt-24`}
        style={{ 
          pointerEvents: 'auto',
          touchAction: 'auto'
        }}
      >
        <div className="container mx-auto px-4 relative pointer-events-auto">
          {children}
        </div>
      </section>
    );
  }
);

Section.displayName = 'Section';