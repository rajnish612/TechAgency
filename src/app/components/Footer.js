"use client";
import { motion } from "motion/react";
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope, FaCode, FaRocket } from "react-icons/fa";
import { HiSparkles, HiMail } from "react-icons/hi";

export const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-100/50 to-transparent" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(0deg,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
        
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-gradient-to-r from-blue-400 to-cyan-500 opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -15, 0],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative px-6 py-16 md:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-6"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl">
                  <FaCode className="text-white text-xl" />
                </div>
                <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent">
                  TechFlow Solutions
                </h3>
              </div>
              
              <p className="text-slate-600 leading-relaxed max-w-lg">
                Empowering businesses through innovative technology solutions. We create digital experiences 
                that drive growth, enhance user engagement, and deliver measurable results.
              </p>

              <div className="flex flex-wrap gap-4">
                {[
                  { icon: FaLinkedin, label: "LinkedIn", color: "bg-blue-50 text-blue-600 hover:bg-blue-100" },
                  { icon: FaGithub, label: "GitHub", color: "bg-slate-50 text-slate-600 hover:bg-slate-100" },
                  { icon: FaTwitter, label: "Twitter", color: "bg-cyan-50 text-cyan-600 hover:bg-cyan-100" },
                  { icon: FaEnvelope, label: "Email", color: "bg-purple-50 text-purple-600 hover:bg-purple-100" },
                ].map((social, index) => (
                  <motion.button
                    key={social.label}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`group relative h-12 w-12 rounded-xl ${social.color} transition-all duration-300 hover:shadow-lg border border-slate-200`}
                  >
                    <div className="flex h-full w-full items-center justify-center">
                      <social.icon className="text-lg" />
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h4 className="text-xl font-semibold text-slate-800 relative">
                Quick Links
                <div className="absolute -bottom-2 left-0 h-0.5 w-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" />
              </h4>
              <ul className="space-y-3">
                {[
                  "Our Services",
                  "Featured Projects",
                  "Our Team",
                  "About Us",
                  "Contact",
                  "Blog",
                ].map((link, index) => (
                  <li key={link}>
                    <motion.a
                      href="#"
                      whileHover={{ x: 5, color: "#2563eb" }}
                      className="text-slate-600 transition-all duration-300 hover:text-blue-600 flex items-center group"
                    >
                      <span className="w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transition-all duration-300 group-hover:w-3 mr-0 group-hover:mr-2" />
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h4 className="text-xl font-semibold text-slate-800 relative">
                Stay Updated
                <div className="absolute -bottom-2 left-0 h-0.5 w-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" />
              </h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Get the latest updates on new projects, tech insights, and industry trends.
              </p>

              <div className="space-y-3">
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full rounded-xl bg-white border border-slate-200 px-4 py-3 text-slate-800 placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 py-3 font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 flex items-center justify-center gap-2"
                >
                  <HiMail className="w-4 h-4" />
                  Subscribe
                </motion.button>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-16 border-t border-slate-200 pt-8"
          >
            <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
              <p className="text-slate-600 text-sm">
                © 2025 TechFlow Solutions. All rights reserved.
              </p>

              <div className="flex space-x-6">
                {["Privacy Policy", "Terms of Service", "Cookies"].map((link, index) => (
                  <motion.a
                    key={link}
                    href="#"
                    whileHover={{ y: -1, color: "#2563eb" }}
                    className="text-slate-600 text-sm transition-all duration-300 hover:text-blue-600"
                  >
                    {link}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
        </div>
      </div>
    </footer>
  );
};