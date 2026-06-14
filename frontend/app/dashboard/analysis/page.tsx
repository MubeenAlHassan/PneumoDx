'use client'

import { ViewTransition, useState } from 'react'
import Link from 'next/link'
import { DashboardShell } from '@/components/dashboard/shell'
import { PageHeader } from '@/components/dashboard/page-header'
import { AiResultBadge } from '@/components/dashboard/badges'

const views = [
  { id: 'original', label: 'Original' },
  { id: 'heatmap', label: 'Heatmap' },
  { id: 'side', label: 'Side-by-side' },
] as const

const confidence = [
  { label: 'Pneumonia', value: 94, color: '#EF4444' },
  { label: 'Normal / Clear', value: 4, color: '#10B981' },
  { label: 'Uncertain', value: 2, color: '#64748B' },
]

const severityFilled = 3
const xrayImg =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDWaTkPUEXErwkYIqoLxGjghCfLNU0PhfjCOybqCXaKZCNysChzeu_Bervd_GHxRzob-3gUQBkLC_wY1Qpim2JUQ2h0E1LspPKvn35Z64HR9HkDiEz_wjK95r7xNcIhY3bV_Gqx9ImvlREVvsptQ66hYtdK8qvrgx5FU26RQ-GaX2LF2IoETI_XjHB3mnHEskPEn3NtVfMmBbTp6eOpbIvX8W7SYwVTDDdbD40W6PGIjsYgOrOh0yZg9Fy7EQgXqD7b4apdC_Ss4-I'

