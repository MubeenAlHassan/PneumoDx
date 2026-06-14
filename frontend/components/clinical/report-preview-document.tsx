'use client'

import { useState } from 'react'
import { DEMO_CASE } from '@/components/clinical/constants'
import { ReportMetaGrid } from '@/components/clinical/report-meta-grid'
import { SignatureBlock } from '@/components/clinical/signature-block'
import { XrayViewer, XrayViewToggle } from '@/components/clinical/xray-viewer'
import type { XrayViewMode } from '@/components/clinical/constants'
import { AiResultBadge } from '@/components/dashboard/badges'
import { PneumoScanLogo } from '@/components/brand/pneumoscan-logo'

interface ReportPreviewDocumentProps {
  certified?: boolean
  compact?: boolean
}

export function ReportPreviewDocument({ certified = true, compact = false }: ReportPreviewDocumentProps) {
  const [view, setView] = useState<XrayViewMode>('heatmap')
  const c = DEMO_CASE

  return (
    <article className={`bg-white border border-[#E2E8F0] shadow-soft-2 overflow-hidden ${compact ? 'rounded-lg' : 'rounded-xl'}`}>
      {/* Hospital header band */}
      <header className="bg-[#0F172A] text-white px-6 py-5">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-[11px] uppercase tracking-[0.14em] text-white/70 font-semibold mb-1">
              {c.hospitalName}
            </p>
            <p className="text-[13px] text-white/85">{c.hospitalLocation}</p>
          </div>
          <div className="flex items-center gap-2.5">
            <PneumoScanLogo className="h-8 w-8 text-white" variant="light" />
            <div className="text-right">
              <p className="font-serif text-[15px] font-semibold">PneumoScan</p>
              <p className="mono-data text-[11px] text-white/70">AI Report v1</p>
            </div>
          </div>
        </div>
      </header>

      <div className={`space-y-6 ${compact ? 'p-5' : 'p-6 md:p-8'}`}>
        <div className="flex flex-wrap items-start justify-between gap-4 border-b border-[#E2E8F0] pb-6">
          <div>
            <h1 className="font-serif text-[22px] md:text-[26px] font-semibold text-[#0F172A] leading-tight">
              Radiology Report — Chest X-Ray (PA View)
            </h1>
            <p className="mono-data text-[#2563EB] mt-1">{c.reportNo}</p>
          </div>
          <AiResultBadge result="detected" confidence={94} />
        </div>

        <ReportMetaGrid
          columns={[
            [
              { label: 'Name', value: c.patientName },
              { label: 'MRN', value: c.mrn, mono: true },
              { label: 'DOB', value: c.dob },
              { label: 'Age', value: c.age },
              { label: 'Gender', value: c.gender },
            ],
            [
              { label: 'Report Date', value: c.reportDate },
              { label: 'Scan Date', value: c.scanDate, mono: true },
              { label: 'Department', value: c.ward },
              { label: 'Scan Type', value: c.scanType },
            ],
          ]}
        />

        <div className="border-t border-[#E2E8F0] pt-6">
          <p className="label-clinical text-[#64748B] mb-4">AI Analysis Result</p>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_200px] gap-6">
            <div>
              <XrayViewer viewMode={view} variant="report" showCorners showZoneLabel />
              {!compact && (
                <div className="mt-3">
                  <XrayViewToggle view={view} onChange={setView} compact />
                </div>
              )}
            </div>
            <dl className="space-y-2 text-[14px] self-start">
              {[
                ['AI Model', c.model],
                ['Result', 'Pneumonia Detected'],
                ['Confidence', c.confidence],
                ['Severity', c.severity],
                ['Zone', c.zone],
              ].map(([k, v]) => (
                <div key={k} className="flex items-center justify-between gap-3">
                  <dt className="text-[#64748B]">{k}</dt>
                  <dd className={`text-[#0F172A] ${k === 'Confidence' ? 'mono-data' : ''}`}>{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="border-t border-[#E2E8F0] pt-6">
          <p className="label-clinical text-[#64748B] mb-2">
            Physician Report — {c.physicianName}, {c.physicianCredentials}
          </p>
          <p className="mono-data text-[12px] text-[#64748B] mb-4">
            PMDC No.: {c.pmdcNo} · {c.hospitalName}
          </p>
          <p className="text-[14px] leading-relaxed text-[#0F172A] mb-4">{c.findings}</p>
          <p className="text-[14px] font-semibold text-[#0F172A] mb-2">Diagnosis: {c.diagnosis}</p>
          <div>
            <p className="label-clinical text-[#64748B] mb-2">Recommendations</p>
            <ol className="list-decimal list-inside space-y-1 text-[14px] text-[#0F172A]">
              {c.recommendations.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ol>
          </div>
        </div>

        {certified && (
          <div className="border-t border-[#E2E8F0] pt-6">
            <p className="label-clinical text-[#64748B] mb-6">Signatures &amp; Certification</p>
            <SignatureBlock
              doctor={{
                role: 'Doctor Signature',
                name: c.physicianName,
                credentials: c.physicianCredentials,
                registryNo: c.pmdcNo,
                signedAt: c.signedAt,
                hash: c.sigHash,
              }}
              hospital={{
                role: 'Hospital Certification',
                name: c.adminName,
                credentials: 'Hospital Administrator',
                signedAt: c.certifiedAt,
                hash: c.certHash,
                seal: true,
              }}
            />
          </div>
        )}

        <footer className="border-t border-[#E2E8F0] pt-5 text-[12px] text-[#64748B] leading-relaxed">
          <p className="flex items-start gap-2">
            <span className="material-icons-round text-[16px] text-[#F59E0B] shrink-0 mt-0.5" aria-hidden="true">
              warning
            </span>
            This report is generated with AI assistance. Final clinical interpretation and responsibility rests with the
            signing physician.
          </p>
          <p className="mono-data mt-3 text-[#64748B]">
            Verify report authenticity at: {c.verifyUrl}
          </p>
        </footer>
      </div>
    </article>
  )
}
