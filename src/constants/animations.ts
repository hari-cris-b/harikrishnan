export const fadeInUp = {
  hidden: { 
    opacity: 0, 
    y: 20 
  },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay,
      ease: [0.215, 0.61, 0.355, 1]
    }
  })
};

export const fadeInLeft = {
  hidden: { 
    opacity: 0, 
    x: -20 
  },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      delay,
      ease: [0.215, 0.61, 0.355, 1]
    }
  })
};

export const fadeInRight = {
  hidden: { 
    opacity: 0, 
    x: 20 
  },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      delay,
      ease: [0.215, 0.61, 0.355, 1]
    }
  })
};

export const scaleUp = {
  hidden: { 
    opacity: 0, 
    scale: 0.95 
  },
  visible: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      delay,
      ease: [0.215, 0.61, 0.355, 1]
    }
  })
};

export const hoverScale = {
  scale: 1.05,
  transition: { duration: 0.2 }
};

export const tapScale = {
  scale: 0.95,
  transition: { duration: 0.1 }
};

export const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    scale: 0.95
  },
  visible: (delay = 0) => ({ 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      delay,
      ease: [0.215, 0.61, 0.355, 1],
      staggerChildren: 0.1
    }
  })
};

export const contentVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

// Add mobile-specific animations
export const mobileAnimations = {
  duration: 0.3,
  ease: [0.215, 0.61, 0.355, 1]
};

// Reduce animation complexity on mobile
export const shouldReduceMotion = () => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches || 
         window.innerWidth < 768;
}; 