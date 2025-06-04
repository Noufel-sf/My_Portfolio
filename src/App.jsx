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

import "./App.css";
// the portfolio app 

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (  
    <div className='bg-[#0D0C0C] text-white app-impact-font overflow-hidden '>
         <Navbarr />
         <Profile />
         <About />
         <Education />
         <Skills />
         <Contact />
    </div>
  )
}

export default App