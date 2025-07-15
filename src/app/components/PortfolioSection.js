"use client";
import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { FaGithub, FaExternalLinkAlt, FaCode, FaMobile, FaDesktop, FaCloud, FaDatabase, FaRocket } from "react-icons/fa";
import { HiSparkles, HiTrendingUp, HiEye, HiLightBulb } from "react-icons/hi";

const portfolioItems = [
  {
    title: "SaaS Dashboard",
    category: "Web Application",
    imageUrl:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Modern analytics dashboard with real-time data visualization",
    tech: ["React", "D3.js", "Node.js"],
    icon: <FaDesktop className="w-4 h-4" />,
    color: "bg-blue-50 border-blue-200 text-blue-600"
  },
  {
    title: "Mobile Banking App",
    category: "Mobile App",
    imageUrl:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Secure mobile banking with biometric authentication",
    tech: ["React Native", "Firebase", "Biometric API"],
    icon: <FaMobile className="w-4 h-4" />,
    color: "bg-emerald-50 border-emerald-200 text-emerald-600"
  },
  {
    title: "E-Commerce Platform",
    category: "Web Application",
    imageUrl:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Full-stack e-commerce solution with payment integration",
    tech: ["Next.js", "Stripe", "MongoDB"],
    icon: <FaDesktop className="w-4 h-4" />,
    color: "bg-purple-50 border-purple-200 text-purple-600"
  },
  {
    title: "AI Chat Application",
    category: "AI/ML",
    imageUrl:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Intelligent chatbot with natural language processing",
    tech: ["Python", "OpenAI", "FastAPI"],
    icon: <HiLightBulb className="w-4 h-4" />,
    color: "bg-orange-50 border-orange-200 text-orange-600"
  },
  {
    title: "Cloud Infrastructure",
    category: "DevOps",
    imageUrl:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2344&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Scalable cloud architecture with auto-scaling capabilities",
    tech: ["AWS", "Docker", "Kubernetes"],
    icon: <FaCloud className="w-4 h-4" />,
    color: "bg-cyan-50 border-cyan-200 text-cyan-600"
  },
  {
    title: "Data Analytics API",
    category: "Backend",
    imageUrl:
      "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "High-performance API for real-time data processing",
    tech: ["Node.js", "PostgreSQL", "Redis"],
    icon: <FaDatabase className="w-4 h-4" />,
    color: "bg-teal-50 border-teal-200 text-teal-600"
  },
];

const categories = [
  "All",
  "Web Application",
  "Mobile App",
  "AI/ML",
  "DevOps",
  "Backend",
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
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-blue-200/20 to-cyan-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-indigo-200/20 to-blue-200/20 rounded-full blur-3xl"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(0deg,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-blue-100 shadow-lg">
            <HiSparkles className="w-4 h-4 text-blue-600" />
            <span className="text-slate-700 text-sm font-semibold">
              Our Work
            </span>
          </div>

          <h2 className="text-5xl md:text-7xl font-bold text-slate-800 mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent">
              Portfolio
            </span>{" "}
            <span className="text-slate-700">Showcase</span>
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full mb-6"></div>

          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Explore our diverse range of projects showcasing cutting-edge technology solutions 
            and innovative development approaches.
          </p>
        </div>

        {/* Filter Navigation */}
        <div
          className={`flex flex-wrap justify-center mb-16 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-full p-2 border border-slate-200 shadow-lg">
            {categories.map((category, index) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-6 py-3 mx-1 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg transform scale-105"
                    : "text-slate-600 hover:text-blue-600 hover:bg-blue-50"
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
            <motion.div
              key={`${item.title}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-white/80 backdrop-blur-sm border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
              onMouseEnter={() => setHoveredItem(index)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {/* Image Container */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent"></div>

                {/* Category Badge */}
                <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold ${item.color} border backdrop-blur-sm`}>
                  <div className="flex items-center gap-1">
                    {item.icon}
                    <span>{item.category}</span>
                  </div>
                </div>

                {/* Hover Overlay with Actions */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                  <div className="flex gap-3">
                    <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors">
                      <FaGithub className="w-4 h-4" />
                    </button>
                    <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors">
                      <FaExternalLinkAlt className="w-4 h-4" />
                    </button>
                    <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors">
                      <HiEye className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {item.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Button */}
                <div className="pt-4 border-t border-slate-100">
                  <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-2 px-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 flex items-center justify-center gap-2">
                    <FaRocket className="w-4 h-4" />
                    View Project
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-200 shadow-lg max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-6">
              <HiTrendingUp className="text-blue-600 text-3xl" />
              <h3 className="text-3xl font-bold text-slate-800">
                Ready to Build Something Amazing?
              </h3>
            </div>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              Let&apos;s collaborate on your next project and create innovative solutions that 
              drive results and exceed expectations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 flex items-center justify-center gap-2">
                <FaRocket className="w-4 h-4" />
                Start Your Project
              </button>
              <button className="bg-white border border-slate-200 text-slate-700 px-8 py-3 rounded-full font-semibold hover:bg-slate-50 transition-all duration-300">
                View All Work
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}