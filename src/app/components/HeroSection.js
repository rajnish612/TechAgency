// "use client";
// import React from "react";
// import { motion } from "motion/react";
// import { IoIosFlower } from "react-icons/io";
// const HeroSection = () => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: -50 }}
//       transition={{ duration: 1, ease: "easeInOut" }}
//       animate={{ opacity: 1, y: 0 }}
//       className="flex justify-center space-y-6 flex-wrap space-x-11 items-center w-full mt-7 p-4"
//     >
//       <div className=" flex flex-col space-y-4  ">
//         <h2 className="text-vertical text-white  text-sm font-bold tracking-widest whitespace-nowrap">
//           PREMIUM MODEL AGENCY
//         </h2>
//         <div className="flex items-center">
//           <IoIosFlower />
//           ---------
//         </div>
//         <span className="text-gray-300 text-xs tracking-wide">
//           Elevating elegance and redefining beauty, one model at a time.
//         </span>

//         <div className="flex space-x-2 overflow-hidden shadow-lg">
//           <button className="px-6 py-2 shadow-lg bg-black">Discover</button>
//           <button className="px-6 py-2 shadow-lg bg-white text-black">
//             Join Us
//           </button>
//         </div>
//       </div>
//       <div className="layout-content-container rounded-lg overflow-hidden flex flex-col  w-[960px]  ">
//         <div className="@container">
//           {/* <div className="@[480px]:p-4"> */}
//           <div
//             style={{
//               background: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuBnSemsDYI2T7YWnMdgQo1iOEz1ZnTegVSokVm39HPaKEEPt__kW__ViK_z4avhUOaKMvgtK1B3_LBMeVFi1eqgNVM7v2CdFjZlkfouMKXvB-koAmBQ_6WAvDLWi_fwC36GlL8eE6S2DF9xOoGGFP3JA1iI4_Bh9ZVCOseO9-3W1-wQOa91IzoxtHZoXZoIl33WKGtT8wFlGkD40bGGplg697Lokp9RwfQJ3qvI-N0YWyEaNQkDI3Ssya0XBSXus3ZL-8BvBPX0hlgd")`,

//               backgroundRepeat: "no-repeat",
//               backgroundSize: "cover",
//               backgroundPosition: "center ",
//             }}
//             className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-start justify-end px-4 pb-10 @[480px]:px-10"
//           >
//             <div className="flex flex-col gap-2 text-left">
//               <motion.h1
//                 initial={{ opacity: 0 }}
//                 transition={{ duration: 1, delay: 0.5 }}
//                 animate={{ opacity: 1 }}
//                 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]"
//               >
//                 Elevate Your Brand with Top Talent
//               </motion.h1>
//               <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
//                 {"We represent a diverse roster of exceptional models, connecting them with leading brands and designers to create impactfulcampaigns and runway shows"
//                   .split(" ")
//                   .map((text, index) => {
//                     return (
//                       <>
//                         <motion.span
//                           initial={{ opacity: 0, y: -20 }}
//                           animate={{ opacity: 1, y: 0 }}
//                           transition={{ duration: 0.5, delay: index * 0.1 }}
//                           key={index}
//                           className="inline-block text-white font-normal"
//                         >
//                           {text}
//                         </motion.span>
//                         {"  "}
//                       </>
//                     );
//                   })}
//               </h2>
//             </div>
//             <motion.button
//               initial={{ opacity: 0 }}
//               transition={{ duration: 0.5, delay: 0.5 }}
//               animate={{ opacity: 1 }}
//               className="flex min-w-[84px] hover:scale-[1.1] transition-transform max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-black text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]"
//             >
//               <span className="truncate">Explore Models</span>
//             </motion.button>
//           </div>
//           {/* </div> */}
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default HeroSection;
"use client";
import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { IoIosFlower } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";

const HeroSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen mt-16 bg-[#1a1a1a] overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating orbs */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 flex justify-center lg:justify-between items-center min-h-screen px-4 lg:px-8 max-w-7xl mx-auto"
      >
        <div className="flex flex-col space-y-8 lg:w-1/3 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-pink-500/20 to-purple-500/20 backdrop-blur-sm px-6 py-3 rounded-full border border-pink-500/30 self-center lg:self-start"
          >
            <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
            <span className="text-white text-sm font-bold tracking-widest">
              PREMIUM MODEL AGENCY
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex items-center justify-center lg:justify-start gap-3"
          >
            <IoIosFlower className="text-pink-400 text-xl animate-pulse" />
            <div className="w-24 h-[2px] bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"></div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-gray-300 text-lg leading-relaxed max-w-md"
          >
            Elevating elegance and redefining beauty, one model at a time.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-full flex items-center gap-3 hover:shadow-lg hover:shadow-pink-500/25 transition-all duration-300"
            >
              <span>Discover</span>
              <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-full flex items-center gap-3 hover:bg-white/20 transition-all duration-300"
            >
              <span>Join Us</span>
            </motion.button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="relative lg:w-2/3 max-w-4xl mt-12 lg:mt-0"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          <div className="relative rounded-3xl overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10"></div>

            <div className="absolute inset-0 rounded-3xl border border-white/10 group-hover:border-pink-500/50 transition-colors duration-500"></div>

            <div
              style={{
                background: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuBnSemsDYI2T7YWnMdgQo1iOEz1ZnTegVSokVm39HPaKEEPt__kW__ViK_z4avhUOaKMvgtK1B3_LBMeVFi1eqgNVM7v2CdFjZlkfouMKXvB-koAmBQ_6WAvDLWi_fwC36GlL8eE6S2DF9xOoGGFP3JA1iI4_Bh9ZVCOseO9-3W1-wQOa91IzoxtHZoXZoIl33WKGtT8wFlGkD40bGGplg697Lokp9RwfQJ3qvI-N0YWyEaNQkDI3Ssya0XBSXus3ZL-8BvBPX0hlgd")`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="min-h-[600px] flex flex-col justify-end px-8 pb-12 rounded-3xl transition-transform duration-500 group-hover:scale-[1.02]"
            >
              <div className="relative z-20 space-y-6">
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="text-4xl lg:text-6xl font-black leading-tight tracking-tight text-white"
                >
                  <span className="bg-gradient-to-r from-white via-pink-200 to-white bg-clip-text text-transparent">
                    Elevate Your Brand
                  </span>
                  <br />
                  <span className="text-white">with Top Talent</span>
                </motion.h1>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="text-gray-200 text-lg lg:text-xl leading-relaxed max-w-2xl"
                >
                  {"We represent a diverse roster of exceptional models, connecting them with leading brands and designers to create impactful campaigns and runway shows"

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
                  onClick={() => handleScroll("models")}
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:border-white/40 text-white font-semibold rounded-full transition-all duration-300"
                >
                  <span>Explore Models</span>
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />

                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400"
      >
        <span className="text-sm">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
        >
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
