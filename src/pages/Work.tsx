import { useState } from "react";
import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";
import ProjectCard from "../components/ProjectCard";
import { Filter } from "lucide-react";

const Work = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: "1",
      title: "TransTube",
      description:
        "Eine KI-gestützte Web-App zur Zusammenfassung und Analyse von Webseiteninhalten – unabhängig von Sprache oder Länge.",
      image:
        "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      githubUrl: "#",
      liveUrl: "https://www.transtube.org/",
      featured: true,
      category: "",
    },
  ];

  const filters = [
    { id: "all", label: "Alle Projekte" },
    { id: "web", label: "Web Development" },
    { id: "mobile", label: "Mobile Apps" },
    { id: "design", label: "UI/UX Design" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <PageTransition>
      <div className="pt-20">
        {/* Header Section */}
        <section className="py-20 bg-gradient-to-r from-dark-900 via-dark-800 to-dark-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent"
            >
              Meine Arbeiten
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
            >
              Eine Sammlung meiner besten Projekte, die moderne Technologien,
              kreative Lösungen und außergewöhnliches Design kombinieren.
            </motion.p>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-12 bg-dark-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <div className="flex items-center space-x-2 mb-4 lg:mb-0">
                <Filter className="w-5 h-5 text-gray-400" />
                <span className="text-gray-400">Filter:</span>
              </div>
              {filters.map((filter) => (
                <motion.button
                  key={filter.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeFilter === filter.id
                      ? "bg-gradient-to-r from-accent-500 to-accent-600 text-white shadow-lg shadow-accent-500/25"
                      : "bg-dark-800/50 backdrop-blur-sm border border-dark-700 text-gray-300 hover:border-accent-500/50 hover:text-white"
                  }`}
                >
                  {filter.label}
                </motion.button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <ProjectCard {...project} />
                </motion.div>
              ))}
            </motion.div>

            {filteredProjects.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <p className="text-gray-400 text-lg">
                  Keine Projekte in dieser Kategorie gefunden.
                </p>
              </motion.div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-dark-800/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Haben Sie ein Projekt im Sinn?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-gray-400 text-lg mb-8 leading-relaxed"
            >
              Lassen Sie uns über Ihre Ideen sprechen und gemeinsam etwas
              Großartiges schaffen.
            </motion.p>
            <motion.a
              href="/contact"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-block bg-gradient-to-r from-accent-500 to-accent-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-accent-500/25 transition-all duration-300"
            >
              Projekt besprechen
            </motion.a>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Work;
