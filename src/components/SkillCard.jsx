import { motion } from 'framer-motion'

export default function SkillCard({ skill, index }) {
  const IconComponent = skill.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.03 }}
      className="surface-card rounded-lg p-4 flex items-center gap-3.5 group cursor-default"
    >
      <div className="text-xl text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors shrink-0">
        <IconComponent />
      </div>
      <div className="flex-1 min-w-0">
        <span className="text-xs font-semibold text-[var(--text-primary)] block truncate">
          {skill.name}
        </span>
      </div>
    </motion.div>
  )
}