import React from 'react';
import js from '../Assets/javascript.png';
import git from '../Assets/gitttt.png';
import css from '../Assets/cssssss.png';
import React_icon from '../Assets/React.png';
import Adobexd from '../Assets/adobe.png'
import Ps from '../Assets/ps.png';
import figma from '../Assets/figma.png';
import tailwindcss from '../Assets/tailwindcss.png'
import Html from '../Assets/html.png';

const techIcons = [js, git, css, React_icon,Adobexd, Html, Ps, figma , tailwindcss];

const FrontTech = () => {

  return (
    <div className="text-white p-4 my-40 flex items-center flex-col gap-12">
      <h2 className="text-3xl lg:text-6xl font-bold mb-4 text-center capitalize tracking-[5px]" data-aos="fade-up">My Front End Technologies</h2>
      <div className="flex items-center justify-around gap-4 flex-wrap" data-aos="fade-up">

            {techIcons.map((icon, index) => (
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
};

export default FrontTech;
