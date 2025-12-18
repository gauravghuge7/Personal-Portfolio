import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { project } from '../../services/information';
import { ExternalLink, Github } from 'lucide-react';

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(project);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 py-20 px-4 sm:px-6 lg:px-8">
      {/* Section Title */}
      <div className="text-center mb-16">
        <motion.h1 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-teal-300 to-purple-400 bg-clip-text text-transparent"
        >
          Projects
        </motion.h1>
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: "120px" }}
          transition={{ duration: 1, delay: 0.3 }}
          className="h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full"
        />
        <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
          A collection of my recent work and contributions
        </p>
      </div>

      {/* Projects Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ y: -10 }}
            className="group relative"
          >
            {/* Glow Effect on Hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl blur-xl group-hover:opacity-100 opacity-0 transition-opacity duration-500" />
            
            {/* Glassmorphism Card */}
            <div className="relative bg-gray-900/40 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 shadow-2xl overflow-hidden transition-all duration-500 group-hover:border-cyan-500/50 group-hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]">
              
              {/* Project Image Container */}
              <div className="relative overflow-hidden rounded-xl mb-6">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent z-10" />
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-48 object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Status Badge */}
                <div className="absolute top-4 right-4 z-20">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm ${
                    project.status?.toLowerCase() === 'completed' 
                      ? 'bg-green-500/20 text-green-300 border border-green-500/30'
                      : project.status?.toLowerCase() === 'in progress'
                      ? 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30'
                      : 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                  }`}>
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Project Title */}
              <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-cyan-300 transition-colors duration-300">
                {project.name}
              </h3>

              {/* Description */}
              <p className="text-gray-300 mb-6 leading-relaxed line-clamp-3">
                {project.description}
              </p>

              {/* Buttons */}
              <div className="flex gap-4">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 bg-gradient-to-r from-cyan-600 to-teal-500 text-white px-4 py-3 rounded-xl font-medium flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
                >
                  <ExternalLink size={18} />
                  Live Demo
                </motion.a>
                
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={project.repository}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 bg-gradient-to-r from-purple-600 to-pink-500 text-white px-4 py-3 rounded-xl font-medium flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
                >
                  <Github size={18} />
                  Code
                </motion.a>
              </div>

              {/* Tech Stack Tags (Optional - add if you have tech stack data) */}
              {/* <div className="flex flex-wrap gap-2 mt-6">
                {project.techStack?.map((tech, i) => (
                  <span key={i} className="px-3 py-1 bg-gray-800/50 text-gray-300 text-sm rounded-lg">
                    {tech}
                  </span>
                ))}
              </div> */}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Decorative Elements */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
      </div>
    </div>
  );
}

export default Projects;