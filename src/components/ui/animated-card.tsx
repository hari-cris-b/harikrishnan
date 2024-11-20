import { motion } from 'framer-motion';
import { Card } from './card';
import React from 'react';

interface AnimatedCardProps extends React.ComponentProps<typeof Card> {
  index?: number;
  isInView?: boolean;
  children: React.ReactNode;
}

const AnimatedCard = ({ 
  children, 
  index = 0, 
  isInView = true,
  className = "",
  ...props 
}: AnimatedCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? 
        { 
          opacity: [0, 1],
          y: [20, 0],
          transition: { 
            duration: 0.5,
            delay: index * 0.2,
            ease: [0.215, 0.61, 0.355, 1]
          } 
        } : 
        { opacity: [1, 0], y: [0, 20] }
      }
      whileHover={{ 
        scale: 1.02,
        transition: { duration: 0.3 }
      }}
      whileTap={{ scale: 0.98 }}
      className="group"
    >
      <Card 
        className={`h-full transition-all duration-300 relative overflow-hidden hover:shadow-lg dark:hover:shadow-[#3d348b]/20 ${className}`}
        {...props}
      >
        {/* Background gradient */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-tr from-[#3d348b]/5 to-[#e6af2e]/5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />

        {/* Inner glow effect */}
        <motion.div 
          className="absolute inset-0"
          initial={{ 
            background: "radial-gradient(circle at center, rgba(61, 52, 139, 0) 0%, rgba(230, 175, 46, 0) 100%)" 
          }}
          whileHover={{ 
            background: "radial-gradient(circle at center, rgba(61, 52, 139, 0.1) 0%, rgba(230, 175, 46, 0.05) 100%)" 
          }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Shine effect */}
        <motion.div 
          className="absolute inset-0"
          initial={{ 
            x: "-100%",
            background: "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0) 100%)",
            skewX: -45
          }}
          whileHover={{
            x: "200%",
            transition: {
              duration: 1,
              ease: "easeInOut"
            }
          }}
        />
        
        {/* Dark mode glow effect */}
        <motion.div 
          className="absolute inset-0 dark:block hidden"
          initial={{ 
            background: "radial-gradient(circle at center, rgba(230, 175, 46, 0) 0%, rgba(61, 52, 139, 0) 100%)" 
          }}
          whileHover={{ 
            background: "radial-gradient(circle at center, rgba(230, 175, 46, 0.1) 0%, rgba(61, 52, 139, 0.05) 100%)" 
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Border gradient */}
        <motion.div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: 'linear-gradient(135deg, rgba(61, 52, 139, 0.2) 0%, rgba(230, 175, 46, 0.2) 100%)',
            filter: 'blur(2px)',
            zIndex: -1
          }}
        />
        
        {/* Card content */}
        <div className="relative z-10 backdrop-blur-[2px]">
          {children}
        </div>

        {/* Hover background animation */}
        <motion.div
          className="absolute inset-0 -z-10"
          initial={{ 
            background: "radial-gradient(circle at center, rgba(61, 52, 139, 0) 0%, rgba(230, 175, 46, 0) 100%)",
            scale: 0.8,
            opacity: 0
          }}
          whileHover={{ 
            background: "radial-gradient(circle at center, rgba(61, 52, 139, 0.1) 0%, rgba(230, 175, 46, 0.05) 100%)",
            scale: 1.2,
            opacity: 1
          }}
          transition={{ 
            duration: 0.5,
            ease: "easeOut"
          }}
        />
      </Card>
    </motion.div>
  );
};

export { AnimatedCard }; 