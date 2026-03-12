import React from "react";
import Btn from "./Btn";
import Noufel from "../Assets/Noufel.png";

function Profile() {
  return (
    <div
      id="Profile"
      className="flex flex-col p-5  lg:flex-row items-center  w-full  mx-auto px-4"
    >
      {/* Left: Text Content */}
      <div
        className="flex flex-col gap-12 md:gap-3  items-center flex-1"
        data-aos="fade-in"
      >

        <h1 className="text-5xl lg:text-[15rem] font-extrabold uppercase ml-8 leading-snug app-impact-font tracking-[8px]">
          Noufel
        </h1>
{/* 
        <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-8 ">
          <div className="flex-1 flex flex-col items-center">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#00FF00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mb-2"><circle cx="12" cy="10" r="3"/><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/></svg>
            <div className="text-center">
              <span className="font-bold text-white text-lg lg:text-xl">BASED IN LOS ANGELES,</span><br />
              <span className="text-gray-400 text-base lg:text-lg">CALIFORNIA</span>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-center">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mb-2"><circle cx="12" cy="12" r="10"/><ellipse cx="12" cy="12" rx="10" ry="3"/><path d="M2 12a10 10 0 0 0 20 0"/></svg>
            <div className="text-center">
              <span className="font-bold text-white text-lg lg:text-xl">AVAILABLE ALL AROUND</span><br />
              <span className="text-gray-400 text-base lg:text-lg">WORLDWIDE</span>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-center">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#00BFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mb-2"><polygon points="12 2 15 8.5 22 9.3 17 14.1 18.2 21 12 17.8 5.8 21 7 14.1 2 9.3 9 8.5 12 2"/></svg>
            <div className="text-center">
              <span className="font-bold text-white text-lg lg:text-xl">DIGITAL DESIGNER</span><br />
              <span className="text-gray-400 text-base lg:text-lg">+FRAMER DEVELOPER</span>
            </div>
          </div>
        </div> */}
    
    </div>
    </div>
  );
}

export default Profile;
