'use client'

import { ComplianceBadges } from '@/components/clinical/compliance-badges'

const metrics = [
  { icon: 'psychology', label: '94.2% demo confidence' },
  { icon: 'draw', label: 'Dual sign-off workflow' },
  { icon: 'visibility', label: 'Grad-CAM explainability' },
] as const

export function TrustStrip() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12 border-y border-slate-200/50 mb-20">
      <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-slate-500 mb-6">
        Clinical Trust &amp; Security
      </p>

      <div className="flex justify-center mb-6">
        <ComplianceBadges />
      </div>

      <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 mb-8">
        {metrics.map((m) => (
          <span
            key={m.label}
            className="inline-flex items-center gap-2 text-[13px] text-[#475569] font-medium"
          >
            <span className="material-icons-round text-[18px] text-[#2563EB]" aria-hidden="true">
              {m.icon}
            </span>
            {m.label}
          </span>
        ))}
      </div>

      <p className="text-center mono-data text-[11px] text-slate-400 max-w-2xl mx-auto leading-relaxed">
        Model trained on CheXpert + NIH ChestX-ray14 · Retrospective validation — demo data only
      </p>
    </section>
  )
}
