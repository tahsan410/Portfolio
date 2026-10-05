import { Mail, Phone } from 'lucide-react'
import { site } from '../data/site.js'
import { GitHubIcon, LinkedInIcon } from './Icons.jsx'

const linkClass =
  'flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-white'

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.08] bg-ink-900/60">
      <div className="container-x py-12">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-start">
          <div>
            <p className="font-display text-xl font-semibold text-white">{site.name}</p>
            <p className="mt-2 max-w-sm font-mono text-xs leading-relaxed text-slate-500">
              {site.footerTagline}
            </p>
          </div>

          <ul className="grid grid-cols-2 gap-x-10 gap-y-3" aria-label="Contact links">
            <li>
              <a href={site.github} target="_blank" rel="noreferrer noopener" className={linkClass}>
                <GitHubIcon className="h-4 w-4" />
                GitHub
              </a>
            </li>
            <li>
              <a href={site.linkedin} target="_blank" rel="noreferrer noopener" className={linkClass}>
                <LinkedInIcon className="h-4 w-4" />
                LinkedIn
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className={linkClass}>
                <Mail size={16} aria-hidden="true" />
                Email
              </a>
            </li>
            <li>
              <a href={site.phoneHref} className={linkClass}>
                <Phone size={16} aria-hidden="true" />
                Phone
              </a>
            </li>
          </ul>
        </div>

        <p className="mt-10 border-t border-white/[0.06] pt-6 text-xs text-slate-500">
          © 2026 Tahsan Farhad Ovi. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
