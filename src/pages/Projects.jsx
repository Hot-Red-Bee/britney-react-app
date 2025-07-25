import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "E-commerce Backend",
    stack: "MongoDB, Mongoose, Express, Joi",
    description: "Backend for a complete e-commerce system with cart, order, user, and product management.",
    github: "https://github.com/Hot-Red-Bee/E-commerce.git",
    live: null,
  },
  {
    title: "E-Tech Backend",
    stack: "Prisma, Neon, Express, Joi",
    description: "An EdTech backend platform supporting course management, user roles, and more.",
    github: "https://github.com/Hot-Red-Bee/Ed-tech.git",
    live: null,
  },
  {
    title: "GuessMaster100",
    stack: "HTML, CSS, JavaScript",
    description: "A classic number guessing game built from scratch using pure web technologies.",
    github: "https://github.com/Hot-Red-Bee",
    live: "https://guessmaster100.vercel.app/",
  },
  {
    title: "KeySprint",
    stack: "HTML, CSS, JavaScript",
    description: "Typing speed tester with live scoring, accuracy rating, and WPM calculation.",
    github: "https://github.com/Hot-Red-Bee",
    live: "https://keysprint-one.vercel.app/",
  },
  {
    title: "My Portfolio (Old)",
    stack: "HTML, CSS, Iframe Contact Form",
    description: "My first personal portfolio, with a contact section linked to Excel via iframe.",
    github: "https://github.com/Hot-Red-Bee",
    live: "https://portfolio-project-ochre-nine.vercel.app/",
  },
  {
    title: "TableFix",
    stack: "React, TailwindCSS (Backend ongoing)",
    description: "A modern table-editing UI built with React. Backend functionality still in progress.",
    github: "https://github.com/Hot-Red-Bee",
    live: null,
  },
];

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-gradient-to-b from-black to-gray-900 py-16 px-6 md:px-20 text-white"
      id="projects"
    >
      <h2 className="text-4xl font-bold mb-12 border-b-4 border-purple-500 inline-block">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <motion.div
            whileHover={{ scale: 1.03, rotate: 1 }}
            key={index}
            className="bg-gray-800 hover:bg-gray-700 rounded-2xl shadow-md p-6 transition-all duration-300"
          >
            <h3 className="text-2xl font-semibold text-purple-300 mb-2">
              {project.title}
            </h3>
            <p className="text-sm text-cyan-400 italic mb-2">{project.stack}</p>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <div className="flex space-x-4 mt-auto">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1 text-gray-300 hover:text-white hover:underline"
                >
                  <FaGithub /> <span>GitHub</span>
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1 text-yellow-300 hover:text-white hover:underline"
                >
                  <FaExternalLinkAlt /> <span>Live</span>
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