export default function AnalysisPage() {
  const [view, setView] = useState<(typeof views)[number]['id']>('heatmap')

  return (
    <ViewTransition>
      <DashboardShell>
        <PageHeader
          eyebrow="AI Analysis Results"
          title="Chest X-Ray"
          serifAccent="Analysis"
          subtitle="Patient: Ayesha Raza · MRN-20240612"
          backHref="/dashboard/patients"
          backLabel="Back to Patients"
          actions={
            <Link href="/dashboard/report" className="btn-primary">
              Send to Doctor
              <span className="material-icons-round text-[18px]" aria-hidden="true">arrow_forward</span>
            </Link>
          }
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* X-ray viewer */}
          <section className="card-panel p-6">
            <h2 className="label-clinical text-[#64748B] mb-4">X-Ray Viewer</h2>
            <div className="relative rounded-lg overflow-hidden border border-[#E2E8F0] bg-black">
              <img src={xrayImg} alt="Chest X-ray, posteroanterior view" className="w-full h-[360px] object-cover" />
              {view !== 'original' && (
                <>
                  <div className="absolute inset-0 bg-[#2563EB]/20 mix-blend-overlay" aria-hidden="true" />
                  <div
                    className="absolute right-[22%] bottom-[26%] h-24 w-24 rounded-full"
                    style={{ background: 'radial-gradient(circle, rgba(248,113,113,0.6) 0%, rgba(251,191,36,0.25) 55%, transparent 75%)' }}
                    aria-hidden="true"
                  />
                </>
              )}
              <div className="absolute bottom-3 left-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#EF4444] animate-pulse" aria-hidden="true" />
                <span className="label-clinical text-white">Right Lower Lobe</span>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-2">
              {views.map((v) => (
                <button
                  key={v.id}
                  type="button"
                  onClick={() => setView(v.id)}
                  className={`h-8 px-3 rounded-sm text-[13px] font-medium transition-colors border ${
                    view === v.id
                      ? 'bg-[#EFF6FF] text-[#2563EB] border-[#2563EB]'
                      : 'bg-transparent text-[#64748B] border-[#E2E8F0] hover:text-[#0F172A]'
                  }`}
                >
                  {v.label}
                </button>
              ))}
            </div>

            <div className="mt-4 flex items-center justify-between border-t border-[#E2E8F0] pt-4">
              <div className="flex items-center gap-3 text-[#64748B]">
                <span className="label-clinical">Zoom</span>
                <button className="h-7 w-7 rounded-sm border border-[#E2E8F0] hover:text-[#2563EB]" aria-label="Zoom out">–</button>
                <span className="mono-data text-[#0F172A]">100%</span>
                <button className="h-7 w-7 rounded-sm border border-[#E2E8F0] hover:text-[#2563EB]" aria-label="Zoom in">+</button>
              </div>
              <button className="btn-ghost">
                <span className="material-icons-round text-[18px]" aria-hidden="true">download</span>
                Download DICOM
              </button>
            </div>
          </section>

          {/* AI analysis results */}
          <section className="space-y-6">
            <div className="card-panel p-6">
              <div className="flex items-center justify-between gap-4">
                <AiResultBadge result="detected" />
                <span className="mono-data text-[#0F172A] text-[16px]">94.2%</span>
              </div>
              <p className="mt-2 text-[13px] text-[#64748B]">Confidence that pneumonia is present in this scan.</p>
            </div>

            <div className="card-panel p-6">
              <h3 className="text-[18px] font-semibold text-[#0F172A] mb-4">Severity Assessment</h3>
              <dl className="space-y-3 text-[14px]">
                <div className="flex items-center justify-between">
                  <dt className="text-[#64748B]">Severity</dt>
                  <dd className="flex items-center gap-2 text-[#0F172A]">
                    <span className="flex gap-1" aria-hidden="true">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <span key={i} className={`h-2 w-2 rounded-full ${i < severityFilled ? 'bg-[#F59E0B]' : 'bg-[#E2E8F0]'}`} />
                      ))}
                    </span>
                    Moderate
                  </dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="text-[#64748B]">Lung Zone</dt>
                  <dd className="text-[#0F172A]">Right Lower Lobe</dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="text-[#64748B]">Laterality</dt>
                  <dd className="text-[#0F172A]">Unilateral</dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="text-[#64748B]">Pattern</dt>
                  <dd className="text-[#0F172A]">Consolidation</dd>
                </div>
              </dl>
            </div>

            <div className="card-panel p-6">
              <h3 className="text-[18px] font-semibold text-[#0F172A] mb-4">Confidence Breakdown</h3>
              <div className="space-y-3">
                {confidence.map((c) => (
                  <div key={c.label}>
                    <div className="flex items-center justify-between text-[13px] mb-1">
                      <span className="text-[#0F172A]">{c.label}</span>
                      <span className="mono-data text-[#64748B]">{c.value}%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-[#F8FAFC] border border-[#E2E8F0] overflow-hidden">
                      <div className="h-full rounded-full" style={{ width: `${c.value}%`, background: c.color }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="card-panel p-6">
              <h3 className="text-[18px] font-semibold text-[#0F172A] mb-4">Model Information</h3>
              <dl className="space-y-2 text-[13px]">
                {[
                  ['Model', 'PneumoNet v2.4 (ResNet-50)'],
                  ['Trained on', 'CheXpert + NIH ChestX-ray14'],
                  ['Analysis ID', 'AI-2024-06-14-0821'],
                  ['Processed at', '09:42:11 PKT'],
                ].map(([k, v]) => (
                  <div key={k} className="flex items-center justify-between">
                    <dt className="text-[#64748B]">{k}</dt>
                    <dd className="mono-data text-[#0F172A]">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="rounded-sm border border-[#F59E0B]/30 bg-[#F59E0B]/10 p-4 flex items-start gap-3">
              <span className="material-icons-round text-[#F59E0B] text-[20px]" aria-hidden="true">warning</span>
              <p className="text-[13px] text-[#0F172A]">
                This AI result is a clinical aid. Physician review and sign-off are required before it becomes a certified report.
              </p>
            </div>

            <div className="space-y-3">
              <Link href="/dashboard/report" className="btn-primary w-full">
                Proceed to Doctor Review
                <span className="material-icons-round text-[18px]" aria-hidden="true">arrow_forward</span>
              </Link>
              <button type="button" className="btn-secondary w-full">
                <span className="material-icons-round text-[18px]" aria-hidden="true">flag</span>
                Flag for Re-analysis
              </button>
            </div>
          </section>
        </div>
      </DashboardShell>
    </ViewTransition>
  )
}
