import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ThemeToggle = () => {
  const [isDarkMode, setDarkMode] = useState(false);

  useEffect(() => {

    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setDarkMode(storedTheme === 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = isDarkMode ? 'light' : 'dark';
    setDarkMode(!isDarkMode);

    localStorage.setItem('theme', newTheme);
    document.body.classList.toggle('dark-mode', !isDarkMode);
  };

  return (
    <motion.button
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="theme-toggle-button"
      onClick={toggleTheme}
    >
      {isDarkMode ? 'Light Mode' : 'Dark Mode'}
    </motion.button>
  );
};

export default ThemeToggle;