"use client";

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm">
      <div className="h-16 w-16 rounded-full border-4 border-primary border-t-transparent animate-spin" />
    </div>
  );
};

export default LoadingSpinner;
