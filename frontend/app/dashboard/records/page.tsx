import { ViewTransition } from 'react'
import Link from 'next/link'
import { DashboardShell } from '@/components/dashboard/shell'
import { PageHeader } from '@/components/dashboard/page-header'
import { AiResultBadge, type AiResult } from '@/components/dashboard/badges'

const records: { id: string; patient: string; mrn: string; date: string; result: AiResult; confidence: number }[] = [
  { id: 'CMC-2024-0612-001', patient: 'Ayesha Raza', mrn: 'MRN-20240612', date: '14 Jun 2024', result: 'detected', confidence: 94 },
  { id: 'CMC-2024-0611-004', patient: 'Sara Iqbal', mrn: 'MRN-20240611', date: '13 Jun 2024', result: 'clear', confidence: 91 },
  { id: 'CMC-2024-0610-002', patient: 'Elena Lopez', mrn: 'MRN-20240610', date: '12 Jun 2024', result: 'suspected', confidence: 67 },
  { id: 'CMC-2024-0609-007', patient: 'Tariq Mehmood', mrn: 'MRN-20240609', date: '11 Jun 2024', result: 'detected', confidence: 96 },
]

export const metadata = {
  title: 'Scans | PneumoScan',
  description: 'Browse and export analysed chest X-ray records.',
}

export default function RecordsPage() {
  return (
    <ViewTransition>
      <DashboardShell>
        <PageHeader
          eyebrow="Scans"
          title="Diagnostic"
          serifAccent="History"
          subtitle="Review historical scan results and filter cases for follow-up."
          actions={
            <button className="btn-secondary">
              <span className="material-icons-round text-[18px]" aria-hidden="true">
                download
              </span>
              Export CSV
            </button>
          }
        />

        <section className="card-panel overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="label-clinical text-[#64748B] border-b border-[#E2E8F0]">
                  <th className="px-6 py-3 font-medium">Report No.</th>
                  <th className="px-6 py-3 font-medium">Patient</th>
                  <th className="px-6 py-3 font-medium">Scan Date</th>
                  <th className="px-6 py-3 font-medium">AI Result</th>
                  <th className="px-6 py-3 font-medium text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E2E8F0]">
                {records.map((r) => (
                  <tr key={r.id} className="hover:bg-[#F1F5F9] transition-colors group">
                    <td className="px-6 py-3.5 mono-data text-[#2563EB]">{r.id}</td>
                    <td className="px-6 py-3.5">
                      <p className="text-[14px] font-medium text-[#0F172A]">{r.patient}</p>
                      <p className="mono-data text-[#64748B]">{r.mrn}</p>
                    </td>
                    <td className="px-6 py-3.5 mono-data text-[#64748B]">{r.date}</td>
                    <td className="px-6 py-3.5">
                      <AiResultBadge result={r.result} confidence={r.confidence} />
                    </td>
                    <td className="px-6 py-3.5 text-right">
                      <Link
                        href="/dashboard/analysis"
                        className="text-[#64748B] group-hover:text-[#2563EB] transition-colors rounded-sm p-1 inline-flex"
                        aria-label={`Open report for ${r.patient}`}
                      >
                        <span className="material-icons-round" aria-hidden="true">
                          chevron_right
                        </span>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </DashboardShell>
    </ViewTransition>
  )
}
