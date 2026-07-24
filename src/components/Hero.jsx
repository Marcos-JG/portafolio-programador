import { useState } from 'react'
import { profile } from '../data/profile'
import ScrollReveal from './ScrollReveal'

export default function Hero() {
  const [imgError, setImgError] = useState(false)
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center px-6"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,#6366f1_0%,transparent_60%)] opacity-15 dark:opacity-20" />

      <ScrollReveal>
        <div className="relative max-w-2xl text-center">
          <div className="mx-auto mb-8 h-32 w-32 overflow-hidden rounded-full border-4 border-neutral-200 shadow-lg dark:border-neutral-700 sm:h-40 sm:w-40">
            {imgError ? (
              <div className="flex h-full w-full items-center justify-center bg-neutral-100 text-4xl font-semibold text-neutral-400 dark:bg-neutral-800 dark:text-neutral-500">
                {profile.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
              </div>
            ) : (
              <img
                src="/assets/Me.png"
                alt={profile.name}
                className="h-full w-full object-cover"
                onError={() => setImgError(true)}
              />
            )}
          </div>
          <p className="mb-4 text-sm font-medium tracking-wide text-indigo-500 dark:text-indigo-400">
            {profile.role.toUpperCase()}
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-50 sm:text-5xl md:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-neutral-500 dark:text-neutral-400">
            {profile.description}
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => scrollTo('projects')}
              className="rounded-xl bg-neutral-900 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-neutral-800 hover:shadow-lg dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-200"
            >
              Ver Proyectos
            </button>
            <a
              href={profile.cvUrl}
              download
              className="inline-flex items-center gap-2 rounded-xl border border-neutral-300 px-6 py-3 text-sm font-medium text-neutral-700 transition-all hover:border-neutral-400 hover:bg-neutral-50 dark:border-neutral-700 dark:text-neutral-300 dark:hover:border-neutral-600 dark:hover:bg-neutral-800"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
              Descargar CV
            </a>
            <button
              onClick={() => scrollTo('contact')}
              className="rounded-xl border border-neutral-300 px-6 py-3 text-sm font-medium text-neutral-700 transition-all hover:border-neutral-400 hover:bg-neutral-50 dark:border-neutral-700 dark:text-neutral-300 dark:hover:border-neutral-600 dark:hover:bg-neutral-800"
            >
              Contacto
            </button>
          </div>
        </div>
      </ScrollReveal>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="h-5 w-5 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </div>
    </section>
  )
}
