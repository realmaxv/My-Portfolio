import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";
import {
  Code2,
  Palette,
  Zap,
  Users,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import me from "../assets/supercode.jpg";

const About = () => {
  const skills = [
    {
      category: "Grundlagen Web-Development",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Tailwind CSS",
        "Responsives Design",
        "Barrierefreiheit (a11y)",
      ],
    },
    {
      category: "Plus Skills",
      technologies: [
        "Versionskontrolle mit Git",
        "Agiles Arbeiten (Scrum)",
        "Projektmanagement mit Trello & GitHub",
        "Clean Code (SOLID, DRY, KISS)",
      ],
    },
    {
      category: "TypeScript",
      technologies: [
        "Type Safety",
        "Interfaces & Types",
        "Type Guards",
        "Modularisierung",
      ],
    },
    {
      category: "React",
      technologies: [
        "JSX",
        "Hooks (useState, useEffect)",
        "Component Lifecycle",
        "Routing mit React Router",
        "Context API",
      ],
    },
    {
      category: "KI-unterstützte Entwicklung",
      technologies: [
        "Prompt Engineering",
        "Copilot / ChatGPT",
        "Automatisierte Code-Generierung",
        "AI-gestützte Fehleranalyse",
      ],
    },
    {
      category: "Abschlussprojekt",
      technologies: [
        "Eigenständige Projektplanung",
        "Teamarbeit & Code Reviews",
        "Deployment (Netlify, Vercel)",
        "Präsentation & Demo",
      ],
    },
  ];

  const values = [
    {
      icon: Code2,
      title: "Clean Code",
      description:
        "Ich schreibe sauberen, wartbaren Code – mit klaren Strukturen, Kommentaren und dem Blick für die Zukunft.",
    },
    {
      icon: Palette,
      title: "Design‑Focus",
      description:
        "Eine perfekte Balance aus Ästhetik und Funktionalität, damit deine Anwendung nicht nur gut aussieht, sondern auch intuitiv funktioniert.",
    },
    {
      icon: Zap,
      title: "Performance",
      description:
        "Meine Lösungen sind auf Geschwindigkeit und Effizienz optimiert – für ein schnelles, reibungsloses Nutzererlebnis.",
    },
    {
      icon: Users,
      title: "Empathie & Menschlichkeit",
      description:
        "Ich höre genau zu – bei dir und deinen Nutzern. So entwickle ich nicht nur funktionale, sondern auch menschlich passende Lösungen.",
    },
  ];
  const socialLinks = [
    { icon: Github, href: "https://github.com/realmaxv/", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/maxvossgaetter/",
      label: "LinkedIn",
    },
    { icon: Mail, href: "mailto:kontakt@maxvossgaetter.de", label: "Email" },
  ];

  return (
    <PageTransition>
      <div className="pt-20">
        {/* Header Section */}
        <section className="py-20 bg-gradient-to-r from-dark-900 via-dark-800 to-dark-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                  Über mich
                </h1>
                <h2 className="text-2xl md:text-3xl text-accent-500 font-semibold mb-6">
                  Frontend-Entwickler
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed mb-8">
                  Ich bin Frontend-Entwickler mit Fokus auf moderne
                  Webtechnologien. Diese Seite dient als Portfolio, um meine
                  Projekte, Skills und meinen Werdegang für Bewerbungen im
                  Bereich Webentwicklung zu präsentieren.
                </p>
                <div className="flex flex-wrap gap-4">
                  <motion.a
                    href="/contact"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-accent-500 to-accent-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-accent-500/25 transition-all duration-300"
                  >
                    Kontakt aufnehmen
                  </motion.a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="relative z-10 rounded-2xl overflow-hidden">
                  <img
                    src={me}
                    alt="Developer workspace"
                    className="w-full h-100 object-cover"
                  />
                </div>
                <div className="absolute -top-4 -left-4 w-full h-full rounded-2xl -z-10" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-8"
            >
              Meine Mission
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-gray-400 text-xl leading-relaxed"
            >
              Meine Mission ist es, meine Leidenschaft für Technologie und
              Gestaltung in sinnvolle digitale Produkte zu verwandeln. Ich
              möchte zeigen, dass guter Code nicht nur Maschinen steuert,
              sondern echten Menschen hilft – im Alltag wie im Berufsleben.
              <br />
              <br />
              Mein Ziel ist es, moderne Weblösungen zu bauen, die verständlich,
              zugänglich und nützlich sind – egal ob Portfolio, App oder
              interaktives Tool. Dabei setze ich auf Klarheit statt Komplexität,
              auf Wirkung statt Schnickschnack – und auf den Mut, alles auf eine
              Karte zu setzen.
            </motion.p>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-dark-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-center mb-16"
            >
              Meine Werte
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
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
                    className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-accent-500 to-accent-600 rounded-2xl flex items-center justify-center group-hover:shadow-lg group-hover:shadow-accent-500/25"
                  >
                    <value.icon className="w-10 h-10 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-4 group-hover:text-accent-500 transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-center mb-16"
            >
              Technologien & Skills
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {skills.map((skillGroup, groupIndex) => (
                <motion.div
                  key={groupIndex}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: groupIndex * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-dark-800/50 backdrop-blur-sm border border-dark-700 rounded-2xl p-6 hover:border-accent-500/30 transition-all duration-500"
                >
                  <h3 className="text-xl font-semibold mb-4 text-accent-500">
                    {skillGroup.category}
                  </h3>
                  <div className="space-y-3">
                    {skillGroup.technologies.map((tech, techIndex) => (
                      <motion.div
                        key={techIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: groupIndex * 0.1 + techIndex * 0.05,
                          duration: 0.4,
                        }}
                        viewport={{ once: true }}
                        className="flex items-center space-x-2"
                      >
                        <div className="w-2 h-2 bg-accent-500 rounded-full" />
                        <span className="text-gray-300">{tech}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Bio Section */}
        <section className="py-20 bg-dark-800/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-center mb-12"
            >
              Mein Werdegang
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="prose prose-lg prose-invert max-w-none"
            >
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                Vom Teamleiter in der Logistik zur Passion für Programmierung:
                Meine erste App, entwickelt in VBA/Excel, prüfte automatisch die
                Tagesfertigkeit und half, Kapazitäten dynamisch zu verteilen.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                Schnell erkannte ich: Viel spannender als das Tool an sich war
                das Entwickeln dahinter. Nach meinem Jobwechsel habe ich eine
                18‑wöchige Vollzeit‑Weiterbildung bei SuperCode abgeschlossen
                und moderne Webtechnologien wie React, TypeScript und Tailwind
                CSS intensiv gelernt.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Heute setze ich alles auf eine Karte: Ich habe meine
                Leidenschaft zum Beruf gemacht und verfolge entschlossen meinen
                Weg in der Webentwicklung. Diese Seite ist auch mein Portfolio –
                Ein Ausdruck meines Lernwegs, meiner Fähigkeiten und meiner
                Motivation, Teil eines engagierten Entwicklerteams zu werden.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Social Links */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-8"
            >
              Lassen Sie uns vernetzen
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-gray-400 text-lg mb-12"
            >
              Folgen Sie mir auf Social Media oder kontaktieren Sie mich direkt
              für Projekte und Kooperationen.
            </motion.p>

            <div className="flex justify-center space-x-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="w-16 h-16 bg-dark-800/50 backdrop-blur-sm border border-dark-700 rounded-2xl flex items-center justify-center text-gray-400 hover:text-accent-500 hover:border-accent-500/50 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-8 h-8" />
                </motion.a>
              ))}
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default About;
