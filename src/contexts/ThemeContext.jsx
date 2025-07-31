import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true); // Default to dark mode

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  const getThemeStyles = () => {
    if (isDarkMode) {
      return {
        background: "#000000",
        backgroundImage: "radial-gradient(circle, rgba(255, 255, 255, 0.2) 1.5px, transparent 1.5px)",
        backgroundSize: "30px 30px",
        backgroundPosition: "0 0",
        textColor: "text-white"
      };
    } else {
      return {
        background: "#ffffff",
        backgroundImage: "radial-gradient(circle at 1px 1px, rgba(0, 0, 0, 0.35) 1px, transparent 0)",
        backgroundSize: "20px 20px",
        textColor: "text-black"
      };
    }
  };

  const value = {
    isDarkMode,
    toggleTheme,
    getThemeStyles
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};
