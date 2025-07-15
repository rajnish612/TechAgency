"use client";
import {
  FaCode,
  FaMobile,
  FaCloud,
  FaDesktop,
  FaDatabase,
  FaRocket,
} from "react-icons/fa";
import { 
  HiSparkles, 
  HiLightBulb, 
  HiCog, 
  HiChip,
  HiGlobe,
  HiShield 
} from "react-icons/hi";
import { useState } from "react";

const services = [
  {
    title: "Web Development",
    icon: <FaCode className="text-3xl" />,
    description:
      "Custom web applications built with modern frameworks like React, Next.js, and Vue.js for optimal performance.",
    features: ["Responsive Design", "SEO Optimization", "Fast Loading", "Security"],
    gradient: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    title: "Mobile Development",
    icon: <FaMobile className="text-3xl" />,
    description:
      "Native and cross-platform mobile apps for iOS and Android with seamless user experiences.",
    features: ["Native Performance", "Cross-Platform", "Push Notifications", "Offline Support"],
    gradient: "from-indigo-500 to-purple-500",
    bgColor: "bg-indigo-50",
    borderColor: "border-indigo-200",
    iconBg: "bg-indigo-100",
    iconColor: "text-indigo-600",
  },
  {
    title: "Cloud Solutions",
    icon: <FaCloud className="text-3xl" />,
    description:
      "Scalable cloud infrastructure and DevOps solutions using AWS, Azure, and Google Cloud Platform.",
    features: ["Auto Scaling", "Load Balancing", "CI/CD Pipeline", "Monitoring"],
    gradient: "from-cyan-500 to-teal-500",
    bgColor: "bg-cyan-50",
    borderColor: "border-cyan-200",
    iconBg: "bg-cyan-100",
    iconColor: "text-cyan-600",
  },
  {
    title: "UI/UX Design",
    icon: <FaDesktop className="text-3xl" />,
    description:
      "User-centered design solutions that create intuitive and engaging digital experiences.",
    features: ["User Research", "Prototyping", "Design Systems", "Usability Testing"],
    gradient: "from-emerald-500 to-green-500",
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-200",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
  },
  {
    title: "Database Management",
    icon: <FaDatabase className="text-3xl" />,
    description:
      "Robust database solutions with optimal performance, security, and scalability for your applications.",
    features: ["Data Modeling", "Query Optimization", "Backup & Recovery", "Security"],
    gradient: "from-orange-500 to-red-500",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-200",
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
  },
  {
    title: "DevOps & Deployment",
    icon: <HiCog className="text-3xl" />,
    description:
      "Streamlined development workflows with automated testing, deployment, and monitoring systems.",
    features: ["Automated Testing", "Container Orchestration", "Continuous Integration", "Performance Monitoring"],
    gradient: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
  },
];

export default function ServicesSection() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-200/20 to-cyan-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-indigo-200/20 to-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-cyan-200/10 to-teal-200/10 rounded-full blur-3xl"></div>
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(0deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
        <div className="mb-20 space-y-6">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border border-blue-100 shadow-lg mb-6">
            <HiSparkles className="w-4 h-4 text-blue-600" />
            <span className="text-slate-700 text-sm font-semibold">
              Our Services
            </span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold text-slate-800 leading-tight">
            <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent">
              Comprehensive
            </span>
            <br />
            <span className="text-slate-700">Tech Solutions</span>
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            From concept to deployment, we deliver end-to-end technology solutions
            that drive business growth and digital transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative ${service.bgColor} backdrop-blur-sm rounded-2xl p-8 border ${service.borderColor} transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-2 cursor-pointer`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}></div>

              <div className="relative z-10">
                <div className={`mb-6 inline-flex items-center justify-center w-16 h-16 ${service.iconBg} rounded-xl ${service.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>

                <h3 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-slate-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="grid grid-cols-2 gap-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center gap-2 text-sm text-slate-600"
                    >
                      <div className={`w-1.5 h-1.5 rounded-full ${service.gradient.includes('blue') ? 'bg-blue-500' : 
                        service.gradient.includes('indigo') ? 'bg-indigo-500' :
                        service.gradient.includes('cyan') ? 'bg-cyan-500' :
                        service.gradient.includes('emerald') ? 'bg-emerald-500' :
                        service.gradient.includes('orange') ? 'bg-orange-500' :
                        'bg-purple-500'}`}></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <button className={`w-full py-3 px-4 bg-gradient-to-r ${service.gradient} text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105`}>
                  Learn More
                </button>

                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                  <HiLightBulb className="w-6 h-6 text-slate-400" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 border border-slate-200 shadow-lg max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-6">
              <FaRocket className="text-blue-600 text-3xl" />
              <h3 className="text-3xl font-bold text-slate-800">
                Ready to Start Your Project?
              </h3>
            </div>
            <p className="text-slate-600 text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help transform your ideas into powerful digital solutions
              that drive growth and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 flex items-center gap-2">
                <span>Start Your Project</span>
                <FaRocket className="text-sm" />
              </button>
              <button className="bg-white border border-slate-200 text-slate-700 px-8 py-4 rounded-full font-semibold hover:bg-slate-50 transition-all duration-300">
                View Our Work
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-pulse"
              style={{ animationDelay: `${i * 200}ms` }}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
}