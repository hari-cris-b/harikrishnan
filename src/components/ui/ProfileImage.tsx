import { motion } from 'framer-motion';
import Image from 'next/image';

export const ProfileImage = () => (
  <motion.div 
    className="relative w-full h-full group"
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ 
      duration: 0.8,
      ease: [0.215, 0.61, 0.355, 1]
    }}
  >
    <Image
      src="/pic1.jpg"
      alt="Profile"
      fill
      className="rounded-full object-cover"
      priority
    />
  </motion.div>
); 