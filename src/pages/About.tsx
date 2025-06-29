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

const About = () => {
  const skills = [
    {
      category: "Frontend",
      technologies: [
        "React",
        "TypeScript",
        "Next.js",
        "Vue.js",
        "Tailwind CSS",
        "Framer Motion",
      ],
    },
    {
      category: "Backend",
      technologies: [
        "Node.js",
        "Express.js",
        "Python",
        "PostgreSQL",
        "MongoDB",
        "Firebase",
      ],
    },
    {
      category: "Mobile",
      technologies: ["React Native", "Flutter", "Expo", "iOS", "Android"],
    },
    {
      category: "Tools & Others",
      technologies: ["Git", "Docker", "AWS", "Figma", "Adobe Creative Suite"],
    },
  ];

  const values = [
    {
      icon: Code2,
      title: "Clean Code",
      description:
        "Ich schreibe sauberen, wartbaren Code, der Standards folgt und gut dokumentiert ist.",
    },
    {
      icon: Palette,
      title: "Design-Focus",
      description:
        "Perfekte Balance zwischen Ästhetik und Funktionalität für optimale User Experience.",
    },
    {
      icon: Zap,
      title: "Performance",
      description:
        "Optimierung für Geschwindigkeit und Effizienz in allen Aspekten der Entwicklung.",
    },
    {
      icon: Users,
      title: "Zusammenarbeit",
      description:
        "Transparente Kommunikation und enge Zusammenarbeit mit Kunden und Teams.",
    },
  ];

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Mail, href: "mailto:contact@example.com", label: "Email" },
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
                  Ich helfe speziell kleinen Unternehmen dabei, moderne,
                  benutzerfreundliche Webanwendungen zu entwickeln, die nicht
                  nur gut aussehen, sondern auch außergewöhnliche Performance
                  bieten.
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
                    src="https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Developer workspace"
                    className="w-full h-96 object-cover"
                  />
                </div>
                <div className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-r from-accent-500/20 to-neon-blue/20 rounded-2xl -z-10" />
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
              Ich glaube daran, dass großartiges Design und solide Technik Hand
              in Hand gehen müssen. Mein Ziel ist es, digitale Erlebnisse zu
              schaffen, die nicht nur visuell beeindruckend sind, sondern auch
              intuitiv bedienbar und technisch exzellent umgesetzt.
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
                Meine Reise in die Welt der Webentwicklung begann vor über 3
                Jahren mit einer einfachen Frage: Wie kann ich das Internet zu
                einem besseren Ort machen? Diese Neugier führte mich zu HTML und
                CSS, dann zu JavaScript und schließlich zu modernen Frameworks
                wie React und Vue.js.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                Während meines Studiums der Informatik habe ich nicht nur die
                technischen Grundlagen erlernt, sondern auch verstanden, wie
                wichtig es ist, Technologie in den Dienst der Menschen zu
                stellen. Jedes Projekt ist für mich eine Gelegenheit, diese
                Philosophie in die Praxis umzusetzen.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Heute arbeite ich mit Startups und etablierten Unternehmen
                zusammen, um ihre digitalen Visionen zum Leben zu erwecken.
                Dabei liegt mein Fokus immer auf der perfekten Balance zwischen
                innovativem Design, robuster Technik und außergewöhnlicher
                Benutzererfahrung.
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
