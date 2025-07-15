"use client";
import { useState } from "react";
import { Star, Award, Users, Eye, MapPin, Clock } from "lucide-react";

const teamData = [
  {
    name: "Emily Rodriguez",
    category: "Frontend",
    image:
      "https://images.unsplash.com/photo-1494790108755-2616c96ffb5e?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    role: "Senior Frontend Developer",
    skills: "React, Next.js, TypeScript",
    location: "San Francisco, CA",
    languages: "JavaScript, Python, Java",
    status: "Available",
    experience: "6 years",
    rating: 4.9,
    projects: 147,
    specialty: "User Interface Design",
  },
  {
    name: "Marcus Thompson",
    category: "Backend",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    role: "Lead Backend Engineer",
    skills: "Node.js, Python, AWS",
    location: "Austin, TX",
    languages: "Python, Go, JavaScript",
    status: "Busy",
    experience: "8 years",
    rating: 4.8,
    projects: 203,
    specialty: "Cloud Architecture",
  },
  {
    name: "Sophia Chen",
    category: "Design",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    role: "UX/UI Designer",
    skills: "Figma, Adobe Creative Suite",
    location: "New York, NY",
    languages: "Design Systems, Prototyping",
    status: "Available",
    experience: "5 years",
    rating: 4.9,
    projects: 89,
    specialty: "User Experience",
  },
  {
    name: "James Wilson",
    category: "DevOps",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    role: "DevOps Engineer",
    skills: "Docker, Kubernetes, CI/CD",
    location: "Seattle, WA",
    languages: "Shell, Python, YAML",
    status: "Available",
    experience: "7 years",
    rating: 4.7,
    projects: 156,
    specialty: "Infrastructure",
  },
];

const categories = ["All", "Frontend", "Backend", "Design", "DevOps"];

export default function TeamSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredCard, setHoveredCard] = useState(null);

  const filteredTeam =
    selectedCategory === "All"
      ? teamData
      : teamData.filter((member) => member.category === selectedCategory);

  return (
    <section
      id="team"
      className="min-h-screen bg-gradient-to-br from-white via-slate-50 to-blue-50 relative overflow-hidden py-20"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-blue-200/30 to-cyan-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-indigo-200/30 to-blue-200/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-cyan-200/20 to-teal-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-blue-100 shadow-lg">
            <Award className="w-4 h-4 text-blue-600" />
            <span className="text-slate-700 text-sm font-semibold">
              Meet Our Team
            </span>
          </div>

          <h2 className="text-5xl md:text-7xl font-bold text-slate-800 mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent">
              Expert
            </span>{" "}
            <span className="text-slate-700">Professionals</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Our diverse team of skilled developers, designers, and engineers
            brings innovation and excellence to every project we undertake.
          </p>
        </div>

        <div className="flex justify-center flex-wrap gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 border-2 ${
                selectedCategory === cat
                  ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white border-transparent shadow-lg shadow-blue-500/25"
                  : "text-slate-600 border-slate-200 bg-white/70 hover:border-blue-300 hover:text-blue-600 hover:shadow-md"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {filteredTeam.map((member, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`group relative bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-200 transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-2 ${
                hoveredCard === index ? "ring-2 ring-blue-500/30" : ""
              }`}
            >
              <div className="absolute top-4 right-4 z-20">
                <span
                  className={`inline-flex items-center gap-1 px-3 py-1 text-xs font-bold rounded-full ${
                    member.status === "Available"
                      ? "bg-emerald-100 text-emerald-700 border border-emerald-200"
                      : "bg-red-100 text-red-700 border border-red-200"
                  }`}
                >
                  <div
                    className={`w-1.5 h-1.5 rounded-full ${
                      member.status === "Available"
                        ? "bg-emerald-500"
                        : "bg-red-500"
                    } animate-pulse`}
                  />
                  {member.status}
                </span>
              </div>

              <div className="relative overflow-hidden h-56">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent" />
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-1 group-hover:text-blue-600 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-semibold text-sm">
                    {member.role}
                  </p>
                  <p className="text-slate-500 text-sm">{member.specialty}</p>
                </div>

                <div className="flex items-center gap-1 bg-amber-50 rounded-full px-3 py-1 w-fit border border-amber-200">
                  <Star className="w-3 h-3 text-amber-500 fill-current" />
                  <span className="text-amber-700 text-sm font-semibold">
                    {member.rating}
                  </span>
                </div>

                <div className="flex items-center gap-4 text-xs text-slate-500">
                  <div className="flex items-center gap-1">
                    <Users className="w-3 h-3" />
                    <span>{member.projects} projects</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{member.experience}</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-3 text-sm">
                  <div className="bg-slate-50 rounded-lg p-3 border border-slate-100">
                    <span className="text-slate-500 text-xs">Skills</span>
                    <div className="text-slate-700 font-medium text-sm mt-1">
                      {member.skills}
                    </div>
                  </div>
                  <div className="bg-slate-50 rounded-lg p-3 border border-slate-100">
                    <span className="text-slate-500 text-xs flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      Location
                    </span>
                    <div className="text-slate-700 font-medium text-sm mt-1">
                      {member.location}
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-2 px-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300">
                    View Profile
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-200 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">
              Ready to Work With Us?
            </h3>
            <p className="text-slate-600 mb-6">
              Let&apos;s discuss how our expert team can help bring your vision to life.
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300">
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}