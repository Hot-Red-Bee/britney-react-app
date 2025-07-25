import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full backdrop-blur-md bg-white/5 border-t border-white/10 rounded-t-xl shadow-inner px-6 py-8 text-center animate-fade-in-up delay-500">
      <p className="text-sm text-gray-300 mb-4">
        © {new Date().getFullYear()} Britney Daramola. All rights reserved.
      </p>

      <div className="flex justify-center space-x-6 mb-6">
        <a
          href="mailto:baby6bee13@gmail.com"
          className="text-gray-300 hover:text-purple-400 transition-all duration-300 hover:scale-110"
          aria-label="Email"
        >
          <FaEnvelope size={20} />
        </a>
        <a
          href="https://github.com/Hot-Red-Bee"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-purple-400 transition-all duration-300 hover:scale-110"
          aria-label="GitHub"
        >
          <FaGithub size={20} />
        </a>
        <a
          href="https://www.linkedin.com/in/britney-daramola-336b19358/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-purple-400 transition-all duration-300 hover:scale-110"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={20} />
        </a>
      </div>

      <p className="text-xs tracking-wide text-gray-500 italic">
        Built with 💜 by Britney — Powered by React & TailwindCSS
      </p>
    </footer>
  );
};

export default Footer;
