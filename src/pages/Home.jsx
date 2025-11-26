import React from "react";
import { motion } from "framer-motion";
import { homeCards, profile } from "../constant";
import { Link } from "react-router-dom";
import HomeCard from "../components/home/HomeCard";
import iconPlus from "/images/icon.svg";
import PageTransition from './../components/PageTransition';
import SmallCard from "../components/about/SmallCard";

const Home = () => {
  return (

    <PageTransition>
         <div className="min-h-screen bg-black flex justify-center py-12 px-4">
      <div className="w-full max-w-7xl flex flex-col gap-12">

        {/* TOP SECTION */}
        <div className="flex flex-col lg:flex-row gap-10">

          {/* PROFILE CARD */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="w-full bg-gradient-to-r from-[#1a1a1a] to-[#0d0d0d] 
            rounded-3xl p-6 shadow-xl flex flex-col md:flex-row items-center gap-6"
          >
            {/* IMAGE */}
            <div className="w-full md:w-64 h-48 rounded-2xl overflow-hidden shadow-lg">
              <img src={profile.image} className="w-full h-full object-cover" />
            </div>

            {/* TEXT */}
            <div className="relative flex flex-col gap-4 w-full">
              {homeCards
                .filter((c) => c.type === "profile")
                .map((c) => (
                  <div key={c.id} className="relative pr-10">
                    <h3 className="text-gray-300 text-lg font-semibold">{c.title}</h3>
                    <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">{c.name}</h2>
                    <p className="text-gray-300 opacity-70 text-base leading-snug max-w-md">
                      {c.description}
                    </p>

                    <Link
                      to="/about"
                      className="absolute right-0 bottom-0 w-9 h-9 hover:scale-110 transition"
                    >
                      <img src={iconPlus} className="w-full h-full" />
                    </Link>
                  </div>
                ))}
            </div>
          </motion.div>

          {/* RIGHT SIDE SECTION */}
          <div className="w-full flex flex-col gap-6">

            {/* SLIDER */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="bg-linear-to-r from-[#1a1a1a] to-[#0d0d0d] 
              h-12 sm:h-14 rounded-xl flex items-center text-white font-semibold shadow-md overflow-hidden"
            >
              <div className="relative w-full">
                <motion.div
                  className="absolute whitespace-nowrap flex"
                  animate={{ x: ["0%", "-100%"] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                >
                  <span className="px-12">FEATURED LATEST WORK AND STAR *</span>
                  <span className="px-12">FEATURED LATEST WORK AND STAR *</span>
                </motion.div>
              </div>
            </motion.div>

            {/* TWO SMALL CARDS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {homeCards.slice(1, 3).map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  className="bg-linear-to-r from-[#1a1a1a] to-[#0d0d0d]
                  p-6 rounded-2xl shadow-xl space-y-3"
                >
                  {(item.image || item.icon) && (
                    <div className="w-full h-40 rounded-xl overflow-hidden">
                      <img
                        src={item.image || item.icon}
                        className="w-full h-full object-cover opacity-80"
                      />
                    </div>
                  )}

                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="text-white/70 text-sm">{item.subtitle}</h4>
                      <h1 className="text-xl bg-red font-bold text-white">{item.title}</h1>
                    </div>
                    <Link to={item.link} className="cursor-pointer">
                     <img src="/images/icon.svg" className="w-9 h-9 hover:scale-110 transition" />

                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* FULL HOME CARD */}
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}>
          <HomeCard />
        </motion.div>

        {/* LAST 2 BOXES */}
       <motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
>
  <SmallCard />
</motion.div>
      </div>
    </div>

   </PageTransition>
    
  );
};

export default Home;
