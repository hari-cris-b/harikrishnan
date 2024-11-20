import React from 'react';
import { Section } from '@/components/ui/section';
import { SectionHeader } from '@/components/ui/section-header';
import { AnimatedCard } from '@/components/ui/animated-card';
import { CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronRightIcon } from '@heroicons/react/24/outline';

const skillCategories = [
  {
    title: "Front-end",
    skills: [
      { name: "React", proficiency: 90 },
      { name: "Next.js", proficiency: 85 },
      { name: "TypeScript", proficiency: 85 },
      { name: "Tailwind CSS", proficiency: 90 },
      { name: "HTML5 & CSS3", proficiency: 95 },
    ],
    icon: "",
  },
  {
    title: "Back-end",
    skills: [
      { name: "Node.js", proficiency: 85 },
      { name: "Express", proficiency: 80 },
      { name: "Python", proficiency: 85 },
      { name: "Django", proficiency: 80 },
      { name: "SQL & NoSQL", proficiency: 85 },
    ],
    icon: "",
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git & GitHub", proficiency: 90 },
      { name: "Docker", proficiency: 80 },
      { name: "AWS", proficiency: 75 },
      { name: "CI/CD", proficiency: 80 },
      { name: "Agile", proficiency: 85 },
    ],
    icon: "",
  },
] as const;

const SkillCard = ({ category, index }: { category: typeof skillCategories[number], index: number }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <AnimatedCard
      index={index}
      className="group relative overflow-hidden bg-white/90 dark:bg-[#191716]/90 backdrop-blur-md transform-gpu transition-all duration-500 hover:scale-[1.02]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated background gradient */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-[#3d348b]/5 to-[#e6af2e]/5"
        animate={{
          opacity: isHovered ? 0.8 : 0.5,
          scale: isHovered ? 1.1 : 1,
        }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Content */}
      <div className="relative z-10">
        <CardHeader className="relative pb-6">
          <div className="flex items-center gap-3">
            <span className="text-2xl">{category.icon}</span>
            <CardTitle className="text-xl font-semibold bg-gradient-to-r from-[#3d348b] to-[#e6af2e] bg-clip-text text-transparent">
              {category.title}
            </CardTitle>
          </div>
          {/* Animated underline */}
          <motion.div 
            className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-[#3d348b]/20 via-[#e6af2e]/40 to-[#3d348b]/20"
            animate={{
              scaleX: isHovered ? 1.1 : 1,
              opacity: isHovered ? 0.8 : 0.5,
            }}
            transition={{ duration: 0.3 }}
          />
        </CardHeader>
        
        <CardContent>
          <ul className="space-y-4">
            {category.skills.map((skill) => (
              <motion.li 
                key={skill.name}
                className="relative"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2 min-w-[140px]">
                    <ChevronRightIcon className="w-4 h-4 text-[#3d348b] dark:text-[#e6af2e]" />
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      {skill.name}
                    </span>
                  </div>
                  {/* Skill progress bar */}
                  <div className="flex-1 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-[#3d348b] to-[#e6af2e]"
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.proficiency}%` }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                    />
                  </div>
                </div>
              </motion.li>
            ))}
          </ul>
        </CardContent>
      </div>

      {/* Animated corner decorations */}
      <motion.div 
        className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-[#3d348b]/10 to-[#e6af2e]/10 rounded-bl-full"
        animate={{
          scale: isHovered ? 1.2 : 1,
          opacity: isHovered ? 0.7 : 0.5,
        }}
        transition={{ duration: 0.3 }}
      />
      <motion.div 
        className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-[#e6af2e]/10 to-[#3d348b]/10 rounded-tr-full"
        animate={{
          scale: isHovered ? 1.2 : 1,
          opacity: isHovered ? 0.7 : 0.5,
        }}
        transition={{ duration: 0.3 }}
      />
    </AnimatedCard>
  );
};

const SkillsSection = () => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.2], [100, 0]);

  return (
    <Section id="skills" ref={ref}>
      <motion.div style={{ opacity, y }}>
        <SectionHeader 
          title={['Skills', 'My Skills', 'My Expertise', 'Skills']}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 pt-10 md:pt-16 px-4">
          {skillCategories.map((category, index) => (
            <SkillCard key={category.title} category={category} index={index} />
          ))}
        </div>

        {/* Animated bottom decorative element */}
        <motion.div 
          className="mt-16 flex flex-col items-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.div 
            className="w-40 h-1 bg-gradient-to-r from-[#3d348b]/20 via-[#e6af2e]/40 to-[#3d348b]/20 rounded-full"
            whileHover={{ width: 200 }}
            transition={{ duration: 0.3 }}
          />
          <motion.div 
            className="w-20 h-1 bg-gradient-to-r from-[#3d348b]/10 via-[#e6af2e]/20 to-[#3d348b]/10 rounded-full"
            whileHover={{ width: 100 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default SkillsSection;