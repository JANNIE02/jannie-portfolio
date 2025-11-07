import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-12 px-6 md:px-20 py-20 bg-gradient-to-br from-white via-rose-50 to-white"
    >
      {/* Image or illustration */}
      <div className="w-60 h-60 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full shadow-xl flex items-center justify-center text-6xl text-white transform hover:scale-105 transition-transform duration-500">
        💻
      </div>

      {/* About text */}
      <div className="max-w-lg text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-gray-800">
          About Me
        </h2>
        <p className="text-gray-600 leading-relaxed">
          I'm <span className="font-semibold text-rose-500">Jannie Birungi</span>,
          a student passionate about technology, design, and creativity.
          I love building digital experiences that feel human especially cozy interfaces
          that connect purpose with simplicity.
          I enjoy reading novels a lot as well.
        </p>
      </div>
    </section>
  );
}