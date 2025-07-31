// import { useState } from "react";
// export default App;
import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import About from "./Components/About";
import Profile from './Components/Profile';
import Contact from './Components/Contact';

import Skills from './Components/Skills';
import Navbarr from './Components/Navbarr';
import Education from './Components/Education';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';

import "./App.css";
// the portfolio app 

function AppContent() {
  const { getThemeStyles } = useTheme();
  const themeStyles = getThemeStyles();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (  
    <div className={`${themeStyles.textColor} app-impact-font overflow-hidden`}
       style={{
      background: themeStyles.background,
      backgroundImage: themeStyles.backgroundImage,
      backgroundSize: themeStyles.backgroundSize,
      backgroundPosition: themeStyles.backgroundPosition,
    }}
    >
         <Navbarr />
         <Profile />
         <About />
         <Education />
         <Skills />
         <Contact />
    </div>
  )
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App


