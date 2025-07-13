import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";
import Hero from "../components/Hero";
import ProjectCard from "../components/ProjectCard";
import TestimonialCard from "../components/TestimonialCard";
import { Code2, Zap, Users, Award } from "lucide-react";
import me2 from "../assets/bewerbungsfoto.jpeg";
import toktok from "../assets/toktok/logo.png";
import avatarF from "../assets/avatarF.jpg";
import logipic from "../assets/logipic/logipic1.png";
const Home = () => {
  const featuredProjects = [
    {
      id: "1",
      title: "LogiPic",
      description:
        "Die smarte Web-App zur Mitarbeiter- und Etikettenplanung – optimiert für Mobile & PWA. Inklusive Leistungsübersicht & Wochenschicht-Planung.",
      image: logipic,
      technologies: [
        "React",
        "TypeScript",
        "TailwindCSS",
        "Vite",
        "shadcn/ui",
        "localStorage",
      ],
      githubUrl: "https://github.com/realmaxv/logipic",
      liveUrl: "https://logipic.netlify.app/",
      featured: true,
    },
    {
      id: "2",
      title: "TokTok",
      description:
        "Ein moderner Instagram-Clone mit Like-, Kommentar- und Profilfunktionen – entwickelt im Team als Abschlussprojekt bei SuperCode mit Supabase als Backend.",
      image: toktok,
      technologies: ["React", "TypeScript", "Tailwind CSS", "Supabase"],
      githubUrl: "https://github.com/realmaxv/toktok",
      liveUrl: "https://sctoktok.netlify.app/",
      featured: true,
    },
    {
      id: "3",
      title: "TransTube",
      description:
        "Eine KI-gestützte Web-App zur Zusammenfassung und Analyse von Webseiteninhalten – unabhängig von Sprache oder Länge.",
      image:
        "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      githubUrl: "#",
      liveUrl: "https://www.transtube.org/",
      featured: true,
    },
  ];

  const testimonials = [
    {
      name: "Mentorin Elisa S.",
      role: "Mentorin & Code Reviewer",
      company: "SuperCode Bootcamp",
      content:
        "Max hat in seinem Übungsprojekt eine gut strukturierte Komponentenarchitektur umgesetzt und den Zustand effektiv mit React Hooks und Context verwaltet. Das Styling mit Tailwind ist durchdacht, und der Code ist sauber und gut lesbar. Besonders hervorzuheben ist sein Umgang mit semantischem HTML und die saubere Trennung der Verantwortlichkeiten. Insgesamt zeigt Max großes Engagement und ein starkes Verständnis moderner Webentwicklung.",
      avatar: avatarF,
      rating: 5,
    },
  ];

  const stats = [
    { icon: Code2, value: "1 Jahr", label: "Intensive Weiterbildung" },
    { icon: Users, value: "Viele", label: "Lernprojekte & Experimente" },
    { icon: Award, value: "Leidenschaft", label: "für sauberen Code" },
    { icon: Zap, value: "Fokus", label: "auf Performance & Qualität" },
  ];

  return (
    <PageTransition>
      <div className="pt-20">
        {/* Hero Section */}
        <Hero />

        {/* Stats Section */}
        <section className="py-20 bg-dark-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-center group"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-accent-500 to-accent-600 rounded-2xl flex items-center justify-center group-hover:shadow-lg group-hover:shadow-accent-500/25"
                  >
                    <stat.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <motion.h3
                    initial={{ scale: 0.5 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold text-white mb-2"
                  >
                    {stat.value}
                  </motion.h3>
                  <p className="text-gray-400">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* About Preview Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Über mich
                </h2>
                <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                  Vom Teamleiter in der Logistik zum Webentwickler – weil ich
                  lieber Tools erschaffe, die Menschen Arbeit abnehmen.
                </p>
                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                  Heute programmiere ich mit Leidenschaft Webseiten und Apps mit
                  React, TypeScript und modernen Technologien – effizient,
                  individuell und bezahlbar.
                </p>
                <motion.a
                  href="/about"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block bg-gradient-to-r from-accent-500 to-accent-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-accent-500/25 transition-all duration-300"
                >
                  Mehr erfahren
                </motion.a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative z-10  flex  rounded-2xl overflow-hidden p-4 items-center justify-center ">
                  <img
                    src={me2}
                    alt="Developer workspace"
                    className="w-100 h-99 object-cover bg-dark-900 outline-4  rounded-full outline-double"
                  />
                </div>
                <div className="absolute -top-4 -left-4 w-full h-full   rounded-2xl -z-10" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section className="py-20 bg-dark-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ausgewählte Projekte
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Eine Auswahl meiner letzten Arbeiten, die moderne Technologien
                und kreative Lösungen kombinieren.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.map((project, index) => (
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
              <motion.a
                href="/work"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-dark-800/50 backdrop-blur-sm border border-dark-700 text-white px-8 py-4 rounded-full font-semibold hover:border-accent-500/50 transition-all duration-300"
              >
                Alle Projekte ansehen
              </motion.a>
            </motion.div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Was andere über mich sagen
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Erfahrungen und Feedback aus meiner Lern- und Entwicklungsphase.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <TestimonialCard {...testimonial} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Home;
