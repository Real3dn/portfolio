// src/components/ProjectCard.jsx
import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import { useState } from 'react'

// Generate consistent gradient based on string
function getGradient(str) {
  const gradients = [
    'from-blue-600 to-purple-700',
    'from-cyan-600 to-blue-700',
    'from-purple-600 to-pink-700',
    'from-emerald-600 to-teal-700',
    'from-orange-600 to-red-700',
    'from-indigo-600 to-violet-700',
    'from-rose-600 to-pink-700',
    'from-teal-600 to-cyan-700',
  ]
  const index = str.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0)
  return gradients[index % gradients.length]
}

export default function ProjectCard({ project, index }) {
  const [imageError, setImageError] = useState(false)
  const hasScreenshot = project.screenshot && !imageError

  return (
    <motion.div
      // initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="group glass rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10"
    >
      {/* Project Screenshot / Placeholder */}
      <div className="relative overflow-hidden aspect-video">
        {hasScreenshot ? (
          <img
            src={project.screenshot}
            alt={`${project.title} preview`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            onError={() => setImageError(true)}
            loading="lazy"
          />
        ) : (
          // Auto-generated beautiful placeholder
          <div className={`w-full h-full bg-gradient-to-br ${getGradient(project.title)} flex flex-col items-center justify-center p-6 text-white`}>
            <h3 className="text-xl font-bold mb-3 text-center">{project.title}</h3>
            <div className="flex flex-wrap gap-1.5 justify-center">
              {project.technologies.slice(0, 3).map(tech => (
                <span key={tech} className="px-2 py-0.5 text-xs rounded-full bg-white/20 backdrop-blur-sm">
                  {tech}
                </span>
              ))}
            </div>
            {project.technologies.length > 3 && (
              <span className="text-xs mt-1.5 opacity-70">
                +{project.technologies.length - 3} more
              </span>
            )}
          </div>
        )}
        
        {/* Hover overlay with action buttons */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="flex gap-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/20 backdrop-blur-sm p-3 rounded-full text-white hover:bg-white/50 transition-all hover:scale-110"
              onClick={(e) => e.stopPropagation()}
              title="View source code"
            >
              <FiGithub size={22} />
            </a>
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 backdrop-blur-sm p-3 rounded-full text-white hover:bg-white/50 transition-all hover:scale-110"
                onClick={(e) => e.stopPropagation()}
                title="View live demo"
              >
                <FiExternalLink size={22} />
              </a>
            )}
          </div>
        </div>
      </div>
      
      {/* Project Info */}
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-[var(--text-primary)] group-hover:text-blue-500 transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-[var(--text-secondary)] mb-4 line-clamp-2">
          {project.description}
        </p>
        
        {/* Technology Tags */}
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
        
        {/* Always visible Code & Preview buttons */}
        <div className="flex gap-3 pt-2 border-t border-[var(--card-border)]">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-[var(--text-secondary)] hover:text-blue-500 transition-colors font-medium"
          >
            <FiGithub size={16} />
            Code
          </a>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-[var(--text-secondary)] hover:text-blue-500 transition-colors font-medium"
            >
              <FiExternalLink size={16} />
              Preview
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}