import { motion } from 'framer-motion';
import { Card } from './card';
import React from 'react';

interface SectionCardProps extends React.ComponentProps<typeof Card> {
  children: React.ReactNode;
  className?: string;
}

const SectionCard = ({ 
  children, 
  className = "",
  ...props 
}: SectionCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="group"
    >
      <Card 
        className={`overflow-hidden rounded-2xl border border-[#e6e7eb] dark:border-[#3d348b] bg-white/50 dark:bg-[#191716]/50 backdrop-blur-md shadow-sm transition-all duration-200 ${className}`}
        {...props}
      >
        {/* Inner glow effect */}
        <motion.div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: 'radial-gradient(circle at center, rgba(61, 52, 139, 0.1), rgba(230, 175, 46, 0.05), transparent)',
          }}
        />
        
        {/* Content */}
        <div className="relative z-10">
          {children}
        </div>
      </Card>
    </motion.div>
  );
};

export { SectionCard }; 