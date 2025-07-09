import React from "react";
import { AnimatedTestimonialsDemo } from "./AnimatedTestimonials";

const Gallery = () => {
  return (
    <div className="flex flex-col items-center flex-wrap  px-10 py-10">
      <h1 className="font-black text-left w-full text-2xl">Featured Models</h1>
      <AnimatedTestimonialsDemo />
    </div>
  );
};

export default Gallery;
