import { motion } from 'framer-motion'
import { Trophy, Medal, Sparkles } from 'lucide-react'
import { achievements } from '../data/portfolioData'

const CATEGORY_ICON = {
  Hackathon: Trophy,
  Academic: Medal,
  Workshop: Sparkles,
}

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5 }}
        >
          achievements
        </motion.p>
        <motion.h2
          className="section-heading mt-3"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          Milestones along the way.
        </motion.h2>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((item, i) => {
            const Icon = CATEGORY_ICON[item.category] ?? Trophy
            return (
              <motion.div
                key={item.id}
                className="card-surface group relative overflow-hidden p-6"
                initial={{ opacity: 0, scale: 0.94, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
                whileHover={{ y: -5 }}
              >
                <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan/20 bg-cyan/[0.06] text-cyan">
                    <Icon size={18} />
                  </div>
                  <span className="rounded-full border border-white/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-mute">
                    {item.category}
                  </span>
                </div>

                <h3 className="mt-5 font-display text-base font-medium text-paper sm:text-lg">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-mute">{item.description}</p>
                <p className="mt-3 font-mono text-xs text-violet-soft">{item.date}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
