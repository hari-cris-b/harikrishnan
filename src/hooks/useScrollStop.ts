import { useState, useEffect } from 'react';
import { debounce } from '@/utils/performance';

export const useScrollStop = (delay: number = 150) => {
  const [isScrolling, setIsScrolling] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScrollStart = () => {
      setIsScrolling(true);
      setHasScrolled(true);
    };

    const handleScrollStop = debounce(() => {
      setIsScrolling(false);
    }, delay);

    window.addEventListener('scroll', handleScrollStart, { passive: true });
    window.addEventListener('scroll', handleScrollStop, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScrollStart);
      window.removeEventListener('scroll', handleScrollStop);
    };
  }, [delay]);

  return { isScrolling, hasScrolled };
}; 