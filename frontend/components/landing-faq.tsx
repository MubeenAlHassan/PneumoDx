'use client'

import { useState } from 'react'
import { LandingSectionHeader } from '@/components/landing-section-header'

const faqs = [
  {
    q: 'How is PneumoScan different from a regular PACS viewer?',
    a: 'PACS stores images. PneumoScan runs AI analysis, surfaces explainable heatmaps, composes structured reports, and routes doctor + hospital sign-off — all in one workflow with a full audit trail.',
  },
  {
    q: 'Does the AI replace the radiologist?',
    a: 'No. PneumoScan is a clinical aid. Every positive finding requires physician review, digital signature, and optional hospital co-certification before a report becomes legally binding.',
  },
  {
    q: 'How fast is the analysis?',
    a: 'Demo inference typically completes in 8–15 seconds after upload, including heatmap generation and confidence scoring.',
  },
  {
    q: 'Is patient data secure?',
    a: 'The platform is designed with HIPAA-aligned principles: encryption in transit and at rest, role-based access, and append-only audit logs for uploads, inferences, and report access.',
  },
  {
    q: 'Can we preview a certified report?',
    a: 'Yes. Visit the sample certified PDF preview to see the full hospital header, dual signatures, and verify URL layout before onboarding.',
  },
]

export function LandingFaq() {
  const [open, setOpen] = useState(0)

  return (
    <section id="faq" className="scroll-mt-28 py-20 md:py-28 px-6">
      <div className="max-w-3xl mx-auto">
        <LandingSectionHeader
          eyebrow="Questions?"
          title="We've got"
          titleAccent="answers."
          align="center"
        />

        <div className="space-y-3">
          {faqs.map((item, i) => {
            const isOpen = open === i
            return (
              <div key={item.q} className="rounded-xl border border-[#E2E8F0] bg-white/80 backdrop-blur-sm overflow-hidden">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-[15px] font-semibold text-[#0F172A]">{item.q}</span>
                  <span className="material-icons-round text-[#64748B] shrink-0" aria-hidden="true">
                    {isOpen ? 'expand_less' : 'expand_more'}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-[14px] text-[#64748B] leading-relaxed border-t border-[#E2E8F0]/80 pt-4">
                    {item.a}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
