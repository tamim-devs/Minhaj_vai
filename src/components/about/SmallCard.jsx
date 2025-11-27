import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const SmallCard = () => {
  return (
    
      <motion.div
        initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="
        w-full 
        grid grid-cols-1 md:grid-cols-2 
        gap-6 md:gap-10"
      >

       {/* LEFT CARD STATS SECTION */}
<div
  className="
    bg-gradient-to-r from-[#1a1a1a] to-[#0d0d0d]
    rounded-2xl shadow-lg border-t-2 border-gray-600
    px-4 py-10
    w-full
    flex flex-col md:flex-row
    gap-4 md:gap-0
    justify-between items-center
  "
>
  <div className="flex flex-col bg-gradient-to-r from-[#141414] to-[#1b1b1b] rounded-md p-6 items-center text-white w-full md:w-auto">
    <span className="text-4xl font-bold">07</span>
    <p className="text-sm text-white/70 text-center leading-tight">
      Years <br /> Experience
    </p>
  </div>

  <div className="flex rounded-md bg-gradient-to-r from-[#141414] to-[#1b1b1b] p-6 flex-col items-center text-white w-full md:w-auto">
    <span className="text-4xl font-bold">+125</span>
    <p className="text-sm text-white/70 text-center leading-tight">
      Clients <br /> Worldwide
    </p>
  </div>

  <div className="bg-gradient-to-r rounded-md from-[#141414] to-[#1b1b1b] p-6 flex flex-col items-center text-white w-full md:w-auto">
    <span className="text-4xl font-bold">+210</span>
    <p className="text-sm text-white/70 text-center leading-tight">
      Total <br /> Projects
    </p>
  </div>
</div>


        {/* RIGHT CARD */}
        <div
          className="
            bg-gradient-to-r from-[#1a1a1a] to-[#0d0d0d]
            rounded-2xl shadow-lg border-t-2 border-gray-600
            px-8 py-8
            flex justify-between items-center w-full
          "
        >
          <div>
            <span className="text-4xl md:text-4xl font-bold text-white">
              Let's
            </span>
            <span className="text-violet-700  md:text-5xl font-bold block">
              Get Together
            </span>
          </div>

          <Link
            to="/contact"
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition"
          >
            <img
              src="/images/icon.svg"
              alt="arrow"
              className="w-6 h-6 opacity-50 hover:opacity-100"
            />
          </Link>
        </div>
      </motion.div>
   
  );
};

export default SmallCard;
