import React from "react";
import Btn from "./Btn";
import Noufel from "../Assets/Noufel.png";

function Profile() {
  return (
    <div
      id="Profile"
      className="flex flex-col lg:flex-row items-center gap-10 w-full lg:w-[80%] mx-auto px-4"
    >
      {/* Left: Text Content */}
      <div
        className="flex flex-col gap-6 lg:gap-10 text-left flex-1"
        data-aos="fade-in"
      >
        {/* <p className="text-gray-500">&lt;html&gt;</p> */}
        <p className="text-gray-500 ml-4">&lt;body&gt;</p>
        <p className="text-gray-500 ml-4 text-3xl">&lt;h1&gt;</p>

        <h1 className="text-3xl lg:text-5xl lg:text-6xl font-extrabold uppercase ml-8 leading-snug app-impact-font tracking-[8px]">
          Hi <br />
          I am Noufel Seif <br />
          El Islam <br />
          Web Developer
        </h1>
        <p className="text-gray-500 ml-4 text-3xl">&lt;/h1&gt;</p>
        <p className="text-gray-500 ml-8 text-3xl">
          &lt;p&gt; Front end Developer &lt;/p&gt;
        </p>
        <div className="ml-8">
          <a href="#Contact">
            <Btn text="Contact Me" />
          </a>
        </div>
      </div>

      {/* Right: Image with Shape */}
      <div className="relative mt-12 lg:mt-0 flex-1 flex justify-center">
        {/* Rotated white shape */}
        <div className="absolute w-[300px] h-[300px] sm:h-[580px] md:h-[600px] lg:w-[1000px] lg:h-[1000px] sm:w-[600px]  bg-white top-[-30px] left-[-70px] lg:top-[-240px] lg:left-[180px] z-10 transform rotate-[22deg] rounded-lg shadow-2xl opacity-5"></div>
        {/* Person image */}
        <img
          data-aos="fade-in"
          src={Noufel}
          alt="Noufel Seif El Islam"
          className="relative z-20 w-[200px] lg:w-[600px] sm:w-[520px] md:w-[500px]"
        />
      </div>
    </div>
  );
}

export default Profile;
