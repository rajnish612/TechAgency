// "use client";
// import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
// import { motion, AnimatePresence } from "motion/react";

// import { useEffect, useState } from "react";

// export const AnimatedTestimonials = ({ testimonials, autoplay = false }) => {
//   const [active, setActive] = useState(0);

//   const handleNext = () => {
//     setActive((prev) => (prev + 1) % testimonials.length);
//   };

//   const handlePrev = () => {
//     setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
//   };

//   const isActive = (index) => {
//     return index === active;
//   };

//   useEffect(() => {
//     if (autoplay) {
//       const interval = setInterval(handleNext, 5000);
//       return () => clearInterval(interval);
//     }
//   }, [autoplay]);

//   const randomRotateY = () => {
//     return Math.floor(Math.random() * 21) - 10;
//   };
//   return (
//     <div className=" max-w-sm px-4 py-20  antialiased md:max-w-5xl md:px-8 lg:px-12">
//       <div className="relative grid grid-cols-1 gap-20 md:grid-cols-2">
//         <div>
//           <div className="relative h-100 w-full">
//             <AnimatePresence>
//               {testimonials.map((testimonial, index) => (
//                 <motion.div
//                   key={testimonial.src}
//                   initial={{
//                     opacity: 0,
//                     scale: 0.9,
//                     z: -100,
//                     rotate: randomRotateY(),
//                   }}
//                   animate={{
//                     opacity: isActive(index) ? 1 : 0.7,
//                     scale: isActive(index) ? 1 : 0.95,
//                     z: isActive(index) ? 0 : -100,
//                     rotate: isActive(index) ? 0 : randomRotateY(),
//                     zIndex: isActive(index)
//                       ? 40
//                       : testimonials.length + 2 - index,
//                     y: isActive(index) ? [0, -80, 0] : 0,
//                   }}
//                   exit={{
//                     opacity: 0,
//                     scale: 0.9,
//                     z: 100,
//                     rotate: randomRotateY(),
//                   }}
//                   transition={{
//                     duration: 0.4,
//                     ease: "easeInOut",
//                   }}
//                   className="absolute inset-0 origin-bottom"
//                 >
//                   <img
//                     src={testimonial.src}
//                     alt={testimonial.name}
//                     width={500}
//                     height={500}
//                     draggable={false}
//                     className="h-full w-full rounded-3xl object-cover object-center"
//                   />
//                 </motion.div>
//               ))}
//             </AnimatePresence>
//           </div>
//         </div>
//         <div className="flex flex-col justify-between py-4">
//           <motion.div
//             key={active}
//             initial={{
//               y: 20,
//               opacity: 0,
//             }}
//             animate={{
//               y: 0,
//               opacity: 1,
//             }}
//             exit={{
//               y: -20,
//               opacity: 0,
//             }}
//             transition={{
//               duration: 0.2,
//               ease: "easeInOut",
//             }}
//           >
//             <h3 className="text-2xl font-bold text-black dark:text-white">
//               {testimonials[active].name}
//             </h3>
//             <p className="text-sm text-gray-500 dark:text-neutral-500">
//               {testimonials[active].designation}
//             </p>
//             <motion.p className="mt-8 text-lg text-gray-500 dark:text-neutral-300">
//               {testimonials[active].quote.split(" ").map((word, index) => (
//                 <motion.span
//                   key={index}
//                   initial={{
//                     filter: "blur(10px)",
//                     opacity: 0,
//                     y: 5,
//                   }}
//                   animate={{
//                     filter: "blur(0px)",
//                     opacity: 1,
//                     y: 0,
//                   }}
//                   transition={{
//                     duration: 0.2,
//                     ease: "easeInOut",
//                     delay: 0.02 * index,
//                   }}
//                   className="inline-block"
//                 >
//                   {word}&nbsp;
//                 </motion.span>
//               ))}
//             </motion.p>
//           </motion.div>
//           <div className="flex gap-4 pt-12 md:pt-0">
//             <button
//               onClick={handlePrev}
//               className="group/button flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800"
//             >
//               <IconArrowLeft className="h-5 w-5 text-black transition-transform duration-300 group-hover/button:rotate-12 dark:text-neutral-400" />
//             </button>
//             <button
//               onClick={handleNext}
//               className="group/button flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800"
//             >
//               <IconArrowRight className="h-5 w-5 text-black transition-transform duration-300 group-hover/button:-rotate-12 dark:text-neutral-400" />
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

