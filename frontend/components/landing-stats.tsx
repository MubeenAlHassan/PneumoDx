'use client'

import { LandingSectionHeader } from '@/components/landing-section-header'

const stats = [
  { value: '94.2%', label: 'demo AI confidence on flagged cases', sub: 'Retrospective validation' },
  { value: '8–15s', label: 'typical analysis turnaround', sub: 'Emergency triage ready' },
  { value: 'Dual', label: 'doctor + hospital sign-off', sub: 'Tamper-evident PDF reports' },
]

export function LandingStats() {
  return (
    <section id="results" className="scroll-mt-28 py-20 md:py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <LandingSectionHeader
          eyebrow="Real data. Real workflows."
          title="Built for"
          titleAccent="clinical results."
          description="Demo metrics from our validation pipeline — designed for hospitals that need speed and accountability."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-[#E2E8F0] bg-white/80 backdrop-blur-sm p-8 text-center"
            >
              <p className="text-5xl md:text-6xl font-serif italic text-[#2563EB] mb-3">{s.value}</p>
              <p className="text-[15px] font-medium text-[#0F172A] leading-snug mb-2">{s.label}</p>
              <p className="text-[13px] text-[#64748B]">{s.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
