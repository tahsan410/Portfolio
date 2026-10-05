import { motion } from 'framer-motion'
import { ArrowRight, Brain, Download, Mail, Server, Smartphone } from 'lucide-react'
import { site } from '../data/site.js'
import { GitHubIcon, LinkedInIcon } from './Icons.jsx'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
}
const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

const socialClass =
  'grid h-11 w-11 place-items-center rounded-lg border border-white/10 bg-white/[0.03] text-slate-300 transition duration-200 hover:-translate-y-0.5 hover:border-accent-400/50 hover:text-white'

export default function Hero() {
  return (
    <section id="home" aria-label="Introduction" className="relative overflow-hidden pb-24 pt-28 sm:pt-32 lg:pb-32 lg:pt-36">
      <div aria-hidden="true" className="grid-bg pointer-events-none absolute inset-0" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/3 h-[460px] w-[460px] rounded-full bg-accent-500/20 blur-[130px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-1/3 h-[360px] w-[360px] rounded-full bg-violet2-500/15 blur-[120px]"
      />

      <div className="container-x relative grid items-center gap-16 lg:grid-cols-12 lg:gap-10">
        <motion.div
          className="lg:col-span-7"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-[11px] text-slate-400"
          >
            <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/70" />
              <span className="relative h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </span>
            Open to internships, junior roles &amp; freelance
          </motion.div>

          <motion.p variants={item} className="mt-8 text-lg text-slate-400">
            Hi, I&apos;m
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-1 text-5xl font-bold leading-[1.02] sm:text-6xl lg:text-7xl"
          >
            {site.name}
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-5 font-display text-3xl font-semibold sm:text-4xl"
          >
            <span className="text-gradient">{site.role}</span>
          </motion.p>

          <motion.p variants={item} className="mt-2 font-mono text-sm text-slate-400 sm:text-base">
            {site.subRole}
          </motion.p>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg"
          >
            {site.description}
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#projects" className="btn-primary">
              View My Work
              <ArrowRight size={16} aria-hidden="true" />
            </a>
            <a href={site.resume} download={site.resumeFileName} className="btn-ghost">
              <Download size={16} aria-hidden="true" />
              Download Resume
            </a>
          </motion.div>

          <motion.div variants={item} className="mt-8 flex items-center gap-3">
            <a
              href={site.github}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="GitHub profile"
              className={socialClass}
            >
              <GitHubIcon className="h-5 w-5" />
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn profile"
              className={socialClass}
            >
              <LinkedInIcon className="h-5 w-5" />
            </a>
            <a href={`mailto:${site.email}`} aria-label="Send an email" className={socialClass}>
              <Mail size={20} aria-hidden="true" />
            </a>
          </motion.div>
        </motion.div>

        {/* Visual */}
        <motion.div
          className="relative mx-auto w-full max-w-sm sm:max-w-md lg:col-span-5 lg:max-w-none"
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative aspect-square">
            <div
              aria-hidden="true"
              className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-accent-500/40 via-transparent to-violet2-500/40 opacity-70 blur-2xl"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 translate-x-3 translate-y-3 rounded-2xl border border-accent-400/30"
            />
            <div className="relative h-full w-full overflow-hidden rounded-2xl border border-white/10 bg-ink-800">
              <img
                src={site.photo}
                alt={`Portrait of ${site.name}`}
                width="800"
                height="800"
                fetchpriority="high"
                decoding="async"
                className="h-full w-full object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-ink-950/60 via-transparent to-transparent"
              />
            </div>

            {/* Floating technology cards */}
            <div
              className="glass absolute -right-2 top-8 flex animate-floaty items-center gap-2 rounded-lg px-3 py-2 font-mono text-xs text-slate-200 sm:-right-6"
            >
              <Server size={14} className="text-accent-300" aria-hidden="true" />
              FastAPI · REST
            </div>
            <div
              className="glass absolute -left-2 top-1/3 flex animate-floaty items-center gap-2 rounded-lg px-3 py-2 font-mono text-xs text-slate-200 sm:-left-8"
              style={{ animationDelay: '1.5s' }}
            >
              <Smartphone size={14} className="text-violet2-400" aria-hidden="true" />
              Flutter · Firebase
            </div>
            <div
              className="glass absolute -right-2 bottom-28 flex animate-floaty items-center gap-2 rounded-lg px-3 py-2 font-mono text-xs text-slate-200 sm:-right-6"
              style={{ animationDelay: '3s' }}
            >
              <Brain size={14} className="text-accent-300" aria-hidden="true" />
              PyTorch · LLMs
            </div>

            {/* Mini terminal */}
            <div
              className="glass absolute -bottom-6 -left-2 w-[78%] rounded-lg p-3 font-mono text-[11px] leading-5 sm:-left-8"
              aria-hidden="true"
            >
              <div className="mb-2 flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-red-400/70" />
                <span className="h-2 w-2 rounded-full bg-amber-400/70" />
                <span className="h-2 w-2 rounded-full bg-emerald-400/70" />
              </div>
              <p>
                <span className="text-accent-300">~/tahsan</span>{' '}
                <span className="text-slate-500">$</span> whoami
              </p>
              <p className="text-slate-300">software engineer</p>
              <p>
                <span className="text-accent-300">~/tahsan</span>{' '}
                <span className="text-slate-500">$</span> focus --now
              </p>
              <p className="text-slate-300">
                full-stack · backend · ai
                <span className="ml-1 inline-block h-3 w-1.5 translate-y-0.5 animate-blink bg-accent-300" />
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
