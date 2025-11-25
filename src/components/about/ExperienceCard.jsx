import React from "react";
import { experience } from "../../constant";

const ExperienceCard = () => {
  return (
    <div
      className="
        w-full max-w-2xl mx-auto
        backdrop-blur-xl  border-gray-500 border-t-2 border-r-0 bg-linear-to-r from-[#1a1a1a] to-[#0d0d0d]
        px-5 py-7 
        sm:px-8 sm:py-10 
        md:px-10 md:py-12
          lg:w-[800px]
        rounded-2xl shadow-lg 
        space-y-6
      "
    >
      {/* TITLE */}
      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 text-center sm:text-left">
        Experience
      </h2>

      {/* EXPERIENCE LIST */}
      {experience.map((exp, index) => (
        <div
          key={index}
          className="
            flex flex-col gap-2 
            pb-4 border-b border-white/10
            last:border-b-0 last:pb-0
          "
        >
          {/* YEAR */}
          <span className="text-gray-300 font-semibold text-lg sm:text-xl">
            {exp.year}
          </span>

          {/* DETAILS */}
          <div className="flex flex-col">
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              {exp.role}
            </h3>
            <p className="text-white/70 text-sm sm:text-base md:text-lg">
              {exp.company}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExperienceCard;
