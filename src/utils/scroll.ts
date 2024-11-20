export const scrollToSection = (sectionId: string) => {
  const section = document.getElementById(sectionId);
  if (section) {
    const navbarHeight = 64;
    const offset = section.getBoundingClientRect().top + window.scrollY - navbarHeight;
    
    window.scrollTo({
      top: offset,
      behavior: 'smooth'
    });
  }
};

export const getActiveSection = (sections: string[]): string => {
  for (const sectionId of sections) {
    const section = document.getElementById(sectionId);
    if (section) {
      const { top, bottom } = section.getBoundingClientRect();
      const sectionMiddle = top + (bottom - top) / 2;
      
      if (Math.abs(sectionMiddle) < window.innerHeight / 2) {
        return sectionId;
      }
    }
  }
  
  return sections[0];
}; 