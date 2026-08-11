import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, Instagram, Send, CheckCircle2 } from 'lucide-react'
import { profile } from '../data/portfolioData'

const isPlaceholder = (val) => !val || val.startsWith('[ADD')

const SOCIAL_LINKS = [
  { key: 'email', label: 'Email', icon: Mail, href: `mailto:${profile.email}`, value: profile.email },
  { key: 'github', label: 'GitHub', icon: Github, href: profile.social.github, value: profile.social.github },
  { key: 'linkedin', label: 'LinkedIn', icon: Linkedin, href: profile.social.linkedin, value: profile.social.linkedin },
  { key: 'instagram', label: 'Instagram', icon: Instagram, href: profile.social.instagram, value: profile.social.instagram },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // ── FRONTEND-ONLY PLACEHOLDER ──────────────────────────────────────
    // This form does not currently send data anywhere. To wire it up:
    //  1. Formspree / Getform / EmailJS: point this fetch/POST at your
    //     endpoint and pass `form` as the body.
    //  2. Your own backend: POST `form` to your API route, which sends
    //     an email (e.g. via Nodemailer, Resend, SendGrid).
    // Example:
    //   await fetch('https://formspree.io/f/yourFormId', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(form),
    //   })
    // ─────────────────────────────────────────────────────────────────
    console.log('Contact form submitted (not yet connected to a backend):', form)
    setSubmitted(true)
    setForm({ name: '', email: '', message: '' })
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <motion.p
          className="eyebrow text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5 }}
        >
          contact
        </motion.p>
        <motion.h2
          className="section-heading mt-3 text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          Let's Build Something Together
        </motion.h2>
        <motion.p
          className="mx-auto mt-4 max-w-xl text-center text-mute"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          I'm always interested in learning, building new projects, collaborating, and exploring
          interesting technology.
        </motion.p>

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
          {/* Social links */}
          <motion.div
            className="space-y-3"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            {SOCIAL_LINKS.filter((l) => l.value).map((link) => {
              const Icon = link.icon
              const disabled = isPlaceholder(link.value)
              return (
                <a
                  key={link.key}
                  href={disabled ? undefined : link.href}
                  target={link.key === 'email' ? undefined : '_blank'}
                  rel="noreferrer"
                  aria-disabled={disabled}
                  className={`card-surface flex items-center gap-4 px-5 py-4 transition-all ${
                    disabled ? 'cursor-default opacity-60' : 'hover:-translate-y-0.5 hover:border-cyan/30'
                  }`}
                >
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-cyan/20 bg-cyan/[0.06] text-cyan">
                    <Icon size={18} />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-mono text-[11px] uppercase tracking-wider text-mute">
                      {link.label}
                    </span>
                    <span className="block truncate text-sm text-paper/90">{link.value}</span>
                  </span>
                </a>
              )
            })}
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="card-surface space-y-5 p-6 sm:p-8"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <label htmlFor="name" className="mb-2 block font-mono text-xs uppercase tracking-wider text-mute">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-paper placeholder:text-mute/60 transition-colors focus:border-cyan/40 focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block font-mono text-xs uppercase tracking-wider text-mute">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-paper placeholder:text-mute/60 transition-colors focus:border-cyan/40 focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block font-mono text-xs uppercase tracking-wider text-mute">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me a bit about what you'd like to build or discuss..."
                className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-paper placeholder:text-mute/60 transition-colors focus:border-cyan/40 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="group flex w-full items-center justify-center gap-2 rounded-xl bg-cyan px-6 py-3.5 font-medium text-ink-950 transition-transform hover:-translate-y-0.5"
            >
              {submitted ? (
                <>
                  <CheckCircle2 size={16} /> Message noted
                </>
              ) : (
                <>
                  Send Message
                  <Send size={15} className="transition-transform group-hover:translate-x-0.5" />
                </>
              )}
            </button>
            <p className="text-center font-mono text-[11px] text-mute/70">
              This form is currently frontend-only — connect it to Formspree, EmailJS, or your own
              API route to start receiving messages.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
