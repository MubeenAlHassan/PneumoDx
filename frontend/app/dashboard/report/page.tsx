import { ViewTransition } from 'react'
import Link from 'next/link'
import { DashboardShell } from '@/components/dashboard/shell'
import { PageHeader } from '@/components/dashboard/page-header'
import { AiResultBadge } from '@/components/dashboard/badges'
import { DEMO_CASE } from '@/components/clinical/constants'

export const metadata = {
  title: 'Doctor Review & Report | PneumoScan',
  description: 'Review AI findings, compose the clinical report, and apply your digital signature.',
}

const agreement = [
  { id: 'confirm', label: 'Confirm AI Finding', defaultChecked: true },
  { id: 'partial', label: 'Partial Agreement', defaultChecked: false },
  { id: 'disagree', label: 'Disagree', defaultChecked: false },
]

export default function ReportPage() {
  return (
    <ViewTransition>
      <DashboardShell>
        <PageHeader
          eyebrow="Doctor Review & Report"
          title="Compose Clinical"
          serifAccent="Report"
          subtitle="MRN-20240612 · Ayesha Raza"
          backHref="/dashboard/analysis"
          backLabel="Back to AI Analysis"
          actions={
            <Link href="/dashboard/report/preview" className="btn-secondary">
              <span className="material-icons-round text-[18px]" aria-hidden="true">picture_as_pdf</span>
              Preview Certified PDF
            </Link>
          }
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="card-panel p-6">
            <h2 className="label-clinical text-[#64748B] mb-4">Patient Summary</h2>
            <dl className="space-y-2 text-[14px]">
              {[
                ['Name', DEMO_CASE.patientName],
                ['Age', DEMO_CASE.age],
                ['MRN', DEMO_CASE.mrn],
                ['Ward', DEMO_CASE.ward],
                ['Scan', DEMO_CASE.scanDate],
              ].map(([k, v]) => (
                <div key={k} className="flex items-center justify-between">
                  <dt className="text-[#64748B]">{k}</dt>
                  <dd className={`text-[#0F172A] ${k === 'MRN' ? 'mono-data' : ''}`}>{v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="card-panel p-6">
            <h2 className="label-clinical text-[#64748B] mb-4">AI Result Summary</h2>
            <AiResultBadge result="detected" confidence={94} />
            <dl className="mt-4 space-y-2 text-[14px]">
              {[
                ['Confidence', DEMO_CASE.confidence],
                ['Zone', DEMO_CASE.zone],
                ['Severity', DEMO_CASE.severity],
              ].map(([k, v]) => (
                <div key={k} className="flex items-center justify-between">
                  <dt className="text-[#64748B]">{k}</dt>
                  <dd className="text-[#0F172A]">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <form className="mt-6 space-y-6">
          <section className="card-panel p-6">
            <p className="mono-data text-[#2563EB] mb-1">Clinical Report</p>
            <h2 className="font-serif text-[20px] font-semibold text-[#0F172A]">
              {DEMO_CASE.physicianName}, {DEMO_CASE.physicianCredentials}
            </h2>
            <div className="mt-1 mb-6 h-px bg-[#E2E8F0]" aria-hidden="true" />

            <div className="space-y-5">
              <div>
                <label htmlFor="findings" className="field-label">Clinical Findings</label>
                <textarea id="findings" name="findings" rows={4} className="input-field" defaultValue={DEMO_CASE.findings} />
              </div>

              <div>
                <span className="field-label">Diagnosis</span>
                <div className="flex flex-wrap gap-3 mb-4" role="radiogroup" aria-label="Agreement with AI finding">
                  {agreement.map((a) => (
                    <label
                      key={a.id}
                      htmlFor={`agree-${a.id}`}
                      className="flex items-center gap-2.5 h-11 px-4 rounded-sm border border-[#E2E8F0] bg-[#F8FAFC] cursor-pointer text-[14px] text-[#0F172A] has-[:checked]:border-[#2563EB] has-[:checked]:bg-[#EFF6FF] transition-colors"
                    >
                      <input
                        id={`agree-${a.id}`}
                        type="radio"
                        name="agreement"
                        defaultChecked={a.defaultChecked}
                        className="h-4 w-4 accent-[#2563EB]"
                      />
                      {a.label}
                    </label>
                  ))}
                </div>
                <label htmlFor="icd10" className="field-label">ICD-10 Code</label>
                <select id="icd10" name="icd10" className="input-field" defaultValue="J18.1">
                  <option value="J18.1">J18.1 — Lobar pneumonia, unspecified organism</option>
                  <option value="J18.0">J18.0 — Bronchopneumonia, unspecified organism</option>
                  <option value="J15.9">J15.9 — Bacterial pneumonia, unspecified</option>
                  <option value="J12.9">J12.9 — Viral pneumonia, unspecified</option>
                </select>
              </div>

              <div>
                <label htmlFor="recommendations" className="field-label">Recommendations</label>
                <textarea
                  id="recommendations"
                  name="recommendations"
                  rows={4}
                  className="input-field"
                  defaultValue={DEMO_CASE.recommendations.map((r, i) => `${i + 1}. ${r}`).join('\n')}
                />
              </div>

              <div>
                <label htmlFor="followup" className="field-label">Follow-Up Instructions</label>
                <textarea
                  id="followup"
                  name="followup"
                  rows={2}
                  className="input-field"
                  defaultValue="Return immediately if: worsening breathlessness, SpO2 drops below 92%, high fever persists beyond 72h of antibiotics."
                />
              </div>
            </div>
          </section>

          <section className="card-panel p-6">
            <p className="label-clinical text-[#64748B] mb-4">Digital Signature</p>
            <div className="rounded-sm border border-[#E2E8F0] bg-[#F8FAFC] p-5">
              <p className="text-[14px] text-[#0F172A] mb-3">By signing, you confirm that:</p>
              <ul className="space-y-2 text-[13px] text-[#64748B] mb-5">
                {[
                  'You have reviewed the X-ray and AI analysis',
                  'The clinical findings above are accurate to your judgment',
                  'This report will be sent for hospital co-sign certification',
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2">
                    <span className="material-icons-round text-[18px] text-[#10B981]" aria-hidden="true">check</span>
                    {t}
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row sm:items-end gap-4">
                <div>
                  <label htmlFor="sign-pin" className="field-label">Enter your PIN to sign</label>
                  <input
                    id="sign-pin"
                    name="pin"
                    type="password"
                    inputMode="numeric"
                    maxLength={4}
                    placeholder="••••"
                    className="input-field w-32 tracking-[0.5em] text-center font-mono"
                  />
                </div>
                <Link href="/dashboard/admin/cosign" className="btn-primary">
                  <span className="material-icons-round text-[18px]" aria-hidden="true">draw</span>
                  Sign Report — {DEMO_CASE.physicianName}
                </Link>
              </div>
              <p className="mono-data text-[12px] text-[#64748B] mt-4">PMDC No.: {DEMO_CASE.pmdcNo}</p>
            </div>
          </section>
        </form>
      </DashboardShell>
    </ViewTransition>
  )
}
