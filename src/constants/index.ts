import { NavigationItem, Skill, Project, EmailJSConfig } from '@/types';

export const NAVIGATION_ITEMS: NavigationItem[] = ["home", "about", "skills", "projects", "contact"];

export const SKILLS: Record<string, Skill> = {
  frontend: {
    title: "Front-end",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5 & CSS3"],
  },
  backend: {
    title: "Back-end",
    skills: ["Node.js", "Express", "Python", "Django", "SQL & NoSQL Databases"],
  },
  tools: {
    title: "Tools & Others",
    skills: ["Git & GitHub", "Docker", "AWS", "CI/CD", "Agile Methodologies"],
  },
};

export const PROJECTS: Project[] = [
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution with real-time inventory management",
    tech: "Next.js, Node.js, MongoDB",
    liveUrl: "#",
    githubUrl: "#",
    tags: ["Next.js", "Node.js", "MongoDB"],
    image: "/projects/ecommerce.jpg",
  },
  // Add more projects as needed
];

export const EMAIL_JS_CONFIG: EmailJSConfig = {
  SERVICE_ID: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
  TEMPLATE_ID: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
  PUBLIC_KEY: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
};