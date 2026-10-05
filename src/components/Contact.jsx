import { useState } from 'react'
import { Mail, Phone, Send } from 'lucide-react'
import { site } from '../data/site.js'
import { GitHubIcon, LinkedInIcon } from './Icons.jsx'
import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'

const fieldClass =
  'w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-slate-500 transition-colors focus:border-accent-400/60 focus:outline-none focus:ring-2 focus:ring-accent-400/20'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  // There is no backend: this opens the visitor's email app with the message prefilled.
  const onSubmit = (e) => {
    e.preventDefault()
    const subject = `Portfolio message from ${form.name}`
    const body = `${form.message}\n\n— ${form.name} (${form.email})`
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`
    setSubmitted(true)
  }

  const actions = [
    { label: 'Email Me', href: `mailto:${site.email}`, icon: <Mail size={16} aria-hidden="true" />, primary: true },
    { label: 'Call Me', href: site.phoneHref, icon: <Phone size={16} aria-hidden="true" /> },
    { label: 'LinkedIn', href: site.linkedin, icon: <LinkedInIcon className="h-4 w-4" />, external: true },
    { label: 'GitHub', href: site.github, icon: <GitHubIcon className="h-4 w-4" />, external: true },
  ]

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="section-pad border-t border-white/[0.06]"
    >
      <div className="container-x">
        <SectionHeading
          index="08"
          eyebrow="Contact"
          title="Let's Build Something Together"
          subtitle="Have a project idea, opportunity, or just want to connect? Feel free to reach out."
          id="contact-title"
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <Reveal>
              <dl className="space-y-5">
                <div>
                  <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-slate-500">Email</dt>
                  <dd className="mt-1">
                    <a href={`mailto:${site.email}`} className="text-white underline-offset-4 hover:text-accent-300 hover:underline">
                      {site.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-slate-500">Phone</dt>
                  <dd className="mt-1">
                    <a href={site.phoneHref} className="text-white underline-offset-4 hover:text-accent-300 hover:underline">
                      {site.phone}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-slate-500">Elsewhere</dt>
                  <dd className="mt-1 flex flex-col gap-1">
                    <a href={site.github} target="_blank" rel="noreferrer noopener" className="text-white underline-offset-4 hover:text-accent-300 hover:underline">
                      github.com/{site.githubUser}
                    </a>
                    <a href={site.linkedin} target="_blank" rel="noreferrer noopener" className="text-white underline-offset-4 hover:text-accent-300 hover:underline">
                      linkedin.com/in/tahsan-farhad
                    </a>
                  </dd>
                </div>
              </dl>

              <div className="mt-8 grid grid-cols-2 gap-3">
                {actions.map(({ label, href, icon, primary, external }) => (
                  <a
                    key={label}
                    href={href}
                    {...(external ? { target: '_blank', rel: 'noreferrer noopener' } : {})}
                    className={primary ? 'btn-primary' : 'btn-ghost'}
                  >
                    {icon}
                    {label}
                  </a>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <form onSubmit={onSubmit} className="glass space-y-5 rounded-xl p-6 sm:p-8">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-2 block font-mono text-xs text-slate-400">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      value={form.name}
                      onChange={onChange}
                      placeholder="Your name"
                      className={fieldClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2 block font-mono text-xs text-slate-400">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      value={form.email}
                      onChange={onChange}
                      placeholder="you@example.com"
                      className={fieldClass}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="mb-2 block font-mono text-xs text-slate-400">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={onChange}
                    placeholder="Tell me about your project or opportunity…"
                    className={`${fieldClass} resize-y`}
                  />
                </div>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <button type="submit" className="btn-primary">
                    <Send size={16} aria-hidden="true" />
                    Send Message
                  </button>
                  <p className="text-xs text-slate-500" aria-live="polite">
                    {submitted
                      ? 'Your email app should open with the message ready to send.'
                      : 'This opens your email app — nothing is stored on this site.'}
                  </p>
                </div>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
