'use client'

import { useState } from 'react'

interface Patient {
  id: string
  initials: string
  name: string
  patientId: string
  scanTime: string
  probability: number
  probabilityColor: string
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
    probabilityColor: 'bg-red-500',
    status: 'Urgent',
    statusColor: 'bg-red-100 dark:bg-red-500/10 text-red-600'
  },
  {
    id: '2',
    initials: 'RK',
    name: 'Robert Klose',
    patientId: '#PN-2205',
    scanTime: '09:15 AM',
    probability: 42,
    probabilityColor: 'bg-pneumo-primary',
    status: 'Stable',
    statusColor: 'bg-emerald-100 dark:bg-emerald-500/10 text-emerald-600'
  },
  {
    id: '3',
    initials: 'EL',
    name: 'Elena Lopez',
    patientId: '#PN-2206',
    scanTime: '08:45 AM',
    probability: 67,
    probabilityColor: 'bg-amber-500',
    status: 'Moderate',
    statusColor: 'bg-amber-100 dark:bg-amber-500/10 text-amber-600'
  },
]

export function PatientQueue() {
  const [activeTab, setActiveTab] = useState('all')

  return (
    <div className="lg:col-span-8 bento-card rounded-3xl overflow-hidden flex flex-col glass-panel border border-slate-200/60 dark:border-slate-800/60">
      <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white">Active Patient Queue</h3>
        <div className="flex gap-2">
          <button 
            onClick={() => setActiveTab('all')}
            className={`h-8 text-xs font-bold px-3 rounded-full transition-all ${activeTab === 'all' ? 'bg-pneumo-primary/10 text-pneumo-primary' : 'text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'}`}
          >
            All Cases
          </button>
          <button 
            onClick={() => setActiveTab('urgent')}
            className={`h-8 text-xs font-bold px-3 rounded-full transition-all ${activeTab === 'urgent' ? 'bg-pneumo-primary/10 text-pneumo-primary' : 'text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'}`}
          >
            Urgent
          </button>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="text-[10px] uppercase tracking-widest text-slate-400 border-b border-slate-50 dark:border-slate-800">
              <th className="px-6 py-3.5 font-bold">Patient & ID</th>
              <th className="px-6 py-3.5 font-bold text-center">Scan Time</th>
              <th className="px-6 py-3.5 font-bold">AI Probability</th>
              <th className="px-6 py-3.5 font-bold">Status</th>
              <th className="px-6 py-3.5 font-bold"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50 dark:divide-slate-800/50">
            {patients.map((patient) => (
              <tr key={patient.id} className="hover:bg-pneumo-primary/5 transition-colors group">
                <td className="px-6 py-3.5">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-pneumo-primary font-bold text-xs">
                      {patient.initials}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900 dark:text-white">{patient.name}</p>
                      <p className="text-xs text-slate-500">ID: {patient.patientId}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-3.5 text-center text-sm text-slate-500">{patient.scanTime}</td>
                <td className="px-6 py-3.5">
                  <div className="flex items-center gap-2">
                    <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden max-w-[100px]">
                      <div className={`${patient.probabilityColor} h-full`} style={{ width: `${patient.probability}%` }}></div>
                    </div>
                    <span className={`text-xs font-bold ${patient.probabilityColor === 'bg-pneumo-primary' ? 'text-pneumo-primary' : ''}`}>
                      {patient.probability}%
                    </span>
                  </div>
                </td>
                <td className="px-6 py-3.5">
                  <span className={`text-[10px] font-bold uppercase px-2.5 py-1 rounded-full ${patient.statusColor}`}>
                    {patient.status}
                  </span>
                </td>
                <td className="px-6 py-3.5 text-right">
                  <button type="button" aria-label={`View case for ${patient.name}`} className="text-slate-300 group-hover:text-pneumo-primary transition-colors rounded-md p-1">
                    <span className="material-icons-round" aria-hidden="true">chevron_right</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
