import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";
import Hero from "../components/Hero";
import ProjectCard from "../components/ProjectCard";
import TestimonialCard from "../components/TestimonialCard";
import { Code2, Zap, Users, Award } from "lucide-react";
import me from "../assets/me.jpeg";

const Home = () => {
  const featuredProjects = [
    {
      id: "1",
      title: "E-Commerce Platform",
      description:
        "Eine moderne E-Commerce-Lösung mit React, TypeScript und Stripe-Integration für nahtlose Zahlungsabwicklung.",
      image:
        "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Stripe"],
      githubUrl: "#",
      liveUrl: "#",
      featured: true,
    },
    {
      id: "2",
      title: "Dashboard Analytics",
      description:
        "Interaktives Dashboard mit Echtzeitdaten und fortgeschrittenen Visualisierungen.",
      image:
        "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "D3.js", "Node.js"],
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      id: "3",
      title: "Mobile App UI",
      description:
        "Benutzerfreundliches Interface Design für eine mobile Fitness-Anwendung.",
      image:
        "https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React Native", "Expo", "Firebase"],
      githubUrl: "#",
      liveUrl: "#",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Mueller",
      role: "CEO",
      company: "TechStart GmbH",
      content:
        "Die Zusammenarbeit war außergewöhnlich. Das Projekt wurde pünktlich und mit höchster Qualität geliefert.",
      avatar:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150",
      rating: 5,
    },
    {
      name: "Michael Weber",
      role: "CTO",
      company: "Innovation Labs",
      content:
        "Hervorragende technische Expertise und kreative Problemlösungen. Absolut empfehlenswert!",
      avatar:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150",
      rating: 5,
    },
    {
      name: "Anna Schmidt",
      role: "Marketing Director",
      company: "Digital Solutions",
      content:
        "Die neue Website hat unsere Conversion-Rate um 150% gesteigert. Fantastische Arbeit!",
      avatar:
        "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150",
      rating: 5,
    },
  ];

  const stats = [
    { icon: Code2, value: "50+", label: "Projekte" },
    { icon: Users, value: "25+", label: "Zufriedene Kunden" },
    { icon: Award, value: "3+", label: "Jahre Erfahrung" },
    { icon: Zap, value: "99%", label: "Performance Score" },
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
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                  Als leidenschaftlicher Frontend-Entwickler mit über 3 Jahren
                  Erfahrung verwandle ich kreative Ideen in funktionale,
                  benutzerfreundliche Webanwendungen. Mein Fokus liegt auf
                  modernen Technologien und Performance-Optimierung.
                </p>
                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                  Ich glaube daran, dass großartiges Design und solide Technik
                  Hand in Hand gehen müssen, um außergewöhnliche digitale
                  Erlebnisse zu schaffen.
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
                <div className="relative z-10 rounded-2xl overflow-hidden">
                  <img
                    src={me}
                    alt="Developer workspace"
                    className="w-full h-98 object-cover  "
                  />
                </div>
                <div className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-r from-accent-500/20 to-neon-blue/20 rounded-2xl -z-10" />
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
                Eine Auswahl meiner besten Arbeiten, die moderne Technologien
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
                Was Kunden sagen
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Erfahrungen und Feedback von zufriedenen Kunden, die mit mir
                zusammengearbeitet haben.
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
