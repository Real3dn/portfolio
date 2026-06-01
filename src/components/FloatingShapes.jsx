import { motion } from 'framer-motion'

const shapes = [
  { type: 'circle', size: 60, x: '10%', y: '20%', delay: 0, duration: 20, color: 'from-blue-400/20 to-blue-600/10' },
  { type: 'square', size: 40, x: '80%', y: '60%', delay: 2, duration: 25, color: 'from-purple-400/20 to-purple-600/10' },
  { type: 'triangle', size: 50, x: '20%', y: '70%', delay: 4, duration: 22, color: 'from-cyan-400/20 to-cyan-600/10' },
  { type: 'circle', size: 30, x: '70%', y: '30%', delay: 1, duration: 18, color: 'from-pink-400/20 to-pink-600/10' },
  { type: 'square', size: 45, x: '50%', y: '10%', delay: 3, duration: 28, color: 'from-indigo-400/20 to-indigo-600/10' },
  { type: 'triangle', size: 35, x: '90%', y: '80%', delay: 5, duration: 24, color: 'from-teal-400/20 to-teal-600/10' },
  { type: 'circle', size: 25, x: '40%', y: '50%', delay: 2.5, duration: 21, color: 'from-blue-400/20 to-purple-600/10' },
  { type: 'square', size: 55, x: '15%', y: '40%', delay: 3.5, duration: 26, color: 'from-cyan-400/20 to-blue-600/10' },
]

function Shape({ type, size, x, y, delay, duration, color }) {
  const shapeElement = () => {
    switch (type) {
      case 'circle':
        return <div className={`w-full h-full rounded-full bg-gradient-to-br ${color}`} />
      case 'square':
        return <div className={`w-full h-full rounded-2xl bg-gradient-to-br ${color}`} />
      case 'triangle':
        return (
          <div
            className={`w-full h-full bg-gradient-to-br ${color}`}
            style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}
          />
        )
    }
  }

  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{ left: x, top: y, width: size, height: size }}
      animate={{
        y: [0, -30, 20, -10, 0],
        x: [0, 20, -15, 10, 0],
        rotate: [0, 10, -10, 5, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      {shapeElement()}
    </motion.div>
  )
}

export default function FloatingShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {shapes.map((shape, index) => (
        <Shape key={index} {...shape} />
      ))}
    </div>
  )
}