import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import ProjectCard from '../components/ProjectCard';
import { ArrowLeft, ExternalLink, Github, Calendar, User, Tag } from 'lucide-react';

const ProjectDetail = () => {
  const { id } = useParams();

  // Mock project data - in a real app, this would come from an API
  const project = {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'Eine vollständige E-Commerce-Lösung mit modernem Design und fortgeschrittenen Features',
    longDescription: `Diese E-Commerce-Plattform wurde von Grund auf mit React und TypeScript entwickelt, um eine nahtlose Shopping-Erfahrung zu bieten. Das Projekt umfasst ein vollständiges Admin-Dashboard, Benutzerauthentifizierung, Produktverwaltung, Warenkorb-Funktionalität und integrierte Zahlungslösungen.

Die Anwendung wurde mit Fokus auf Performance und Benutzererfahrung entwickelt. Alle Animationen und Übergänge sind sorgfältig optimiert, um eine flüssige Bedienung auf allen Geräten zu gewährleisten. Das responsive Design passt sich automatisch an verschiedene Bildschirmgrößen an.

Ein besonderer Fokus lag auf der Sicherheit und Skalierbarkeit der Anwendung. Durch die Verwendung moderner Technologien und Best Practices konnten wir eine robuste Lösung schaffen, die auch bei hohem Traffic stabil funktioniert.`,
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1200',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Stripe', 'Node.js', 'MongoDB'],
    githubUrl: '#',
    liveUrl: '#',
    client: 'TechStart GmbH',
    duration: '3 Monate',
    category: 'E-Commerce',
    gallery: [
      'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    features: [
      'Responsive Design für alle Geräte',
      'Benutzerauthentifizierung und -verwaltung',
      'Produktkatalog mit Such- und Filterfunktionen',
      'Warenkorb und Checkout-Prozess',
      'Stripe-Zahlungsintegration',
      'Admin-Dashboard für Produktverwaltung',
      'E-Mail-Benachrichtigungen',
      'SEO-Optimierung'
    ]
  };

  const relatedProjects = [
    {
      id: '2',
      title: 'Dashboard Analytics',
      description: 'Interaktives Dashboard mit Echtzeitdaten und fortgeschrittenen Visualisierungen.',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'D3.js', 'Node.js'],
      githubUrl: '#',
      liveUrl: '#',
    },
    {
      id: '3',
      title: 'Mobile Fitness App',
      description: 'Cross-platform mobile Anwendung für Fitness-Tracking mit Social Features.',
      image: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React Native', 'Expo', 'Firebase'],
      githubUrl: '#',
      liveUrl: '#',
    },
  ];

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
                    <Github className="w-5 h-5" />
                    <span>Source Code</span>
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
              {project.longDescription.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-gray-400 text-lg leading-relaxed mb-6">
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
              {project.features.map((feature, index) => (
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
              {project.gallery.map((image, index) => (
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
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
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
              {relatedProjects.map((project, index) => (
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