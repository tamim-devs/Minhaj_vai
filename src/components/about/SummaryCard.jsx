import React from "react";
import { headings, profile } from "../../constant";
import { motion } from "framer-motion";
const SummaryCard = () => {
  return (
    <div className="flex items-end md:flex-row gap-8">
      <motion.div 
       initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-white/15 p-4  rounded-2xl shadow-lg">
        <div className="w-90 h-90 bg-linear-to-r from-[#6B8CED] to-[#8FD1F1]  rounded-xl">
          <img
            src={profile.image}
            className=" rounded-2xl object-cover "
            alt="profile"
          />
        </div>
      </motion.div>

      <div
        className="max-w-xl flex flex-col gap-1 justify-end items-center"
      >
        <motion.div className="flex mb-4 items-center gap-4"
          initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}>
          <img
            src={headings.image}
            alt="star"
            className="w-10 h-10 object-contain "
          />

          <h1 className="text-6xl uppercase font-bold whitespace-nowrap">
            {headings.summaryH1}
          </h1>

          <img
            src={headings.image}
            alt="star"
            className="w-10 h-10 object-contain"
          />
        </motion.div>

        {/* Gradient Background Card */}
        <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
          className="
    bg-linear-to-r from-[#1a1a1a] to-[#0d0d0d]
    flex flex-col gap-2 rounded-2xl border-2 relative
    px-4 py-6 
    sm:px-6 sm:py-8
    md:px-8 md:py-10 
  "
        >
          <div className="absolute top-0 left-10 -translate-x-1/2">
            <img
              src="../../../public/images/down arrorw star.png"
              alt="line-star"
              className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 object-contain"
            />
          </div>

          <div className="flex flex-col gap-4 items-start justify-start  sm:mt-16 md:mt-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
              {profile.name}
            </h2>

            <p className="text-white text-sm sm:text-base line-clamp-3 w-full">
              {profile.description}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SummaryCard;
