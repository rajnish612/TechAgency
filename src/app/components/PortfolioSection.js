"use client";
import React, { useState, useEffect } from "react";

const portfolioItems = [
  {
    title: "Summer Editorial",
    category: "Lookbook",
    imageUrl:
      "https://images.unsplash.com/photo-1644495799968-dd9b4118aef3?q=80&w=2062&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Street Style Campaign",
    category: "Brand Shoot",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1673002094407-a72547fa791a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Runway '24",
    category: "Event",
    imageUrl:
      "https://images.unsplash.com/photo-1570641963303-92ce4845ed4c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Modern Muse",
    category: "Photography",
    imageUrl:
      "https://images.unsplash.com/photo-1567524667890-dba7c551ee1f?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Bold & Elegant",
    category: "Fashion Film",
    imageUrl:
      "https://images.unsplash.com/photo-1566827833194-2e4b5626bd1e?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Haute Couture",
    category: "Designer Collection",
    imageUrl:
      "https://images.unsplash.com/photo-1665472832709-982b28634160?q=80&w=724&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const categories = [
  "All",
  "Lookbook",
  "Brand Shoot",
  "Event",
  "Photography",
  "Fashion Film",
  "Designer Collection",
];

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [filteredItems, setFilteredItems] = useState(portfolioItems);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    if (activeCategory === "All") {
      setFilteredItems(portfolioItems);
    } else {
      setFilteredItems(
        portfolioItems.filter((item) => item.category === activeCategory)
      );
    }
  }, [activeCategory]);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  return (
    <section className="py-20 bg-[#1a1a1a] relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-40 h-40 bg-gradient-to-br from-pink-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-block mb-4">
            <span className="text-pink-500 text-sm font-semibold tracking-widest uppercase">
              Portfolio
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-thin text-white mb-6 tracking-wide">
            Our Work
            <div className="w-20 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mt-4 rounded-full"></div>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            A curated collection of our most compelling campaigns, editorial
            shoots, and creative collaborations that define contemporary fashion
            storytelling.
          </p>
        </div>

        {/* Filter Navigation */}
        <div
          className={`flex flex-wrap justify-center mb-16 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-full p-2 border border-gray-700/30">
            {categories.map((category, index) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-6 py-3 mx-1 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg transform scale-105"
                    : "text-gray-400 hover:text-white hover:bg-gray-700/50"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={`${item.title}-${index}`}
              className={`group relative overflow-hidden rounded-3xl transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{
                transitionDelay: `${500 + index * 100}ms`,
                animationDelay: `${500 + index * 100}ms`,
              }}
              onMouseEnter={() => setHoveredItem(index)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {/* Image Container */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-gray-900">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="inline-block px-3 py-1 bg-pink-500/80 backdrop-blur-sm rounded-full text-xs font-medium mb-3 tracking-wide">
                      {item.category}
                    </span>
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-pink-300 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <div className="w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-pink-500 to-purple-500 transition-all duration-500"></div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0">
                  <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7l4-4m0 0l4 4m-4-4v18"
                      />
                    </svg>
                  </div>
                </div>

                {/* Decorative Corner Elements */}
                <div className="absolute top-0 left-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-4 left-4 w-3 h-3 bg-pink-500 rounded-full animate-pulse"></div>
                  <div className="absolute top-8 left-8 w-2 h-2 bg-purple-500 rounded-full animate-pulse delay-200"></div>
                </div>
              </div>

              {/* Hover Effects */}
              <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-pink-500/30 transition-all duration-500 pointer-events-none"></div>

              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-3xl blur-xl transform scale-105"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div
          className={`text-center mt-20 transition-all duration-1000 delay-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/30 max-w-2xl mx-auto">
            <h3 className="text-2xl font-light text-white mb-4">
              Ready to Create Something Extraordinary?
            </h3>
            <p className="text-gray-400 mb-6">
              Let's collaborate on your next fashion campaign and bring your
              vision to life.
            </p>
            <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-3 rounded-full font-medium hover:from-pink-600 hover:to-purple-600 transition-all duration-300 hover:scale-105 hover:shadow-xl">
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
