import { motion, useInView } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { useAnimation } from '@/contexts/AnimationContext';
import React from 'react';

interface SectionHeaderProps {
  title: string | string[];
  className?: string;
  repeat?: number;
  delay?: number;
}

const SectionHeader = ({ 
  title, 
  className = "", 
  repeat = 0,
  delay = 800 
}: SectionHeaderProps) => {
  const headerRef = React.useRef(null);
  const isInView = useInView(headerRef, {
    once: true,
    amount: 0.8,
    margin: "100px 0px 0px 0px"
  });
  const { isPaused, hasStarted } = useAnimation();
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  const staticTitle = Array.isArray(title) ? title[0] : title;
  const sequences = Array.isArray(title) 
    ? title.flatMap(t => [t, delay]).concat([title[0], delay])
    : [title, delay];

  return (
    <motion.div
      ref={headerRef}
      className="relative h-16 md:h-20"
      suppressHydrationWarning
    >
      {/* Static placeholder to maintain height */}
      <h2 
        className={`absolute opacity-0 pointer-events-none text-2xl md:text-3xl font-bold text-center ${className}`}
        aria-hidden="true"
      >
        {staticTitle}
      </h2>

      {/* Animated content */}
      <div className="absolute inset-0 flex items-center justify-center">
        {isInView && hasStarted ? (
          <TypeAnimation
            sequence={sequences}
            wrapper="h2"
            speed={isPaused ? 1 : 50}
            repeat={repeat}
            cursor={false}
            className={`text-2xl md:text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-[#e6af2e] via-[#3d348b] to-[#e6af2e] animate-gradient ${className}`}
          />
        ) : (
          <h2 className={`text-2xl md:text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-[#e6af2e] via-[#3d348b] to-[#e6af2e] animate-gradient ${className}`}>
            {staticTitle}
          </h2>
        )}
      </div>
    </motion.div>
  );
};

export { SectionHeader }; 