import { Building2, GraduationCap, MapPin, Target } from 'lucide-react'
import { site } from '../data/site.js'
import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'

const infoCards = [
  { icon: GraduationCap, label: 'Education', value: 'BSc in Computer Science & Engineering' },
  { icon: Building2, label: 'University', value: 'Shahjalal University of Science and Technology' },
  { icon: Target, label: 'Focus', value: 'Software Engineering + Full-Stack Development + AI' },
  { icon: MapPin, label: 'Location', value: 'Bangladesh' },
]

const strengths = ['Software Engineering', 'Full-Stack', 'Backend & APIs', 'AI / ML', 'Problem Solving']

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="section-pad">
      <div className="container-x">
        <SectionHeading index="01" eyebrow="About" title="About Me" id="about-title" />

        <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="space-y-5 text-base leading-relaxed text-slate-300 sm:text-[17px] lg:col-span-7">
            <Reveal>
              <p>
                I&apos;m a Computer Science &amp; Engineering student at{' '}
                <span className="text-white">Shahjalal University of Science and Technology (SUST)</span>
                , working towards becoming a strong software engineer. I enjoy turning ideas into
                working products — from the interface people see to the API and database behind it.
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <p>
                My work spans frontend development with React and Flutter, backend engineering with
                FastAPI and PostgreSQL, and a growing interest in AI/ML — PyTorch, LLMs and
                RAG-based automation. I practise problem solving regularly, mostly in C++, to keep
                my fundamentals sharp.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p>
                I like building practical applications that solve real problems, and I treat every
                project as a chance to learn something new. I&apos;m always learning and always
                building.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <ul className="flex flex-wrap gap-2 pt-2" aria-label="Areas of focus">
                {strengths.map((s) => (
                  <li key={s} className="chip">
                    {s}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <div className="space-y-3 lg:col-span-5">
            <Reveal>
              <div className="glass flex items-center gap-4 rounded-xl p-4">
                <img
                  src={site.photo}
                  alt={`${site.name}`}
                  width="64"
                  height="64"
                  loading="lazy"
                  decoding="async"
                  className="h-16 w-16 rounded-lg border border-white/10 object-cover object-top"
                />
                <div>
                  <p className="font-display text-lg font-semibold text-white">{site.name}</p>
                  <p className="font-mono text-xs text-slate-400">CSE · {site.universityShort}</p>
                </div>
              </div>
            </Reveal>
            {infoCards.map(({ icon: Icon, label, value }, i) => (
              <Reveal key={label} delay={0.05 * (i + 1)}>
                <div className="glass flex items-start gap-4 rounded-xl p-5 transition-colors hover:border-accent-400/30">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-accent-400/30 bg-accent-500/10 text-accent-300">
                    <Icon size={18} aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-slate-500">
                      {label}
                    </p>
                    <p className="mt-1 text-[15px] text-white">{value}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
