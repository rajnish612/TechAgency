"use client";

import React, { useState, useEffect } from "react";

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { number: "500+", label: "Fashion Brands" },
    { number: "15+", label: "Years Experience" },
    { number: "50+", label: "Countries Served" },
    { number: "1000+", label: "Success Stories" },
  ];

  const values = [
    {
      icon: "✨",
      title: "Innovation",
      description:
        "We push boundaries and embrace cutting-edge trends to keep your brand ahead of the curve.",
    },
    {
      icon: "💎",
      title: "Excellence",
      description:
        "Every project receives our meticulous attention to detail and commitment to perfection.",
    },
    {
      icon: "🎯",
      title: "Strategy",
      description:
        "Data-driven approaches combined with creative vision to maximize your brand impact.",
    },
    {
      icon: "🤝",
      title: "Partnership",
      description:
        "We believe in building lasting relationships that grow and evolve with your brand.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#1a1a1a] relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-gradient-to-br from-pink-500/15 to-blue-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-gradient-to-br from-blue-500/15 to-purple-500/15 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div
            className={`text-center mb-20 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h1 className="text-5xl md:text-7xl font-thin text-white mb-6 tracking-widest uppercase">
              About Us
              <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mt-4 rounded-full"></div>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-light max-w-3xl mx-auto">
              Crafting Fashion Stories That Captivate the World
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Text Content */}
            <div
              className={`transition-all duration-1000 delay-300 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
            >
              <h2 className="text-4xl md:text-5xl font-light text-white mb-8 relative">
                Our Story
                <div className="absolute -bottom-2 left-0 w-16 h-0.5 bg-pink-500"></div>
              </h2>
              <div className="space-y-6 text-lg text-white/90 leading-relaxed">
                <p>
                  Born from a passion for fashion and a vision for excellence,
                  we've been at the forefront of the industry for over a decade.
                  Our journey began with a simple belief:
                  <span className="text-pink-400 font-semibold">
                    {" "}
                    every brand has a unique story waiting to be told
                  </span>
                  .
                </p>
                <p>
                  Today, we're proud to be trusted partners to some of the
                  world's most innovative fashion brands. From emerging
                  designers to established luxury houses, we bring
                  <span className="text-purple-400 font-semibold">
                    {" "}
                    creativity, strategy, and unmatched expertise
                  </span>{" "}
                  to every collaboration.
                </p>
                <p>
                  Our team combines decades of industry experience with fresh
                  perspectives, ensuring your brand not only keeps pace with
                  trends but sets them. We don't just create campaigns –
                  <span className="text-blue-400 font-semibold">
                    {" "}
                    we craft experiences that resonate and inspire
                  </span>
                  .
                </p>
              </div>
            </div>

            {/* Visual Element */}
            <div
              className={`transition-all duration-1000 delay-500 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
            >
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-gray-800/50 to-gray-900/30 rounded-3xl backdrop-blur-sm border border-gray-700/30 p-8 hover:scale-105 transition-transform duration-500">
                  <div className="h-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-gradient-to-br from-pink-400 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                        <span className="text-3xl">👗</span>
                      </div>
                      <h3 className="text-2xl font-semibold text-white mb-4">
                        Fashion Forward
                      </h3>
                      <p className="text-white/80">
                        Setting trends, not following them
                      </p>
                    </div>
                  </div>
                </div>
                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-pink-500 rounded-full animate-bounce"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full animate-bounce delay-300"></div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div
            className={`grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20 transition-all duration-1000 delay-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/30 hover:bg-gray-700/40 transition-all duration-300 hover:scale-105">
                  <div className="text-4xl md:text-5xl font-light text-pink-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <div className="text-white/90 text-sm md:text-base uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Values Section */}
          <div
            className={`transition-all duration-1000 delay-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-light text-white text-center mb-16">
              Our Values
              <div className="w-20 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mt-4 rounded-full"></div>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="group">
                  <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/30 hover:bg-gray-700/40 transition-all duration-500 hover:scale-105 hover:-translate-y-2">
                    <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-4">
                      {value.title}
                    </h3>
                    <p className="text-white/80 leading-relaxed text-sm">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div
            className={`text-center mt-20 transition-all duration-1000 delay-1200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-3xl p-12 border border-gray-700/30 max-w-4xl mx-auto">
              <h3 className="text-3xl md:text-4xl font-light text-white mb-6">
                Ready to Transform Your Brand?
              </h3>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Let's create something extraordinary together. Your vision, our
                expertise, limitless possibilities.
              </p>
              <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                Start Your Journey
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
