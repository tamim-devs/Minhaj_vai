import React from "react";

const OthersCard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">

      {/* CARD 1 */}
      <div className="bg-white/10 border border-white/20 backdrop-blur-xl p-6 rounded-2xl 
                      hover:bg-white/20 transition-all duration-300 cursor-pointer text-center">
        <h3 className="text-xl font-bold text-white">Profiles</h3>
        <p className="text-white/60 mt-1">BG Sign · Portfolio</p>
      </div>

      {/* CARD 2 */}
      <div className="bg-white/10 border border-white/20 backdrop-blur-xl p-6 rounded-2xl 
                      hover:bg-white/20 transition-all duration-300 cursor-pointer text-center">
        <h3 className="text-xl font-bold text-white">More About Me</h3>
        <p className="text-white/60 mt-1">Story · Journey</p>
      </div>

      {/* CARD 3 */}
      <div className="bg-white/10 border border-white/20 backdrop-blur-xl p-6 rounded-2xl 
                      hover:bg-white/20 transition-all duration-300 cursor-pointer text-center">
        <h3 className="text-xl font-bold text-white">Credentials</h3>
        <p className="text-white/60 mt-1">Let's Work Together</p>
      </div>

    </div>
  );
};

export default OthersCard;
