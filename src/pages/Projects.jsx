import { useState } from 'react'
import { motion } from 'framer-motion'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'

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
    <div className="pt-24 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
              My Projects
            </span>
          </h1>
          <p className="text-[var(--text-secondary)] max-w-xl mx-auto">
            Explore my work across different technologies and platforms.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <input
            type="text"
            placeholder="Search projects..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 px-4 py-2 rounded-xl glass text-[var(--text-primary)] placeholder-[var(--text-secondary)] outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
          />
          <div className="flex gap-2 flex-wrap">
            <button
              onClick={() => setFilter('All')}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                filter === 'All'
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                  : 'glass text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              All
            </button>
            {allTechnologies.map(tech => (
              <button
                key={tech}
                onClick={() => setFilter(tech)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                  filter === tech
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                    : 'glass text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
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

        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-6xl mb-4">🔍</p>
            <p className="text-[var(--text-secondary)] text-lg">No projects found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  )
}