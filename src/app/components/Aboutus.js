"use client";

import React, { useState, useEffect } from "react";
import { FaRocket, FaUsers, FaGlobe, FaAward, FaLightbulb, FaCode, FaShieldAlt } from "react-icons/fa";
import { HiSparkles, HiTrendingUp, HiHeart, HiCheckCircle } from "react-icons/hi";

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { 
      number: "200+", 
      label: "Projects Completed",
      icon: <FaRocket className="w-5 h-5 text-blue-600" />,
      color: "bg-blue-50 border-blue-200"
    },
    { 
      number: "6+", 
      label: "Years of Excellence",
      icon: <FaAward className="w-5 h-5 text-cyan-600" />,
      color: "bg-cyan-50 border-cyan-200"
    },
    { 
      number: "30+", 
      label: "Countries Served",
      icon: <FaGlobe className="w-5 h-5 text-teal-600" />,
      color: "bg-teal-50 border-teal-200"
    },
    { 
      number: "150+", 
      label: "Happy Clients",
      icon: <FaUsers className="w-5 h-5 text-indigo-600" />,
      color: "bg-indigo-50 border-indigo-200"
    },
  ];

  const values = [
    {
      icon: <FaRocket className="w-8 h-8" />,
      title: "Innovation First",
      description:
        "We leverage cutting-edge technologies and creative solutions to deliver exceptional digital experiences.",
      color: "bg-blue-50 border-blue-200 text-blue-600"
    },
    {
      icon: <FaShieldAlt className="w-8 h-8" />,
      title: "Quality Assurance",
      description:
        "Every project undergoes rigorous testing and quality checks to ensure optimal performance and reliability.",
      color: "bg-emerald-50 border-emerald-200 text-emerald-600"
    },
    {
      icon: <HiTrendingUp className="w-8 h-8" />,
      title: "Growth Focused",
      description:
        "Our solutions are designed to scale with your business and adapt to changing market demands.",
      color: "bg-cyan-50 border-cyan-200 text-cyan-600"
    },
    {
      icon: <HiHeart className="w-8 h-8" />,
      title: "Client Partnership",
      description:
        "We build lasting relationships through transparent communication and dedicated support.",
      color: "bg-purple-50 border-purple-200 text-purple-600"
    },
  ];

  const features = [
    "24/7 Technical Support",
    "Agile Development Process",
    "Code Quality Standards",
    "Regular Progress Updates",
    "Post-Launch Maintenance",
    "Scalable Architecture"
  ];

  return (
    <div id="about" className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-blue-200/20 to-cyan-200/20 rounded-full blur-3xl"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-gradient-to-br from-indigo-200/20 to-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-gradient-to-br from-cyan-200/20 to-teal-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(0deg,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      </div>

      <div className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div
            className={`text-center mb-20 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-blue-100 shadow-lg">
              <HiSparkles className="w-4 h-4 text-blue-600" />
              <span className="text-slate-700 text-sm font-semibold">
                About TechFlow Solutions
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-slate-800 mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent">
                Building Tomorrow's
              </span>
              <br />
              <span className="text-slate-700">Digital Solutions</span>
            </h1>
            
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full mb-6"></div>
            
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Empowering businesses through innovative technology solutions and digital transformation
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div
              className={`transition-all duration-1000 delay-300 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
            >
              <h2 className="text-4xl font-bold text-slate-800 mb-8 relative">
                Our Journey
                <div className="absolute -bottom-2 left-0 w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
              </h2>
              
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  Founded with a vision to bridge the gap between innovative technology and business success, 
                  TechFlow Solutions has been at the forefront of digital transformation since our inception.
                  <span className="text-blue-600 font-semibold">
                    {" "}
                    We believe every business deserves cutting-edge solutions
                  </span>
                  .
                </p>
                
                <p>
                  Our team of skilled developers, designers, and engineers work collaboratively to deliver
                  exceptional digital experiences. From startups to enterprise-level organizations, we bring
                  <span className="text-cyan-600 font-semibold">
                    {" "}
                    technical excellence, creative innovation, and strategic thinking
                  </span>{" "}
                  to every project.
                </p>
                
                <p>
                  We don&apos;t just build software –
                  <span className="text-teal-600 font-semibold">
                    {" "}
                    we craft digital experiences that drive measurable results
                  </span>
                  . Our commitment to quality, innovation, and client success has made us a trusted partner 
                  for businesses worldwide.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 text-slate-600">
                    <HiCheckCircle className="w-5 h-5 text-emerald-500" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div
              className={`transition-all duration-1000 delay-500 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
            >
              <div className="relative">
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-slate-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                      <FaCode className="text-3xl text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-4">
                      Innovation Driven
                    </h3>
                    <p className="text-slate-600">
                      Leading the way in modern technology solutions
                    </p>
                  </div>
                </div>
                
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full animate-bounce"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-cyan-500 rounded-full animate-bounce delay-300"></div>
                <div className="absolute top-1/2 -right-2 w-4 h-4 bg-teal-500 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>

          <div
            className={`grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20 transition-all duration-1000 delay-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {stats.map((stat, index) => (
              <div key={index} className={`text-center p-6 rounded-2xl ${stat.color} border backdrop-blur-sm hover:shadow-lg transition-all duration-300 group`}>
                <div className="flex justify-center mb-3">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-slate-800 mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-slate-600 text-sm font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <div
            className={`transition-all duration-1000 delay-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-4xl font-bold text-slate-800 text-center mb-16">
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Our Core Values
              </span>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mt-4 rounded-full"></div>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div key={index} className={`p-6 rounded-2xl ${value.color} border backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group`}>
                  <div className={`mb-4 group-hover:scale-110 transition-transform duration-300 ${value.color.split(' ')[2]}`}>
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div
            className={`text-center mt-20 transition-all duration-1000 delay-1200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 border border-slate-200 shadow-lg max-w-4xl mx-auto">
              <div className="flex items-center justify-center gap-4 mb-6">
                <FaRocket className="text-blue-600 text-3xl" />
                <h3 className="text-3xl font-bold text-slate-800">
                  Ready to Transform Your Business?
                </h3>
              </div>
              <p className="text-slate-600 text-lg mb-8 max-w-2xl mx-auto">
                Let&apos;s collaborate to build innovative solutions that drive your business forward.
                Your success is our mission.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 flex items-center gap-2">
                  <span>Start Your Journey</span>
                  <FaRocket className="text-sm" />
                </button>
                <button className="bg-white border border-slate-200 text-slate-700 px-8 py-4 rounded-full font-semibold hover:bg-slate-50 transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;