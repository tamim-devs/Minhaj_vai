import React from "react";
import { education } from "../../constant";

const EducationCard = () => {
  return (
    <div
      className="w-full max-w-2xl 
                 border-gray-500 border-t-2 border-r-0 bg-linear-to-r from-[#1a1a1a] to-[#0d0d0d] backdrop-blur-xl border 
                 px-6 py-20 sm:px-10 lg:h-full   lg:w-[500px] sm:py-12 
                 rounded-2xl shadow-lg space-y-6"
    >
      {education.map((edu, index) => (
        <div
          key={index}
          className="flex flex-col gap-2 pb-4 
                      last:pb-0 last:border-b-0"
        >
          {/* YEAR */}
          <span className="text-white font-semibold text-lg sm:text-xl">
            {edu.year}
          </span>

          {/* DETAILS */}
          <div className="flex flex-col gap-1">
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              {edu.degree}
            </h3>
            <p className="text-white/70 text-base sm:text-lg">
              {edu.school}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EducationCard;
