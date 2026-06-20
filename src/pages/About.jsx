import { motion } from 'framer-motion'
import SkillCard from '../components/SkillCard'
import { skills } from '../data/skills'

const experience = [
  {
    year: '2026 - Present',
    title: 'Full Stack Developer',
    company: 'Freelance.',
    description: 'Built and maintained multiple client projects using React, Flask, Laravel, and MySQL.',
  },
  {
    year: '2024 - 2025',
    title: 'Frontend Developer',
    // company: 'WebCraft Agency',
    description: 'Developed E-Commerce front websites and my own portfolio.',
  },
  {
    year: '2022 - 2024',
    title: 'Backend Developer',
    // company: 'WebCraft Agency',
    description: 'Developed RESTful APIs and databases for various web applications.',
  },
  {
    year: '2021 - 2022',
    title: 'Junior Developer',
    // company: 'StartUp Hub',
    description: 'Started career building websites and learning modern web technologies.',
  },
]

export default function About() {
  return (
    <div className="pt-24 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 p-1">
            <div className="w-full h-full rounded-full bg-[var(--bg-primary)] flex items-center justify-center text-4xl">
              👨‍💻
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-4">Who I Am</h2>
            <div className="space-y-4 text-[var(--text-secondary)]">
              <p>
                I'm a computer engineer specialized in full-stack web developer with experience of 
                building modern web applications.
              </p>
              <p>
                I enjoy coding.
              </p>
              <p>
              </p>
            </div>
          </motion.div>

          {/* Experience Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold mb-6">Experience</h2>
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="glass rounded-xl p-4 relative pl-8"
                >
                  <div className="absolute left-3 top-6 w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
                  <span className="text-xs font-medium text-blue-500">{exp.year}</span>
                  <h3 className="font-semibold text-[var(--text-primary)] mt-1">{exp.title}</h3>
                  <p className="text-sm text-[var(--text-secondary)]">{exp.company}</p>
                  <p className="text-sm text-[var(--text-secondary)] mt-2">{exp.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl font-bold mb-8">Technologies & Tools</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {skills.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
