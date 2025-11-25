import React from "react";

const OthersCard = () => {
  return (
    <div className="
      flex flex-col gap-6 w-full 
      md:flex-row md:items-start md:gap-10
    ">
      
      {/* CARD 1 */}
      <div className="
        bg-white/10 border border-white/20 backdrop-blur-xl p-6 rounded-2xl 
        hover:bg-white/20 transition-all duration-300 cursor-pointer text-center
        w-full md:w-[300px]
      ">
        <h3 className="text-xl font-bold text-white">Profiles</h3>
        <p className="text-white/60 mt-1">BG Sign · Portfolio</p>
      </div>

      {/* CARD 2 – 1000PX ONLY ON DESKTOP */}
      <div className="
        bg-white/10 border border-white/20 backdrop-blur-xl p-6 rounded-2xl 
        hover:bg-white/20 transition-all duration-300 cursor-pointer text-center
        w-full md:w-[1000px]
      ">
        <h3 className="text-xl font-bold text-white">More About Me</h3>
        <p className="text-white/60 mt-1">Story · Journey</p>
      </div>

      {/* CARD 3 */}
      <div className="
        bg-white/10 border border-white/20 backdrop-blur-xl p-6 rounded-2xl 
        hover:bg-white/20 transition-all duration-300 cursor-pointer text-center
        w-full md:w-[300px]
      ">
        <h3 className="text-xl font-bold text-white">Credentials</h3>
        <p className="text-white/60 mt-1">Let's Work Together</p>
      </div>

    </div>
  );
};
