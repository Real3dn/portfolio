import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiTwitter, FiCopy, FiCheck } from 'react-icons/fi'
import { useState } from 'react'

const contactInfo = [
  {
    icon: <FiMail className="text-2xl" />,
    label: 'Email',
    value: 'realadnanosama@gmail.com',
    href: 'mailto:realadnanosama@gmail.com',
    copyable: true,
  },
  {
    icon: <FiPhone className="text-2xl" />,
    label: 'WhatsApp',
    value: '+(964) 771 637 9711',
    href: 'https://wa.me/9647716379711',
    copyable: true,
  },
  {
    icon: <FiMapPin className="text-2xl" />,
    label: 'Location',
    value: 'Iraq',
    href: null,
    copyable: false,
  },
]

const socialLinks = [
  { icon: <FiGithub />, label: 'GitHub', href: 'https://github.com/Real3dn' },
//   { icon: <FiLinkedin />, label: 'LinkedIn', href: 'https://linkedin.com/in/Real3dn' },
//   { icon: <FiTwitter />, label: 'Twitter', href: 'https://twitter.com/johndoe' },
]

export default function Contact() {
  const [copiedIndex, setCopiedIndex] = useState(null)

  const handleCopy = (text, index) => {
    navigator.clipboard.writeText(text)
    setCopiedIndex(index)
    setTimeout(() => setCopiedIndex(null), 2000)
  }

  return (
    <div className="pt-24 pb-20 px-4 min-h-screen flex items-center">
      <div className="max-w-4xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h1>
          <p className="text-[var(--text-secondary)] max-w-xl mx-auto text-lg">
            Have a project in mind? Let's work together to bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="glass rounded-2xl p-6 text-center relative group"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 flex items-center justify-center text-blue-500">
                {info.icon}
              </div>
              <h3 className="text-sm font-medium text-[var(--text-secondary)] mb-2">
                {info.label}
              </h3>
              {info.href ? (
                <a
                  href={info.href}
                  target={info.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="text-[var(--text-primary)] font-medium hover:text-blue-500 transition-colors"
                >
                  {info.value}
                </a>
              ) : (
                <p className="text-[var(--text-primary)] font-medium">{info.value}</p>
              )}
              {info.copyable && (
                <button
                  onClick={() => handleCopy(info.value, index)}
                  className="absolute top-4 right-4 p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity hover:bg-[var(--card-bg)]"
                  title="Copy to clipboard"
                >
                  {copiedIndex === index ? (
                    <FiCheck className="text-green-500" />
                  ) : (
                    <FiCopy className="text-[var(--text-secondary)]" />
                  )}
                </button>
              )}
            </motion.div>
          ))}
        </div>

        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 glass rounded-full px-6 py-3">
            <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm font-medium text-[var(--text-primary)]">
              Available for freelance projects
            </span>
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex justify-center gap-4"
        >
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="glass rounded-xl p-4 text-xl text-[var(--text-secondary)] hover:text-blue-500 hover:scale-110 transition-all duration-300"
              title={social.label}
            >
              {social.icon}
            </a>
          ))}
        </motion.div>
      </div>
    </div>
  )
}