'use client'

import Link from 'next/link'

export function Navigation() {

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-6xl z-50">
      <div className="glass-panel rounded-full px-6 py-3 flex items-center justify-between shadow-sm border border-slate-200/50 dark:border-slate-800/50">
        <Link
          href="/"
          className="flex items-center gap-2 cursor-pointer">
          <div className="w-8 h-8 bg-pneumo-primary rounded-lg flex items-center justify-center">
            <span className="material-icons-round text-white">biotech</span>
          </div>
          <span className="font-bold tracking-tight text-lg">
            Pneumo<span className="text-pneumo-primary">Dx</span>
          </span>
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600 dark:text-slate-300">
          <a className="hover:text-pneumo-primary transition-colors" href="#technology">
            Technology
          </a>
          <a className="hover:text-pneumo-primary transition-colors" href="#trials">
            Clinical Trials
          </a>
          <a className="hover:text-pneumo-primary transition-colors" href="#security">
            Security
          </a>
          <a className="hover:text-pneumo-primary transition-colors" href="#resources">
            Resources
          </a>
        </div>
        <Link
          href="/login"
          className="bg-pneumo-primary text-white px-5 py-2 rounded-full font-semibold text-sm hover:opacity-90 transition-opacity">
          Get Started
        </Link>
      </div>
    </nav>
  )
}
