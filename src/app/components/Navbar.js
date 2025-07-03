import React from "react";

const Navbar = () => {
  return (
    <nav className="border-b shadow-2xl border-[#363636] border-solid flex justify-between items-center p-4">
    <span className="font-bold text-white text-base md:text-lg tracking-wider shadow-xl px-6 py-2 rounded-full bg-gradient-to-r from-[#1f1f1f] via-[#444444] to-[#1f1f1f] border border-white/10 backdrop-blur-sm transition-all duration-300 hover:scale-105">
  Fashion Agency
</span>

      <ul className="md:flex hidden mr-16  space-x-20">
        <li>
          <a href="#">Models</a>
        </li>
        <li>
          <a href="#">About us</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
