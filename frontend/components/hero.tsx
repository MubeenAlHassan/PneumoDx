'use client'

import Link from 'next/link'
import { HeroScanVisual } from '@/components/hero-scan-visual'

const memberAvatars = ['AR', 'HS', 'CM', 'TI', 'SI']

const trustPills = [
  'HIPAA-aligned',
  'Dual sign-off',
  'Grad-CAM heatmaps',
]

export function Hero() {
  return (
    <header className="relative pt-32 md:pt-40 pb-16 md:pb-24 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-7 space-y-8">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex -space-x-2">
              {memberAvatars.map((initials) => (
                <div
                  key={initials}
                  className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-[#DBEAFE] text-[12px] font-bold text-[#2563EB]"
                >
                  {initials}
                </div>
              ))}
            </div>
            <p className="text-[14px] text-[#64748B]">
              <span className="font-semibold text-[#0F172A]">450+</span> demo chest X-rays analyzed
            </p>
          </div>

          <h1 className="text-[2.75rem] sm:text-5xl md:text-6xl lg:text-[4.25rem] leading-[1.04] font-medium tracking-tight text-[#0F172A] text-balance">
            Pneumonia detection that evolves with your{' '}
            <span className="font-serif italic text-[#2563EB]">clinical workflow.</span>
          </h1>

          <p className="text-[17px] md:text-[18px] text-[#64748B] max-w-xl leading-relaxed">
            A dedicated platform runs your AI analysis, builds structured reports, and routes doctor + hospital sign-off as your cases change.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 pt-1">
            <Link href="/register-hospital" className="btn-primary h-12 px-8 text-[15px] group">
              Register Hospital
              <span className="material-icons-round transition-transform group-hover:translate-x-1 text-[18px]">
                arrow_forward
              </span>
            </Link>
            <Link href="/dashboard/report/preview" className="btn-secondary h-12 px-8 text-[15px]">
              View Sample Report
            </Link>
          </div>
          <p className="text-[13px] text-[#64748B]">No credit card required · Demo environment</p>

          <div className="flex flex-wrap gap-2 pt-2">
            {trustPills.map((pill) => (
              <span
                key={pill}
                className="inline-flex items-center gap-1.5 rounded-full border border-[#E2E8F0] bg-white/70 px-3.5 py-1.5 text-[12px] font-medium text-[#475569]"
              >
                <span className="material-icons-round text-[14px] text-[#2563EB]" aria-hidden="true">verified</span>
                {pill}
              </span>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 relative min-w-0">
          <HeroScanVisual />
        </div>
      </div>
    </header>
  )
}
