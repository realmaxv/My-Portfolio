import React, { useState } from "react";
import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    setIsSubmitting(true);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      detail: "kontakt@example.com",
      link: "mailto:kontakt@example.com",
    },
    {
      icon: Phone,
      title: "Telefon",
      detail: "+49 123 456 789",
      link: "tel:+49123456789",
    },
    {
      icon: MapPin,
      title: "Standort",
      detail: "Berlin, Deutschland",
      link: "https://maps.google.com",
    },
  ];

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
              Kontakt
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
            >
              Haben Sie ein Projekt im Sinn oder möchten Sie einfach nur Hallo
              sagen? Ich freue mich darauf, von Ihnen zu hören!
            </motion.p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl font-bold mb-8">
                  Lassen Sie uns sprechen
                </h2>
                <p className="text-gray-400 text-lg mb-12 leading-relaxed">
                  Ich bin immer offen für neue Projekte und interessante
                  Herausforderungen. Ob Sie eine komplette Website benötigen
                  oder nur eine schnelle Beratung wünschen - kontaktieren Sie
                  mich gerne!
                </p>

                <div className="space-y-8">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={index}
                      href={info.link}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                      className="flex items-start space-x-4 group hover:text-accent-500 transition-colors duration-300"
                    >
                      <div className="w-12 h-12 bg-dark-800/50 backdrop-blur-sm border border-dark-700 rounded-xl flex items-center justify-center group-hover:border-accent-500/50 group-hover:bg-accent-500/10 transition-all duration-300">
                        <info.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{info.title}</h3>
                        <p className="text-gray-400 group-hover:text-accent-400 transition-colors duration-300">
                          {info.detail}
                        </p>
                      </div>
                    </motion.a>
                  ))}
                </div>

                {/* Availability Status */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="mt-12 p-6 bg-dark-800/50 backdrop-blur-sm border border-dark-700 rounded-2xl"
                >
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="font-semibold text-green-400">
                      Verfügbar für neue Projekte
                    </span>
                  </div>
                  <p className="text-gray-400">
                    Ich nehme derzeit neue Projekte an. Durchschnittliche
                    Antwortzeit: 24 Stunden.
                  </p>
                </motion.div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-dark-800/30 backdrop-blur-sm border border-dark-700 rounded-2xl p-8"
              >
                {!isSubmitted ? (
                  <form
                    name="kontakt"
                    method="POST"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <input type="hidden" name="form-name" value="kontakt" />
                    <p hidden>
                      <label>
                        Don’t fill this out: <input name="bot-field" />
                      </label>
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-300 mb-2"
                        >
                          Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-dark-900/50 border border-dark-600 rounded-xl text-white placeholder-gray-500 focus:border-accent-500 focus:ring-1 focus:ring-accent-500 transition-all duration-300"
                          placeholder="Ihr Name"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-300 mb-2"
                        >
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-dark-900/50 border border-dark-600 rounded-xl text-white placeholder-gray-500 focus:border-accent-500 focus:ring-1 focus:ring-accent-500 transition-all duration-300"
                          placeholder="ihre.email@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        Betreff
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-dark-900/50 border border-dark-600 rounded-xl text-white placeholder-gray-500 focus:border-accent-500 focus:ring-1 focus:ring-accent-500 transition-all duration-300"
                        placeholder="Worum geht es?"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        Nachricht *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 bg-dark-900/50 border border-dark-600 rounded-xl text-white placeholder-gray-500 focus:border-accent-500 focus:ring-1 focus:ring-accent-500 transition-all duration-300 resize-none"
                        placeholder="Erzählen Sie mir von Ihrem Projekt..."
                      />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-gradient-to-r from-accent-500 to-accent-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-accent-500/25 transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{
                              duration: 1,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                            className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                          />
                          <span>Wird gesendet...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          <span>Nachricht senden</span>
                        </>
                      )}
                    </motion.button>
                  </form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        delay: 0.2,
                        type: "spring",
                        stiffness: 200,
                      }}
                      className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6"
                    >
                      <CheckCircle className="w-10 h-10 text-white" />
                    </motion.div>
                    <h3 className="text-2xl font-bold mb-4">
                      Nachricht gesendet!
                    </h3>
                    <p className="text-gray-400 mb-6">
                      Vielen Dank für Ihre Nachricht. Ich werde mich so schnell
                      wie möglich bei Ihnen melden.
                    </p>
                    <motion.button
                      onClick={() => setIsSubmitted(false)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-dark-800/50 backdrop-blur-sm border border-dark-700 text-white px-6 py-3 rounded-xl font-semibold hover:border-accent-500/50 transition-all duration-300"
                    >
                      Neue Nachricht senden
                    </motion.button>
                  </motion.div>
                )}
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-dark-800/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-center mb-16"
            >
              Häufig gestellte Fragen
            </motion.h2>

            <div className="space-y-8">
              {[
                {
                  question: "Wie lange dauert ein typisches Projekt?",
                  answer:
                    "Die Projektdauer variiert je nach Umfang und Komplexität. Einfache Websites können in 2-4 Wochen fertiggestellt werden, während komplexere Anwendungen 2-6 Monate in Anspruch nehmen können.",
                },
                {
                  question: "Bieten Sie auch Wartung und Support an?",
                  answer:
                    "Ja, ich biete fortlaufende Wartung und Support für alle meine Projekte an. Das umfasst Updates, Sicherheitskorrekturen und technischen Support.",
                },
                {
                  question: "Arbeiten Sie remote oder vor Ort?",
                  answer:
                    "Ich arbeite hauptsächlich remote, bin aber auch bereit für persönliche Meetings in Berlin und Umgebung. Die meiste Kommunikation erfolgt über moderne Tools wie Slack, Zoom und Figma.",
                },
                {
                  question: "Wie gestaltet sich der Projektablauf?",
                  answer:
                    "Jedes Projekt beginnt mit einem ausführlichen Briefing, gefolgt von Konzeption, Design, Entwicklung und Testing. Ich halte Sie in jeder Phase auf dem Laufenden und hole regelmäßig Feedback ein.",
                },
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-dark-800/50 backdrop-blur-sm border border-dark-700 rounded-2xl p-6 hover:border-accent-500/30 transition-all duration-500"
                >
                  <h3 className="text-xl font-semibold mb-3 text-accent-500">
                    {faq.question}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Contact;
