import { GraduationCap, MapPin } from 'lucide-react'
import { education } from '../data/education.js'
import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'

export default function Education() {
  return (
    <section
      id="education"
      aria-labelledby="education-title"
      className="section-pad border-t border-white/[0.06]"
    >
      <div className="container-x grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <SectionHeading
              index="05"
              eyebrow="Education"
              title="Education"
              subtitle="The foundation behind the work."
              id="education-title"
            />
          </div>
        </div>

        <ol className="relative ml-2 space-y-8 border-l border-white/10 lg:col-span-8">
          {education.map((item, i) => (
            <li key={item.id} className="relative pl-8">
              <span
                aria-hidden="true"
                className="absolute -left-[6px] top-7 h-3 w-3 rounded-full bg-violet2-400 ring-4 ring-ink-950"
              />
              <Reveal delay={0.05 * i}>
                <article className="relative overflow-hidden rounded-xl border border-white/[0.08] bg-gradient-to-br from-white/[0.05] to-white/[0.01] p-6 transition-colors hover:border-accent-400/30 sm:p-8">
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-violet2-500/15 blur-3xl"
                  />
                  <div className="relative flex items-start gap-4">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-lg border border-accent-400/30 bg-accent-500/10 text-accent-300">
                      <GraduationCap size={22} aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="text-xl font-semibold sm:text-2xl">{item.institution}</h3>
                      <p className="mt-1 text-accent-300">{item.degree}</p>
                      <div className="mt-4 flex flex-wrap items-center gap-2">
                        <span className="chip flex items-center gap-1.5">
                          <MapPin size={12} aria-hidden="true" />
                          {item.location}
                        </span>
                        {item.period && <span className="chip">{item.period}</span>}
                        {item.status && <span className="chip">{item.status}</span>}
                      </div>
                    </div>
                  </div>
                  {item.focus?.length > 0 && (
                    <ul className="relative mt-6 flex flex-wrap gap-2" aria-label="Focus areas">
                      {item.focus.map((f) => (
                        <li key={f} className="chip">
                          {f}
                        </li>
                      ))}
                    </ul>
                  )}
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
