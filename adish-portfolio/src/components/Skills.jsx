import { motion } from 'framer-motion'
import { Code2, Globe, BrainCircuit, Database, Wrench } from 'lucide-react'
import { skillCategories } from '../data/portfolioData'

const ICONS = { Code2, Globe, BrainCircuit, Database, Wrench }

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5 }}
        >
          skills
        </motion.p>
        <motion.h2
          className="section-heading mt-3"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          What I work with.
        </motion.h2>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, i) => {
            const Icon = ICONS[category.icon] ?? Code2
            return (
              <motion.div
                key={category.title}
                className="card-surface group px-6 py-7"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                whileHover={{ y: -6 }}
              >
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan/20 bg-cyan/[0.06] text-cyan transition-all duration-300 group-hover:shadow-glow">
                    <Icon size={19} />
                  </div>
                  <h3 className="font-display text-lg font-medium text-paper">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      className="rounded-lg border border-white/10 bg-white/[0.02] px-3 py-1.5 font-mono text-xs text-paper/80 transition-all duration-200 hover:-translate-y-0.5 hover:border-cyan/40 hover:text-cyan hover:shadow-glow"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
