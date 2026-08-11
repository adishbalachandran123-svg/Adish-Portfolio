import { Github, Linkedin, Instagram, Mail } from 'lucide-react'
import { profile } from '../data/portfolioData'

const isPlaceholder = (val) => !val || val.startsWith('[ADD')

const ICONS = [
  { key: 'email', icon: Mail, href: `mailto:${profile.email}`, value: profile.email },
  { key: 'github', icon: Github, href: profile.social.github, value: profile.social.github },
  { key: 'linkedin', icon: Linkedin, href: profile.social.linkedin, value: profile.social.linkedin },
  { key: 'instagram', icon: Instagram, href: profile.social.instagram, value: profile.social.instagram },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 px-5 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="font-display text-sm text-paper/90">
            © 2026 {profile.name}
          </p>
          <p className="mt-1 font-mono text-xs text-mute">
            Built with curiosity, code &amp; creativity.
          </p>
        </div>

        <div className="flex items-center gap-4">
          {ICONS.filter((i) => i.value && !isPlaceholder(i.value)).map((social) => {
            const Icon = social.icon
            return (
              <a
                key={social.key}
                href={social.href}
                target={social.key === 'email' ? undefined : '_blank'}
                rel="noreferrer"
                aria-label={social.key}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-mute transition-colors hover:border-cyan/40 hover:text-cyan"
              >
                <Icon size={15} />
              </a>
            )
          })}
        </div>
      </div>
    </footer>
  )
}