export const AnimatedTestimonials = ({ testimonials, autoplay = false }) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };

  return (
    <div className="max-w-sm px-4 py-20 antialiased md:max-w-7xl md:px-8 lg:px-12">
      <div className="relative grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-20">
        {/* Image Section */}
        <div className="relative">
          <div className="relative h-96 w-full md:h-[500px]">
            {/* Floating particles */}
            <div className="absolute inset-0 overflow-hidden rounded-3xl">
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute h-1.5 w-1.5 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 opacity-20"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, -15, 0],
                    opacity: [0.2, 0.6, 0.2],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </div>

            {/* Gradient overlay */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/10 via-transparent to-pink-500/10 backdrop-blur-sm" />

            <AnimatePresence mode="wait">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.src}
                  initial={{
                    opacity: 0,
                    scale: 0.85,
                    z: -100,
                    rotate: randomRotateY(),
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.4,
                    scale: isActive(index) ? 1 : 0.92,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : randomRotateY(),
                    zIndex: isActive(index)
                      ? 40
                      : testimonials.length + 2 - index,
                    y: isActive(index) ? [0, -20, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.85,
                    z: 100,
                    rotate: randomRotateY(),
                  }}
                  transition={{
                    duration: 0.6,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 origin-bottom"
                >
                  <div className="relative h-full w-full overflow-hidden rounded-3xl">
                    <img
                      src={testimonial.src}
                      alt={testimonial.name}
                      width={500}
                      height={500}
                      draggable={false}
                      className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    <div className="absolute inset-0 ring-1 ring-white/10 rounded-3xl" />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex flex-col justify-between py-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{
                y: 25,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              exit={{
                y: -25,
                opacity: 0,
              }}
              transition={{
                duration: 0.4,
                ease: "easeInOut",
              }}
              className="space-y-6"
            >
              {/* Quote Icon */}
              <motion.div
                initial={{ scale: 0, rotate: -90 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                className="text-5xl text-purple-400/40"
              >
                "
              </motion.div>

              {/* Quote Text */}
              <motion.div className="relative">
                <div className="absolute -inset-3 rounded-xl bg-gradient-to-r from-purple-500/5 to-pink-500/5 opacity-60 blur-xl" />
                <blockquote className="relative text-xl font-light leading-relaxed text-white md:text-2xl">
                  {testimonials[active].quote.split(" ").map((word, index) => (
                    <motion.span
                      key={index}
                      initial={{
                        filter: "blur(8px)",
                        opacity: 0,
                        y: 8,
                      }}
                      animate={{
                        filter: "blur(0px)",
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        duration: 0.25,
                        ease: "easeOut",
                        delay: 0.03 * index,
                      }}
                      className="inline-block"
                    >
                      {word}&nbsp;
                    </motion.span>
                  ))}
                </blockquote>
              </motion.div>

              {/* Author Info */}
              <motion.div
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.4 }}
                className="space-y-2"
              >
                <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                  {testimonials[active].name}
                </h3>
                <p className="text-base text-purple-300/90 font-medium">
                  {testimonials[active].designation}
                </p>
              </motion.div>

              {/* Progress Bar */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
              />
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-between pt-12">
            <div className="flex gap-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handlePrev}
                className="group relative flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-[1px] transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
              >
                <div className="flex h-full w-full items-center justify-center rounded-full bg-[#1a1a1a] transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-purple-500/10 group-hover:to-pink-500/10">
                  <svg
                    className="h-5 w-5 text-white transition-transform duration-300 group-hover:-translate-x-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </div>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleNext}
                className="group relative flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-[1px] transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
              >
                <div className="flex h-full w-full items-center justify-center rounded-full bg-[#1a1a1a] transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-purple-500/10 group-hover:to-pink-500/10">
                  <svg
                    className="h-5 w-5 text-white transition-transform duration-300 group-hover:translate-x-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </motion.button>
            </div>

            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setActive(index)}
                  className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${
                    index === active
                      ? "bg-gradient-to-r from-purple-500 to-pink-500 w-6"
                      : "bg-gray-600 hover:bg-gray-500"
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
