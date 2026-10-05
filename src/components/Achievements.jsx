import { Trophy, Users } from 'lucide-react'
import { achievements } from '../data/achievements.js'
import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'

export default function Achievements() {
  const single = achievements.length === 1

  return (
    <section
      id="achievements"
      aria-labelledby="achievements-title"
      className="section-pad border-t border-white/[0.06]"
    >
      <div className="container-x grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <SectionHeading
              index="06"
              eyebrow="Achievements"
              title="Achievements"
              subtitle="Competitions and recognition."
              id="achievements-title"
            />
          </div>
        </div>

        <ul className={`grid gap-4 lg:col-span-8 ${single ? '' : 'sm:grid-cols-2'}`}>
          {achievements.map((a, i) => (
            <li key={a.id}>
              <Reveal delay={0.05 * i} className="h-full">
                <article className="group relative flex h-full items-center gap-5 overflow-hidden rounded-xl border border-white/[0.08] bg-gradient-to-br from-white/[0.05] to-white/[0.01] p-6 transition-colors hover:border-accent-400/40 sm:p-8">
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-amber-400/10 blur-3xl"
                  />
                  <span className="relative grid h-14 w-14 shrink-0 place-items-center rounded-xl border border-amber-300/30 bg-amber-300/10 text-amber-200 transition-transform duration-300 group-hover:scale-105">
                    <Trophy size={26} aria-hidden="true" />
                  </span>
                  <div className="relative">
                    <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-slate-500">
                      {a.year || 'Competition'}
                    </p>
                    <h3 className="mt-1 text-2xl font-semibold sm:text-3xl">
                      {a.title} <span className="text-slate-500">—</span> {a.event}
                    </h3>
                    {a.team && (
                      <p className="mt-3 inline-flex items-center gap-2 font-mono text-sm text-accent-300">
                        <Users size={14} aria-hidden="true" />
                        {a.team === 'Individual' ? 'Individual' : `Team ${a.team}`}
                      </p>
                    )}
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
