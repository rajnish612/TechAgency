"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const modelsData = [
  {
    name: "Ava Bennett",
    category: "Women",
    image: "https://picsum.photos/200/200",
    height: "5'9\"",
    bust: '34"',
    waist: '24"',
    hips: '35"',
    status: "Available",
  },
  {
    name: "Liam Taylor",
    category: "Men",
    image: "/models/liam.jpg",
    height: "6'1\"",
    chest: '40"',
    waist: '32"',
    hips: '38"',
    status: "Booked",
  },
  {
    name: "Mia Johnson",
    category: "Kids",
    image: "/models/mia.jpg",
    height: "4'2\"",
    bust: '22"',
    waist: '20"',
    hips: '24"',
    status: "Available",
  },
];

const categories = ["All", "Women", "Men", "Kids"];

export default function ModelsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredModels =
    selectedCategory === "All"
      ? modelsData
      : modelsData.filter((model) => model.category === selectedCategory);

  return (
    <section className="py-20 bg-[#1a1a1a] relative">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-5xl font-extrabold text-white mb-4 tracking-tight">
          Our Talents
        </h2>
        <p className="text-gray-400 mb-12 text-lg">
          Explore our handpicked selection of top-tier models and artists.
        </p>

        {/* Filter Buttons */}
        <div className="flex justify-center flex-wrap gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all border ${
                selectedCategory === cat
                  ? "bg-pink-500 text-white border-pink-500 shadow-lg shadow-pink-500/30"
                  : "text-gray-300 border-gray-600 hover:bg-pink-600 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Models Grid */}
        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {filteredModels.map((model, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#2a2a2a]/70 backdrop-blur-md rounded-3xl overflow-hidden shadow-lg hover:shadow-pink-500/30 transition-all transform hover:-translate-y-1"
            >
              <img
                src={model.image}
                alt={model.name}
                className="w-full h-80 object-cover object-center"
              />
              <div className="p-5 text-left">
                <h3 className="text-white text-xl font-bold mb-1">
                  {model.name}
                </h3>
                <p className="text-pink-400 text-sm mb-3">{model.category}</p>
                <ul className="text-gray-300 text-sm space-y-1 mb-4">
                  <li>Height: {model.height}</li>
                  {model.bust && <li>Bust: {model.bust}</li>}
                  {model.chest && <li>Chest: {model.chest}</li>}
                  <li>Waist: {model.waist}</li>
                  <li>Hips: {model.hips}</li>
                </ul>
                <span
                  className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${
                    model.status === "Available"
                      ? "bg-green-500 text-white"
                      : "bg-red-500 text-white"
                  }`}
                >
                  {model.status}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
