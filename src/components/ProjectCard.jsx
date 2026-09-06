import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiArrowUpRight, FiLayers } from 'react-icons/fi'

export default function ProjectCard({ project, index, isFeatured = false }) {
  const [imageError, setImageError] = useState(false)
  const hasScreenshot = project.screenshot && !imageError

  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: Math.min(index * 0.04, 0.2) }}
      className={`surface-card rounded-lg overflow-hidden flex flex-col justify-between ${
        isFeatured ? 'md:col-span-2' : ''
      }`}
    >
      <div>
        {/* Screenshot Container */}
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-[var(--bg-subtle)] border-subtle-b">
          {hasScreenshot ? (
            <img
              src={project.screenshot}
              alt={`${project.title} interface screenshot`}
              className="w-full h-full object-cover object-top transition-transform duration-300 hover:scale-[1.01]"
              onError={() => setImageError(true)}
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center p-6 text-[var(--text-muted)]">
              <FiLayers className="text-2xl mb-2 opacity-40" />
              <span className="text-xs font-mono">{project.title}</span>
            </div>
          )}
        </div>

        {/* Card Header & Description */}
        <div className="p-5">
          <div className="flex items-center justify-between gap-2 mb-2">
            <h3 className="text-base font-semibold tracking-tight text-[var(--text-primary)]">
              {project.title}
            </h3>
            {project.category && (
              <span className="text-[11px] font-mono text-[var(--text-muted)]">
                {project.category}
              </span>
            )}
          </div>

          <p className="text-xs text-[var(--text-secondary)] leading-relaxed line-clamp-3">
            {project.description}
          </p>
        </div>
      </div>

      {/* Card Footer: Tech Tags & Links */}
      <div className="px-5 pb-5 pt-2">
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded text-[11px] font-mono bg-[var(--bg-subtle)] text-[var(--text-secondary)] border-subtle"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between pt-3 border-subtle-t text-xs">
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors font-medium"
            >
              <FiGithub className="text-sm" />
              <span>Source Code</span>
            </a>
          ) : (
            <span className="text-[11px] text-[var(--text-muted)] font-mono">
              Internal Project
            </span>
          )}

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[var(--accent)] hover:underline transition-all font-semibold ml-auto"
            >
              <span>Live Demo</span>
              <FiArrowUpRight className="text-sm" />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}