import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Check, ExternalLink } from 'lucide-react'
import { GitHubIcon } from './Icons.jsx'

function hostOf(url) {
  try {
    return new URL(url).host
  } catch {
    return ''
  }
}

function TechBadges({ items }) {
  return (
    <ul className="flex flex-wrap gap-2" aria-label="Technologies">
      {items.map((t) => (
        <li key={t} className="chip">
          {t}
        </li>
      ))}
    </ul>
  )
}

/** Browser-frame preview. Uses the screenshot if it exists, otherwise a neutral fallback. */
function Preview({ project, tall }) {
  const [failed, setFailed] = useState(!project.image)
  const address = project.live ? hostOf(project.live) : project.title.toLowerCase().replace(/\s+/g, '-')

  return (
    <div className="overflow-hidden rounded-lg border border-white/10 bg-ink-800 shadow-2xl shadow-black/40">
      <div className="flex items-center gap-3 border-b border-white/[0.08] bg-white/[0.03] px-3 py-2">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="h-2 w-2 rounded-full bg-white/20" />
          <span className="h-2 w-2 rounded-full bg-white/20" />
          <span className="h-2 w-2 rounded-full bg-white/20" />
        </div>
        <div className="min-w-0 flex-1 truncate rounded bg-black/30 px-3 py-1 text-center font-mono text-[10px] text-slate-500">
          {address}
        </div>
      </div>

      <div className={`relative overflow-hidden ${tall ? 'aspect-[16/11]' : 'aspect-[16/10]'}`}>
        {!failed ? (
          <img
            src={project.image}
            alt={`${project.title} screenshot`}
            width="1280"
            height="800"
            loading="lazy"
            decoding="async"
            onError={() => setFailed(true)}
            className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
          />
        ) : (
          <div
            role="img"
            aria-label={`${project.title} preview`}
            className="relative flex h-full w-full flex-col justify-between bg-gradient-to-br from-accent-600/25 via-ink-800 to-violet2-500/20 p-6"
          >
            <div aria-hidden="true" className="grid-bg absolute inset-0 opacity-60" />
            <div className="relative space-y-2" aria-hidden="true">
              <div className="h-2 w-1/3 rounded bg-white/15" />
              <div className="h-2 w-1/4 rounded bg-white/10" />
            </div>
            <div className="relative">
              <p className="font-display text-2xl font-semibold text-white sm:text-3xl">
                {project.title}
              </p>
              {project.tagline && <p className="mt-1 text-sm text-accent-300">{project.tagline}</p>}
            </div>
            <div className="relative grid grid-cols-3 gap-2" aria-hidden="true">
              <div className="h-10 rounded bg-white/[0.06]" />
              <div className="h-10 rounded bg-white/[0.06]" />
              <div className="h-10 rounded bg-white/[0.06]" />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

function Actions({ project }) {
  return (
    <div className="flex flex-wrap gap-3">
      {project.live && (
        <a
          href={project.live}
          target="_blank"
          rel="noreferrer noopener"
          className="btn-primary px-4 py-2.5"
          aria-label={`Live demo of ${project.title}`}
        >
          Live Demo
          <ExternalLink size={15} aria-hidden="true" />
        </a>
      )}
      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer noopener"
          className="btn-ghost px-4 py-2.5"
          aria-label={`View ${project.title} on GitHub`}
        >
          <GitHubIcon className="h-4 w-4" />
          View on GitHub
        </a>
      )}
    </div>
  )
}

const cardMotion = {
  layout: true,
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, scale: 0.97 },
  transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
}

export default function ProjectCard({ project, index = 0 }) {
  const { variant } = project

  if (variant === 'compact') {
    const repoPath = project.github ? project.github.replace('https://github.com/', '') : ''
    return (
      <motion.article
        {...cardMotion}
        whileHover={{ y: -4 }}
        className="group flex h-full flex-col rounded-xl border border-white/[0.08] bg-white/[0.03] p-6 transition-colors duration-300 hover:border-accent-400/40"
      >
        <div className="flex items-center justify-between gap-3 font-mono text-xs text-slate-500">
          <span className="flex min-w-0 items-center gap-2">
            <GitHubIcon className="h-4 w-4 shrink-0" />
            <span className="truncate">{repoPath}</span>
          </span>
          <ArrowUpRight
            size={16}
            aria-hidden="true"
            className="shrink-0 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-300"
          />
        </div>
        <h4 className="mt-4 text-xl font-semibold">{project.title}</h4>
        <p className="mt-2 text-sm leading-relaxed text-slate-400">{project.description}</p>
        <div className="mt-5">
          <TechBadges items={project.tech} />
        </div>
        <div className="mt-auto pt-6">
          <Actions project={project} />
        </div>
      </motion.article>
    )
  }

  const primary = variant === 'primary'
  const shownFeatures = project.features ? project.features.slice(0, primary ? 8 : 6) : []
  const hiddenCount = project.features ? project.features.length - shownFeatures.length : 0

  return (
    <motion.article
      {...cardMotion}
      className="group relative overflow-hidden rounded-xl border border-white/[0.08] bg-gradient-to-br from-white/[0.05] to-white/[0.01] p-5 transition-colors duration-300 hover:border-accent-400/40 sm:p-7 lg:p-9"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-accent-500/15 blur-3xl"
      />
      <div className="relative grid items-center gap-8 lg:grid-cols-12 lg:gap-10">
        <div
          className={`${primary ? 'lg:col-span-7' : 'lg:col-span-6 lg:order-2'}`}
        >
          <Preview project={project} tall={primary} />
        </div>

        <div className={`${primary ? 'lg:col-span-5' : 'lg:col-span-6 lg:order-1'}`}>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent-300">
            {primary ? 'Featured project' : 'Featured project'} · {String(index + 1).padStart(2, '0')}
          </p>
          <h3 className={`mt-3 font-semibold ${primary ? 'text-3xl sm:text-4xl' : 'text-2xl sm:text-3xl'}`}>
            {project.title}
          </h3>
          {project.tagline && <p className="mt-1 text-lg text-accent-300">{project.tagline}</p>}
          <p className="mt-4 text-[15px] leading-relaxed text-slate-300">{project.description}</p>

          {project.problem && (
            <div className="mt-5 border-l-2 border-accent-400/50 pl-4">
              <p className="font-mono text-[11px] uppercase tracking-wider text-slate-500">
                The problem
              </p>
              <p className="mt-1 text-sm leading-relaxed text-slate-300">{project.problem}</p>
            </div>
          )}

          {shownFeatures.length > 0 && (
            <ul className="mt-5 grid gap-x-4 gap-y-1.5 text-sm text-slate-300 sm:grid-cols-2">
              {shownFeatures.map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <Check size={14} aria-hidden="true" className="mt-1 shrink-0 text-accent-400" />
                  <span>{f}</span>
                </li>
              ))}
              {hiddenCount > 0 && (
                <li className="font-mono text-xs text-slate-500">+{hiddenCount} more features</li>
              )}
            </ul>
          )}

          <div className="mt-5">
            <TechBadges items={project.tech} />
          </div>
          <div className="mt-7">
            <Actions project={project} />
          </div>
        </div>
      </div>
    </motion.article>
  )
}
