import {
  FaUserTie,
  FaCameraRetro,
  FaPaintBrush,
  FaUsers,
  FaStar,
} from "react-icons/fa";

const services = [
  {
    title: "Model Management",
    icon: <FaUserTie className="text-3xl text-pink-400" />,
    description:
      "Scouting, developing, and representing top modeling talents for global campaigns.",
  },
  {
    title: "Fashion Photography",
    icon: <FaCameraRetro className="text-3xl text-pink-400" />,
    description:
      "Creative and professional photography that captures the essence of fashion.",
  },
  {
    title: "Styling & Wardrobe",
    icon: <FaPaintBrush className="text-3xl text-pink-400" />,
    description:
      "Personal and editorial styling that aligns with your brand’s identity.",
  },
  {
    title: "Event Production",
    icon: <FaUsers className="text-3xl text-pink-400" />,
    description:
      "Complete production of fashion shows, brand launches, and runway events.",
  },
  {
    title: "Brand Consulting",
    icon: <FaStar className="text-3xl text-pink-400" />,
    description:
      "Helping brands develop a unique, compelling visual and fashion identity.",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-16 bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
        <p className="text-gray-400 mb-12">
          Empowering fashion through creativity, professionalism, and vision.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#2a2a2a] hover:bg-[#333] transition-all duration-300 rounded-2xl p-6 border border-pink-800/30"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
