import { useMemo, useState } from 'react'
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion'
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react'
import { projects, projectFilters } from '../data/portfolioData'

const isPlaceholder = (val) => !val || val.startsWith('[ADD')

export default function Projects() {
  const [filter, setFilter] = useState('All')

  const filtered = useMemo(() => {
    if (filter === 'All') return projects
    return projects.filter((p) => p.categories.includes(filter))
  }, [filter])

  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <motion.p
              className="eyebrow"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.5 }}
            >
              projects
            </motion.p>
            <motion.h2
              className="section-heading mt-3"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.5, delay: 0.05 }}
            >
              Things I've built.
            </motion.h2>
          </div>

          <LayoutGroup id="project-filters">
            <div className="flex flex-wrap gap-2">
              {projectFilters.map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`relative rounded-full px-4 py-1.5 font-mono text-xs transition-colors ${
                    filter === f ? 'text-ink-950' : 'text-mute hover:text-paper'
                  }`}
                >
                  {filter === f && (
                    <motion.span
                      layoutId="filter-pill"
                      className="absolute inset-0 -z-0 rounded-full bg-cyan"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10">{f}</span>
                </button>
              ))}
            </div>
          </LayoutGroup>
        </div>

        <motion.div layout className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

function ProjectCard({ project, index }) {
  const accent = project.accent === 'violet' ? 'violet' : 'cyan'

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.4, delay: (index % 2) * 0.06 }}
      whileHover={{ y: -6 }}
      className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.015] p-6 transition-colors hover:border-white/[0.14] sm:p-7"
    >
      <div
        className={`pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full blur-[70px] transition-opacity duration-500 opacity-0 group-hover:opacity-100 ${
          accent === 'cyan' ? 'bg-cyan/25' : 'bg-violet/25'
        }`}
      />

      <div className="relative flex items-start justify-between gap-4">
        <div>
          <span className={`font-mono text-[11px] uppercase tracking-widest ${accent === 'cyan' ? 'text-cyan' : 'text-violet-soft'}`}>
            {project.subtitle}
          </span>
          <h3 className="mt-1.5 font-display text-xl font-semibold text-paper sm:text-2xl">
            {project.title}
          </h3>
        </div>
        <div
          className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg border border-white/10 text-mute transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 ${
            accent === 'cyan' ? 'group-hover:text-cyan group-hover:border-cyan/40' : 'group-hover:text-violet-soft group-hover:border-violet/40'
          }`}
        >
          <ArrowUpRight size={16} />
        </div>
      </div>

      <p className="relative mt-4 text-sm leading-relaxed text-mute sm:text-[15px]">
        {project.description}
      </p>

      <div className="relative mt-5 flex flex-wrap gap-1.5">
        {project.tech.map((t) => (
          <span
            key={t}
            className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 font-mono text-[11px] text-paper/70"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="relative mt-6 flex items-center gap-3 border-t border-white/[0.06] pt-5">
        {isPlaceholder(project.github) ? (
          <span className="inline-flex items-center gap-1.5 font-mono text-xs text-mute/60">
            <Github size={14} /> {project.github}
          </span>
        ) : (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 px-3 py-1.5 font-mono text-xs text-paper/80 transition-colors hover:border-cyan/40 hover:text-cyan"
          >
            <Github size={14} /> Code
          </a>
        )}

        {project.demo &&
          (isPlaceholder(project.demo) ? (
            <span className="inline-flex items-center gap-1.5 font-mono text-xs text-mute/60">
              <ExternalLink size={14} /> {project.demo}
            </span>
          ) : (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 px-3 py-1.5 font-mono text-xs text-paper/80 transition-colors hover:border-cyan/40 hover:text-cyan"
            >
              <ExternalLink size={14} /> Live Demo
            </a>
          ))}
      </div>
    </motion.article>
  )
}
