import { Briefcase } from 'lucide-react'
import { experience } from '../data/experience.js'
import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'

export default function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="section-pad border-t border-white/[0.06]"
    >
      <div className="container-x grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <SectionHeading
              index="04"
              eyebrow="Experience"
              title="Experience"
              subtitle="Where I've applied my skills professionally."
              id="experience-title"
            />
          </div>
        </div>

        <ol className="relative ml-2 space-y-8 border-l border-white/10 lg:col-span-8">
          {experience.map((job, i) => (
            <li key={job.id} className="relative pl-8">
              <span
                aria-hidden="true"
                className="absolute -left-[6px] top-7 h-3 w-3 rounded-full bg-accent-400 ring-4 ring-ink-950"
              />
              <Reveal delay={0.05 * i}>
                <article className="glass rounded-xl p-6 transition-colors hover:border-accent-400/30 sm:p-7">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="text-xl font-semibold">{job.role}</h3>
                      <p className="mt-1 flex items-center gap-2 text-accent-300">
                        <Briefcase size={15} aria-hidden="true" />
                        {job.organization}
                      </p>
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                      {job.type && <span className="chip">{job.type}</span>}
                      {job.period && <span className="chip">{job.period}</span>}
                    </div>
                  </div>
                  {job.summary && (
                    <p className="mt-4 text-[15px] leading-relaxed text-slate-300">{job.summary}</p>
                  )}
                  <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-slate-300">
                    {job.points.map((point) => (
                      <li key={point} className="flex gap-3">
                        <span
                          aria-hidden="true"
                          className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-400"
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
