import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import BackgroundGrid from '../components/BackgroundGrid'
import SkillCard from '../components/SkillCard'
import ProjectCard from '../components/ProjectCard'
import { skills } from '../data/skills'
import { projects } from '../data/projects'
import { FiArrowRight, FiTerminal, FiDatabase, FiLayout, FiCpu, FiFolder } from 'react-icons/fi'

export default function Home() {
  const featuredProjects = projects.slice(0, 3)

  return (
    <div className="relative min-h-screen pt-28 pb-24 px-4 sm:px-6 lg:px-8">
      <BackgroundGrid />

      <div className="max-w-7xl mx-auto">
        
        {/* Asymmetric Hero Section */}
        <section className="py-12 sm:py-20 lg:py-24 border-subtle-b">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
            
            {/* Left Column: Primary Focus on Name & Engineering Role */}
            <div className="lg:col-span-8 space-y-6">
              
              {/* Eyebrow badge */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded border-subtle bg-[var(--bg-surface)] text-[var(--text-muted)] font-mono text-xs uppercase tracking-widest"
              >
                <span>Full-Stack Engineering</span>
              </motion.div>

              {/* Name Prominently First */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="space-y-2"
              >
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[var(--text-primary)] leading-[1.05]">
                  Adnan Al-Qaba
                </h1>
                <p className="text-xl sm:text-2xl font-semibold text-[var(--text-secondary)] tracking-tight">
                  Full-Stack Web Developer & Computer Engineer
                </p>
              </motion.div>

              {/* Non-Generic Specific Technical Description */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="text-base sm:text-lg text-[var(--text-secondary)] max-w-2xl leading-relaxed font-normal"
              >
                Computer engineer building full-stack web platforms, custom database backends, and responsive user interfaces. 
                Focused on React architectures, Python REST services (Flask & Django), and database management with MySQL and SQLite.
              </motion.p>

              {/* Actions */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="flex flex-wrap items-center gap-4 pt-4"
              >
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded text-xs font-mono font-semibold uppercase tracking-wider bg-[var(--accent)] text-[var(--accent-foreground)] hover:opacity-90 transition-opacity"
                >
                  <span>Explore Projects</span>
                  <FiArrowRight />
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded text-xs font-mono font-semibold uppercase tracking-wider border-subtle bg-[var(--bg-surface)] text-[var(--text-primary)] hover:border-[var(--border-strong)] transition-all"
                >
                  <span>Get In Touch</span>
                </Link>
              </motion.div>
            </div>

            {/* Right Column: Architectural System Spec Panel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="lg:col-span-4 surface-card rounded-xl p-6 space-y-6"
            >
              <div className="flex items-center justify-between pb-4 border-subtle-b">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--text-secondary)]">
                  Developer Specs
                </span>
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
              </div>

              <div className="space-y-4 font-mono text-xs">
                <div>
                  <span className="text-[var(--text-muted)] block text-[10px] uppercase tracking-wider mb-1">Engineer</span>
                  <span className="text-[var(--text-primary)] font-medium">Adnan Al-Qaba</span>
                </div>

                <div>
                  <span className="text-[var(--text-muted)] block text-[10px] uppercase tracking-wider mb-1">Specialization</span>
                  <span className="text-[var(--text-secondary)]">Full-Stack Web Development & System Design</span>
                </div>

                <div>
                  <span className="text-[var(--text-muted)] block text-[10px] uppercase tracking-wider mb-1">Stack</span>
                  <span className="text-[var(--text-secondary)]">React, Flask, Django, Laravel, PHP, MySQL, SQLite</span>
                </div>
              </div>
            </motion.div>

          </div>
        </section>

        {/* Featured Projects Showcase */}
        <section className="py-20 border-subtle-b">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[var(--text-muted)] block mb-2">
                Selected Work
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)]">
                Featured Projects
              </h2>
            </div>

            <Link
              to="/projects"
              className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
            >
              <span>View Directory</span>
              <FiArrowRight />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}

            {/* 4th Card: See All Projects Link Card */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.15 }}
            >
              <Link
                to="/projects"
                className="surface-card rounded-xl p-6 h-full flex flex-col justify-between group border-dashed hover:border-[var(--border-strong)] transition-all bg-[var(--bg-subtle)]/40 min-h-[320px]"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded bg-[var(--bg-primary)] border-subtle font-mono text-[10px] uppercase tracking-wider text-[var(--text-muted)] flex items-center gap-1.5">
                      <FiFolder className="text-xs" />
                      <span>DIRECTORY</span>
                    </span>
                    <FiArrowRight className="text-base text-[var(--text-muted)] group-hover:text-[var(--text-primary)] group-hover:translate-x-1 transition-all" />
                  </div>

                  <div>
                    <h3 className="text-lg font-bold tracking-tight text-[var(--text-primary)] group-hover:text-emerald-500 transition-colors mb-2">
                      See All Projects
                    </h3>
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                      Browse full repository catalog including e-commerce platforms, exam tools, and voice recorders.
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-subtle-t flex items-center justify-between text-xs font-mono text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors">
                  <span>{projects.length} Total Modules</span>
                  <span className="font-semibold flex items-center gap-1">
                    <span>Explore</span>
                    <span>→</span>
                  </span>
                </div>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Technical Capability Matrix */}
        <section className="py-20">
          <div className="mb-12">
            <span className="font-mono text-xs uppercase tracking-widest text-[var(--text-muted)] block mb-2">
              Core Stack
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)]">
              Technologies & Tools
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            
            {/* Domain 1: Frontend */}
            <div className="surface-card rounded-xl p-5 space-y-4">
              <div className="flex items-center gap-2 text-[var(--text-secondary)]">
                <FiLayout className="text-base" />
                <span className="font-mono text-xs font-bold uppercase tracking-wider">Frontend Engine</span>
              </div>
              <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                Building responsive interfaces, state architectures, and SPAs.
              </p>
              <div className="flex flex-wrap gap-1.5 pt-2">
                <span className="px-2 py-0.5 rounded text-[10px] font-mono border-subtle bg-[var(--bg-subtle)] text-[var(--text-primary)]">React</span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono border-subtle bg-[var(--bg-subtle)] text-[var(--text-primary)]">JavaScript</span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono border-subtle bg-[var(--bg-subtle)] text-[var(--text-primary)]">HTML5 / CSS3</span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono border-subtle bg-[var(--bg-subtle)] text-[var(--text-primary)]">Tailwind</span>
              </div>
            </div>

            {/* Domain 2: Backend */}
            <div className="surface-card rounded-xl p-5 space-y-4">
              <div className="flex items-center gap-2 text-[var(--text-secondary)]">
                <FiTerminal className="text-base" />
                <span className="font-mono text-xs font-bold uppercase tracking-wider">Backend Systems</span>
              </div>
              <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                Designing REST APIs, business logic engines, and backend integrations.
              </p>
              <div className="flex flex-wrap gap-1.5 pt-2">
                <span className="px-2 py-0.5 rounded text-[10px] font-mono border-subtle bg-[var(--bg-subtle)] text-[var(--text-primary)]">Flask</span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono border-subtle bg-[var(--bg-subtle)] text-[var(--text-primary)]">Django</span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono border-subtle bg-[var(--bg-subtle)] text-[var(--text-primary)]">PHP</span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono border-subtle bg-[var(--bg-subtle)] text-[var(--text-primary)]">Laravel</span>
              </div>
            </div>

            {/* Domain 3: Databases */}
            <div className="surface-card rounded-xl p-5 space-y-4">
              <div className="flex items-center gap-2 text-[var(--text-secondary)]">
                <FiDatabase className="text-base" />
                <span className="font-mono text-xs font-bold uppercase tracking-wider">Data & Storage</span>
              </div>
              <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                Database schema design, relational queries, and ORM integrations.
              </p>
              <div className="flex flex-wrap gap-1.5 pt-2">
                <span className="px-2 py-0.5 rounded text-[10px] font-mono border-subtle bg-[var(--bg-subtle)] text-[var(--text-primary)]">MySQL</span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono border-subtle bg-[var(--bg-subtle)] text-[var(--text-primary)]">SQLite</span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono border-subtle bg-[var(--bg-subtle)] text-[var(--text-primary)]">Filament</span>
              </div>
            </div>

            {/* Domain 4: Core Engineering */}
            <div className="surface-card rounded-xl p-5 space-y-4">
              <div className="flex items-center gap-2 text-[var(--text-secondary)]">
                <FiCpu className="text-base" />
                <span className="font-mono text-xs font-bold uppercase tracking-wider">Core Tools</span>
              </div>
              <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                Development environments, version control, and system utilities.
              </p>
              <div className="flex flex-wrap gap-1.5 pt-2">
                <span className="px-2 py-0.5 rounded text-[10px] font-mono border-subtle bg-[var(--bg-subtle)] text-[var(--text-primary)]">Python</span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono border-subtle bg-[var(--bg-subtle)] text-[var(--text-primary)]">Git</span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono border-subtle bg-[var(--bg-subtle)] text-[var(--text-primary)]">Vite</span>
              </div>
            </div>

          </div>

          {/* Full Skills Badge Matrix */}
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