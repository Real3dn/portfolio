import { motion } from 'framer-motion'
import SkillCard from '../components/SkillCard'
import { skills } from '../data/skills'
import BackgroundGrid from '../components/BackgroundGrid'
import { FiCheckCircle } from 'react-icons/fi'

const experience = [
  {
    period: '2026 — PRESENT',
    role: 'Full-Stack Developer',
    organization: 'Freelance & Independent Software',
    description: 'Engineering web applications, RESTful APIs, and custom database backends for client platforms using React, Flask, Django, and MySQL.',
  },
  {
    period: '2024 — 2025',
    role: 'Frontend Web Engineer',
    organization: 'Web Architecture & E-Commerce Labs',
    description: 'Designed and built e-commerce interfaces, custom React frontend design systems, and state management layers.',
  },
  {
    period: '2022 — 2024',
    role: 'Backend & Database Engineer',
    organization: 'API Systems & Services',
    description: 'Developed RESTful API architectures, database schemas, and backend service integrations using Flask, PHP, and MySQL.',
  },
  {
    period: '2021 — 2022',
    role: 'Junior Software Engineer',
    organization: 'Core Web Development',
    description: 'Started engineering path focused on web standards, JavaScript algorithms, and relational database basics.',
  },
]

const engineeringValues = [
  'Clean code architecture & modular file organization',
  'Type safety, explicit state management & predictable logic',
  'Minimalist UI with focus on typography and optical alignment',
  'Performance-first rendering and fast database queries',
]

export default function About() {
  return (
    <div className="relative min-h-screen pt-28 pb-24 px-4 sm:px-6 lg:px-8">
      <BackgroundGrid />

      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="pb-12 border-subtle-b mb-16"
        >
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[var(--text-muted)] mb-2">
            <span>Engineering Profile</span>
            <span>//</span>
            <span>Biography & Background</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--text-primary)]">
            About & Experience
          </h1>
        </motion.div>

        {/* Asymmetric 2-Column Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-24">
          
          {/* Bio & Philosophy (Left 5 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="lg:col-span-5 space-y-8"
          >
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[var(--text-muted)] block mb-3">
                Background
              </span>
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[var(--text-primary)] mb-4">
                Full-Stack Engineer based in Iraq
              </h2>
              <div className="space-y-4 text-sm text-[var(--text-secondary)] leading-relaxed">
                <p>
                  Computer engineer specialized in full-stack web development with deep interest in building modern web applications, robust APIs, and performant user interfaces.
                </p>
                <p>
                  Experienced across modern frontend frameworks like React and Vite as well as Python and PHP backend stacks (Flask, Django, Laravel, MySQL, SQLite).
                </p>
              </div>
            </div>

            {/* Core Values */}
            <div className="surface-card rounded-xl p-6 space-y-4">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--text-primary)] block">
                Engineering Values
              </span>
              <ul className="space-y-3">
                {engineeringValues.map((value, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-[var(--text-secondary)]">
                    <FiCheckCircle className="text-emerald-500 text-sm shrink-0 mt-0.5" />
                    <span>{value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Timeline / Changelog (Right 7 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="lg:col-span-7 space-y-8"
          >
            <span className="font-mono text-xs uppercase tracking-widest text-[var(--text-muted)] block">
              Experience & History Log
            </span>

            <div className="space-y-6">
              {experience.map((item, index) => (
                <div 
                  key={index}
                  className="surface-card rounded-xl p-6 relative group border-subtle hover:border-[var(--border-strong)] transition-all"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <span className="font-mono text-xs font-bold text-[var(--text-primary)]">
                      {item.role}
                    </span>
                    <span className="font-mono text-[10px] px-2 py-0.5 rounded border-subtle bg-[var(--bg-subtle)] text-[var(--text-muted)] w-fit">
                      {item.period}
                    </span>
                  </div>

                  <span className="font-mono text-xs text-[var(--text-muted)] block mb-3">
                    {item.organization}
                  </span>

                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

        {/* Technical Capability Grid */}
        <section className="pt-12 border-subtle-t">
          <div className="mb-8">
            <span className="font-mono text-xs uppercase tracking-widest text-[var(--text-muted)] block mb-2">
              Full Technology Index
            </span>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[var(--text-primary)]">
              Proficient Languages & Frameworks
            </h2>
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
