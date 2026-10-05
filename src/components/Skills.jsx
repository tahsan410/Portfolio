import { motion } from 'framer-motion'
import { skillGroups } from '../data/skills.js'
import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'

export default function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-title"
      className="section-pad border-t border-white/[0.06]"
    >
      <div className="container-x">
        <SectionHeading
          index="02"
          eyebrow="Skills"
          title="Technical Skills"
          subtitle="The languages, frameworks and tools I work with."
          id="skills-title"
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map(({ id, title, icon: Icon, items }, i) => (
            <Reveal key={id} delay={0.04 * i}>
              <div className="glass h-full rounded-xl p-6 transition-colors duration-300 hover:border-accent-400/30">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="grid h-9 w-9 place-items-center rounded-lg border border-accent-400/30 bg-accent-500/10 text-accent-300">
                      <Icon size={17} aria-hidden="true" />
                    </span>
                    <h3 className="text-base font-semibold">{title}</h3>
                  </div>
                  <span className="font-mono text-xs text-slate-500">
                    {String(items.length).padStart(2, '0')}
                  </span>
                </div>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <motion.li
                      key={skill}
                      whileHover={{ y: -2 }}
                      transition={{ duration: 0.15 }}
                      className="cursor-default rounded-md border border-white/10 bg-white/[0.04] px-3 py-1.5 font-mono text-xs text-slate-300 transition-colors hover:border-accent-400/50 hover:bg-accent-500/10 hover:text-white"
                    >
                      {skill}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
