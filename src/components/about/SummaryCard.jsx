import React from "react";
import { headings, profile } from "../../constant";
import { motion } from "framer-motion";

const SummaryCard = () => {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-end gap-6 md:gap-10 w-full">

      {/* PROFILE IMAGE CARD */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-white/15 p-6 rounded-2xl shadow-lg w-full max-w-xs md:max-w-sm"
      >
        <div className="w-full h-64 sm:h-72 md:h-80 bg-gradient-to-r from-[#6B8CED] to-[#8FD1F1] rounded-xl overflow-hidden">
          <img
            src={profile.image}
            className="w-full h-full object-cover rounded-xl"
            alt="profile"
          />
        </div>
      </motion.div>

      {/* RIGHT SECTION */}
      <div className="flex flex-col items-center md:items-start w-full max-w-xl">

        {/* HEADING */}
        <motion.div
          className="flex items-center justify-center md:justify-start gap-4 mb-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img src={headings.image} alt="star" className="w-8 h-8" />
          <h1 className="text-3xl sm:text-4xl md:text-6xl uppercase font-bold text-center md:text-left whitespace-nowrap">
            {headings.summaryH1}
          </h1>
          <img src={headings.image} alt="star" className="w-6 h-6 md:w-8 md:h-8" />
        </motion.div>

        {/* SUMMARY CARD */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="
            bg-gradient-to-r from-[#1a1a1a] to-[#0d0d0d]
            rounded-2xl border-t-2 border-gray-500
            px-6 py-8 md:px-10 md:py-10
            relative w-full lg:w-[800px]
          "
        >
          <div className="absolute top-0 left-10">
            <img
              src='/images/down arrorw star.png'
              alt='line-star'
              className='h-6 md:h-8 object-contain'
            />
          </div>

          <div className="flex flex-col gap-4 mt-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
              {profile.name}
            </h2>
            <p className="text-white text-sm sm:text-base md:text-lg leading-relaxed">
              {profile.description}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SummaryCard;
