import About from "./Components/About";
import Profile from './Components/Profile';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

import Skills from './Components/Skills';
import Navbarr from './Components/Navbarr';
import Education from './Components/Education';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';

import "./App.css";
import Breaf from "./Components/Breaf";

function AppContent() {
  const { getThemeStyles } = useTheme();
  const themeStyles = getThemeStyles();



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
         <Breaf />
         <Education />
         <Skills />
         <Contact />
         <Footer />
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


