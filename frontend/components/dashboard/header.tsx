'use client'

import { useState } from 'react'

export function Header() {
  const [search, setSearch] = useState('')

  return (
    <header className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
      <div>
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pneumo-primary/10 text-pneumo-primary text-xs font-bold uppercase tracking-wider mb-4">
          Live Operations
        </span>
        <h1 className="text-3xl lg:text-4xl font-medium tracking-tight text-slate-900 dark:text-white mb-2">
          Good Morning, <span className="font-serif italic text-pneumo-primary">Dr. Mubeen</span>
        </h1>
        <p className="text-slate-500 dark:text-slate-400">Ready to review today's pneumonia diagnostic cases.</p>
      </div>
      <div className="relative w-full lg:w-96 group">
        <span className="material-icons-round absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-pneumo-primary transition-colors">search</span>
        <input 
          className="w-full h-12 glass-panel border border-slate-200/60 dark:border-slate-800/60 rounded-2xl pl-12 pr-4 focus:ring-2 focus:ring-pneumo-primary/20 transition-all text-sm text-slate-700 dark:text-slate-200" 
          placeholder="Search Patient ID or Name..." 
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </header>
  )
}
