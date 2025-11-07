import { motion } from "framer-motion";

import { Mail } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 bg-gradient-to-br from-rose-50 via-white to-pink-50 relative">
      {/* Top Right Contact Badge */}
      <div className="absolute top-8 right-8 flex items-center gap-4">
        <a
          href="#contact"
          className="flex items-center gap-2 px-4 py-2 bg-white text-gray-700 font-medium rounded-full shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-rose-300"
        >
          <Mail className="w-4 h-4 text-rose-400" />
          <span className="text-sm">Contact Me</span>
        </a>
        <div className="flex items-center gap-2 px-4 py-2 bg-rose-400 text-white font-medium rounded-full shadow-md">
          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
          <span className="text-sm">Open to Work</span>
        </div>
      </div>

      <div className="space-y-6">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gray-800">
          Hi, I'm <span className="text-rose-400">Jannie</span> 👋
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-xl mx-auto">
          I am passionate about crafting meaningful digital experiences.
        </p>
      </div>
      
      <div className="absolute bottom-10 text-sm text-gray-500 animate-bounce">
        ↓ Scroll to explore
      </div>
    </section>
  );
}