import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import RotatingText from "../blocks/TextAnimations/RotatingText/RotatingText";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900" />

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-accent-500/10 to-neon-blue/10 blur-3xl"
            style={{
              width: `${200 + i * 100}px`,
              height: `${200 + i * 100}px`,
              left: `${20 + i * 30}%`,
              top: `${20 + i * 20}%`,
            }}
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center gap-6">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center space-x-2 bg-dark-800/50 backdrop-blur-sm border border-accent-500/20 rounded-full px-4 py-2 mb-8"
        >
          <Sparkles className="w-4 h-4 text-accent-500" />
          <span className="text-sm text-gray-300">Moderne Webentwicklung</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent"
        >
          Moderne Webentwicklung
          <br />
          <span className="text-accent-500 flex items-center mt-4 flex-col md:flex-row gap-4">
            für Ihr{" "}
            <RotatingText
              texts={[
                "Unternehmen",
                "Startup",
                "Projekt",
                "Konzept",
                "Vorhaben",
                "Business",
              ]}
              mainClassName="px-2 sm:px-2 md:px-3 bg-lime-400 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center text-dark-900 rounded-lg"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
            />
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Ich entwickle hochperformante, benutzerfreundliche Webanwendungen mit
          modernsten Technologien, die Ihr Unternehmen voranbringen.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link to="/contact">
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px rgba(255, 106, 0, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-accent-500 to-accent-600 text-white px-8 py-4 rounded-full font-semibold flex items-center space-x-2 shadow-lg hover:shadow-accent-500/25 transition-all duration-300"
            >
              <span>Lass uns starten</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </Link>

          <Link to="/work">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-dark-800/50 backdrop-blur-sm border border-dark-700 text-white px-8 py-4 rounded-full font-semibold hover:border-accent-500/50 transition-all duration-300"
            >
              Meine Arbeiten ansehen
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
