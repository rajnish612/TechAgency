"use client";
import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
      setIsMobileMenuOpen(false);
    }
  };

  const navigationLinks = [
    { name: "Models", id: "models" },
    { name: "About Us", id: "about" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-white/10 shadow-2xl"
          : "bg-[#111111]/70 backdrop-blur-md border-b border-[#2e2e2e]"
      }`}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-blue-500/5 opacity-0 hover:opacity-100 transition-opacity duration-700"></div>

      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-pink-500/50 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center relative">
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-blue-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 scale-110"></div>

          <div className="relative">
            <span className="text-2xl font-bold bg-gradient-to-r from-indigo-400 via-purple-500 to-blue-400 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300 inline-block">
              Fashion Agency
            </span>

            <div className="absolute -top-1 -right-1 w-2 h-2 bg-pink-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 animate-pulse"></div>
            <div className="absolute -bottom-1 -left-1 w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse delay-200"></div>
          </div>
        </div>

        <ul className="hidden md:flex space-x-8 items-center">
          {navigationLinks.map((link, index) => (
            <li key={link.id} className="relative group">
              <button
                onClick={() => handleScroll(link.id)}
                className={`relative px-4 py-2 text-sm font-medium uppercase tracking-wider transition-all duration-300 ${
                  activeSection === link.id
                    ? "text-white"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 scale-95 group-hover:scale-100"></div>

                <span className="relative z-10">{link.name}</span>

                <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-pink-500 to-purple-500 group-hover:w-full transition-all duration-300 rounded-full"></div>

                {activeSection === link.id && (
                  <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"></div>
                )}

                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-lg opacity-0 group-hover:opacity-50 transition-all duration-300 blur-sm"></div>
              </button>
            </li>
          ))}

          <li>
            <button
              onClick={() => handleScroll("contact")}
              className="relative px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-full overflow-hidden group transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/25 hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 bg-white/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500"></div>
            </button>
          </li>
        </ul>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden relative p-2 text-gray-300 hover:text-white transition-colors duration-300 group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
          <div className="relative z-10">
            {isMobileMenuOpen ? (
              <FaTimes className="w-6 h-6 transition-transform duration-300 rotate-0 group-hover:rotate-90" />
            ) : (
              <FaBars className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
            )}
          </div>
        </button>
      </div>

      <div
        className={`md:hidden transition-all duration-500 overflow-hidden ${
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-[#0a0a0a]/95 backdrop-blur-xl border-t border-white/10">
          <div className="px-6 py-4 space-y-4">
            {navigationLinks.map((link, index) => (
              <button
                key={link.id}
                onClick={() => handleScroll(link.id)}
                className="block w-full text-left px-4 py-3 text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-pink-500/10 hover:to-purple-500/10 rounded-lg transition-all duration-300 font-medium uppercase tracking-wider"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {link.name}
              </button>
            ))}

            <button
              onClick={() => handleScroll("contact")}
              className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/25"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-[1px] bg-gradient-to-r from-transparent via-pink-500/30 to-transparent"></div>
    </nav>
  );
};

export default Navbar;
