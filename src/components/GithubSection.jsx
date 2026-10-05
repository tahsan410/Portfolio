import { useEffect, useMemo, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { site } from '../data/site.js'
import { GitHubIcon } from './Icons.jsx'
import Reveal from './Reveal.jsx'

const API = 'https://api.github.com'
const CACHE_KEY = 'gh-activity-v1'
const WEEKS = 14

// Only real data from the public GitHub API is shown. If the request fails
// (offline, rate limit…) the section degrades to plain links.
async function loadGithub(signal) {
  try {
    const cached = sessionStorage.getItem(CACHE_KEY)
    if (cached) return JSON.parse(cached)
  } catch {
    /* storage unavailable — ignore */
  }

  const user = site.githubUser
  const [profileRes, eventsRes, reposRes] = await Promise.all([
    fetch(`${API}/users/${user}`, { signal }),
    fetch(`${API}/users/${user}/events/public?per_page=100`, { signal }),
    fetch(`${API}/users/${user}/repos?sort=pushed&per_page=8`, { signal }),
  ])
  if (!profileRes.ok || !eventsRes.ok || !reposRes.ok) throw new Error('GitHub API unavailable')

  const profile = await profileRes.json()
  const events = await eventsRes.json()
  const repos = await reposRes.json()

  const perDay = {}
  events.forEach((e) => {
    const day = e.created_at.slice(0, 10)
    perDay[day] = (perDay[day] || 0) + 1
  })

  const data = {
    publicRepos: profile.public_repos,
    perDay,
    eventCount: events.length,
    repos: repos
      .filter((r) => !/movie-explorer/i.test(r.name))
      .slice(0, 4)
      .map((r) => ({
        name: r.name,
        url: r.html_url,
        language: r.language,
        pushedAt: r.pushed_at,
      })),
  }

  try {
    sessionStorage.setItem(CACHE_KEY, JSON.stringify(data))
  } catch {
    /* ignore */
  }
  return data
}

function levelClass(count) {
  if (count === 0) return 'bg-white/[0.06]'
  if (count === 1) return 'bg-accent-500/40'
  if (count <= 3) return 'bg-accent-500/70'
  return 'bg-accent-300'
}

function buildCells(perDay) {
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const total = WEEKS * 7
  const start = new Date(today)
  start.setDate(today.getDate() - (total - 1))
  const pad = start.getDay()

  const cells = Array.from({ length: pad }, () => null)
  for (let i = 0; i < total; i += 1) {
    const d = new Date(start)
    d.setDate(start.getDate() + i)
    const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(
      d.getDate(),
    ).padStart(2, '0')}`
    cells.push({ key, count: perDay[key] || 0 })
  }
  return cells
}

function timeAgo(iso) {
  const days = Math.floor((Date.now() - new Date(iso).getTime()) / 86400000)
  if (days < 1) return 'today'
  if (days === 1) return '1 day ago'
  if (days < 30) return `${days} days ago`
  const months = Math.floor(days / 30)
  return months === 1 ? '1 month ago' : `${months} months ago`
}

export default function GithubSection() {
  const [state, setState] = useState({ status: 'loading', data: null })

  useEffect(() => {
    const controller = new AbortController()
    loadGithub(controller.signal)
      .then((data) => setState({ status: 'ready', data }))
      .catch((err) => {
        if (err.name !== 'AbortError') setState({ status: 'error', data: null })
      })
    return () => controller.abort()
  }, [])

  const cells = useMemo(
    () => (state.data ? buildCells(state.data.perDay) : []),
    [state.data],
  )

  return (
    <section
      id="github"
      aria-labelledby="github-title"
      className="section-pad border-t border-white/[0.06]"
    >
      <div className="container-x grid items-center gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Reveal>
            <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-accent-300">
              <span>07</span>
              <span aria-hidden="true" className="h-px w-10 bg-accent-400/50" />
              <span className="text-slate-400">GitHub</span>
            </div>
            <h2 id="github-title" className="mt-4 text-3xl font-semibold sm:text-4xl lg:text-[2.6rem]">
              <span className="text-gradient">Code, Build, Repeat.</span>
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-slate-400">
              Most of my work lives on GitHub — full-stack apps, REST APIs and experiments. Here is
              what has been happening lately.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={site.github} target="_blank" rel="noreferrer noopener" className="btn-primary">
                <GitHubIcon className="h-4 w-4" />
                GitHub Profile
              </a>
              <a
                href={`${site.github}?tab=repositories`}
                target="_blank"
                rel="noreferrer noopener"
                className="btn-ghost"
              >
                View Repositories
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <Reveal delay={0.1}>
            <div className="overflow-hidden rounded-xl border border-white/10 bg-ink-900/80 shadow-2xl shadow-black/40">
              <div className="flex items-center gap-3 border-b border-white/[0.08] bg-white/[0.03] px-4 py-2.5">
                <div className="flex gap-1.5" aria-hidden="true">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
                </div>
                <span className="font-mono text-xs text-slate-500">
                  github.com/{site.githubUser}
                </span>
              </div>

              <div className="p-5 font-mono text-sm sm:p-6">
                <p className="text-slate-500">
                  <span className="text-accent-300">$</span> gh activity --recent
                </p>

                {state.status === 'loading' && (
                  <p className="mt-5 text-slate-500" aria-live="polite">
                    Loading public activity…
                  </p>
                )}

                {state.status === 'error' && (
                  <p className="mt-5 text-slate-400">
                    Live activity is unavailable right now. See everything directly on{' '}
                    <a
                      href={site.github}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="text-accent-300 underline underline-offset-4 hover:text-white"
                    >
                      GitHub
                    </a>
                    .
                  </p>
                )}

                {state.status === 'ready' && state.data && (
                  <>
                    <p className="mt-5 text-slate-300">
                      <span className="text-white">{state.data.publicRepos}</span> public repositories
                    </p>

                    <div className="mt-5">
                      <div
                        className="grid grid-flow-col grid-rows-7 gap-1 overflow-x-auto pb-1"
                        role="img"
                        aria-label={`Public GitHub activity over the last ${WEEKS} weeks: ${state.data.eventCount} recent public events`}
                      >
                        {cells.map((cell, i) =>
                          cell ? (
                            <span
                              key={cell.key}
                              title={`${cell.count} public event${cell.count === 1 ? '' : 's'} on ${cell.key}`}
                              className={`h-3 w-3 rounded-[3px] ${levelClass(cell.count)}`}
                            />
                          ) : (
                            <span key={`pad-${i}`} className="h-3 w-3" />
                          ),
                        )}
                      </div>
                      <p className="mt-2 text-[11px] text-slate-500">
                        Public activity · last {WEEKS} weeks
                      </p>
                    </div>

                    {state.data.repos.length > 0 && (
                      <ul className="mt-6 divide-y divide-white/[0.06] border-t border-white/[0.06]">
                        {state.data.repos.map((repo) => (
                          <li key={repo.name}>
                            <a
                              href={repo.url}
                              target="_blank"
                              rel="noreferrer noopener"
                              className="group flex items-center justify-between gap-4 py-3 transition-colors hover:text-white"
                            >
                              <span className="min-w-0 truncate text-slate-200">{repo.name}</span>
                              <span className="flex shrink-0 items-center gap-3 text-xs text-slate-500">
                                {repo.language && <span>{repo.language}</span>}
                                <span className="hidden sm:inline">pushed {timeAgo(repo.pushedAt)}</span>
                                <ArrowUpRight
                                  size={14}
                                  aria-hidden="true"
                                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-300"
                                />
                              </span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
