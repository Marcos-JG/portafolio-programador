import ScrollReveal from './ScrollReveal'

export default function SectionTitle({ title, subtitle }) {
  return (
    <ScrollReveal>
      <div className="mb-16 text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-50 sm:text-4xl">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-3 text-neutral-500 dark:text-neutral-400">
            {subtitle}
          </p>
        )}
      </div>
    </ScrollReveal>
  )
}
