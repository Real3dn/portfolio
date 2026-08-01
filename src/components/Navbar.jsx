import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '../hooks/useTheme'
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi'

const navLinks = [
  { path: '/', label: 'Overview', code: '01' },
  { path: '/projects', label: 'Projects', code: '02' },
  { path: '/about', label: 'About', code: '03' },
  { path: '/contact', label: 'Contact', code: '04' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { darkMode, toggleTheme } = useTheme()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 border-subtle-b ${
        scrolled 
          ? 'bg-[var(--bg-primary)]/85 backdrop-blur-md shadow-sm' 
          : 'bg-[var(--bg-primary)]/50 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          
          {/* Logo & Status */}
          <Link to="/" className="flex items-center gap-3 group">
            <span className="font-mono text-3xl font-bold uppercase tracking-wider text-[var(--text-primary)] group-hover:text-neutral-700 transition-colors">
              Real3dn
            </span>
            <span className="hidden sm:inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-mono border-subtle bg-[var(--bg-subtle)] text-[var(--text-muted)]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-xs font-medium tracking-tight transition-colors flex items-center gap-1.5 ${
                    isActive
                      ? 'text-[var(--text-primary)] font-semibold'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                  }`}
                >
                  <span className="font-mono text-[10px] text-[var(--text-muted)]">{link.code}.</span>
                  <span>{link.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute -bottom-[21px] left-0 right-0 h-[2px] bg-[var(--text-primary)]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              )
            })}

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded border-subtle bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-strong)] transition-all"
              aria-label="Toggle theme"
            >
              {darkMode ? <FiSun className="text-sm" /> : <FiMoon className="text-sm" />}
            </button>
          </nav>

          {/* Mobile Buttons */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded border-subtle bg-[var(--bg-surface)] text-[var(--text-secondary)]"
              aria-label="Toggle theme"
            >
              {darkMode ? <FiSun className="text-sm" /> : <FiMoon className="text-sm" />}
            </button>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded border-subtle bg-[var(--bg-surface)] text-[var(--text-primary)]"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <FiX className="text-base" /> : <FiMenu className="text-base" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-subtle-b bg-[var(--bg-surface)]"
          >
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center justify-between px-3 py-2.5 rounded text-xs font-mono tracking-wide ${
                    location.pathname === link.path
                      ? 'bg-[var(--bg-subtle)] text-[var(--text-primary)] font-bold'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                  }`}
                >
                  <span>{link.label}</span>
                  <span className="text-[var(--text-muted)]">{link.code}</span>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
