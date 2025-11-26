import React from "react";

const OthersCard = () => {
  return (
    <div
      className="
        flex flex-col gap-6 w-full
        md:flex-row md:gap-8 md:items-stretch
      "
    >
      {/* ========== CARD 1 (Profiles) ========== */}
      <div
        className="
          bg-white/10 border border-white/20 backdrop-blur-xl
          p-6 rounded-2xl shadow-xl relative overflow-hidden
          w-full md:w-[300px]
        "
      >
        <img
          src="/images/bg1.png"
          className="absolute inset-0 w-full h-full object-cover opacity-10"
        />

        <div className="relative z-10 flex flex-col justify-between h-full">
          <div>
            <h4 className="text-white/70 text-sm">Stay with me</h4>
            <h1 className="text-3xl font-bold text-white">Profiles</h1>
          </div>

          <button className="mt-6 bg-white/20 p-3 rounded-full hover:bg-white/30 transition">
            <img src="/images/icon.svg" alt="btn" />
          </button>
        </div>
      </div>

      {/* ========== CARD 2 (Let’s work together — MIDDLE) ========== */}
      <div
        className="
          bg-white/10 border border-white/20 backdrop-blur-xl
          p-6 rounded-2xl shadow-xl relative overflow-hidden
          w-full md:flex-1
        "
      >
        <img
          src="/images/bg1.png"
          className="absolute inset-0 w-full h-full object-cover opacity-10"
        />
        <img
          src="/images/icon2.png"
          className="absolute top-4 right-4 w-10 opacity-90"
        />

        <div className="relative z-10">
          <h1 className="text-5xl font-bold leading-tight text-white">
            Let’s <br /> work <span className="text-purple-400">together.</span>
          </h1>

          <button className="mt-6 bg-white/20 p-3 rounded-full hover:bg-white/30 transition">
            <img src="/images/icon.svg" alt="btn" />
          </button>
        </div>
      </div>

      {/* ========== CARD 3 (Credentials) ========== */}
      <div
        className="
          bg-white/10 border border-white/20 backdrop-blur-xl
          p-6 rounded-2xl shadow-xl relative overflow-hidden
          w-full md:w-[300px]
        "
      >
        <img
          src="/images/bg1.png"
          className="absolute inset-0 w-full h-full object-cover opacity-10"
        />

        <img
          src="/images/sign.png"
          className="absolute top-4 right-4 w-20 opacity-80"
        />

        <div className="relative z-10 flex flex-col justify-between h-full">
          <div>
            <h4 className="text-white/70 text-sm capitalize">More about me</h4>
            <h1 className="text-3xl font-bold text-white">Credentials</h1>
          </div>

          <button className="mt-6 bg-white/20 p-3 rounded-full hover:bg-white/30 transition">
            <img src="/images/icon.svg" alt="btn" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default OthersCard;
