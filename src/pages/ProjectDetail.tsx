import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";
import ProjectCard from "../components/ProjectCard";
import tt1 from "../assets/toktok/notification.png";
import tt2 from "../assets/toktok/overview.png";
import tt3 from "../assets/toktok/post.png";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Calendar,
  User,
  Tag,
} from "lucide-react";

type Project = {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  client?: string;
  duration?: string;
  category?: string;
  gallery?: string[];
  features?: string[];
};

const ProjectDetail = () => {
  const { id } = useParams();

  const allProjects: Project[] = [
    {
      id: "1",
      title: "TransTube",
      description:
        "Eine elegante Web-App zur KI-gestützten Analyse und Zusammenfassung von Webseiteninhalten – sprachenübergreifend.",
      longDescription: `TransTube ist eine moderne, KI-gestützte Web-App, die lange Webseiten analysiert und deren Inhalte in klarer, verständlicher Sprache zusammenfasst – unabhängig von der Originalsprache.

Die Anwendung wurde mit Fokus auf Benutzerfreundlichkeit, Performance und sprachliche Barrierefreiheit entwickelt. Durch die Kombination aus modernem Frontend-Stack und ausgelagerter KI-Logik bietet TransTube eine schnelle und präzise Inhaltsanalyse. Nutzer können gezielt nach Themen filtern und erhalten auf Knopfdruck eine strukturierte Zusammenfassung des Seiteninhalts – ganz ohne Sprachbarrieren.

Ein stilvoller Dark Mode, flüssige Animationen sowie ein vollständig responsives Design machen die App zu einem angenehmen Werkzeug für die tägliche Online-Recherche.`,
      image: `${tt3}`,
      technologies: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Vite",
        "React Router",
      ],
      githubUrl: "https://github.com/realmaxv/transtube-public",
      liveUrl: "https://www.transtube.org/",
      client: "Eigenprojekt",
      duration: "2 Monate",
      category: "KI / Webanalyse",
      gallery: [tt3, tt2, tt1],
      features: [
        "KI-gestützte Webseiten-Zusammenfassung",
        "Sprachenübergreifende Analyse (multilingual)",
        "Stichwortbasierter Themenfilter",
        "Dark Mode für angenehmes Lesen",
        "Responsive Design für alle Geräte",
        "Performanter Tech-Stack mit Vite und React",
        "Trennung von Frontend und Backend (API via Supabase & OpenAI)",
        "Modernes UI mit sanften Animationen",
      ],
    },
    {
      id: "2",
      title: "TokTok",
      description:
        "Ein moderner Instagram-Clone mit Like-, Kommentar- und Profilfunktionen – entwickelt als Abschlussprojekt bei SuperCode.",
      longDescription: `TokTok ist eine Social-Media-Web-App, die wir als Team im Rahmen unseres Abschlussprojekts bei SuperCode entwickelt haben. Die Anwendung bietet zentrale Instagram-Funktionen wie das Teilen von Bildern, Liken, Kommentieren und das Ansehen von Nutzerprofilen.

Das Projekt wurde vollständig mit modernen Webtechnologien umgesetzt: React und TypeScript für eine robuste und skalierbare UI, TailwindCSS für performantes Styling sowie Supabase für Authentifizierung, Datenbank- und Medienverwaltung.

TokTok wurde bewusst "mobile first" und benutzerfreundlich gestaltet und zeichnet sich durch ein klares Design, eine intuitive Benutzerführung und ein komponentenbasiertes Layout aus – ideal für mobile, aber auch Desktop-Anwendungen.`,
      image: `${tt1}`,
      technologies: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Supabase",
        "React Router",
      ],
      githubUrl: "https://github.com/realmaxv/toktok",
      liveUrl: "https://sctoktok.netlify.app/",
      client: "Teamprojekt SuperCode",
      duration: "Eine Woche",
      category: "Social Media / Abschlussprojekt",
      gallery: [tt1, tt2, tt3],
      features: [
        "Nutzerregistrierung & -login via Supabase Auth",
        "Post-Erstellung mit Bild-Upload",
        "Like- und Kommentarfunktion",
        "Nutzerprofile mit eigenem Feed",
        "Responsive Design für Desktop & Mobile",
        "Moderne UI-Komponenten mit TailwindCSS",
        "Datenhandling über Supabase Database & Storage",
        "Teamarbeit mit Git & GitHub",
      ],
    },
  ];

  const project = allProjects.find((p) => p.id === id);
  const relatedProjects = allProjects.filter((p) => p.id !== id);
  if (!project) {
    return (
      <PageTransition>
        <div className="pt-32 text-center text-gray-400 text-xl">
          Projekt nicht gefunden.
        </div>
      </PageTransition>
    );
  }
  return (
    <PageTransition>
      <div className="pt-20">
        {/* Back Button */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link to="/work">
            <motion.button
              whileHover={{ x: -5 }}
              className="flex items-center space-x-2 text-gray-400 hover:text-accent-500 transition-colors duration-300"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Zurück zu My Work</span>
            </motion.button>
          </Link>
        </div>

        {/* Hero Section */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  {project.title}
                </h1>
                <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                  {project.description}
                </p>

                {/* Project Meta */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="flex items-center space-x-3">
                    <User className="w-5 h-5 text-accent-500" />
                    <div>
                      <p className="text-sm text-gray-400">Client</p>
                      <p className="font-semibold">{project.client}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-5 h-5 text-accent-500" />
                    <div>
                      <p className="text-sm text-gray-400">Dauer</p>
                      <p className="font-semibold">{project.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Tag className="w-5 h-5 text-accent-500" />
                    <div>
                      <p className="text-sm text-gray-400">Kategorie</p>
                      <p className="font-semibold">{project.category}</p>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4">
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-accent-500 to-accent-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-accent-500/25 transition-all duration-300 flex items-center space-x-2"
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span>Live Demo</span>
                  </motion.a>
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-dark-800/50 backdrop-blur-sm border border-dark-700 text-white px-6 py-3 rounded-full font-semibold hover:border-accent-500/50 transition-all duration-300 flex items-center space-x-2"
                  >
                    <Link
                      className="flex items-center gap-2"
                      to={project.githubUrl}
                    >
                      <Github className="w-5 h-5" />

                      <span>Source Code</span>
                    </Link>
                  </motion.a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-4 -right-4 w-full h-full bg-gradient-to-r from-accent-500/20 to-neon-blue/20 rounded-2xl -z-10" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section className="py-12 bg-dark-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-2xl font-bold mb-8"
            >
              Verwendete Technologien
            </motion.h2>
            <div className="flex flex-wrap gap-4">
              {project.technologies.map((tech, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  viewport={{ once: true }}
                  className="px-4 py-2 bg-dark-800/50 backdrop-blur-sm border border-dark-700 rounded-full text-gray-300 hover:border-accent-500/50 hover:text-accent-500 transition-all duration-300"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </section>

        {/* Project Description */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="prose prose-lg prose-invert max-w-none"
            >
              <h2 className="text-3xl font-bold mb-8">Projektübersicht</h2>
              {project.longDescription
                ?.split("\n\n")
                .map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-gray-400 text-lg leading-relaxed mb-6"
                  >
                    {paragraph}
                  </p>
                ))}
            </motion.div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-dark-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-12"
            >
              Key Features
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.features?.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3 bg-dark-800/50 backdrop-blur-sm border border-dark-700 rounded-xl p-4 hover:border-accent-500/30 transition-all duration-500"
                >
                  <div className="w-2 h-2 bg-accent-500 rounded-full mt-2" />
                  <span className="text-gray-300">{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-12"
            >
              Weitere Screenshots
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {project.gallery?.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="group cursor-pointer overflow-hidden rounded-2xl"
                >
                  <img
                    src={image}
                    alt={`${project.title} Screenshot ${index + 1}`}
                    className="w-full h-100 object-cover object-center rounded-2xl transition-transform duration-700 group-hover:scale-110"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Projects */}
        <section className="py-20 bg-dark-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-12"
            >
              Weitere Projekte
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedProjects.map((project: Project, index: number) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <ProjectCard {...project} />
                </motion.div>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <Link to="/work">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-accent-500 to-accent-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-accent-500/25 transition-all duration-300"
                >
                  Alle Projekte ansehen
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default ProjectDetail;
