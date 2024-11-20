import { useState, useEffect } from 'react';
import { NAVIGATION_ITEMS } from '@/constants';

export function useScrollSpy() {
  const [activeSection, setActiveSection] = useState<typeof NAVIGATION_ITEMS[number]>("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      NAVIGATION_ITEMS.forEach((sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
          const { top, bottom } = section.getBoundingClientRect();
          const sectionMiddle = top + (bottom - top) / 2;
          
          if (Math.abs(sectionMiddle) < window.innerHeight / 2) {
            setActiveSection(sectionId);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return activeSection;
} 