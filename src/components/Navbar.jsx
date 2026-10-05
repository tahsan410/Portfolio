import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Download, Mail } from 'lucide-react'
import { navLinks, site } from '../data/site.js'
import { GitHubIcon, LinkedInIcon } from './Icons.jsx'
import useActiveSection from '../hooks/useActiveSection.js'

const ids = navLinks.map((l) => l.id)

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const active = useActiveSection(ids)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return undefined
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const solid = scrolled || open

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        solid
          ? 'border-white/[0.08] bg-ink-950/75 backdrop-blur-xl'
          : 'border-transparent bg-transparent'
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between">
        <a
          href="#home"
          aria-label={`${site.name} — back to top`}
          className="flex items-center gap-2.5"
        >
          <span className="grid h-8 w-8 place-items-center rounded-md border border-accent-400/40 bg-accent-500/10 font-display text-sm font-bold text-accent-300">
            T
          </span>
          <span className="hidden font-display text-sm font-semibold tracking-[0.22em] text-white sm:block">
            {site.shortName}
          </span>
        </a>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-0.5">
            {navLinks.map(({ id, label }) => {
              const isActive = active === id
              return (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    aria-current={isActive ? 'true' : undefined}
                    className={`relative block rounded-md px-3 py-2 text-[13px] transition-colors ${
                      isActive ? 'text-white' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute inset-x-3 -bottom-px h-px bg-gradient-to-r from-accent-400 to-violet2-400"
                      />
                    )}
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden items-center gap-1 xl:flex">
            <a
              href={site.github}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="GitHub profile"
              className="grid h-9 w-9 place-items-center rounded-md text-slate-400 transition-colors hover:bg-white/[0.06] hover:text-white"
            >
              <GitHubIcon className="h-[18px] w-[18px]" />
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn profile"
              className="grid h-9 w-9 place-items-center rounded-md text-slate-400 transition-colors hover:bg-white/[0.06] hover:text-white"
            >
              <LinkedInIcon className="h-[18px] w-[18px]" />
            </a>
          </div>

          <a
            href={site.resume}
            download={site.resumeFileName}
            className="btn-ghost hidden px-4 py-2 text-[13px] lg:inline-flex"
          >
            <Download size={14} aria-hidden="true" />
            Resume
          </a>

          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="grid h-10 w-10 place-items-center rounded-md border border-white/10 lg:hidden"
          >
            <span className="relative block h-5 w-5">
              <motion.span
                className="absolute left-0 top-[9px] block h-0.5 w-5 rounded bg-white"
                animate={open ? { rotate: 45, y: 0 } : { rotate: 0, y: -6 }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="absolute left-0 top-[9px] block h-0.5 w-5 rounded bg-white"
                animate={{ opacity: open ? 0 : 1 }}
                transition={{ duration: 0.15 }}
              />
              <motion.span
                className="absolute left-0 top-[9px] block h-0.5 w-5 rounded bg-white"
                animate={open ? { rotate: -45, y: 0 } : { rotate: 0, y: 6 }}
                transition={{ duration: 0.2 }}
              />
            </span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="overflow-hidden border-t border-white/[0.08] lg:hidden"
          >
            <nav aria-label="Mobile" className="container-x py-4">
              <ul className="flex flex-col">
                {navLinks.map(({ id, label }, i) => (
                  <motion.li
                    key={id}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.03 * i, duration: 0.2 }}
                  >
                    <a
                      href={`#${id}`}
                      onClick={() => setOpen(false)}
                      aria-current={active === id ? 'true' : undefined}
                      className={`flex items-center justify-between border-b border-white/[0.06] py-3 text-base ${
                        active === id ? 'text-white' : 'text-slate-400'
                      }`}
                    >
                      {label}
                      {active === id && (
                        <span className="h-1.5 w-1.5 rounded-full bg-accent-400" aria-hidden="true" />
                      )}
                    </a>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-5 flex items-center gap-3">
                <a href={site.resume} download={site.resumeFileName} className="btn-primary flex-1">
                  <Download size={16} aria-hidden="true" />
                  Resume
                </a>
                <a
                  href={site.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="GitHub profile"
                  className="btn-ghost h-11 w-11 !p-0"
                >
                  <GitHubIcon className="h-[18px] w-[18px]" />
                </a>
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="LinkedIn profile"
                  className="btn-ghost h-11 w-11 !p-0"
                >
                  <LinkedInIcon className="h-[18px] w-[18px]" />
                </a>
                <a
                  href={`mailto:${site.email}`}
                  aria-label="Send an email"
                  className="btn-ghost h-11 w-11 !p-0"
                >
                  <Mail size={18} aria-hidden="true" />
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
