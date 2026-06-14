'use client'

import Link from 'next/link'
import { HeroScanVisual } from '@/components/hero-scan-visual'

export function Hero() {
  return (
    <header className="relative pt-40 pb-20 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-7">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pneumo-sky text-pneumo-primary text-xs font-bold uppercase tracking-[0.12em] border border-blue-200/70">
            <span className="flex h-2 w-2 rounded-full bg-pneumo-primary animate-pulse" />
            Clinical AI Platform
          </div>
          <h1 className="text-5xl md:text-7xl leading-[1.04] font-semibold tracking-tight text-[#0F172A]">
            Faster pneumonia decisions,
            <br />
            <span className="font-serif italic text-pneumo-primary">with clinician authority.</span>
          </h1>
          <p className="text-[17px] text-slate-600 max-w-2xl leading-relaxed">
            PneumoScan helps hospitals register patients, run AI-assisted chest X-ray analysis, compose structured reports,
            and complete doctor + hospital sign-off workflows in one premium clinical interface.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Link href="/login" className="btn-primary h-12 px-7 text-[15px] group">
              Start Clinical Workflow
              <span className="material-icons-round transition-transform group-hover:translate-x-1">
                arrow_forward
              </span>
            </Link>
            <Link href="/dashboard/report/preview" className="btn-secondary h-12 px-7 text-[15px]">
              View Sample Report
            </Link>
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-[13px] text-slate-500">
            <span className="inline-flex items-center gap-1.5"><span className="material-icons-round text-[16px] text-emerald-600">verified</span> Doctor + Admin Sign-off</span>
            <span className="inline-flex items-center gap-1.5"><span className="material-icons-round text-[16px] text-emerald-600">lock</span> HIPAA-aligned Security</span>
            <span className="inline-flex items-center gap-1.5"><span className="material-icons-round text-[16px] text-emerald-600">bolt</span> 8–15s AI Turnaround</span>
          </div>
        </div>

        <div className="lg:col-span-5 relative min-w-0">
          <HeroScanVisual />
        </div>
      </div>
    </header>
  )
}
