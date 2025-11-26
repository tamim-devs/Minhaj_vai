import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const SmallCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
    >

      {/* LEFT CARD */}
      <div className="
        bg-gradient-to-r from-[#1a1a1a] to-[#0d0d0d]
        rounded-2xl shadow-lg border-t-2 border-gray-500
        px-6 py-8
        flex justify-around items-center
      ">
        <div className="flex flex-col items-center text-white">
          <span className="text-4xl font-bold">07</span>
          <p className="text-sm text-white/70 text-center leading-tight">
            Years <br /> Experience
          </p>
        </div>

        <div className="flex flex-col items-center text-white">
          <span className="text-4xl font-bold">+125</span>
          <p className="text-sm text-white/70 text-center leading-tight">
            Clients <br /> Worldwide
          </p>
        </div>

        <div className="flex flex-col items-center text-white">
          <span className="text-4xl font-bold">+210</span>
          <p className="text-sm text-white/70 text-center leading-tight">
            Total <br /> Projects
          </p>
        </div>
      </div>

      {/* RIGHT CARD */}
      <div className="
        bg-gradient-to-r from-[#1a1a1a] to-[#0d0d0d]
        rounded-2xl shadow-lg border-t-2 border-gray-500
        px-6 py-8
        flex justify-between items-center
      ">
        <div>
          <span className="text-2xl md:text-3xl font-bold text-white">Let's</span>
          <span className="text-violet-800 text-2xl md:text-3xl font-bold block">
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
