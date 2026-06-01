import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import FloatingShapes from '../components/FloatingShapes'
import SkillCard from '../components/SkillCard'
import ProjectCard from '../components/ProjectCard'
import { skills } from '../data/skills'
import { projects } from '../data/projects'

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <FloatingShapes />
        
        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-sm font-medium text-blue-500 mb-4 tracking-widest uppercase"
            >
              Welcome to my portfolio
            </motion.p>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6"
            >
              Hi, I am{' '}
              <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
                Adnan Al-Qaba
              </span>
            </motion.h1>
            
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-2xl sm:text-3xl font-semibold text-[var(--text-secondary)] mb-4"
            >
              Web Developer
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto mb-8"
            >
              Frontend & Backend Developer. Experienced in building modern web applications, 
              admin dashboards, and e-commerce platforms.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex gap-4 justify-center"
            >
              <Link
                to="/projects"
                className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
              >
                View My Work
              </Link>
              <Link
                to="/contact"
                className="px-8 py-3 rounded-full border border-[var(--card-border)] text-[var(--text-primary)] font-medium hover:bg-[var(--card-bg)] transition-all duration-300"
              >
                Get In Touch
              </Link>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-[var(--text-secondary)] flex justify-center">
            <div className="w-1.5 h-3 rounded-full bg-[var(--text-secondary)] mt-2 animate-pulse" />
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4" id="skills">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Technologies I Use
              </span>
            </h2>
            <p className="text-[var(--text-secondary)] max-w-xl mx-auto">
              I work with modern technologies to build scalable and performant applications.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {skills.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 px-4 bg-[var(--bg-secondary)]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <p className="text-[var(--text-secondary)] max-w-xl mx-auto">
              Here are some of my recent works that showcase my skills and experience.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.slice(0, 3).map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
            >
              View All Projects
              <span className="text-lg">→</span>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}