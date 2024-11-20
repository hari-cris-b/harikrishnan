import { motion } from 'framer-motion';
import React from 'react';
import { useAnimation } from 'framer-motion';

const FloatingParticles = () => {
  useAnimation();
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  
  // Reduce number of particles on mobile
  const particleCount = isMobile ? 20 : 50;
  const galaxyCount = isMobile ? 2 : 3;
  const nebulaCount = isMobile ? 2 : 4;

  return (
    <div className="fixed inset-0 pointer-events-none z-[1] bg-gradient-to-b from-[#191716] via-[#3d348b]/20 to-[#191716]">
      {/* Stars */}
      {Array.from({ length: particleCount }).map((_, i) => (
        <motion.div
          key={`star-${i}`}
          className="absolute rounded-full bg-white"
          style={{
            width: Math.random() * 2 + 1,
            height: Math.random() * 2 + 1,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.7 + 0.3,
            boxShadow: `0 0 ${Math.random() * 4 + 2}px rgba(255, 255, 255, 0.8)`,
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Galaxies */}
      {Array.from({ length: galaxyCount }).map((_, i) => (
        <motion.div
          key={`galaxy-${i}`}
          className="absolute rounded-full opacity-20"
          style={{
            width: Math.random() * 300 + 200,
            height: Math.random() * 300 + 200,
            left: `${20 + (i * 30)}%`,
            top: `${30 + (i * 20)}%`,
            background: `radial-gradient(circle at center, 
              rgba(230, 175, 46, 0.3) 0%,
              rgba(61, 52, 139, 0.2) 40%,
              transparent 70%
            )`,
            transform: `rotate(${Math.random() * 360}deg)`,
          }}
          animate={{
            scale: [1, 1.2, 1],
            rotate: ['0deg', '360deg'],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: Math.random() * 30 + 20,
            repeat: Infinity,
            ease: "linear",
            delay: i * 3,
          }}
        />
      ))}

      {/* Nebulae */}
      {Array.from({ length: nebulaCount }).map((_, i) => (
        <motion.div
          key={`nebula-${i}`}
          className="absolute blur-3xl mix-blend-screen"
          style={{
            width: Math.random() * 250 + 150,
            height: Math.random() * 250 + 150,
            left: `${15 + (i * 25)}%`,
            top: `${25 + (i * 15)}%`,
            background: `radial-gradient(circle at center,
              rgba(230, 175, 46, 0.15) 0%,
              rgba(61, 52, 139, 0.1) 50%,
              transparent 70%
            )`,
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: Math.random() * 25 + 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 2,
          }}
        />
      ))}

      {/* Shooting stars */}
      {Array.from({ length: 3 }).map((_, i) => (
        <motion.div
          key={`shooting-star-${i}`}
          className="absolute h-px bg-gradient-to-r from-transparent via-white to-transparent"
          style={{
            width: '100px',
            top: `${20 + i * 30}%`,
            transform: `rotate(${-45 + i * 15}deg)`,
          }}
          animate={{
            opacity: [0, 0.8, 0],
            x: ['-100vw', '200vw'],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            ease: "easeOut",
            delay: i * 5,
            repeatDelay: Math.random() * 10 + 5,
          }}
        />
      ))}

      {/* Cosmic dust */}
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 50%,
            rgba(61, 52, 139, 0.1) 0%,
            rgba(230, 175, 46, 0.05) 50%,
            transparent 70%
          )`,
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.4, 0.3],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default FloatingParticles; 