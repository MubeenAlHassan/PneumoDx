import { ViewTransition } from 'react'
import Link from 'next/link'
import { DashboardShell } from '@/components/dashboard/shell'
import { PageHeader } from '@/components/dashboard/page-header'
import { StatCard } from '@/components/dashboard/stat-card'

export const metadata = {
  title: 'Hospital Overview | PneumoScan',
  description: 'Hospital-wide diagnostic activity, co-sign queue, and detection statistics.',
}

const coSignQueue = [
  { patient: 'Tariq Mehmood', mrn: 'MRN-20240609', doctor: 'Dr. Ahmed Raza', signed: '2h ago' },
  { patient: 'Fatima Noor', mrn: 'MRN-20240608', doctor: 'Dr. Sara Khan', signed: '5h ago' },
]

const detection = [
  { label: 'Pneumonia Detected', count: 62, total: 147, color: '#EF4444' },
  { label: 'Suspected', count: 18, total: 147, color: '#F59E0B' },
  { label: 'Clear / Normal', count: 67, total: 147, color: '#10B981' },
]

export default function AdminDashboardPage() {
  return (
    <ViewTransition>
      <DashboardShell variant="admin">
        <PageHeader
          eyebrow="Hospital Admin"
          title="Hospital"
          serifAccent="Overview"
          subtitle="Activity across City Medical Centre — last 30 days."
          actions={
            <button className="btn-secondary">
              <span className="material-icons-round text-[18px]" aria-hidden="true">download</span>
              Export
            </button>
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          <StatCard icon="badge" label="Doctors Active" value="8" colSpan="lg:col-span-3" />
          <StatCard icon="groups" label="Patients Total" value="147" trend="+12 this wk" colSpan="lg:col-span-3" />
          <StatCard icon="task_alt" label="Reports Signed" value="23" colSpan="lg:col-span-3" />
          <StatCard icon="pending_actions" label="Pending Sign-off" value="12" colSpan="lg:col-span-3" />

          {/* Co-sign queue */}
          <section className="lg:col-span-7 card-panel overflow-hidden">
            <div className="p-6 border-b border-[#E2E8F0]">
              <h3 className="text-[18px] font-semibold text-[#0F172A]">Reports Awaiting Hospital Co-Sign</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="label-clinical text-[#64748B] border-b border-[#E2E8F0]">
                    <th className="px-6 py-3 font-medium">Patient</th>
                    <th className="px-6 py-3 font-medium">Doctor</th>
                    <th className="px-6 py-3 font-medium">Signed</th>
                    <th className="px-6 py-3 font-medium text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E2E8F0]">
                  {coSignQueue.map((r) => (
                    <tr key={r.mrn} className="hover:bg-[#F1F5F9] transition-colors">
                      <td className="px-6 py-3.5">
                        <p className="text-[14px] font-medium text-[#0F172A]">{r.patient}</p>
                        <p className="mono-data text-[#64748B]">{r.mrn}</p>
                      </td>
                      <td className="px-6 py-3.5 text-[14px] text-[#0F172A]">{r.doctor}</td>
                      <td className="px-6 py-3.5 mono-data text-[#64748B]">{r.signed}</td>
                      <td className="px-6 py-3.5 text-right">
                        <Link href="/dashboard/admin/cosign" className="btn-ghost justify-end">
                          Co-sign
                          <span className="material-icons-round text-[16px]" aria-hidden="true">arrow_forward</span>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Detection stats */}
          <section className="lg:col-span-5 card-panel p-6">
            <h3 className="text-[18px] font-semibold text-[#0F172A] mb-5">Detection Stats — Last 30 Days</h3>
            <div className="space-y-5">
              {detection.map((d) => (
                <div key={d.label}>
                  <div className="flex items-center justify-between text-[13px] mb-1.5">
                    <span className="text-[#0F172A]">{d.label}</span>
                    <span className="mono-data text-[#64748B]">{d.count} cases</span>
                  </div>
                  <div className="h-2.5 w-full rounded-full bg-[#F8FAFC] border border-[#E2E8F0] overflow-hidden">
                    <div className="h-full rounded-full" style={{ width: `${(d.count / d.total) * 100}%`, background: d.color }} />
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </DashboardShell>
    </ViewTransition>
  )
}
