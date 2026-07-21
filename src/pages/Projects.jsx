import { useState } from 'react'
import { motion } from 'framer-motion'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'
import BackgroundGrid from '../components/BackgroundGrid'
import { FiSearch, FiFilter } from 'react-icons/fi'

const allTechnologies = [...new Set(projects.flatMap(p => p.technologies))]

export default function Projects() {
  const [filter, setFilter] = useState('All')
  const [search, setSearch] = useState('')

  const filteredProjects = projects.filter(project => {
    const matchesFilter = filter === 'All' || project.technologies.includes(filter)
    const matchesSearch = project.title.toLowerCase().includes(search.toLowerCase()) ||
                         project.description.toLowerCase().includes(search.toLowerCase())
    return matchesFilter && matchesSearch
  })

  return (
    <div className="relative min-h-screen pt-28 pb-24 px-4 sm:px-6 lg:px-8">
      <BackgroundGrid />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="pb-12 border-subtle-b mb-12"
        >
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[var(--text-muted)] mb-2">
            <span>Directory</span>
            <span>//</span>
            <span>Software & Web Modules</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--text-primary)]">
            Projects & Case Studies
          </h1>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] mt-3 max-w-2xl font-normal">
            A directory of full-stack applications, API integrations, and frontend interfaces built with React, Python, and PHP.
          </p>
        </motion.div>

        {/* Minimal Technical Filter Toolbar */}
        <div className="flex flex-col md:flex-row gap-4 mb-12 items-stretch md:items-center justify-between">
          
          {/* Search Input */}
          <div className="relative flex-1 max-w-md">
            <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--text-muted)] text-sm" />
            <input
              type="text"
              placeholder="Filter by title or technology..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded text-xs font-mono bg-[var(--bg-surface)] border-subtle text-[var(--text-primary)] placeholder-[var(--text-muted)] outline-none focus:border-[var(--border-strong)] transition-colors"
            />
          </div>

          {/* Technology Filter Chips */}
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--text-muted)] mr-1 flex items-center gap-1">
              <FiFilter /> Filter:
            </span>

            <button
              onClick={() => setFilter('All')}
              className={`px-2.5 py-1 rounded font-mono text-[10px] uppercase tracking-wider transition-all ${
                filter === 'All'
                  ? 'bg-[var(--accent)] text-[var(--accent-foreground)] font-semibold'
                  : 'border-subtle bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              All [{projects.length}]
            </button>

            {allTechnologies.map(tech => (
              <button
                key={tech}
                onClick={() => setFilter(tech)}
                className={`px-2.5 py-1 rounded font-mono text-[10px] uppercase tracking-wider transition-all ${
                  filter === tech
                    ? 'bg-[var(--accent)] text-[var(--accent-foreground)] font-semibold'
                    : 'border-subtle bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`}
              >
                {tech}
              </button>
            ))}
          </div>

        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="surface-card rounded-xl p-16 text-center">
            <span className="font-mono text-xs uppercase tracking-widest text-[var(--text-muted)] block mb-2">
              [ NO RECORDS FOUND ]
            </span>
            <p className="text-sm text-[var(--text-secondary)] font-mono">
              No software projects match the specified query filters.
            </p>
          </div>
        )}

      </div>
    </div>
  )
}