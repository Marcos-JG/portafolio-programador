export default function Footer() {
  return (
    <footer className="border-t border-neutral-200/60 px-6 py-8 dark:border-neutral-800/60">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 text-center sm:flex-row sm:text-left">
        <p className="text-xs text-neutral-400">
          &copy; {new Date().getFullYear()} Marcos García. Todos los derechos reservados.
        </p>
        <p className="text-xs text-neutral-400">
          Diseñado con cuidado, construido con código.
        </p>
      </div>
    </footer>
  )
}
