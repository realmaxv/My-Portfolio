import React, { useState } from "react";
import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";
import { Mail, MapPin, Send, CheckCircle } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      detail: "kontakt@maxvossgaetter.de",
      link: "mailto:kontakt@maxvossgaetter.de",
    },

    {
      icon: MapPin,
      title: "Standort",
      detail: "Castrop-Rauxel, Deutschland",
      link: "https://maps.google.com",
    },
  ];

  return (
    <PageTransition>
      <div className="pt-20">
        <section className="py-20 bg-gradient-to-r from-dark-900 via-dark-800 to-dark-900">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400"
            >
              Kontakt
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-xl text-gray-400 max-w-3xl mx-auto"
            >
              Haben Sie ein Projekt im Sinn oder möchten Sie einfach nur Hallo
              sagen? Ich freue mich darauf, von Ihnen zu hören!
            </motion.p>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-8">
                Lassen Sie uns sprechen
              </h2>
              <p className="text-gray-400 mb-12">
                Ich bin immer offen für neue Projekte. Ob Sie eine komplette
                Website brauchen oder einfach eine Beratung – schreiben Sie mir
                gerne.
              </p>
              <div className="space-y-8">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.link}
                    className="flex items-start space-x-4 group hover:text-accent-500 transition-colors"
                  >
                    <div className="w-12 h-12 bg-dark-800/50 border border-dark-700 rounded-xl flex items-center justify-center group-hover:border-accent-500/50 group-hover:bg-accent-500/10 transition">
                      <info.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{info.title}</h3>
                      <p className="text-gray-400 group-hover:text-accent-400">
                        {info.detail}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
              <div className="mt-12 p-6 bg-dark-800/50 border border-dark-700 rounded-2xl">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-green-400 font-semibold">
                    Verfügbar für neue Projekte
                  </span>
                </div>
                <p className="text-gray-400">Antwortzeit: ca. 24 Stunden.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-dark-800/30 border border-dark-700 rounded-2xl p-8"
            >
              <form
                name="kontakt"
                method="POST"
                action="/contact"
                data-netlify="true"
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                netlify
                data-netlify-honeypot="bot-field"
                data-netlify-recaptcha="true"
                className={`space-y-6 ${isSubmitted ? "hidden" : ""}`}
                onSubmit={() => setIsSubmitted(true)}
              >
                <div className="mb-6">
                  <div data-netlify-recaptcha="true"></div>
                </div>
                <input type="hidden" name="form-name" value="kontakt" />
                <p hidden>
                  <label>
                    Don’t fill this out: <input name="bot-field" />
                  </label>
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm font-medium text-gray-300 mb-2 block">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-dark-900/50 border border-dark-600 rounded-xl text-white placeholder-gray-500"
                      placeholder="Ihr Name"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-300 mb-2 block">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-dark-900/50 border border-dark-600 rounded-xl text-white placeholder-gray-500"
                      placeholder="ihre.email@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-300 mb-2 block">
                    Betreff
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-dark-900/50 border border-dark-600 rounded-xl text-white placeholder-gray-500"
                    placeholder="Worum geht es?"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-300 mb-2 block">
                    Nachricht *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-dark-900/50 border border-dark-600 rounded-xl text-white placeholder-gray-500 resize-none"
                    placeholder="Erzählen Sie mir von Ihrem Projekt..."
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-accent-500 to-accent-600 text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Nachricht senden</span>
                </motion.button>
              </form>

              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">
                    Nachricht gesendet!
                  </h3>
                  <p className="text-gray-400 mb-6">
                    Danke für Ihre Nachricht. Ich melde mich bald zurück.
                  </p>
                  <motion.button
                    onClick={() => setIsSubmitted(false)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-dark-800/50 border border-dark-700 text-white px-6 py-3 rounded-xl font-semibold"
                  >
                    Neue Nachricht senden
                  </motion.button>
                </motion.div>
              )}
            </motion.div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Contact;
