import React from "react";

function Footer() {
  return (
    <footer className="max-w-[1300px] mx-auto px-3 py-5 flex items-center justify-between flex-wrap gap-2">
      <p className="font-mono text-[11px] text-white">
        © 2026 Noufel seif el islam — Mern stack & Next Nest js
      </p>
      <div className="flex items-center gap-2">
        <div className="w-1.5 h-1.5 rounded-full bg-[#7A93A8]" />
        <p className="font-mono text-[11px] text-white">Algeria (mila)</p>
      </div>
    </footer>
  );
}

export default Footer;
