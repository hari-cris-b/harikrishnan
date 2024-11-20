export type NavigationItem = "home" | "about" | "skills" | "projects" | "contact";

export interface Skill {
  title: string;
  skills: string[];
}

export interface Project {
  title: string;
  description: string;
  tech: string;
  liveUrl: string;  // Changed from demoUrl to liveUrl to match usage
  githubUrl: string;
  image?: string;    // Optional image URL
  tags?: string[];   // Optional tags for filtering
}

export interface EmailJSConfig {
  SERVICE_ID: string;
  TEMPLATE_ID: string;
  PUBLIC_KEY: string;
}

// Common TypeScript types
export interface Section {
  id: string;
  label: string;
}

export interface Theme {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export interface Animation {
  isPaused: boolean;
  hasStarted: boolean;
}