import React from 'react'

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-black text-white p-6 grid grid-cols-1 md:grid-cols-3 gap-6">

      {/* Profile Card */}
      <div className="bg-[#111] rounded-2xl p-6 flex flex-col items-start">
        <img
          src="/public/images/icon.svg"
          alt="Profile"
          className="w-24 h-24 rounded-xl mb-4"
        />
        <p className="text-gray-400 text-sm">A WEB DESIGNER</p>
        <h1 className="text-2xl font-bold">David Henderson.</h1>
        <p className="text-gray-400 mt-2 text-sm">
          I am a Web Designer based in San Francisco.
        </p>
      </div>

      {/* Credentials */}
      <div className="bg-[#111] rounded-2xl p-6">
        <h2 className="text-lg font-semibold mb-2">Credentials</h2>
        <div className="w-20 h-10 bg-gray-600 rounded-md"></div>
      </div>

      {/* Projects */}
      <div className="bg-[#111] rounded-2xl p-6">
        <h2 className="text-lg font-semibold mb-2">Projects</h2>
        <div className="w-full h-24 bg-gray-500 rounded-md"></div>
      </div>

      {/* GFonts */}
      <div className="bg-[#111] rounded-2xl p-6">
        <h2 className="text-lg font-semibold mb-2">GFonts</h2>
        <div className="w-16 h-16 bg-gray-600 rounded-lg"></div>
      </div>

      {/* Services */}
      <div className="bg-[#111] rounded-2xl p-6">
        <h2 className="text-lg font-semibold mb-2">Services Offering</h2>
        <div className="grid grid-cols-3 gap-4 mt-4">
          <div className="w-10 h-10 bg-gray-500 rounded-lg"></div>
          <div className="w-10 h-10 bg-gray-500 rounded-lg"></div>
          <div className="w-10 h-10 bg-gray-500 rounded-lg"></div>
        </div>
      </div>

      {/* Profiles */}
      <div className="bg-[#111] rounded-2xl p-6">
        <h2 className="text-lg font-semibold mb-2">Profiles</h2>
        <div className="flex gap-4 mt-4">
          <div className="w-10 h-10 bg-gray-600 rounded-full"></div>
          <div className="w-10 h-10 bg-gray-600 rounded-full"></div>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-[#111] rounded-2xl p-6 text-center">
        <h1 className="text-3xl font-bold">07</h1>
        <p className="text-gray-400 text-sm">Years Experience</p>
      </div>

      <div className="bg-[#111] rounded-2xl p-6 text-center">
        <h1 className="text-3xl font-bold">+125</h1>
        <p className="text-gray-400 text-sm">Clients Worldwide</p>
      </div>

      <div className="bg-[#111] rounded-2xl p-6 text-center">
        <h1 className="text-3xl font-bold">+210</h1>
        <p className="text-gray-400 text-sm">Total Projects</p>
      </div>

    </div>
  )
}