import { technologies } from '../data/technologies'
import SectionTitle from './SectionTitle'
import ScrollReveal from './ScrollReveal'

const categories = [
  { key: 'frontend', label: 'Frontend' },
  { key: 'backend', label: 'Backend' },
  { key: 'database', label: 'Bases de Datos' },
  { key: 'tools', label: 'Herramientas' },
]

export default function Technologies() {
  return (
    <section id="technologies" className="bg-neutral-50/50 px-6 py-24 dark:bg-neutral-900/50">
      <div className="mx-auto max-w-6xl">
        <SectionTitle title="Tecnologías" subtitle="Stack con el que trabajo habitualmente" />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map(({ key, label }) => (
            <ScrollReveal key={key}>
              <div className="rounded-2xl border border-neutral-200/60 bg-white p-6 transition-shadow hover:shadow-md dark:border-neutral-800/60 dark:bg-neutral-950">
                <h3 className="mb-5 text-xs font-semibold tracking-widest text-indigo-500 dark:text-indigo-400">
                  {label}
                </h3>
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
