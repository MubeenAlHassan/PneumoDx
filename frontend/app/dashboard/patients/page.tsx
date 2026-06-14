import { ViewTransition } from 'react'
import Link from 'next/link'
import { DashboardShell } from '@/components/dashboard/shell'
import { PageHeader } from '@/components/dashboard/page-header'
import { StatusBadge, type ReportStatus } from '@/components/dashboard/badges'

const patients: {
  name: string
  mrn: string
  age: number
  gender: string
  ward: string
  lastScan: string
  status: ReportStatus
}[] = [
  { name: 'Ayesha Raza', mrn: 'MRN-20240612', age: 34, gender: 'Female', ward: 'Pulmonology', lastScan: '14 Jun 2024', status: 'ai-ready' },
  { name: 'Tariq Mehmood', mrn: 'MRN-20240609', age: 58, gender: 'Male', ward: 'Pulmonology', lastScan: '11 Jun 2024', status: 'in-review' },
  { name: 'Sara Iqbal', mrn: 'MRN-20240611', age: 27, gender: 'Female', ward: 'General Med', lastScan: '13 Jun 2024', status: 'signed' },
  { name: 'Fatima Noor', mrn: 'MRN-20240608', age: 45, gender: 'Female', ward: 'Radiology', lastScan: '10 Jun 2024', status: 'certified' },
  { name: 'Bilal Anwar', mrn: 'MRN-20240607', age: 63, gender: 'Male', ward: 'Pulmonology', lastScan: '09 Jun 2024', status: 'flagged' },
]

export const metadata = {
  title: 'Patients | PneumoScan',
  description: 'Manage registered patients and their diagnostic status.',
}

export default function PatientsPage() {
  return (
    <ViewTransition>
      <DashboardShell>
        <PageHeader
          eyebrow="Patient Management"
          title="Registered"
          serifAccent="Patients"
          subtitle="Search, filter, and open patient cases across departments."
          actions={
            <Link href="/dashboard/create" className="btn-primary">
              <span className="material-icons-round text-[18px]" aria-hidden="true">
                person_add
              </span>
              Register New Patient
            </Link>
          }
        />

        <div className="card-panel overflow-hidden">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 p-4 border-b border-[#E2E8F0]">
            <div className="relative flex-1">
              <label htmlFor="patient-search" className="sr-only">
                Search patients
              </label>
              <span className="material-icons-round absolute left-3 top-1/2 -translate-y-1/2 text-[#64748B] text-[20px]" aria-hidden="true">
                search
              </span>
              <input
                id="patient-search"
                type="search"
                placeholder="Search by name or MRN…"
                className="input-field pl-10"
              />
            </div>
            <select aria-label="Filter by ward" className="input-field sm:w-48">
              <option value="">All wards</option>
              <option>Pulmonology</option>
              <option>Radiology</option>
              <option>General Med</option>
            </select>
          </div>

          <div className="overflow-x-auto max-h-[480px] overflow-y-auto">
            <table className="w-full text-left">
              <thead className="sticky top-0 bg-white z-10">
                <tr className="label-clinical text-[#64748B] border-b border-[#E2E8F0]">
                  <th className="px-6 py-3 font-medium">Patient</th>
                  <th className="px-6 py-3 font-medium">Age / Gender</th>
                  <th className="px-6 py-3 font-medium">Ward</th>
                  <th className="px-6 py-3 font-medium">Last Scan</th>
                  <th className="px-6 py-3 font-medium">Status</th>
                  <th className="px-6 py-3 font-medium text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E2E8F0]">
                {patients.map((p, i) => (
                  <tr key={p.mrn} className={`hover:bg-[#F1F5F9] transition-colors group ${i % 2 === 1 ? 'bg-[#FAFBFC]' : ''}`}>
                    <td className="px-6 py-3.5">
                      <p className="text-[14px] font-medium text-[#0F172A]">{p.name}</p>
                      <p className="mono-data text-[#64748B]">{p.mrn}</p>
                    </td>
                    <td className="px-6 py-3.5 text-[14px] text-[#0F172A]">
                      {p.age} · <span className="text-[#64748B]">{p.gender}</span>
                    </td>
                    <td className="px-6 py-3.5 text-[14px] text-[#0F172A]">{p.ward}</td>
                    <td className="px-6 py-3.5 mono-data text-[#64748B]">{p.lastScan}</td>
                    <td className="px-6 py-3.5">
                      <StatusBadge status={p.status} />
                    </td>
                    <td className="px-6 py-3.5 text-right">
                      <Link
                        href="/dashboard/analysis"
                        className="inline-flex text-[#64748B] group-hover:text-[#2563EB] transition-colors rounded-sm p-1"
                        aria-label={`Open case for ${p.name}`}
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
        </div>
      </DashboardShell>
    </ViewTransition>
  )
}
