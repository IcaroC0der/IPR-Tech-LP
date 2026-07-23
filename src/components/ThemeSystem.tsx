"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes";
import { type ThemeProviderProps } from "next-themes";
import { AnimatePresence, motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}

type TransitionContextType = {
  toggleTheme: () => void;
};

const TransitionContext = createContext<TransitionContextType | undefined>(undefined);

export function ThemeTransitionProvider({ children }: { children: React.ReactNode }) {
  const { theme, setTheme } = useTheme();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [nextTheme, setNextTheme] = useState<"light" | "dark" | null>(null);

  const toggleTheme = () => {
    if (isTransitioning) return;
    const newTheme = theme === "dark" ? "light" : "dark";
    setNextTheme(newTheme);
    setIsTransitioning(true);
    
    // Switch the actual theme when the screen is fully covered
    setTimeout(() => {
      setTheme(newTheme);
    }, 600);
    
    // Complete transition and remove overlay
    setTimeout(() => {
      setIsTransitioning(false);
      setNextTheme(null);
    }, 1400);
  };

  return (
    <TransitionContext.Provider value={{ toggleTheme }}>
      {children}
      
      {/* Light to Dark: Gosma preta escorrendo (Slime) */}
      <AnimatePresence mode="wait">
        {isTransitioning && nextTheme === "dark" && (
          <div className="fixed inset-0 z-50 pointer-events-none flex w-full h-full">
            {[0, 1, 2, 3, 4, 5, 6].map((i) => (
              <motion.div
                key={`slime-${i}`}
                initial={{ scaleY: 0, originY: 0 }}
                animate={{ scaleY: 1 }}
                exit={{ scaleY: 0, originY: 0 }}
                transition={{ 
                  duration: 0.6, 
                  ease: "circIn",
                  delay: i * 0.04 + (i % 2 === 0 ? 0 : 0.08) // Staggered delays for slime effect
                }}
                className="flex-1 bg-brand-black rounded-b-full scale-110"
              />
            ))}
          </div>
        )}
      </AnimatePresence>

      {/* Dark to Light: Fade Corporativo (Cinematic Fade) */}
      <AnimatePresence mode="wait">
        {isTransitioning && nextTheme === "light" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="fixed inset-0 z-50 bg-[#F5F1E8] pointer-events-none"
          />
        )}
      </AnimatePresence>
    </TransitionContext.Provider>
  );
}

export function useThemeTransition() {
  const context = useContext(TransitionContext);
  if (context === undefined) {
    throw new Error("useThemeTransition must be used within ThemeTransitionProvider");
  }
  return context;
}

export function ThemeToggle() {
  const { toggleTheme } = useThemeTransition();
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="w-6 h-6" />;

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <button
      onClick={toggleTheme}
      className="p-2 ml-4 rounded-sm transition-colors hover:bg-brand-gray-light dark:hover:bg-brand-gray-dark group flex items-center justify-center"
      aria-label="Alternar Tema"
    >
      {currentTheme === "dark" ? (
        <Sun className="w-5 h-5 text-brand-white group-hover:text-brand-creme" strokeWidth={1.5} />
      ) : (
        <Moon className="w-5 h-5 text-brand-black group-hover:opacity-70" strokeWidth={1.5} />
      )}
    </button>
  );
}
