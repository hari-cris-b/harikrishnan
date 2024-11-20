import React, { forwardRef, useRef, useEffect } from 'react';
import { Section } from '@/components/ui/section';
import { SectionHeader } from '@/components/ui/section-header';
import { motion, useScroll, useTransform } from 'framer-motion';
import { DocumentTextIcon } from '@heroicons/react/24/outline';

interface AboutSectionProps {
  id: string;
}

const AboutSection = forwardRef<HTMLDivElement, AboutSectionProps>((props, ref) => {
  const localRef = useRef<HTMLDivElement>(null);
  const targetRef = (ref as React.RefObject<HTMLDivElement>) || localRef;

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.5], [50, 0]);

  const handleScroll = (sectionId: string) => {
    console.log('Attempting to scroll to:', sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      console.log('Element found, scrolling...');
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    } else {
      console.log('Element not found!');
    }
  };

  return (
    <Section 
      id="about"
      ref={targetRef}
      className="scroll-mt-16 relative z-10 pointer-events-auto"
    >
      <motion.div 
        style={{ opacity, y }} 
        className="relative z-20 pointer-events-auto"
      >
        <SectionHeader 
          title={["About Me", "My Story", "Who I Am", "About Me"]}
          repeat={1}
        />
        <motion.div 
          className="max-w-2xl mx-auto mt-10 relative z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Glass Card */}
          <div className="relative group perspective-1000 cursor-pointer">
            {/* Background blur and gradient */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#3d348b] to-[#e6af2e] rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000 group-hover:duration-200 pointer-events-none" />
            
            {/* Main card */}
            <motion.div 
              className="relative p-8 bg-white/90 dark:bg-[#191716]/90 rounded-2xl ring-1 ring-gray-200/50 dark:ring-gray-800/50 shadow-xl transform-gpu transition-all duration-500 group-hover:scale-[1.02] cursor-default"
              whileHover={{ rotateY: 5, rotateX: 5 }}
            >
              {/* Content container */}
              <div className="relative z-30 space-y-8 text-center">
                {/* First paragraph with highlight */}
                <motion.div 
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <div className="absolute -inset-4 bg-gradient-to-r from-[#3d348b]/5 to-[#e6af2e]/5 rounded-lg blur-sm" />
                  <p className="relative text-lg font-medium text-[#3d348b] dark:text-[#e6af2e] leading-relaxed">
                    I'm a passionate full-stack developer with a keen eye for design
                    and a love for creating seamless user experiences.
                  </p>
                </motion.div>

                {/* Second paragraph */}
                <motion.p 
                  className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  My journey in tech has led me to work on diverse projects, from
                  e-commerce platforms to data visualization tools.
                </motion.p>
              </div>
                    
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 -mt-6 -mr-6 w-32 h-32 bg-[#e6af2e]/10 rounded-full blur-xl animate-pulse pointer-events-none" />
              <div className="absolute bottom-0 left-0 -mb-6 -ml-6 w-32 h-32 bg-[#3d348b]/10 rounded-full blur-xl animate-pulse pointer-events-none" style={{ animationDelay: '1s' }} />

              {/* Animated border gradient */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#3d348b]/20 to-[#e6af2e]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>

            {/* Hover glow effect */}
            <div className="absolute -inset-2 bg-gradient-to-r from-[#3d348b]/0 via-[#e6af2e]/10 to-[#3d348b]/0 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500" />
          </div>

          <motion.div 
            className="mt-8 flex justify-center z-50"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                window.open('/HariKrishnanResume.pdf', '_blank');
              }}
              className="group relative inline-flex items-center px-8 py-3 overflow-hidden rounded-xl bg-gradient-to-r from-[#3d348b] to-[#e6af2e] text-white shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer"
              style={{ pointerEvents: 'auto' }}
            >
              {/* Background shine effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 pointer-events-none">
                <div className="absolute inset-0 bg-white transform -skew-x-12 group-hover:animate-shine" />
              </div>
              
              {/* Icon and text */}
              <DocumentTextIcon className="w-5 h-5 mr-2 transition-transform group-hover:scale-110 group-hover:rotate-6" />
              <span className="relative font-medium group-hover:tracking-wider transition-all duration-300">
                View Resume
              </span>
              
              {/* Border gradient */}
              <div className="absolute inset-0 rounded-lg border-2 border-transparent bg-gradient-to-r from-[#3d348b] to-[#e6af2e] opacity-0 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none" 
                style={{ WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)' }} 
              />
            </button>
          </motion.div>

          {/* Bottom decorative line */}
          <motion.div 
            className="mt-12 mx-auto w-32 h-1 bg-gradient-to-r from-[#3d348b]/20 via-[#e6af2e]/40 to-[#3d348b]/20 rounded-full"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 128, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          />
        </motion.div>
      </motion.div>
    </Section>
  );
});

AboutSection.displayName = "AboutSection";

export default AboutSection;