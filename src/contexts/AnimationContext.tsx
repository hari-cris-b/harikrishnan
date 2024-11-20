"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { useScrollStop } from '@/hooks/useScrollStop';

interface AnimationContextType {
  isPaused: boolean;
  hasStarted: boolean;
}

const AnimationContext = createContext<AnimationContextType>({
  isPaused: false,
  hasStarted: false
});

export const useAnimation = () => useContext(AnimationContext);

export const AnimationProvider = ({ children }: { children: React.ReactNode }) => {
  const { isScrolling } = useScrollStop(150);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (!hasStarted) {
      setHasStarted(true);
    }
  }, [hasStarted]);

  const value = {
    isPaused: isScrolling,
    hasStarted
  };

  return (
    <AnimationContext.Provider value={value}>
      {children}
    </AnimationContext.Provider>
  );
}; 