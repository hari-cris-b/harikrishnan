import { motion } from 'framer-motion';

interface FloatingParticleProps {
  className: string;
  colors: string[];
  duration: number;
  reverse?: boolean;
}

export const FloatingParticle = ({ className, colors, duration, reverse = false }: FloatingParticleProps) => (
  <motion.div
    className={`absolute opacity-20 p-2 ${className}`}
    animate={{
      scale: [1, reverse ? 1.3 : 1.2, 1],
      rotate: [0, reverse ? -90 : 90, 0],
      opacity: [0.2, reverse ? 0.4 : 0.3, 0.2]
    }}
    transition={{
      duration,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  >
    <div className={`w-full h-full rounded-full bg-gradient-to-r from-[${colors[0]}] to-[${colors[1]}]`} />
  </motion.div>
); 