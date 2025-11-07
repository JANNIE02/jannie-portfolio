import React from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaAws } from "react-icons/fa";
import { SiMongodb, SiJavascript, SiPostgresql, SiExpress, SiVercel, SiRender } from "react-icons/si";
import { fadeInUp, fadeIn } from "../utils/animation";

const techItems = [
  { icon: "🌐", name: "HTML", color: "from-rose-400 to-pink-500" },
  { icon: "🎨", name: "CSS", color: "from-blue-400 to-blue-600" },
  { icon: "⚡", name: "JavaScript", color: "from-yellow-300 to-yellow-500" },
  { icon: "⚛️", name: "React", color: "from-cyan-400 to-blue-500" },
  { icon: "🟢", name: "Node.js", color: "from-green-400 to-green-600" },
  { icon: "🚂", name: "Express", color: "from-gray-600 to-gray-800" },
  { icon: "🐘", name: "PostgreSQL", color: "from-blue-500 to-indigo-600" },
  { icon: "🍃", name: "MongoDB", color: "from-green-500 to-emerald-600" },
  { icon: "▲", name: "Vercel", color: "from-gray-700 to-black" },
  { icon: "🎯", name: "Render", color: "from-teal-400 to-cyan-500" },
  { icon: "☁️", name: "AWS", color: "from-rose-500 to-pink-500" },
];

const TechStack = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-rose-50 via-white to-pink-50" id="tech">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 text-gray-800">
            My <span className="text-rose-400">Tech Stack</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Tools and technologies I use to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {techItems.map((tech, index) => (
            <div
              key={index}
              className="group relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative p-8 rounded-2xl bg-white shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden group-hover:border-rose-200">
                <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <div className="relative z-10 text-center">
                  <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-500">
                    {tech.icon}
                  </div>
                  <p className="text-sm font-semibold text-gray-700 group-hover:text-rose-500 transition-colors">
                    {tech.name}
                  </p>
                </div>

                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-rose-100 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-bl-full"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;