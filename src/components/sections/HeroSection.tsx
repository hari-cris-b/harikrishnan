import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { useInView } from 'framer-motion';
import React from 'react';
import { Button } from "@/components/ui/button";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { fadeInUp, fadeInLeft, fadeInRight } from '@/constants/animations';
import { useAnimation } from 'framer-motion';
import Image from 'next/image';

interface HeroSectionProps {
  scrollToSection: (section: string) => void;
}

const HeroSection = ({ scrollToSection }: HeroSectionProps) => {
  const heroRef = React.useRef(null);
  const heroInView = useInView(heroRef, { once: false, amount: 0.3 });
  const controls = useAnimation();
  const [hasStarted, setHasStarted] = React.useState(false);

  React.useEffect(() => {
    if (heroInView && !hasStarted) {
      setHasStarted(true);
    }
  }, [heroInView, hasStarted]);

  return (
    <section 
      id="home" 
      className="min-h-[calc(100vh-4rem)] flex items-center justify-center py-6 sm:py-10 md:py-20" 
      ref={heroRef}
    >
      <motion.div 
        className="w-full max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-center md:justify-between gap-8 md:gap-12 px-4 sm:px-6"
        variants={fadeInUp}
        initial="hidden"
        animate={heroInView ? "visible" : "hidden"}
      >
        {/* Text Content */}
        <motion.div
          className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left"
          variants={fadeInLeft}
          initial="hidden"
          animate={heroInView ? "visible" : "hidden"}
        >
          <motion.div className="relative w-full">
            <motion.h2 
              className="text-2xl sm:text-3xl md:text-6xl font-bold relative z-10"
              variants={fadeInUp}
              initial="hidden"
              animate={heroInView ? "visible" : "hidden"}
              transition={{ delay: 0.2 }}
            >
              <motion.span
                className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-[#e6af2e] to-[#3d348b]"
                variants={fadeInLeft}
                transition={{ delay: 0.3 }}
              >
                Web
              </motion.span>{" "}
              <motion.span
                className="inline-block bg-clip-text text-transparent bg-gradient-to-br from-[#3d348b] via-[#e6af2e] to-[#3d348b] pb-2"
                variants={fadeInUp}
                transition={{ delay: 0.4 }}
              >
                Developer
              </motion.span>{" "}
              <motion.span
                className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-[#e6af2e] via-[#3d348b] to-[#e6af2e] pb-2"
                variants={fadeInRight}
                transition={{ delay: 0.5 }}
              >
                & Designer
              </motion.span>
            </motion.h2>

            {/* Floating particles */}
            <FloatingParticle 
              className="-top-10 -left-10 w-20 h-20"
              colors={["#3d348b", "#e6af2e"]}
              duration={4}
            />
            
            <FloatingParticle 
              className="-bottom-10 -right-10 w-16 h-16"
              colors={["#e6af2e", "#3d348b"]}
              duration={3}
              reverse
            />
          </motion.div>

          {/* Fixed height container for typing animation */}
          <div className="h-[4.5em] sm:h-[3.5em] md:h-[3em] w-full flex items-center justify-center md:justify-start overflow-hidden">
            {hasStarted && (
              <TypeAnimation
                sequence={[
                  'Crafting beautiful digital experiences.', 800,
                  'Crafting functional digital experiences.', 800,
                  'Crafting user-centric digital experiences.', 800,
                  'Crafting beautiful, functional, and user-centric digital experiences.', 1000,
                ]}
                wrapper="p"
                speed={50}
                className="text-sm sm:text-base md:text-xl max-w-[280px] sm:max-w-[400px] md:max-w-full mx-auto md:mx-0 break-words"
                repeat={0}
                cursor={false}
              />
            )}
          </div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6"
          >
            <Button
              variant="neon"
              onClick={() => scrollToSection("contact")}
              className="group px-8 py-3"
            >
              <span className="neon-text text-base sm:text-lg">
                Get in touch
              </span>
            </Button>
          </motion.div>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center"
          variants={fadeInRight}
          initial="hidden"
          animate={heroInView ? "visible" : "hidden"}
        >
          <div className="w-[200px] h-[200px] sm:w-[280px] sm:h-[280px] md:w-[400px] md:h-[400px]">
            <ProfileImage />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

// Floating Particle Component
const FloatingParticle = ({ className, colors, duration, reverse = false }: { className: string, colors: string[], duration: number, reverse?: boolean }) => (
  <motion.div
    className={`absolute opacity-20 p-2 ${className}`}
    animate={{
      scale: [1, reverse ? 1.3 : 1.2, 1],
      rotate: [0, reverse ? -90 : 90, 0],
      opacity: [0.2, reverse ? 0.4 : 0.3, 0.2]
    }}
    transition={{
      duration,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  >
    <div className={`w-full h-full rounded-full bg-gradient-to-r from-[${colors[0]}] to-[${colors[1]}]`} />
  </motion.div>
);

// Profile Image Component
const ProfileImage = () => (
  <motion.div 
    className="relative w-full h-full group"
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ 
      duration: 0.8,
      ease: [0.215, 0.61, 0.355, 1]
    }}
  >
    {/* Outer glow ring */}
    <motion.div 
      className="absolute -inset-6 rounded-full opacity-50 blur-2xl"
      style={{
        background: 'radial-gradient(circle at center, rgba(230, 175, 46, 0.3), rgba(61, 52, 139, 0.2), transparent)',
      }}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.5, 0.3],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />

    {/* Inner glow effect */}
    <motion.div 
      className="absolute -inset-2 rounded-full opacity-70"
      style={{
        background: 'radial-gradient(circle at center, rgba(230, 175, 46, 0.4), rgba(61, 52, 139, 0.3), transparent)',
      }}
      animate={{
        scale: [1, 1.1, 1],
        opacity: [0.4, 0.6, 0.4],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 0.5,
      }}
    />
    
    {/* Main image container */}
    <div className="absolute inset-0 rounded-full p-[3px] bg-gradient-to-r from-[#e6af2e] via-[#3d348b] to-[#e6af2e] animate-gradient-slow">
      <div className="h-full w-full rounded-full bg-[#e0e2db] dark:bg-[#191716] p-1 backdrop-blur-sm">
        <motion.div
          className="relative overflow-hidden rounded-full h-full w-full group"
          whileHover={{
            scale: 1.05,
            transition: { 
              duration: 0.4,
              ease: "easeOut"
            }
          }}
        >
          {/* Image */}
          <Image
            src="/pic1.jpg"
            alt="Profile Picture"
            width={400}
            height={400}
            priority={true}
            className="rounded-full object-cover transform transition-all duration-500 will-change-transform group-hover:scale-110"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />

          {/* Hover overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-tr from-[#e6af2e]/20 to-[#3d348b]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          />

          {/* Shine effect */}
          <motion.div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
            style={{
              background: 'linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent)',
              transform: 'translateX(-100%)',
            }}
            animate={{
              x: ['100%', '-100%'],
            }}
            transition={{
              duration: 1,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 0.5,
            }}
          />
        </motion.div>
      </div>
    </div>

    {/* Rotating Satellite Effect */}
    <motion.div
      className="absolute inset-[-30px] rounded-full"
      animate={{
        rotate: 360
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "linear"
      }}
      style={{ transformOrigin: 'center center' }}
    >
      {/* Orbit paths */}
      <div className="absolute inset-0 rounded-full border border-[#e6af2e]/10" />
      <div className="absolute inset-[-5px] rounded-full border border-[#e6af2e]/5" />
      <div className="absolute inset-[5px] rounded-full border border-[#e6af2e]/5" />
      
      {/* Satellite */}
      <motion.div
        className="absolute w-12 h-12 left-1/2 -translate-x-1/2"
        style={{ top: '-6px' }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.8, 1, 0.8],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {/* Main satellite body */}
        <div className="relative">
          {/* Central hub */}
          <div className="w-4 h-4 bg-gradient-to-br from-[#e6af2e] to-[#3d348b] rounded-lg mx-auto relative z-10">
            {/* Antenna */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-[1px] h-3 bg-[#e6af2e]">
              <div className="absolute -top-1 -left-1 w-2 h-2 border border-[#e6af2e] rounded-full" />
            </div>

            {/* Communication dish */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3 h-3 border-2 border-[#e6af2e] rounded-full transform rotate-45" />
          </div>

          {/* Solar panels */}
          <div className="absolute top-1/2 -translate-y-1/2 left-[-16px] w-12 h-3">
            <div className="h-full bg-gradient-to-r from-[#e6af2e]/80 to-[#3d348b]/80 backdrop-blur-sm rounded-sm border border-[#e6af2e]" />
            <div className="absolute inset-0 grid grid-cols-6 gap-[2px]">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-[#e6af2e]/20 rounded-[1px]" />
              ))}
            </div>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 right-[-16px] w-12 h-3">
            <div className="h-full bg-gradient-to-r from-[#3d348b]/80 to-[#e6af2e]/80 backdrop-blur-sm rounded-sm border border-[#e6af2e]" />
            <div className="absolute inset-0 grid grid-cols-6 gap-[2px]">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-[#e6af2e]/20 rounded-[1px]" />
              ))}
            </div>
          </div>
        </div>

        {/* Satellite glow */}
        <div className="absolute inset-[-8px] rounded-xl bg-[#e6af2e]/20 blur-md" />
      </motion.div>

      {/* Engine trail */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full"
          style={{
            left: '50%',
            top: '-2px',
            translateX: `-${(i + 1) * 6}px`,
            backgroundColor: `rgba(230, 175, 46, ${0.4 - i * 0.08})`,
          }}
          animate={{
            opacity: [0.4 - i * 0.08, 0.1, 0.4 - i * 0.08],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.1,
          }}
        />
      ))}
    </motion.div>

    {/* Additional decorative elements */}
    <div className="absolute inset-0 rounded-full border border-[#e6af2e]/20 animate-pulse-slow" />
    <div className="absolute -inset-2 rounded-full border border-[#3d348b]/10 animate-pulse-slower" />
  </motion.div>
);

export default HeroSection; 