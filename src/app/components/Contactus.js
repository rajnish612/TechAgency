"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";

export default function ContactUs() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  function generateWhatsappMessage() {
    const number = "+918638232686";

    if (!form.name || !form.email || !form.message) return;
    const message = `hello my name is ${form.name}, my email is ${form.email}. ${form.message}`;
    const url = ` https://wa.me/${number}?text=${encodeURIComponent(message)}`;
    console.log(url);

    window.open(url, "_blank");
  }
  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => {
      return { ...prev, [name]: value };
    });
  }
  return (
    <section id="contact" className="py-24 bg-[#1a1a1a] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Contact <span className="text-pink-500">Us</span>
          </h2>
          <p className="text-gray-400 text-lg">
            We’d love to hear from you. Reach out for bookings, collaborations,
            or inquiries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-start gap-4">
              <MapPin className="text-pink-500 mt-1" />
              <div>
                <h4 className="text-white font-semibold">Office Address</h4>
                <p className="text-gray-400">
                  123 Fashion Street, Mumbai, India
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="text-pink-500 mt-1" />
              <div>
                <h4 className="text-white font-semibold">Phone</h4>
                <p className="text-gray-400">+91 8638 232686</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="text-pink-500 mt-1" />
              <div>
                <h4 className="text-white font-semibold">Email</h4>
                <p className="text-gray-400">contact@fashionagency.com</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-[#2a2a2a] p-8 rounded-2xl shadow-lg shadow-pink-500/20"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="mb-6">
              <label className="block text-sm text-gray-300 mb-2">
                Your Name
              </label>
              <input
                required
                name="name"
                onChange={handleChange}
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-3 rounded-xl bg-[#1f1f1f] border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm text-gray-300 mb-2">
                Email Address
              </label>
              <input
                required
                onChange={handleChange}
                name="email"
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-xl bg-[#1f1f1f] border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm text-gray-300 mb-2">
                Message
              </label>
              <textarea
                required
                name="message"
                onChange={handleChange}
                rows="5"
                placeholder="Type your message here..."
                className="w-full px-4 py-3 rounded-xl bg-[#1f1f1f] border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
              ></textarea>
            </div>
            <button
              onClick={() => generateWhatsappMessage()}
              type="submit"
              className="w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 rounded-xl transition duration-300"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
