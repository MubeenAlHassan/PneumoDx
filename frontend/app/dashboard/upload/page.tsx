'use client'

import { ViewTransition, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { DashboardShell } from '@/components/dashboard/shell'
import { PageHeader } from '@/components/dashboard/page-header'

const steps = [
  'Pre-processing image',
  'Running CNN inference',
  'Generating confidence map',
  'Building GradCAM heatmap',
  'Compiling result report',
]

function ProcessingState() {
  const router = useRouter()
  const [progress, setProgress] = useState(8)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((p) => Math.min(p + 7, 100))
    }, 450)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    if (progress >= 100) {
      const t = setTimeout(() => router.push('/dashboard/analysis'), 700)
      return () => clearTimeout(t)
    }
  }, [progress, router])

  const activeStep = Math.min(Math.floor((progress / 100) * steps.length), steps.length - 1)

  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="card-panel w-full max-w-lg p-8 text-center">
        <span className="material-icons-round text-[40px] text-[#2563EB] animate-pulse" aria-hidden="true">
          coronavirus
        </span>
        <h2 className="mt-4 text-[18px] font-semibold text-[#0F172A]">AI Model Running Analysis…</h2>
        <p className="mt-1 mono-data text-[#64748B]">Patient: Ayesha Raza · MRN-20240612</p>

        <div className="mt-6 h-2 w-full overflow-hidden rounded-full bg-[#F8FAFC] border border-[#E2E8F0]" role="progressbar" aria-valuenow={progress} aria-valuemin={0} aria-valuemax={100}>
          <div className="h-full rounded-full bg-[#2563EB] transition-all duration-300" style={{ width: `${progress}%` }} />
        </div>
        <p className="mt-2 mono-data text-[#2563EB]">{progress}%</p>

        <ul className="mt-6 space-y-2.5 text-left">
          {steps.map((s, i) => {
            const done = i < activeStep || progress >= 100
            const active = i === activeStep && progress < 100
            return (
              <li key={s} className="flex items-center gap-3 text-[14px]">
                <span
                  className={`material-icons-round text-[18px] ${done ? 'text-[#10B981]' : active ? 'text-[#F59E0B] animate-pulse' : 'text-[#64748B]'}`}
                  aria-hidden="true"
                >
                  {done ? 'check_circle' : active ? 'hourglass_top' : 'radio_button_unchecked'}
                </span>
                <span className={done || active ? 'text-[#0F172A]' : 'text-[#64748B]'}>{s}</span>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default function UploadPage() {
  const [processing, setProcessing] = useState(false)

  return (
    <ViewTransition>
      <DashboardShell>
        <PageHeader
          eyebrow="X-Ray Upload"
          title="Upload Chest"
          serifAccent="X-Ray"
          subtitle="Patient: Ayesha Raza · MRN-20240612 · Pulmonology"
          backHref="/dashboard/patients"
          backLabel="Patient Details"
        />

        {processing ? (
          <ProcessingState />
        ) : (
          <form
            className="space-y-6"
            onSubmit={(e) => {
              e.preventDefault()
              setProcessing(true)
            }}
          >
            <section className="card-panel p-6">
              <h2 className="text-[18px] font-semibold text-[#0F172A]">Upload X-Ray Image</h2>
              <div className="mt-1 mb-6 h-px bg-[#E2E8F0]" aria-hidden="true" />

              <label
                htmlFor="xray-file"
                className="flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-[#E2E8F0] bg-[#F8FAFC] p-12 text-center cursor-pointer hover:border-[#2563EB] transition-colors"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-md bg-[#EFF6FF] border border-[#E2E8F0] text-[#2563EB]">
                  <span className="material-icons-round text-[28px]" aria-hidden="true">cloud_upload</span>
                </span>
                <p className="mt-4 text-[14px] font-medium text-[#0F172A]">Drop DICOM, JPEG, or PNG file here, or click to browse</p>
                <p className="mt-1 mono-data text-[#64748B]">Accepted: .dcm · .jpg · .png · Max 50MB per file</p>
                <input id="xray-file" name="xray" type="file" accept=".dcm,image/jpeg,image/png" className="sr-only" />
              </label>
            </section>

            <section className="card-panel p-6">
              <h2 className="text-[18px] font-semibold text-[#0F172A]">Scan Metadata</h2>
              <div className="mt-1 mb-6 h-px bg-[#E2E8F0]" aria-hidden="true" />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="scan-datetime" className="field-label">Scan Date &amp; Time</label>
                  <input id="scan-datetime" name="scanDateTime" type="datetime-local" className="input-field" />
                </div>
                <div>
                  <label htmlFor="scan-type" className="field-label">Scan Type</label>
                  <select id="scan-type" name="scanType" className="input-field" defaultValue="pa">
                    <option value="pa">PA (Posteroanterior)</option>
                    <option value="ap">AP (Anteroposterior)</option>
                    <option value="lateral">Lateral</option>
                  </select>
                </div>
              </div>

              <div className="mt-5">
                <label htmlFor="equipment" className="field-label">Equipment / Machine ID (optional)</label>
                <input id="equipment" name="equipment" className="input-field" placeholder="Siemens YSIO Max · Serial: SIE-2024-00821" />
              </div>

              <div className="mt-5">
                <label htmlFor="radiologist-notes" className="field-label">Radiologist Notes (optional)</label>
                <textarea
                  id="radiologist-notes"
                  name="radiologistNotes"
                  rows={3}
                  className="input-field"
                  placeholder="Increased opacity in the right lower lobe noted on initial visual review."
                />
              </div>
            </section>

            <div className="flex flex-col items-center gap-3">
              <button type="submit" className="btn-primary w-full sm:w-auto">
                <span className="material-icons-round text-[18px]" aria-hidden="true">bolt</span>
                Upload &amp; Run AI Analysis
              </button>
              <p className="flex items-center gap-1.5 text-[13px] text-[#64748B]">
                <span className="material-icons-round text-[16px]" aria-hidden="true">info</span>
                Analysis typically completes in 8–15 seconds.
              </p>
            </div>
          </form>
        )}
      </DashboardShell>
    </ViewTransition>
  )
}
