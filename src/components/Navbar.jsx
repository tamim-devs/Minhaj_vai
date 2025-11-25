import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { navLinks } from "../constant/index";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav>
      <Link to="/">
        <img src="/images/logo.svg" className="w-28" alt="logo" />
      </Link>

      <ul className="hidden md:flex gap-10 text-gray-300">
        {navLinks.map((item) => (
          <li key={item.id}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? "text-white font-semibold"
                  : "hover:text-white transition"
              }
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>

      <button className="hidden md:block px-6 py-2 bg-white/20 text-white rounded-xl hover:bg-white hover:text-black transition">
        Let’s Talk
      </button>

      <button
        onClick={() => setOpen(!open)}
        className="text-white text-3xl md:hidden"
      >
        ☰
      </button>

      {open && (
        <div className="absolute top-20 left-0 w-full bg-black flex flex-col items-center gap-6 p-6 text-white md:hidden">
          {navLinks.map((item) => (
            <NavLink
              key={item.id}
              to={item.path}
              className="text-gray-300 hover:text-white"
            >
              {item.label}
            </NavLink>
          ))}

          <button className="px-6 py-2 bg-white/20 text-white rounded-xl hover:bg-white hover:text-black transition">
            Let’s Talk
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
