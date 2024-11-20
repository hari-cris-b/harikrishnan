import { useState, useEffect } from 'react';

export const useScrollActive = (sections: string[]) => {
  const [activeSection, setActiveSection] = useState(sections[0]);
  const [scrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((sectionId) => {
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
  }, [sections, scrollPosition]);

  return activeSection;
}; 