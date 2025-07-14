import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";

const Datenschutz = () => {
  return (
    <PageTransition>
      <div className="pt-20">
        <section className="py-20 bg-gradient-to-r from-dark-900 via-dark-800 to-dark-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-8 text-center"
            >
              Datenschutzerklärung
            </motion.h1>

            <div className="prose prose-invert max-w-none text-gray-300">
              <h2>1. Datenschutz auf einen Blick</h2>
              <p>
                Die folgenden Hinweise geben einen einfachen Überblick darüber,
                was mit Ihren personenbezogenen Daten passiert, wenn Sie unsere
                Website besuchen. Personenbezogene Daten sind alle Daten, mit
                denen Sie persönlich identifiziert werden können.
              </p>

              <h2>2. Allgemeine Hinweise und Pflichtinformationen</h2>
              <p>
                Der Schutz Ihrer persönlichen Daten ist uns sehr wichtig. Wir
                behandeln Ihre personenbezogenen Daten vertraulich und
                entsprechend der gesetzlichen Datenschutzvorschriften sowie
                dieser Datenschutzerklärung.
              </p>

              <h2>3. Verantwortlicher</h2>
              <p>
                Max Voßgätter
                <br />
                Nordstraße 60
                <br />
                44579 Castrop-Rauxel
                <br />
                E-Mail:{" "}
                <a href="mailto:kontakt@maxvossgaetter.de">
                  kontakt@maxvossgaetter.de
                </a>
              </p>

              <h2>4. Datenerfassung auf unserer Website</h2>
              <p>
                Ihre Daten werden automatisch beim Besuch der Website durch
                unser IT-System erfasst. Das sind vor allem technische Daten
                (z.B. Internetbrowser, Betriebssystem oder Uhrzeit des
                Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch,
                sobald Sie unsere Website betreten.
              </p>

              <h2>5. Ihre Rechte</h2>
              <p>
                Sie haben jederzeit das Recht auf unentgeltliche Auskunft über
                Herkunft, Empfänger und Zweck Ihrer gespeicherten
                personenbezogenen Daten. Sie haben außerdem ein Recht, die
                Berichtigung oder Löschung dieser Daten zu verlangen.
              </p>

              <h2>6. Hosting</h2>
              <p>
                Diese Website wird über die Anbieter IONOS und Netlify gehostet.
                Personenbezogene Daten, die auf dieser Website erfasst werden,
                werden auf den Servern dieser Anbieter gespeichert.
              </p>

              <h2>7. Analyse-Tools und Tools von Drittanbietern</h2>
              <p>
                Beim Besuch dieser Website kann Ihr Surf-Verhalten statistisch
                ausgewertet werden. Das geschieht vor allem mit sogenannten
                Analyseprogrammen, sofern solche eingesetzt werden. Derzeit
                werden keine Analyse-Tools aktiv verwendet.
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

export default Datenschutz;
