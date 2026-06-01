import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

export default function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="group glass rounded-2xl p-6 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10"
    >
      <div className="relative overflow-hidden rounded-xl mb-4 bg-gradient-to-br from-blue-500/10 to-purple-500/10 aspect-video flex items-center justify-center">
        <span className="text-4xl">{project.icon}</span>
      </div>
      
      <h3 className="text-xl font-semibold mb-2 text-[var(--text-primary)]">
        {project.title}
      </h3>
      <p className="text-sm text-[var(--text-secondary)] mb-4 line-clamp-2">
        {project.description}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 text-xs rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-500 border border-blue-500/20"
          >
            {tech}
          </span>
        ))}
      </div>
      
      <div className="flex gap-3">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
        >
          <FiGithub /> Code
        </a>
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
          >
            <FiExternalLink /> Preview
          </a>
        )}
      </div>
    </motion.div>
  )
}