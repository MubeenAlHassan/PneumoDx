import { ViewTransition } from 'react'
import { DashboardShell } from '@/components/dashboard/shell'
import { PageHeader } from '@/components/dashboard/page-header'

export const metadata = {
  title: 'Manage Doctors | PneumoScan',
  description: 'Register and manage doctors affiliated with the hospital.',
}

const doctors = [
  { name: 'Dr. Ahmed Raza', specialty: 'Pulmonology', pmdc: '49281', reports: 38, active: true },
  { name: 'Dr. Sara Khan', specialty: 'Radiology', pmdc: '52104', reports: 22, active: true },
  { name: 'Dr. Imran Ali', specialty: 'General Medicine', pmdc: '41892', reports: 15, active: false },
]

export default function DoctorsPage() {
  return (
    <ViewTransition>
      <DashboardShell variant="admin">
        <PageHeader
          eyebrow="Hospital Profile"
          title="Manage"
          serifAccent="Doctors"
          subtitle="Register practitioners and control their access to the platform."
          actions={
            <button className="btn-primary">
              <span className="material-icons-round text-[18px]" aria-hidden="true">person_add</span>
              Register New Doctor
            </button>
          }
        />

        <div className="card-panel overflow-hidden">
          <div className="p-4 border-b border-[#E2E8F0]">
            <div className="relative max-w-sm">
              <label htmlFor="doctor-search" className="sr-only">Search doctors</label>
              <span className="material-icons-round absolute left-3 top-1/2 -translate-y-1/2 text-[#64748B] text-[20px]" aria-hidden="true">search</span>
              <input id="doctor-search" type="search" placeholder="Search doctors…" className="input-field pl-10" />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="label-clinical text-[#64748B] border-b border-[#E2E8F0]">
                  <th className="px-6 py-3 font-medium">Doctor</th>
                  <th className="px-6 py-3 font-medium">Specialty</th>
                  <th className="px-6 py-3 font-medium">PMDC No.</th>
                  <th className="px-6 py-3 font-medium text-center">Reports</th>
                  <th className="px-6 py-3 font-medium">Status</th>
                  <th className="px-6 py-3 font-medium text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E2E8F0]">
                {doctors.map((d) => (
                  <tr key={d.pmdc} className="hover:bg-[#F1F5F9] transition-colors group">
                    <td className="px-6 py-3.5 text-[14px] font-medium text-[#0F172A]">{d.name}</td>
                    <td className="px-6 py-3.5 text-[14px] text-[#64748B]">{d.specialty}</td>
                    <td className="px-6 py-3.5 mono-data text-[#64748B]">{d.pmdc}</td>
                    <td className="px-6 py-3.5 text-center mono-data text-[#0F172A]">{d.reports}</td>
                    <td className="px-6 py-3.5">
                      <span className={`badge-status ${d.active ? 'badge-signed' : 'badge-in-review'}`}>
                        <span aria-hidden="true">●</span>
                        {d.active ? 'Active' : 'Inactive'}
                      </span>
                    </td>
                    <td className="px-6 py-3.5 text-right">
                      <button
                        type="button"
                        aria-label={`Manage ${d.name}`}
                        className="inline-flex text-[#64748B] group-hover:text-[#2563EB] transition-colors rounded-sm p-1"
                      >
                        <span className="material-icons-round" aria-hidden="true">more_horiz</span>
                      </button>
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
