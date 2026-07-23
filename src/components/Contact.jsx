import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { contactInfo } from '../data/profile'
import { socialLinks } from '../data/social'
import SectionTitle from './SectionTitle'
import ScrollReveal from './ScrollReveal'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(() => {
        setSent(true)
        form.reset()
      })
      .catch(() => {
        window.open(`mailto:${contactInfo.email}?subject=Contacto desde portafolio&body=${encodeURIComponent(`Nombre: ${form.name.value}\nCorreo: ${form.email.value}\nMensaje: ${form.message.value}`)}`)
      })
  }

  return (
    <section id="contact" className="bg-neutral-50/50 px-6 py-24 dark:bg-neutral-900/50">
      <div className="mx-auto max-w-6xl">
        <SectionTitle title="Contacto" />

        <div className="mx-auto max-w-lg">
          <ScrollReveal>
            <div className="mb-10 flex justify-center gap-6">
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-neutral-500 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-50"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                GitHub
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-neutral-500 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-50"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
              <a
                href={socialLinks.email}
                className="flex items-center gap-2 text-sm text-neutral-500 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-50"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                {contactInfo.email}
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-xs font-semibold tracking-wide text-neutral-600 dark:text-neutral-400">
                  NOMBRE
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full rounded-xl border border-neutral-200/80 bg-white px-4 py-3 text-sm text-neutral-900 outline-none transition-all placeholder:text-neutral-400 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 dark:border-neutral-700/80 dark:bg-neutral-950 dark:text-neutral-50 dark:placeholder:text-neutral-500 dark:focus:border-indigo-500 dark:focus:ring-indigo-900/40"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-xs font-semibold tracking-wide text-neutral-600 dark:text-neutral-400">
                  CORREO
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-xl border border-neutral-200/80 bg-white px-4 py-3 text-sm text-neutral-900 outline-none transition-all placeholder:text-neutral-400 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 dark:border-neutral-700/80 dark:bg-neutral-950 dark:text-neutral-50 dark:placeholder:text-neutral-500 dark:focus:border-indigo-500 dark:focus:ring-indigo-900/40"
                  placeholder="tu@correo.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-1.5 block text-xs font-semibold tracking-wide text-neutral-600 dark:text-neutral-400">
                  MENSAJE
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full resize-none rounded-xl border border-neutral-200/80 bg-white px-4 py-3 text-sm text-neutral-900 outline-none transition-all placeholder:text-neutral-400 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 dark:border-neutral-700/80 dark:bg-neutral-950 dark:text-neutral-50 dark:placeholder:text-neutral-500 dark:focus:border-indigo-500 dark:focus:ring-indigo-900/40"
                  placeholder="Cuéntame sobre tu proyecto..."
                />
              </div>
              <button
                type="submit"
                disabled={sent}
                className="w-full rounded-xl bg-neutral-900 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-neutral-800 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-200"
              >
                {sent ? 'Mensaje enviado' : 'Enviar mensaje'}
              </button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
