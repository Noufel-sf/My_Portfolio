import React from "react";
import Btn from "./Btn";
import Langs from "../Assets/langs.png"; // Assuming this is the correct path to your image
import { useTheme } from "../contexts/ThemeContext";

function About() {
  const { isDarkMode } = useTheme();
  
  return (
    <div
      id="About"
      className={`flex items-center w-full lg:w-[80%] mx-auto justify-between gap-10 lg:gap-0 lg:flex-row flex-col ${isDarkMode ? 'bg-[#0D0C0C] text-white' : 'bg-gray-50 text-black'} app-impact-font my-40 rounded-lg`}
    >
      <div className="flex items-start gap-5 flex-col p-10 w-full">
        <p className="text-gray-500 ml-4 text-3xl">&lt;h1&gt;</p>
        <h2 className="capitalize text-7xl tracking-[3px]" data-aos="fade-up">
          {" "}
          about me
        </h2>
        <p className="text-gray-500 ml-4 text-3xl">&lt;/h1&gt;</p>
        <p className="text-grey text-2xl tracking-[3px]" data-aos="fade-up">
          <p className="text-gray-500 text-3xl my-4">&lt;p&gt;</p> I'm a MERN stack developer i make full stack projects using  MongoDB, Express.js,
           React.js, and Node.js. I also work with Next.js to 
           build fast and responsive web applications. I enjoy building both the frontend and backend of websites,
            and I'm always looking to learn and improve my skills. I'm open to freelance work, projects, or full-time opportunities.
        <p className="text-gray-500 ml-4 text-3xl">&lt;/p&gt;</p>
        </p>{" "}
        <a href="https://github.com/Noufel-sf">
          <Btn text={"star us"} />
        </a>
      </div>
      {/* <div className="">
        <img src={Langs} alt="Languages" className="" />
      </div> */}
    </div>
  );
}

export default About;
