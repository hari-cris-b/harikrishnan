import React from 'react';
import { motion } from 'framer-motion';
import { useAnimation as useGlobalAnimation } from '@/contexts/AnimationContext';
import { AnimatedCard } from '@/components/ui/animated-card';
import { CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ExternalLink, Github, Calendar, Tag } from "lucide-react";
import { SectionHeader } from '../ui/section-header';
import Image from 'next/image';
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution with real-time inventory management, secure payment processing, and an intuitive admin dashboard.",
    image: "/projects/Ecommerce.png",
    tech: ["Next.js", "Node.js", "MongoDB", "Stripe", "Redux"],
    demoLink: "https://ecommerce-demo.com",
    githubLink: "https://github.com/username/ecommerce",
    date: "2023",
    category: "Full Stack",
  },
  {
    title: "Data Visualization Dashboard",
    description: "Interactive dashboard featuring real-time data visualization, customizable charts, and advanced filtering capabilities.",
    image: "/projects/Dashboard.png",
    tech: ["React", "D3.js", "Express", "PostgreSQL", "WebSocket"],
    demoLink: "https://dashboard-demo.com",
    githubLink: "https://github.com/username/dashboard",
    date: "2023",
    category: "Frontend",
  },
  {
    title: "AI-powered Chatbot",
    description: "Intelligent chatbot utilizing natural language processing for automated customer support with multi-language support.",
    image: "/Projects/Chatbot.png",
    tech: ["Python", "TensorFlow", "Flask", "Docker", "Redis"],
    demoLink: "https://chatbot-demo.com",
    githubLink: "https://github.com/username/chatbot",
    date: "2022",
    category: "AI/ML",
  },
] as const;

