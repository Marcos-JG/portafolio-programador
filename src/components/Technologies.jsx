import { technologies } from '../data/technologies'
import SectionTitle from './SectionTitle'
import ScrollReveal from './ScrollReveal'

const categories = [
  { key: 'frontend', label: 'Frontend', percentage: 95 },
  { key: 'backend', label: 'Backend', percentage: 90 },
  { key: 'database', label: 'Bases de Datos', percentage: 90 },
  { key: 'tools', label: 'Herramientas', percentage: 90 },
]

export default function Technologies() {
  return (
    <section id="technologies" className="bg-neutral-50/50 px-6 py-24 dark:bg-neutral-900/50">
      <div className="mx-auto max-w-6xl">
        <SectionTitle title="Tecnologías" subtitle="Stack con el que trabajo habitualmente" />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map(({ key, label, percentage }) => (
            <ScrollReveal key={key}>
              <div className="rounded-2xl border border-neutral-200/60 bg-white p-6 transition-shadow hover:shadow-md dark:border-neutral-800/60 dark:bg-neutral-950">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-xs font-semibold tracking-widest text-indigo-500 dark:text-indigo-400">
                    {label.toUpperCase()}
                  </h3>
                  <span className="text-xs font-bold text-neutral-500 dark:text-neutral-400">{percentage}%</span>
                </div>
                
                <div className="mb-6 h-1.5 w-full overflow-hidden rounded-full bg-neutral-100 dark:bg-neutral-800">
                  <div
                    className="h-full rounded-full bg-indigo-500 transition-all duration-1000 dark:bg-indigo-400"
                    style={{ width: `${percentage}%` }}
                  />
                </div>

                <div className="flex flex-wrap gap-2">
                  {technologies[key].map((tech) => (
                    <span
                      key={tech.name}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-neutral-200/80 px-3 py-1.5 text-xs font-medium text-neutral-700 transition-all hover:border-neutral-300 hover:shadow-sm dark:border-neutral-700/80 dark:text-neutral-300 dark:hover:border-neutral-600"
                    >
                      <span
                        className="h-2 w-2 rounded-full"
                        style={{ backgroundColor: tech.color }}
                      />
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
