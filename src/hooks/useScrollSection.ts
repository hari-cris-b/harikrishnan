import { useState, useEffect } from 'react';
import { throttle } from '@/utils/performance';

export const useScrollSection = (sections: string[]) => {
  const [activeSection, setActiveSection] = useState(sections[0]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile on mount
    setIsMobile(window.innerWidth < 768);

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = throttle(() => {
      // Skip auto-detection on mobile
      if (isMobile) return;

      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const { top, bottom } = section.getBoundingClientRect();
          const sectionMiddle = top + (bottom - top) / 2;
          
          // Add more threshold for desktop
          if (Math.abs(sectionMiddle) < window.innerHeight / 2.5) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    }, 100); // Increased throttle time

    if (!isMobile) {
      window.addEventListener('scroll', handleScroll, { passive: true });
    }
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections, isMobile]);

  return activeSection;
}; 