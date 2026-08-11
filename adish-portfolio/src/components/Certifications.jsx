import { motion } from 'framer-motion'
import { Award, ExternalLink } from 'lucide-react'
import { certifications } from '../data/portfolioData'

const isPlaceholder = (val) => !val || val.startsWith('[ADD')

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5 }}
        >
          certifications
        </motion.p>
        <motion.h2
          className="section-heading mt-3"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          Certified &amp; continually learning.
        </motion.h2>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-2">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.id}
              className="card-surface flex items-start gap-4 p-6"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.08 }}
              whileHover={{ y: -4 }}
            >
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl border border-violet/25 bg-violet/[0.08] text-violet-soft">
                <Award size={19} />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="font-display text-base font-medium text-paper sm:text-lg">
                  {cert.name}
                </h3>
                <p className="mt-1 text-sm text-mute">{cert.org}</p>
                <p className="mt-0.5 font-mono text-xs text-cyan">{cert.date}</p>

                <div className="mt-4">
                  {isPlaceholder(cert.link) ? (
                    <span className="inline-flex items-center gap-1.5 font-mono text-xs text-mute/60">
                      <ExternalLink size={13} /> {cert.link}
                    </span>
                  ) : (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 px-3 py-1.5 font-mono text-xs text-paper/80 transition-colors hover:border-cyan/40 hover:text-cyan"
                    >
                      <ExternalLink size={13} /> View Certificate
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
