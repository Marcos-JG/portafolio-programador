import { profile } from '../data/profile'
import SectionTitle from './SectionTitle'
import ScrollReveal from './ScrollReveal'

export default function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionTitle title="Sobre mí" subtitle="Conoce un poco más sobre mi trayectoria" />

        <div className="grid gap-12 md:grid-cols-2">
          <ScrollReveal>
            <div>
              {profile.about.map((paragraph, i) => (
                <p key={i} className="text-neutral-600 leading-relaxed dark:text-neutral-300 [&:not(:last-child)]:mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="rounded-2xl border border-neutral-200/60 bg-neutral-50/50 p-8 dark:border-neutral-800/60 dark:bg-neutral-900/50">
              <h3 className="mb-4 text-sm font-semibold tracking-wide text-indigo-500 dark:text-indigo-400">
                OBJETIVOS PROFESIONALES
              </h3>
              <ul className="space-y-3">
                {profile.objectives.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-neutral-600 dark:text-neutral-300">
                    <svg className="mt-1 h-4 w-4 shrink-0 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
