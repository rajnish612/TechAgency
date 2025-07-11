"use client";
import { useState } from "react";
import { Star, Award, Users, Eye } from "lucide-react";

const modelsData = [
  {
    name: "Ava Bennett",
    category: "Women",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    height: "5'9\"",
    bust: '34"',
    waist: '24"',
    hips: '35"',
    status: "Available",
    experience: "5 years",
    rating: 4.9,
    projects: 127,
  },
  {
    name: "Liam Taylor",
    category: "Men",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    height: "6'1\"",
    chest: '40"',
    waist: '32"',
    hips: '38"',
    status: "Booked",
    experience: "7 years",
    rating: 4.8,
    projects: 89,
  },
  {
    name: "Mia Johnson",
    category: "Kids",
    image:
      "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    height: "4'2\"",
    bust: '22"',
    waist: '20"',
    hips: '24"',
    status: "Available",
    experience: "2 years",
    rating: 4.7,
    projects: 34,
  },
];

const categories = ["All", "Women", "Men", "Kids"];

export default function ModelsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredCard, setHoveredCard] = useState(null);

  const filteredModels =
    selectedCategory === "All"
      ? modelsData
      : modelsData.filter((model) => model.category === selectedCategory);

  return (
    <section
      id="models"
      className="min-h-screen bg-gradient-to-br from-[#1a1a1a]   to-[#1a1a1a] relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-violet-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/10 rounded-full animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500/20 to-purple-500/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6 border border-pink-500/30">
            <Award className="w-4 h-4 text-pink-400" />
            <span className="text-pink-300 text-sm font-medium">
              Premium Talent
            </span>
          </div>

          <h2 className="text-7xl font-black bg-gradient-to-r from-white via-pink-200 to-purple-200 bg-clip-text text-transparent mb-6 tracking-tight">
            Our Talents
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Discover our curated collection of world-class models and artists,
            each bringing their unique style and professional excellence to
            every project.
          </p>
        </div>

        <div className="flex justify-center flex-wrap gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`group relative px-8 py-3 rounded-full font-semibold transition-all duration-300 border-2 ${
                selectedCategory === cat
                  ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white border-transparent shadow-lg shadow-pink-500/30 scale-105"
                  : "text-gray-300 border-gray-600 hover:border-pink-400 hover:text-pink-300 hover:shadow-lg hover:shadow-pink-500/20"
              }`}
            >
              <span className="relative z-10">{cat}</span>
              {selectedCategory !== cat && (
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              )}
            </button>
          ))}
        </div>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {filteredModels.map((model, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-lg rounded-3xl overflow-hidden border border-slate-700/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/20 ${
                hoveredCard === index ? "ring-2 ring-pink-500/50" : ""
              }`}
            >
              <div className="absolute top-4 right-4 z-20">
                <span
                  className={`inline-flex items-center gap-1 px-3 py-1 text-xs font-bold rounded-full backdrop-blur-sm ${
                    model.status === "Available"
                      ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                      : "bg-red-500/20 text-red-300 border border-red-500/30"
                  }`}
                >
                  <div
                    className={`w-2 h-2 rounded-full ${
                      model.status === "Available"
                        ? "bg-emerald-400"
                        : "bg-red-400"
                    } animate-pulse`}
                  />
                  {model.status}
                </span>
              </div>

              <div className="relative overflow-hidden">
                <img
                  src={model.image}
                  alt={model.name}
                  className="w-full h-80 object-cover object-center transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />

                <div
                  className={`absolute inset-0 bg-gradient-to-t from-pink-900/50 via-transparent to-transparent transition-opacity duration-300 ${
                    hoveredCard === index ? "opacity-100" : "opacity-0"
                  }`}
                />
              </div>

              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-pink-300 transition-colors">
                      {model.name}
                    </h3>
                    <p className="text-pink-400 font-medium">
                      {model.category}
                    </p>
                  </div>
                  <div className="flex items-center gap-1 bg-yellow-500/20 backdrop-blur-sm rounded-full px-2 py-1 border border-yellow-500/30">
                    <Star className="w-3 h-3 text-yellow-400 fill-current" />
                    <span className="text-yellow-300 text-sm font-semibold">
                      {model.rating}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{model.projects} projects</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Eye className="w-4 h-4" />
                    <span>{model.experience}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-3 border border-slate-700/50">
                    <span className="text-gray-400">Height</span>
                    <div className="text-white font-semibold">
                      {model.height}
                    </div>
                  </div>
                  <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-3 border border-slate-700/50">
                    <span className="text-gray-400">Waist</span>
                    <div className="text-white font-semibold">
                      {model.waist}
                    </div>
                  </div>
                  <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-3 border border-slate-700/50">
                    <span className="text-gray-400">
                      {model.bust ? "Bust" : "Chest"}
                    </span>
                    <div className="text-white font-semibold">
                      {model.bust || model.chest}
                    </div>
                  </div>
                  <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-3 border border-slate-700/50">
                    <span className="text-gray-400">Hips</span>
                    <div className="text-white font-semibold">{model.hips}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
