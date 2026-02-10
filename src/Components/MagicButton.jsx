import React from "react";

function MagicButton({ onClick, children }) {
  return (
    <button
      onClick={onClick}
      className="magic-btn px-2 md:px-8 py-3 cursor-pointer border-2 border-white rounded-full text-white font-bold text-[15px] tracking-widest bg-transparent hover:bg-white hover:text-black transition duration-300 shadow-md focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
      style={{
        boxShadow: "0 0 16px 2px rgba(255,255,255,0.2)",
        letterSpacing: "0.1em",
      }}
    >
      {children}
    </button>
  );
}

export default MagicButton;

// CSS (add to App.css or MagicButton.css):
// .magic-btn {
//   animation: magicPulse 2s infinite;
// }
// @keyframes magicPulse {
//   0% { box-shadow: 0 0 16px 2px rgba(255,255,255,0.2); }
//   50% { box-shadow: 0 0 32px 8px rgba(255,255,255,0.4); }
//   100% { box-shadow: 0 0 16px 2px rgba(255,255,255,0.2); }
// }