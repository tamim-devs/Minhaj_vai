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
          <img src="/images/Blog.png" alt="" className="w-full h-full object-cover"/>
        </div>

        <div className="flex justify-between items-center w-full">
          <div className="flex flex-col gap-1">
            <p className="text-gray-400 text-sm">BLOG</p>
            <p className="text-xl font-semibold text-white">My Insights</p>
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
        px-6 py-6 flex flex-col item gap-8 justify-center
        w-full md:flex-1" to='/landing'>
      <div>
        <div className="flex items-center mb-10 justify-center gap-6 text-white flex-wrap">
          <div className="w-20 h-20">
            <img src="/images/COLLABORATE.png" />
          </div>
          <div className="w-20 h-20">
            <img src="/images/ENVISION.png" />
          </div>
          <div className="w-20 h-20">
            <img src="/images/EVOLVE.png" />
          </div>
          <div className="w-20 h-20">
            <img src="/images/IMPLEMENT.png" />
          </div>
          
        </div>

        <div className="flex justify-between items-center w-full">
          <div className="flex flex-col gap-1">
            <p className="text-gray-400 text-sm">SPECIALIZATION
</p>
            <p className="text-xl font-semibold text-white">My Approach</p>
          </div>

          <Link to="/landing" className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition">
            <img src="/images/icon.svg" className="w-6 h-6 opacity-50 hover:opacity-100"/>
          </Link>
        </div>
      </div>
      </Link>


      {/* Card 3 */}
      <Link to='/contact' className="  bg-linear-to-r from-[#1a1a1a] to-[#0d0d0d]
        rounded-2xl shadow-lg border-t border-r-white border-gray-600
        px-6 py-6 flex flex-col gap-4 justify-between
        w-full md:w-[300px]">
         <div className="
        
        flex flex-col gap-4 
        w-full md:w-[300px]
      ">
        <div className="w-full h-32 rounded-xl overflow-hidden flex items-center justify-center gap-6 bg-black/20">
          <FaDribbble className="w-10 h-10 text-white"/>
          <FaTwitter className="w-10 h-10 text-white"/>
        </div>

        <div className="flex justify-between items-center w-full ">
          <div className="flex flex-col gap-1">
            <p className="text-gray-400 text-sm">CONNECT WITH ME</p>
            <p className="text-xl font-semibold text-white">My Socials</p>
          </div>

          <Link to="/contact" className="w-10 h-10 flex items-center justify-center rounded-full mr-20 hover:bg-white/10 transition">
            <img src="/images/icon.svg" className="w-6 h-6 opacity-50 hover:opacity-100"/>
          </Link>
        </div>
      </div>
      </Link>
   

    </div>
  );
};

export default HomeCard;
