import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import ProjectCard from '../components/ProjectCard'
import SkillCard from '../components/SkillCard'
import { skills } from '../data/skills'
import { projects } from '../data/projects'
import { FiArrowRight, FiTerminal, FiDatabase, FiCode, FiLayers } from 'react-icons/fi'

export default function Home() {
  const featuredProjects = projects.slice(0, 4)

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Editorial Hero Section */}
        <section className="py-12 sm:py-16 lg:py-20 border-subtle-b">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            
            {/* Left Narrative Column */}
            <div className="lg:col-span-8 space-y-6">
              <div className="space-y-3">
                <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-[var(--text-primary)] leading-[1.08]">
                  Adnan Al-Qaba
                </h1>
                <p className="text-xl sm:text-2xl font-medium text-[var(--text-secondary)] tracking-tight">
                  Computer Engineer & Full-Stack Web Developer
                </p>
              </div>

              <p className="text-base sm:text-lg text-[var(--text-secondary)] max-w-2xl leading-relaxed">
                I build reliable web applications, relational database architectures, and responsive user interfaces. 
                My focus spans React on the client, Python services with Flask and Django on the backend, and relational database modeling with MySQL and SQLite.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-sm font-semibold bg-[var(--accent)] text-[var(--accent-foreground)] hover:opacity-90 transition-opacity"
                >
                  <span>View Projects</span>
                  <FiArrowRight />
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-sm font-medium border-subtle bg-[var(--bg-surface)] text-[var(--text-primary)] hover:border-[var(--border-strong)] transition-colors"
                >
                  <span>Contact Me</span>
                </Link>
              </div>
            </div>

            {/* Right Summary Column */}
            <div className="lg:col-span-4 surface-card rounded-lg p-6 space-y-5">
              <h2 className="text-xs font-mono font-semibold uppercase tracking-wider text-[var(--text-muted)]">
                Focus Areas
              </h2>

              <ul className="space-y-3.5 text-xs text-[var(--text-secondary)]">
                <li className="flex items-start gap-2.5">
                  <FiCode className="text-[var(--accent)] shrink-0 mt-0.5 text-sm" />
                  <span>
                    <strong className="text-[var(--text-primary)] font-semibold block">Frontend Architecture</strong>
                    Single-page applications and modular component systems with React and modern JavaScript.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <FiTerminal className="text-[var(--accent)] shrink-0 mt-0.5 text-sm" />
                  <span>
                    <strong className="text-[var(--text-primary)] font-semibold block">Backend & APIs</strong>
                    RESTful services, authentication, and logic layers in Python (Flask & Django) and PHP.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <FiDatabase className="text-[var(--accent)] shrink-0 mt-0.5 text-sm" />
                  <span>
                    <strong className="text-[var(--text-primary)] font-semibold block">Database Systems</strong>
                    Relational schema design, normalization, and optimization with MySQL and SQLite.
                  </span>
                </li>
              </ul>
            </div>

          </div>
        </section>

        {/* Selected Projects */}
        <section className="py-16 border-subtle-b">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-10 gap-3">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-[var(--text-primary)]">
                Selected Projects
              </h2>
              <p className="text-sm text-[var(--text-secondary)] mt-1">
                Recent full-stack platforms and technical software systems.
              </p>
            </div>

            <Link
              to="/projects"
              className="inline-flex items-center gap-1 text-sm font-medium text-[var(--accent)] hover:underline"
            >
              <span>All projects ({projects.length})</span>
              <FiArrowRight className="text-xs" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </section>

        {/* Technical Stack */}
        <section className="py-16">
          <div className="mb-8">
            <h2 className="text-2xl font-bold tracking-tight text-[var(--text-primary)]">
              Technologies & Languages
            </h2>
            <p className="text-sm text-[var(--text-secondary)] mt-1">
              Tools and languages utilized across production and personal projects.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {skills.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </section>

      </div>
    </div>
  )
}