import React from "react";

function Education() {
  return (
    <div
      id="Education"
      className="w-full lg:w-[80%] mx-auto my-20  text-white app-impact-font rounded-lg shadow-2xl p-10"
    >
      <div className="flex flex-col gap-6">
        <p className="text-gray-500 ml-4 text-3xl tracking-wide">&lt;h2&gt;</p>
        <h2 className="capitalize text-4xl lg:text-5xl font-bold tracking-wider mb-2"
         data-aos="fade-up"
        >
          Education
        </h2>
        <p className="text-gray-500 ml-4 text-3xl tracking-wide">&lt;/h2&gt;</p>
        <div className="ml-8">
          <h3 className="text-2xl font-semibold mb-1">
            Bachelor of Science in Computer Science
          </h3>
          <p className="text-lg text-gray-300 mb-1">
            Université Abdelhamid Mehri - Constantine 2, Algeria
          </p>
          <p className="text-md text-gray-400">2023 - Present</p>
        </div>
      </div>
    </div>
  );
}

export default Education;
