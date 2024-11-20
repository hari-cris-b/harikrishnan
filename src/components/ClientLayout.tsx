"use client";

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { Analytics } from '@vercel/analytics/react';

const LoadingSpinner = dynamic(() => import('@/components/common/LoadingSpinner'), {
  ssr: false
});

const Providers = dynamic(() => import('@/providers/Providers').then(mod => mod.Providers), {
  ssr: false
});

export default function ClientLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Providers>
      {children}
      <Analytics />
    </Providers>
  );
}
