import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, FileDown } from 'lucide-react'
import { profile } from '../data/portfolioData'

const CODE_LINES = [
  { text: 'const developer = {', indent: 0 },
  { text: 'name: "Adish",', indent: 1 },
  { text: 'role: "Computer Engineering Student",', indent: 1 },
  { text: 'passion: ["Web", "AI", "Software"],', indent: 1 },
  { text: 'goal: "Build meaningful technology"', indent: 1 },
  { text: '};', indent: 0 },
]

function useTypedLines(lines, { active, speed = 18, lineDelay = 220 } = {}) {
  const [renderedCount, setRenderedCount] = useState(0)
  const [charCount, setCharCount] = useState(0)

  useEffect(() => {
    if (!active) return
    if (renderedCount >= lines.length) return

    const full = lines[renderedCount].text
    if (charCount < full.length) {
      const t = setTimeout(() => setCharCount((c) => c + 1), speed)
      return () => clearTimeout(t)
    }
    const t = setTimeout(() => {
      setRenderedCount((c) => c + 1)
      setCharCount(0)
    }, lineDelay)
    return () => clearTimeout(t)
  }, [active, charCount, renderedCount, lines, speed, lineDelay])

  return { renderedCount, charCount }
}

function FloatingParticles() {
  const particles = useMemo(
    () =>
      Array.from({ length: 18 }).map((_, i) => ({
        id: i,
        size: 2 + Math.random() * 3,
        top: Math.random() * 100,
        left: Math.random() * 100,
        duration: 5 + Math.random() * 6,
        delay: Math.random() * 4,
        color: i % 3 === 0 ? '#8B7FFF' : '#4FD8FF',
      })),
    []
  )

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full"
          style={{
            top: `${p.top}%`,
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            boxShadow: `0 0 ${p.size * 3}px ${p.color}`,
            opacity: 0.5,
          }}
          animate={{ y: [0, -22, 0], opacity: [0.2, 0.7, 0.2] }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
    </div>
  )
}

