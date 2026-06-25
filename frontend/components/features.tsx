'use client'

import Link from 'next/link'
import { XrayViewer } from '@/components/clinical/xray-viewer'

export function Features() {
  return (
    <section id="technology" className="scroll-mt-28 max-w-7xl mx-auto px-6 pb-20 md:pb-28">
      <div className="mb-14 text-center max-w-3xl mx-auto">
        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#64748B] mb-4">What we do</p>
        <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-medium tracking-tight mb-4 text-[#0F172A] leading-[1.12]">
          Clinical intelligence for <span className="font-serif italic text-pneumo-primary">modern hospitals.</span>
        </h2>
        <p className="text-[16px] text-[#64748B] leading-relaxed">
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
          <div className="mt-8 bg-pneumo-primary/5 rounded-2xl h-48 border border-pneumo-primary/10 overflow-hidden relative">
            <div className="absolute inset-0 flex items-end px-4 gap-2">
              <div className="w-full bg-pneumo-primary/20 h-[40%] rounded-t-lg" />
              <div className="w-full bg-pneumo-primary/30 h-[65%] rounded-t-lg" />
              <div className="w-full bg-pneumo-primary/40 h-[50%] rounded-t-lg" />
              <div className="w-full bg-pneumo-primary/50 h-[85%] rounded-t-lg animate-pulse" />
              <div className="w-full bg-pneumo-primary/20 h-[30%] rounded-t-lg" />
              <div className="w-full bg-pneumo-primary/60 h-[75%] rounded-t-lg" />
            </div>
            <div className="absolute top-4 right-4 text-[10px] font-mono text-pneumo-primary font-bold">LIVE ACTIVITY</div>
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
    </section>
  )
}
