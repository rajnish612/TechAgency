"use client";
import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { FaRocket, FaPlay } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";

const HeroSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen mt-16 bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 sm:top-20 left-5 sm:left-20 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-20 w-40 sm:w-64 md:w-80 h-40 sm:h-64 md:h-80 bg-gradient-to-r from-indigo-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-gradient-to-r from-cyan-400/20 to-teal-400/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 flex flex-col lg:flex-row justify-center lg:justify-between items-center min-h-screen px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-8 lg:py-0"
      >
        <div className="flex flex-col space-y-6 sm:space-y-8 w-full lg:w-1/2 text-center lg:text-left order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 sm:gap-3 bg-white/80 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-blue-200 shadow-lg shadow-blue-100/50 self-center lg:self-start"
          >
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <span className="text-slate-800 text-xs sm:text-sm font-bold tracking-widest">
              INNOVATIVE TECH SOLUTIONS
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex items-center justify-center lg:justify-start gap-2 sm:gap-3"
          >
            <FaRocket className="text-blue-500 text-lg sm:text-xl animate-pulse" />
            <div className="w-16 sm:w-24 h-[2px] bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-md mx-auto lg:mx-0"
          >
            Crafting digital experiences that drive growth and innovation for modern businesses.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-full flex items-center justify-center gap-2 sm:gap-3 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
            >
              <span className="text-sm sm:text-base">Get Started</span>
              <FaRocket className="group-hover:translate-x-1 transition-transform duration-300 text-sm sm:text-base" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group px-6 sm:px-8 py-3 sm:py-4 bg-white/80 backdrop-blur-sm border border-slate-200 text-slate-800 font-semibold rounded-full flex items-center justify-center gap-2 sm:gap-3 hover:bg-white transition-all duration-300 shadow-lg"
            >
              <FaPlay className="text-sm" />
              <span className="text-sm sm:text-base">Watch Demo</span>
            </motion.button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="relative w-full lg:w-1/2 max-w-2xl mb-8 lg:mb-0 lg:mt-0 order-1 lg:order-2"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl sm:rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent z-10"></div>

            <div className="absolute inset-0 rounded-2xl sm:rounded-3xl border border-white/30 group-hover:border-blue-500/50 transition-colors duration-500 shadow-2xl"></div>

            <div
              style={{
                background: `url("https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="min-h-[400px] sm:min-h-[500px] md:min-h-[600px] flex flex-col justify-end px-4 sm:px-6 md:px-8 pb-6 sm:pb-8 md:pb-12 rounded-2xl sm:rounded-3xl transition-transform duration-500 group-hover:scale-[1.02]"
            >
              <div className="relative z-20 space-y-4 sm:space-y-6">
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black leading-tight tracking-tight text-white"
                >
                  <span className="bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent">
                    Transform Your
                  </span>
                  <br />
                  <span className="text-white">Digital Future</span>
                </motion.h1>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="text-gray-200 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-2xl"
                >
                  {"We specialize in creating powerful digital solutions that drive business growth through innovative web development, mobile applications, and cloud-based systems"
                    .split(" ")
                    .map((word, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.5,
                          delay: 0.8 + index * 0.05,
                        }}
                        className="inline-block mr-2"
                      >
                        {word}
                      </motion.span>
                    ))}
                </motion.div>

                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleScroll("team")}
                  className="group inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:border-white/40 text-white font-semibold rounded-full transition-all duration-300"
                >
                  <span className="text-sm sm:text-base">Explore Team</span>
                  <HiSparkles className="group-hover:translate-x-1 transition-transform duration-300 text-sm sm:text-base" />

                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroSection;