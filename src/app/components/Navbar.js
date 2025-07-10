"use client";
import React from "react";

const Navbar = () => {
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <nav className="border-b border-[#2e2e2e] shadow-xl backdrop-blur-md bg-[#111111]/70 sticky top-0 z-50 px-6 py-4 flex justify-between items-center">
      {/* Logo */}
      {/* <span className="text-white font-extrabold text-xl tracking-widest px-6 py-2 rounded-full bg-gradient-to-r from-[#1f1f1f] via-[#444444] to-[#1f1f1f] border border-white/10 shadow-lg hover:shadow-[0_0_20px_#ffffff33] transition-all duration-300 hover:scale-105 hover:text-white backdrop-blur-md"> */}
      <span className="bg-gradient-to-r from-indigo-400 via-purple-500 to-blue-400 bg-clip-text text-transparent animate-gradient">
        Fashion Agency
      </span>
      {/* </span> */}

      {/* Navigation Links */}
      <ul className="hidden md:flex space-x-12 mr-10">
        {[
          { name: "Models", id: "models" },
          { name: "About Us", id: "about" },
          { name: "Contact", id: "contact" },
        ].map((link) => (
          <li key={link}>
            <button
              onClick={() => handleScroll(link.id)}
              className="text-gray-300 cursor-pointer font-medium text-sm uppercase tracking-wide relative group"
            >
              {link.name}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white group-hover:w-full transition-all duration-300"></span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
