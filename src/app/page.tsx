"use client";

import React from "react";
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { useScrollSection } from '@/hooks/useScrollSection';
import { Navbar } from "@/components/common/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import { AnimationProvider } from '@/contexts/AnimationContext';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { scrollToSection } from "@/utils/scroll";
import AboutSection from "@/components/sections/AboutSection";
import CustomCursor from "@/components/common/CustomCursor";
import SkillsSection from "@/components/sections/SkillsSection";
import ContactSection from "@/components/sections/ContactSection";
import FloatingParticles from "@/components/FloatingParticles";
import { useMediaQuery } from '@/hooks/useMediaQuery';
import NoSSR from '@/components/common/NoSSR';

const ProjectsSection = dynamic(() => import('@/components/sections/ProjectsSection'), {
  ssr: false
});

export default function Portfolio() {
  const activeSection = useScrollSection(['home', 'about', 'skills', 'projects', 'contact']);
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // or a loading spinner
  }

  return (
    <ThemeProvider>
      <AnimationProvider>
        <NoSSR>
          <div className={`relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-[#e0e2db] to-[#beb7a4] dark:from-[#191716] dark:to-[#191716] text-[#191716] dark:text-[#e0e2db] ${!isMobile ? 'custom-cursor-active' : ''}`}>
            {/* Background elements */}
            <div className="fixed inset-0 overflow-hidden">
              <FloatingParticles />
            </div>

            {/* Content wrapper */}
            <div className="relative z-[2] w-full">
              {/* Only show cursor on non-touch devices */}
              <div className="hidden md:block">
                <CustomCursor activeSection={activeSection} />
              </div>
              
              <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />
              
              <main className="content-container max-w-7xl mx-auto pt-16 sm:pt-20">
                  <HeroSection scrollToSection={scrollToSection} />
                  <AboutSection id="about" />
                  <SkillsSection />
                  <ProjectsSection />
                  <ContactSection />
                </main>

              <footer className="w-full bg-[#e0e2db] dark:bg-[#191716] border-t border-[#beb7a4] dark:border-[#3d348b] py-6 sm:py-8 relative z-[2]">
                <div className="content-container max-w-7xl mx-auto text-center text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                  <p>&copy; {new Date().getFullYear()} Hari Krishnan. All rights reserved.</p>
                </div>
              </footer>
            </div>
          </div>
        </NoSSR>
      </AnimationProvider>
    </ThemeProvider>
  );
}
