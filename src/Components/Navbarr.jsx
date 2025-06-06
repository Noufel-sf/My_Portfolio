import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbarr() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full lg:w-[80%] mx-auto flex items-center justify-between py-12 px-4 relative w-full">
      <div className="text-2xl font-bold app-impact-font tracking-widest">
        <p className="text-gray-500 ml-4 cursor-pointer text-3xl">&lt;html&gt;</p>
      </div>
      {/* Hamburger Icon with React Icons */}
      <button
        className=" lg:hidden justify-center items-center z-50 text-white text-3xl cursor-pointer"
        onClick={() => setOpen(!open)}
        aria-label="Toggle Menu"
      >
        {open ? <FaTimes /> : <FaBars />}
      </button>
      {/* Nav Links */}
      <ul
        className={`
          flex-col gap-8 text-lg font-semibold z-[103] bg-[#181818] rounded-lg p-8 absolute top-full left-0 w-full shadow-lg transition-all duration-300
          ${open ? "flex" : "hidden"}
          lg:flex lg:flex-row lg:static lg:bg-transparent lg:shadow-none lg:p-0 lg:w-auto lg:items-center
        `}
        onClick={() => setOpen(false)}
      >
        <li>
          <a
            href="#Profile"
            className="hover:text-gray-500 transition cursor-pointer text-2xl"
          >
            Profile
          </a>
        </li>
        <li>
          <a
            href="#About"
            className="hover:text-gray-500 transition cursor-pointer text-2xl"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#Skills"
            className="hover:text-gray-500 transition cursor-pointer text-2xl"
          >
            Skills
          </a>
        </li>
        <li>
          <a href="#Contact" className="hover:text-gray-500 transition text-2xl">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbarr;
