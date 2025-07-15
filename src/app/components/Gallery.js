"use client";
import React, { useState } from "react";
import { FaGithub, FaExternalLinkAlt, FaCode, FaMobile, FaDesktop, FaCloud } from "react-icons/fa";
import { HiSparkles, HiTrendingUp, HiGlobe } from "react-icons/hi";
import { motion } from "motion/react";

const Gallery = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const featuredProjects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Modern e-commerce solution with React, Node.js, and Stripe integration",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "Web Development",
      icon: <FaDesktop className="w-5 h-5" />,
      color: "bg-blue-50 border-blue-200 text-blue-600",
      stats: "50K+ Users",
      duration: "3 months"
    },
    {
      id: 2,
      title: "Mobile Banking App",
      description: "Secure mobile banking application with biometric authentication",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      technologies: ["React Native", "Firebase", "Biometric API", "Plaid"],
      category: "Mobile Development",
      icon: <FaMobile className="w-5 h-5" />,
      color: "bg-emerald-50 border-emerald-200 text-emerald-600",
      stats: "100K+ Downloads",
      duration: "4 months"
    },
    {
      id: 3,
      title: "AI Analytics Dashboard",
      description: "Real-time analytics dashboard with machine learning insights",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      technologies: ["Python", "TensorFlow", "React", "D3.js"],
      category: "AI/ML",
      icon: <HiTrendingUp className="w-5 h-5" />,
      color: "bg-purple-50 border-purple-200 text-purple-600",
      stats: "10TB+ Data",
      duration: "6 months"
    },
    {
      id: 4,
      title: "Cloud Infrastructure",
      description: "Scalable cloud architecture with Docker and Kubernetes",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2344&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      technologies: ["Docker", "Kubernetes", "AWS", "Terraform"],
      category: "DevOps",
      icon: <FaCloud className="w-5 h-5" />,
      color: "bg-cyan-50 border-cyan-200 text-cyan-600",
      stats: "99.9% Uptime",
      duration: "2 months"
    },
    {
      id: 5,
      title: "Real Estate Platform",
      description: "Property management system with virtual tours and CRM",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=2344&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      technologies: ["Vue.js", "Laravel", "MySQL", "WebGL"],
      category: "Web Development",
      icon: <HiGlobe className="w-5 h-5" />,
      color: "bg-orange-50 border-orange-200 text-orange-600",
      stats: "5K+ Properties",
      duration: "5 months"
    },
    {
      id: 6,
      title: "Healthcare Management",
      description: "Comprehensive healthcare management system with telemedicine",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      technologies: ["React", "Node.js", "PostgreSQL", "WebRTC"],
      category: "Healthcare",
      icon: <FaCode className="w-5 h-5" />,
      color: "bg-teal-50 border-teal-200 text-teal-600",
      stats: "25K+ Patients",
      duration: "8 months"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white via-slate-50 to-blue-50 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-blue-200/20 to-cyan-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-indigo-200/20 to-blue-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(0deg,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-blue-100 shadow-lg">
            <HiSparkles className="w-4 h-4 text-blue-600" />
            <span className="text-slate-700 text-sm font-semibold">
              Our Portfolio
            </span>
          </div>

          <h2 className="text-5xl md:text-7xl font-bold text-slate-800 mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent">
              Featured
            </span>{" "}
            <span className="text-slate-700">Projects</span>
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full mb-6"></div>

          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Explore our latest work showcasing innovative solutions across various industries and technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              className="group relative bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent"></div>
                
                <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold ${project.color} border backdrop-blur-sm`}>
                  <div className="flex items-center gap-1">
                    {project.icon}
                    <span>{project.category}</span>
                  </div>
                </div>

                <div className={`absolute inset-0 bg-gradient-to-t from-blue-600/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6`}>
                  <div className="flex gap-3">
                    <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors">
                      <FaGithub className="w-4 h-4" />
                    </button>
                    <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors">
                      <FaExternalLinkAlt className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <div className="flex items-center gap-4 text-sm text-slate-500">
                    <div className="flex items-center gap-1">
                      <HiTrendingUp className="w-4 h-4" />
                      <span>{project.stats}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span>⏱️</span>
                      <span>{project.duration}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-200 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-slate-600 mb-6">
              Let&apos;s discuss how we can bring your vision to life with our expertise.
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300">
              View All Projects
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;