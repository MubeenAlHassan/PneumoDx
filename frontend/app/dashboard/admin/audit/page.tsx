import { ViewTransition } from 'react'
import { DashboardShell } from '@/components/dashboard/shell'
import { PageHeader } from '@/components/dashboard/page-header'

export const metadata = {
  title: 'Audit Log | PneumoScan',
  description: 'Immutable activity trail for compliance and review.',
}

const entries = [
  { time: '14/06/24 11:00', user: 'H. Sadiq (Admin)', icon: 'workspace_premium', tint: 'text-[#10B981]', action: 'Co-signed report CMC-2024-0612' },
  { time: '14/06/24 10:15', user: 'Dr. Ahmed Raza', icon: 'draw', tint: 'text-[#2563EB]', action: 'Signed report CMC-2024-0612' },
  { time: '14/06/24 09:42', user: 'AI System', icon: 'smart_toy', tint: 'text-[#F59E0B]', action: 'Analysis complete MRN-20240612' },
  { time: '14/06/24 09:30', user: 'Dr. Ahmed Raza', icon: 'cloud_upload', tint: 'text-[#64748B]', action: 'X-ray uploaded MRN-20240612' },
  { time: '14/06/24 09:15', user: 'Reception (Nadia)', icon: 'person_add', tint: 'text-[#64748B]', action: 'Patient registered MRN-20240612' },
]

export default function AuditLogPage() {
  return (
    <ViewTransition>
      <DashboardShell variant="admin">
        <PageHeader
          eyebrow="Hospital Admin"
          title="Audit"
          serifAccent="Log"
          subtitle="Immutable record of every action across the hospital."
          actions={
            <>
              <select aria-label="Filter audit log" className="input-field w-40">
                <option value="">All actions</option>
                <option>Sign-offs</option>
                <option>Uploads</option>
                <option>Registrations</option>
              </select>
              <button className="btn-secondary">
                <span className="material-icons-round text-[18px]" aria-hidden="true">download</span>
                Export CSV
              </button>
            </>
          }
        />

        <div className="card-panel overflow-hidden">
          <div className="overflow-x-auto max-h-[520px] overflow-y-auto">
            <table className="w-full text-left">
              <thead className="sticky top-0 bg-white z-10">
                <tr className="label-clinical text-[#64748B] border-b border-[#E2E8F0]">
                  <th className="px-6 py-3 font-medium">Time (PKT)</th>
                  <th className="px-6 py-3 font-medium">User</th>
                  <th className="px-6 py-3 font-medium">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E2E8F0]">
                {entries.map((e, i) => (
                  <tr key={i} className={`hover:bg-[#F1F5F9] transition-colors ${i % 2 === 1 ? 'bg-[#FAFBFC]' : ''}`}>
                    <td className="px-6 py-3.5 mono-data text-[#64748B] whitespace-nowrap">{e.time}</td>
                    <td className="px-6 py-3.5 text-[14px] text-[#0F172A] whitespace-nowrap">{e.user}</td>
                    <td className="px-6 py-3.5">
                      <span className="flex items-center gap-2 text-[14px] text-[#0F172A]">
                        <span className={`material-icons-round text-[18px] ${e.tint}`} aria-hidden="true">{e.icon}</span>
                        {e.action}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </DashboardShell>
    </ViewTransition>
  )
}
