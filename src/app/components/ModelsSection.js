"use client"
import { useState } from "react";

const modelsData = [
  {
    name: "Ava Bennett",
    category: "Women",
    image: "https://picsum.photos/200/200",
    height: "5'9\"",
    bust: "34\"",
    waist: "24\"",
    hips: "35\"",
    status: "Available",
  },
  {
    name: "Liam Taylor",
    category: "Men",
    image: "/models/liam.jpg",
    height: "6'1\"",
    chest: "40\"",
    waist: "32\"",
    hips: "38\"",
    status: "Booked",
  },
  {
    name: "Mia Johnson",
    category: "Kids",
    image: "/models/mia.jpg",
    height: "4'2\"",
    bust: "22\"",
    waist: "20\"",
    hips: "24\"",
    status: "Available",
  },
  // Add more models as needed
];

const categories = ["All", "Women", "Men", "Kids"];

export default function ModelsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredModels =
    selectedCategory === "All"
      ? modelsData
      : modelsData.filter((model) => model.category === selectedCategory);

  return (
    <section className="py-20 bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-white mb-4">Our Talents</h2>
        <p className="text-gray-400 mb-10">Explore our diverse pool of models and artists.</p>

        {/* Filter Buttons */}
        <div className="flex justify-center space-x-4 mb-10 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full border transition ${
                selectedCategory === cat
                  ? "bg-pink-500 text-white border-pink-500"
                  : "text-gray-300 border-gray-600 hover:bg-pink-500 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Model Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredModels.map((model, index) => (
            <div
              key={index}
              className="bg-[#2a2a2a] rounded-2xl overflow-hidden shadow-lg hover:shadow-pink-500/20 transition duration-300"
            >
              <img
                src={model.image}
                alt={model.name}
                className="w-full h-80 object-cover"
              />
              <div className="p-4 text-left">
                <h3 className="text-white text-xl font-semibold">{model.name}</h3>
                <p className="text-pink-400 text-sm mb-2">{model.category}</p>
                <ul className="text-gray-400 text-sm mb-2">
                  <li>Height: {model.height}</li>
                  {model.bust && <li>Bust: {model.bust}</li>}
                  {model.chest && <li>Chest: {model.chest}</li>}
                  <li>Waist: {model.waist}</li>
                  <li>Hips: {model.hips}</li>
                </ul>
                <span
                  className={`inline-block px-3 py-1 text-xs rounded-full ${
                    model.status === "Available"
                      ? "bg-green-600 text-white"
                      : "bg-red-500 text-white"
                  }`}
                >
                  {model.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
