import { motion, useMotionValue, useSpring } from 'framer-motion';
import React, { useEffect } from 'react';
import { useTouch } from '@/hooks/useTouch';
import { useTheme } from '@/contexts/ThemeContext';
import { useAnimation } from '@/contexts/AnimationContext';

interface CustomCursorProps {
  activeSection: string;
}

const SunCursor = ({ isPaused }: { isPaused: boolean }) => (
  <motion.div
    className="absolute inset-0"
    animate={!isPaused ? { rotate: 360 } : {}}
    transition={{
      duration: 8,
      repeat: Infinity,
      ease: "linear"
    }}
  >
    {/* Sun core */}
    <motion.div
      className="absolute inset-0 rounded-full bg-[#e6af2e] shadow-lg"
      animate={!isPaused ? {
        scale: [1, 1.1, 1],
      } : {}}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />

    {/* Circular rays */}
    <motion.div
      className="absolute inset-[-4px] rounded-full border-2 border-[#e6af2e]"
      animate={!isPaused ? {
        scale: [1, 1.2, 1],
        opacity: [0.5, 0.8, 0.5],
      } : {}}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />

    {/* Outer glow ring */}
    <motion.div
      className="absolute inset-[-8px] rounded-full border border-[#e6af2e]/50"
      animate={!isPaused ? {
        scale: [1, 1.3, 1],
        opacity: [0.3, 0.6, 0.3],
      } : {}}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 0.5
      }}
    />

    {/* Inner sun details */}
    <motion.div
      className="absolute inset-[2px] rounded-full bg-[#e6af2e]/30"
      animate={!isPaused ? {
        opacity: [0.3, 0.5, 0.3],
      } : {}}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  </motion.div>
);

const MoonCursor = ({ isPaused }: { isPaused: boolean }) => (
  <motion.div
    className="absolute inset-0 rounded-full bg-[#e6af2e] shadow-lg"
    animate={!isPaused ? {
      scale: [1, 1.2, 1],
      rotate: [0, 360],
    } : {}}
    transition={{
      duration: 8,
      repeat: Infinity,
      ease: "linear"
    }}
  >
    <div className="absolute top-1 left-1 w-2 h-2 rounded-full bg-[#191716]/30" />
    <div className="absolute bottom-2 right-2 w-1.5 h-1.5 rounded-full bg-[#191716]/30" />
    <div className="absolute top-2 right-1 w-1 h-1 rounded-full bg-[#191716]/30" />
  </motion.div>
);

const CustomCursor = ({ activeSection }: CustomCursorProps) => {
  const isTouchDevice = useTouch();
  const { darkMode } = useTheme();
  const { isPaused } = useAnimation();
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    if (isTouchDevice || window.innerWidth < 768) return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, [cursorX, cursorY, isTouchDevice]);

  if (isTouchDevice || typeof window !== 'undefined' && window.innerWidth < 768) return null;

  return (
    <>
      {/* Main cursor (Sun/Moon) */}
      <motion.div
        className="fixed top-0 left-0 w-6 sm:w-8 h-6 sm:h-8 pointer-events-none z-[9999]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <div className="relative w-full h-full">
          {darkMode ? (
            <MoonCursor isPaused={isPaused} />
          ) : (
            <SunCursor isPaused={isPaused} />
          )}

          {/* Glow effect */}
          <motion.div
            className={`absolute inset-0 rounded-full blur-md ${
              darkMode ? 'bg-[#e6af2e]/20' : 'bg-[#e6af2e]/30'
            }`}
            animate={!isPaused ? {
              scale: [1, 1.5, 1],
              opacity: [0.5, 0.8, 0.5],
            } : {}}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </motion.div>

      {/* Trail effect - only show on larger screens */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] hidden md:block"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-1 h-1 rounded-full ${
              darkMode ? 'bg-[#e6af2e]/50' : 'bg-[#e6af2e]/70'
            }`}
            initial={{ scale: 0, opacity: 0 }}
            animate={!isPaused ? {
              scale: [0, 1, 0],
              opacity: [0, 0.5, 0],
              x: Math.cos(i * 60 * (Math.PI / 180)) * 20,
              y: Math.sin(i * 60 * (Math.PI / 180)) * 20,
            } : {}}
            transition={{
              duration: 1,
              repeat: Infinity,
              delay: i * 0.1,
              ease: "easeOut"
            }}
          />
        ))}
      </motion.div>
    </>
  );
};

export default CustomCursor;