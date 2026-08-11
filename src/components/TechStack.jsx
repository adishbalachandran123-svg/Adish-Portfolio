import { motion } from 'framer-motion'
import { techStack } from '../data/portfolioData'

// Short monogram + accent color per technology — avoids pulling in brand
// logo assets while still giving each item a distinct visual identity.
const TECH_META = {
  Python: { tag: 'PY', color: '#4FD8FF' },
  Java: { tag: 'JV', color: '#8B7FFF' },
  C: { tag: 'C', color: '#4FD8FF' },
  JavaScript: { tag: 'JS', color: '#F7DF6B' },
  HTML: { tag: 'HTML', color: '#FF7A59' },
  CSS: { tag: 'CSS', color: '#4FD8FF' },
  Django: { tag: 'DJ', color: '#4FBF75' },
  MySQL: { tag: 'SQL', color: '#8B7FFF' },
  Git: { tag: 'GIT', color: '#FF7A59' },
  GitHub: { tag: 'GH', color: '#E9EDF5' },
  NumPy: { tag: 'NP', color: '#4FD8FF' },
  Pandas: { tag: 'PD', color: '#8B7FFF' },
  Matplotlib: { tag: 'MPL', color: '#4FD8FF' },
  'Machine Learning': { tag: 'ML', color: '#8B7FFF' },
  'Deep Learning': { tag: 'DL', color: '#4FD8FF' },
}

function TechPill({ name }) {
  const meta = TECH_META[name] ?? { tag: name.slice(0, 2).toUpperCase(), color: '#4FD8FF' }
  return (
    <div className="mx-2.5 flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2.5 whitespace-nowrap">
      <span
        className="flex h-6 w-6 items-center justify-center rounded-md font-mono text-[9px] font-semibold"
        style={{ backgroundColor: `${meta.color}1A`, color: meta.color }}
      >
        {meta.tag}
      </span>
      <span className="font-mono text-xs text-paper/80">{name}</span>
    </div>
  )
}

export default function TechStack() {
  const row1 = techStack.slice(0, Math.ceil(techStack.length / 2))
  const row2 = techStack.slice(Math.ceil(techStack.length / 2))

  return (
    <section id="tech-stack" className="relative overflow-hidden py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.p
          className="eyebrow text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5 }}
        >
          tech stack
        </motion.p>
        <motion.h2
          className="section-heading mt-3 text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          Tools of the trade.
        </motion.h2>
      </div>

      <div className="relative mt-14 space-y-4">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-ink-950 to-transparent sm:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-ink-950 to-transparent sm:w-32" />

        <div className="overflow-hidden">
          <div className="flex w-max animate-marquee">
            {[...row1, ...row1].map((name, i) => (
              <TechPill key={`${name}-${i}`} name={name} />
            ))}
          </div>
        </div>
        <div className="overflow-hidden">
          <div
            className="flex w-max animate-marquee"
            style={{ animationDirection: 'reverse', animationDuration: '26s' }}
          >
            {[...row2, ...row2].map((name, i) => (
              <TechPill key={`${name}-${i}`} name={name} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
