import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { navLinks, profile } from '../data/portfolioData'
import useActiveSection from '../hooks/useActiveSection'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const activeId = useActiveSection(navLinks.map((l) => l.href))

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll while mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      window.history.replaceState(null, '', href)
    }
  }

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? 'py-2' : 'py-4'
        }`}
      >
        <div
          className={`mx-auto flex max-w-6xl items-center justify-between rounded-2xl border px-5 transition-all duration-300 sm:px-6 ${
            scrolled
              ? 'border-white/10 bg-ink-900/70 py-2.5 shadow-card backdrop-blur-xl'
              : 'border-transparent bg-transparent py-3'
          }`}
          style={{ marginLeft: scrolled ? '1rem' : '0', marginRight: scrolled ? '1rem' : '0' }}
        >
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="font-display text-lg font-semibold tracking-[0.15em] text-paper"
          >
            ADISH<span className="text-cyan">.</span>
          </a>

          <nav className="hidden md:block" aria-label="Primary">
            <ul className="flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = activeId === link.href
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={`relative rounded-lg px-3.5 py-2 font-mono text-[13px] tracking-wide transition-colors ${
                        isActive ? 'text-paper' : 'text-mute hover:text-paper'
                      }`}
                    >
                      {link.label}
                      {isActive && (
                        <motion.span
                          layoutId="nav-active-pill"
                          className="absolute inset-0 -z-10 rounded-lg bg-white/[0.06] ring-1 ring-cyan/30"
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}
                    </a>
                  </li>
                )
              })}
            </ul>
          </nav>

          <a
            href={profile.resumeUrl}
            download
            className="hidden items-center gap-2 rounded-lg border border-cyan/30 bg-cyan/[0.06] px-4 py-2 font-mono text-[13px] text-cyan transition-colors hover:bg-cyan/[0.12] md:flex"
          >
            Resume
          </a>

          <button
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-paper md:hidden"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col bg-ink-950/98 pt-24 backdrop-blur-xl md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <nav aria-label="Mobile" className="flex flex-1 flex-col items-center justify-center gap-2">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="font-display text-2xl text-paper/90 py-3"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.3 }}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href={profile.resumeUrl}
                download
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * navLinks.length, duration: 0.3 }}
                className="mt-6 rounded-lg border border-cyan/30 bg-cyan/[0.06] px-5 py-2.5 font-mono text-sm text-cyan"
              >
                Download Resume
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
