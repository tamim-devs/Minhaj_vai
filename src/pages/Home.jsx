import React from "react";
import { motion } from "framer-motion";
import { homeCards } from "../constant";
import { Link } from "react-router-dom";
import HomeCard from "../components/home/HomeCard";
import iconPlus from "/images/Next Icon.png";
import PageTransition from './../components/PageTransition';
import SmallCard from "../components/about/SmallCard";

const Home = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-black flex justify-center 
      py-8 px-4 md:px-8 lg:px-12">

        <div className="w-full max-w-7xl flex flex-col gap-8 sm:gap-10 lg:gap-12">

          {/* TOP SECTION */}
          <div className="flex flex-col lg:flex-row gap-10">

            {/* PROFILE CARD */}
            
            <Link to='/about' className="w-full bg-linear-to-r from-[#1a1a1a] to-[#0d0d0d] 
              rounded-3xl p-6 shadow-xl flex flex-col md:flex-row 
              items-center gap-6">

              <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="w-full bg-linear-to-r from-[#1a1a1a] to-[#0d0d0d] 
              rounded-3xl p-6 shadow-xl flex flex-col md:flex-row 
              items-center gap-6"
            >

              {/* IMAGE */}
              <div className="w-full sm:w-72 md:w-64 
              h-48 sm:h-56 md:h-48 overflow-hidden shadow-lg 
              rounded-tl-[30px] rounded-br-[30px]">

                <img
                  src={homeCards[0].image}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* TEXT */}
              <div className="flex flex-col gap-4 w-full">
                {homeCards
                  .filter((c) => c.type === "profile")
                  .map((c) => (
                    <div key={c.id} className="relative pr-10">
                      <h3 className="text-gray-300 text-sm sm:text-base">
                        {c.title}
                      </h3>

                      <h2 className="text-white 
                      text-3xl sm:text-2xl md:text-4xl lg:text-4xl 
                      font-bold w-4 leading-tight">
                        {c.name}
                      </h2>

                      <p className="text-gray-300 opacity-70 
                      text-sm sm:text-base md:text-lg w-full md:w-60">
                        {c.description}
                      </p>

                      <Link
                        to="/about"
                        className="absolute right-0 bottom-0 w-9 h-9 hover:scale-110 transition"
                      >
                        <img src={iconPlus} />
                      </Link>
                    </div>
                  ))}
              </div>
             
            </motion.div>
            </Link>

            

            
            {/* RIGHT SIDE SECTION */}
            <div className="w-full flex flex-col gap-6">

              {/* SLIDER */}
            <motion.div
  initial={{ opacity: 1, x: 0 }}
  animate={{ opacity: 1, x: 0 }}
  className="bg-gradient-to-r from-[#1a1a1a] to-[#0d0d0d] 
             h-12 sm:h-14 rounded-xl flex items-center text-white 
             font-semibold shadow-md overflow-hidden relative"
>
  <motion.div
    className="absolute flex whitespace-nowrap"
    animate={{ x: ["0%", "-50%"] }} // move left by half the total width
    transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
  >
    {/* Duplicate the text sequence for seamless looping */}
    <span className="px-12">Vision. Versatility. Impact.</span>
    <span className="px-12">Vision. Versatility. Impact.</span>
    <span className="px-12">Elevate. Empower. Evolve.</span>
    <span className="px-12">Elevate. Empower. Evolve.</span>

    <span className="px-12">Vision. Versatility. Impact.</span>
    <span className="px-12">Vision. Versatility. Impact.</span>
    <span className="px-12">Elevate. Empower. Evolve.</span>
    <span className="px-12">Elevate. Empower. Evolve.</span>
  </motion.div>
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
                    {(item.image || item.icon || item.link) && (
                      <Link to={item.link}>
                      <div className="w-full h-40 rounded-xl overflow-hidden">
                        <img
                          src={item.image || item.icon}
                          className="w-full h-full object-cover opacity-80"
                        />
                      </div>
                      </Link>
                    )}

                    <Link to={item.link} className="flex justify-between items-center">
                      <div>
                        <h4 className="text-white/70 text-sm">
                          {item.subtitle}
                        </h4>

                        <h1 className="text-xl font-bold text-white">
                          {item.title}
                        </h1>
                      </div>

                      <Link to={item.link} className="w-12 cursor-pointer">
                        <img
                          src="/images/Next Icon.png"
                          className="w-9 h-9 hover:scale-110 transition"
                        />
                      </Link>
                    </Link>
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