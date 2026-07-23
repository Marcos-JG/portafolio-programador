import { experience } from '../data/experience'
import SectionTitle from './SectionTitle'
import ScrollReveal from './ScrollReveal'

export default function Experience() {
  return (
    <section id="experience" className="bg-neutral-50/50 px-6 py-24 dark:bg-neutral-900/50">
      <div className="mx-auto max-w-3xl">
        <SectionTitle title="Experiencia y Educación" subtitle="Mi trayectoria profesional y formativa" />

        <div className="relative">
          <div className="absolute left-4 top-2 h-[calc(100%-1rem)] w-px bg-neutral-200 dark:bg-neutral-800" />

          <div className="space-y-10">
            {experience.map((item) => (
              <ScrollReveal key={item.id}>
                <div className="relative pl-12">
                  <div
                    className={`absolute left-2.5 top-1.5 h-3 w-3 rounded-full border-2 ${
                      item.type === 'experience'
                        ? 'border-indigo-500 bg-white dark:bg-neutral-950'
                        : 'border-emerald-500 bg-white dark:bg-neutral-950'
                    }`}
                  />
                  <div className="rounded-2xl border border-neutral-200/60 bg-white p-6 transition-shadow hover:shadow-md dark:border-neutral-800/60 dark:bg-neutral-950">
                    <div className="mb-1 flex items-center gap-3">
                      <span
                        className={`rounded-full px-2.5 py-0.5 text-[11px] font-semibold tracking-wider ${
                          item.type === 'experience'
                            ? 'bg-indigo-100 text-indigo-600 dark:bg-indigo-900/40 dark:text-indigo-400'
                            : 'bg-emerald-100 text-emerald-600 dark:bg-emerald-900/40 dark:text-emerald-400'
                        }`}
                      >
                        {item.type === 'experience' ? 'TRABAJO' : 'ESTUDIO'}
                      </span>
                      <span className="text-xs text-neutral-400">{item.period}</span>
                    </div>
                    <h3 className="text-base font-semibold text-neutral-900 dark:text-neutral-50">
                      {item.title}
                    </h3>
                    <p className="mt-0.5 text-sm font-medium text-indigo-500 dark:text-indigo-400">
                      {item.institution}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
