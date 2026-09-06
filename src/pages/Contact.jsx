import { useState } from 'react'
import { FiMail, FiPhone, FiMapPin, FiGithub, FiCopy, FiCheck, FiArrowUpRight } from 'react-icons/fi'

const contactMethods = [
  {
    icon: <FiMail className="text-lg" />,
    title: 'Email',
    value: 'realadnanosama@gmail.com',
    href: 'mailto:realadnanosama@gmail.com',
    copyable: true,
    actionLabel: 'Send email',
  },
  {
    icon: <FiPhone className="text-lg" />,
    title: 'WhatsApp / Mobile',
    value: '+964 771 637 9711',
    href: 'https://wa.me/9647716379711',
    copyable: true,
    actionLabel: 'Open WhatsApp',
  },
  {
    icon: <FiMapPin className="text-lg" />,
    title: 'Location',
    value: 'Iraq (UTC+3)',
    href: null,
    copyable: false,
    actionLabel: null,
  },
]

export default function Contact() {
  const [copiedValue, setCopiedValue] = useState(null)

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text)
    setCopiedValue(text)
    setTimeout(() => setCopiedValue(null), 2000)
  }

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <header className="pb-10 border-subtle-b mb-12">
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[var(--text-primary)]">
            Contact
          </h1>
          <p className="text-base sm:text-lg text-[var(--text-secondary)] mt-2 max-w-xl">
            Reach out regarding software engineering roles, web application contracts, or technical inquiries.
          </p>
        </header>

        {/* Contact Methods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contactMethods.map((method) => (
            <div
              key={method.title}
              className="surface-card rounded-lg p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-[var(--text-secondary)]" aria-hidden="true">
                    {method.icon}
                  </div>

                  {method.copyable && (
                    <button
                      onClick={() => handleCopy(method.value)}
                      className="p-1.5 rounded border-subtle bg-[var(--bg-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors cursor-pointer"
                      title={`Copy ${method.title}`}
                      aria-label={`Copy ${method.title}`}
                    >
                      {copiedValue === method.value ? (
                        <FiCheck className="text-emerald-600 dark:text-emerald-400 text-xs" />
                      ) : (
                        <FiCopy className="text-xs" />
                      )}
                    </button>
                  )}
                </div>

                <span className="text-xs font-mono text-[var(--text-muted)] block mb-1">
                  {method.title}
                </span>

                <div className="text-sm font-semibold text-[var(--text-primary)]">
                  {method.href ? (
                    <a
                      href={method.href}
                      target={method.href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="hover:text-[var(--accent)] transition-colors break-all inline-flex items-center gap-1"
                    >
                      <span>{method.value}</span>
                      <FiArrowUpRight className="text-xs shrink-0" />
                    </a>
                  ) : (
                    <span>{method.value}</span>
                  )}
                </div>
              </div>

              {/* Screen reader notification for copy status */}
              <div className="sr-only" aria-live="polite">
                {copiedValue === method.value ? `Copied ${method.title} to clipboard` : ''}
              </div>
            </div>
          ))}
        </div>

        {/* Source Code / GitHub */}
        <section className="surface-card rounded-lg p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <h2 className="text-sm font-semibold text-[var(--text-primary)]">
              GitHub Repositories
            </h2>
            <p className="text-xs text-[var(--text-secondary)]">
              Browse public source code repositories, commits, and personal software projects.
            </p>
          </div>

          <a
            href="https://github.com/Real3dn"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-xs font-semibold border-subtle bg-[var(--bg-subtle)] text-[var(--text-primary)] hover:border-[var(--border-strong)] transition-colors w-fit"
          >
            <FiGithub className="text-sm" />
            <span>github.com/Real3dn</span>
            <FiArrowUpRight className="text-xs" />
          </a>
        </section>

      </div>
    </div>
  )
}
