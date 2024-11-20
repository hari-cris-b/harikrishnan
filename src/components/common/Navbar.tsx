import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Moon, Sun, Menu, X } from "lucide-react";
import { TypeAnimation } from 'react-type-animation';
import { routes } from '@/config/routes';
import { fadeInUp, hoverScale, tapScale } from '@/constants/animations';
import { useTheme } from '@/contexts/ThemeContext';
import React from 'react';
import { colors } from '@/constants/theme';

interface NavbarProps {
  activeSection: string;
  scrollToSection: (section: string) => void;
}

export const Navbar = ({ activeSection, scrollToSection }: NavbarProps) => {
  const { darkMode, toggleDarkMode } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [hasAnimated, setHasAnimated] = React.useState(false);

  // Debounce menu toggle to prevent rapid state changes
  const toggleMenu = React.useCallback(() => {
    requestAnimationFrame(() => {
      setIsMenuOpen(prev => !prev);
    });
  }, []);

  // Handle scroll performance
  React.useEffect(() => {
    if (!isMenuOpen) return;

    const handleScroll = () => {
      requestAnimationFrame(() => {
        setIsMenuOpen(false);
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMenuOpen]);

  const handleNavClick = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const navbarHeight = 64;
      const offset = section.getBoundingClientRect().top + window.scrollY - navbarHeight;
      
      window.scrollTo({
        top: offset,
        behavior: 'smooth'
      });
      
      // Close mobile menu if open
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-[#191716]/80 backdrop-blur-md border-b border-[#e6e7eb] dark:border-[#3d348b] will-change-transform">
      <nav className="container mx-auto px-4 py-4">
        <div className="relative flex items-center justify-between h-[40px]">
          {/* Logo container with fixed width */}
          <div className="w-[140px] sm:w-[240px] flex-shrink-0">
            {hasAnimated ? (
              <h1 className="text-xl sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#3d348b] via-[#e6af2e] to-[#3d348b] dark:from-[#e6af2e] dark:via-[#3d348b] dark:to-[#e6af2e] animate-gradient truncate">
                Hari Krishnan
              </h1>
            ) : (
              <TypeAnimation
                sequence={[
                  'Hari', 800,
                  'Hari Krishnan', 1000,
                  () => setHasAnimated(true)
                ]}
                wrapper="h1"
                speed={50}
                repeat={0}
                cursor={false}
                className="text-xl sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#e6af2e] via-[#3d348b] to-[#e6af2e] animate-gradient truncate"
              />
            )}
          </div>
          {/* Mobile menu button - fixed position */}
          <div className="md:hidden flex items-center justify-center w-[40px]">
            <Button
              variant="ghost"
              onClick={toggleMenu}
              className="p-1 h-[40px] w-[40px] flex items-center justify-center transform-gpu text-[#3d348b] dark:text-[#e6af2e]"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {routes.map((route) => (
              <Button
                key={route.id}
                variant="ghost"
                className={`${
                  activeSection === route.id
                    ? "text-[#3d348b] dark:text-[#e6af2e]"
                    : "text-gray-600 dark:text-gray-300"
                } transition-colors duration-200 transform-gpu hover:text-[#3d348b] dark:hover:text-[#e6af2e]`}
                onClick={() => handleNavClick(route.id)}
              >
                {route.label}
              </Button>
            ))}
            <Button
              variant="ghost"
              onClick={toggleDarkMode}
              className="text-[#3d348b] dark:text-[#e6af2e] transform-gpu"
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile navigation menu */}
        {isMenuOpen && (
          <div className="md:hidden fixed left-0 right-0 top-[72px] bg-white/95 dark:bg-[#191716]/95 backdrop-blur-sm transform-gpu">
            <div className="py-4 space-y-2 px-4 container mx-auto">
              {routes.map((route) => (
                <Button
                  key={route.id}
                  variant="ghost"
                  className={`${
                    activeSection === route.id
                      ? "text-[#3d348b] dark:text-[#e6af2e]"
                      : "text-gray-600 dark:text-gray-300"
                  } transition-colors duration-200 w-full justify-start text-lg transform-gpu hover:text-[#3d348b] dark:hover:text-[#e6af2e]`}
                  onClick={() => {
                    handleNavClick(route.id);
                    setIsMenuOpen(false);
                  }}
                >
                  {route.label}
                </Button>
              ))}
              <Button
                variant="ghost"
                onClick={() => {
                  toggleDarkMode();
                  setIsMenuOpen(false);
                }}
                className="text-[#3d348b] dark:text-[#e6af2e] w-full justify-start text-lg transform-gpu"
              >
                {darkMode ? (
                  <><Sun className="h-5 w-5 mr-2" /> Light Mode</>
                ) : (
                  <><Moon className="h-5 w-5 mr-2" /> Dark Mode</>
                )}
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}; 