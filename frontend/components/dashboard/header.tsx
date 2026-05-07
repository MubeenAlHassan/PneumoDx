'use client'

import { useState } from 'react'

export function Header() {
  const [search, setSearch] = useState('')

  return (
    <header className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-10">
      <div>
        <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-2">
          Good Morning, <span className="text-pneumo-primary">Dr. Mubeen</span>
        </h1>
        <p className="text-slate-500 dark:text-slate-400 font-medium">Ready to review today's pneumonia diagnostic cases.</p>
      </div>
      <div className="relative w-full lg:w-96 group">
        <span className="material-icons absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-pneumo-primary transition-colors">search</span>
        <input 
          className="w-full bg-white dark:bg-slate-900/50 border-none rounded-xl py-4 pl-12 pr-4 shadow-sm focus:ring-2 focus:ring-pneumo-primary/20 transition-all text-slate-700 dark:text-slate-200" 
          placeholder="Search Patient ID or Name..." 
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </header>
  )
}
