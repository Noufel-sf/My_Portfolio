import React from "react";
import Btn from "./Btn";
import Langs from "../Assets/langs.png"; // Assuming this is the correct path to your image

function About() {
  return (
    <div
      id="About"
      className="flex items-center w-full lg:w-[80%] mx-auto justify-between gap-10 lg:gap-0 lg:flex-row flex-col bg-[#0D0C0C] text-white app-impact-font my-40 rounded-lg"
    >
      <div className="flex items-start gap-12 flex-col p-10  lg:w-1/2 w-full">
        <p className="text-gray-500 ml-4 text-3xl">&lt;h1&gt;</p>
        <h2 className="capitalize text-7xl tracking-[3px]" data-aos="fade-up">
          {" "}
          about me
        </h2>
        <p className="text-gray-500 ml-4 text-3xl">&lt;/h1&gt;</p>
        <p className="text-grey text-2xl tracking-[3px]" data-aos="fade-up">
          <p className="text-gray-500 text-3xl my-4">&lt;p&gt;</p> A junior
          front-end developer focused on building beautiful, responsive web apps
          using React and Tailwind, with a strong interest in UI/UX and
          leadership in team projects.” 📸 Outside of tech, I’m passionate about
          photography. Capturing moments and telling visual stories helps me
          stay creative and detail-oriented
        </p>{" "}
        <p className="text-gray-500 ml-4 text-3xl">&lt;/p&gt;</p>
        <a href="https://github.com/Noufel-sf">
          <Btn text={"star us"} />
        </a>
      </div>
      <div className="">
        <img src={Langs} alt="Languages" className="" />
      </div>
    </div>
  );
}

export default About;
