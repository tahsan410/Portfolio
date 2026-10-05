import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { projects } from '../data/projects.js'
import ProjectCard from './ProjectCard.jsx'
import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'

const FILTERS = ['All', 'Featured', 'Frontend', 'Backend', 'API', 'Mobile', 'AI']

const mainProjects = projects.filter((p) => p.group === 'main')
const backendProjects = projects.filter((p) => p.group === 'backend')

export default function Projects() {
  // Default view prioritises the featured projects.
  const [filter, setFilter] = useState('Featured')

  const visibleMain = mainProjects.filter(
    (p) => filter === 'All' || p.categories.includes(filter),
  )
  // The dedicated Backend & API subsection stays visible in the default views.
  const visibleBackend = backendProjects.filter(
    (p) => filter === 'All' || filter === 'Featured' || p.categories.includes(filter),
  )

  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="section-pad border-t border-white/[0.06]"
    >
      <div className="container-x">
        <SectionHeading
          index="03"
          eyebrow="Projects"
          title="Featured Projects"
          subtitle="Real projects, practical solutions."
          id="projects-title"
        />

        <Reveal className="mt-10">
          <div role="group" aria-label="Filter projects by category" className="flex flex-wrap gap-2">
            {FILTERS.map((f) => {
              const isActive = filter === f
              return (
                <button
                  key={f}
                  type="button"
                  onClick={() => setFilter(f)}
                  aria-pressed={isActive}
                  className={`relative rounded-md px-4 py-2 font-mono text-xs transition-colors ${
                    isActive ? 'text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="project-filter"
                      className="absolute inset-0 rounded-md border border-accent-400/50 bg-accent-500/15"
                      transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                    />
                  )}
                  <span className="relative">{f}</span>
                </button>
              )
            })}
          </div>
        </Reveal>

        <div className="mt-10 space-y-6">
          <AnimatePresence mode="popLayout">
            {visibleMain.map((p, i) => (
              <ProjectCard key={p.id} project={p} index={i} />
            ))}
          </AnimatePresence>
        </div>

        {visibleBackend.length > 0 && (
          <div className="mt-20">
            <Reveal>
              <h3 className="text-2xl font-semibold sm:text-3xl">Backend &amp; API Projects</h3>
              <p className="mt-2 text-slate-400">APIs and backend systems I&apos;ve built.</p>
            </Reveal>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              <AnimatePresence mode="popLayout">
                {visibleBackend.map((p) => (
                  <ProjectCard key={p.id} project={p} />
                ))}
              </AnimatePresence>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
