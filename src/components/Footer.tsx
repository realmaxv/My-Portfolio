import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Mail, href: "mailto:contact@example.com", label: "Email" },
  ];

  return (
    <footer className="bg-dark-800 border-t border-dark-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Kontakt</h3>
            <div className="space-y-2 text-gray-400">
              <p>kontakt@example.com</p>
              <p>+49 123 456 789</p>
              <p>Berlin, Deutschland</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a
                href="/"
                className="block text-gray-400 hover:text-accent-500 transition-colors duration-200"
              >
                Home
              </a>
              <a
                href="/work"
                className="block text-gray-400 hover:text-accent-500 transition-colors duration-200"
              >
                My Work
              </a>
              <a
                href="/about"
                className="block text-gray-400 hover:text-accent-500 transition-colors duration-200"
              >
                About Me
              </a>
              <a
                href="/contact"
                className="block text-gray-400 hover:text-accent-500 transition-colors duration-200"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Me</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-dark-700 rounded-lg flex items-center justify-center text-gray-400 hover:text-accent-500 hover:bg-dark-600 transition-all duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-dark-700 mt-8 pt-8 text-center text-gray-400">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center justify-center space-x-1"
          >
            <span>© 2025 Max Voßgätter. Made with</span>
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
            >
              <Heart className="w-4 h-4 text-red-500" />
            </motion.span>
            <span>and modern web technologies.</span>
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
