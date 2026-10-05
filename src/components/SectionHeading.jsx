import Reveal from './Reveal.jsx'

export default function SectionHeading({ index, eyebrow, title, subtitle, id }) {
  return (
    <Reveal>
      <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-accent-300">
        <span>{index}</span>
        <span aria-hidden="true" className="h-px w-10 bg-accent-400/50" />
        <span className="text-slate-400">{eyebrow}</span>
      </div>
      <h2 id={id} className="mt-4 text-3xl font-semibold sm:text-4xl lg:text-[2.6rem]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 max-w-xl text-base leading-relaxed text-slate-400">{subtitle}</p>
      )}
    </Reveal>
  )
}
