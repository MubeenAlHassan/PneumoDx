'use client'

import Link from 'next/link'
import { LandingSectionHeader } from '@/components/landing-section-header'

const steps = [
  {
    step: 'Step 1',
    title: 'We map the scan',
    description: 'Upload DICOM, JPEG, or PNG. Patient metadata and imaging land in one structured intake queue.',
    href: '/dashboard/upload',
  },
  {
    step: 'Step 2',
    title: 'AI finds the signal',
    description: 'CNN inference scores pneumonia risk and generates Grad-CAM heatmaps radiologists can verify in seconds.',
    href: '/dashboard/analysis',
  },
  {
    step: 'Step 3',
    title: 'Your report ships certified',
    description: 'Doctor signature, hospital co-sign, and tamper-evident PDF with verify URL — the full clinical record.',
    href: '/dashboard/report/preview',
  },
]

export function Workflow() {
  return (
    <section id="workflow" className="scroll-mt-28 py-20 md:py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <LandingSectionHeader
          eyebrow="Three steps"
          title="Zero"
          titleAccent="workflow friction."
          description="From upload to certified report — one continuous path your care team can trust."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {steps.map((item) => (
            <article
              key={item.step}
              className="group rounded-2xl border border-[#E2E8F0] bg-white/80 backdrop-blur-sm p-8 md:p-9 flex flex-col"
            >
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#2563EB] mb-4">{item.step}</p>
              <h3 className="text-2xl md:text-[1.65rem] font-semibold text-[#0F172A] mb-3 leading-snug">{item.title}</h3>
              <p className="text-[15px] text-[#64748B] leading-relaxed flex-1 mb-6">{item.description}</p>
              <Link
                href={item.href}
                className="inline-flex items-center gap-1 text-[13px] font-semibold text-[#2563EB] hover:underline"
              >
                View in app
                <span className="material-icons-round text-[16px] transition-transform group-hover:translate-x-0.5" aria-hidden="true">
                  arrow_forward
                </span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
