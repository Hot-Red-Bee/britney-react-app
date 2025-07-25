import React from "react";
import { motion } from "framer-motion";
import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiTailwindcss,
  SiPython,
  SiTensorflow,
  SiSolidity,
  SiPrisma,
  SiMongodb,
  SiPostgresql,
} from "react-icons/si";

const skills = [
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400 text-3xl" /> },
  { name: "React.js", icon: <SiReact className="text-cyan-400 text-3xl" /> },
  { name: "Node.js", icon: <SiNodedotjs className="text-green-400 text-3xl" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400 text-3xl" /> },
  { name: "Python", icon: <SiPython className="text-blue-300 text-3xl" /> },
  { name: "TensorFlow", icon: <SiTensorflow className="text-orange-400 text-3xl" /> },
  { name: "Solidity", icon: <SiSolidity className="text-gray-300 text-3xl" /> },
  { name: "Prisma", icon: <SiPrisma className="text-white text-3xl" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-300 text-3xl" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-500 text-3xl" /> },
];

const About = () => {
  return (
    <motion.div
      className="min-h-screen bg-black text-white px-4 py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-center">
        {/* LEFT: Image banner */}
       <div className="w-full md:w-1/3 flex justify-center">
  <div className="glow-spin-once p-1 rounded-xl bg-gradient-to-tr from-purple-800 via-purple-500 to-pink-500">
    <img
      src="/edit.jpg"
      alt="Britney"
      className="rounded-xl w-64 h-64 object-cover"
    />
  </div>
</div>


        {/* RIGHT: Bio and skills */}
        <div className="w-full md:w-2/3 animate-slide-in">
          <h1 className="text-4xl font-bold text-purple-500 mb-8">About Me</h1>
          <p className="text-lg leading-relaxed text-gray-300 mb-6">
            I'm a passionate <span className="text-purple-400 font-bold">Full-Stack Developer</span>,{" "}
            <span className="text-purple-400 font-bold">AI Engineer</span>, and{" "}
            <span className="text-purple-400 font-bold">Blockchain Developer</span> crafting innovative
            solutions at the intersection of software, intelligence, and decentralization.
          </p>
          <p className="text-lg leading-relaxed text-gray-300 mb-8">
            Beyond the code, I unwind with fantasy worlds, dramatic plots, and immersive stories.
            Whether it's diving into novels or vibing to good music, I'm always in tune with creativity.
          </p>
          <p className="text-purple-300 font-semibold mb-8">
            This isn’t just code. This is identity. This is art.
          </p>

          <h2 className="text-2xl font-semibold text-purple-400 mb-4">Tech Stack</h2>
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            {skills.map((skill, i) => (
              <motion.div
                key={i}
                className="bg-gray-800 hover:bg-gray-700 p-6 rounded-lg shadow-lg flex flex-col items-center justify-center space-y-3 transition duration-300 hover:scale-105 hover:shadow-purple-500/40"
                whileHover={{ scale: 1.05 }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                {skill.icon}
                <span className="text-purple-300 font-medium">{skill.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
