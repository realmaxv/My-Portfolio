import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";

const Impressum = () => {
  return (
    <PageTransition>
      <div className="pt-20">
        <section className="py-20 min-h-screen bg-gradient-to-r from-dark-900 via-dark-800 to-dark-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-8 text-center"
            >
              Impressum
            </motion.h1>

            <div className="prose prose-invert max-w-none text-gray-300">
              <p>
                Max Voßgätter
                <br />
                Webentwickler (kein Handelsregistereintrag)
                <br />
                Nordstraße 60
                <br />
                44579 Castrop-Rauxel
              </p>

              <h2>Kontakt</h2>
              <p>
                Telefon: +49 (0) 171 705 30 12
                <br />
                E-Mail:{" "}
                <a href="mailto:kontakt@maxvossgaetter.de">
                  kontakt@maxvossgaetter.de
                </a>
              </p>

              <h2>Umsatzsteuer-ID</h2>
              <p>
                Umsatzsteuer-Identifikationsnummer gemäß § 27 a
                Umsatzsteuergesetz:
                <br />
                DE999999999
              </p>

              <h2>
                Verbraucher­streit­beilegung / Universal­schlichtungs­stelle
              </h2>
              <p>
                Wir sind nicht bereit oder verpflichtet, an
                Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>

              <p>
                Quelle:{" "}
                <a
                  href="https://www.e-recht24.de"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  e-recht24.de
                </a>
              </p>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Impressum;
