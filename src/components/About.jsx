import { profile, contactInfo } from '../data/profile'
import SectionTitle from './SectionTitle'
import ScrollReveal from './ScrollReveal'

export default function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionTitle title="Sobre mí" subtitle="Conoce un poco más sobre mi trayectoria" />

        <ScrollReveal>
          <div className="mx-auto mb-12 max-w-3xl text-center">
            {profile.about.map((paragraph, i) => (
              <p key={i} className="text-neutral-600 leading-relaxed dark:text-neutral-300 [&:not(:last-child)]:mb-4">
                {paragraph}
              </p>
            ))}
          </div>
        </ScrollReveal>

        <div className="grid gap-8 md:grid-cols-2">
          <ScrollReveal>
            <div className="rounded-2xl border border-neutral-200/60 bg-neutral-50/50 p-6 dark:border-neutral-800/60 dark:bg-neutral-900/50">
              <h3 className="mb-5 text-xs font-semibold tracking-widest text-indigo-500 dark:text-indigo-400">
                DATOS GENERALES
              </h3>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <span className="text-xs font-medium text-neutral-400 dark:text-neutral-500">Nombre</span>
                  <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300">{profile.name}</p>
                </div>
                <div>
                  <span className="text-xs font-medium text-neutral-400 dark:text-neutral-500">Edad</span>
                  <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300">{profile.generalData.age} años</p>
                </div>
                <div>
                  <span className="text-xs font-medium text-neutral-400 dark:text-neutral-500">Experiencia</span>
                  <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300">{profile.generalData.experienceYears} años desarrollando</p>
                </div>
                <div>
                  <span className="text-xs font-medium text-neutral-400 dark:text-neutral-500">Formación</span>
                  <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300">{profile.generalData.education}</p>
                </div>
                <div className="sm:col-span-2">
                  <span className="text-xs font-medium text-neutral-400 dark:text-neutral-500">Contacto</span>
                  <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300">{contactInfo.email} / {contactInfo.phone}</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="rounded-2xl border border-neutral-200/60 bg-neutral-50/50 p-6 dark:border-neutral-800/60 dark:bg-neutral-900/50">
              <h3 className="mb-5 text-xs font-semibold tracking-widest text-indigo-500 dark:text-indigo-400">
                OBJETIVOS PROFESIONALES
              </h3>
              <ul className="space-y-4">
                {profile.objectives.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-neutral-600 dark:text-neutral-300">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-xs font-semibold text-indigo-600 dark:bg-indigo-900/40 dark:text-indigo-400">
                      {i + 1}
                    </span>
                    <span className="text-sm">{item}</span>
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
