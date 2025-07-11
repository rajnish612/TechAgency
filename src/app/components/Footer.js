"use client"
import { motion } from "motion/react";

export const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#1a1a1a]">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-purple-500/5" />
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative px-4 py-16 md:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                LUXE
              </h3>
              <p className="text-gray-400 leading-relaxed max-w-sm">
                Redefining elegance through timeless fashion. Where luxury meets
                innovation.
              </p>

              <div className="flex space-x-4">
                {[
                  { icon: "IG", label: "Instagram" },
                  { icon: "FB", label: "Facebook" },
                  { icon: "TW", label: "Twitter" },
                  { icon: "PT", label: "Pinterest" },
                ].map((social, index) => (
                  <motion.button
                    key={social.icon}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative h-10 w-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-[1px] transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25"
                  >
                    <div className="flex h-full w-full items-center justify-center rounded-full bg-[#1a1a1a] transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-purple-500/10 group-hover:to-pink-500/10">
                      <span className="text-white text-xs font-bold">
                        {social.icon}
                      </span>
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
              <h4 className="text-xl font-semibold text-white relative">
                Quick Links
                <div className="absolute -bottom-2 left-0 h-0.5 w-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
              </h4>
              <ul className="space-y-3">
                {[
                  "New Arrivals",
                  "Collections",
                  "Sale",
                  "About Us",
                  "Size Guide",
                  "Shipping Info",
                ].map((link, index) => (
                  <li key={link}>
                    <motion.a
                      href="#"
                      whileHover={{ x: 5, color: "#c084fc" }}
                      className="text-gray-400 transition-all duration-300 hover:text-purple-400 flex items-center group"
                    >
                      <span className="w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-300 group-hover:w-3 mr-0 group-hover:mr-2" />
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
              <h4 className="text-xl font-semibold text-white relative">
                Stay Updated
                <div className="absolute -bottom-2 left-0 h-0.5 w-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Get exclusive offers and latest fashion trends.
              </p>

              <div className="space-y-3">
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 py-3 font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25"
                >
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
            className="mt-16 border-t border-white/10 pt-8"
          >
            <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
              <p className="text-gray-400 text-sm">
                © 2025 LUXE Fashion. All rights reserved.
              </p>

              <div className="flex space-x-6">
                {["Privacy Policy", "Terms of Service"].map((link, index) => (
                  <motion.a
                    key={link}
                    href="#"
                    whileHover={{ y: -1, color: "#c084fc" }}
                    className="text-gray-400 text-sm transition-all duration-300 hover:text-purple-400"
                  >
                    {link}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
        </div>
      </div>
    </footer>
  );
};
