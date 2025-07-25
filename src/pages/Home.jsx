import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';

const Home = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center px-6 py-24 bg-gradient-to-br from-gray-950 via-black to-gray-900 text-white min-h-screen">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-5xl font-extrabold leading-tight mb-4"
      >
        Hi, I’m <span className="text-purple-500">Britney</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
        className="text-lg md:text-xl font-medium max-w-xl mb-4"
      >
        <Typewriter
          words={['Full Stack Developer', 'AI Engineer', 'Blockchain Dev']}
          loop={true}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={40}
          delaySpeed={1500}
        />
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="text-sm text-gray-300 max-w-2xl mb-8"
      >
        I craft intelligent web systems, train machine minds, and build decentralized dreams.
        Let’s code the future — beautifully and boldly.
      </motion.p>

      <motion.a
        href="/projects"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full text-sm font-semibold shadow-lg hover:shadow-purple-700 transition-all"
      >
        🌟 Explore My Projects
      </motion.a>
    </section>
  );
};

export default Home;
