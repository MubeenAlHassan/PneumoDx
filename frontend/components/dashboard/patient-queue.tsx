'use client'

import { useState } from 'react'
import Link from 'next/link'

interface Patient {
  id: string
  initials: string
  name: string
  patientId: string
  scanTime: string
  probability: number
  probabilityColor: string
  aiResult: 'Detected' | 'Suspected' | 'Clear'
  status: string
  statusColor: string
}

const patients: Patient[] = [
  {
    id: '1',
    initials: 'SM',
    name: 'Sarah Mitchell',
    patientId: '#PN-2204',
    scanTime: '10:24 AM',
    probability: 94,
    probabilityColor: 'bg-[#EF4444]',
    aiResult: 'Detected',
    status: 'Urgent',
    statusColor: 'badge-flagged'
  },
  {
    id: '2',
    initials: 'RK',
    name: 'Robert Klose',
    patientId: '#PN-2205',
    scanTime: '09:15 AM',
    probability: 42,
    probabilityColor: 'bg-[#F59E0B]',
    aiResult: 'Suspected',
    status: 'Stable',
    statusColor: 'badge-ai-ready'
  },
  {
    id: '3',
    initials: 'EL',
    name: 'Elena Lopez',
    patientId: '#PN-2206',
    scanTime: '08:45 AM',
    probability: 67,
    probabilityColor: 'bg-[#10B981]',
    aiResult: 'Clear',
    status: 'Moderate',
    statusColor: 'badge-in-review'
  },
]

export function PatientQueue() {
  const [activeTab, setActiveTab] = useState('all')

  return (
    <div className="lg:col-span-8 rounded-md overflow-hidden flex flex-col bg-[#FFFFFF] border border-[#E2E8F0]">
      <div className="p-6 border-b border-[#E2E8F0] flex justify-between items-center">
        <h3 className="text-[18px] font-semibold text-[#0F172A]">Cases Requiring Your Attention</h3>
        <div className="flex gap-2">
          <button 
            onClick={() => setActiveTab('all')}
            className={`h-8 text-xs font-medium px-3 rounded-full transition-all ${activeTab === 'all' ? 'bg-[#EFF6FF] text-[#2563EB] border border-[#2563EB]' : 'text-[#64748B] hover:bg-[#F1F5F9]'}`}
          >
            All Cases
          </button>
          <button 
            onClick={() => setActiveTab('urgent')}
            className={`h-8 text-xs font-medium px-3 rounded-full transition-all ${activeTab === 'urgent' ? 'bg-[#EFF6FF] text-[#2563EB] border border-[#2563EB]' : 'text-[#64748B] hover:bg-[#F1F5F9]'}`}
          >
            Urgent
          </button>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="label-clinical text-[#64748B] border-b border-[#E2E8F0]">
              <th className="px-6 py-3 font-medium">Patient</th>
              <th className="px-6 py-3 font-medium text-center">Scan Time</th>
              <th className="px-6 py-3 font-medium">AI Result</th>
              <th className="px-6 py-3 font-medium">Status</th>
              <th className="px-6 py-3 font-medium"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#E2E8F0]">
            {patients.map((patient) => (
              <tr key={patient.id} className="hover:bg-[#F1F5F9] transition-colors group">
                <td className="px-6 py-3.5">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-sm bg-[#F1F5F9] flex items-center justify-center text-[#2563EB] font-bold text-xs border border-[#E2E8F0]">
                      {patient.initials}
                    </div>
                    <div>
                      <p className="text-[14px] font-medium text-[#0F172A]">{patient.name}</p>
                      <p className="mono-data text-[#64748B]">{patient.patientId}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-3.5 text-center mono-data text-[#64748B]">{patient.scanTime}</td>
                <td className="px-6 py-3.5">
                  <div className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${patient.probabilityColor}`} />
                    <span className="text-[14px] text-[#0F172A]">{patient.aiResult}</span>
                    <span className="mono-data text-[#64748B]">{patient.probability}%</span>
                  </div>
                </td>
                <td className="px-6 py-3.5">
                  <span className={`badge-status ${patient.statusColor}`}>
                    <span aria-hidden="true">●</span>
                    {patient.status}
                  </span>
                </td>
                <td className="px-6 py-3.5 text-right">
                  <Link href="/dashboard/analysis" aria-label={`Review case for ${patient.name}`} className="inline-flex text-[#64748B] group-hover:text-[#2563EB] transition-colors rounded-sm p-1">
                    <span className="material-icons-round" aria-hidden="true">chevron_right</span>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
