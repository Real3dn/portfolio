import { motion } from 'framer-motion'

export default function SkillCard({ skill, index }) {
  const IconComponent = skill.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.25, delay: Math.min(index * 0.02, 0.15) }}
      className="surface-card rounded-md p-3 flex items-center gap-3"
    >
      <div className="text-lg text-[var(--text-secondary)] shrink-0" aria-hidden="true">
        {IconComponent && <IconComponent />}
      </div>
      <div className="min-w-0">
        <span className="text-xs font-medium text-[var(--text-primary)] block truncate">
          {skill.name}
        </span>
        {skill.category && (
          <span className="text-[10px] text-[var(--text-muted)] font-mono block">
            {skill.category}
          </span>
        )}
      </div>
    </motion.div>
  )
}