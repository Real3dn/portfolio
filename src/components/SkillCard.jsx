import { motion } from 'framer-motion'
import { useTheme } from '../hooks/useTheme'

export default function SkillCard({ skill, index }) {
  const { darkMode } = useTheme()
  const IconComponent = skill.icon
  
  // Adjust colors for dark/light mode
  const getIconColor = () => {
    // For dark backgrounds, some icons need to be lighter
    if (darkMode && ['Flask', 'JavaScript'].includes(skill.name)) {
      return '#ffffff'
    }
    return skill.color
  }

  return (
    <motion.div
      // initial={{ opacity: 0.5, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
      className="group glass rounded-xl p-6 text-center cursor-pointer transition-all duration-300 hover:shadow-xl relative overflow-hidden"
    >
      
      {/* Background glow on hover */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
        style={{ backgroundColor: skill.color }}
      />
      
      <div className="relative z-10">
        <div className="text-5xl mb-4 flex justify-center transition-transform duration-300 group-hover:scale-110">
          <IconComponent 
            style={{ color: getIconColor() }}
            className="transition-colors duration-300"
          />
        </div>
        <h4 className="font-medium text-sm text-[var(--text-primary)]">
          {skill.name}
        </h4>
        <div 
          className="mt-3 h-1 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
          style={{ background: `linear-gradient(to right, ${skill.color}, ${skill.color}88)` }}
        />
      </div>
    </motion.div>
  )
}