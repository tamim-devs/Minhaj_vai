import React from "react";
import { motion } from "framer-motion";
import { homeCards, profile } from "../constant";
import iconPlus from "../../public/images/icon.svg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex justify-center items-center py-20 px-4 bg-black min-h-screen">
      <div className="flex flex-col gap-10 w-full max-w-6xl">

        <div className="flex flex-col md:flex-row gap-10">

          {/* LEFT PROFILE CARD */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full md:w-[850px] bg-gradient-to-r from-[#1a1a1a] to-[#0d0d0d] shadow-xl rounded-3xl p-6"
          >
            <div className="flex flex-row justify-center gap-4 items-center text-left">

              {/* IMAGE */}
              <div className="w-80 h-64 rounded-tr-[30px] rounded-bl-[30px]  overflow-hidden shadow-lg">
                <img
                  src={profile.image}
                  className="w-full h-full object-cover"
                  alt="profile"
                />
              </div>

              {/* TEXT CONTENT */}
              <div className="flex flex-col gap-2 relative">
                {homeCards
                  .filter((card) => card.type === "profile")
                  .map((card) => (
                    <div key={card.id} className="flex flex-col gap-2 relative pb-10">

                      <p className="text-gray-300 text-xl font-semibold">
                        {card.title}
                      </p>

                      <p className="text-white text-2xl font-medium">
                        {card.name}
                      </p>

                      <p className="text-gray-300 text-xl opacity-70 max-w-md leading-snug">
                        {card.description}
                      </p>

                      {/* BUTTON RIGHT AFTER DESCRIPTION */}
                      <Link
                        to="/about"
                        className="absolute right-2 bottom-0 w-6 h-6 hover:scale-110 transition"
                      >
                        <img src={iconPlus} alt="open" />
                      </Link>

                    </div>
                  ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <div className="flex flex-col gap-8 w-full md:w-2/3">

            {/* TITLE MARQUEE */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="bg-gradient-to-r from-[#1a1a1a] to-[#0d0d0d]
              h-14 rounded-xl shadow-md flex items-center overflow-hidden text-sm font-semibold text-white relative"
            >
              <div className="relative w-full overflow-hidden">

                
                <motion.div
                  className="flex whitespace-nowrap"
                  animate={{ x: ["0%", "-100%"] }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
          
                  <span className="px-12">FEATURED LATEST WORK AND STAR *</span>
                </motion.div>

                {/* BLOCK 2 */}
                <motion.div
                  className="flex whitespace-nowrap absolute top-0 left-full"
                  animate={{ x: ["0%", "-100%"] }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <span className="px-12">FEATURED LATEST WORK AND STAR *</span>
                  <span className="px-12">FEATURED LATEST WORK AND STAR *</span>
                  <span className="px-12">FEATURED LATEST WORK AND STAR *</span>
                </motion.div>
              </div>
            </motion.div>

            
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
  {homeCards.slice(0,2).map((item) => (
    <motion.div
      key={item.id}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-white/10 border border-white/20 backdrop-blur-xl
      p-6 rounded-2xl shadow-xl relative overflow-hidden flex flex-col gap-4"
    >

      {/* IMAGE */}
      {(item.image || item.icon) && (
        <div className="w-full h-40 rounded-xl overflow-hidden">
          <img
            src={item.image || item.icon}
            className="w-full h-full object-cover opacity-80"
          />
        </div>
      )}

      {/* TEXT + BUTTON ROW */}
      <div className="flex justify-between items-center w-full mt-2">
        <div className="flex flex-col">
          <h4 className="text-white/70 text-sm capitalize">
            {item.subtitle}
          </h4>

          <h1 className="text-2xl font-bold text-white">
            {item.title}
          </h1>
        </div>

        <button className="bg-white/20 p-3 rounded-full hover:bg-white/30 transition">
          <img src="/images/icon.svg" alt="btn" className="w-5" />
        </button>
      </div>

    </motion.div>
  ))}
</div>



          </div>
        </div>

        {/* LOWER SECTIONS */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-white h-48 rounded-2xl shadow-md p-6"
        >
          Lower section 1
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-white h-48 rounded-2xl shadow-md p-6"
        >
          Lower section 2
        </motion.div>

      </div>
    </div>
  );
};

export default Home;
