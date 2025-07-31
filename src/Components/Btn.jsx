import React from "react";
import { useTheme } from "../contexts/ThemeContext";

function Btn({ text }) {
  const { isDarkMode } = useTheme();
  
  return (
    <button className={`p-5 px-12 capitalize ${isDarkMode ? 'bg-black border-white text-white hover:bg-white hover:text-black' : 'bg-white border-black text-black hover:bg-black hover:text-white'} border-2 rounded-lg cursor-pointer tracking-[3px] transition duration-444`}>
      {text}
    </button>
  );
}

export default Btn;
