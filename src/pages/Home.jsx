import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '../assets/vite.svg'
import heroImg from '../assets/hero.png'

export default function Home() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section className="flex flex-col items-center gap-6 flex-1 place-content-center max-lg:px-5 max-lg:pb-6 max-lg:pt-8 max-lg:gap-4">
        <div className="relative">
          <img src={heroImg} className="relative z-0 w-[170px] h-[179px]" width="170" height="179" alt="" />
          <img
            src={reactLogo}
            className="absolute z-10"
            style={{ top: '34px', height: '28px', transform: 'perspective(2000px) rotateZ(300deg) rotateX(44deg) rotateY(39deg) scale(1.4)' }}
            alt="React logo"
          />
          <img
            src={viteLogo}
            className="absolute z-0"
            style={{ top: '107px', height: '26px', transform: 'perspective(2000px) rotateZ(300deg) rotateX(40deg) rotateY(39deg) scale(0.8)' }}
            alt="Vite logo"
          />
        </div>
        <div>
          <h1 className="m-0 text-[56px] font-medium tracking-tight max-lg:text-4xl max-lg:my-5">Get started</h1>
          <p className="m-0">
            Edit <code className="rounded bg-gray-100 px-2 py-1 text-sm font-mono dark:bg-gray-800">src/pages/Home.jsx</code> and save to test <code className="rounded bg-gray-100 px-2 py-1 text-sm font-mono dark:bg-gray-800">HMR</code>
          </p>
        </div>
        <button
          type="button"
          onClick={() => setCount((c) => c + 1)}
          className="mb-6 cursor-pointer rounded-md border-2 border-transparent bg-purple-100 px-3 py-1.5 text-base font-mono text-purple-600 transition-colors hover:border-purple-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-400 dark:bg-purple-900/30 dark:text-purple-300 dark:hover:border-purple-500"
        >
          Count is {count}
        </button>
      </section>

      <div className="relative w-full before:absolute before:-top-[4.5px] before:left-0 before:border-5 before:border-transparent before:border-l-gray-200 after:absolute after:-top-[4.5px] after:right-0 after:border-5 after:border-transparent after:border-r-gray-200 dark:before:border-l-gray-600 dark:after:border-r-gray-600" />

      <section className="flex border-t border-gray-200 text-left dark:border-gray-700 max-lg:flex-col max-lg:text-center">
        <div className="flex-1 border-r border-gray-200 p-8 dark:border-gray-700 max-lg:border-r-0 max-lg:border-b max-lg:border-gray-200 max-lg:p-6">
          <svg className="mb-4 h-[22px] w-[22px]" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2 className="m-0 mb-2 text-2xl font-medium leading-tight tracking-tight max-lg:text-xl">Documentation</h2>
          <p className="m-0 text-gray-500 dark:text-gray-400">Your questions, answered</p>
          <ul className="mt-8 flex list-none gap-2 p-0 max-lg:mt-5 max-lg:flex-wrap max-lg:justify-center">
            <li className="max-lg:flex-[1_1_calc(50%-8px)]">
              <a href="https://vite.dev/" target="_blank" className="flex items-center gap-2 rounded-md bg-gray-100/50 px-3 py-1.5 text-base text-gray-800 no-underline transition-shadow hover:shadow-md dark:bg-gray-800/50 dark:text-gray-200 max-lg:w-full max-lg:justify-center">
                <img className="h-[18px]" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li className="max-lg:flex-[1_1_calc(50%-8px)]">
              <a href="https://react.dev/" target="_blank" className="flex items-center gap-2 rounded-md bg-gray-100/50 px-3 py-1.5 text-base text-gray-800 no-underline transition-shadow hover:shadow-md dark:bg-gray-800/50 dark:text-gray-200 max-lg:w-full max-lg:justify-center">
                <img className="h-[18px] w-[18px]" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div className="flex-1 p-8 dark:border-gray-700 max-lg:p-6">
          <svg className="mb-4 h-[22px] w-[22px]" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2 className="m-0 mb-2 text-2xl font-medium leading-tight tracking-tight max-lg:text-xl">Connect with us</h2>
          <p className="m-0 text-gray-500 dark:text-gray-400">Join the Vite community</p>
          <SocialLinks />
        </div>
      </section>

      <div className="relative w-full before:absolute before:-top-[4.5px] before:left-0 before:border-5 before:border-transparent before:border-l-gray-200 after:absolute after:-top-[4.5px] after:right-0 after:border-5 after:border-transparent after:border-r-gray-200 dark:before:border-l-gray-600 dark:after:border-r-gray-600" />
      <section id="spacer" className="h-[88px] border-t border-gray-200 dark:border-gray-700 max-lg:h-12" />
    </>
  )
}

function SocialLinks() {
  const links = [
    { href: 'https://github.com/vitejs/vite', icon: 'github-icon', label: 'GitHub' },
    { href: 'https://chat.vite.dev/', icon: 'discord-icon', label: 'Discord' },
    { href: 'https://x.com/vite_js', icon: 'x-icon', label: 'X.com' },
    { href: 'https://bsky.app/profile/vite.dev', icon: 'bluesky-icon', label: 'Bluesky' },
  ]

  return (
    <ul className="mt-8 flex list-none gap-2 p-0 max-lg:mt-5 max-lg:flex-wrap max-lg:justify-center">
      {links.map((link) => (
        <li key={link.label} className="max-lg:flex-[1_1_calc(50%-8px)]">
          <a
            href={link.href}
            target="_blank"
            className="flex items-center gap-2 rounded-md bg-gray-100/50 px-3 py-1.5 text-base text-gray-800 no-underline transition-shadow hover:shadow-md dark:bg-gray-800/50 dark:text-gray-200 dark:[&_.button-icon]:invert dark:[&_.button-icon]:brightness-200 max-lg:w-full max-lg:justify-center"
          >
            <svg className="button-icon h-[18px] w-[18px]" role="presentation" aria-hidden="true">
              <use href={`/icons.svg#${link.icon}`}></use>
            </svg>
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  )
}