const ProjectsSection = () => {
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);
  const { isPaused } = useGlobalAnimation();
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [isProjectPaused, setIsProjectPaused] = React.useState(false);
  const [isDragging, setIsDragging] = React.useState(false);
  const [dragStartX, setDragStartX] = React.useState(0);
  const [scrollStartX, setScrollStartX] = React.useState(0);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);
  const touchStartRef = React.useRef<number | null>(null);

  // Check scroll position to update navigation arrows
  const checkScrollPosition = () => {
    if (!scrollContainerRef.current) return;
    
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    
    // Update active index based on scroll position
    const cardWidth = 400; // Width of one card
    const newIndex = Math.round(scrollLeft / cardWidth);
    setActiveIndex(newIndex % projects.length);
  };

  React.useEffect(() => {
    checkScrollPosition();
    window.addEventListener('resize', checkScrollPosition);
    return () => window.removeEventListener('resize', checkScrollPosition);
  }, []);

  // Handle scroll events
  const handleScroll = () => {
    checkScrollPosition();
    setIsProjectPaused(true);
    const timeoutId = setTimeout(() => setIsProjectPaused(false), 1000);
    return () => clearTimeout(timeoutId);
  };

  // Handle mouse/touch events
  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsProjectPaused(true);
    setIsDragging(true);
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    setDragStartX(clientX);
    if (scrollContainerRef.current) {
      setScrollStartX(scrollContainerRef.current.scrollLeft);
    }
  };

  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const drag = dragStartX - clientX;
    scrollContainerRef.current.scrollLeft = scrollStartX + drag;
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    setTimeout(() => setIsProjectPaused(false), 1000);
  };

  // Handle arrow navigation
  const scroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    
    const scrollAmount = 400; // Width of one card
    const newScrollLeft = scrollContainerRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
    
    scrollContainerRef.current.scrollTo({
      left: newScrollLeft,
      behavior: 'smooth'
    });
  };

  // Handle touch events
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartRef.current = e.touches[0].clientX;
    setIsProjectPaused(true);
    setIsDragging(true);
    if (scrollContainerRef.current) {
      setScrollStartX(scrollContainerRef.current.scrollLeft);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !scrollContainerRef.current || touchStartRef.current === null) return;
    
    const touch = e.touches[0];
    const drag = touchStartRef.current - touch.clientX;
    scrollContainerRef.current.scrollLeft = scrollStartX + drag;
  };

  return (
    <section id="projects" className="py-20 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: isPaused ? 0 : 0.5 }}
      >
        <SectionHeader 
          title={['Projects', 'My Work', 'Portfolio', 'Projects']}
        />
        
        <div className="relative mt-10">
          {/* Navigation arrows with improved visibility */}
          {canScrollLeft && (
            <motion.button
              onClick={() => scroll('left')}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/90 dark:bg-[#191716]/90 rounded-full shadow-lg backdrop-blur-sm border border-gray-200 dark:border-gray-800 hover:scale-110 transition-transform"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            </motion.button>
          )}
          {canScrollRight && (
            <motion.button
              onClick={() => scroll('right')}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/90 dark:bg-[#191716]/90 rounded-full shadow-lg backdrop-blur-sm border border-gray-200 dark:border-gray-800 hover:scale-110 transition-transform"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Scroll right"
            >
              <ChevronRight className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            </motion.button>
          )}
          
          {/* Project cards container */}
          <div 
            ref={scrollContainerRef}
            className="relative flex gap-6 py-10 px-4 overflow-x-auto scrollbar-hide"
            onScroll={handleScroll}
            onMouseDown={handleDragStart}
            onMouseMove={handleDragMove}
            onMouseUp={handleDragEnd}
            onMouseLeave={handleDragEnd}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleDragEnd}
            style={{ 
              cursor: isDragging ? 'grabbing' : 'grab',
              touchAction: 'pan-y pinch-zoom',
              WebkitOverflowScrolling: 'touch',
              position: 'relative'
            }}
          >
            <motion.div
              className="flex gap-6 min-w-max relative"
              animate={!isProjectPaused ? { 
                x: [0, '-100%']
              } : {}}
              transition={{
                x: {
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                  delay: 2
                }
              }}
              style={{ pointerEvents: isDragging ? 'none' : 'auto' }}
            >
              {[...projects, ...projects].map((project, index) => (
                <AnimatedCard
                  key={`${project.title}-${index}`}
                  index={index}
                  className="w-[300px] md:w-[400px] flex-shrink-0 group hover:scale-[1.02] transition-transform duration-300"
                >
                  {/* Project Image */}
                  <div className="relative w-full h-48 overflow-hidden rounded-t-lg">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 300px, 400px"
                      className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  <CardHeader className="relative">
                    {/* Category Badge */}
                    <div className="absolute -top-4 left-4">
                      <Badge variant="secondary" className="bg-[#3d348b] text-white dark:bg-[#e6af2e] dark:text-[#191716]">
                        {project.category}
                      </Badge>
                    </div>

                    <CardTitle className="text-xl font-semibold text-[#3d348b] dark:text-[#e6af2e] mt-2">
                      {project.title}
                    </CardTitle>
                    
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <Calendar className="w-4 h-4" />
                      <span>{project.date}</span>
                    </div>

                    <CardDescription className="mt-2">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>

                  <CardFooter className="mt-auto space-x-2">
                    <ProjectButton
                      href={project.demoLink}
                      icon={<ExternalLink className="w-4 h-4" />}
                    >
                      Live Demo
                    </ProjectButton>
                    <ProjectButton
                      href={project.githubLink}
                      icon={<Github className="w-4 h-4" />}
                    >
                      Source
                    </ProjectButton>
                  </CardFooter>
                </AnimatedCard>
              ))}
            </motion.div>
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {projects.map((_, index) => (
              <motion.div
                key={index}
                className={`w-2 h-2 rounded-full ${
                  index === activeIndex
                    ? 'bg-[#3d348b] dark:bg-[#e6af2e]'
                    : 'bg-gray-300 dark:bg-gray-700'
                }`}
                whileHover={{ scale: 1.2 }}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

// Project Button Component
const ProjectButton = ({ 
  children, 
  icon, 
  href 
}: { 
  children: React.ReactNode;
  icon: React.ReactNode;
  href: string;
}) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    {icon}
    <span className="ml-2">{children}</span>
  </motion.a>
);

export default ProjectsSection;