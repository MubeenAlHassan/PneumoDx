'use client'

import { LandingSectionHeader } from '@/components/landing-section-header'

const fragmented = [
  'X-rays in one system, reports in another',
  'AI results with no physician sign-off trail',
  'Heatmaps buried in research papers',
  'Paper PDFs with no verify URL or audit log',
  'None of it connects in one workflow',
]

const unified = [
  'Upload → AI analysis → report → dual sign-off',
  'Grad-CAM overlays clinicians can verify instantly',
  'Structured reports with PMDC credentials & timestamps',
  'Confidence scores and heatmaps on every case',
  'One platform that sees the whole case',
]

export function LandingComparison() {
  return (
    <section className="py-20 md:py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <LandingSectionHeader
          eyebrow="The problem"
          title="Clinical data is"
          titleAccent="everywhere."
          description="For the first time, one system that sees your whole diagnostic workflow."
          size="large"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          <div className="rounded-2xl border border-[#E2E8F0] bg-white/70 backdrop-blur-sm p-8 md:p-10">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#94A3B8] mb-6">
              How diagnosis works today
            </p>
            <ul className="space-y-4">
              {fragmented.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px] text-[#64748B] leading-relaxed">
                  <span className="material-icons-round text-[18px] text-[#CBD5E1] shrink-0 mt-0.5" aria-hidden="true">
                    remove_circle_outline
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-[#BFDBFE] bg-gradient-to-br from-[#EFF6FF] to-white p-8 md:p-10 shadow-soft-1">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#2563EB] mb-6">
              How PneumoScan works
            </p>
            <ul className="space-y-4">
              {unified.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px] text-[#0F172A] leading-relaxed font-medium">
                  <span className="material-icons-round text-[18px] text-[#2563EB] shrink-0 mt-0.5" aria-hidden="true">
                    check_circle
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
