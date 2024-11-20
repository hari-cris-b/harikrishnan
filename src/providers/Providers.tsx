"use client";

import React from 'react';
import dynamic from 'next/dynamic';

const ThemeProvider = dynamic(() => import('@/contexts/ThemeContext').then(mod => mod.ThemeProvider), {
  ssr: false
});

const AnimationProvider = dynamic(() => import('@/contexts/AnimationContext').then(mod => mod.AnimationProvider), {
  ssr: false
});

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <AnimationProvider>
        {children}
      </AnimationProvider>
    </ThemeProvider>
  );
}