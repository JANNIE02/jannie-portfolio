import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const Projects = () => {
  const project = {
    title: "ONIMS System",
    description:
      "A full-stack NGO information management system built with React, Node.js, Express, and PostgreSQL — deployed on Render. This comprehensive platform streamlines NGO operations, member management, and data tracking with an intuitive interface and robust backend architecture.",
    image: "/images/onims.png",
    link: "https://ims.holdthechild.net/",
    tags: ["React", "Node.js", "PostgreSQL", "Express", "Full-Stack"],
    gradient: "from-rose-400 to-pink-500",
  };

  return (
    <section id="projects" className="py-20 px-6 bg-gradient-to-br from-white via-rose-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 text-gray-800">
            Featured <span className="text-rose-400">Project</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A showcase of my recent work and technical capabilities
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100">
            <div className="relative h-96 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                onError={(e) => {
                  e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600'%3E%3Crect fill='%23f3f4f6' width='800' height='600'/%3E%3Ctext fill='%23d1d5db' font-family='sans-serif' font-size='32' x='50%25' y='50%25' text-anchor='middle' dominant-baseline='middle'%3EONIMS System%3C/text%3E%3C/svg%3E";
                }}
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
            </div>

            <div className="p-8 lg:p-10">
              <h3 className="text-3xl font-bold mb-4 text-gray-800 group-hover:text-rose-500 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-600 text-base leading-relaxed mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-rose-50 text-rose-600 text-sm font-medium rounded-full border border-rose-100"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-rose-400 hover:bg-rose-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group/link"
              >
                <span>View Live Project</span>
                <ExternalLink className="w-5 h-5 transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
              </a>
            </div>

            <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-bl-full`}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;