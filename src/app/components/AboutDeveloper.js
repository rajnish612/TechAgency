"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import { 
  FaCode, 
  FaReact, 
  FaNodeJs, 
  FaPython, 
  FaGithub, 
  FaLinkedin, 
  FaEnvelope, 
  FaExternalLinkAlt,
  FaRocket,
  FaHeart
} from "react-icons/fa";
import { 
  HiSparkles, 
  HiLightBulb, 
  HiAcademicCap, 
  HiDesktopComputer,
  HiTrendingUp,
  HiStar
} from "react-icons/hi";

const AboutDeveloper = () => {
  const [isHovered, setIsHovered] = useState(false);

  const skills = [
    { name: "React.js", icon: <FaReact className="w-4 h-4" />, color: "bg-cyan-50 text-cyan-600 border-cyan-200" },
    { name: "Node.js", icon: <FaNodeJs className="w-4 h-4" />, color: "bg-green-50 text-green-600 border-green-200" },
    { name: "Python", icon: <FaPython className="w-4 h-4" />, color: "bg-yellow-50 text-yellow-600 border-yellow-200" },
    { name: "JavaScript", icon: <FaCode className="w-4 h-4" />, color: "bg-orange-50 text-orange-600 border-orange-200" },
    { name: "UI/UX Design", icon: <HiDesktopComputer className="w-4 h-4" />, color: "bg-purple-50 text-purple-600 border-purple-200" },
    { name: "Full-Stack Development", icon: <HiTrendingUp className="w-4 h-4" />, color: "bg-blue-50 text-blue-600 border-blue-200" }
  ];

  const achievements = [
    {
      icon: <HiStar className="w-5 h-5" />,
      title: "Portfolio Projects",
      description: "Created multiple professional websites and web applications",
      color: "bg-yellow-50 text-yellow-600 border-yellow-200"
    },
    {
      icon: <HiLightBulb className="w-5 h-5" />,
      title: "Problem Solver",
      description: "Passionate about creating innovative solutions for complex challenges",
      color: "bg-orange-50 text-orange-600 border-orange-200"
    },
    {
      icon: <HiAcademicCap className="w-5 h-5" />,
      title: "Continuous Learning",
      description: "Always exploring new technologies and improving development skills",
      color: "bg-blue-50 text-blue-600 border-blue-200"
    }
  ];

  return (
    <section id="developer" className="py-20 bg-gradient-to-br from-white via-slate-50 to-blue-50 relative overflow-hidden">
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
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-blue-100 shadow-lg">
            <FaHeart className="w-4 h-4 text-red-500" />
            <span className="text-slate-700 text-sm font-semibold">
              Made with Love
            </span>
          </div>

          <h2 className="text-5xl md:text-7xl font-bold text-slate-800 mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent">
              About the
            </span>{" "}
            <span className="text-slate-700">Developer</span>
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full mb-6"></div>

          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Meet the passionate developer behind this project - dedicated to creating exceptional digital experiences.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Developer Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-200 shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center">
                  <FaCode className="text-white text-2xl" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-800">Rajnish Nath</h3>
                  <p className="text-blue-600 font-semibold">Full-Stack Developer</p>
                </div>
              </div>

              <p className="text-slate-600 leading-relaxed mb-6">
                Hi! I'm Rajnish Nath, a passionate full-stack developer who created this website. 
                I specialize in building modern, responsive web applications using the latest technologies. 
                This project showcases my ability to transform concepts into fully functional, 
                professional websites with attention to detail and user experience.
              </p>

              <div className="flex flex-wrap gap-3 mb-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`flex items-center gap-2 px-3 py-2 rounded-full text-sm font-medium ${skill.color} border transition-all duration-300 hover:shadow-md`}
                  >
                    {skill.icon}
                    <span>{skill.name}</span>
                  </motion.div>
                ))}
              </div>

              <div className="flex gap-4">
                <motion.a
                  href="mailto:rnish612@gmail.com"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                >
                  <FaEnvelope className="w-4 h-4" />
                  Contact Me
                </motion.a>
                
                <motion.a
                  href="https://github.com/rajnishnath"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 text-slate-700 font-semibold rounded-full hover:bg-slate-50 transition-all duration-300"
                >
                  <FaGithub className="w-4 h-4" />
                  GitHub
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Achievements & Contact */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className={`p-6 rounded-2xl ${achievement.color} border backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className={`${achievement.color.split(' ')[1]} ${achievement.color.split(' ')[2]}`}>
                    {achievement.icon}
                  </div>
                  <h4 className="text-lg font-bold text-slate-800">{achievement.title}</h4>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            ))}

            {/* Contact Information */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-200 shadow-lg">
              <h4 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                <HiSparkles className="w-5 h-5 text-yellow-500" />
                Let's Connect!
              </h4>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-slate-600">
                  <FaEnvelope className="w-4 h-4 text-blue-600" />
                  <span className="text-sm">rnish612@gmail.com</span>
                </div>
                
                <div className="flex items-center gap-3 text-slate-600">
                  <FaCode className="w-4 h-4 text-green-600" />
                  <span className="text-sm">Available for freelance projects</span>
                </div>
                
                <div className="flex items-center gap-3 text-slate-600">
                  <FaRocket className="w-4 h-4 text-purple-600" />
                  <span className="text-sm">Always learning new technologies</span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-200">
                <p className="text-sm text-slate-600 leading-relaxed">
                  <strong>Note:</strong> This website was created as a portfolio project to demonstrate 
                  my full-stack development skills. Feel free to reach out if you need a similar 
                  website or have any development needs!
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 text-white max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-4">
              <FaRocket className="text-2xl" />
              <h3 className="text-2xl font-bold">Ready to Work Together?</h3>
            </div>
            <p className="text-blue-100 mb-6 leading-relaxed">
              I'm available for freelance projects and always excited to work on new challenges. 
              Let's create something amazing together!
            </p>
            <motion.a
              href="mailto:rnish612@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-white text-blue-600 font-semibold px-8 py-3 rounded-full hover:shadow-lg transition-all duration-300"
            >
              <FaEnvelope className="w-4 h-4" />
              Get In Touch
              <FaExternalLinkAlt className="w-4 h-4" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutDeveloper;