'use client'

import { useState } from 'react'

export function Header() {
  const [search, setSearch] = useState('')

  return (
    <header className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
      <div>
        <span className="label-clinical inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFF6FF] text-[#2563EB] mb-4 border border-[#2563EB]">
          Doctor Dashboard
        </span>
        <h1 className="text-[24px] font-semibold tracking-tight text-[#0F172A] mb-2">
          Good morning, Dr. Mubeen
        </h1>
        <p className="text-[14px] text-[#64748B]">Cases requiring your clinical review are listed below.</p>
      </div>
      <div className="relative w-full lg:w-96 group">
        <label htmlFor="dashboard-search" className="sr-only">
          Search patient ID or name
        </label>
        <span className="material-icons-round absolute left-4 top-1/2 -translate-y-1/2 text-[#64748B] group-focus-within:text-[#2563EB] transition-colors pointer-events-none" aria-hidden="true">
          search
        </span>
        <input
          id="dashboard-search"
          name="search"
          type="search"
          className="w-full h-12 bg-[#FFFFFF] border border-[#E2E8F0] rounded-sm pl-12 pr-4 focus:ring-2 focus:ring-[#2563EB]/40 transition-all text-[14px] text-[#0F172A]"
          placeholder="Search Patient ID or Name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          autoComplete="off"
        />
      </div>
    </header>
  )
}