export default function Hero() {
  const [typingActive, setTypingActive] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => setTypingActive(true), 500)
    return () => clearTimeout(t)
  }, [])

  const { renderedCount, charCount } = useTypedLines(CODE_LINES, { active: typingActive })

  const scrollTo = (href) => (e) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-16 sm:pt-32"
    >
      <div className="absolute inset-0 grid-overlay" />
      <FloatingParticles />
      <div className="absolute -left-40 top-20 h-72 w-72 rounded-full bg-violet/20 blur-[110px]" />
      <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-cyan/20 blur-[120px]" />

      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        {/* Left: copy */}
        <div>
          <motion.p
            className="eyebrow mb-5"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            available for internships &amp; collaborations
          </motion.p>

          <motion.h1
            className="font-display text-4xl font-semibold leading-[1.08] tracking-tight text-paper sm:text-5xl md:text-6xl"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Hi, I'm Adish <span className="inline-block animate-[float_2.5s_ease-in-out_infinite]">👋</span>
          </motion.h1>

          <motion.h2
            className="mt-3 font-display text-xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-cyan via-cyan-soft to-violet sm:text-2xl md:text-3xl"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {profile.role} &amp; {profile.roleSecondary}
          </motion.h2>

          <motion.p
            className="mt-6 max-w-lg text-base leading-relaxed text-mute sm:text-lg"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            className="mt-9 flex flex-wrap items-center gap-4"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <a
              href="#projects"
              onClick={scrollTo('#projects')}
              className="group relative overflow-hidden rounded-xl bg-cyan px-6 py-3 font-medium text-ink-950 transition-transform hover:-translate-y-0.5"
            >
              <span className="relative z-10">View My Projects</span>
              <span className="absolute inset-0 -z-0 translate-y-full bg-cyan-soft transition-transform duration-300 group-hover:translate-y-0" />
            </a>
            <a
              href="#contact"
              onClick={scrollTo('#contact')}
              className="rounded-xl border border-white/15 px-6 py-3 font-medium text-paper transition-colors hover:border-cyan/40 hover:bg-white/[0.04]"
            >
              Contact Me
            </a>
          </motion.div>

          <motion.div
            className="mt-6 flex flex-wrap items-center gap-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <a
              href={profile.resumeUrl}
              download
              className="inline-flex items-center gap-1.5 font-mono text-sm text-mute underline decoration-white/20 underline-offset-4 transition-colors hover:text-cyan hover:decoration-cyan/50"
            >
              <FileDown size={14} /> Download Resume
            </a>
            <div className="h-4 w-px bg-white/10" />
            <a
              href={profile.social.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-mute transition-colors hover:text-cyan"
            >
              <Github size={18} />
            </a>
            <a
              href={profile.social.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-mute transition-colors hover:text-cyan"
            >
              <Linkedin size={18} />
            </a>
          </motion.div>
        </div>

        {/* Right: animated code window */}
        <motion.div
          className="relative mx-auto w-full max-w-md lg:max-w-none"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-br from-cyan/10 via-transparent to-violet/10 blur-2xl" />
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-ink-800/80 shadow-card backdrop-blur-xl">
            <div className="flex items-center gap-2 border-b border-white/5 bg-ink-700/60 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-[#FF5F56]" />
              <span className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
              <span className="h-3 w-3 rounded-full bg-[#27C93F]" />
              <span className="ml-3 font-mono text-xs text-mute">developer.js</span>
            </div>
            <div className="min-h-[260px] px-5 py-6 font-mono text-[13px] leading-7 sm:text-sm">
              {CODE_LINES.map((line, i) => {
                const isRendered = i < renderedCount
                const isCurrent = i === renderedCount
                const text = isRendered ? line.text : isCurrent ? line.text.slice(0, charCount) : ''
                if (!isRendered && !isCurrent) return <div key={i} className="h-7" />
                return (
                  <div key={i} style={{ paddingLeft: `${line.indent * 1.25}rem` }}>
                    <SyntaxLine text={text} />
                    {isCurrent && charCount < line.text.length && (
                      <span className="animate-blink text-cyan">▍</span>
                    )}
                  </div>
                )
              })}
            </div>
          </div>

          {/* Decorative floating badges */}
          <motion.div
            className="absolute -right-4 -top-4 hidden rounded-xl border border-white/10 bg-ink-800/90 px-3 py-2 font-mono text-xs text-cyan shadow-glow sm:block"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          >
            {'<Engineer />'}
          </motion.div>
          <motion.div
            className="absolute -bottom-5 -left-5 hidden rounded-xl border border-white/10 bg-ink-800/90 px-3 py-2 font-mono text-xs text-violet-soft shadow-glow-violet sm:block"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          >
            building_ideas.py
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        onClick={scrollTo('#about')}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-mute sm:flex"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        aria-label="Scroll to About section"
      >
        <span className="font-mono text-[11px] tracking-widest">SCROLL</span>
        <ArrowDown size={16} />
      </motion.a>
    </section>
  )
}

// Very small syntax highlighter tuned specifically for the six lines above —
// keeps the "code window" visual without pulling in a full highlighter lib.
function SyntaxLine({ text }) {
  const keywordMatch = text.match(/^(const)\s/)
  if (keywordMatch) {
    return (
      <span>
        <span className="text-violet-soft">const</span>
        <span className="text-paper">{text.slice(5)}</span>
      </span>
    )
  }
  if (text.trim() === '};' || text.trim() === '{') {
    return <span className="text-paper">{text}</span>
  }
  const propMatch = text.match(/^([a-zA-Z]+):\s*(.*)$/)
  if (propMatch) {
    const [, key, rest] = propMatch
    return (
      <span>
        <span className="text-cyan-soft">{key}</span>
        <span className="text-paper">: </span>
        <span className="text-[#C3E88D]">{rest}</span>
      </span>
    )
  }
  return <span className="text-paper">{text}</span>
}
