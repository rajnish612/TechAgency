"use client";

import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, Globe } from "lucide-react";
import { FaWhatsapp, FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";
import { useState } from "react";

export default function ContactUs() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    subject: "",
    projectType: "web-development"
  });

  const contactInfo = [
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Office Address",
      content: "123 Tech Hub, Silicon Valley, CA 94025",
      color: "bg-blue-50 border-blue-200 text-blue-600"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Phone",
      content: "+1 (555) 123-4567",
      color: "bg-emerald-50 border-emerald-200 text-emerald-600"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email",
      content: "hello@techflowsolutions.com",
      color: "bg-purple-50 border-purple-200 text-purple-600"
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Business Hours",
      content: "Mon-Fri: 9AM - 6PM PST",
      color: "bg-cyan-50 border-cyan-200 text-cyan-600"
    }
  ];

  const projectTypes = [
    { value: "web-development", label: "Web Development" },
    { value: "mobile-app", label: "Mobile App" },
    { value: "cloud-solutions", label: "Cloud Solutions" },
    { value: "ai-ml", label: "AI/ML Project" },
    { value: "consulting", label: "Technical Consulting" },
    { value: "other", label: "Other" }
  ];

  function generateWhatsappMessage() {
    const number = "+15551234567";
    
    if (!form.name || !form.email || !form.message) return;
    const message = `Hi! I&apos;m ${form.name} (${form.email}). I&apos;m interested in ${form.projectType.replace('-', ' ')} services. ${form.message}`;
    const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
    
    window.open(url, "_blank");
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => {
      return { ...prev, [name]: value };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", form);
    generateWhatsappMessage();
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
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
            <MessageCircle className="w-4 h-4 text-blue-600" />
            <span className="text-slate-700 text-sm font-semibold">
              Get In Touch
            </span>
          </div>

          <h2 className="text-5xl md:text-7xl font-bold text-slate-800 mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent">
              Contact
            </span>{" "}
            <span className="text-slate-700">Us</span>
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full mb-6"></div>

          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your ideas into reality? Let&apos;s discuss your project and create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-200 shadow-lg">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">
                Let&apos;s Start a Conversation
              </h3>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Whether you have a specific project in mind or just want to explore possibilities, 
                we&apos;re here to help. Reach out through any of the channels below.
              </p>

              <div className="grid grid-cols-1 gap-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className={`flex items-center gap-4 p-4 rounded-xl ${info.color} border transition-all duration-300 hover:shadow-md`}>
                    <div className={`${info.color.split(' ')[2]} flex-shrink-0`}>
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800 text-sm">{info.title}</h4>
                      <p className="text-slate-600 text-sm">{info.content}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200">
                <h4 className="text-sm font-semibold text-slate-800 mb-4">Follow Us</h4>
                <div className="flex gap-3">
                  <button className="p-3 bg-blue-50 text-blue-600 rounded-xl hover:bg-blue-100 transition-colors">
                    <FaLinkedin className="w-4 h-4" />
                  </button>
                  <button className="p-3 bg-slate-50 text-slate-600 rounded-xl hover:bg-slate-100 transition-colors">
                    <FaGithub className="w-4 h-4" />
                  </button>
                  <button className="p-3 bg-cyan-50 text-cyan-600 rounded-xl hover:bg-cyan-100 transition-colors">
                    <FaTwitter className="w-4 h-4" />
                  </button>
                  <button className="p-3 bg-emerald-50 text-emerald-600 rounded-xl hover:bg-emerald-100 transition-colors">
                    <FaWhatsapp className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-200 shadow-lg"
          >
            <div className="flex items-center gap-2 mb-6">
              <HiSparkles className="w-5 h-5 text-blue-600" />
              <h3 className="text-2xl font-bold text-slate-800">Start Your Project</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    required
                    name="name"
                    onChange={handleChange}
                    type="text"
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    required
                    onChange={handleChange}
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Project Type
                </label>
                <select
                  name="projectType"
                  onChange={handleChange}
                  value={form.projectType}
                  className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                >
                  {projectTypes.map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Subject
                </label>
                <input
                  name="subject"
                  onChange={handleChange}
                  type="text"
                  placeholder="Brief description of your project"
                  className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Message *
                </label>
                <textarea
                  required
                  name="message"
                  onChange={handleChange}
                  rows="5"
                  placeholder="Tell us about your project requirements, timeline, and budget..."
                  className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                ></textarea>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold py-3 px-6 rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
                
                <button
                  type="button"
                  onClick={generateWhatsappMessage}
                  className="flex-1 bg-emerald-600 text-white font-semibold py-3 px-6 rounded-xl hover:bg-emerald-700 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <FaWhatsapp className="w-4 h-4" />
                  WhatsApp
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}