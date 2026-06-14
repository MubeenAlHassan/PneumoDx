import { ViewTransition } from 'react'
import { DashboardShell } from '@/components/dashboard/shell'
import { PageHeader } from '@/components/dashboard/page-header'
import { StatusBadge, AiResultBadge } from '@/components/dashboard/badges'

export const metadata = {
  title: 'Hospital Co-Sign | PneumoScan',
  description: 'Review and certify a doctor-signed diagnostic report.',
}

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
          actions={<StatusBadge status="signed" />}
        />

        {/* Signature verification banner */}
        <div className="card-panel p-5 mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <p className="text-[14px] text-[#0F172A]">
                Report submitted by <span className="font-medium">Dr. Ahmed Raza</span>
              </p>
              <p className="mono-data text-[#64748B]">Signed 14/06/2024 10:15 PKT</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-icons-round text-[#10B981] text-[20px]" aria-hidden="true">verified</span>
              <span className="text-[13px] font-medium text-[#10B981]">Signature verified · VALID</span>
              <span className="mono-data text-[#64748B]">Hash: 4f82…a91c</span>
            </div>
          </div>
        </div>

        {/* Read-only report preview */}
        <section className="card-panel overflow-hidden mb-6">
          <div className="flex items-center justify-between px-6 py-3 border-b border-[#E2E8F0] bg-[#F8FAFC]">
            <p className="label-clinical text-[#64748B]">Report Preview — read-only</p>
            <span className="flex items-center gap-1 mono-data text-[#64748B]">
              <span className="material-icons-round text-[16px]" aria-hidden="true">lock</span>
              Locked after doctor signature
            </span>
          </div>
          <div className="p-6 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="mono-data text-[#2563EB]">CMC-2024-0612-001</p>
                <h2 className="font-serif text-[20px] font-semibold text-[#0F172A]">Radiology Report — Chest X-Ray (PA View)</h2>
              </div>
              <AiResultBadge result="detected" confidence={94} />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <dl className="space-y-2 text-[14px]">
                {[
                  ['Patient', 'Ayesha Raza'],
                  ['MRN', 'MRN-20240612'],
                  ['Age / Gender', '34 · Female'],
                  ['Department', 'Pulmonology'],
                ].map(([k, v]) => (
                  <div key={k} className="flex items-center justify-between">
                    <dt className="text-[#64748B]">{k}</dt>
                    <dd className="text-[#0F172A]">{v}</dd>
                  </div>
                ))}
              </dl>
              <dl className="space-y-2 text-[14px]">
                {[
                  ['Diagnosis', 'J18.1 — Lobar Pneumonia'],
                  ['Severity', 'Moderate'],
                  ['Zone', 'Right Lower Lobe'],
                  ['Scan Date', '14/06/2024 09:30'],
                ].map(([k, v]) => (
                  <div key={k} className="flex items-center justify-between">
                    <dt className="text-[#64748B]">{k}</dt>
                    <dd className="text-[#0F172A]">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="border-t border-[#E2E8F0] pt-5">
              <p className="label-clinical text-[#64748B] mb-2">Clinical Findings</p>
              <p className="text-[14px] leading-relaxed text-[#0F172A]">
                Chest X-Ray (PA view) shows increased opacity and consolidation in the right lower lobe consistent with lobar
                pneumonia. Air bronchograms are visible. No pleural effusion. Left lung field appears clear.
              </p>
            </div>

            <div className="border-t border-[#E2E8F0] pt-5">
              <p className="label-clinical text-[#64748B] mb-2">Signing Physician</p>
              <p className="text-[14px] text-[#0F172A]">Dr. Ahmed Raza, MBBS, FCPS (Pulmonology)</p>
              <p className="mono-data text-[#64748B]">PMDC No.: 49281 · Sig Hash: 4f82b1…a91c PKI</p>
            </div>
          </div>
        </section>

        {/* Administrator notes + actions */}
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
            <button type="button" className="btn-secondary">
              <span className="material-icons-round text-[18px]" aria-hidden="true">flag</span>
              Return to Doctor
            </button>
            <button type="button" className="btn-primary">
              <span className="material-icons-round text-[18px]" aria-hidden="true">workspace_premium</span>
              Certify &amp; Generate Report PDF
            </button>
          </div>
        </section>
      </DashboardShell>
    </ViewTransition>
  )
}
