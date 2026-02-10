import React from "react";

const Footer = () => {
  return (
    <footer className="w-full px-8 py-15 mt-24">
      <hr className="border-t border-gray-700 mb-8 mx-8" />
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-8">
        <div className="text-gray-400 text-sm tracking-widest mb-4 md:mb-0">
           2025 Noufel PORTFOLIO.
        </div>
        {/* Center: Social Links */}
        <div className="flex gap-8 text-gray-400 text-base font-medium">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">LINKEDIN</a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">GITHUB</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">INSTAGRAM</a>
        </div>
        {/* Right: Back to Top */}
        <div className="text-gray-400 text-base font-medium flex items-center cursor-pointer hover:text-white transition" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          Back to Top
          <span className="ml-1">↑</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
