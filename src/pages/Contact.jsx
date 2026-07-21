import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiGithub, FiCopy, FiCheck, FiArrowUpRight } from 'react-icons/fi'
import { useState } from 'react'
import BackgroundGrid from '../components/BackgroundGrid'

const contactInfo = [
  {
    icon: <FiMail className="text-base" />,
    label: 'Direct Email',
    value: 'realadnanosama@gmail.com',
    href: 'mailto:realadnanosama@gmail.com',
    copyable: true,
  },
  {
    icon: <FiPhone className="text-base" />,
    label: 'WhatsApp / Mobile',
    value: '+(964) 771 637 9711',
    href: 'https://wa.me/9647716379711',
    copyable: true,
  },
  {
    icon: <FiMapPin className="text-base" />,
    label: 'Location Base',
    value: 'Iraq (UTC+3)',
    href: null,
    copyable: false,
  },
]

const socialLinks = [
  { icon: <FiGithub />, label: 'GitHub Profile', href: 'https://github.com/Real3dn' },
]

export default function Contact() {
  const [copiedIndex, setCopiedIndex] = useState(null)

  const handleCopy = (text, index) => {
    navigator.clipboard.writeText(text)
    setCopiedIndex(index)
    setTimeout(() => setCopiedIndex(null), 2000)
  }

  return (
    <div className="relative min-h-screen pt-28 pb-24 px-4 sm:px-6 lg:px-8">
      <BackgroundGrid />

      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="pb-12 border-subtle-b mb-12"
        >
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[var(--text-muted)] mb-2">
            <span>Communication</span>
            <span>//</span>
            <span>Direct Inquiries</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--text-primary)]">
            Get In Touch
          </h1>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] mt-3 max-w-xl font-normal">
            Available for software engineering roles, technical freelance contracts, and custom web application projects.
          </p>
        </motion.div>

        {/* System Availability Status */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="surface-card rounded-xl p-4 mb-12 flex items-center justify-between gap-4"
        >
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0" />
            <span className="font-mono text-xs font-semibold text-[var(--text-primary)]">
              Status: Open to new projects & roles
            </span>
          </div>
          <span className="font-mono text-[10px] text-[var(--text-muted)] uppercase tracking-wider hidden sm:inline">
            Response time &lt; 24h
          </span>
        </motion.div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 + index * 0.05 }}
              className="surface-card rounded-xl p-6 relative group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 rounded bg-[var(--bg-subtle)] border-subtle text-[var(--text-secondary)]">
                    {info.icon}
                  </div>

                  {info.copyable && (
                    <button
                      onClick={() => handleCopy(info.value, index)}
                      className="p-1.5 rounded border-subtle bg-[var(--bg-subtle)] text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
                      title="Copy to clipboard"
                    >
                      {copiedIndex === index ? (
                        <FiCheck className="text-emerald-500 text-xs" />
                      ) : (
                        <FiCopy className="text-xs" />
                      )}
                    </button>
                  )}
                </div>

                <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--text-muted)] block mb-1">
                  {info.label}
                </span>

                {info.href ? (
                  <a
                    href={info.href}
                    target={info.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm font-semibold font-mono text-[var(--text-primary)] hover:text-[var(--text-secondary)] transition-colors break-all inline-flex items-center gap-1"
                  >
                    <span>{info.value}</span>
                    <FiArrowUpRight className="text-xs shrink-0" />
                  </a>
                ) : (
                  <span className="text-xs sm:text-sm font-semibold font-mono text-[var(--text-primary)]">
                    {info.value}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Social Profile Links */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="surface-card rounded-xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
        >
          <div>
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--text-primary)] block">
              Version Control & Source Code
            </span>
            <span className="text-xs text-[var(--text-secondary)] font-mono">
              Inspect open-source repositories and contributions.
            </span>
          </div>

          <div className="flex items-center gap-3">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded text-xs font-mono font-semibold border-subtle bg-[var(--bg-subtle)] text-[var(--text-primary)] hover:border-[var(--border-strong)] transition-all"
              >
                {social.icon}
                <span>{social.label}</span>
                <FiArrowUpRight />
              </a>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  )
}
