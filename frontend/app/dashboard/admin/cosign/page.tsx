'use client'

import { ViewTransition } from 'react'
import Link from 'next/link'
import { toast } from 'sonner'
import { DashboardShell } from '@/components/dashboard/shell'
import { PageHeader } from '@/components/dashboard/page-header'
import { StatusBadge, AiResultBadge } from '@/components/dashboard/badges'
import { DEMO_CASE } from '@/components/clinical/constants'
import { SignatureBlock } from '@/components/clinical/signature-block'
import { ReportPreviewDocument } from '@/components/clinical/report-preview-document'

export default function CoSignPage() {
  return (
    <ViewTransition>
      <DashboardShell variant="admin">
        <PageHeader
          eyebrow="Hospital Admin"
          title="Co-Sign &"
          serifAccent="Certification"
          subtitle="MRN-20240612 · Ayesha Raza"
          backHref="/dashboard/admin"
          backLabel="Back to Overview"
          actions={
            <>
              <StatusBadge status="signed" />
              <Link href="/dashboard/report/preview" className="btn-secondary">
                Preview PDF
              </Link>
            </>
          }
        />

        <div className="card-panel p-5 mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <p className="text-[14px] text-[#0F172A]">
                Report submitted by <span className="font-medium">{DEMO_CASE.physicianName}</span>
              </p>
              <p className="mono-data text-[#64748B]">Signed {DEMO_CASE.signedAt}</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-icons-round text-[#10B981] text-[20px]" aria-hidden="true">verified</span>
              <span className="text-[13px] font-medium text-[#10B981]">Signature verified · VALID</span>
              <span className="mono-data text-[#64748B]">Hash: {DEMO_CASE.sigHash}</span>
            </div>
          </div>
        </div>

        <section className="mb-6">
          <ReportPreviewDocument certified={false} compact />
        </section>

        <section className="card-panel p-6 mb-6">
          <p className="label-clinical text-[#64748B] mb-6">Pending Hospital Certification</p>
          <SignatureBlock
            doctor={{
              role: 'Doctor Signature (Verified)',
              name: DEMO_CASE.physicianName,
              credentials: DEMO_CASE.physicianCredentials,
              registryNo: DEMO_CASE.pmdcNo,
              signedAt: DEMO_CASE.signedAt,
              hash: DEMO_CASE.sigHash,
            }}
            hospital={{
              role: 'Hospital Certification (Pending)',
              name: DEMO_CASE.adminName,
              credentials: 'Hospital Administrator',
              seal: true,
            }}
          />
        </section>

        <section className="card-panel p-6">
          <label htmlFor="admin-notes" className="field-label">
            Administrator Notes (optional — appears in audit log only)
          </label>
          <textarea
            id="admin-notes"
            name="adminNotes"
            rows={3}
            className="input-field"
            placeholder="Reviewed and approved for release. No discrepancies."
          />

          <div className="mt-6 flex flex-wrap gap-3">
            <button
              type="button"
              className="btn-secondary"
              onClick={() => toast.info('Report returned to doctor', { description: 'Demo mode' })}
            >
              <span className="material-icons-round text-[18px]" aria-hidden="true">flag</span>
              Return to Doctor
            </button>
            <button
              type="button"
              className="btn-primary"
              onClick={() => toast.success('Report certified', { description: 'PDF generated — demo mode' })}
            >
              <span className="material-icons-round text-[18px]" aria-hidden="true">workspace_premium</span>
              Certify &amp; Generate Report PDF
            </button>
          </div>
        </section>
      </DashboardShell>
    </ViewTransition>
  )
}
