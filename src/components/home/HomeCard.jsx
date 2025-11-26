import React from "react";
import { CiCamera } from "react-icons/ci";
import { FaDribbble, FaTwitter } from "react-icons/fa";
import { PiPencilCircleLight } from "react-icons/pi";
import { Link, Links } from "react-router-dom";

const HomeCard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 p-6">

      {/* Card 1 */}
      <div className="col-span-1 bg-linear-to-r from-[#1a1a1a] to-[#0d0d0d] backdrop-blur-xl
      p-6 rounded-2xl shadow-xl text-white flex flex-col gap-4">

        <div className="w-full h-32 rounded-xl overflow-hidden flex items-center justify-center bg-black/20">
          <img src="/gfonts.png" alt="" />
        </div>

        <div className="flex justify-between items-center w-full">
          <div className="flex flex-col gap-1">
            <p className="text-gray-400 text-sm">Blog</p>
            <p className="text-xl font-semibold">Gfonts</p>
          </div>

          <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition">
            <img
              src="/icon.svg"
              alt=""
              className="w-6 h-6 opacity-50 hover:opacity-100 transition duration-300"
            />
          </button>
        </div>
      </div>

      {/* Middle Card */}
      <div className="col-span-1 sm:col-span-2 lg:col-span-3 bg-linear-to-r from-[#1a1a1a] to-[#0d0d0d] backdrop-blur-xl
      p-6 rounded-2xl justify-center shadow-xl text-white flex flex-col gap-8">

        <div className="flex justify-center gap-10 flex-wrap">
          <CiCamera className="w-10 h-10" /> 
          <PiPencilCircleLight className="w-10 h-10" />
          <CiCamera className="w-10 h-10" />
          <CiCamera className="w-10 h-10" />
        </div>

        <div className="flex justify-between items-center w-full">
          <div className="flex flex-col gap-1">
            <p className="text-gray-400 text-sm">specialization</p>
            <p className="text-xl font-semibold">Services offering</p>
          </div>

          <Link to='/landing' className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition">
            <img
              src="/icon.svg"
              alt=""
              className="w-6 h-6 opacity-50 hover:opacity-100 transition duration-300"
            />
          </Link>
        </div>
      </div>

      {/* Card 3 */}
      <div className="col-span-1 bg-linear-to-r from-[#1a1a1a] to-[#0d0d0d] backdrop-blur-xl
      p-6 rounded-2xl shadow-xl text-white flex flex-col gap-4">

        <div className="w-full h-32 rounded-xl overflow-hidden flex items-center justify-center gap-6 bg-black/20">
          <FaDribbble className="w-10 h-10" />
          <FaTwitter className="w-10 h-10" />
        </div>

        <div className="flex justify-between items-center w-full">
          <div className="flex flex-col gap-1">
            <p className="text-gray-400 text-sm">Stay with Me</p>
            <p className="text-xl font-semibold">Profiles</p>
          </div>

          <Link  to="/contact" className=" cursor-pointer w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition">
            <img
              src="/icon.svg"
              alt=""
              className="w-6 h-6 opacity-50 hover:opacity-100 transition duration-300"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
