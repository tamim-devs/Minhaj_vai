import React from "react";
import sign from "/public/images/CredentialsImage.png"

const MyApproach = () => {
  return (
    <div className="min-h-screen bg-[#0c0c0c] text-white pt-24 pb-16 px-5 md:px-10 lg:px-24">

      {/* Title */}
      <h1 className="text-center text-4xl md:text-5xl font-bold tracking-wide mb-14">
        ✦ MY APPROACH  ✦
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* LEFT BIG CARD */}
        <div className="bg-[#121212] border border-[#1f1f1f] rounded-3xl p-8 h-full">
          <ul className="space-y-10">
            <li className="flex items-center gap-4">
              <div className="w-10 h-10 bg-[#1b1b1b] border border-[#2a2a2a] rounded-full flex items-center justify-center"><img src="./images/PHOTOGRAPHY.png" /></div>
              <span className="text-gray-300 text-sm tracking-widest">PHOTOGRAPHY</span>
            </li>

            <li className="flex items-center gap-4">
              <div className="w-10 h-10 bg-[#1b1b1b] border border-[#2a2a2a] rounded-full flex items-center justify-center"><img src="/images/WEB DESIGNING.png" /></div>
              <span className="text-gray-300 text-sm tracking-widest">WEB DESIGNING</span>
            </li>

            <li className="flex items-center gap-4">
              <div className="w-10 h-10 bg-[#1b1b1b] border border-[#2a2a2a] rounded-full flex items-center justify-center"><img src="/images/BRANDING.png" alt="" /></div>
              <span className="text-gray-300 text-sm tracking-widest">BRANDING</span>
            </li>

            <li className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-sm "><img src="/images/DEVELOPMENT.png"/></div>
              <span className="text-gray-300 text-sm tracking-widest">DEVELOPMENT</span>
            </li>
          </ul>
        </div>

        {/* RIGHT SIDE */}
        <div className="lg:col-span-2 space-y-10">

          {/* 2×2 GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#131313] border border-[#222] rounded-2xl p-6">
              <h2 className="text-sm text-gray-300 mb-3 tracking-widest">ENVISION</h2>
              <p className="text-gray-400 text-sm">
                I’m heavily involved in the conceptualization, innovation and optimization of emerging 
                opportunities. My process begins with envisioning what’s possible, pushing boundaries, 
                thinking big, and delivering long-term value. 
              </p>
            </div>

            <div className="bg-[#131313] border border-[#222] rounded-2xl p-6">
              <h2 className="text-sm text-gray-300 mb-3 tracking-widest"> COLLABORATE </h2>
              <p className="text-gray-400 text-sm">
                I believe that collaboration is the engine of innovation. I partner with visionary founders and 
                high-performing teams across industries, bringing synergy between investment capital, 
                domain insight and operational mentorship.              </p>
            </div>

            <div className="bg-[#131313] border border-[#222] rounded-2xl p-6">
              <h2 className="text-sm text-gray-300 mb-3 tracking-widest">IMPLEMENT</h2>
              <p className="text-gray-400 text-sm">
                Beyond vision, I thrive on execution and scale. My ability to translate strategy into sustained 
                growth distinguishes me as a thinker who does and an investor who drives results.               </p>
            </div>

            <div className="bg-[#131313] border border-[#222] rounded-2xl p-6">
              <h2 className="text-sm text-gray-300 mb-3 tracking-widest">EVOLVE</h2>
              <p className="text-gray-400 text-sm">
                The world changes fast  and so must we. I continuously adapt, learn, and refine my 
                perspective to stay ahead of global shifts. By embracing emerging technologies, market 
                trends, and human insight, I ensure every venture remains resilient, relevant, and 
                future-ready.               </p>
            </div>
          </div>

         
        </div>

      </div>
    </div>
  );
};

export default MyApproach;