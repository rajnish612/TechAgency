"use client";
import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";

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
    { name: "Team", id: "team" },
    { name: "About Us", id: "about" },
    { name: "Developer", id: "developer" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-lg"
          : "bg-white/80 backdrop-blur-md border-b border-slate-100"
      }`}
    >
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500"></div>

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center relative">
        {/* Logo */}
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-teal-500/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 scale-110"></div>

          <div className="relative">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300 inline-block">
              TechFlow Solutions
            </span>

            {/* Animated dots */}
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 animate-pulse"></div>
            <div className="absolute -bottom-1 -left-1 w-1 h-1 bg-cyan-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse delay-200"></div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8 items-center">
          {navigationLinks.map((link, index) => (
            <li key={link.id} className="relative group">
              <button
                onClick={() => handleScroll(link.id)}
                className={`relative px-4 py-2 text-sm font-medium uppercase tracking-wider transition-all duration-300 ${
                  activeSection === link.id
                    ? "text-blue-600"
                    : "text-slate-600 hover:text-blue-600"
                }`}
              >
                {/* Hover background */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 scale-95 group-hover:scale-100"></div>

                <span className="relative z-10">{link.name}</span>

                {/* Animated underline */}
                <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-blue-500 to-cyan-500 group-hover:w-full transition-all duration-300 rounded-full"></div>

                {/* Active state indicator */}
                {activeSection === link.id && (
                  <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
                )}
              </button>
            </li>
          ))}

          {/* CTA Button */}
          <li>
            <button
              onClick={() => handleScroll("contact")}
              className="relative px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-full overflow-hidden group transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10 flex items-center gap-2">
                <HiSparkles className="w-4 h-4" />
                <span>Get Started</span>
              </div>
              <div className="absolute inset-0 bg-white/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500"></div>
            </button>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden relative p-2 text-slate-600 hover:text-blue-600 transition-colors duration-300 group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
          <div className="relative z-10">
            {isMobileMenuOpen ? (
              <FaTimes className="w-6 h-6 transition-transform duration-300 rotate-0 group-hover:rotate-90" />
            ) : (
              <FaBars className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
            )}
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-500 overflow-hidden ${
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white/95 backdrop-blur-xl border-t border-slate-100">
          <div className="px-6 py-4 space-y-4">
            {navigationLinks.map((link, index) => (
              <button
                key={link.id}
                onClick={() => handleScroll(link.id)}
                className="block w-full text-left px-4 py-3 text-slate-600 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 rounded-lg transition-all duration-300 font-medium uppercase tracking-wider"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {link.name}
              </button>
            ))}

            <button
              onClick={() => handleScroll("contact")}
              className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 flex items-center justify-center gap-2"
            >
              <HiSparkles className="w-4 h-4" />
              <span>Get Started</span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom gradient line */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-[1px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
    </nav>
  );
};

export default Navbar;