"use client";
import React from "react";
import { motion } from "motion/react";
import { IoIosFlower } from "react-icons/io";
const HeroSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      animate={{ opacity: 1, y: 0 }}
      className="flex justify-center space-y-6 flex-wrap space-x-11 items-center w-full mt-7 p-4"
    >
      <div className=" flex flex-col space-y-4">
        <h2 className="text-vertical text-white  text-sm font-bold tracking-widest whitespace-nowrap">
          PREMIUM MODEL AGENCY
        </h2>
        <div className="flex items-center">
          <IoIosFlower />
          ---------
        </div>
        <span className="text-gray-300 text-xs tracking-wide">
          Elevating elegance and redefining beauty, one model at a time.
        </span>

        <div className="flex space-x-2 overflow-hidden shadow-lg">
          <button className="px-6 py-2 shadow-lg bg-black">Discover</button>
          <button className="px-6 py-2 shadow-lg bg-white text-black">
            Join Us
          </button>
        </div>
      </div>
      <div className="layout-content-container rounded-lg overflow-hidden flex flex-col  w-[960px]  ">
        <div className="@container">
          {/* <div className="@[480px]:p-4"> */}
          <div
            style={{
              background: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuBnSemsDYI2T7YWnMdgQo1iOEz1ZnTegVSokVm39HPaKEEPt__kW__ViK_z4avhUOaKMvgtK1B3_LBMeVFi1eqgNVM7v2CdFjZlkfouMKXvB-koAmBQ_6WAvDLWi_fwC36GlL8eE6S2DF9xOoGGFP3JA1iI4_Bh9ZVCOseO9-3W1-wQOa91IzoxtHZoXZoIl33WKGtT8wFlGkD40bGGplg697Lokp9RwfQJ3qvI-N0YWyEaNQkDI3Ssya0XBSXus3ZL-8BvBPX0hlgd")`,

              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center ",
            }}
            className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-start justify-end px-4 pb-10 @[480px]:px-10"
          >
            <div className="flex flex-col gap-2 text-left">
              <motion.h1
                initial={{ opacity: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                animate={{ opacity: 1 }}
                className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]"
              >
                Elevate Your Brand with Top Talent
              </motion.h1>
              <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                {"We represent a diverse roster of exceptional models, connecting them with leading brands and designers to create impactfulcampaigns and runway shows"
                  .split(" ")
                  .map((text, index) => {
                    return (
                      <>
                        <motion.span
                          initial={{ opacity: 0, y: -20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          key={index}
                          className="inline-block text-white font-normal"
                        >
                          {text}
                        </motion.span>
                        {"  "}
                      </>
                    );
                  })}
              </h2>
            </div>
            <motion.button
              initial={{ opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              animate={{ opacity: 1 }}
              className="flex min-w-[84px] hover:scale-[1.1] transition-transform max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-black text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]"
            >
              <span className="truncate">Explore Models</span>
            </motion.button>
          </div>
          {/* </div> */}
        </div>
      </div>
    </motion.div>
  );
};

export default HeroSection;
