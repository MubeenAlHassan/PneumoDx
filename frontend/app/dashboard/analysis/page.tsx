'use client'

import { ViewTransition, useState } from 'react'
import Link from 'next/link'
import { toast } from 'sonner'
import { DashboardShell } from '@/components/dashboard/shell'
import { PageHeader } from '@/components/dashboard/page-header'
import { AiResultBadge } from '@/components/dashboard/badges'
import { XrayViewer, XrayViewToggle } from '@/components/clinical/xray-viewer'
import type { XrayViewMode } from '@/components/clinical/constants'

const confidence = [
  { label: 'Pneumonia', value: 94, color: '#EF4444' },
  { label: 'Normal / Clear', value: 4, color: '#10B981' },
  { label: 'Uncertain', value: 2, color: '#64748B' },
]

const severityFilled = 3

export default function AnalysisPage() {
  const [view, setView] = useState<XrayViewMode>('heatmap')

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
          <section className="card-panel p-6">
            <h2 className="label-clinical text-[#64748B] mb-4">X-Ray Viewer</h2>
            <div className="relative rounded-lg overflow-hidden border border-[#E2E8F0]">
              <XrayViewer viewMode={view} variant="dashboard" showCorners showZoneLabel />
            </div>

            <div className="mt-4">
              <XrayViewToggle view={view} onChange={setView} />
            </div>

            <div className="mt-4 flex items-center justify-between border-t border-[#E2E8F0] pt-4">
              <div className="flex items-center gap-3 text-[#64748B]">
                <span className="label-clinical">Zoom</span>
                <button type="button" className="h-7 w-7 rounded-sm border border-[#E2E8F0] hover:text-[#2563EB]" aria-label="Zoom out">–</button>
                <span className="mono-data text-[#0F172A]">100%</span>
                <button type="button" className="h-7 w-7 rounded-sm border border-[#E2E8F0] hover:text-[#2563EB]" aria-label="Zoom in">+</button>
              </div>
              <button
                type="button"
                className="btn-ghost"
                onClick={() => toast.success('DICOM export queued', { description: 'MRN-20240612 · demo mode' })}
              >
                <span className="material-icons-round text-[18px]" aria-hidden="true">download</span>
                Download DICOM
              </button>
            </div>
          </section>

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
              <button
                type="button"
                className="btn-secondary w-full"
                onClick={() => toast.info('Case flagged for re-analysis', { description: 'MRN-20240612 queued — demo mode' })}
              >
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
