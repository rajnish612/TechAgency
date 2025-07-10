"use client";

import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <section id="about" className="py-24 bg-[#1a1a1a] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-20">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Side - Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              About <span className="text-pink-500">Us</span>
            </h2>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              We are a creative fashion agency focused on discovering,
              nurturing, and showcasing talent. Our mission is to bridge the gap
              between brands and bold personalities across the fashion and
              entertainment world.
            </p>
            <p className="text-gray-400 text-base">
              With a growing network of models, influencers, and performers, we
              deliver excellence in casting, styling, and brand representation.
              We believe in confidence, diversity, and creativity as the
              foundation of fashion.
            </p>
          </motion.div>

          {/* Right Side - Image or Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-lg shadow-pink-500/20 border border-gray-700">
              <img
                src="https://images.unsplash.com/photo-1532330384784-071464a2a1c6?auto=format&fit=crop&w=800&q=80"
                alt="Fashion Agency"
                className="w-full h-[450px] object-cover object-center"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
