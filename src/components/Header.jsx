import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="flex items-center justify-between border-b border-gray-200 px-6 py-4 dark:border-gray-700">
      <Link to="/" className="text-lg font-semibold text-gray-900 dark:text-gray-100">
        Portafolio
      </Link>
      <nav className="flex gap-4">
        <Link to="/" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100">
          Inicio
        </Link>
      </nav>
    </header>
  )
}
