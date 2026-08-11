import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import { education } from '../data/portfolioData'

export default function Education() {
  return (
    <section id="education" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5 }}
        >
          education
        </motion.p>
        <motion.h2
          className="section-heading mt-3"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          Academic timeline.
        </motion.h2>

        <div className="relative mt-14 ml-3">
          <motion.div
            className="absolute left-0 top-2 w-px bg-gradient-to-b from-cyan via-violet/60 to-transparent"
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.1, ease: 'easeInOut' }}
          />

          <ul className="space-y-10">
            {education.map((item, i) => (
              <motion.li
                key={item.id}
                className="relative pl-9"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <span className="absolute left-[-9px] top-1.5 flex h-[19px] w-[19px] items-center justify-center rounded-full border border-cyan/40 bg-ink-900">
                  <span className="h-2 w-2 rounded-full bg-cyan shadow-glow" />
                </span>

                <div className="card-surface px-5 py-5 sm:px-6 sm:py-6">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-display text-lg font-medium text-paper sm:text-xl">
                      {item.level}
                    </h3>
                    <span className="font-mono text-xs text-cyan">{item.date}</span>
                  </div>
                  <p className="mt-1.5 flex items-center gap-1.5 text-sm text-mute">
                    <GraduationCap size={14} className="flex-shrink-0" />
                    {item.institution}
                  </p>
                  {item.detail && (
                    <p className="mt-2 text-sm text-mute/80">{item.detail}</p>
                  )}
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
