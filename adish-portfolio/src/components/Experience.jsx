import { motion } from 'framer-motion'
import { Briefcase, CheckCircle2 } from 'lucide-react'
import { experience } from '../data/portfolioData'

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5 }}
        >
          experience
        </motion.p>
        <motion.h2
          className="section-heading mt-3"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          Where I've worked.
        </motion.h2>

        <div className="mt-14 space-y-6">
          {experience.map((role, i) => (
            <motion.div
              key={role.id}
              className="card-surface flex flex-col gap-5 p-6 sm:flex-row sm:p-7"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -3 }}
            >
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl border border-cyan/20 bg-cyan/[0.06] text-cyan">
                <Briefcase size={19} />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-display text-lg font-medium text-paper sm:text-xl">
                    {role.title}
                  </h3>
                  <span className="font-mono text-xs text-cyan">{role.date}</span>
                </div>
                <p className="mt-1 text-sm font-medium text-mute">{role.company}</p>
                <p className="mt-3 text-sm leading-relaxed text-mute/90">{role.description}</p>

                {role.highlights?.length > 0 && (
                  <ul className="mt-4 space-y-1.5">
                    {role.highlights.map((h, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-mute/80">
                        <CheckCircle2 size={14} className="mt-0.5 flex-shrink-0 text-violet-soft" />
                        {h}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
