import { useState } from 'react'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'
import { FiSearch, FiX } from 'react-icons/fi'

const allTechnologies = ['All', ...new Set(projects.flatMap(p => p.technologies))]

export default function Projects() {
  const [filter, setFilter] = useState('All')
  const [search, setSearch] = useState('')

  const filteredProjects = projects.filter(project => {
    const matchesFilter = filter === 'All' || project.technologies.includes(filter)
    const matchesSearch = project.title.toLowerCase().includes(search.toLowerCase()) ||
                         project.description.toLowerCase().includes(search.toLowerCase()) ||
                         (project.category && project.category.toLowerCase().includes(search.toLowerCase()))
    return matchesFilter && matchesSearch
  })

  const clearFilters = () => {
    setFilter('All')
    setSearch('')
  }

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <header className="pb-10 border-subtle-b mb-10">
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[var(--text-primary)]">
            Projects & Case Studies
          </h1>
          <p className="text-base sm:text-lg text-[var(--text-secondary)] mt-2 max-w-2xl">
            Directory of web applications, custom API backends, and frontend interfaces.
          </p>
        </header>

        {/* Filter Toolbar */}
        <div className="space-y-4 mb-10">
          
          {/* Search Box */}
          <div className="relative max-w-md">
            <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--text-muted)] text-sm" />
            <input
              type="text"
              placeholder="Search by title, technology, or category..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-10 py-2 rounded-md text-sm bg-[var(--bg-surface)] border-subtle text-[var(--text-primary)] placeholder-[var(--text-muted)] outline-none focus:border-[var(--accent)] transition-colors"
              aria-label="Search projects"
            />
            {search && (
              <button
                onClick={() => setSearch('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                aria-label="Clear search"
              >
                <FiX className="text-sm" />
              </button>
            )}
          </div>

          {/* Technology Filter Tags */}
          <div className="flex items-center gap-1.5 flex-wrap" role="group" aria-label="Technology filter">
            {allTechnologies.map(tech => {
              const isActive = filter === tech
              return (
                <button
                  key={tech}
                  onClick={() => setFilter(tech)}
                  className={`px-3 py-1 rounded-md text-xs font-medium transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-[var(--accent)] text-[var(--accent-foreground)]'
                      : 'border-subtle bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-strong)]'
                  }`}
                  aria-pressed={isActive}
                >
                  {tech}
                </button>
              )
            })}
          </div>

        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Empty State (R-27) */}
        {filteredProjects.length === 0 && (
          <div className="surface-card rounded-lg p-12 text-center max-w-md mx-auto my-8 space-y-4">
            <h2 className="text-base font-semibold text-[var(--text-primary)]">
              No matching projects
            </h2>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              No projects match the search &quot;{search}&quot; with filter &quot;{filter}&quot;.
            </p>
            <button
              onClick={clearFilters}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-xs font-semibold bg-[var(--bg-subtle)] border-subtle text-[var(--text-primary)] hover:bg-[var(--border-color)] transition-colors cursor-pointer"
            >
              <span>Reset filters</span>
            </button>
          </div>
        )}

      </div>
    </div>
  )
}