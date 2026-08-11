import { motion } from 'framer-motion'
import {
  Code, Globe, BrainCircuit, LineChart, Cloud, Puzzle,
} from 'lucide-react'
import { about } from '../data/portfolioData'

const INTEREST_ICONS = {
  'Software Development': Code,
  'Web Development': Globe,
  'Artificial Intelligence': BrainCircuit,
  'Machine Learning': BrainCircuit,
  'Data Science': LineChart,
  'Cloud Computing': Cloud,
  'Problem Solving': Puzzle,
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: 'easeOut' },
  }),
}

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.p
          className="eyebrow"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
        >
          about
        </motion.p>
        <motion.h2
          className="section-heading mt-3"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
        >
          Turning curiosity into code.
        </motion.h2>

        <div className="mt-14 grid grid-cols-1 gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            {about.paragraphs.map((p, i) => (
              <motion.p
                key={i}
                className="mb-5 text-base leading-relaxed text-mute sm:text-lg"
                variants={fadeUp}
                custom={i}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.4 }}
              >
                {p}
              </motion.p>
            ))}

            <motion.div
              className="mt-10 flex flex-wrap gap-2.5"
              variants={fadeUp}
              custom={4}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
            >
              {about.interests.map((interest) => {
                const Icon = INTEREST_ICONS[interest] ?? Code
                return (
                  <span
                    key={interest}
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 font-mono text-xs text-paper/90 transition-colors hover:border-cyan/30 hover:text-cyan"
                  >
                    <Icon size={13} className="text-cyan" />
                    {interest}
                  </span>
                )
              })}
            </motion.div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {about.stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="card-surface group px-6 py-7 transition-colors hover:border-cyan/25"
                variants={fadeUp}
                custom={i}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.5 }}
                whileHover={{ y: -4 }}
              >
                <div className="font-display text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan to-violet sm:text-4xl">
                  {stat.value}
                </div>
                <div className="mt-2 font-mono text-xs uppercase tracking-wider text-mute">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
