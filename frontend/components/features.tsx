'use client'

import Link from 'next/link'
import { XrayViewer } from '@/components/clinical/xray-viewer'

const auditPreview = [
  { time: '09:42', user: 'AI System', action: 'Analysis complete MRN-20240612', icon: 'smart_toy', tint: 'text-[#F59E0B]' },
  { time: '10:15', user: 'Dr. Ahmed Raza', action: 'Signed report CMC-2024-0612', icon: 'draw', tint: 'text-[#2563EB]' },
  { time: '11:00', user: 'H. Sadiq', action: 'Co-signed report CMC-2024-0612', icon: 'workspace_premium', tint: 'text-[#10B981]' },
]

export function Features() {
  return (
    <main className="max-w-7xl mx-auto px-6 pb-28 animate-fade-up">
      <div className="mb-14">
        <span className="label-clinical inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pneumo-sky text-pneumo-primary border border-blue-200/70 mb-4">
          What We Do
        </span>
        <h2 className="text-4xl md:text-5xl font-medium tracking-tight max-w-3xl mb-4 text-[#0F172A]">
          Clinical intelligence for <span className="font-serif italic text-pneumo-primary">modern hospitals.</span>
        </h2>
        <p className="text-slate-600 max-w-2xl leading-relaxed">
          PneumoScan combines AI detection, explainable heatmaps, structured reporting, and dual sign-off so teams can move from scan to certified report without workflow friction.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-5 h-auto md:h-[560px]">
        <div className="md:col-span-2 md:row-span-2 bento-card card-panel rounded-xl p-8 flex flex-col justify-between overflow-hidden relative">
          <div className="relative z-10">
            <div className="w-12 h-12 bg-pneumo-primary/10 text-pneumo-primary rounded-xl flex items-center justify-center mb-6">
              <span className="material-icons-round">bolt</span>
            </div>
            <h3 className="text-2xl font-semibold mb-3 text-[#0F172A]">Sub-Second Processing</h3>
            <p className="text-slate-500 leading-relaxed max-w-xs">
              Optimized inference keeps turnaround low for emergency triage — typical analysis in 8–15 seconds.
            </p>
          </div>
          <div className="mt-8 rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] overflow-hidden">
            <div className="px-4 py-2 border-b border-[#E2E8F0] flex items-center justify-between">
              <span className="label-clinical text-[#64748B]">Live Audit Trail</span>
              <Link href="/dashboard/admin/audit" className="text-[11px] font-semibold text-[#2563EB] hover:underline">
                Open log
              </Link>
            </div>
            <ul className="divide-y divide-[#E2E8F0]">
              {auditPreview.map((e) => (
                <li key={e.action} className="flex items-center gap-3 px-4 py-2.5 text-[12px]">
                  <span className="mono-data text-[#64748B] w-10 shrink-0">{e.time}</span>
                  <span className={`material-icons-round text-[16px] ${e.tint}`} aria-hidden="true">{e.icon}</span>
                  <span className="text-[#0F172A] truncate">{e.action}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="md:col-span-1 md:row-span-1 bento-card card-panel rounded-xl p-8 flex flex-col justify-center text-center">
          <span className="text-5xl font-serif italic text-pneumo-primary mb-2">99.4%</span>
          <span className="text-sm font-bold uppercase tracking-widest text-slate-500">Accuracy Rate</span>
          <p className="text-[11px] text-slate-400 mt-2 leading-relaxed">Retrospective validation — demo data</p>
        </div>

        <div className="md:col-span-1 md:row-span-2 bento-card rounded-xl p-8 flex flex-col justify-between text-white bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] shadow-blue-glow">
          <div>
            <div className="w-12 h-12 bg-white/10 text-white rounded-xl flex items-center justify-center mb-6">
              <span className="material-icons-round">security</span>
            </div>
            <h3 className="text-2xl font-semibold mb-3">Security & Privacy Principles</h3>
            <p className="text-white/85 text-sm leading-relaxed">Designed with healthcare data privacy best practices, including encryption, access control, and secure data handling aligned with GDPR and HIPAA principles.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="text-[10px] border border-white/20 px-2 py-1 rounded">Data Encryption</span>
            <span className="text-[10px] border border-white/20 px-2 py-1 rounded">Secure Access Control</span>
            <span className="text-[10px] border border-white/20 px-2 py-1 rounded">Privacy-First Design</span>
          </div>
        </div>

        <div className="md:col-span-1 md:row-span-1 bento-card card-panel rounded-xl overflow-hidden flex flex-col">
          <div className="p-4 pb-0">
            <h4 className="font-semibold text-sm text-[#0F172A]">AI Viewer Preview</h4>
            <p className="text-xs text-slate-500 mt-1">Same viewer as dashboard</p>
          </div>
          <div className="mt-3 flex-1 min-h-[100px]">
            <XrayViewer viewMode="heatmap" variant="compact" showCorners={false} />
          </div>
          <div className="p-3 border-t border-[#E2E8F0]">
            <Link href="/dashboard/analysis" className="text-[11px] font-semibold text-[#2563EB] hover:underline">
              Open analysis →
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
