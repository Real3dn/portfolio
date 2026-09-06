import SkillCard from '../components/SkillCard'
import { skills } from '../data/skills'
import { FiCheckCircle } from 'react-icons/fi'

const experience = [
  {
    period: '2026 - Present',
    role: 'Full-Stack Developer',
    organization: 'Independent & Client Projects',
    description: 'Developing full-stack web applications, REST APIs, and database schemas with React, Python (Flask and Django), and MySQL.',
  },
  {
    period: '2024 - 2025',
    role: 'Web Application Developer',
    organization: 'Web Platforms & Client Projects',
    description: 'Built customer-facing interfaces, responsive layouts, and state workflows using React, JavaScript, and Tailwind CSS.',
  },
  {
    period: '2022 - 2024',
    role: 'Backend & Database Systems',
    organization: 'API & Service Development',
    description: 'Designed relational database schemas, structured SQL queries, and integrated backend endpoints with Python and PHP.',
  },
  {
    period: '2021 - 2022',
    role: 'Computer Engineering Foundation',
    organization: 'Undergraduate Studies & Systems',
    description: 'Studied algorithms, computer architecture, data structures, and relational database foundations.',
  },
]


export default function About() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <header className="pb-10 border-subtle-b mb-12">
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[var(--text-primary)]">
            About & Experience
          </h1>
          <p className="text-base sm:text-lg text-[var(--text-secondary)] mt-2 max-w-2xl">
            Background, technical values, and experience timeline.
          </p>
        </header>

        {/* 2-Column Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          
          {/* Bio & Focus (Left 5 Cols) */}
          <div className="lg:col-span-5 space-y-8">
            <section className="space-y-4">
              <h2 className="text-lg font-bold tracking-tight text-[var(--text-primary)]">
                Background
              </h2>
              <div className="space-y-3.5 text-sm text-[var(--text-secondary)] leading-relaxed">
                <p>
                  I am a computer engineer and full-stack developer based in Iraq. My work centers on constructing dependable web applications and data-driven systems.
                </p>
                <p>
                  My toolkit combines modern component architecture on the frontend with React and Vite, paired with Python backend services using Flask and Django, as well as PHP and Laravel.
                </p>
                <p>
                  Whether structuring a bilingual restaurant platform with dual currency or designing a relational schema for scheduling events, I prioritize predictable data flow and clear interfaces.
                </p>
              </div>
            </section>


          </div>

          {/* Timeline (Right 7 Cols) */}
          <section className="lg:col-span-7 space-y-6">
            <h2 className="text-xs font-mono font-semibold uppercase tracking-wider text-[var(--text-muted)]">
              Experience & Background Timeline
            </h2>

            <div className="space-y-4">
              {experience.map((item) => (
                <article 
                  key={item.period + item.role}
                  className="surface-card rounded-lg p-5 border-subtle"
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
                    <h3 className="text-sm font-bold text-[var(--text-primary)]">
                      {item.role}
                    </h3>
                    <span className="text-xs font-mono text-[var(--text-muted)]">
                      {item.period}
                    </span>
                  </div>

                  <span className="text-xs text-[var(--text-secondary)] block mb-2 font-medium">
                    {item.organization}
                  </span>

                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </section>

        </div>

        {/* Technical Capability Grid */}
        <section className="pt-12 border-subtle-t">
          <div className="mb-6">
            <h2 className="text-xl font-bold tracking-tight text-[var(--text-primary)]">
              Proficient Languages & Frameworks
            </h2>
            <p className="text-xs text-[var(--text-muted)] mt-1">
              Complete index of languages, databases, and development tooling.
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
