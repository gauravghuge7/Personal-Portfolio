import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { project } from '../../services/information';
import { ExternalLink, Github } from 'lucide-react';
import Marquee from '../common/Marquee';
import { fadeInUp } from '../../utils/motionVariants';

function ProjectCard({ project }) {
  return (
    <div className="w-80 sm:w-96 h-full">
      <motion.article whileHover={{ y: -4 }} className="group h-full">
        <div className="h-full flex flex-col bg-surface border border-border rounded-lg overflow-hidden shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:border-accent/50">

          {/* Project Image */}
          <div className="relative overflow-hidden bg-background-alt shrink-0">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="absolute top-4 right-4">
              <span className={`px-3 py-1 rounded-md text-xs font-medium ${
                project.status?.toLowerCase() === 'completed'
                  ? 'bg-green-900/50 text-green-300 border border-green-700/50'
                  : project.status?.toLowerCase() === 'in progress'
                  ? 'bg-yellow-900/50 text-yellow-300 border border-yellow-700/50'
                  : 'bg-blue-900/50 text-blue-300 border border-blue-700/50'
              }`}>
                {project.status}
              </span>
            </div>
          </div>

          {/* Card Content */}
          <div className="p-6 flex flex-col flex-1">
            <h3 className="text-xl font-semibold mb-3 text-fg group-hover:text-accent transition-colors duration-300">
              {project.name}
            </h3>

            <p className="text-muted mb-6 text-sm leading-relaxed line-clamp-3 flex-1">
              {project.description}
            </p>

            <div className="flex gap-3 mt-auto">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="flex-1 bg-gradient-to-r from-cyan-700 to-cyan-600 hover:from-cyan-600 hover:to-cyan-500 text-white px-4 py-2.5 rounded-md font-medium flex items-center justify-center gap-2 text-sm transition-all duration-300 shadow hover:shadow-md"
              >
                <ExternalLink size={16} />
                View Project
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={project.repository}
                target="_blank"
                rel="noreferrer"
                className="flex-1 bg-gradient-to-r from-purple-700 to-purple-600 hover:from-purple-600 hover:to-purple-500 text-white px-4 py-2.5 rounded-md font-medium flex items-center justify-center gap-2 text-sm transition-all duration-300 shadow hover:shadow-md"
              >
                <Github size={16} />
                Source
              </motion.a>
            </div>
          </div>
        </div>
      </motion.article>
    </div>
  );
}

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(project);
  }, []);

  return (
    <div className="min-h-screen bg-background py-16 px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="text-center mb-12 max-w-3xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-4 text-fg tracking-tight"
        >
          <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </span>
        </motion.h1>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "80px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto"
        />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-muted mt-6 text-lg leading-relaxed"
        >
          A curated selection of my recent work showcasing clean code and thoughtful design
        </motion.p>
      </div>

      {/* Projects Row */}
      {projects.length > 0 && (
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <Marquee
            items={projects}
            speed={projects.length * 8}
            renderItem={(proj) => <ProjectCard project={proj} />}
          />
        </motion.div>
      )}

      {/* Subtle Background Elements */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/5 rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full" />

        {/* Grid Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(to right, #4fd1c5 1px, transparent 1px),
                            linear-gradient(to bottom, #4fd1c5 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>
    </div>
  );
}

export default Projects;
