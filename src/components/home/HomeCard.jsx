import React from "react";
import { CiCamera } from "react-icons/ci";
import { FaDribbble, FaTwitter } from "react-icons/fa";
import { PiPencilCircleLight } from "react-icons/pi";
import { Link } from "react-router-dom";

const HomeCard = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6 w-full">

      {/* Card 1 */}
      <Link to='/blog'>
      <div className="
        bg-gradient-to-r from-[#1a1a1a] to-[#0d0d0d]
        rounded-2xl shadow-lg border-t border-gray-600
        px-6 py-6 flex flex-col gap-4 justify-between
        w-full md:w-[300px]
      ">
        <div className="w-full h-32 rounded-xl overflow-hidden flex items-center justify-center bg-black">
          <img src="/images/gfonts.png" alt="" className="w-full h-full object-cover"/>
        </div>

        <div className="flex justify-between items-center w-full">
          <div className="flex flex-col gap-1">
            <p className="text-gray-400 text-sm">Blog</p>
            <p className="text-xl font-semibold text-white">Gfonts</p>
          </div>

          <Link to='/blog' className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition">
            <img src="/images/icon.svg" alt="" className="w-6 h-6 opacity-50 hover:opacity-100"/>
          </Link>
        </div>
      </div>
      </Link>
      


      {/* Middle Card */}
      <Link className="  bg-gradient-to-r from-[#1a1a1a] to-[#0d0d0d]
        rounded-2xl shadow-lg border-t border-gray-600
        px-6 py-6 flex flex-col gap-6 justify-center
        w-full md:flex-1" to='/landing'>
      <div>
        <div className="flex  justify-center gap-6 text-white flex-wrap">
          <CiCamera className="w-20 h-20"/>
          <PiPencilCircleLight className="w-20 h-20"/>
          <CiCamera className="w-20 h-20"/>
          <CiCamera className="w-20 h-20"/>
        </div>

        <div className="flex justify-between items-center w-full">
          <div className="flex flex-col gap-1">
            <p className="text-gray-400 text-sm">specialization</p>
            <p className="text-xl font-semibold text-white">Services offering</p>
          </div>

          <Link to="/landing" className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition">
            <img src="/images/icon.svg" className="w-6 h-6 opacity-50 hover:opacity-100"/>
          </Link>
        </div>
      </div>
      </Link>


      {/* Card 3 */}
      <div className="
        bg-gradient-to-r from-[#1a1a1a] to-[#0d0d0d]
        rounded-2xl shadow-lg border-t border-gray-600
        px-6 py-6 flex flex-col gap-4 justify-between
        w-full md:w-[300px]
      ">
        <div className="w-full h-32 rounded-xl overflow-hidden flex items-center justify-center gap-6 bg-black/20">
          <FaDribbble className="w-10 h-10 text-white"/>
          <FaTwitter className="w-10 h-10 text-white"/>
        </div>

        <div className="flex justify-between items-center w-full">
          <div className="flex flex-col gap-1">
            <p className="text-gray-400 text-sm">Stay with Me</p>
            <p className="text-xl font-semibold text-white">Profiles</p>
          </div>

          <Link to="/contact" className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition">
            <img src="/images/icon.svg" className="w-6 h-6 opacity-50 hover:opacity-100"/>
          </Link>
        </div>
      </div>

    </div>
  );
};

export default HomeCard;
