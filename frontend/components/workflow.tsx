'use client'

import Link from 'next/link'

const steps = [
  {
    number: '01',
    title: 'Rapid Ingestion',
    description: 'Upload chest X-ray images in DICOM or standard formats for processing.',
    icon: 'upload_file',
    href: '/dashboard/upload',
    preview: (
      <div className="mt-4 rounded-lg border border-dashed border-[#E2E8F0] bg-[#F8FAFC] p-4 text-center">
        <span className="material-icons-round text-[#2563EB] text-[24px]" aria-hidden="true">cloud_upload</span>
        <p className="text-[11px] text-[#64748B] mt-2">Drop DICOM, JPEG, or PNG</p>
      </div>
    ),
  },
  {
    number: '02',
    title: 'Neural Inference',
    description: 'CNN analyzes images for pneumonia-related patterns with confidence scoring.',
    icon: 'psychology',
    href: '/dashboard/analysis',
    preview: (
      <div className="mt-4 rounded-lg border border-[#E2E8F0] bg-[#0B1220] h-20 flex items-center justify-center">
        <span className="badge-status badge-ai-ready">
          <span aria-hidden="true">●</span>
          AI Ready · 94.2%
        </span>
      </div>
    ),
  },
  {
    number: '03',
    title: 'Expert Validation',
    description: 'Heatmaps highlight affected regions for radiologist reference and sign-off.',
    icon: 'fact_check',
    href: '/dashboard/report',
    preview: (
      <div className="mt-4 rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] p-3 text-[11px] text-[#64748B]">
        <p className="font-medium text-[#0F172A] mb-1">Clinical Findings</p>
        <p className="line-clamp-2">Consolidation in right lower lobe…</p>
      </div>
    ),
  },
  {
    number: '04',
    title: 'Final Report',
    description: 'Certified PDF with doctor + hospital signatures and verify URL.',
    icon: 'description',
    href: '/dashboard/report/preview',
    preview: (
      <div className="mt-4 rounded-lg border border-[#E2E8F0] bg-[#0F172A] p-3 flex items-center gap-2">
        <span className="material-icons-round text-white text-[18px]" aria-hidden="true">workspace_premium</span>
        <span className="text-[11px] text-white/90 font-medium">Certified PDF</span>
      </div>
    ),
  },
]

export function Workflow() {
  return (
    <section id="workflow" className="scroll-mt-28 py-20 md:py-28 px-6 animate-fade-up">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="label-clinical inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pneumo-sky text-pneumo-primary border border-blue-200/70 mb-4">
            How It Works
          </span>
          <h2 className="text-4xl font-medium mb-4 text-[#0F172A]">
            The <span className="font-serif italic text-pneumo-primary">clinical</span> workflow
          </h2>
          <p className="text-slate-600">How we move from intake to certified report with confidence.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          <div className="hidden md:block absolute top-[88px] left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-transparent via-[#2563EB]/30 to-transparent" aria-hidden="true" />

          {steps.map((step) => (
            <div key={step.number} className="relative flex flex-col items-center text-center group">
              <div className="w-20 h-20 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center border border-slate-200/80 mb-6 group-hover:border-pneumo-primary transition-colors shadow-soft-1 relative z-10">
                <span className="material-icons-round text-pneumo-primary text-3xl">{step.icon}</span>
              </div>
              <span className="text-xs font-bold text-pneumo-primary uppercase tracking-widest mb-2">Step {step.number}</span>
              <h4 className="text-xl font-semibold mb-2 text-[#0F172A]">{step.title}</h4>
              <p className="text-sm text-slate-500 px-2 mb-2">{step.description}</p>
              <div className="w-full max-w-[200px]">{step.preview}</div>
              <Link
                href={step.href}
                className="mt-4 text-[12px] font-semibold text-[#2563EB] hover:underline inline-flex items-center gap-1"
              >
                View in app
                <span className="material-icons-round text-[14px]" aria-hidden="true">arrow_forward</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
