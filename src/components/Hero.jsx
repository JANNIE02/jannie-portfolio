import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center px-4 bg-gradient-to-br from-rose-50 via-white to-pink-50 relative overflow-hidden pt-20"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-rose-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Social Links - Below navbar, right side */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="fixed top-24 right-8 flex flex-col items-center gap-3 z-40 hidden lg:flex"
      >
        <a
          href="https://github.com/JANNIE02"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-white rounded-full shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300 border border-gray-200 group"
          aria-label="GitHub"
        >
          <Github className="w-5 h-5 text-gray-700 group-hover:text-rose-500" />
        </a>
        <a
          href="https://www.linkedin.com/in/jannie-birungi-32065125b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-white rounded-full shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300 border border-gray-200 group"
          aria-label="LinkedIn"
        >
          <Linkedin className="w-5 h-5 text-gray-700 group-hover:text-rose-500" />
        </a>
        <div className="w-px h-12 bg-gray-300"></div>
      </motion.div>

      <div className="relative z-10 space-y-8 max-w-5xl mx-auto">
        {/* Hello Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block"
        >
          <span className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 shadow-md border border-gray-200">
            👋 Hello, I'm
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-800 leading-tight"
        >
          <span className="text-rose-400">Jannie</span> Birungi
        </motion.h1>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="space-y-4"
        >
          <p className="text-2xl md:text-3xl font-semibold text-gray-700">
            Full Stack <span className="text-rose-500">Developer</span>
          </p>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed px-4">
            I craft meaningful digital experiences with modern technologies.
    
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-4 pt-4 px-4"
        >
          <a
            href="#projects"
            className="px-6 md:px-8 py-3 md:py-4 bg-rose-400 hover:bg-rose-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2 text-sm md:text-base"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-6 md:px-8 py-3 md:py-4 bg-white hover:bg-gray-50 text-gray-800 font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2 border border-gray-200 text-sm md:text-base"
          >
            <Mail className="w-5 h-5" />
            Contact Me
          </a>
          <a
          href="/Birungi Jannie Resume.pdf"  // ← Updated to match your filename
  download="Birungi-Jannie-Resume.pdf"  // ← How it saves on user's computer
  className="px-8 py-4 bg-white hover:bg-gray-50 text-gray-800 font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2 border border-gray-200"
>
  <Download className="w-5 h-5" />
  Resume
</a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="grid grid-cols-3 gap-4 md:gap-8 pt-8 md:pt-12 max-w-2xl mx-auto px-4"
        >
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-bold text-rose-500">1+</p>
            <p className="text-xs md:text-sm text-gray-600 mt-1">Years Experience</p>
          </div>
          {/* <div className="text-center">
            <p className="text-2xl md:text-3xl font-bold text-rose-500"></p>
            <p className="text-xs md:text-sm text-gray-600 mt-1">Projects Completed</p>
          </div> */}
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-bold text-rose-500">10+</p>
            <p className="text-xs md:text-sm text-gray-600 mt-1">Technologies</p>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 md:bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          {/* <span className="text-xs md:text-sm text-gray-500">Scroll to explore</span> */}
          {/* <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-rose-400 rounded-full animate-bounce"></div>
          </div> */}
        </div>
      </motion.div>

      {/* Animations */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
}