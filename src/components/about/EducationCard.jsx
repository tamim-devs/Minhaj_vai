import React from "react";
import { education } from "../../constant";

const EducationCard = () => {
  return (
    <div
      className="w-full max-w-2xl 
                 bg-white/10 backdrop-blur-xl border border-white/20 
                 px-6 py-8 sm:px-10 sm:py-12 
                 rounded-2xl shadow-lg space-y-6"
    >
      {education.map((edu, index) => (
        <div
          key={index}
          className="flex flex-col gap-2 pb-4 
                      last:pb-0 last:border-b-0"
        >
          {/* TITLE */}
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 text-center sm:text-left">
            Innovation Timeline
          </h2>
          {/* YEAR */}
          <span className="text-gray-300 font-semibold text-lg sm:text-xl">
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
