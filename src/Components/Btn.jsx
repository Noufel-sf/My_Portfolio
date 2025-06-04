import React from "react";

function Btn({ text }) {
  return (
    <button className="p-5 px-12  capitalize bg-black border-2 border-white rounded-lg cursor-pointer tracking-[3px] hover:bg-white hover:text-black transition duration-444">
      {text}
    </button>
  );
}

export default Btn;
