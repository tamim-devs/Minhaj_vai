import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { navLinks } from "../constant/index";
import ContainerWrapper from "../components/ContainerWrapper";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <ContainerWrapper>
    <nav className="w-full bg-black px-6 py-4 flex 
    justify-center items-center  relative z-50">
      <Link to="/">
        <img src="/images/logo.svg" className="w-28" alt="logo" />
      </Link>

      {/* Desktop menu */}
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

      <Link
        to="/contact"
        className="hidden md:block px-6 py-2 bg-white/20 text-white rounded-xl hover:bg-white hover:text-black transition"
      >
        Let’s Talk
      </Link>

      {/* Mobile button */}
      <button
        onClick={() => setOpen(!open)}
        className="text-white text-3xl md:hidden"
      >
        ☰
      </button>

      {/* Mobile menu */}
      <div
        className={`absolute top-full left-0 w-full bg-black text-white flex flex-col items-center gap-6 py-6 transition-all duration-300 md:hidden 
        ${open ? "opacity-100 visible" : "opacity-0 invisible"}`}
      >
        {navLinks.map((item) => (
          <NavLink
            key={item.id}
            to={item.path}
            className="text-gray-300 hover:text-white text-lg"
            onClick={() => setOpen(false)}
          >
            {item.label}
          </NavLink>
        ))}

        <Link
          to="/contact"
          className="px-6 py-2 bg-white/20 text-white rounded-xl hover:bg-white hover:text-black transition"
          onClick={() => setOpen(false)}
        >
          Let’s Talk
        </Link>
      </div>
    </nav>
    </ContainerWrapper>
  );
};

export default Navbar;
