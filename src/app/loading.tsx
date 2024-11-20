import React from 'react';

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#e0e2db] to-[#beb7a4] dark:from-[#191716] dark:to-[#191716]">
      <div className="space-y-4 text-center">
        <div className="w-16 h-16 relative mx-auto">
          <div className="absolute inset-0 rounded-full border-4 border-[#e6af2e]/20" />
          <div className="absolute inset-0 rounded-full border-4 border-[#e6af2e] border-t-transparent animate-spin" />
        </div>
        <p className="text-[#191716] dark:text-[#e0e2db] animate-pulse">
          Loading...
        </p>
      </div>
    </div>
  );
} 