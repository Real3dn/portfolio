import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiArrowUpRight, FiLayers } from 'react-icons/fi'

export default function ProjectCard({ project, index, isFeatured = false }) {
  const [imageError, setImageError] = useState(false)
  const hasScreenshot = project.screenshot && !imageError

  return (
    <motion.article
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className={`surface-card rounded-xl overflow-hidden flex flex-col justify-between group ${
        isFeatured ? 'lg:col-span-2' : ''
      }`}
    >
      <div>
        {/* Image Container with precise framing */}
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-[var(--bg-subtle)] border-subtle-b">
          {hasScreenshot ? (
            <img
              src={project.screenshot}
              alt={`${project.title} interface preview`}
              className="w-full h-full object-cover object-top filter  group-hover:grayscale-0 transition-all duration-500 group-hover:scale-[1.02]"
              onError={() => setImageError(true)}
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center p-6 text-[var(--text-muted)]">
              <FiLayers className="text-3xl mb-2 opacity-50" />
              <span className="font-mono text-xs uppercase tracking-widest">{project.title}</span>
            </div>
          )}
          
          <div className="absolute top-3 left-3">
            <span className="px-2.5 py-1 rounded bg-[var(--bg-primary)]/80 backdrop-blur-md border-subtle font-mono text-[10px] uppercase tracking-wider text-[var(--text-secondary)]">
              0{project.id || index + 1}
            </span>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6">
          <div className="flex items-center justify-between gap-4 mb-2">
            <h3 className="text-base sm:text-lg font-bold tracking-tight text-[var(--text-primary)] group-hover:text-neutral-400 dark:group-hover:text-white transition-colors">
              {project.title}
            </h3>
          </div>

          <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed mb-6 line-clamp-2">
            {project.description}
          </p>
        </div>
      </div>

      {/* Footer / Specs */}
      <div className="px-6 pb-6">
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded text-[10px] font-mono border-subtle bg-[var(--bg-subtle)] text-[var(--text-secondary)]"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 pt-4 border-subtle-t text-xs font-mono">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors font-medium"
          >
            <FiGithub className="text-sm" />
            <span>Source</span>
          </a>

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[var(--text-primary)] hover:text-emerald-500 transition-colors font-semibold ml-auto"
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