"use client"
import {
  FaUserTie,
  FaCameraRetro,
  FaPaintBrush,
  FaUsers,
  FaStar,
} from "react-icons/fa";
import { useState } from "react";

const services = [
  {
    title: "Model Management",
    icon: <FaUserTie className="text-4xl text-pink-400" />,
    description:
      "Scouting, developing, and representing top modeling talents for global campaigns.",
    gradient: "from-pink-500/20 to-purple-500/20",
    shadowColor: "shadow-pink-500/25",
  },
  {
    title: "Fashion Photography",
    icon: <FaCameraRetro className="text-4xl text-pink-400" />,
    description:
      "Creative and professional photography that captures the essence of fashion.",
    gradient: "from-blue-500/20 to-pink-500/20",
    shadowColor: "shadow-blue-500/25",
  },
  {
    title: "Styling & Wardrobe",
    icon: <FaPaintBrush className="text-4xl text-pink-400" />,
    description:
      "Personal and editorial styling that aligns with your brand's identity.",
    gradient: "from-purple-500/20 to-indigo-500/20",
    shadowColor: "shadow-purple-500/25",
  },
  {
    title: "Event Production",
    icon: <FaUsers className="text-4xl text-pink-400" />,
    description:
      "Complete production of fashion shows, brand launches, and runway events.",
    gradient: "from-emerald-500/20 to-teal-500/20",
    shadowColor: "shadow-emerald-500/25",
  },
  {
    title: "Brand Consulting",
    icon: <FaStar className="text-4xl text-pink-400" />,
    description:
      "Helping brands develop a unique, compelling visual and fashion identity.",
    gradient: "from-orange-500/20 to-red-500/20",
    shadowColor: "shadow-orange-500/25",
  },
];

export default function ServicesSection() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="py-20 bg-[#1a1a1a] relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
        <div className="mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500/20 to-purple-500/20 backdrop-blur-sm px-4 py-2 rounded-full border border-pink-500/30 mb-6">
            <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
            <span className="text-pink-300 text-sm font-medium">
              Premium Services
            </span>
          </div>
          <h2 className="text-6xl font-bold bg-gradient-to-r from-white via-pink-200 to-white bg-clip-text text-transparent leading-tight">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Empowering fashion through creativity, professionalism, and vision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative bg-gradient-to-br ${service.gradient} backdrop-blur-sm hover:backdrop-blur-md transition-all duration-500 rounded-3xl p-8 border border-white/10 hover:border-pink-500/50 transform hover:scale-105 hover:-translate-y-2 ${service.shadowColor} hover:shadow-2xl cursor-pointer`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-pink-500/20 animate-pulse"></div>

              <div className="relative z-10">
                <div
                  className={`mb-6 transform transition-all duration-500 ${
                    hoveredIndex === index ? "scale-110 rotate-6" : ""
                  }`}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-2xl backdrop-blur-sm border border-pink-500/30 group-hover:border-pink-400/50 transition-all duration-300">
                    {service.icon}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-pink-100 transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300 leading-relaxed">
                  {service.description}
                </p>

                <div className="mt-6 flex justify-center">
                  <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-pink-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                </div>
              </div>

              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-r from-pink-500 to-purple-500 blur-xl -z-10"></div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <div className="flex space-x-2">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full animate-pulse"
                style={{ animationDelay: `${i * 200}ms` }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
