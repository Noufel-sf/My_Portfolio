import React from "react";


// front end icons
import js from "../Assets/javascript.png";
import css from "../Assets/cssssss.png";
import React_icon from "../Assets/React.png";
import Adobexd from "../Assets/adobe.png";
import Ps from "../Assets/ps.png";
import figma from "../Assets/figma.png";
import tailwindcss from "../Assets/tailwindcss.png";
import Html from "../Assets/html.png";

// back end icons :
import typescript from "../Assets/typescript_original_logo_icon_146317.png"
import nodejs from "../Assets/nodejs_original_logo_icon_146411.png"
import nextjs from "../Assets/nextjs-removebg-preview (1).png"
//databases icons 
import mongodb from "../Assets/mongodb_original_logo_icon_146424.png"
import mysql from "../Assets/mysql_original_wordmark_logo_icon_146417.png"



const frontend_techIcons = [js, css, React_icon, Adobexd, Html, figma, tailwindcss ,nodejs ,typescript ,nextjs,mongodb ,mysql];

const FrontTech = () => {
  return (
    <div className="flex flex-col gap-12 items-center mb-30">
      <h1 className="capitalize text-4xl lg:text-6xl ">technoligies i use</h1>
     
        
          <div
            className="flex items-center justify-around gap-4 flex-wrap mt-5 max-w-[80%]"
            data-aos="fade-up"
          >
            {frontend_techIcons.map((icon, index) => (
              <img
                key={index}
                src={icon}
                alt={`tech-${index}`}
                className="w-16 h-16 object-contain"
              />
            ))}
          </div>
    </div>
  );
}




export default FrontTech;
