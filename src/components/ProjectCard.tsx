import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  title,
  description,
  image,
  technologies,
  githubUrl,
  liveUrl,
  featured = false,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`group relative overflow-hidden rounded-2xl bg-dark-800/50 backdrop-blur-sm border border-dark-700 hover:border-accent-500/30 transition-all duration-500 ${
        featured ? 'md:col-span-2 md:row-span-2' : ''
      }`}
    >
      {/* Project Image */}
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-64 md:h-80 object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 via-dark-900/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
        
        {/* Featured Badge */}
        {featured && (
          <div className="absolute top-4 right-4 bg-accent-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            Featured
          </div>
        )}

        {/* Action Buttons */}
        <div className="absolute top-4 left-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          {githubUrl && (
            <motion.a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 bg-dark-900/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-accent-500 transition-colors duration-300"
            >
              <Github className="w-5 h-5" />
            </motion.a>
          )}
          {liveUrl && (
            <motion.a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 bg-dark-900/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-accent-500 transition-colors duration-300"
            >
              <ExternalLink className="w-5 h-5" />
            </motion.a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 group-hover:text-accent-500 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-400 mb-4 line-clamp-3">
          {description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.slice(0, 4).map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-dark-700/50 text-gray-300 text-sm rounded-full border border-dark-600"
            >
              {tech}
            </span>
          ))}
          {technologies.length > 4 && (
            <span className="px-3 py-1 bg-dark-700/50 text-gray-400 text-sm rounded-full border border-dark-600">
              +{technologies.length - 4}
            </span>
          )}
        </div>

        {/* View Details Link */}
        <Link to={`/project/${id}`}>
          <motion.button
            whileHover={{ x: 5 }}
            className="text-accent-500 hover:text-accent-400 font-medium flex items-center space-x-2 transition-colors duration-300"
          >
            <span>Details ansehen</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.div>
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
};

export default ProjectCard;