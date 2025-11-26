import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const SmallCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="mx-auto grid grid-cols-6 gap-3 w-full h-52 max-w-4xl"
    >

      {/* LEFT CARD */}
      <div className="
        col-span-3
        bg-gradient-to-r from-[#1a1a1a] to-[#0d0d0d]
        rounded-2xl 
        border-gray-500 border-t-2
        shadow-lg
        p-4 sm:p-6 md:p-8
        flex items-center justify-center
      ">
        <div className="flex justify-between items-center gap-10 sm:gap-14">

          <div className="flex flex-col items-center text-white gap-1">
            <span className="text-4xl font-bold">07</span>
            <p className="text-sm text-white/70 text-center leading-tight">
              Years <br /> Experience
            </p>
          </div>

          <div className="flex flex-col items-center text-white gap-1">
            <span className="text-4xl font-bold">+125</span>
            <p className="text-sm text-white/70 text-center leading-tight">
              Clients <br /> Worldwide
            </p>
          </div>

          <div className="flex flex-col items-center text-white gap-1">
            <span className="text-4xl font-bold">+210</span>
            <p className="text-sm text-white/70 text-center leading-tight">
              Total <br /> Projects
            </p>
          </div>

        </div>
      </div>

      {/* RIGHT CARD */}
      <div className="
        col-span-3 col-start-4
        bg-gradient-to-r from-[#1a1a1a] to-[#0d0d0d]
        rounded-2xl
        border-gray-500 border-t-2 
        p-6 sm:p-8 md:p-10
        flex justify-between items-center
        shadow-lg
      ">
        <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
          <span>Let's</span>
          <span className="text-violet-800 block">Get Together</span> 
        </div>

        <Link
          to="/contact"
          className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition"
        >
          <img
            src="/icon.svg"
            alt=""
            className="w-6 h-6 opacity-50 hover:opacity-100 transition"
          />
        </Link>
      </div>
    </motion.div>
  );
};

export default SmallCard;
