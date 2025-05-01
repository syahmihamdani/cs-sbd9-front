import React, { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react"; 
import { motion } from "framer-motion";

function DarkModeToggle() {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      root.classList.remove("dark");
      localStorage.theme = "light";
    }
  }, [isDark]);

  return (
    <motion.button
      onClick={() => setIsDark(!isDark)}
      className="p-2 rounded-full transition bg-blue hover:bg-gray-200 dark:bg-blue dark:hover:bg-gray-700"
      initial={{ opacity: 0, rotate: -90 }}
      animate={{ opacity: 1, rotate: 0 }}
      transition={{ duration: 0.4 }}
    >
      {isDark ? <Sun className="text-yellow-400" /> : <Moon className="text-yellow-500" />}
    </motion.button>
  );
}

export default DarkModeToggle;
